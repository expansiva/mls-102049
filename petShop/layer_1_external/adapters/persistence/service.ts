/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/service.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const serviceTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopService',
  tableName: 'service',
  purpose: 'cadastro',
  description: 'Serviços. Campos não indexados (name, description, estimated_duration_minutes, price, deactivated_at, updated_at) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'service_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['service_id'],
  indexes: [
    { name: 'idx_service_status', columns: ['status'] },
    { name: 'idx_service_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
