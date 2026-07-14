/// <mls fileReference="_102049_/l2/petShop/web/contracts/operatorManagement.ts" enhancement="_blank"/>

export interface PetShopBrowseOperatorsInput {
  activeFilter?: boolean;
}

export interface PetShopBrowseOperatorsOutputItem {
  operatorId: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PetShopBrowseOperatorsOutput {
  items: PetShopBrowseOperatorsOutputItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

export interface PetShopCreateOperatorInput {
  name: string;
  email?: string;
  phone?: string;
  active: boolean;
}

export interface PetShopCreateOperatorOutput {
  operatorId: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  createdAt: string;
}

export interface PetShopUpdateOperatorInput {
  operatorId: string;
  name: string;
  email?: string;
  phone?: string;
  active: boolean;
}

export interface PetShopUpdateOperatorOutput {
  operatorId: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  updatedAt: string;
}
