/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.ts" enhancement="_blank"/>
import type { Shift, ShiftStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';

export type ShiftId = string;
export type EmployeeId = string;

export interface DateRange {
  from: string;
  to: string;
}

export interface ShiftFilter {
  status?: ShiftStatus;
  openedFrom?: string;
  openedTo?: string;
}

export interface IShiftRepository {
  /** Retrieve a shift by its unique identifier. Throws NOT_FOUND when absent. */
  getById(id: ShiftId): Promise<Shift>;
  /** List shifts matching the given filter. */
  list(filter?: ShiftFilter): Promise<Shift[]>;
  /** Persist the given shift aggregate (upsert). */
  save(shift: Shift): Promise<void>;
  /** Domain finder: retrieve shifts for an employee. */
  findByEmployeeId(employeeId: EmployeeId): Promise<Shift[]>;
  /** Domain finder: retrieve shifts within a period. */
  findByPeriod(period: DateRange): Promise<Shift[]>;
}
