/// <mls fileReference="_102049_/l2/petShop/web/shared/schedulingCapacity.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopSchedulingCapacityBase } from './schedulingCapacity.js';
import type { PetShopAssignOperatorToShiftInput, PetShopAssignOperatorToShiftOutput, PetShopReviewSchedulingCapacityInput, PetShopReviewSchedulingCapacityOutput } from '../contracts/schedulingCapacity.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopSchedulingCapacityBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_assignOperatorToShiftState = Assert<Assignable<typeof page.assignOperatorToShiftState, "idle" | "loading" | "success" | "error">>;
type _State_assignOperatorToShiftOperatorId = Assert<Assignable<typeof page.assignOperatorToShiftOperatorId, string | PetShopAssignOperatorToShiftInput["operatorId"]>>;
type _State_assignOperatorToShiftShiftId = Assert<Assignable<typeof page.assignOperatorToShiftShiftId, string | PetShopAssignOperatorToShiftInput["shiftId"]>>;
type _State_assignOperatorToShiftOutput = Assert<Assignable<typeof page.assignOperatorToShiftOutput, PetShopAssignOperatorToShiftOutput | null>>;
type _State_assignOperatorToShiftError = Assert<Assignable<typeof page.assignOperatorToShiftError, string>>;
type _State_reviewSchedulingCapacityState = Assert<Assignable<typeof page.reviewSchedulingCapacityState, "idle" | "loading" | "success" | "error">>;
type _State_reviewSchedulingCapacityShiftId = Assert<Assignable<typeof page.reviewSchedulingCapacityShiftId, string | PetShopReviewSchedulingCapacityInput["shiftId"]>>;
type _State_reviewSchedulingCapacityData = Assert<Assignable<typeof page.reviewSchedulingCapacityData, PetShopReviewSchedulingCapacityOutput>>;
type _State_activeCompanyId = Assert<Assignable<typeof page.activeCompanyId, string>>;
type _Action_assignOperatorToShift = Assert<Assignable<typeof page.assignOperatorToShift, (...args: any[]) => unknown>>;
type _Handler_handleAssignOperatorToShiftClick = Assert<Assignable<typeof page.handleAssignOperatorToShiftClick, (...args: any[]) => unknown>>;
type _Action_loadReviewSchedulingCapacity = Assert<Assignable<typeof page.loadReviewSchedulingCapacity, (...args: any[]) => unknown>>;
type _Handler_handleReviewSchedulingCapacityClick = Assert<Assignable<typeof page.handleReviewSchedulingCapacityClick, (...args: any[]) => unknown>>;
type _Action_setAssignOperatorToShiftOperatorId = Assert<Assignable<typeof page.setAssignOperatorToShiftOperatorId, (...args: any[]) => unknown>>;
type _Handler_handleAssignOperatorToShiftOperatorIdChange = Assert<Assignable<typeof page.handleAssignOperatorToShiftOperatorIdChange, (...args: any[]) => unknown>>;
type _Action_setAssignOperatorToShiftShiftId = Assert<Assignable<typeof page.setAssignOperatorToShiftShiftId, (...args: any[]) => unknown>>;
type _Handler_handleAssignOperatorToShiftShiftIdChange = Assert<Assignable<typeof page.handleAssignOperatorToShiftShiftIdChange, (...args: any[]) => unknown>>;
type _Action_setReviewSchedulingCapacityShiftId = Assert<Assignable<typeof page.setReviewSchedulingCapacityShiftId, (...args: any[]) => unknown>>;
type _Handler_handleReviewSchedulingCapacityShiftIdChange = Assert<Assignable<typeof page.handleReviewSchedulingCapacityShiftIdChange, (...args: any[]) => unknown>>;

export {};