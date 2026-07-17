/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/updateProduct.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { productHighlightedRequiresAvailable } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface UpdateProductInput {
  productId: string;
  name?: string;
  description?: string;
  price?: number;
  petTypeId?: string;
  categoryId?: string;
  highlighted?: boolean;
  status?: string;
}

export interface UpdateProductOutput {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  petTypeId: string;
  categoryId: string;
  highlighted: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export async function updateProduct(
  ctx: RequestContext,
  input: UpdateProductInput,
): Promise<UpdateProductOutput> {
  const products = resolveRepository<IProductRepository>(ctx, 'Product');

  return ctx.data.runInTransaction(async () => {
    // Step 1: Load existing product
    const existing = await products.getById(input.productId);
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        `Produto não encontrado: ${input.productId}`,
        404,
        { productId: input.productId },
      );
    }

    // Step 2: Merge user-supplied fields onto the loaded product
    const mergedName = input.name !== undefined ? input.name : existing.name;
    const mergedDescription =
      input.description !== undefined ? input.description : existing.description;
    const mergedPrice = input.price !== undefined ? input.price : existing.price;
    const mergedPetTypeId =
      input.petTypeId !== undefined ? input.petTypeId : existing.petTypeId;
    const mergedCategoryId =
      input.categoryId !== undefined ? input.categoryId : existing.categoryId;
    // rule: highlightsAreManualOnly — highlighted is only set from explicit user input, never auto-computed
    const mergedHighlighted =
      input.highlighted !== undefined ? input.highlighted : existing.highlighted;
    const mergedStatus: ProductStatus =
      input.status !== undefined ? (input.status as ProductStatus) : existing.status;

    // Step 3: Rule productRequiresMinimumFields
    if (!mergedName || mergedName.trim().length === 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'productRequiresMinimumFields: o nome do produto é obrigatório e não pode ser vazio.',
        400,
        { ruleId: 'productRequiresMinimumFields', field: 'name' },
      );
    }
    if (typeof mergedPrice !== 'number' || mergedPrice <= 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'productRequiresMinimumFields: o preço do produto deve ser um número positivo.',
        400,
        { ruleId: 'productRequiresMinimumFields', field: 'price' },
      );
    }
    if (!mergedPetTypeId || mergedPetTypeId.trim().length === 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'productRequiresMinimumFields: o tipo de pet é obrigatório.',
        400,
        { ruleId: 'productRequiresMinimumFields', field: 'petTypeId' },
      );
    }
    if (!mergedCategoryId || mergedCategoryId.trim().length === 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'productRequiresMinimumFields: a categoria é obrigatória.',
        400,
        { ruleId: 'productRequiresMinimumFields', field: 'categoryId' },
      );
    }

    // Step 4: Rule highlightRequiresAvailableProduct
    const mergedProduct: Pick<Product, 'highlighted' | 'status'> = {
      highlighted: mergedHighlighted,
      status: mergedStatus,
    };
    if (!productHighlightedRequiresAvailable(mergedProduct)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'highlightRequiresAvailableProduct: um produto destacado (highlighted) deve estar disponível (available).',
        400,
        { ruleId: 'highlightRequiresAvailableProduct' },
      );
    }

    // Step 6: Validate MDM PetType if changed
    if (input.petTypeId !== undefined && input.petTypeId !== existing.petTypeId) {
      const petTypeEntity = await ctx.mdm.entity.get({ mdmId: mergedPetTypeId });
      if (!petTypeEntity) {
        throw new AppError(
          'VALIDATION_ERROR',
          `Tipo de pet não encontrado: ${mergedPetTypeId}`,
          400,
          { petTypeId: mergedPetTypeId },
        );
      }
      if (String(petTypeEntity.index.status) !== 'Active') {
        throw new AppError(
          'VALIDATION_ERROR',
          `Tipo de pet inativo: ${mergedPetTypeId}`,
          400,
          { petTypeId: mergedPetTypeId, status: petTypeEntity.index.status },
        );
      }
    }

    // Step 7: Validate MDM Category if changed
    if (input.categoryId !== undefined && input.categoryId !== existing.categoryId) {
      const categoryEntity = await ctx.mdm.entity.get({ mdmId: mergedCategoryId });
      if (!categoryEntity) {
        throw new AppError(
          'VALIDATION_ERROR',
          `Categoria não encontrada: ${mergedCategoryId}`,
          400,
          { categoryId: mergedCategoryId },
        );
      }
    }

    // Step 8: Build updated product
    const now = ctx.clock.nowIso();
    const updated: Product = {
      productId: existing.productId,
      name: mergedName,
      description: mergedDescription,
      price: mergedPrice,
      petTypeId: mergedPetTypeId,
      categoryId: mergedCategoryId,
      highlighted: mergedHighlighted,
      status: mergedStatus,
      createdAt: existing.createdAt,
      updatedAt: now,
    };

    // Step 9: Persist
    await products.save(updated);

    // Step 10: Return projection
    return {
      productId: updated.productId,
      name: updated.name,
      description: updated.description,
      price: updated.price,
      petTypeId: updated.petTypeId,
      categoryId: updated.categoryId,
      highlighted: updated.highlighted,
      status: updated.status,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt,
    };
  });
}
