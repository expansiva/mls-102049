/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/ports/stockMovementEventRepository.ts" enhancement="_blank"/>
import type { StockMovementEvent } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockMovementEvent.js';

/** Branded primitive for stock-level identity. */
export type StockLevelId = string;

/** Inclusive date range used for period-based event queries. */
export interface DateRange {
  from: string;
  to: string;
}

/**
 * Append-only repository port for {@link StockMovementEvent}.
 *
 * Events are immutable once recorded — the port exposes only `append` for
 * writes and read finders for queries. No `save`, `update`, or `delete`.
 */
export interface IStockMovementEventRepository {
  /** Append a stock movement event. */
  append(event: StockMovementEvent): Promise<void>;

  /** Read finder: list events within a period. */
  listByPeriod(period: DateRange): Promise<StockMovementEvent[]>;

  /** Read finder: list events by stock level. */
  listByStockLevelId(stockLevelId: StockLevelId): Promise<StockMovementEvent[]>;
}
