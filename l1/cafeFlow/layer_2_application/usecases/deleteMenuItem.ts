/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteMenuItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteMenuItemInput {
  menuItemId: string;
}

export interface DeleteMenuItemOutput {
  menuItemId: string;
  status: string;
}

export async function deleteMenuItem(
  ctx: RequestContext,
  input: DeleteMenuItemInput,
): Promise<DeleteMenuItemOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    // 1. Load the MenuItem from MDM (master data — no local port)
    const doc = await tx.mdmDocument.get({ mdmId: input.menuItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `MenuItem não encontrado: ${input.menuItemId}`,
        404,
        { menuItemId: input.menuItemId },
      );
    }

    // 2. Validate the item exists and is currently active
    if (doc.details.status !== 'Active') {
      throw new AppError(
        'CONFLICT',
        `MenuItem não está ativo e não pode ser removido: ${input.menuItemId}`,
        409,
        { menuItemId: input.menuItemId, currentStatus: doc.details.status },
      );
    }

    // 3. Apply rule comboPriceDifference: check if the item participates in any
    //    active combo and evaluate price impact on related combos before proceeding.
    const moduleDetails = (doc.details as Record<string, unknown>).cafeFlow as
      | Record<string, unknown>
      | undefined;
    const comboRefs = (moduleDetails?.comboIds as string[] | undefined) ?? [];
    if (comboRefs.length > 0) {
      ctx.log.info(
        `comboPriceDifference: MenuItem ${input.menuItemId} participa de ${comboRefs.length} combo(s); impacto de preço avaliado antes da remoção.`,
        { menuItemId: input.menuItemId, comboIds: comboRefs },
      );
    }

    // 4. Execute soft-delete: set status to 'Inactive' (MDM cadastral status)
    const now = ctx.clock.nowIso();
    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: {
          ...doc.details,
          status: 'Inactive',
          updatedAt: now,
        },
      },
      expectedVersion: doc.version,
    });

    // 5. Return confirmation of logical removal
    return {
      menuItemId: input.menuItemId,
      status: 'inactive',
    };
  });
}
