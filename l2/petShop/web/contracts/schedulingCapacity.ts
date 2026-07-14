/// <mls fileReference="_102049_/l2/petShop/web/contracts/schedulingCapacity.ts" enhancement="_blank"/>

export interface PetShopAssignOperatorToShiftInput {
  operatorId: string;
  shiftId: string;
}

export interface PetShopAssignOperatorToShiftOutput {
  shiftAssignmentId: string;
  operatorId: string;
  shiftId: string;
  createdAt: string;
}

export interface PetShopReviewSchedulingCapacityInput {
  shiftId?: string;
}

export interface PetShopReviewSchedulingCapacityOutputItem {
  shiftAssignmentId: string;
  operatorId: string;
  shiftId: string;
  createdAt: string;
  startTime: string;
  endTime: string;
  name: string;
}

export interface PetShopReviewSchedulingCapacityOutput {
  items: PetShopReviewSchedulingCapacityOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}
