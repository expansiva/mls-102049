/// <mls fileReference="_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.ts" enhancement="_blank"/>

export interface StockLevel {
  stockLevelId: string;
  stockItemId: string;
  currentQuantity: number;
  lastMovementAt: string;
  createdAt: string;
  updatedAt: string;
}

export function stockLevelQuantityIsNonNegative(stockLevel: Pick<StockLevel, 'currentQuantity'>): boolean {
  return stockLevel.currentQuantity >= 0;
}

export function stockLevelLastMovementAfterCreation(stockLevel: Pick<StockLevel, 'lastMovementAt' | 'createdAt'>): boolean {
  return stockLevel.lastMovementAt >= stockLevel.createdAt;
}

export function validateStockLevelInvariants(stockLevel: StockLevel): string[] {
  const errors: string[] = [];
  if (!stockLevelQuantityIsNonNegative(stockLevel)) {
    errors.push('currentQuantity must be greater than or equal to zero');
  }
  if (!stockLevelLastMovementAfterCreation(stockLevel)) {
    errors.push('lastMovementAt must be greater than or equal to createdAt');
  }
  return errors;
}
