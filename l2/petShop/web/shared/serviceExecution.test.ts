/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceExecution.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopServiceExecutionBase } from './serviceExecution.js';
import type { PetShopCompleteServiceExecutionInput, PetShopCompleteServiceExecutionOutput, PetShopStartServiceExecutionInput, PetShopStartServiceExecutionOutput } from '../contracts/serviceExecution.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopServiceExecutionBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_startServiceExecutionState = Assert<Assignable<typeof page.startServiceExecutionState, "idle" | "loading" | "success" | "error">>;
type _State_startServiceExecutionServiceBookingId = Assert<Assignable<typeof page.startServiceExecutionServiceBookingId, string | PetShopStartServiceExecutionInput["serviceBookingId"]>>;
type _State_startServiceExecutionOutput = Assert<Assignable<typeof page.startServiceExecutionOutput, PetShopStartServiceExecutionOutput | null>>;
type _State_startServiceExecutionError = Assert<Assignable<typeof page.startServiceExecutionError, string>>;
type _State_completeServiceExecutionState = Assert<Assignable<typeof page.completeServiceExecutionState, "idle" | "loading" | "success" | "error">>;
type _State_completeServiceExecutionServiceBookingId = Assert<Assignable<typeof page.completeServiceExecutionServiceBookingId, string | PetShopCompleteServiceExecutionInput["serviceBookingId"]>>;
type _State_completeServiceExecutionOutput = Assert<Assignable<typeof page.completeServiceExecutionOutput, PetShopCompleteServiceExecutionOutput | null>>;
type _State_completeServiceExecutionError = Assert<Assignable<typeof page.completeServiceExecutionError, string>>;
type _Action_startServiceExecution = Assert<Assignable<typeof page.startServiceExecution, (...args: any[]) => unknown>>;
type _Handler_handleStartServiceExecutionClick = Assert<Assignable<typeof page.handleStartServiceExecutionClick, (...args: any[]) => unknown>>;
type _Action_completeServiceExecution = Assert<Assignable<typeof page.completeServiceExecution, (...args: any[]) => unknown>>;
type _Handler_handleCompleteServiceExecutionClick = Assert<Assignable<typeof page.handleCompleteServiceExecutionClick, (...args: any[]) => unknown>>;
type _Action_setStartServiceExecutionServiceBookingId = Assert<Assignable<typeof page.setStartServiceExecutionServiceBookingId, (...args: any[]) => unknown>>;
type _Handler_handleStartServiceExecutionServiceBookingIdChange = Assert<Assignable<typeof page.handleStartServiceExecutionServiceBookingIdChange, (...args: any[]) => unknown>>;
type _Action_setCompleteServiceExecutionServiceBookingId = Assert<Assignable<typeof page.setCompleteServiceExecutionServiceBookingId, (...args: any[]) => unknown>>;
type _Handler_handleCompleteServiceExecutionServiceBookingIdChange = Assert<Assignable<typeof page.handleCompleteServiceExecutionServiceBookingIdChange, (...args: any[]) => unknown>>;

export {};