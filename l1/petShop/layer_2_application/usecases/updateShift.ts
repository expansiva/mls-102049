/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateShift.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { MdmEntityUpdateInput } from '/_102034_/l1/mdm/layer_3_usecases/mdmFacade.js';

export interface UpdateShiftInput {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
}

export interface UpdateShiftOutput {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
}

const HH_MM_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

export async function updateShift(ctx: RequestContext, input: UpdateShiftInput): Promise<UpdateShiftOutput> {
  // --- Validation: required fields ---
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'O nome do turno é obrigatório.', 400, {
      ruleId: 'requiredFields',
      field: 'name',
    });
  }
  if (!HH_MM_REGEX.test(input.startTime)) {
    throw new AppError('VALIDATION_ERROR', 'startTime deve estar no formato HH:mm.', 400, {
      ruleId: 'requiredFields',
      field: 'startTime',
    });
  }
  if (!HH_MM_REGEX.test(input.endTime)) {
    throw new AppError('VALIDATION_ERROR', 'endTime deve estar no formato HH:mm.', 400, {
      ruleId: 'requiredFields',
      field: 'endTime',
    });
  }
  const anyWeekday =
    input.monday ||
    input.tuesday ||
    input.wednesday ||
    input.thursday ||
    input.friday ||
    input.saturday ||
    input.sunday;
  if (!anyWeekday) {
    throw new AppError('VALIDATION_ERROR', 'Pelo menos um dia da semana deve ser selecionado.', 400, {
      ruleId: 'requiredFields',
      field: 'weekdays',
    });
  }

  // businessHoursForScheduling: permissive rule — out-of-window hours are accepted as
  // an explicit administrator override; no error is raised.
  // operatorMultipleShiftsAllowed: permissive rule — overlapping shifts on the same day
  // are permitted; no conflict check is performed.

  const now = ctx.clock.nowIso();
  const actorId = ctx.sessionContext.actorSession.actorId ?? null;

  return await ctx.data.runInTransaction(async () => {
    // Load existing Shift MDM record (throws NOT_FOUND if absent)
    const existing = await ctx.mdm.entity.get({ mdmId: input.shiftId });

    // Update the Shift MDM record via the facade
    const updated = await ctx.mdm.entity.update({
      mdmId: input.shiftId,
      expectedVersion: existing.version,
      patch: {
        name: input.name,
        petShop: {
          startTime: input.startTime,
          endTime: input.endTime,
          monday: input.monday,
          tuesday: input.tuesday,
          wednesday: input.wednesday,
          thursday: input.thursday,
          friday: input.friday,
          saturday: input.saturday,
          sunday: input.sunday,
          active: input.active,
          updatedAt: now,
          updatedBy: actorId,
        },
      },
    } as unknown as MdmEntityUpdateInput);

    const details = updated.details as unknown as Record<string, unknown>;
    const moduleDetails = (details['petShop'] ?? {}) as unknown as Record<string, unknown>;

    return {
      shiftId: updated.mdmId,
      name: String(details['name'] ?? input.name),
      startTime: String(moduleDetails['startTime'] ?? input.startTime),
      endTime: String(moduleDetails['endTime'] ?? input.endTime),
      monday: Boolean(moduleDetails['monday']),
      tuesday: Boolean(moduleDetails['tuesday']),
      wednesday: Boolean(moduleDetails['wednesday']),
      thursday: Boolean(moduleDetails['thursday']),
      friday: Boolean(moduleDetails['friday']),
      saturday: Boolean(moduleDetails['saturday']),
      sunday: Boolean(moduleDetails['sunday']),
      active: Boolean(moduleDetails['active']),
    };
  });
}
