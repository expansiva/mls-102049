/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IShiftRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.js';
import type { IOrderItemRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderItemRepository.js';
import type { IOrderStatusEventRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderStatusEventRepository.js';
import type { Order, OrderType } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { validateOrderInvariants } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { OrderItem } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';
import {
  computeOrderItemTotal,
  validateOrderItem,
  orderItemQuantityIsValid,
} from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderItem.js';
import type { OrderStatusEvent } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/orderStatusEvent.js';

export interface OrderItemInput {
  menuItemId: string;
  quantity: number;
  substitutionsApplied?: string;
}

export interface CreateOrderInput {
  orderType: string;
  tableId?: string;
  items: OrderItemInput[];
}

export interface CreateOrderOutput {
  orderId: string;
  status: string;
  total: number;
}

export async function createOrder(ctx: RequestContext, input: CreateOrderInput): Promise<CreateOrderOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const shifts = resolveRepository<IShiftRepository>(ctx, 'Shift');
  const orderItemRepo = resolveRepository<IOrderItemRepository>(ctx, 'OrderItem');
  const orderStatusEventRepo = resolveRepository<IOrderStatusEventRepository>(ctx, 'OrderStatusEvent');

  const now = ctx.clock.nowIso();

  // Step 2–3: Find open shift — rule orderRequiresOpenShift
  const openShifts = await shifts.list({ status: 'open' });
  if (openShifts.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'orderRequiresOpenShift: não há turno aberto para criar pedidos.',
      400,
      { ruleId: 'orderRequiresOpenShift' },
    );
  }
  const openShift = openShifts[0];

  // Basic validation: items must not be empty
  if (!input.items || input.items.length === 0) {
    throw new AppError('VALIDATION_ERROR', 'O pedido precisa de ao menos um item.', 400, { field: 'items' });
  }

  // Step 4: If dineIn, validate tableId provided and table exists (MDM)
  if (input.orderType === 'dineIn') {
    if (!input.tableId) {
      throw new AppError('VALIDATION_ERROR', 'Pedidos dine-in exigem uma mesa (tableId).', 400, { field: 'tableId' });
    }
    const tableDoc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
    if (!tableDoc) {
      throw new AppError('NOT_FOUND', `Mesa não encontrada: ${input.tableId}`, 404, { mdmId: input.tableId });
    }
  }

  // Step 5 & 7: Validate each item via MDM and calculate unitPrice / itemTotal
  const orderItemRecords: OrderItem[] = [];
  for (const item of input.items) {
    if (!orderItemQuantityIsValid(item.quantity)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Quantidade do item deve ser maior que zero para menuItemId: ${item.menuItemId}`,
        400,
        { menuItemId: item.menuItemId },
      );
    }

    // Validate menuItem exists and is active (MDM)
    const menuItemDoc = await ctx.data.mdmDocument.get({ mdmId: item.menuItemId });
    if (!menuItemDoc) {
      throw new AppError('NOT_FOUND', `Item de cardápio não encontrado: ${item.menuItemId}`, 404, { mdmId: item.menuItemId });
    }

    const menuItemDetails = menuItemDoc.details as Record<string, unknown>;
    const unitPrice = (menuItemDetails.price as number) ?? 0;
    const itemTotal = computeOrderItemTotal(item.quantity, unitPrice);

    if (!validateOrderItem({ quantity: item.quantity, unitPrice, itemTotal })) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Item de pedido inválido para menuItemId: ${item.menuItemId}`,
        400,
        { menuItemId: item.menuItemId },
      );
    }

    orderItemRecords.push({
      orderItemId: ctx.idGenerator.newId(),
      orderId: '',
      menuItemId: item.menuItemId,
      quantity: item.quantity,
      unitPrice,
      itemTotal,
      substitutionsApplied: item.substitutionsApplied ?? null,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    });
  }

  // Step 8: Calculate order total
  const total = orderItemRecords.reduce((sum, item) => sum + item.itemTotal, 0);

  // Step 9: Build Order aggregate
  const orderId = ctx.idGenerator.newId();
  const order: Order = {
    id: orderId,
    orderType: input.orderType as OrderType,
    tableId: input.orderType === 'dineIn' ? (input.tableId ?? null) : null,
    shiftId: openShift.shiftId,
    status: 'pending',
    total,
    createdAt: now,
    updatedAt: now,
  };

  // Validate order invariants
  const invariantError = validateOrderInvariants(order);
  if (invariantError) {
    throw new AppError('VALIDATION_ERROR', invariantError, 400, { ruleId: 'orderInvariants' });
  }

  // Step 10: Set orderId on each item
  for (const item of orderItemRecords) {
    item.orderId = orderId;
  }

  // Step 12: Build OrderStatusEvent (status 'criado' = order created)
  const statusEvent: OrderStatusEvent = {
    orderStatusEventId: ctx.idGenerator.newId(),
    orderId,
    status: 'criado',
    previousStatus: null,
    createdAt: now,
    updatedAt: now,
  };

  // Step 11 & 12: Persist Order, OrderItems, and OrderStatusEvent in one transaction
  await ctx.data.runInTransaction(async () => {
    await orders.save(order);
    for (const item of orderItemRecords) {
      await orderItemRepo.save(item);
    }
    await orderStatusEventRepo.append(statusEvent);
  });

  // Step 13: Return result
  return {
    orderId,
    status: order.status,
    total: order.total,
  };
}
