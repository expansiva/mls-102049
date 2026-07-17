/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/product.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const productTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopProduct',
  tableName: 'product',
  purpose: 'cadastro',
  description: 'Produtos do pet shop. Campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'product_id', postgresType: 'UUID' },
    { name: 'pet_type_id', postgresType: 'UUID' },
    { name: 'category_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB' },
  ],
  primaryKey: ['product_id'],
  indexes: [
    { name: 'ix_product_pet_type_id', columns: ['pet_type_id'] },
    { name: 'ix_product_category_id', columns: ['category_id'] },
    { name: 'ix_product_status', columns: ['status'] },
    { name: 'ix_product_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
