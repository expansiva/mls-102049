/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/payment.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const paymentTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopPayment',
  tableName: 'payment',
  purpose: 'controle',
  description: 'Pagamentos. Campos não indexados em details (JSONB). Append-only com retenção.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'payment_id', postgresType: 'UUID' },
    { name: 'reservation_id', postgresType: 'UUID' },
    { name: 'method', postgresType: 'TEXT' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['payment_id'],
  indexes: [
    { name: 'idx_payment_reservation_id', columns: ['reservation_id'] },
    { name: 'idx_payment_method', columns: ['method'] },
    { name: 'idx_payment_status', columns: ['status'] },
    { name: 'idx_payment_created_at', columns: ['created_at'] },
  ],
  retentionDays: 365,
  version: 1,
};
