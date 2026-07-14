/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseProducts.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository, ProductFilter } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface BrowseProductsInput {
  searchName?: string;
  filterStatus?: string;
  filterProductCategoryId?: string;
  filterFeatured?: boolean;
}

export interface BrowseProductsOutputItem {
  productId: string;
  name: string;
  price: number;
  imageUrl: string | null;
  productCategoryId: string;
  featured: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrowseProductsOutput {
  products: BrowseProductsOutputItem[];
}

export async function browseProducts(
  ctx: RequestContext,
  input: BrowseProductsInput,
): Promise<BrowseProductsOutput> {
  // Step 1: Verify caller has admin scope
  const scope = ctx.sessionContext.actorSession?.scope ?? [];
  if (!scope.includes('admin')) {
    throw new AppError(
      'FORBIDDEN',
      'Caller must have admin scope to browse products.',
      403,
      { ruleId: 'adminScopeRequired' },
    );
  }

  // Step 2: Build filter from optional inputs
  const filter: ProductFilter = {};

  if (input.searchName) {
    filter.name = input.searchName;
  }

  if (input.filterStatus) {
    filter.status = input.filterStatus as ProductStatus;
  }

  if (input.filterProductCategoryId) {
    filter.productCategoryId = input.filterProductCategoryId;
  }

  if (input.filterFeatured !== undefined) {
    filter.featured = input.filterFeatured;
  }

  // Step 3: Apply rule featuredProductRequiresActive — when filterFeatured is true,
  // force status = 'active' so only active featured products are returned.
  if (input.filterFeatured === true) {
    filter.status = 'active';
  }

  const productRepo = resolveRepository<IProductRepository>(ctx, 'Product');
  const allProducts = await productRepo.list(filter);

  // Also exclude any product where featured=true but status !== 'active' (safety net)
  const visibleProducts = allProducts.filter(
    (p: Product) => !(p.featured && p.status !== 'active'),
  );

  // Step 4: Order results by createdAt descending
  visibleProducts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  // Step 5: Bulk-read ProductCategory MDM records for hydration if needed.
  // The output projection does not include a category name field, so no
  // additional hydration is required for the returned payload.

  // Step 6: Return projected list
  const products: BrowseProductsOutputItem[] = visibleProducts.map((p) => ({
    productId: p.productId,
    name: p.name,
    price: p.price,
    imageUrl: p.imageUrl,
    productCategoryId: p.productCategoryId,
    featured: p.featured,
    status: p.status,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  }));

  return { products };
}
