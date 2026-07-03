/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteComboRule.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteComboRuleInput {
  comboRuleId: string;
}

export interface DeleteComboRuleOutput {
  comboRuleId: string;
  status: string;
}

export async function deleteComboRule(
  ctx: RequestContext,
  input: DeleteComboRuleInput,
): Promise<DeleteComboRuleOutput> {
  // Step 2: Load the ComboRule from MDM by id
  const doc = await ctx.data.mdmDocument.get({ mdmId: input.comboRuleId });

  // Step 3: Validate that the ComboRule exists
  if (!doc) {
    throw new AppError(
      'NOT_FOUND',
      `ComboRule não encontrada: ${input.comboRuleId}`,
      404,
      { comboRuleId: input.comboRuleId },
    );
  }

  // Step 5: Delete the ComboRule via MDM inside a transaction
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.delete({ mdmId: input.comboRuleId });
  });

  // Step 6: Return confirmation
  return {
    comboRuleId: input.comboRuleId,
    status: 'deleted',
  };
}
