/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/filterProducts.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface FilterProductsInput {
  petTypeId?: string;
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
}

export interface FilterProductsItem {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
}

export interface FilterProductsOutput {
  products: FilterProductsItem[];
}

export async function filterProducts(ctx: RequestContext, input: FilterProductsInput): Promise<FilterProductsOutput> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  const all = await products.list();

  // rule: onlyAvailableProductsVisibleAndReservable
  const available = all.filter((p) => p.status === 'available');

  // rule: filtersCanBeCombined — all criteria use AND logic
  let filtered = available;

  if (input.petTypeId) {
    filtered = filtered.filter((p) => p.petTypeId === input.petTypeId);
  }

  if (input.categoryId) {
    filtered = filtered.filter((p) => p.categoryId === input.categoryId);
  }

  if (input.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= input.minPrice!);
  }

  if (input.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= input.maxPrice!);
  }

  const projected: FilterProductsItem[] = filtered.map((p: Product) => ({
    productId: p.productId,
    name: p.name,
    description: p.description,
    price: p.price,
    petTypeId: p.petTypeId,
    categoryId: p.categoryId,
    highlighted: p.highlighted,
    status: p.status,
  }));

  return { products: projected };
}
