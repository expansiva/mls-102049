/// <mls fileReference="_102049_/l2/petShop/web/shared/myReservations.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopMyReservationsBase } from './myReservations.js';
import type { PetShopCancelReservationInput, PetShopCancelReservationOutput, PetShopCreateReservationInput, PetShopCreateReservationOutput, PetShopViewMyReservationsOutput } from '../contracts/myReservations.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopMyReservationsBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_createReservationState = Assert<Assignable<typeof page.createReservationState, "idle" | "loading" | "success" | "error">>;
type _State_createReservationItems = Assert<Assignable<typeof page.createReservationItems, string | PetShopCreateReservationInput["items"]>>;
type _State_createReservationOutput = Assert<Assignable<typeof page.createReservationOutput, PetShopCreateReservationOutput | null>>;
type _State_createReservationError = Assert<Assignable<typeof page.createReservationError, string>>;
type _State_cancelReservationState = Assert<Assignable<typeof page.cancelReservationState, "idle" | "loading" | "success" | "error">>;
type _State_cancelReservationReservationId = Assert<Assignable<typeof page.cancelReservationReservationId, string | PetShopCancelReservationInput["reservationId"]>>;
type _State_cancelReservationCancelReason = Assert<Assignable<typeof page.cancelReservationCancelReason, string | PetShopCancelReservationInput["cancelReason"]>>;
type _State_cancelReservationOutput = Assert<Assignable<typeof page.cancelReservationOutput, PetShopCancelReservationOutput | null>>;
type _State_cancelReservationError = Assert<Assignable<typeof page.cancelReservationError, string>>;
type _State_viewMyReservationsState = Assert<Assignable<typeof page.viewMyReservationsState, "idle" | "loading" | "success" | "error">>;
type _State_viewMyReservationsData = Assert<Assignable<typeof page.viewMyReservationsData, unknown[] | PetShopViewMyReservationsOutput>>;
type _Action_createReservation = Assert<Assignable<typeof page.createReservation, (...args: any[]) => unknown>>;
type _Handler_handleCreateReservationClick = Assert<Assignable<typeof page.handleCreateReservationClick, (...args: any[]) => unknown>>;
type _Action_cancelReservation = Assert<Assignable<typeof page.cancelReservation, (...args: any[]) => unknown>>;
type _Handler_handleCancelReservationClick = Assert<Assignable<typeof page.handleCancelReservationClick, (...args: any[]) => unknown>>;
type _Action_loadViewMyReservations = Assert<Assignable<typeof page.loadViewMyReservations, (...args: any[]) => unknown>>;
type _Handler_handleViewMyReservationsClick = Assert<Assignable<typeof page.handleViewMyReservationsClick, (...args: any[]) => unknown>>;
type _Action_setCreateReservationItems = Assert<Assignable<typeof page.setCreateReservationItems, (...args: any[]) => unknown>>;
type _Handler_handleCreateReservationItemsChange = Assert<Assignable<typeof page.handleCreateReservationItemsChange, (...args: any[]) => unknown>>;
type _Action_setCancelReservationReservationId = Assert<Assignable<typeof page.setCancelReservationReservationId, (...args: any[]) => unknown>>;
type _Handler_handleCancelReservationReservationIdChange = Assert<Assignable<typeof page.handleCancelReservationReservationIdChange, (...args: any[]) => unknown>>;
type _Action_setCancelReservationCancelReason = Assert<Assignable<typeof page.setCancelReservationCancelReason, (...args: any[]) => unknown>>;
type _Handler_handleCancelReservationCancelReasonChange = Assert<Assignable<typeof page.handleCancelReservationCancelReasonChange, (...args: any[]) => unknown>>;

export {};