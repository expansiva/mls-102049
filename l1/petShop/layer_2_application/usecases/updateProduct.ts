/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateProduct.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { productPriceIsValid } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface UpdateProductInput {
  productId: string;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  productCategoryId: string;
  featured: boolean;
  status: string;
}

export interface UpdateProductOutput {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  productCategoryId: string;
  featured: boolean;
  status: string;
  updatedAt: string;
}

const PLATFORM_MEDIA_BASE_URL = 'https://media.';

/**
 * Rule productImageUsesPlatformStorage: if an imageUrl is provided it must
 * reference the platform media storage base URL.
 */
function validateImageUrl(imageUrl: string | null): void {
  if (imageUrl === null || imageUrl === undefined || imageUrl === '') {
    return;
  }
  if (!imageUrl.startsWith(PLATFORM_MEDIA_BASE_URL)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'productImageUsesPlatformStorage: imageUrl must use the platform media storage URL.',
      400,
      { ruleId: 'productImageUsesPlatformStorage', imageUrl },
    );
  }
}

export async function updateProduct(
  ctx: RequestContext,
  input: UpdateProductInput,
): Promise<UpdateProductOutput> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  // Step 1 — Load existing product
  const existing = await products.getById(input.productId);
  if (!existing) {
    throw new AppError('NOT_FOUND', `Product not found: ${input.productId}`, 404, {
      productId: input.productId,
    });
  }

  // Step 2 — Validate productCategoryId against MDM
  const categoryEntity = await ctx.mdm.entity.get({ mdmId: input.productCategoryId });
  if (!categoryEntity) {
    throw new AppError(
      'NOT_FOUND',
      `ProductCategory not found: ${input.productCategoryId}`,
      404,
      { productCategoryId: input.productCategoryId },
    );
  }

  // Step 3 — Rule featuredProductRequiresActive
  const status = input.status as ProductStatus;
  let featured = input.featured;
  if (featured && status !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      'featuredProductRequiresActive: only active products can be featured.',
      400,
      { ruleId: 'featuredProductRequiresActive', status, featured },
    );
  }
  if (status === 'inactive') {
    featured = false;
  }

  // Step 4 — Rule productImageUsesPlatformStorage
  const imageUrl = input.imageUrl ?? null;
  validateImageUrl(imageUrl);

  // Validate price using domain invariant
  if (!productPriceIsValid(input.price)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'price must be a non-negative monetary value.',
      400,
      { price: input.price },
    );
  }

  // Step 5 — Set updatedAt
  const now = ctx.clock.nowIso();

  // Step 6 — Mutate the Product aggregate
  const updatedProduct: Product = {
    ...existing,
    name: input.name,
    description: input.description ?? null,
    price: input.price,
    imageUrl,
    productCategoryId: input.productCategoryId,
    featured,
    status,
    updatedAt: now,
  };

  // Step 7 — Save inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await products.save(updatedProduct);
  });

  // Step 8 — Return updated fields
  return {
    productId: updatedProduct.productId,
    name: updatedProduct.name,
    description: updatedProduct.description,
    price: updatedProduct.price,
    imageUrl: updatedProduct.imageUrl,
    productCategoryId: updatedProduct.productCategoryId,
    featured: updatedProduct.featured,
    status: updatedProduct.status,
    updatedAt: updatedProduct.updatedAt,
  };
}
