/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryMenuItems.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryMenuItemsInput {
  categoryFilter?: string;
  nameFilter?: string;
  workspaceId?: string;
  page?: number;
  pageSize?: number;
}

export interface MenuItem {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  description: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface QueryMenuItemsOutput {
  items: MenuItem[];
  total: number;
}

export async function queryMenuItems(
  ctx: RequestContext,
  input: QueryMenuItemsInput,
): Promise<QueryMenuItemsOutput> {
  // Step 1: Resolve workspaceId from RequestContext (currentWorkspace)
  const workspaceId = input.workspaceId ?? ctx.requestMeta?.userId;

  // Step 2: Query MenuItem from MDM store via ctx.data.mdmEntityIndex
  const entityRecords = await ctx.data.mdmEntityIndex.findMany();

  // Filter for Product subtype (menu items) and workspace scope
  let filteredEntityRecords = entityRecords.filter((r) => {
    const record = r as unknown as Record<string, unknown>;
    if (record.subtype !== 'Product') return false;
    if (workspaceId) {
      const recordWorkspaceId = record.workspaceId;
      // Include if no workspaceId on record (global) or matches current workspace
      return !recordWorkspaceId || recordWorkspaceId === workspaceId;
    }
    return true;
  });

  // Apply name filter (partial) on entity index if provided
  if (input.nameFilter) {
    const lowerName = input.nameFilter.toLowerCase();
    filteredEntityRecords = filteredEntityRecords.filter((r) => {
      const name = (r as unknown as Record<string, unknown>).name;
      return typeof name === 'string' && name.toLowerCase().includes(lowerName);
    });
  }

  const mdmIds = filteredEntityRecords
    .map((r) => (r as unknown as Record<string, unknown>).mdmId as string)
    .filter((id): id is string => typeof id === 'string');

  if (mdmIds.length === 0) {
    return { items: [], total: 0 };
  }

  const documents = await ctx.data.mdmDocument.getMany({ mdmIds });

  // Step 6: Project fields from MDM documents
  let items: MenuItem[] = [];
  for (const doc of documents) {
    if (!doc) continue;
    const details = doc.details as Record<string, unknown>;
    const cafeFlow = (details.cafeFlow ?? {}) as Record<string, unknown>;

    const item: MenuItem = {
      menuItemId: doc.mdmId,
      name: (details.name as string) ?? '',
      category: (cafeFlow.category as string) ?? '',
      price: (cafeFlow.price as number) ?? 0,
      description: (cafeFlow.description as string | null) ?? null,
      status: (details.status as string) ?? 'Active',
      createdAt: (details.createdAt as string) ?? '',
      updatedAt: (details.updatedAt as string) ?? '',
    };
    items.push(item);
  }

  // Apply category filter
  if (input.categoryFilter) {
    items = items.filter((item) => item.category === input.categoryFilter);
  }

  // Apply name filter (partial) for safety
  if (input.nameFilter) {
    const lowerName = input.nameFilter.toLowerCase();
    items = items.filter((item) => item.name.toLowerCase().includes(lowerName));
  }

  // Step 5: Sort by name ascending
  items.sort((a, b) => a.name.localeCompare(b.name));

  const total = items.length;

  // Step 6: Apply optional pagination (page/pageSize)
  if (input.page != null && input.pageSize != null && input.pageSize > 0) {
    const start = (input.page - 1) * input.pageSize;
    items = items.slice(start, start + input.pageSize);
  }

  // Step 7: Return projected list and total
  return { items, total };
}
