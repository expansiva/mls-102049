/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/order.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const orderTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowOrder',
  tableName: 'order',
  purpose: 'transacao',
  description: 'Pedidos. total, updatedAt e demais campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'id', postgresType: 'UUID' },
    { name: 'order_type', postgresType: 'TEXT' },
    { name: 'table_id', postgresType: 'UUID', nullable: true },
    { name: 'shift_id', postgresType: 'UUID', nullable: true },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['id'],
  indexes: [
    { name: 'idx_order_order_type', columns: ['order_type'] },
    { name: 'idx_order_table_id', columns: ['table_id'] },
    { name: 'idx_order_shift_id', columns: ['shift_id'] },
    { name: 'idx_order_status', columns: ['status'] },
    { name: 'idx_order_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
