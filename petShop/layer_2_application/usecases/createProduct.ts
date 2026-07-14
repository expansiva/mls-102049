/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createProduct.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { validateProductInvariants } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface CreateProductInput {
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  productCategoryId: string;
  featured: boolean;
}

export interface CreateProductOutput {
  productId: string;
  name: string;
  price: number;
  productCategoryId: string;
  featured: boolean;
  status: string;
  createdAt: string;
}

/**
 * Validates that the imageUrl points to the platform media storage domain.
 * The platform media storage URLs are expected to start with a known media base
 * pattern. Since the exact base URL is environment-specific, we check that the
 * URL is a well-formed http(s) URL and does not reference a module-local path
 * (e.g. relative paths or localhost without a media domain).
 */
function validatePlatformStorageUrl(imageUrl: string): void {
  try {
    const parsed = new URL(imageUrl);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      throw new Error('invalid protocol');
    }
    // Reject module-local storage patterns: relative paths, file://, or bare paths.
    // A platform media storage URL must have a hostname (not localhost in production).
    if (!parsed.hostname || parsed.hostname.length === 0) {
      throw new Error('missing hostname');
    }
  } catch {
    throw new AppError(
      'VALIDATION_ERROR',
      'productImageUsesPlatformStorage: imageUrl must point to platform media storage, not module-local storage',
      400,
      { ruleId: 'productImageUsesPlatformStorage', imageUrl },
    );
  }
}

export async function createProduct(
  ctx: RequestContext,
  input: CreateProductInput,
): Promise<CreateProductOutput> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');
  const now = ctx.clock.nowIso();
  const productId = ctx.idGenerator.newId();
  const status: ProductStatus = 'active';

  // Step 2: Validate that productCategoryId refers to an existing ProductCategory in MDM.
  const categoryEntity = await ctx.mdm.entity.get({ mdmId: input.productCategoryId });
  if (!categoryEntity) {
    throw new AppError(
      'VALIDATION_ERROR',
      'productCategoryId does not correspond to an existing ProductCategory',
      400,
      { productCategoryId: input.productCategoryId },
    );
  }

  // Step 3: Apply rule featuredProductRequiresActive.
  if (input.featured && status !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      'featuredProductRequiresActive: a featured product must have status active',
      400,
      { ruleId: 'featuredProductRequiresActive' },
    );
  }

  // Step 4: Apply rule productImageUsesPlatformStorage.
  if (input.imageUrl) {
    validatePlatformStorageUrl(input.imageUrl);
  }

  // Step 5: Build the Product aggregate.
  const product: Product = {
    productId,
    name: input.name,
    description: input.description ?? null,
    price: input.price,
    imageUrl: input.imageUrl ?? null,
    productCategoryId: input.productCategoryId,
    featured: input.featured,
    status,
    createdAt: now,
    updatedAt: now,
  };

  // Validate domain invariants.
  const violations = validateProductInvariants(product);
  if (violations.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Product invariant violations: ${violations.join('; ')}`,
      400,
      { violations },
    );
  }

  // Persist inside a single transaction.
  await ctx.data.runInTransaction(async () => {
    await products.save(product);
  });

  // Step 6: Return the created product projection.
  return {
    productId: product.productId,
    name: product.name,
    price: product.price,
    productCategoryId: product.productCategoryId,
    featured: product.featured,
    status: product.status,
    createdAt: product.createdAt,
  };
}
