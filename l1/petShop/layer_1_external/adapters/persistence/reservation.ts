/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/reservation.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const reservationTableDef: TableDefinition = {
moduleId: 'petShop',
repositoryName: 'petShopReservation',
tableName: 'reservation',
purpose: 'transacao',
description: 'Reservas. Itens e campos não indexados em details (JSONB).',
backupHot: false,
storageProfile: 'postgres',
writeMode: 'sync',
columns: [
{ name: 'reservation_id', postgresType: 'UUID' },
{ name: 'customer_id', postgresType: 'UUID' },
{ name: 'status', postgresType: 'TEXT' },
{ name: 'payment_id', postgresType: 'UUID' },
{ name: 'created_at', postgresType: 'TIMESTAMPTZ' },
{ name: 'details', postgresType: 'JSONB' },
],
primaryKey: ['reservation_id'],
indexes: [
{ name: 'ix_reservation_customer_id', columns: ['customer_id'] },
{ name: 'ix_reservation_payment_id', columns: ['payment_id'] },
{ name: 'ix_reservation_status', columns: ['status'] },
{ name: 'ix_reservation_created_at', columns: ['created_at'] },
],
version: 1,
};
