/// <mls fileReference="_102049_/l2/petShop/web/contracts/operatorManagement.test.ts" enhancement="_blank"/>

import type { PetShopBrowseOperatorsInput, PetShopBrowseOperatorsOutput, PetShopBrowseOperatorsOutputItem, PetShopCreateOperatorInput, PetShopCreateOperatorOutput, PetShopUpdateOperatorInput, PetShopUpdateOperatorOutput } from './operatorManagement.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopBrowseOperatorsInput = {
  activeFilter?: boolean;
};
type ExpectedPetShopBrowseOperatorsOutputItem = {
  operatorId: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};
type ExpectedPetShopBrowseOperatorsOutput = { items: ExpectedPetShopBrowseOperatorsOutputItem[]; total: number; page?: number; pageSize?: number; };
type ExpectedPetShopCreateOperatorInput = {
  name: string;
  email?: string;
  phone?: string;
  active: boolean;
};
type ExpectedPetShopCreateOperatorOutput = {
  operatorId: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt: string;
};
type ExpectedPetShopUpdateOperatorInput = {
  operatorId: string;
  name: string;
  email?: string;
  phone?: string;
  active: boolean;
};
type ExpectedPetShopUpdateOperatorOutput = {
  operatorId: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  updatedAt: string;
};

type _PetShopBrowseOperatorsInput = Assert<Equal<PetShopBrowseOperatorsInput, ExpectedPetShopBrowseOperatorsInput>>;
type _PetShopBrowseOperatorsOutputItem = Assert<Equal<PetShopBrowseOperatorsOutputItem, ExpectedPetShopBrowseOperatorsOutputItem>>;
type _PetShopBrowseOperatorsOutput = Assert<Equal<PetShopBrowseOperatorsOutput, ExpectedPetShopBrowseOperatorsOutput>>;
type _PetShopCreateOperatorInput = Assert<Equal<PetShopCreateOperatorInput, ExpectedPetShopCreateOperatorInput>>;
type _PetShopCreateOperatorOutput = Assert<Equal<PetShopCreateOperatorOutput, ExpectedPetShopCreateOperatorOutput>>;
type _PetShopUpdateOperatorInput = Assert<Equal<PetShopUpdateOperatorInput, ExpectedPetShopUpdateOperatorInput>>;
type _PetShopUpdateOperatorOutput = Assert<Equal<PetShopUpdateOperatorOutput, ExpectedPetShopUpdateOperatorOutput>>;

export {};