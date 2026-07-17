/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/persistence/productRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IProductRepository, ProductFilter } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

interface ProductRow {
  product_id: string;
  pet_type_id: string;
  category_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ProductDetails {
  name: string;
  description: string | null;
  price: number;
  highlighted: boolean;
  updatedAt: string;
}

function toRow(product: Product): ProductRow {
  const details: ProductDetails = {
    name: product.name,
    description: product.description,
    price: product.price,
    highlighted: product.highlighted,
    updatedAt: product.updatedAt,
  };
  return {
    product_id: product.productId,
    pet_type_id: product.petTypeId,
    category_id: product.categoryId,
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
      highlighted: parsed.highlighted ?? false,
      updatedAt: parsed.updatedAt ?? row.created_at,
    };
  } catch {
    return {
      name: '',
      description: null,
      price: 0,
      highlighted: false,
      updatedAt: row.created_at,
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
    petTypeId: row.pet_type_id,
    categoryId: row.category_id,
    highlighted: d.highlighted,
    status: row.status as ProductStatus,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createProductRepositoryAdapter(ctx: RequestContext): IProductRepository {
  const getTable = () => ctx.data.moduleData.getTable<ProductRow>('product');

  return {
    async getById(id: string): Promise<Product> {
      const repo = await getTable();
      const row = await repo.findOne({ where: { product_id: id } });
      if (!row) {
        throw new AppError('NOT_FOUND', `Product ${id} not found`, 404, { productId: id });
      }
      return toDomain(row);
    },

    async list(filter?: ProductFilter): Promise<Product[]> {
      const repo = await getTable();
      const where: Partial<ProductRow> = {};
      if (filter?.status) where.status = filter.status;
      if (filter?.categoryId) where.category_id = filter.categoryId;
      if (filter?.petTypeId) where.pet_type_id = filter.petTypeId;

      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });

      let products = rows.map(toDomain);

      if (filter?.highlighted !== undefined) {
        products = products.filter((p) => p.highlighted === filter.highlighted);
      }

      return products;
    },

    async save(product: Product): Promise<void> {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { product_id: product.productId } });
      if (existing) {
        await repo.update({ where: { product_id: product.productId }, patch: toRow(product) });
      } else {
        await repo.insert({ record: toRow(product) });
      }
    },

    async findByName(name: string): Promise<Product[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const lowerName = name.trim().toLowerCase();
      return rows
        .map(toDomain)
        .filter((p) => p.name.toLowerCase().includes(lowerName));
    },

    async findByCategory(category: string): Promise<Product[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { category_id: category },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
