/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { productHighlightedRequiresAvailable } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface SetProductHighlightsInput {
  productIds: string[];
  highlighted: boolean;
}

export interface SetProductHighlightsProduct {
  productId: string;
  name: string;
  highlighted: boolean;
  status: string;
}

export interface SetProductHighlightsOutput {
  updatedCount: number;
  products: SetProductHighlightsProduct[];
}

export async function setProductHighlights(
  ctx: RequestContext,
  input: SetProductHighlightsInput,
): Promise<SetProductHighlightsOutput> {
  // rule: highlightsAreManualOnly — only an authenticated actor may perform this manual operation
  const actorId = ctx.sessionContext.actorSession.actorId;
  if (!actorId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'highlightsAreManualOnly: destaques de produtos são uma operação manual que requer um ator autenticado.',
      400,
      { ruleId: 'highlightsAreManualOnly' },
    );
  }

  if (!input.productIds || input.productIds.length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'É necessário informar ao menos um produto.',
      400,
    );
  }

  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // Load all products by id (no bulk method on the port, load individually)
  const loaded: Product[] = [];
  for (const id of input.productIds) {
    const product = await products.getById(id);
    loaded.push(product);
  }

  // rule: highlightRequiresAvailableProduct — when highlighting, every product must be available
  if (input.highlighted) {
    const unavailable = loaded.filter((p) => p.status !== 'available');
    if (unavailable.length > 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'highlightRequiresAvailableProduct: não é possível destacar produtos indisponíveis.',
        400,
        {
          ruleId: 'highlightRequiresAvailableProduct',
          unavailableProductIds: unavailable.map((p) => p.productId),
        },
      );
    }
  }

  const now = ctx.clock.nowIso();

  // Apply highlighted value and persist inside a transaction
  const updatedProducts: Product[] = await ctx.data.runInTransaction(async () => {
    const result: Product[] = [];
    for (const product of loaded) {
      const updated: Product = {
        ...product,
        highlighted: input.highlighted,
        updatedAt: now,
      };

      // rule: highlightRequiresAvailableProduct — domain invariant guard
      if (!productHighlightedRequiresAvailable(updated)) {
        throw new AppError(
          'VALIDATION_ERROR',
          'highlightRequiresAvailableProduct: produto destacado deve estar disponível.',
          400,
          { ruleId: 'highlightRequiresAvailableProduct', productId: product.productId },
        );
      }

      await products.save(updated);
      result.push(updated);
    }
    return result;
  });

  return {
    updatedCount: updatedProducts.length,
    products: updatedProducts.map((p) => ({
      productId: p.productId,
      name: p.name,
      highlighted: p.highlighted,
      status: p.status,
    })),
  };
}
