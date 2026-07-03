/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockMovementEvent.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const stockMovementEventTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowStockMovementEvent',
  tableName: 'stock_movement_event',
  purpose: 'controle',
  description:
    'Eventos de movimentação de estoque (append-only). Campos não indexados (quantity, reason, updatedAt) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'stock_movement_event_id', postgresType: 'UUID' },
    { name: 'stock_item_id', postgresType: 'UUID' },
    { name: 'movement_type', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['stock_movement_event_id'],
  indexes: [
    { name: 'idx_stock_movement_event_stock_item_id', columns: ['stock_item_id'] },
    { name: 'idx_stock_movement_event_movement_type', columns: ['movement_type'] },
    { name: 'idx_stock_movement_event_created_at', columns: ['created_at'] },
  ],
  retentionDays: 90,
  version: 1,
};
