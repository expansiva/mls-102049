/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseProductCatalog.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository, ProductFilter } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface BrowseProductCatalogInput {
  searchName?: string;
  productCategoryId?: string;
  page?: number;
  pageSize?: number;
}

export interface BrowseProductCatalogItem {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  productCategoryId: string;
  featured: boolean;
}

export interface BrowseProductCatalogOutput {
  products: BrowseProductCatalogItem[];
  totalCount: number;
}

/**
 * Checks whether an imageUrl references the platform storage URL pattern.
 * Platform storage URLs are absolute http(s) URLs or relative paths served
 * by the platform CDN. Non-platform URLs are rejected.
 */
function isPlatformStorageUrl(url: string): boolean {
  return /^https?:\/\//.test(url) || url.startsWith('/');
}

export async function browseProductCatalog(
  ctx: RequestContext,
  input: BrowseProductCatalogInput,
): Promise<BrowseProductCatalogOutput> {
  const productRepo = resolveRepository<IProductRepository>(ctx, 'Product');

  // Step 1: Build filter with status=active (systemDefault from contextResolution)
  const filter: ProductFilter = {
    status: 'active',
  };

  // Step 3: Add productCategoryId equality filter if provided
  if (input.productCategoryId) {
    filter.productCategoryId = input.productCategoryId;
  }

  // Step 2: Pass searchName to the port filter (port may apply server-side)
  if (input.searchName) {
    filter.name = input.searchName;
  }

  // Step 5: Execute the list query through the Product port
  let matchingProducts: Product[] = await productRepo.list(filter);

  // Step 2 (client-side): case-insensitive contains filter on Product.name
  if (input.searchName) {
    const searchLower = input.searchName.toLowerCase();
    matchingProducts = matchingProducts.filter((p) =>
      p.name.toLowerCase().includes(searchLower),
    );
  }

  // Step 6: Apply rule featuredProductRequiresActive — exclude any featured
  // product whose status is not 'active' (defensive; query already filters active)
  matchingProducts = matchingProducts.filter(
    (p) => !(p.featured && p.status !== 'active'),
  );

  const totalCount = matchingProducts.length;

  // Step 4: Apply pagination if both page and pageSize are provided
  let pagedProducts: Product[] = matchingProducts;
  if (input.page != null && input.pageSize != null && input.pageSize > 0) {
    const offset = (Math.max(1, input.page) - 1) * input.pageSize;
    pagedProducts = matchingProducts.slice(offset, offset + input.pageSize);
  }

  // Step 7: Apply rule productImageUsesPlatformStorage — null out non-platform URLs
  // Step 9: Project each product to the output fields
  const projected: BrowseProductCatalogItem[] = pagedProducts.map((p) => ({
    productId: p.productId,
    name: p.name,
    description: p.description,
    price: p.price,
    imageUrl: p.imageUrl && isPlatformStorageUrl(p.imageUrl) ? p.imageUrl : null,
    productCategoryId: p.productCategoryId,
    featured: p.featured,
  }));

  // Step 10: Return the projected collection along with totalCount
  return {
    products: projected,
    totalCount,
  };
}
