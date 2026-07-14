/// <mls fileReference="_102049_/l2/petShop/web/contracts/schedulingCapacity.test.ts" enhancement="_blank"/>

import type { PetShopAssignOperatorToShiftInput, PetShopAssignOperatorToShiftOutput, PetShopReviewSchedulingCapacityInput, PetShopReviewSchedulingCapacityOutput, PetShopReviewSchedulingCapacityOutputItem } from './schedulingCapacity.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopAssignOperatorToShiftInput = {
  operatorId: string;
  shiftId: string;
};
type ExpectedPetShopAssignOperatorToShiftOutput = {
  shiftAssignmentId: string;
  operatorId: string;
  shiftId: string;
  createdAt: string;
};
type ExpectedPetShopReviewSchedulingCapacityInput = {
  shiftId?: string;
};
type ExpectedPetShopReviewSchedulingCapacityOutputItem = {
  shiftAssignmentId: string;
  operatorId: string;
  shiftId: string;
  createdAt: string;
  startTime: string;
  endTime: string;
  name: string;
};
type ExpectedPetShopReviewSchedulingCapacityOutput = { items: ExpectedPetShopReviewSchedulingCapacityOutputItem[]; total: number; page?: number; pageSize?: number; };

type _PetShopAssignOperatorToShiftInput = Assert<Equal<PetShopAssignOperatorToShiftInput, ExpectedPetShopAssignOperatorToShiftInput>>;
type _PetShopAssignOperatorToShiftOutput = Assert<Equal<PetShopAssignOperatorToShiftOutput, ExpectedPetShopAssignOperatorToShiftOutput>>;
type _PetShopReviewSchedulingCapacityInput = Assert<Equal<PetShopReviewSchedulingCapacityInput, ExpectedPetShopReviewSchedulingCapacityInput>>;
type _PetShopReviewSchedulingCapacityOutputItem = Assert<Equal<PetShopReviewSchedulingCapacityOutputItem, ExpectedPetShopReviewSchedulingCapacityOutputItem>>;
type _PetShopReviewSchedulingCapacityOutput = Assert<Equal<PetShopReviewSchedulingCapacityOutput, ExpectedPetShopReviewSchedulingCapacityOutput>>;

export {};