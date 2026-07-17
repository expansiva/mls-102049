/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/createProduct.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProductRepository } from '/_102049_/l1/petShop/layer_2_application/ports/productRepository.js';
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';
import { productHighlightedRequiresAvailable } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface CreateProductInput {
name: string;
description?: string;
price: number;
petTypeId: string;
categoryId: string;
highlighted: boolean;
status: string;
}

export interface CreateProductOutput {
productId: string;
name: string;
description?: string;
price: number;
petTypeId: string;
categoryId: string;
highlighted: boolean;
status: string;
createdAt: string;
updatedAt: string;
}

function isValidStatus(status: string): status is ProductStatus {
return status === 'available' || status === 'unavailable';
}

export async function createProduct(
ctx: RequestContext,
input: CreateProductInput,
): Promise<CreateProductOutput> {
if (!input.name?.trim() || input.price === null || input.price === undefined || !input.petTypeId?.trim() || !input.categoryId?.trim()) {
throw new AppError(
'VALIDATION_ERROR',
'productRequiresMinimumFields: name, price, petTypeId e categoryId são obrigatórios.',
400,
{ ruleId: 'productRequiresMinimumFields' },
);
}

if (!isValidStatus(input.status)) {
throw new AppError('VALIDATION_ERROR', 'status inválido.', 400, { status: input.status });
}

if (!productHighlightedRequiresAvailable({ highlighted: input.highlighted, status: input.status })) {
throw new AppError(
'VALIDATION_ERROR',
'highlightRequiresAvailableProduct: produto destacado deve estar disponível.',
400,
{ ruleId: 'highlightRequiresAvailableProduct' },
);
}

const mdmIds = [input.petTypeId, input.categoryId];
const mdmEntities = await ctx.mdm.collection.getMany({ mdmIds });
const foundIds = new Set(mdmEntities.map((entity) => entity.mdmId));
const missingIds = mdmIds.filter((mdmId) => !foundIds.has(mdmId));
if (missingIds.length > 0) {
throw new AppError('VALIDATION_ERROR', 'MDM record not found', 400, { mdmId: missingIds[0] });
}

const now = ctx.clock.nowIso();
const product: Product = {
productId: ctx.idGenerator.newId(),
name: input.name.trim(),
description: input.description?.trim() ?? null,
price: input.price,
petTypeId: input.petTypeId,
categoryId: input.categoryId,
highlighted: input.highlighted, // rule: highlightsAreManualOnly
status: input.status,
createdAt: now,
updatedAt: now,
};

const saved = await ctx.data.runInTransaction(async (tx) => {
const txCtx: RequestContext = { ...ctx, data: tx };
const products = resolveRepository<IProductRepository>(txCtx, 'Product');
await products.save(product);
return product;
});

return {
productId: saved.productId,
name: saved.name,
description: saved.description ?? undefined,
price: saved.price,
petTypeId: saved.petTypeId,
categoryId: saved.categoryId,
highlighted: saved.highlighted,
status: saved.status,
createdAt: saved.createdAt,
updatedAt: saved.updatedAt,
};
}
