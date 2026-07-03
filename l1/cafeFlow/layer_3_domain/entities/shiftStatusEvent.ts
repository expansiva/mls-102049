/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.ts" enhancement="_blank"/>
export type ShiftStatusEventType = 'abertura' | 'fechamento';

export interface ShiftStatusEvent {
  shiftStatusEventId: string;
  shiftId: string;
  eventType: ShiftStatusEventType;
  consolidatedTotal: number;
  recordedAt: string;
  createdAt: string;
  updatedAt: string;
}
