/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseServices.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export const petShopBrowseServicesHandler: BffHandler = async () => {
  return ok([]);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseServices.browseServices', handler: petShopBrowseServicesHandler },
];
