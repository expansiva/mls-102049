/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/shiftStatusEvent.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const shiftStatusEventTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowShiftStatusEvent',
  tableName: 'shift_status_event',
  purpose: 'controle',
  description:
    'Eventos de status do caixa (abertura/fechamento). Append-only. Campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'shift_status_event_id', postgresType: 'UUID' },
    { name: 'shift_id', postgresType: 'UUID' },
    { name: 'event_type', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['shift_status_event_id'],
  indexes: [
    { name: 'idx_shift_status_event_shift_id', columns: ['shift_id'] },
    { name: 'idx_shift_status_event_event_type', columns: ['event_type'] },
    { name: 'idx_shift_status_event_created_at', columns: ['created_at'] },
  ],
  retentionDays: 365,
  version: 1,
};
