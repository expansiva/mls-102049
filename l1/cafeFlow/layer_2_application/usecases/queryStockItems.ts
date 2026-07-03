/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryStockItems.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryStockItemsInput {
  nameFilter?: string;
  statusFilter?: string;
  page?: number;
  pageSize?: number;
}

export interface QueryStockItemsResultItem {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  lowStockAlert: boolean;
}

export interface QueryStockItemsOutput {
  items: QueryStockItemsResultItem[];
  total: number;
  page?: number;
  pageSize?: number;
}

/**
 * Query StockItem master-data records from the shared MDM store.
 *
 * StockItem is an MDM entity (no local table/port). The usecase reads
 * via `ctx.data.mdmEntityIndex` + `ctx.data.mdmDocument`, applies optional
 * name/status filters, sorts by name, applies optional pagination, and
 * computes the `lowStockAlert` flag from the domain rule.
 */
export async function queryStockItems(
  ctx: RequestContext,
  input: QueryStockItemsInput,
): Promise<QueryStockItemsOutput> {
  // 1. Query MDM entity index for all records
  const indexRecords = await ctx.data.mdmEntityIndex.findMany();

  if (indexRecords.length === 0) {
    return { items: [], total: 0, page: input.page, pageSize: input.pageSize };
  }

  // 2. Fetch full MDM documents for all indexed records
  const mdmIds = indexRecords.map((r) => r.mdmId);
  const docs = await ctx.data.mdmDocument.getMany({ mdmIds });

  // 3. Map and filter documents to StockItem view models
  let items: QueryStockItemsResultItem[] = [];

  for (const doc of docs) {
    const details = doc.details as Record<string, unknown>;
    const cafeFlow = (details.cafeFlow ?? {}) as Record<string, unknown>;

    // Only include records that have StockItem-specific data in the module namespace
    if (
      cafeFlow.unitOfMeasure === undefined &&
      cafeFlow.minimumQuantity === undefined
    ) {
      continue;
    }

    const name = (details.name as string) ?? '';
    const mdmStatus = (details.status as string) ?? 'Active';
    const status = mdmStatus === 'Active' ? 'active' : 'inactive';

    // Apply name filter (contains, case-insensitive)
    if (input.nameFilter) {
      if (!name.toLowerCase().includes(input.nameFilter.toLowerCase())) {
        continue;
      }
    }

    // Apply status filter (equals)
    if (input.statusFilter && status !== input.statusFilter) {
      continue;
    }

    const minimumQuantity = (cafeFlow.minimumQuantity as number) ?? 0;
    const currentQuantity = (cafeFlow.currentQuantity as number) ?? 0;

    // Apply lowStockAlert rule: flag items whose current quantity is below minimum
    const lowStockAlert = currentQuantity < minimumQuantity;

    items.push({
      stockItemId: doc.mdmId,
      name,
      unitOfMeasure: (cafeFlow.unitOfMeasure as string) ?? '',
      minimumQuantity,
      status,
      createdAt: (details.createdAt as string) ?? '',
      updatedAt: (details.updatedAt as string) ?? '',
      lowStockAlert,
    });
  }

  // 4. Sort by name (asc) as default ordering
  items.sort((a, b) => a.name.localeCompare(b.name));

  // 5. Apply optional pagination when both page and pageSize are provided
  const total = items.length;
  let page: number | undefined;
  let pageSize: number | undefined;

  if (
    input.page !== undefined &&
    input.pageSize !== undefined &&
    input.pageSize > 0
  ) {
    page = input.page;
    pageSize = input.pageSize;
    const start = (page - 1) * pageSize;
    items = items.slice(start, start + pageSize);
  }

  // 6. Return paginated results with metadata
  return { items, total, page, pageSize };
}
