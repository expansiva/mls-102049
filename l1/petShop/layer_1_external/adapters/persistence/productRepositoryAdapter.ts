/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/productRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IProductRepository, ProductFilter } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

interface ProductRow {
  product_id: string;
  product_category_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ProductDetails {
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  featured: boolean;
  updated_at: string;
}

function toRow(product: Product): ProductRow {
  const details: ProductDetails = {
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.imageUrl,
    featured: product.featured,
    updated_at: product.updatedAt,
  };
  return {
    product_id: product.productId,
    product_category_id: product.productCategoryId,
    status: product.status,
    created_at: product.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: ProductRow): ProductDetails {
  try {
    const parsed = JSON.parse(row.details ?? '{}') as Partial<ProductDetails>;
    return {
      name: parsed.name ?? '',
      description: parsed.description ?? null,
      price: parsed.price ?? 0,
      image_url: parsed.image_url ?? null,
      featured: parsed.featured ?? false,
      updated_at: parsed.updated_at ?? row.created_at,
    };
  } catch {
    return {
      name: '',
      description: null,
      price: 0,
      image_url: null,
      featured: false,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: ProductRow): Product {
  const d = parseDetails(row);
  return {
    productId: row.product_id,
    name: d.name,
    description: d.description,
    price: d.price,
    imageUrl: d.image_url,
    productCategoryId: row.product_category_id,
    featured: d.featured,
    status: row.status as ProductStatus,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

/**
 * Bulk-resolve ProductCategory MDM entities for a set of category ids.
 * Uses ctx.mdm.collection.getMany (no loop, single batched call).
 */
async function resolveCategoryNames(
  ctx: RequestContext,
  categoryIds: string[],
): Promise<Map<string, string>> {
  const uniqueIds = [...new Set(categoryIds.filter((id) => typeof id === 'string' && id.length > 0))];
  if (uniqueIds.length === 0) {
    return new Map();
  }
  const entities = await ctx.mdm.collection.getMany({ mdmIds: uniqueIds });
  const nameMap = new Map<string, string>();
  for (const entity of entities) {
    const details = entity.details as unknown as Record<string, unknown>;
    const name = typeof details.name === 'string' ? details.name : entity.index.name;
    nameMap.set(entity.mdmId, name);
  }
  return nameMap;
}

export function createProductRepositoryAdapter(ctx: RequestContext): IProductRepository {
  const getTable = () => ctx.data.moduleData.getTable<ProductRow>('product');

  return {
    async getById(id) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { product_id: id } });
      return row ? toDomain(row) : null;
    },

    async list(filter: ProductFilter) {
      const repo = await getTable();
      const where: Partial<ProductRow> = {};
      if (filter.status) {
        where.status = filter.status;
      }
      if (filter.productCategoryId) {
        where.product_category_id = filter.productCategoryId;
      }
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let products = rows.map(toDomain);

      // JSONB-stored fields filtered in memory
      if (filter.featured !== undefined) {
        products = products.filter((p) => p.featured === filter.featured);
      }
      if (filter.name) {
        const lowerName = filter.name.toLowerCase();
        products = products.filter((p) => p.name.toLowerCase().includes(lowerName));
      }

      return products;
    },

    async save(product) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { product_id: product.productId } });
      if (existing) {
        await repo.update({ where: { product_id: product.productId }, patch: toRow(product) });
      } else {
        await repo.insert({ record: toRow(product) });
      }
    },

    async findBySku(sku) {
      // No dedicated sku column; product_id serves as the unique product identifier.
      const repo = await getTable();
      const row = await repo.findOne({ where: { product_id: sku } });
      return row ? toDomain(row) : null;
    },

    async findByCategory(category) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { product_category_id: category },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
