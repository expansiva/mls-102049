/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/assignOperatorToShift.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IShiftAssignmentRepository } from '/_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.js';
import type { IOperatorRepository } from '/_102049_/l1/petShop/layer_2_application/ports/operatorRepository.js';
import { operatorCanBeAllocated } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export interface AssignOperatorToShiftInput {
  operatorId: string;
  shiftId: string;
}

export interface AssignOperatorToShiftOutput {
  shiftAssignmentId: string;
  operatorId: string;
  shiftId: string;
  createdAt: string;
}

/**
 * Invariant: an operator cannot be assigned to the same shift more than once.
 * Inlined here to avoid importing from the shiftAssignment domain entity.
 */
function hasDuplicateOperatorShift(
  assignments: Array<{ operatorId: string; shiftId: string }>,
  operatorId: string,
  shiftId: string,
): boolean {
  return assignments.some(
    (a) => a.operatorId === operatorId && a.shiftId === shiftId,
  );
}

export async function assignOperatorToShift(
  ctx: RequestContext,
  input: AssignOperatorToShiftInput,
): Promise<AssignOperatorToShiftOutput> {
  const operators = resolveRepository<IOperatorRepository>(ctx, 'Operator');
  const shiftAssignments = resolveRepository<IShiftAssignmentRepository>(ctx, 'ShiftAssignment');

  // Step 1: Load Operator by operatorId; validate it exists and is active.
  const operator = await operators.getById(input.operatorId);
  if (!operator) {
    throw new AppError(
      'NOT_FOUND',
      `Operator not found: ${input.operatorId}`,
      404,
      { operatorId: input.operatorId },
    );
  }
  if (!operatorCanBeAllocated(operator)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Operator is not active and cannot be allocated to a shift.',
      400,
      { operatorId: input.operatorId, ruleId: 'operatorIsActive' },
    );
  }

  // Step 2: Load Shift by shiftId via MDM; validate it exists and is active.
  const shiftEntity = await ctx.mdm.entity.get({ mdmId: input.shiftId });
  if (!shiftEntity) {
    throw new AppError(
      'NOT_FOUND',
      `Shift not found: ${input.shiftId}`,
      404,
      { shiftId: input.shiftId },
    );
  }
  if (String(shiftEntity.details.status) !== 'Active') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Shift is not active and cannot receive operator assignments.',
      400,
      { shiftId: input.shiftId, status: String(shiftEntity.details.status) },
    );
  }

  // Step 3: operatorMultipleShiftsAllowed — the operator may be assigned to
  // multiple shifts including overlapping ones. This rule does NOT block creation.
  // (No action needed — documented for traceability.)

  // Step 4: schedulingCapacityByOperators — adding an operator increases the
  // shift's capacity by one. There is no upper cap that blocks this assignment.
  // (No action needed — documented for traceability.)

  // Domain invariant: an operator cannot be assigned to the same shift more than once.
  const existingAssignments = await shiftAssignments.findByOperatorId(input.operatorId);
  if (hasDuplicateOperatorShift(existingAssignments, input.operatorId, input.shiftId)) {
    throw new AppError(
      'CONFLICT',
      'Operator is already assigned to this shift.',
      409,
      { operatorId: input.operatorId, shiftId: input.shiftId, ruleId: 'hasDuplicateOperatorShift' },
    );
  }

  // Step 5: Generate ids and timestamps.
  const now = ctx.clock.nowIso();
  const shiftAssignmentId = ctx.idGenerator.newId();

  // Step 6: Create the ShiftAssignment record inside a single transaction.
  await ctx.data.runInTransaction(async () => {
    await shiftAssignments.save({
      shiftAssignmentId,
      operatorId: input.operatorId,
      shiftId: input.shiftId,
      createdAt: now,
      updatedAt: now,
    });
  });

  // Step 7: Return the output.
  return {
    shiftAssignmentId,
    operatorId: input.operatorId,
    shiftId: input.shiftId,
    createdAt: now,
  };
}
