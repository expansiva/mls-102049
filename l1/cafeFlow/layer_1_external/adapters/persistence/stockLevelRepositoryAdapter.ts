/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/persistence/stockLevelRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IStockLevelRepository, StockLevelFilter, StockLevelId, ProductId, Quantity } from '/_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { StockLevel } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

interface StockLevelRow {
  stock_level_id: string;
  stock_item_id: string;
  created_at: string;
  details: string | null;
}

interface StockLevelDetails {
  current_quantity: number;
  last_movement_at: string;
  updated_at: string;
}

function toRow(stockLevel: StockLevel): StockLevelRow {
  const details: StockLevelDetails = {
    current_quantity: stockLevel.currentQuantity,
    last_movement_at: stockLevel.lastMovementAt,
    updated_at: stockLevel.updatedAt,
  };
  return {
    stock_level_id: stockLevel.stockLevelId,
    stock_item_id: stockLevel.stockItemId,
    created_at: stockLevel.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: StockLevelRow): StockLevelDetails {
  try {
    const parsed = JSON.parse(row.details ?? '{}') as Partial<StockLevelDetails>;
    return {
      current_quantity: parsed.current_quantity ?? 0,
      last_movement_at: parsed.last_movement_at ?? row.created_at,
      updated_at: parsed.updated_at ?? row.created_at,
    };
  } catch {
    return {
      current_quantity: 0,
      last_movement_at: row.created_at,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: StockLevelRow): StockLevel {
  const d = parseDetails(row);
  return {
    stockLevelId: row.stock_level_id,
    stockItemId: row.stock_item_id,
    currentQuantity: d.current_quantity,
    lastMovementAt: d.last_movement_at,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

export function createStockLevelRepositoryAdapter(ctx: RequestContext): IStockLevelRepository {
  const getTable = () => ctx.data.moduleData.getTable<StockLevelRow>('stock_level');

  return {
    async getById(id: StockLevelId): Promise<StockLevel> {
      const repo = await getTable();
      const row = await repo.findOne({ where: { stock_level_id: id } });
      if (!row) throw new AppError('NOT_FOUND', `StockLevel ${id} not found`, 404, { stockLevelId: id });
      return toDomain(row);
    },

    async list(filter?: StockLevelFilter): Promise<StockLevel[]> {
      const repo = await getTable();
      const where: Partial<StockLevelRow> = {};
      if (filter?.stockLevelId) where.stock_level_id = filter.stockLevelId;
      if (filter?.stockItemId) where.stock_item_id = filter.stockItemId;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(stockLevel: StockLevel): Promise<void> {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { stock_level_id: stockLevel.stockLevelId } });
      if (existing) {
        await repo.update({ where: { stock_level_id: stockLevel.stockLevelId }, patch: toRow(stockLevel) });
      } else {
        await repo.insert({ record: toRow(stockLevel) });
      }
    },

    async findByProductId(productId: ProductId): Promise<StockLevel> {
      const repo = await getTable();
      const row = await repo.findOne({ where: { stock_item_id: productId } });
      if (!row) throw new AppError('NOT_FOUND', `StockLevel for product ${productId} not found`, 404, { productId });
      return toDomain(row);
    },

    async findBelowThreshold(threshold: Quantity): Promise<StockLevel[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      const all = rows.map(toDomain);
      return all.filter((sl) => sl.currentQuantity < threshold);
    },
  };
}
