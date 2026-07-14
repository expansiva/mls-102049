/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/createShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export const petShopCreateShiftHandler: BffHandler = async ({ request }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;

  if (!params.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!params.startTime) {
    throw new AppError('VALIDATION_ERROR', 'startTime is required', 400, { field: 'startTime' });
  }
  if (!params.endTime) {
    throw new AppError('VALIDATION_ERROR', 'endTime is required', 400, { field: 'endTime' });
  }
  if (params.monday === undefined || params.monday === null) {
    throw new AppError('VALIDATION_ERROR', 'monday is required', 400, { field: 'monday' });
  }
  if (params.tuesday === undefined || params.tuesday === null) {
    throw new AppError('VALIDATION_ERROR', 'tuesday is required', 400, { field: 'tuesday' });
  }
  if (params.wednesday === undefined || params.wednesday === null) {
    throw new AppError('VALIDATION_ERROR', 'wednesday is required', 400, { field: 'wednesday' });
  }
  if (params.thursday === undefined || params.thursday === null) {
    throw new AppError('VALIDATION_ERROR', 'thursday is required', 400, { field: 'thursday' });
  }
  if (params.friday === undefined || params.friday === null) {
    throw new AppError('VALIDATION_ERROR', 'friday is required', 400, { field: 'friday' });
  }
  if (params.saturday === undefined || params.saturday === null) {
    throw new AppError('VALIDATION_ERROR', 'saturday is required', 400, { field: 'saturday' });
  }
  if (params.sunday === undefined || params.sunday === null) {
    throw new AppError('VALIDATION_ERROR', 'sunday is required', 400, { field: 'sunday' });
  }
  if (params.active === undefined || params.active === null) {
    throw new AppError('VALIDATION_ERROR', 'active is required', 400, { field: 'active' });
  }

  // The use case was not materialized; validate the boundary but perform no persistence.
  return ok(null);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.createShift.createShift', handler: petShopCreateShiftHandler },
];
