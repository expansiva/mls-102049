/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { productHighlightedRequiresAvailable } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface ViewProductDetailsInput {
productId: string;
}

export interface ViewProductDetailsOutput {
productId: string;
name: string;
description?: string;
price: number;
petTypeId: string;
petTypeName: string;
categoryId: string;
categoryName: string;
highlighted: boolean;
status: string;
createdAt: string;
updatedAt: string;
}

export async function viewProductDetails(
ctx: RequestContext,
input: ViewProductDetailsInput,
): Promise<ViewProductDetailsOutput> {
const products = resolveRepository<IProductRepository>(ctx, 'Product');
const product = await products.getById(input.productId);
if (!product) {
throw new AppError('NOT_FOUND', 'Product not found', 404, { productId: input.productId });
}
if (product.status !== 'available') {
throw new AppError(
'NOT_FOUND',
'Product not available',
404,
{ ruleId: 'onlyAvailableProductsVisibleAndReservable', productId: product.productId },
);
}
if (!productHighlightedRequiresAvailable(product)) {
throw new AppError(
'VALIDATION_ERROR',
'Highlighted product must be available',
400,
{ ruleId: 'onlyAvailableProductsVisibleAndReservable', productId: product.productId },
);
}
const mdmEntities = await ctx.mdm.collection.getMany({
mdmIds: [product.petTypeId, product.categoryId],
});
const mdmById = new Map(mdmEntities.map((entity) => [entity.mdmId, entity]));
const petType = mdmById.get(product.petTypeId);
if (!petType) {
throw new AppError('NOT_FOUND', 'Pet type not found', 404, { mdmId: product.petTypeId });
}
const category = mdmById.get(product.categoryId);
if (!category) {
throw new AppError('NOT_FOUND', 'Category not found', 404, { mdmId: product.categoryId });
}
return {
productId: product.productId,
name: product.name,
description: product.description ?? undefined,
price: product.price,
petTypeId: product.petTypeId,
petTypeName: petType.details.name,
categoryId: product.categoryId,
categoryName: category.details.name,
highlighted: product.highlighted,
status: product.status,
createdAt: product.createdAt,
updatedAt: product.updatedAt,
};
}
