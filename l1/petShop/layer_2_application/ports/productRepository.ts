/// <mls fileReference="_102049_/l1/petShop/layer_2_application/ports/productRepository.ts" enhancement="_blank"/>
import type { Product, ProductStatus } from '/_102049_/l1/petShop/layer_3_domain/entities/product.js';

export interface ProductFilter {
  status?: ProductStatus;
  categoryId?: string;
  petTypeId?: string;
  highlighted?: boolean;
}

export interface IProductRepository {
  getById(id: string): Promise<Product>;
  list(filter?: ProductFilter): Promise<Product[]>;
  save(product: Product): Promise<void>;
  findByName(name: string): Promise<Product[]>;
  findByCategory(category: string): Promise<Product[]>;
}
