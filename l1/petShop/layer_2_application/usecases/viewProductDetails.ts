/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/viewProductDetails.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface ViewProductDetailsInput {
  productId: string;
}

export interface ViewProductDetailsOutput {
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

interface PetShopProductDetails {
  price: number;
  isFeatured: boolean;
  categoryId: string;
  petTypeId: string;
}

export async function viewProductDetails(
  ctx: RequestContext,
  input: ViewProductDetailsInput,
): Promise<ViewProductDetailsOutput> {
  const products = await ctx.mdm.collection.getMany({ mdmIds: [input.productId] });
  const productEntity = products[0];
  if (!productEntity) {
    throw new AppError('NOT_FOUND', 'produto não encontrado', 404, { productId: input.productId });
  }

  const details = productEntity.details as unknown as {
    name?: string;
    petShop?: PetShopProductDetails;
  };
  const petShop = details.petShop;
  if (!petShop) {
    throw new AppError('NOT_FOUND', 'produto não encontrado', 404, { productId: input.productId });
  }

  const categoryId = petShop.categoryId;
  const petTypeId = petShop.petTypeId;

  const related = await ctx.mdm.collection.getMany({ mdmIds: [categoryId, petTypeId] });
  const byId = new Map(related.map((entity) => [entity.mdmId, entity]));

  const category = byId.get(categoryId);
  const petType = byId.get(petTypeId);

  return {
    productId: productEntity.mdmId,
    name: details.name ?? productEntity.index.name,
    price: petShop.price,
    isFeatured: petShop.isFeatured,
    categoryId,
    categoryName: category?.details.name ?? '',
    petTypeId,
    petTypeName: petType?.details.name ?? '',
    createdAt: productEntity.index.createdAt,
    updatedAt: productEntity.index.updatedAt,
  };
}
