/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createComboRule.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateComboRuleInput {
  menuItemId: string;
  name: string;
  description?: string;
  priceDifference: number;
  status: string;
}

export interface CreateComboRuleOutput {
  comboRuleId: string;
  status: string;
}

export async function createComboRule(
  ctx: RequestContext,
  input: CreateComboRuleInput,
): Promise<CreateComboRuleOutput> {
  // Step 1-2: Resolve menuItemId and read MenuItem via MDM to validate it exists
  const menuItemDoc = await ctx.data.mdmDocument.get({ mdmId: input.menuItemId });
  if (!menuItemDoc) {
    throw new AppError(
      'NOT_FOUND',
      `MDM record not found: ${input.menuItemId}`,
      404,
      { mdmId: input.menuItemId },
    );
  }

  // Step 4: Apply comboPriceDifference rule — validate non-negative monetary value
  if (typeof input.priceDifference !== 'number' || input.priceDifference < 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'comboPriceDifference: priceDifference must be a non-negative monetary value.',
      400,
      { ruleId: 'comboPriceDifference' },
    );
  }

  // Step 3: Generate comboRuleId
  const comboRuleId = ctx.idGenerator.newId();
  // Step 5: Set timestamps
  const now = ctx.clock.nowIso();

  // Map domain status to MdmStatus
  const mdmStatus: 'Active' | 'Inactive' =
    input.status === 'inactive' ? 'Inactive' : 'Active';

  // Step 6-7: Build ComboRule aggregate and persist as MDM record inside a transaction
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.put({
      record: {
        mdmId: comboRuleId,
        version: 1,
        details: {
          mdmId: comboRuleId,
          subtype: 'Product',
          name: input.name,
          status: mdmStatus,
          countryCode: 'BR',
          tags: [],
          aliases: [],
          contacts: [],
          relationshipRefs: {},
          addresses: [],
          createdAt: now,
          updatedAt: now,
          cafeFlow: {
            menuItemId: input.menuItemId,
            name: input.name,
            description: input.description ?? null,
            priceDifference: input.priceDifference,
            status: input.status,
            createdAt: now,
            updatedAt: now,
          },
        },
      },
    });
  });

  // Step 8: Return comboRuleId and status
  return {
    comboRuleId,
    status: input.status,
  };
}
