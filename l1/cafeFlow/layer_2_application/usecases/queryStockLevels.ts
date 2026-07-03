/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockLevels.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStockLevelRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { StockLevel } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

/** Enriched stock level projection with master-data fields and computed low-stock flag. */
export interface StockLevelProjection {
  /** Unique identifier of the stock level record */
  stockLevelId: string;
  /** Reference to the StockItem master data entity */
  stockItemId: string;
  /** Name of the stock item resolved from MDM */
  itemName: string;
  /** Unit of measure of the stock item resolved from MDM */
  unitOfMeasure: string;
  /** Current quantity available in stock */
  currentQuantity: number;
  /** Minimum quantity threshold for low stock alert, resolved from MDM */
  minimumQuantity: number;
  /** Timestamp of the last stock movement */
  lastMovementAt: string;
  /** Computed flag: true when currentQuantity is below minimumQuantity (lowStockAlert rule) */
  isLowStock: boolean;
}

export interface QueryStockLevelsInput {}

export interface QueryStockLevelsOutput {
  stockLevels: StockLevelProjection[];
}

/**
 * Query all stock levels, enrich each with its StockItem master-data fields
 * (name, unitOfMeasure, minimumQuantity), and compute the `isLowStock` flag
 * via the lowStockAlert rule (currentQuantity < minimumQuantity).
 *
 * This operation is read-only and does not alter stock state.
 */
export async function queryStockLevels(
  ctx: RequestContext,
  _input: QueryStockLevelsInput,
): Promise<QueryStockLevelsOutput> {
  const stockLevels = resolveRepository<IStockLevelRepository>(ctx, 'StockLevel');

  // 1. Load all StockLevel records via the StockLevel port (list operation)
  const levels: StockLevel[] = await stockLevels.list();

  // 2. For each StockLevel, resolve the referenced StockItem master data by id
  const projections: StockLevelProjection[] = [];

  for (const level of levels) {
    const doc = await ctx.data.mdmDocument.get({ mdmId: level.stockItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `MDM record not found for StockItem: ${level.stockItemId}`,
        404,
        { mdmId: level.stockItemId },
      );
    }

    const itemDetails = doc.details as {
      name?: string;
      unitOfMeasure?: string;
      minimumQuantity?: number;
      cafeFlow?: Record<string, unknown>;
    };

    // Module-specific fields may be nested under the module namespace in details
    const moduleData = (itemDetails.cafeFlow ?? {}) as {
      name?: string;
      unitOfMeasure?: string;
      minimumQuantity?: number;
    };

    const itemName = moduleData.name ?? itemDetails.name ?? '';
    const unitOfMeasure = moduleData.unitOfMeasure ?? itemDetails.unitOfMeasure ?? '';
    const minimumQuantity = moduleData.minimumQuantity ?? itemDetails.minimumQuantity ?? 0;

    // 3. Apply the lowStockAlert rule: isLowStock = currentQuantity < minimumQuantity
    const isLowStock = level.currentQuantity < minimumQuantity;

    projections.push({
      stockLevelId: level.stockLevelId,
      stockItemId: level.stockItemId,
      itemName,
      unitOfMeasure,
      currentQuantity: level.currentQuantity,
      minimumQuantity,
      lastMovementAt: level.lastMovementAt,
      isLowStock,
    });
  }

  return { stockLevels: projections };
}
