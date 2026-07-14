/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/operator.ts" enhancement="_blank"/>
export interface Operator {
  operatorId: string;
  name: string;
  email: string | null;
  phone: string | null;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export function operatorCanBeAllocated(operator: Pick<Operator, 'active'>): boolean {
  return operator.active;
}

export function operatorUpdatedAtIsValid(operator: Pick<Operator, 'createdAt' | 'updatedAt'>): boolean {
  return operator.updatedAt >= operator.createdAt;
}
