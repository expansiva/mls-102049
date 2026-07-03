/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/shift.ts" enhancement="_blank"/>
export type ShiftStatus = 'open' | 'closed';

export interface Shift {
  shiftId: string;
  status: ShiftStatus;
  openedAt: string;
  closedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const SHIFT_STATUS_TRANSITIONS: Record<ShiftStatus, ShiftStatus[]> = {
  open: ['closed'],
  closed: [],
};

export function canTransitionShift(from: ShiftStatus, to: ShiftStatus): boolean {
  return SHIFT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

/** If status is closed then closedAt must be non-null. */
export function shiftClosedRequiresClosedAt(shift: Pick<Shift, 'status' | 'closedAt'>): boolean {
  if (shift.status === 'closed') {
    return shift.closedAt !== null;
  }
  return true;
}

/** If status is open then closedAt must be null. */
export function shiftOpenRequiresNullClosedAt(shift: Pick<Shift, 'status' | 'closedAt'>): boolean {
  if (shift.status === 'open') {
    return shift.closedAt === null;
  }
  return true;
}

/** closedAt must be after openedAt when present. */
export function shiftClosedAtAfterOpenedAt(shift: Pick<Shift, 'openedAt' | 'closedAt'>): boolean {
  if (shift.closedAt === null) {
    return true;
  }
  return shift.closedAt > shift.openedAt;
}

/** Only one Shift may be open at any given time. */
export function hasSingleOpenShift(shifts: Pick<Shift, 'status'>[]): boolean {
  return shifts.filter((s) => s.status === 'open').length <= 1;
}

/** Validates all invariants for a single shift record. */
export function validateShiftInvariants(shift: Pick<Shift, 'status' | 'openedAt' | 'closedAt'>): boolean {
  return (
    shiftClosedRequiresClosedAt(shift) &&
    shiftOpenRequiresNullClosedAt(shift) &&
    shiftClosedAtAfterOpenedAt(shift)
  );
}
