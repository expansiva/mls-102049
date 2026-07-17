/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/payment.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const paymentTableDef: TableDefinition = {
moduleId: 'petShop',
repositoryName: 'petShopPayment',
tableName: 'payment',
purpose: 'controle',
description: 'Pagamentos. Itens e campos não indexados em details (JSONB).',
backupHot: false,
storageProfile: 'postgres',
writeMode: 'sync',
columns: [
{ name: 'payment_id', postgresType: 'UUID' },
{ name: 'reservation_id', postgresType: 'UUID' },
{ name: 'payment_method', postgresType: 'TEXT' },
{ name: 'status', postgresType: 'TEXT' },
{ name: 'created_at', postgresType: 'TIMESTAMPTZ' },
{ name: 'details', postgresType: 'JSONB' },
],
primaryKey: ['payment_id'],
indexes: [
{ name: 'ix_payment_reservation_id', columns: ['reservation_id'] },
{ name: 'ix_payment_payment_method', columns: ['payment_method'] },
{ name: 'ix_payment_status', columns: ['status'] },
{ name: 'ix_payment_created_at', columns: ['created_at'] },
],
retentionDays: 365,
version: 1,
};
