/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/shiftAssignment.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const shiftAssignmentTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopShiftAssignment',
  tableName: 'shift_assignment',
  purpose: 'transacao',
  description: 'Atribuições de operadores a turnos. Campos não indexados (updatedAt) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'shift_assignment_id', postgresType: 'UUID' },
    { name: 'operator_id', postgresType: 'UUID' },
    { name: 'shift_id', postgresType: 'UUID' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['shift_assignment_id'],
  indexes: [
    { name: 'idx_shift_assignment_operator_id', columns: ['operator_id'] },
    { name: 'idx_shift_assignment_shift_id', columns: ['shift_id'] },
    { name: 'idx_shift_assignment_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
