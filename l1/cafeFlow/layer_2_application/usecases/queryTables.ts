/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryTables.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryTablesInput {
  /** Filtro opcional por situação da mesa (active ou inactive). */
  statusFilter?: string;
  /** Filtro opcional pelo número ou código visual da mesa. */
  numberFilter?: string;
}

export interface QueryTablesItem {
  /** Identificador único da mesa. */
  tableId: string;
  /** Número ou código visual da mesa. */
  number: string;
  /** Nome descritivo da mesa, se definido. */
  name?: string;
  /** Situação da mesa (active ou inactive). */
  status: string;
  /** Data e hora de criação da mesa. */
  createdAt: string;
  /** Data e hora da última atualização da mesa. */
  updatedAt: string;
}

export interface QueryTablesOutput {
  tables: QueryTablesItem[];
  /** Total de registros correspondentes aos filtros (para paginação). */
  total?: number;
}

/**
 * Query tables (mesas) from the shared MDM store.
 *
 * `Table` is an MDM master-data entity — there is no local port or table.
 * Records are read via `ctx.data.mdmEntityIndex` (index) and `ctx.data.mdmDocument`
 * (full details). The module-specific `number` field lives in the `cafeFlow`
 * namespace inside the document `details`.
 */
export async function queryTables(
  ctx: RequestContext,
  input: QueryTablesInput,
): Promise<QueryTablesOutput> {
  // --- Build filter criteria for the MDM entity index -------------------------
  // Tables are stored as MDM records with subtype 'AssetGeneric'.
  const where: Record<string, unknown> = { subtype: 'AssetGeneric' };

  if (input.statusFilter) {
    const normalized = input.statusFilter.toLowerCase();
    where.status = normalized === 'inactive' ? 'Inactive' : 'Active';
  }

  // --- Query the MDM entity index --------------------------------------------
  const indexRecords = await ctx.data.mdmEntityIndex.findMany({
    where: where as Record<string, unknown>,
    orderBy: { field: 'name', direction: 'asc' },
  });

  if (indexRecords.length === 0) {
    return { tables: [], total: 0 };
  }

  // --- Fetch full MDM documents to access module-specific details -------------
  const mdmIds = indexRecords.map((r) => r.mdmId);
  const docs = await ctx.data.mdmDocument.getMany({ mdmIds });

  // --- Project results --------------------------------------------------------
  let tables: QueryTablesItem[] = docs
    .filter((doc) => doc !== null && doc !== undefined)
    .map((doc) => {
      const details = doc.details as Record<string, unknown>;
      const cafeFlow = (details.cafeFlow as Record<string, unknown> | undefined) ?? {};
      const docName = (details.name as string | undefined) ?? undefined;
      const docStatus = (details.status as string | undefined) ?? 'Active';
      const docCreatedAt = (details.createdAt as string | undefined) ?? '';
      const docUpdatedAt = (details.updatedAt as string | undefined) ?? '';

      return {
        tableId: doc.mdmId,
        number: (cafeFlow.number as string | undefined) ?? docName ?? doc.mdmId,
        name: docName,
        status: docStatus === 'Inactive' ? 'inactive' : 'active',
        createdAt: docCreatedAt,
        updatedAt: docUpdatedAt,
      };
    });

  // --- Apply optional numberFilter (by number or name) ------------------------
  if (input.numberFilter) {
    const filter = input.numberFilter.toLowerCase();
    tables = tables.filter(
      (t) =>
        t.number.toLowerCase().includes(filter) ||
        (t.name?.toLowerCase().includes(filter) ?? false),
    );
  }

  // --- Sort by number for consistent ordering ---------------------------------
  tables.sort((a, b) => a.number.localeCompare(b.number, undefined, { numeric: true }));

  return { tables, total: tables.length };
}
