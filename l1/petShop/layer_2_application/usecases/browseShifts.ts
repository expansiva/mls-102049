/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseShifts.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface BrowseShiftsInput {
  activeFilter?: boolean;
}

export interface BrowseShiftsItem {
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
  createdAt: string;
  updatedAt: string;
}

export interface BrowseShiftsOutput {
  shifts: BrowseShiftsItem[];
}

/**
 * Parse a "HH:mm" time string into minutes since midnight.
 * Returns null when the string does not match the expected format.
 */
function parseTimeMinutes(time: string): number | null {
  const match = /^(\d{2}):(\d{2})/.exec(time);
  if (!match) return null;
  return parseInt(match[1], 10) * 60 + parseInt(match[2], 10);
}

/**
 * businessHoursForScheduling rule (inline):
 * Validates that startTime/endTime fall within 09:00–18:00 and that the
 * shift does not operate on Sunday (operating days are Monday–Saturday).
 * Returns true when the shift complies, false otherwise.
 */
function compliesWithBusinessHours(startTime: string, endTime: string, sunday: boolean): boolean {
  const start = parseTimeMinutes(startTime);
  const end = parseTimeMinutes(endTime);
  if (start === null || end === null) return false;
  const open = 9 * 60;   // 09:00
  const close = 18 * 60; // 18:00
  const withinHours = start >= open && end <= close;
  const noSunday = !sunday;
  return withinHours && noSunday;
}

export async function browseShifts(ctx: RequestContext, input: BrowseShiftsInput): Promise<BrowseShiftsOutput> {
  // Step 1: actorId is resolved from session context (not a public input).
  // Step 2: Query MDM for all Shift records.
  const listResult = await ctx.mdm.collection.listByType({ type: 'petShop.Shift' });
  const mdmIds = listResult.items.map((item) => item.mdmId);

  if (mdmIds.length === 0) {
    return { shifts: [] };
  }

  // Fetch full entity details (plural-first: single batch call, no loop).
  const entities = await ctx.mdm.collection.getMany({ mdmIds });

  const items: BrowseShiftsItem[] = [];

  for (const entity of entities) {
    const details = entity.details as unknown as Record<string, unknown>;
    // Shift-specific fields may be stored under the module namespace key or at top level.
    const shiftData = (details.petShop ?? details) as Record<string, unknown>;

    const active =
      'active' in shiftData
        ? Boolean(shiftData.active)
        : String(entity.index.status) === 'Active';

    // Step 3: Apply optional activeFilter.
    if (input.activeFilter !== undefined && active !== input.activeFilter) {
      continue;
    }

    const startTime = String(shiftData.startTime ?? '');
    const endTime = String(shiftData.endTime ?? '');
    const sunday = Boolean(shiftData.sunday);

    // Step 4: businessHoursForScheduling — annotate violations as warnings (do not exclude).
    if (!compliesWithBusinessHours(startTime, endTime, sunday)) {
      ctx.log.info('businessHoursForScheduling: shift configuration warning', {
        ruleId: 'businessHoursForScheduling',
        shiftId: entity.mdmId,
        startTime,
        endTime,
        sunday,
      });
    }

    // Step 5: operatorMultipleShiftsAllowed — no filtering or dedup needed;
    // multiple shifts per operator are allowed, so the full list is returned.

    // Step 6: Project each Shift to the declared output fields.
    items.push({
      shiftId: entity.mdmId,
      name: String(shiftData.name ?? entity.index.name ?? ''),
      startTime,
      endTime,
      monday: Boolean(shiftData.monday),
      tuesday: Boolean(shiftData.tuesday),
      wednesday: Boolean(shiftData.wednesday),
      thursday: Boolean(shiftData.thursday),
      friday: Boolean(shiftData.friday),
      saturday: Boolean(shiftData.saturday),
      sunday,
      active,
      createdAt: String(entity.index.createdAt ?? ''),
      updatedAt: String(entity.index.updatedAt ?? ''),
    });
  }

  return { shifts: items };
}
