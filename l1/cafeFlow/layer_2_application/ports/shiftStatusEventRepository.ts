/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.ts" enhancement="_blank"/>
import type { ShiftStatusEvent } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.js';

export interface DateRange {
  from: string;
  to: string;
}

export interface IShiftStatusEventRepository {
  /** Append a shift status event (immutable — no update or delete). */
  append(event: ShiftStatusEvent): Promise<void>;
  /** Read finder: list events by shift. */
  listByOwnerId(ownerId: string): Promise<ShiftStatusEvent[]>;
  /** Read finder: list events within a period. */
  listByPeriod(period: DateRange): Promise<ShiftStatusEvent[]>;
}
