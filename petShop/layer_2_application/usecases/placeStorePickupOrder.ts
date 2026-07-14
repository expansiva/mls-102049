/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/placeStorePickupOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102049_/l1/petShop/layer_2_application/ports/orderRepository.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Order, OrderItem } from '/_102049_/l1/petShop/layer_3_domain/entities/order.js';
import { orderRequiresItem } from '/_102049_/l1/petShop/layer_3_domain/entities/order.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { productIsVisibleInCatalog } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface CartItemInput {
  productId: string;
  quantity: number;
}

export interface PlaceStorePickupOrderInput {
  customerName: string;
  customerPhone?: string;
  cartItems: CartItemInput[];
}

export interface PlaceStorePickupOrderOutput {
  orderId: string;
  status: string;
  customerName: string;
  customerPhone?: string;
  createdAt: string;
}

export async function placeStorePickupOrder(
  ctx: RequestContext,
  input: PlaceStorePickupOrderInput,
): Promise<PlaceStorePickupOrderOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // Step 2: Apply rule 'orderRequiresAtLeastOneItem'
  if (!input.cartItems || input.cartItems.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'orderRequiresAtLeastOneItem: o pedido precisa de ao menos um item.',
      400,
      { ruleId: 'orderRequiresAtLeastOneItem' },
    );
  }

  const now = ctx.clock.nowIso();
  const orderId = ctx.idGenerator.newId();

  // Step 5: Collect all productIds and batch-read through the Product port (plural-first)
  const productIds = [...new Set(input.cartItems.map((item) => item.productId))];
  const productResults = await Promise.all(
    productIds.map((id) => products.getById(id)),
  );
  const productMap = new Map<string, Product>();
  for (const product of productResults) {
    if (product) {
      productMap.set(product.productId, product);
    }
  }

  // Step 6: Validate every productId corresponds to an active Product
  const invalidProductIds: string[] = [];
  for (const productId of productIds) {
    const product = productMap.get(productId);
    if (!product || !productIsVisibleInCatalog(product)) {
      invalidProductIds.push(productId);
    }
  }
  if (invalidProductIds.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Produtos inválidos ou inativos: ${invalidProductIds.join(', ')}`,
      400,
      { invalidProductIds },
    );
  }

  // Step 9: Build OrderItem collection from cartItems
  const items: OrderItem[] = input.cartItems.map((cartItem) => {
    const product = productMap.get(cartItem.productId)!;
    return {
      orderItemId: ctx.idGenerator.newId(),
      orderId,
      productId: cartItem.productId,
      quantity: cartItem.quantity,
      unitPrice: product.price,
      createdAt: now,
      updatedAt: now,
    };
  });

  // Step 7 (pickupInStoreOnly): no delivery/shipping fields on the order.
  // Step 8 (paymentInStoreOnly): status 'registered', no online payment processing.
  // Step 10: Create the Order aggregate
  const order: Order = {
    orderId,
    status: 'registered',
    customerName: input.customerName,
    customerPhone: input.customerPhone ?? null,
    createdAt: now,
    updatedAt: now,
    completedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    items,
  };

  // Domain invariant check
  if (!orderRequiresItem(order)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'orderRequiresAtLeastOneItem: o pedido precisa de ao menos um item.',
      400,
      { ruleId: 'orderRequiresAtLeastOneItem' },
    );
  }

  // Step 11: Save the Order inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await orders.save(order);
  });

  // Step 12: Return output
  return {
    orderId: order.orderId,
    status: order.status,
    customerName: order.customerName,
    customerPhone: order.customerPhone ?? undefined,
    createdAt: order.createdAt,
  };
}
