/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseCatalog.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository, ProductFilter } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface BrowseCatalogInput {
  searchTerm?: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
  page: number;
  pageSize: number;
}

export interface BrowseCatalogProduct {
  productId: string;
  name: string;
  description?: string | null;
  price: number;
  petTypeId: string;
  petTypeName?: string;
  categoryId: string;
  categoryName?: string;
  highlighted: boolean;
  status: string;
}

export interface BrowseCatalogOutput {
  products: BrowseCatalogProduct[];
  total: number;
  page: number;
  pageSize: number;
}

export async function browseCatalog(ctx: RequestContext, input: BrowseCatalogInput): Promise<BrowseCatalogOutput> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // rule: onlyAvailableProductsVisibleAndReservable, highlightRequiresAvailableProduct
  const status: ProductStatus = 'available';
  const filter: ProductFilter = { status };

  // rule: filtersCanBeCombined
  if (input.petTypeId) {
    filter.petTypeId = input.petTypeId;
  }
  if (input.categoryId) {
    filter.categoryId = input.categoryId;
  }

  let allProducts = await products.list(filter);

  // rule: searchIsCaseInsensitiveAndPartial
  if (input.searchTerm) {
    const term = input.searchTerm.toLowerCase();
    allProducts = allProducts.filter((p) => p.name.toLowerCase().includes(term));
  }

  // rule: filtersCanBeCombined — price range filters
  if (input.minPrice !== undefined) {
    allProducts = allProducts.filter((p) => p.price >= input.minPrice!);
  }
  if (input.maxPrice !== undefined) {
    allProducts = allProducts.filter((p) => p.price <= input.maxPrice!);
  }

  // Sort by createdAt descending
  allProducts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const total = allProducts.length;
  const page = Math.max(1, input.page);
  const pageSize = Math.max(1, input.pageSize);
  const offset = (page - 1) * pageSize;
  const pagedProducts = allProducts.slice(offset, offset + pageSize);

  // Collect distinct petTypeIds and categoryIds for MDM name hydration (plural-first)
  const petTypeIds = [...new Set(pagedProducts.map((p) => p.petTypeId).filter((id) => id))];
  const categoryIds = [...new Set(pagedProducts.map((p) => p.categoryId).filter((id) => id))];

  const petTypeNames = new Map<string, string>();
  const categoryNames = new Map<string, string>();

  if (petTypeIds.length > 0) {
    const petTypeEntities = await ctx.mdm.collection.getMany({ mdmIds: petTypeIds });
    for (const entity of petTypeEntities) {
      petTypeNames.set(entity.mdmId, entity.details.name ?? null);
    }
  }

  if (categoryIds.length > 0) {
    const categoryEntities = await ctx.mdm.collection.getMany({ mdmIds: categoryIds });
    for (const entity of categoryEntities) {
      categoryNames.set(entity.mdmId, entity.details.name ?? null);
    }
  }

  const outputProducts: BrowseCatalogProduct[] = pagedProducts.map((p: Product) => ({
    productId: p.productId,
    name: p.name,
    description: p.description,
    price: p.price,
    petTypeId: p.petTypeId,
    petTypeName: petTypeNames.get(p.petTypeId) ?? undefined,
    categoryId: p.categoryId,
    categoryName: categoryNames.get(p.categoryId) ?? undefined,
    highlighted: p.highlighted,
    status: p.status,
  }));

  return {
    products: outputProducts,
    total,
    page,
    pageSize,
  };
}
