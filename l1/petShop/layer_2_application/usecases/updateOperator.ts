/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateOperator.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOperatorRepository } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export interface UpdateOperatorInput {
  operatorId: string;
  name: string;
  email?: string;
  phone?: string;
  active: boolean;
}

export interface UpdateOperatorOutput {
  operatorId: string;
  name: string;
  email: string | null;
  phone: string | null;
  active: boolean;
  updatedAt: string;
}

export async function updateOperator(
  ctx: RequestContext,
  input: UpdateOperatorInput,
): Promise<UpdateOperatorOutput> {
  if (!input.operatorId || input.operatorId.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'operatorId é obrigatório e não pode ser vazio.',
      400,
      { field: 'operatorId' },
    );
  }

  const operators = resolveRepository<IOperatorRepository>(ctx, 'Operator');
  const now = ctx.clock.nowIso();

  const updatedOperator = await ctx.data.runInTransaction(async () => {
    const existing = await operators.getById(input.operatorId);
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        'Operador não encontrado para o operatorId informado.',
        404,
        { operatorId: input.operatorId },
      );
    }

    const operator: Operator = {
      ...existing,
      name: input.name,
      active: input.active,
      email: input.email !== undefined ? input.email : existing.email,
      phone: input.phone !== undefined ? input.phone : existing.phone,
      updatedAt: now,
    };

    await operators.save(operator);
    return operator;
  });

  return {
    operatorId: updatedOperator.operatorId,
    name: updatedOperator.name,
    email: updatedOperator.email,
    phone: updatedOperator.phone,
    active: updatedOperator.active,
    updatedAt: updatedOperator.updatedAt,
  };
}
