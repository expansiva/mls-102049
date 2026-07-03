/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/queryComboRules.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryComboRulesInput {
  /** Filtro opcional pela situação da regra (active ou inactive) */
  status?: string;
  /** Termo de busca opcional pelo nome da regra */
  nameContains?: string;
}

export interface QueryComboRulesOutputItem {
  comboRuleId: string;
  name: string;
  menuItemId: string;
  description?: string;
  priceDifference: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  menuItemName: string;
}

export interface QueryComboRulesOutput {
  rules: QueryComboRulesOutputItem[];
}

/**
 * queryComboRules — Query ComboRule records from the MDM store with optional
 * status and nameContains filters, joining each rule with its referenced
 * MenuItem to surface menuItemName.
 *
 * Both ComboRule and MenuItem are MDM master-data entities (no local table or
 * repository port). Reads go through ctx.data.mdmEntityIndex (to discover
 * ComboRule mdmIds) and ctx.data.mdmDocument (to fetch full records).
 */
export async function queryComboRules(
  ctx: RequestContext,
  input: QueryComboRulesInput,
): Promise<QueryComboRulesOutput> {
  // Step 1: Resolve workspaceId from current workspace context (RequestContext metadata)
  const workspaceId = ctx.requestMeta?.userId ?? '';

  // Step 2: Query ComboRule records from MDM entity index
  // Filter by subtype 'ComboRule' and workspaceId when available.
  const where: Record<string, unknown> = { subtype: 'ComboRule' };
  if (workspaceId) {
    where.workspaceId = workspaceId;
  }
  const indexRecords = await ctx.data.mdmEntityIndex.findMany({
    where: where as never,
  });

  if (indexRecords.length === 0) {
    return { rules: [] };
  }

  // Fetch full MDM documents for all ComboRule records
  const mdmIds = indexRecords.map((r) => r.mdmId);
  const documents = await ctx.data.mdmDocument.getMany({ mdmIds });

  // Build filtered ComboRule list from MDM documents
  interface ComboRuleRecord {
    comboRuleId: string;
    name: string;
    menuItemId: string;
    description?: string;
    priceDifference: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  }

  const comboRules: ComboRuleRecord[] = [];

  for (const doc of documents) {
    if (!doc) continue;

    const details = doc.details as Record<string, unknown>;
    const cafeFlow = (details.cafeFlow ?? {}) as Record<string, unknown>;

    // Skip documents that are not ComboRule records from this module
    if (!cafeFlow || typeof cafeFlow !== 'object') continue;
    if (!('menuItemId' in cafeFlow) || !('priceDifference' in cafeFlow)) continue;

    const name = (details.name as string) ?? '';
    const status = (details.status as string) ?? 'Active';

    // Apply optional status filter
    if (input.status && status !== input.status) continue;

    // Apply optional nameContains filter (case-insensitive)
    if (
      input.nameContains &&
      !name.toLowerCase().includes(input.nameContains.toLowerCase())
    ) {
      continue;
    }

    const priceDifference = (cafeFlow.priceDifference as number) ?? 0;

    // Apply comboPriceDifference rule: validate priceDifference is a valid number
    if (typeof priceDifference !== 'number' || Number.isNaN(priceDifference)) {
      continue;
    }

    comboRules.push({
      comboRuleId: doc.mdmId,
      name,
      menuItemId: (cafeFlow.menuItemId as string) ?? '',
      description: cafeFlow.description as string | undefined,
      priceDifference,
      status,
      createdAt: (details.createdAt as string) ?? '',
      updatedAt: (details.updatedAt as string) ?? '',
    });
  }

  // Step 3: Fetch referenced MenuItem for each ComboRule via mdmDocument
  const menuItemIds = [
    ...new Set(comboRules.map((r) => r.menuItemId).filter(Boolean)),
  ];
  const menuItemDocs =
    menuItemIds.length > 0
      ? await ctx.data.mdmDocument.getMany({ mdmIds: menuItemIds })
      : [];

  const menuItemNameMap = new Map<string, string>();
  for (const doc of menuItemDocs) {
    if (!doc) continue;
    const details = doc.details as Record<string, unknown>;
    menuItemNameMap.set(doc.mdmId, (details.name as string) ?? '');
  }

  // Step 5: Build output with joined menuItemName, sorted by createdAt ascending
  const rules: QueryComboRulesOutputItem[] = comboRules
    .map((rule) => ({
      comboRuleId: rule.comboRuleId,
      name: rule.name,
      menuItemId: rule.menuItemId,
      description: rule.description,
      priceDifference: rule.priceDifference,
      status: rule.status,
      createdAt: rule.createdAt,
      updatedAt: rule.updatedAt,
      menuItemName: menuItemNameMap.get(rule.menuItemId) ?? '',
    }))
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return { rules };
}
