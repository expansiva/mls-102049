/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseOperators.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOperatorRepository, OperatorFilter } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export interface BrowseOperatorsInput {
  activeFilter?: boolean;
}

export interface BrowseOperatorsOutputItem {
  operatorId: string;
  name: string;
  email: string | null;
  phone: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BrowseOperatorsOutput {
  operators: BrowseOperatorsOutputItem[];
}

export async function browseOperators(
  ctx: RequestContext,
  input: BrowseOperatorsInput,
): Promise<BrowseOperatorsOutput> {
  const actorId = ctx.sessionContext.actorSession.actorId;
  if (!actorId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Authenticated actor is required to browse operators.',
      401,
      { ruleId: 'requiresAuthenticatedActor' },
    );
  }

  const operators = resolveRepository<IOperatorRepository>(ctx, 'Operator');

  const filter: OperatorFilter | undefined =
    input.activeFilter !== undefined ? { active: input.activeFilter } : undefined;

  const list = await operators.list(filter);

  const projected: BrowseOperatorsOutputItem[] = list.map((op: Operator) => ({
    operatorId: op.operatorId,
    name: op.name,
    email: op.email,
    phone: op.phone,
    active: op.active,
    createdAt: op.createdAt,
    updatedAt: op.updatedAt,
  }));

  return { operators: projected };
}
