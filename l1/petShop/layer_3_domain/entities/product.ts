/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/product.ts" enhancement="_blank"/>
export type ProductStatus = 'available' | 'unavailable';

export interface Product {
productId: string;
name: string;
description: string | null;
price: number;
petTypeId: string;
categoryId: string;
highlighted: boolean;
status: ProductStatus;
createdAt: string;
updatedAt: string;
}

export function productHighlightedRequiresAvailable(product: Pick<Product, 'highlighted' | 'status'>): boolean {
if (!product.highlighted) {
return true;
}
return product.status === 'available';
}
