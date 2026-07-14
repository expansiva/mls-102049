/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePetsAdmin.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export const petShopBrowseAdoptablePetsAdminHandler: BffHandler = async ({ request }) => {
  const params = (request.params ?? {}) as { statusFilter?: unknown };

  if (params.statusFilter !== undefined && params.statusFilter !== null) {
    const validStatuses = ['available', 'unavailable'];
    if (!validStatuses.includes(String(params.statusFilter))) {
      throw new AppError(
        'VALIDATION_ERROR',
        'statusFilter must be "available" or "unavailable"',
        400,
        { field: 'statusFilter' },
      );
    }
  }

  return ok([]);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin', handler: petShopBrowseAdoptablePetsAdminHandler },
];
