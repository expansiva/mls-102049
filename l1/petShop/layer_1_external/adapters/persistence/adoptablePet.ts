/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/adoptablePet.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const adoptablePetTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopAdoptablePet',
  tableName: 'adoptable_pet',
  purpose: 'cadastro',
  description: 'Pets available for adoption. Non-indexed fields (name, age, description, photo_url, updated_at) stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'adoptable_pet_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['adoptable_pet_id'],
  indexes: [
    { name: 'idx_adoptable_pet_status', columns: ['status'] },
    { name: 'idx_adoptable_pet_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
