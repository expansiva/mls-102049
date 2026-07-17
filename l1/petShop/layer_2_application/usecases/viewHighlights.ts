/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewHighlights.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface ViewHighlightsInput {}

export interface ViewHighlightsOutput {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
}

export async function viewHighlights(
  ctx: RequestContext,
  _input: ViewHighlightsInput,
): Promise<ViewHighlightsOutput[]> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // rule: highlightsAreManualOnly — do NOT auto-select or compute highlights;
  // only products already flagged highlighted=true by the store are candidates.
  const candidates = await products.list({ highlighted: true });

  // rule: highlightRequiresAvailableProduct — a highlighted product must be available.
  // rule: onlyAvailableProductsVisibleAndReservable — exclude status 'unavailable' even if highlighted=true.
  const visible = candidates.filter((p) => p.status === 'available');

  const result: ViewHighlightsOutput[] = visible.map((p: Product) => ({
    productId: p.productId,
    name: p.name,
    description: p.description,
    price: p.price,
    petTypeId: p.petTypeId,
    categoryId: p.categoryId,
    highlighted: p.highlighted,
    status: p.status,
  }));

  return result;
}
