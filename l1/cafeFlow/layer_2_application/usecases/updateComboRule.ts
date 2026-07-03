/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateComboRule.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

/**
 * Domain rule `comboPriceDifference` (applied inline; L4 rules are not generated as importable modules).
 * A combo price adjustment is valid only if the resulting price stays non-negative.
 */
function comboPriceDifference(priceDifference: number, menuItemPrice: number): boolean {
  return menuItemPrice + priceDifference >= 0;
}

export interface UpdateComboRuleInput {
  comboRuleId: string;
  name: string;
  description?: string;
  priceDifference: number;
  status: string;
}

export interface UpdateComboRuleOutput {
  comboRuleId: string;
  name: string;
  priceDifference: number;
  status: string;
  updatedAt: string;
}

export async function updateComboRule(
  ctx: RequestContext,
  input: UpdateComboRuleInput,
): Promise<UpdateComboRuleOutput> {
  // 1. Load ComboRule from MDM by comboRuleId
  const doc = await ctx.data.mdmDocument.get({ mdmId: input.comboRuleId });
  if (!doc) {
    throw new AppError(
      'NOT_FOUND',
      `ComboRule não encontrada: ${input.comboRuleId}`,
      404,
      { comboRuleId: input.comboRuleId },
    );
  }

  // Extract module-specific fields from the cafeFlow namespace
  const cafeFlowData = (doc.details.cafeFlow ?? {}) as {
    priceDifference?: number;
    description?: string | null;
    menuItemId?: string;
  };

  // 3. Read the referenced MenuItem to obtain the base price
  const menuItemId = cafeFlowData.menuItemId;
  if (!menuItemId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ComboRule não possui menuItemId associado.',
      400,
      { comboRuleId: input.comboRuleId },
    );
  }
  const menuItemDoc = await ctx.data.mdmDocument.get({ mdmId: menuItemId });
  if (!menuItemDoc) {
    throw new AppError(
      'NOT_FOUND',
      `MenuItem não encontrado: ${menuItemId}`,
      404,
      { menuItemId },
    );
  }
  const menuItemPrice =
    ((menuItemDoc.details.cafeFlow as { price?: number } | undefined)?.price) ?? 0;

  // 4. Apply comboPriceDifference domain rule
  if (!comboPriceDifference(input.priceDifference, menuItemPrice)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'comboPriceDifference: a diferença de preço informada é inconsistente com o preço do item do menu.',
      400,
      {
        ruleId: 'comboPriceDifference',
        priceDifference: input.priceDifference,
        menuItemPrice,
      },
    );
  }

  // 5-6. Prepare updated fields and timestamp
  const now = ctx.clock.nowIso();
  const mdmStatus = input.status === 'inactive' ? 'Inactive' : 'Active';

  // 7. Save the updated ComboRule within a transaction
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: {
          ...doc.details,
          name: input.name,
          status: mdmStatus,
          updatedAt: now,
          cafeFlow: {
            ...cafeFlowData,
            description: input.description ?? cafeFlowData.description ?? null,
            priceDifference: input.priceDifference,
          },
        },
      },
      expectedVersion: doc.version,
    });
  });

  // 8. Return the updated fields
  return {
    comboRuleId: input.comboRuleId,
    name: input.name,
    priceDifference: input.priceDifference,
    status: input.status,
    updatedAt: now,
  };
}
