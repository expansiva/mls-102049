/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/productRepository.ts" enhancement="_blank"/>
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export type ProductId = string;
export type Sku = string;
export type Category = string;

export interface ProductFilter {
  status?: ProductStatus;
  productCategoryId?: string;
  featured?: boolean;
  name?: string;
}

export interface IProductRepository {
  getById(id: ProductId): Promise<Product | null>;
  list(filter: ProductFilter): Promise<Product[]>;
  save(product: Product): Promise<void>;
  findBySku(sku: Sku): Promise<Product | null>;
  findByCategory(category: Category): Promise<Product[]>;
}
