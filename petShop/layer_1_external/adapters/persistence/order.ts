/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/order.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const orderTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopOrder',
  tableName: 'order',
  purpose: 'transacao',
  description: 'Pedidos. Campos não indexados e itens (OrderItem) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'order_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['order_id'],
  indexes: [
    { name: 'idx_order_status', columns: ['status'] },
    { name: 'idx_order_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
