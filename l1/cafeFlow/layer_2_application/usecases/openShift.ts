/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/openShift.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IShiftRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.js';
import type { IShiftStatusEventRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.js';
import type { Shift, ShiftStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';
import { hasSingleOpenShift, validateShiftInvariants } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';
import type { ShiftStatusEvent } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.js';

export interface OpenShiftInput {}

export interface OpenShiftOutput {
  shiftId: string;
  status: string;
  openedAt: string;
}

export async function openShift(ctx: RequestContext, _input: OpenShiftInput): Promise<OpenShiftOutput> {
  const shifts = resolveRepository<IShiftRepository>(ctx, 'Shift');
  const shiftStatusEvents = resolveRepository<IShiftStatusEventRepository>(ctx, 'ShiftStatusEvent');

  const now = ctx.clock.nowIso();
  const shiftId = ctx.idGenerator.newId();

  // Check that no other shift is currently open (only one open shift at a time)
  const existingShifts = await shifts.list({ status: 'open' });
  if (!hasSingleOpenShift([...existingShifts, { status: 'open' }])) {
    throw new AppError(
      'CONFLICT',
      'hasSingleOpenShift: já existe um turno aberto. Feche o turno atual antes de abrir um novo.',
      409,
      { ruleId: 'hasSingleOpenShift' },
    );
  }

  const newShift: Shift = {
    shiftId,
    status: 'open' as ShiftStatus,
    openedAt: now,
    closedAt: null,
    createdAt: now,
    updatedAt: now,
  };

  if (!validateShiftInvariants(newShift)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'validateShiftInvariants: o turno viola invariantes de domínio.',
      400,
      { ruleId: 'validateShiftInvariants' },
    );
  }

  const statusEvent: ShiftStatusEvent = {
    shiftStatusEventId: ctx.idGenerator.newId(),
    shiftId,
    eventType: 'abertura',
    consolidatedTotal: 0,
    recordedAt: now,
    createdAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await shifts.save(newShift);
    await shiftStatusEvents.append(statusEvent);
  });

  return {
    shiftId,
    status: newShift.status,
    openedAt: newShift.openedAt,
  };
}
