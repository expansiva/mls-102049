/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/reservation.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const reservationTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopReservation',
  tableName: 'reservation',
  purpose: 'transacao',
  description: 'Reservation aggregate. Itens e campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'reservation_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'payment_id', postgresType: 'UUID', nullable: true },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['reservation_id'],
  indexes: [
    { name: 'idx_reservation_status', columns: ['status'] },
    { name: 'idx_reservation_payment_id', columns: ['payment_id'] },
    { name: 'idx_reservation_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
