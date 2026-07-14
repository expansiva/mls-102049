/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/updateShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateShift, type UpdateShiftInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateShift.js';

export const petShopUpdateShiftHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<UpdateShiftInput>;

  // --- Boundary validation: only genuine client inputs (selectedEntity + userInput) ---

  if (!params.shiftId) {
    throw new AppError('VALIDATION_ERROR', 'shiftId is required', 400, { field: 'shiftId' });
  }

  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }

  if (!params.startTime) {
    throw new AppError('VALIDATION_ERROR', 'startTime is required', 400, { field: 'startTime' });
  }

  if (!params.endTime) {
    throw new AppError('VALIDATION_ERROR', 'endTime is required', 400, { field: 'endTime' });
  }

  if (typeof params.monday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'monday is required', 400, { field: 'monday' });
  }

  if (typeof params.tuesday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'tuesday is required', 400, { field: 'tuesday' });
  }

  if (typeof params.wednesday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'wednesday is required', 400, { field: 'wednesday' });
  }

  if (typeof params.thursday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'thursday is required', 400, { field: 'thursday' });
  }

  if (typeof params.friday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'friday is required', 400, { field: 'friday' });
  }

  if (typeof params.saturday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'saturday is required', 400, { field: 'saturday' });
  }

  if (typeof params.sunday !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'sunday is required', 400, { field: 'sunday' });
  }

  if (typeof params.active !== 'boolean') {
    throw new AppError('VALIDATION_ERROR', 'active is required', 400, { field: 'active' });
  }

  // Build an EXPLICIT input with only the client fields — updatedAt and actorId
  // are resolved inside the usecase from ctx (systemDefault / actorSession).
  const input: UpdateShiftInput = {
    shiftId: params.shiftId,
    name: params.name,
    startTime: params.startTime,
    endTime: params.endTime,
    monday: params.monday,
    tuesday: params.tuesday,
    wednesday: params.wednesday,
    thursday: params.thursday,
    friday: params.friday,
    saturday: params.saturday,
    sunday: params.sunday,
    active: params.active,
  };

  const result = await updateShift(ctx, input);

  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.updateShift.updateShift', handler: petShopUpdateShiftHandler },
];
