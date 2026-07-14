/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/browseAdoptablePets.ts" enhancement="_blank"/>
import { ok, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import '/_102049_/l1/petShop/layer_1_external/adapters/persistence/registerRepositories.js';
import { browseAdoptablePets } from '/_102049_/l1/petShop/layer_2_application/usecases/browseAdoptablePets.js';

export const petShopBrowseAdoptablePetsHandler: BffHandler = async ({ ctx }) => {
  return ok(await browseAdoptablePets(ctx));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.browseAdoptablePets.browseAdoptablePets', handler: petShopBrowseAdoptablePetsHandler },
];
