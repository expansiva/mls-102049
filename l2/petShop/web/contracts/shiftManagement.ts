/// <mls fileReference="_102049_/l2/petShop/web/contracts/shiftManagement.ts" enhancement="_blank"/>

export interface PetShopBrowseShiftsInput {
  activeFilter?: boolean;
}

export interface PetShopBrowseShiftsOutputItem {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PetShopBrowseShiftsOutput {
  items: PetShopBrowseShiftsOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopCreateShiftInput {
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
}

export interface PetShopCreateShiftOutput {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
  createdAt: string;
}

export interface PetShopUpdateShiftInput {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
}

export interface PetShopUpdateShiftOutput {
  shiftId: string;
  name: string;
  startTime: string;
  endTime: string;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  active: boolean;
}
