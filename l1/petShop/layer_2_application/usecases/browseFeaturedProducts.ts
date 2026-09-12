/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseFeaturedProducts.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface BrowseFeaturedProductsInput {
  categoryId?: string;
  petTypeId?: string;
  name?: string;
  priceMin?: number;
  priceMax?: number;
  page?: number;
  pageSize?: number;
}

export interface BrowseFeaturedProductItem {
  productId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  categoryId: string;
  petTypeId: string;
}

export interface BrowseFeaturedProductsOutput {
  items: BrowseFeaturedProductItem[];
}

interface ProductDetailsShape {
  price?: number;
  isFeatured?: boolean;
  categoryId?: string;
  petTypeId?: string;
  name?: string;
  productId?: string;
  petShop?: ProductDetailsShape;
}

function readProductPayload(details: unknown): ProductDetailsShape {
  const root = (details ?? {}) as unknown as ProductDetailsShape & Record<string, unknown>;
  const nested = (root.petShop ?? {}) as ProductDetailsShape;
  return {
    price: nested.price ?? root.price,
    isFeatured: nested.isFeatured ?? root.isFeatured,
    categoryId: nested.categoryId ?? root.categoryId,
    petTypeId: nested.petTypeId ?? root.petTypeId,
    name: nested.name ?? root.name,
    productId: nested.productId ?? root.productId,
  };
}

export async function browseFeaturedProducts(
  ctx: RequestContext,
  input: BrowseFeaturedProductsInput,
): Promise<BrowseFeaturedProductsOutput> {
  const listed = await ctx.mdm.collection.listByType({
    type: 'petShop.Product',
    page: 1,
    pageSize: 10_000,
  });

  const mdmIds = listed.items.map((item) => item.mdmId);
  const entities = await ctx.mdm.collection.getMany({ mdmIds });

  const nameTerm = input.name?.trim().toLowerCase() ?? '';

  let items: BrowseFeaturedProductItem[] = [];

  for (const entity of entities) {
    const payload = readProductPayload(entity.details);
    const name = String(payload.name ?? entity.index.name ?? entity.details.name ?? '');
    const price = Number(payload.price ?? 0);
    const isFeatured = Boolean(payload.isFeatured);
    const categoryId = String(payload.categoryId ?? '');
    const petTypeId = String(payload.petTypeId ?? '');
    const productId = String(payload.productId ?? entity.mdmId);

    // rule: featuredProductsOnly
    if (!isFeatured) {
      continue;
    }

    // rule: combinedFilters
    if (input.categoryId !== undefined && categoryId !== input.categoryId) {
      continue;
    }
    if (input.petTypeId !== undefined && petTypeId !== input.petTypeId) {
      continue;
    }
    if (input.priceMin !== undefined && !(price >= input.priceMin)) {
      continue;
    }
    if (input.priceMax !== undefined && !(price <= input.priceMax)) {
      continue;
    }

    // rule: caseInsensitiveSearch
    if (nameTerm && !name.toLowerCase().includes(nameTerm)) {
      continue;
    }

    items.push({
      productId,
      name,
      price,
      isFeatured,
      categoryId,
      petTypeId,
    });
  }

  // rule: featuredOrderFlexible — preserve stable order from the featured set (no rigid sort)

  const page = input.page !== undefined && input.page > 0 ? input.page : 1;
  const pageSize =
    input.pageSize !== undefined && input.pageSize > 0 ? input.pageSize : items.length || 1;
  if (input.page !== undefined || input.pageSize !== undefined) {
    const offset = (page - 1) * pageSize;
    items = items.slice(offset, offset + pageSize);
  }

  return { items };
}
