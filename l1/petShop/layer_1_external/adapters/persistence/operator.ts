/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/operator.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const operatorTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopOperator',
  tableName: 'operator',
  purpose: 'cadastro',
  description: 'Operadores. Campos não indexados (name, email, phone, active, updated_at) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'operator_id', postgresType: 'UUID' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['operator_id'],
  indexes: [
    { name: 'idx_operator_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
