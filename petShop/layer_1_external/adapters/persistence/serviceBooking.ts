/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/serviceBooking.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const serviceBookingTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopServiceBooking',
  tableName: 'service_booking',
  purpose: 'transacao',
  description: 'Agendamentos de serviço. Campos não indexados (customer_name, customer_phone, booking_date, booking_time, notes, completed_at, cancelled_at, cancel_reason, updated_at) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'service_booking_id', postgresType: 'UUID' },
    { name: 'service_id', postgresType: 'UUID' },
    { name: 'operator_id', postgresType: 'UUID' },
    { name: 'shift_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['service_booking_id'],
  indexes: [
    { name: 'idx_service_booking_service_id', columns: ['service_id'] },
    { name: 'idx_service_booking_operator_id', columns: ['operator_id'] },
    { name: 'idx_service_booking_shift_id', columns: ['shift_id'] },
    { name: 'idx_service_booking_status', columns: ['status'] },
    { name: 'idx_service_booking_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
