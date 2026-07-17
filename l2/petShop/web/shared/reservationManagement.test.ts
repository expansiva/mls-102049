/// <mls fileReference="_102049_/l2/petShop/web/shared/reservationManagement.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopReservationManagementBase } from './reservationManagement.js';
import type { PetShopExpireReservationsOutput, PetShopListReservationsInput, PetShopListReservationsOutput, PetShopPayInStoreInput, PetShopPayInStoreOutput, PetShopUpdateReservationStatusInput, PetShopUpdateReservationStatusOutput } from '../contracts/reservationManagement.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopReservationManagementBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_listReservationsState = Assert<Assignable<typeof page.listReservationsState, "idle" | "loading" | "success" | "error">>;
type _State_listReservationsStatus = Assert<Assignable<typeof page.listReservationsStatus, string | PetShopListReservationsInput["status"]>>;
type _State_listReservationsData = Assert<Assignable<typeof page.listReservationsData, unknown[] | PetShopListReservationsOutput>>;
type _State_updateReservationStatusState = Assert<Assignable<typeof page.updateReservationStatusState, "idle" | "loading" | "success" | "error">>;
type _State_updateReservationStatusReservationId = Assert<Assignable<typeof page.updateReservationStatusReservationId, string | PetShopUpdateReservationStatusInput["reservationId"]>>;
type _State_updateReservationStatusStatus = Assert<Assignable<typeof page.updateReservationStatusStatus, string | PetShopUpdateReservationStatusInput["status"]>>;
type _State_updateReservationStatusCancelReason = Assert<Assignable<typeof page.updateReservationStatusCancelReason, string | PetShopUpdateReservationStatusInput["cancelReason"]>>;
type _State_updateReservationStatusPaymentId = Assert<Assignable<typeof page.updateReservationStatusPaymentId, string | PetShopUpdateReservationStatusInput["paymentId"]>>;
type _State_updateReservationStatusOutput = Assert<Assignable<typeof page.updateReservationStatusOutput, PetShopUpdateReservationStatusOutput | null>>;
type _State_updateReservationStatusError = Assert<Assignable<typeof page.updateReservationStatusError, string>>;
type _State_payInStoreState = Assert<Assignable<typeof page.payInStoreState, "idle" | "loading" | "success" | "error">>;
type _State_payInStoreReservationId = Assert<Assignable<typeof page.payInStoreReservationId, string | PetShopPayInStoreInput["reservationId"]>>;
type _State_payInStorePaymentMethod = Assert<Assignable<typeof page.payInStorePaymentMethod, string | PetShopPayInStoreInput["paymentMethod"]>>;
type _State_payInStorePaymentAmount = Assert<Assignable<typeof page.payInStorePaymentAmount, string | PetShopPayInStoreInput["paymentAmount"]>>;
type _State_payInStoreOutput = Assert<Assignable<typeof page.payInStoreOutput, PetShopPayInStoreOutput | null>>;
type _State_payInStoreError = Assert<Assignable<typeof page.payInStoreError, string>>;
type _State_expireReservationsState = Assert<Assignable<typeof page.expireReservationsState, "idle" | "loading" | "success" | "error">>;
type _State_expireReservationsOutput = Assert<Assignable<typeof page.expireReservationsOutput, PetShopExpireReservationsOutput | null>>;
type _State_expireReservationsError = Assert<Assignable<typeof page.expireReservationsError, string>>;
type _Action_loadListReservations = Assert<Assignable<typeof page.loadListReservations, (...args: any[]) => unknown>>;
type _Handler_handleListReservationsClick = Assert<Assignable<typeof page.handleListReservationsClick, (...args: any[]) => unknown>>;
type _Action_updateReservationStatus = Assert<Assignable<typeof page.updateReservationStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusClick = Assert<Assignable<typeof page.handleUpdateReservationStatusClick, (...args: any[]) => unknown>>;
type _Action_payInStore = Assert<Assignable<typeof page.payInStore, (...args: any[]) => unknown>>;
type _Handler_handlePayInStoreClick = Assert<Assignable<typeof page.handlePayInStoreClick, (...args: any[]) => unknown>>;
type _Action_expireReservations = Assert<Assignable<typeof page.expireReservations, (...args: any[]) => unknown>>;
type _Handler_handleExpireReservationsClick = Assert<Assignable<typeof page.handleExpireReservationsClick, (...args: any[]) => unknown>>;
type _Action_setListReservationsStatus = Assert<Assignable<typeof page.setListReservationsStatus, (...args: any[]) => unknown>>;
type _Handler_handleListReservationsStatusChange = Assert<Assignable<typeof page.handleListReservationsStatusChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusReservationId = Assert<Assignable<typeof page.setUpdateReservationStatusReservationId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusReservationIdChange = Assert<Assignable<typeof page.handleUpdateReservationStatusReservationIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusStatus = Assert<Assignable<typeof page.setUpdateReservationStatusStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusStatusChange = Assert<Assignable<typeof page.handleUpdateReservationStatusStatusChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusCancelReason = Assert<Assignable<typeof page.setUpdateReservationStatusCancelReason, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusCancelReasonChange = Assert<Assignable<typeof page.handleUpdateReservationStatusCancelReasonChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReservationStatusPaymentId = Assert<Assignable<typeof page.setUpdateReservationStatusPaymentId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReservationStatusPaymentIdChange = Assert<Assignable<typeof page.handleUpdateReservationStatusPaymentIdChange, (...args: any[]) => unknown>>;
type _Action_setPayInStoreReservationId = Assert<Assignable<typeof page.setPayInStoreReservationId, (...args: any[]) => unknown>>;
type _Handler_handlePayInStoreReservationIdChange = Assert<Assignable<typeof page.handlePayInStoreReservationIdChange, (...args: any[]) => unknown>>;
type _Action_setPayInStorePaymentMethod = Assert<Assignable<typeof page.setPayInStorePaymentMethod, (...args: any[]) => unknown>>;
type _Handler_handlePayInStorePaymentMethodChange = Assert<Assignable<typeof page.handlePayInStorePaymentMethodChange, (...args: any[]) => unknown>>;
type _Action_setPayInStorePaymentAmount = Assert<Assignable<typeof page.setPayInStorePaymentAmount, (...args: any[]) => unknown>>;
type _Handler_handlePayInStorePaymentAmountChange = Assert<Assignable<typeof page.handlePayInStorePaymentAmountChange, (...args: any[]) => unknown>>;

export {};