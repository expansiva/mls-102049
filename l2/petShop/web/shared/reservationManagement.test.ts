/// <mls fileReference="_102049_/l2/petShop/web/shared/reservationManagement.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopReservationManagementBase } from './reservationManagement.js';
import type { PetShopBrowseReservationsQueryInput, PetShopBrowseReservationsQueryOutput, PetShopProcessPaymentCommandInput, PetShopProcessPaymentCommandOutput, PetShopUpdateReservationStatusCommandInput, PetShopUpdateReservationStatusCommandOutput } from '../contracts/reservationManagement.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopReservationManagementBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseReservationsQueryState = Assert<Assignable<typeof page.browseReservationsQueryState, "idle" | "loading" | "success" | "error">>;
type _State_browseReservationsQuerySearchTerm = Assert<Assignable<typeof page.browseReservationsQuerySearchTerm, string | PetShopBrowseReservationsQueryInput["searchTerm"]>>;
type _State_browseReservationsQueryStatusFilter = Assert<Assignable<typeof page.browseReservationsQueryStatusFilter, string | PetShopBrowseReservationsQueryInput["statusFilter"]>>;
type _State_browseReservationsQueryPage = Assert<Assignable<typeof page.browseReservationsQueryPage, string | PetShopBrowseReservationsQueryInput["page"]>>;
type _State_browseReservationsQueryPageSize = Assert<Assignable<typeof page.browseReservationsQueryPageSize, string | PetShopBrowseReservationsQueryInput["pageSize"]>>;
type _State_browseReservationsQueryData = Assert<Assignable<typeof page.browseReservationsQueryData, unknown[] | PetShopBrowseReservationsQueryOutput>>;
type _State_updateReservationStatusCommandState = Assert<Assignable<typeof page.updateReservationStatusCommandState, "idle" | "loading" | "success" | "error">>;
type _State_updateReservationStatusCommandReservationId = Assert<Assignable<typeof page.updateReservationStatusCommandReservationId, string | PetShopUpdateReservationStatusCommandInput["reservationId"]>>;
type _State_updateReservationStatusCommandNewStatus = Assert<Assignable<typeof page.updateReservationStatusCommandNewStatus, string | PetShopUpdateReservationStatusCommandInput["newStatus"]>>;
type _State_updateReservationStatusCommandCancellationReason = Assert<Assignable<typeof page.updateReservationStatusCommandCancellationReason, string | PetShopUpdateReservationStatusCommandInput["cancellationReason"]>>;
type _State_updateReservationStatusCommandPaymentId = Assert<Assignable<typeof page.updateReservationStatusCommandPaymentId, string | PetShopUpdateReservationStatusCommandInput["paymentId"]>>;
type _State_updateReservationStatusCommandOutput = Assert<Assignable<typeof page.updateReservationStatusCommandOutput, PetShopUpdateReservationStatusCommandOutput | null>>;
type _State_updateReservationStatusCommandError = Assert<Assignable<typeof page.updateReservationStatusCommandError, string>>;
type _State_processPaymentCommandState = Assert<Assignable<typeof page.processPaymentCommandState, "idle" | "loading" | "success" | "error">>;
type _State_processPaymentCommandReservationId = Assert<Assignable<typeof page.processPaymentCommandReservationId, string | PetShopProcessPaymentCommandInput["reservationId"]>>;
type _State_processPaymentCommandMethod = Assert<Assignable<typeof page.processPaymentCommandMethod, string | PetShopProcessPaymentCommandInput["method"]>>;
type _State_processPaymentCommandOutput = Assert<Assignable<typeof page.processPaymentCommandOutput, PetShopProcessPaymentCommandOutput | null>>;
type _State_processPaymentCommandError = Assert<Assignable<typeof page.processPaymentCommandError, string>>;
type _Action_loadBrowseReservationsQuery = Assert<Assignable<typeof page.loadBrowseReservationsQuery, (...args: any[]) => unknown>>;
type _Handler_handleBrowseReservationsQueryClick = Assert<Assignable<typeof page.handleBrowseReservationsQueryClick, (...args: any[]) => unknown>>;
type _Action_updateReservationStatusCommand = Assert<Assignable<typeof page.updateReservationStatusCommand, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusCommandClick = Assert<Assignable<typeof page.handleUpdateReservationStatusCommandClick, (...args: any[]) => unknown>>;
type _Action_processPaymentCommand = Assert<Assignable<typeof page.processPaymentCommand, (...args: any[]) => unknown>>;
type _Handler_handleProcessPaymentCommandClick = Assert<Assignable<typeof page.handleProcessPaymentCommandClick, (...args: any[]) => unknown>>;
type _Action_setBrowseReservationsQuerySearchTerm = Assert<Assignable<typeof page.setBrowseReservationsQuerySearchTerm, (...args: any[]) => unknown>>;
type _Handler_handleBrowseReservationsQuerySearchTermChange = Assert<Assignable<typeof page.handleBrowseReservationsQuerySearchTermChange, (...args: any[]) => unknown>>;
type _Action_setBrowseReservationsQueryStatusFilter = Assert<Assignable<typeof page.setBrowseReservationsQueryStatusFilter, (...args: any[]) => unknown>>;
type _Handler_handleBrowseReservationsQueryStatusFilterChange = Assert<Assignable<typeof page.handleBrowseReservationsQueryStatusFilterChange, (...args: any[]) => unknown>>;
type _Action_setBrowseReservationsQueryPage = Assert<Assignable<typeof page.setBrowseReservationsQueryPage, (...args: any[]) => unknown>>;
type _Handler_handleBrowseReservationsQueryPageChange = Assert<Assignable<typeof page.handleBrowseReservationsQueryPageChange, (...args: any[]) => unknown>>;
type _Action_setBrowseReservationsQueryPageSize = Assert<Assignable<typeof page.setBrowseReservationsQueryPageSize, (...args: any[]) => unknown>>;
type _Handler_handleBrowseReservationsQueryPageSizeChange = Assert<Assignable<typeof page.handleBrowseReservationsQueryPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusCommandReservationId = Assert<Assignable<typeof page.setUpdateReservationStatusCommandReservationId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusCommandReservationIdChange = Assert<Assignable<typeof page.handleUpdateReservationStatusCommandReservationIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusCommandNewStatus = Assert<Assignable<typeof page.setUpdateReservationStatusCommandNewStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusCommandNewStatusChange = Assert<Assignable<typeof page.handleUpdateReservationStatusCommandNewStatusChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusCommandCancellationReason = Assert<Assignable<typeof page.setUpdateReservationStatusCommandCancellationReason, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusCommandCancellationReasonChange = Assert<Assignable<typeof page.handleUpdateReservationStatusCommandCancellationReasonChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusCommandPaymentId = Assert<Assignable<typeof page.setUpdateReservationStatusCommandPaymentId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusCommandPaymentIdChange = Assert<Assignable<typeof page.handleUpdateReservationStatusCommandPaymentIdChange, (...args: any[]) => unknown>>;
type _Action_setProcessPaymentCommandReservationId = Assert<Assignable<typeof page.setProcessPaymentCommandReservationId, (...args: any[]) => unknown>>;
type _Handler_handleProcessPaymentCommandReservationIdChange = Assert<Assignable<typeof page.handleProcessPaymentCommandReservationIdChange, (...args: any[]) => unknown>>;
type _Action_setProcessPaymentCommandMethod = Assert<Assignable<typeof page.setProcessPaymentCommandMethod, (...args: any[]) => unknown>>;
type _Handler_handleProcessPaymentCommandMethodChange = Assert<Assignable<typeof page.handleProcessPaymentCommandMethodChange, (...args: any[]) => unknown>>;

export {};