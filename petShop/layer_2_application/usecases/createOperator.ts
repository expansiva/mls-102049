/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createOperator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOperatorRepository } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export interface CreateOperatorInput {
  name: string;
  email?: string;
  phone?: string;
  active: boolean;
}

export interface CreateOperatorOutput {
  operatorId: string;
  name: string;
  email: string | null;
  phone: string | null;
  active: boolean;
  createdAt: string;
}

export async function createOperator(
  ctx: RequestContext,
  input: CreateOperatorInput,
): Promise<CreateOperatorOutput> {
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'O nome do operador é obrigatório.',
      400,
      { field: 'name' },
    );
  }

  const operators = resolveRepository<IOperatorRepository>(ctx, 'Operator');
  const now = ctx.clock.nowIso();

  const operator: Operator = {
    operatorId: ctx.idGenerator.newId(),
    name: input.name.trim(),
    email: input.email?.trim() || null,
    phone: input.phone?.trim() || null,
    active: input.active,
    createdAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await operators.save(operator);
  });

  return {
    operatorId: operator.operatorId,
    name: operator.name,
    email: operator.email,
    phone: operator.phone,
    active: operator.active,
    createdAt: operator.createdAt,
  };
}
