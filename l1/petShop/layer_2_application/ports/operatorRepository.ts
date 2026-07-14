/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/operatorRepository.ts" enhancement="_blank"/>
import type { Operator } from '/_102049_/l1/petShop/layer_3_domain/entities/operator.js';

export type OperatorId = string;
export type Email = string;

export interface OperatorFilter {
  active?: boolean;
  name?: string;
}

export interface IOperatorRepository {
  getById(id: OperatorId): Promise<Operator | null>;
  list(filter?: OperatorFilter): Promise<Operator[]>;
  save(operator: Operator): Promise<void>;
  findByEmail(email: Email): Promise<Operator | null>;
  findActive(): Promise<Operator[]>;
}
