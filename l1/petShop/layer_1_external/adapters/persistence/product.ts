/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/product.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const productTableDef: TableDefinition = {
  moduleId: 'petShop',
  repositoryName: 'petShopProduct',
  tableName: 'product',
  purpose: 'cadastro',
  description: 'Produtos. Campos não indexados (name, description, price, image_url, featured, updated_at) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'product_id', postgresType: 'UUID' },
    { name: 'product_category_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['product_id'],
  indexes: [
    { name: 'idx_product_product_category_id', columns: ['product_category_id'] },
    { name: 'idx_product_status', columns: ['status'] },
    { name: 'idx_product_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
