/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/placeStorePickupOrder.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  placeStorePickupOrder,
  type PlaceStorePickupOrderInput,
  type CartItemInput,
} from '/_102049_/l1/petShop/layer_2_application/usecases/placeStorePickupOrder.js';

export const petShopPlaceStorePickupOrderHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Record<string, unknown>;

  // Validate ONLY genuine client boundary inputs (source: userInput)
  if (typeof params.customerName !== 'string' || !params.customerName) {
    throw new AppError('VALIDATION_ERROR', 'customerName is required', 400, { field: 'customerName' });
  }

  // cartItems has source 'workflowState' — not a client boundary input to validate.
  // Pass it through; the usecase validates the business rule (orderRequiresAtLeastOneItem).
  const rawCartItems = params.cartItems;
  const cartItems: CartItemInput[] = Array.isArray(rawCartItems)
    ? (rawCartItems as Array<Record<string, unknown>>).map((raw) => ({
        productId: String(raw.productId ?? ''),
        quantity: Number(raw.quantity ?? 0),
      }))
    : [];

  const input: PlaceStorePickupOrderInput = {
    customerName: params.customerName,
    customerPhone: typeof params.customerPhone === 'string' ? params.customerPhone : undefined,
    cartItems,
  };

  const result = await placeStorePickupOrder(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.placeStorePickupOrder.placeStorePickupOrder', handler: petShopPlaceStorePickupOrderHandler },
];
