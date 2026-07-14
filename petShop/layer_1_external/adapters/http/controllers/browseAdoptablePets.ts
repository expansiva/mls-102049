/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePets.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export const petShopBrowseAdoptablePetsHandler: BffHandler = async () => {
  // The referenced use case was not materialized. Preserve the list contract without inventing data.
  return ok([]);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseAdoptablePets.browseAdoptablePets', handler: petShopBrowseAdoptablePetsHandler },
];
