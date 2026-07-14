/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/registerRepositories.ts" enhancement="_blank"/>
import { registerRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import { createAdoptablePetRepositoryAdapter } from '/_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePetRepositoryAdapter.js';
import { createProductRepositoryAdapter } from '/_102049_/l1/petShop/layer_1_external/adapters/persistence/productRepositoryAdapter.js';

registerRepository('AdoptablePet', createAdoptablePetRepositoryAdapter);
registerRepository('Product', createProductRepositoryAdapter);
