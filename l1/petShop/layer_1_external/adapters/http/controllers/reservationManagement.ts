/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/reservationManagement.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseReservations, type BrowseReservationsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseReservations.js';
import { updateReservationStatus, type UpdateReservationStatusInput } from '/_102049_/l1/petShop/layer_2_application/usecases/updateReservationStatus.js';
import { processPayment, type ProcessPaymentInput } from '/_102049_/l1/petShop/layer_2_application/usecases/processPayment.js';

const ALLOWED: readonly string[] = ['petShop:atendente'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

export const reservationManagementBrowseReservationsQueryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.reservationManagement.browseReservationsQuery');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    searchTerm?: string;
    statusFilter?: string;
    page?: number;
    pageSize?: number;
  };

  const input: BrowseReservationsInput = {
    searchTerm: params.searchTerm,
    statusFilter: params.statusFilter,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await browseReservations(ctx, input);
  const items = (result.items ?? []).map((row) => ({
    reservationId: row.reservationId,
    customerName: row.customerName,
    customerPhone: row.customerPhone,
    status: row.status,
    expiresAt: row.expiresAt,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }));
  return ok(items);
};

export const reservationManagementUpdateReservationStatusCommandHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.reservationManagement.updateReservationStatusCommand');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    reservationId?: string;
    newStatus?: string;
    cancellationReason?: string;
    paymentId?: string;
  };

  if (!params.reservationId) {
    throw new AppError('VALIDATION_ERROR', 'reservationId is required', 400, { field: 'reservationId' });
  }
  if (!params.newStatus) {
    throw new AppError('VALIDATION_ERROR', 'newStatus is required', 400, { field: 'newStatus' });
  }

  const input: UpdateReservationStatusInput = {
    reservationId: params.reservationId,
    newStatus: params.newStatus,
    cancellationReason: params.cancellationReason,
    paymentId: params.paymentId,
  };

  const result = await updateReservationStatus(ctx, input);
  return ok({
    reservationId: result.reservationId,
    customerName: result.customerName,
    customerPhone: result.customerPhone,
    status: result.status,
    expiresAt: result.expiresAt,
    confirmedAt: result.confirmedAt,
    fulfilledAt: result.fulfilledAt,
    cancelledAt: result.cancelledAt,
    cancellationReason: result.cancellationReason,
    paymentId: result.paymentId,
    updatedAt: result.updatedAt,
  });
};

export const reservationManagementProcessPaymentCommandHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'petShop.reservationManagement.processPaymentCommand');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    reservationId?: string;
    method?: string;
  };

  if (!params.reservationId) {
    throw new AppError('VALIDATION_ERROR', 'reservationId is required', 400, { field: 'reservationId' });
  }
  if (!params.method) {
    throw new AppError('VALIDATION_ERROR', 'method is required', 400, { field: 'method' });
  }

  const input: ProcessPaymentInput = {
    reservationId: params.reservationId,
    method: params.method,
  };

  const result = await processPayment(ctx, input);
  return ok({
    paymentId: result.paymentId,
    reservationId: result.reservationId,
    amount: result.amount,
    method: result.method,
    status: result.status,
    receivedBy: result.receivedBy,
    createdAt: result.createdAt,
    reservationStatus: result.reservationStatus,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.reservationManagement.browseReservationsQuery', handler: reservationManagementBrowseReservationsQueryHandler },
  { key: 'petShop.reservationManagement.updateReservationStatusCommand', handler: reservationManagementUpdateReservationStatusCommandHandler },
  { key: 'petShop.reservationManagement.processPaymentCommand', handler: reservationManagementProcessPaymentCommandHandler },
];
