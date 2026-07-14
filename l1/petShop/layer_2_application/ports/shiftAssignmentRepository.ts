/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/shiftAssignmentRepository.ts" enhancement="_blank"/>
import type { ShiftAssignment } from '/_102049_/l1/petShop/layer_3_domain/entities/shiftAssignment.js';

export type ShiftAssignmentId = string;
export type OperatorId = string;
export type LocalDate = string;

export interface ShiftAssignmentFilter {
  operatorId?: OperatorId;
  shiftId?: string;
  date?: LocalDate;
}

export interface IShiftAssignmentRepository {
  getById(id: ShiftAssignmentId): Promise<ShiftAssignment | null>;
  list(filter: ShiftAssignmentFilter): Promise<ShiftAssignment[]>;
  save(assignment: ShiftAssignment): Promise<void>;
  findByOperatorId(operatorId: OperatorId): Promise<ShiftAssignment[]>;
  findByDate(date: LocalDate): Promise<ShiftAssignment[]>;
}
