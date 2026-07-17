/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseProducts.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository, ProductFilter } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface BrowseProductsInput {
  searchTerm?: string;
  petTypeId?: string;
  categoryId?: string;
  priceMin?: number;
  priceMax?: number;
  status?: string;
  highlighted?: boolean;
  page?: number;
  pageSize?: number;
}

export interface BrowseProductsItem {
  productId: string;
  name: string;
  description?: string;
  price: number;
  petTypeId: string;
  petTypeName: string;
  categoryId: string;
  categoryName: string;
  highlighted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrowseProductsOutput {
  products: BrowseProductsItem[];
}

export async function browseProducts(ctx: RequestContext, input: BrowseProductsInput): Promise<BrowseProductsOutput> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // Build filter from user inputs — all optional, AND-joined.
  const filter: ProductFilter = {};
  if (input.status) {
    filter.status = input.status as ProductStatus;
  }
  if (input.categoryId) {
    filter.categoryId = input.categoryId;
  }
  if (input.petTypeId) {
    filter.petTypeId = input.petTypeId;
  }
  if (input.highlighted !== undefined) {
    filter.highlighted = input.highlighted;
  }

  // rule: filtersCanBeCombined — all provided filters are AND-joined; none excludes another.
  let result = await products.list(filter);

  // rule: searchIsCaseInsensitiveAndPartial — case-insensitive partial match on name.
  if (input.searchTerm) {
    const term = input.searchTerm.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(term));
  }

  // Apply price range filters (>= priceMin, <= priceMax).
  if (input.priceMin !== undefined) {
    result = result.filter((p) => p.price >= input.priceMin!);
  }
  if (input.priceMax !== undefined) {
    result = result.filter((p) => p.price <= input.priceMax!);
  }

  // rule: highlightRequiresAvailableProduct — a highlighted product that is unavailable
  // cannot be presented as a valid highlight. If the user explicitly filtered highlighted=true,
  // exclude unavailable products entirely; otherwise just set effective highlighted to false.
  const explicitHighlightFilter = input.highlighted === true;
  const enriched: BrowseProductsItem[] = [];

  // Collect unique petTypeIds and categoryIds for bulk MDM lookup.
  const petTypeIds = [...new Set(result.map((p) => p.petTypeId).filter(Boolean))];
  const categoryIds = [...new Set(result.map((p) => p.categoryId).filter(Boolean))];

  // Bulk-fetch PetType and Category MDM records (plural-first, no loop-per-id).
  const petTypeEntities = petTypeIds.length > 0
    ? await ctx.mdm.collection.getMany({ mdmIds: petTypeIds })
    : [];
  const categoryEntities = categoryIds.length > 0
    ? await ctx.mdm.collection.getMany({ mdmIds: categoryIds })
    : [];

  const petTypeNameMap = new Map<string, string>();
  for (const entity of petTypeEntities) {
    const name = (entity.details as unknown as Record<string, unknown>).name;
    petTypeNameMap.set(entity.mdmId, typeof name === 'string' ? name : '');
  }

  const categoryNameMap = new Map<string, string>();
  for (const entity of categoryEntities) {
    const name = (entity.details as unknown as Record<string, unknown>).name;
    categoryNameMap.set(entity.mdmId, typeof name === 'string' ? name : '');
  }

  for (const product of result) {
    // rule: highlightRequiresAvailableProduct
    let effectiveHighlighted = product.highlighted;
    if (product.highlighted && product.status === 'unavailable') {
      if (explicitHighlightFilter) {
        // Exclude unavailable products when user explicitly filtered highlighted=true.
        continue;
      }
      effectiveHighlighted = false;
    }

    enriched.push({
      productId: product.productId,
      name: product.name,
      description: product.description ?? undefined,
      price: product.price,
      petTypeId: product.petTypeId,
      petTypeName: petTypeNameMap.get(product.petTypeId) ?? '',
      categoryId: product.categoryId,
      categoryName: categoryNameMap.get(product.categoryId) ?? '',
      highlighted: effectiveHighlighted,
      status: product.status,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  }

  // Apply pagination after enrichment (offset = (page-1)*pageSize, limit = pageSize).
  const page = input.page && input.page > 0 ? input.page : 1;
  const pageSize = input.pageSize && input.pageSize > 0 ? input.pageSize : enriched.length;
  const offset = (page - 1) * pageSize;
  const paged = enriched.slice(offset, offset + pageSize);

  return { products: paged };
}
