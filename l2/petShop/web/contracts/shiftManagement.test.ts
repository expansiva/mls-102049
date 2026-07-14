/// <mls fileReference="_102049_/l2/petShop/web/contracts/shiftManagement.test.ts" enhancement="_blank"/>

import type { PetShopBrowseShiftsInput, PetShopBrowseShiftsOutput, PetShopBrowseShiftsOutputItem, PetShopCreateShiftInput, PetShopCreateShiftOutput, PetShopUpdateShiftInput, PetShopUpdateShiftOutput } from './shiftManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseShiftsInput = {
  activeFilter?: boolean;
};
type ExpectedPetShopBrowseShiftsOutputItem = {
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
};
type ExpectedPetShopBrowseShiftsOutput = { items: ExpectedPetShopBrowseShiftsOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopCreateShiftInput = {
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
};
type ExpectedPetShopCreateShiftOutput = {
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
};
type ExpectedPetShopUpdateShiftInput = {
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
};
type ExpectedPetShopUpdateShiftOutput = {
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
};

type _PetShopBrowseShiftsInput = Assert<Equal<PetShopBrowseShiftsInput, ExpectedPetShopBrowseShiftsInput>>;
type _PetShopBrowseShiftsOutputItem = Assert<Equal<PetShopBrowseShiftsOutputItem, ExpectedPetShopBrowseShiftsOutputItem>>;
type _PetShopBrowseShiftsOutput = Assert<Equal<PetShopBrowseShiftsOutput, ExpectedPetShopBrowseShiftsOutput>>;
type _PetShopCreateShiftInput = Assert<Equal<PetShopCreateShiftInput, ExpectedPetShopCreateShiftInput>>;
type _PetShopCreateShiftOutput = Assert<Equal<PetShopCreateShiftOutput, ExpectedPetShopCreateShiftOutput>>;
type _PetShopUpdateShiftInput = Assert<Equal<PetShopUpdateShiftInput, ExpectedPetShopUpdateShiftInput>>;
type _PetShopUpdateShiftOutput = Assert<Equal<PetShopUpdateShiftOutput, ExpectedPetShopUpdateShiftOutput>>;

export {};