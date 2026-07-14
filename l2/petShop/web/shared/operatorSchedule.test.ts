/// <mls fileReference="_102049_/l2/petShop/web/shared/operatorSchedule.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopOperatorScheduleBase } from './operatorSchedule.js';
import type { PetShopViewOperatorScheduleOutput, PetShopViewServiceBookingDetailsInput, PetShopViewServiceBookingDetailsOutput } from '../contracts/operatorSchedule.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopOperatorScheduleBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_viewOperatorScheduleState = Assert<Assignable<typeof page.viewOperatorScheduleState, "idle" | "loading" | "success" | "error">>;
type _State_viewOperatorScheduleData = Assert<Assignable<typeof page.viewOperatorScheduleData, PetShopViewOperatorScheduleOutput>>;
type _State_viewServiceBookingDetailsState = Assert<Assignable<typeof page.viewServiceBookingDetailsState, "idle" | "loading" | "success" | "error">>;
type _State_viewServiceBookingDetailsServiceBookingId = Assert<Assignable<typeof page.viewServiceBookingDetailsServiceBookingId, string | PetShopViewServiceBookingDetailsInput["serviceBookingId"]>>;
type _State_viewServiceBookingDetailsData = Assert<Assignable<typeof page.viewServiceBookingDetailsData, PetShopViewServiceBookingDetailsOutput | null>>;
type _Action_loadViewOperatorSchedule = Assert<Assignable<typeof page.loadViewOperatorSchedule, (...args: any[]) => unknown>>;
type _Handler_handleViewOperatorScheduleClick = Assert<Assignable<typeof page.handleViewOperatorScheduleClick, (...args: any[]) => unknown>>;
type _Action_loadViewServiceBookingDetails = Assert<Assignable<typeof page.loadViewServiceBookingDetails, (...args: any[]) => unknown>>;
type _Handler_handleViewServiceBookingDetailsClick = Assert<Assignable<typeof page.handleViewServiceBookingDetailsClick, (...args: any[]) => unknown>>;
type _Action_setViewServiceBookingDetailsServiceBookingId = Assert<Assignable<typeof page.setViewServiceBookingDetailsServiceBookingId, (...args: any[]) => unknown>>;
type _Handler_handleViewServiceBookingDetailsServiceBookingIdChange = Assert<Assignable<typeof page.handleViewServiceBookingDetailsServiceBookingIdChange, (...args: any[]) => unknown>>;

export {};