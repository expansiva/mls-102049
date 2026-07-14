/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/product.ts" enhancement="_blank"/>
export type ProductStatus = 'active' | 'inactive';

export interface Product {
  productId: string;
  name: string;
  description: string | null;
  price: number;
  imageUrl: string | null;
  productCategoryId: string;
  featured: boolean;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
}

export const PRODUCT_STATUS_TRANSITIONS: Record<ProductStatus, ProductStatus[]> = {
  active: ['inactive'],
  inactive: ['active'],
};

export function canTransitionProduct(from: ProductStatus, to: ProductStatus): boolean {
  return PRODUCT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function productPriceIsValid(price: number): boolean {
  return typeof price === 'number' && !Number.isNaN(price) && price >= 0;
}

export function productIsVisibleInCatalog(product: Pick<Product, 'status'>): boolean {
  return product.status === 'active';
}

export function productCanBeFeatured(product: Pick<Product, 'status' | 'featured'>): boolean {
  return product.status === 'active' && product.featured;
}

export function productUpdatedAtIsValid(product: Pick<Product, 'createdAt' | 'updatedAt'>): boolean {
  return product.updatedAt >= product.createdAt;
}

export function validateProductInvariants(product: Product): string[] {
  const violations: string[] = [];

  if (product.status !== 'active' && product.status !== 'inactive') {
    violations.push("status must be 'active' or 'inactive'");
  }

  if (!productPriceIsValid(product.price)) {
    violations.push('price must be a non-negative monetary value');
  }

  if (product.featured && product.status !== 'active') {
    violations.push("only active products can be featured on the home page");
  }

  if (!productUpdatedAtIsValid(product)) {
    violations.push('updatedAt must be greater than or equal to createdAt');
  }

  return violations;
}
