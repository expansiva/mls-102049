/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/closeShift.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IShiftRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftRepository.js';
import type { IOrderRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IShiftStatusEventRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/shiftStatusEventRepository.js';
import type { Shift, ShiftStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';
import { canTransitionShift, validateShiftInvariants } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shift.js';
import type { Order, OrderStatus } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { ShiftStatusEvent } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/shiftStatusEvent.js';

export interface CloseShiftInput {
  shiftId: string;
}

export interface CloseShiftOutput {
  shiftId: string;
  status: string;
  closedAt: string;
}

/** Statuses that count as "settled" — the order is no longer in-flight. */
const SETTLED_ORDER_STATUSES: OrderStatus[] = ['delivered', 'cancelled'];

export async function closeShift(ctx: RequestContext, input: CloseShiftInput): Promise<CloseShiftOutput> {
  const shifts = resolveRepository<IShiftRepository>(ctx, 'Shift');
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const shiftStatusEvents = resolveRepository<IShiftStatusEventRepository>(ctx, 'ShiftStatusEvent');

  // 1. Load the shift by id.
  let shift: Shift;
  try {
    shift = await shifts.getById(input.shiftId);
  } catch {
    throw new AppError('NOT_FOUND', `Shift not found: ${input.shiftId}`, 404, { shiftId: input.shiftId });
  }

  // 2. Validate the shift is currently open (rule: orderRequiresOpenShift — only open shifts can be closed).
  if (shift.status !== 'open') {
    throw new AppError(
      'CONFLICT',
      `orderRequiresOpenShift: only an open shift can be closed. Current status is "${shift.status}".`,
      409,
      { ruleId: 'orderRequiresOpenShift', currentStatus: shift.status },
    );
  }

  // 3. List all orders for this shift.
  const shiftOrders = await orders.list({ shiftId: input.shiftId });

  // 4. Validate all orders are settled (rule: shiftClosingRequiresSettledOrders).
  const pendingOrders = shiftOrders.filter(
    (o) => !SETTLED_ORDER_STATUSES.includes(o.status),
  );
  if (pendingOrders.length > 0) {
    throw new AppError(
      'CONFLICT',
      `shiftClosingRequiresSettledOrders: there are ${pendingOrders.length} unsettled order(s) in this shift.`,
      409,
      {
        ruleId: 'shiftClosingRequiresSettledOrders',
        pendingOrderIds: pendingOrders.map((o) => o.id),
        pendingStatuses: pendingOrders.map((o) => o.status),
      },
    );
  }

  // 5. Calculate the consolidated total.
  const consolidatedTotal = shiftOrders.reduce((sum, o) => sum + o.total, 0);

  // 6. Prepare the updated shift.
  const now = ctx.clock.nowIso();
  const updatedShift: Shift = {
    ...shift,
    status: 'closed' as ShiftStatus,
    closedAt: now,
    updatedAt: now,
  };

  // Validate the transition is allowed.
  if (!canTransitionShift(shift.status, 'closed')) {
    throw new AppError(
      'CONFLICT',
      `Invalid shift transition from "${shift.status}" to "closed".`,
      409,
      { from: shift.status, to: 'closed' },
    );
  }

  // Validate invariants on the updated shift.
  if (!validateShiftInvariants(updatedShift)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Shift invariants violated after closing.',
      400,
      { ruleId: 'validateShiftInvariants', shift: updatedShift },
    );
  }

  // 7-9. Save shift and append event inside a single transaction.
  await ctx.data.runInTransaction(async () => {
    await shifts.save(updatedShift);

    const event: ShiftStatusEvent = {
      shiftStatusEventId: ctx.idGenerator.newId(),
      shiftId: updatedShift.shiftId,
      eventType: 'fechamento',
      consolidatedTotal,
      recordedAt: now,
      createdAt: now,
      updatedAt: now,
    };

    await shiftStatusEvents.append(event);
  });

  // 10. Return the result.
  return {
    shiftId: updatedShift.shiftId,
    status: updatedShift.status,
    closedAt: updatedShift.closedAt as string,
  };
}
