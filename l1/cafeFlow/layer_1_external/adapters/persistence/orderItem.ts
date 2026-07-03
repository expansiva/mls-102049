/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/orderItem.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const orderItemTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowOrderItem',
  tableName: 'order_item',
  purpose: 'transacao',
  description: 'Itens de pedido. Campos não indexados (quantity, unitPrice, itemTotal, substitutionsApplied, updatedAt) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'order_item_id', postgresType: 'UUID' },
    { name: 'order_id', postgresType: 'UUID' },
    { name: 'menu_item_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['order_item_id'],
  indexes: [
    { name: 'idx_order_item_order_id', columns: ['order_id'] },
    { name: 'idx_order_item_menu_item_id', columns: ['menu_item_id'] },
    { name: 'idx_order_item_status', columns: ['status'] },
    { name: 'idx_order_item_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
