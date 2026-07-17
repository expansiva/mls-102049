/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/searchProducts.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface SearchProductsInput {
  searchTerm: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface SearchProductItem {
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
}

export interface SearchProductsOutput {
  products: SearchProductItem[];
}

export async function searchProducts(
  ctx: RequestContext,
  input: SearchProductsInput,
): Promise<SearchProductsOutput> {
  // Step 1: Validate searchTerm is non-empty
  if (!input.searchTerm || input.searchTerm.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'searchIsCaseInsensitiveAndPartial: o termo de busca não pode ser vazio.',
      400,
      { ruleId: 'searchIsCaseInsensitiveAndPartial' },
    );
  }

  const productPort = resolveRepository<IProductRepository>(ctx, 'Product');

  // Step 2: Load all products from the Product port
  const allProducts = await productPort.list();

  // Step 3: Apply rule 'onlyAvailableProductsVisibleAndReservable' — filter to available products
  // rule: onlyAvailableProductsVisibleAndReservable
  const availableProducts = allProducts.filter(
    (p) => String(p.status) === 'available',
  );

  // Step 4: Apply rule 'searchIsCaseInsensitiveAndPartial' — partial, case-insensitive name match
  const term = input.searchTerm.trim().toLowerCase();
  // rule: searchIsCaseInsensitiveAndPartial
  const matchedProducts = availableProducts.filter((p) =>
    p.name.toLowerCase().includes(term),
  );

  // Step 5: Apply rule 'filtersCanBeCombined' — AND all optional filters together
  let filteredProducts = matchedProducts;
  // rule: filtersCanBeCombined
  if (input.petTypeId) {
    filteredProducts = filteredProducts.filter((p) => p.petTypeId === input.petTypeId);
  }
  // rule: filtersCanBeCombined
  if (input.categoryId) {
    filteredProducts = filteredProducts.filter((p) => p.categoryId === input.categoryId);
  }
  // rule: filtersCanBeCombined
  if (input.minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((p) => p.price >= input.minPrice!);
  }
  // rule: filtersCanBeCombined
  if (input.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((p) => p.price <= input.maxPrice!);
  }

  // Step 6: Collect unique petTypeId and categoryId values
  const petTypeIds = [...new Set(filteredProducts.map((p) => p.petTypeId))];
  const categoryIds = [...new Set(filteredProducts.map((p) => p.categoryId))];

  // Step 7: Bulk-fetch PetType and Category MDM records
  const petTypeMap = new Map<string, string>();
  const categoryMap = new Map<string, string>();

  if (petTypeIds.length > 0) {
    const petTypeResults = await ctx.mdm.collection.getMany({ mdmIds: petTypeIds });
    for (const result of petTypeResults) {
      const name = (result.details as unknown as Record<string, unknown>).name;
      if (typeof name === 'string') {
        petTypeMap.set(result.mdmId, name);
      }
    }
  }

  if (categoryIds.length > 0) {
    const categoryResults = await ctx.mdm.collection.getMany({ mdmIds: categoryIds });
    for (const result of categoryResults) {
      const name = (result.details as unknown as Record<string, unknown>).name;
      if (typeof name === 'string') {
        categoryMap.set(result.mdmId, name);
      }
    }
  }

  // Step 8: Map each filtered product to the output shape, enriching with MDM names
  const products: SearchProductItem[] = filteredProducts.map((p: Product) => ({
    productId: p.productId,
    name: p.name,
    description: p.description ?? undefined,
    price: p.price,
    petTypeId: p.petTypeId,
    petTypeName: petTypeMap.get(p.petTypeId) ?? '',
    categoryId: p.categoryId,
    categoryName: categoryMap.get(p.categoryId) ?? '',
    highlighted: p.highlighted,
    status: String(p.status),
  }));

  // Step 9: Return enriched list
  return { products };
}
