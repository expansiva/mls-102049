/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptionInterest.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const adoptionInterestTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopAdoptionInterest',
  tableName: 'adoption_interest',
  purpose: 'transacao',
  description:
    'Interesses de adoção. Campos não indexados (customer_name, customer_email, customer_phone, verification_notes, completed_at, cancelled_at, cancellation_reason, updated_at) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'adoption_interest_id', postgresType: 'UUID' },
    { name: 'adoptable_pet_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'operator_id', postgresType: 'UUID' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['adoption_interest_id'],
  indexes: [
    { name: 'idx_adoption_interest_adoptable_pet_id', columns: ['adoptable_pet_id'] },
    { name: 'idx_adoption_interest_status', columns: ['status'] },
    { name: 'idx_adoption_interest_operator_id', columns: ['operator_id'] },
    { name: 'idx_adoption_interest_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
