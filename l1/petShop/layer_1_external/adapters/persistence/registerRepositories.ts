/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/registerRepositories.ts" enhancement="_blank"/>

// Composition root — generated deterministically by agentCbRegister; do not edit by hand.
// The 102034 moduleRegistry imports this file through the persistenceModules[].tableDefsDir
// config link before loading the module controllers, so usecases can resolveRepository().
import { registerRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import { createPaymentRepositoryAdapter } from '/_102049_/l1/petShop/layer_1_external/adapters/persistence/paymentRepositoryAdapter.js';
import { createReservationRepositoryAdapter } from '/_102049_/l1/petShop/layer_1_external/adapters/persistence/reservationRepositoryAdapter.js';

registerRepository('Payment', createPaymentRepositoryAdapter);
registerRepository('Reservation', createReservationRepositoryAdapter);
