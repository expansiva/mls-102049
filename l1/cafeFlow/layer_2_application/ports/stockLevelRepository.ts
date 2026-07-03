/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.ts" enhancement="_blank"/>
import type { StockLevel } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

/** Branded alias for the stock level identifier (string). */
export type StockLevelId = string;

/** Branded alias for a product identifier (string). */
export type ProductId = string;

/** Branded alias for a quantity value (non-negative number). */
export type Quantity = number;

/** Filter for querying stock levels — only indexed/queryable fields. */
export interface StockLevelFilter {
  stockLevelId?: StockLevelId;
  stockItemId?: ProductId;
}

export interface IStockLevelRepository {
  /** Retrieve a stock level by its unique identifier. Throws NOT_FOUND when absent. */
  getById(id: StockLevelId): Promise<StockLevel>;

  /** List stock levels matching the given filter. */
  list(filter?: StockLevelFilter): Promise<StockLevel[]>;

  /** Persist the given stock level aggregate (upsert). */
  save(stockLevel: StockLevel): Promise<void>;

  /** Domain finder: retrieve stock level for a product. Throws NOT_FOUND when absent. */
  findByProductId(productId: ProductId): Promise<StockLevel>;

  /** Domain finder: retrieve stock levels whose current quantity is below the given threshold. */
  findBelowThreshold(threshold: Quantity): Promise<StockLevel[]>;
}
