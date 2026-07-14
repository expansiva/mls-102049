/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.ts" enhancement="_blank"/>
export interface ShiftAssignment {
  shiftAssignmentId: string;
  operatorId: string;
  shiftId: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Invariant: updatedAt must be greater than or equal to createdAt.
 */
export function shiftAssignmentUpdatedAtIsValid(assignment: Pick<ShiftAssignment, 'createdAt' | 'updatedAt'>): boolean {
  return assignment.updatedAt >= assignment.createdAt;
}

/**
 * Invariant: an operator cannot be assigned to the same shift more than once.
 * Checks a collection of assignments for duplicate (operatorId, shiftId) pairs.
 */
export function hasDuplicateOperatorShift(
  assignments: Array<Pick<ShiftAssignment, 'operatorId' | 'shiftId'>>,
  operatorId: string,
  shiftId: string,
): boolean {
  return assignments.some(
    (a) => a.operatorId === operatorId && a.shiftId === shiftId,
  );
}

/**
 * Invariant: operatorId must reference an active operator.
 * This is a pure domain helper — the actual "active" check is performed by the
 * application layer which has access to the operator repository. This function
 * is provided so the domain can express the rule signature and be used in tests
 * with a pre-resolved active-operator set.
 */
export function operatorIsActive(
  operatorId: string,
  activeOperatorIds: ReadonlySet<string>,
): boolean {
  return activeOperatorIds.has(operatorId);
}
