/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/browseProducts.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface BrowseProductsInput {
  searchName?: string;
  petTypeId?: string;
  categoryId?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: number;
  pageSize?: number;
}

export interface BrowseProductsItem {
  productId: string;
  name: string;
  price: number;
  isFeatured: boolean;
  categoryId: string;
  categoryName: string;
  petTypeId: string;
  petTypeName: string;
  createdAt: string;
  updatedAt: string;
}

export interface BrowseProductsOutput {
  items: BrowseProductsItem[];
  total: number;
  page: number;
  pageSize: number;
}

interface ProductDetails {
  name?: string;
  price?: number;
  isFeatured?: boolean;
  categoryId?: string;
  petTypeId?: string;
  productId?: string;
  petShop?: {
    name?: string;
    price?: number;
    isFeatured?: boolean;
    categoryId?: string;
    petTypeId?: string;
    productId?: string;
  };
}

function readProductFields(details: Record<string, unknown>): {
  productId: string | null;
  name: string;
  price: number;
  isFeatured: boolean;
  categoryId: string;
  petTypeId: string;
} {
  const d = details as unknown as ProductDetails;
  const nested = d.petShop ?? {};
  const name = String(nested.name ?? d.name ?? '');
  const priceRaw = nested.price ?? d.price ?? 0;
  const price = typeof priceRaw === 'number' ? priceRaw : Number(priceRaw);
  const isFeatured = Boolean(nested.isFeatured ?? d.isFeatured ?? false);
  const categoryId = String(nested.categoryId ?? d.categoryId ?? '');
  const petTypeId = String(nested.petTypeId ?? d.petTypeId ?? '');
  const productId = (nested.productId ?? d.productId) != null
    ? String(nested.productId ?? d.productId)
    : null;
  return { productId, name, price: Number.isFinite(price) ? price : 0, isFeatured, categoryId, petTypeId };
}

export async function browseProducts(
  ctx: RequestContext,
  input: BrowseProductsInput,
): Promise<BrowseProductsOutput> {
  // rule: catalogShowsAll
  const page = input.page != null && input.page > 0 ? input.page : 1;
  const pageSize = input.pageSize != null && input.pageSize > 0 ? input.pageSize : 20;

  const listed = await ctx.mdm.collection.listByType({
    type: 'petShop.Product',
    page: 1,
    pageSize: 10_000,
  });

  const productIds = listed.items.map((item) => item.mdmId);
  const products = await ctx.mdm.collection.getMany({ mdmIds: productIds });

  const minPrice =
    input.minPrice != null && input.minPrice !== ''
      ? Number(input.minPrice)
      : null;
  const maxPrice =
    input.maxPrice != null && input.maxPrice !== ''
      ? Number(input.maxPrice)
      : null;
  const searchName = input.searchName?.trim().toLowerCase() ?? '';

  // rule: combinedFilters
  const filtered = products.filter((entity) => {
    const details = (entity.details ?? {}) as unknown as Record<string, unknown>;
    const fields = readProductFields(details);

    if (input.petTypeId && fields.petTypeId !== input.petTypeId) {
      return false;
    }
    if (input.categoryId && fields.categoryId !== input.categoryId) {
      return false;
    }
    if (minPrice != null && Number.isFinite(minPrice) && fields.price < minPrice) {
      return false;
    }
    if (maxPrice != null && Number.isFinite(maxPrice) && fields.price > maxPrice) {
      return false;
    }
    // rule: caseInsensitiveSearch
    if (searchName && !fields.name.toLowerCase().includes(searchName)) {
      return false;
    }
    return true;
  });

  const categoryIds = [
    ...new Set(
      filtered
        .map((entity) => {
          const details = (entity.details ?? {}) as unknown as Record<string, unknown>;
          return readProductFields(details).categoryId;
        })
        .filter((id) => id.length > 0),
    ),
  ];
  const petTypeIds = [
    ...new Set(
      filtered
        .map((entity) => {
          const details = (entity.details ?? {}) as unknown as Record<string, unknown>;
          return readProductFields(details).petTypeId;
        })
        .filter((id) => id.length > 0),
    ),
  ];

  const [categories, petTypes] = await Promise.all([
    ctx.mdm.collection.getMany({ mdmIds: categoryIds }),
    ctx.mdm.collection.getMany({ mdmIds: petTypeIds }),
  ]);

  const categoryNameById = new Map<string, string>();
  for (const cat of categories) {
    const details = (cat.details ?? {}) as unknown as Record<string, unknown>;
    const nested = details.petShop as Record<string, unknown> | undefined;
    const name = String(nested?.name ?? details.name ?? '');
    categoryNameById.set(cat.mdmId, name);
  }

  const petTypeNameById = new Map<string, string>();
  for (const pt of petTypes) {
    const details = (pt.details ?? {}) as unknown as Record<string, unknown>;
    const nested = details.petShop as Record<string, unknown> | undefined;
    const name = String(nested?.name ?? details.name ?? '');
    petTypeNameById.set(pt.mdmId, name);
  }

  const total = filtered.length;
  const offset = (page - 1) * pageSize;
  const pageEntities = filtered.slice(offset, offset + pageSize);

  const items: BrowseProductsItem[] = pageEntities.map((entity) => {
    const details = (entity.details ?? {}) as unknown as Record<string, unknown>;
    const fields = readProductFields(details);
    return {
      productId: fields.productId ?? entity.mdmId,
      name: fields.name,
      price: fields.price,
      isFeatured: fields.isFeatured,
      categoryId: fields.categoryId,
      categoryName: categoryNameById.get(fields.categoryId) ?? '',
      petTypeId: fields.petTypeId,
      petTypeName: petTypeNameById.get(fields.petTypeId) ?? '',
      createdAt: entity.index.createdAt,
      updatedAt: entity.index.updatedAt,
    };
  });

  return { items, total, page, pageSize };
}
