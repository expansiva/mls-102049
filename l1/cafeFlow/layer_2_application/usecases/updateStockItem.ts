/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateStockItemInput {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: string;
}

export interface UpdateStockItemOutput {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: string;
  updatedAt: string;
}

export async function updateStockItem(
  ctx: RequestContext,
  input: UpdateStockItemInput,
): Promise<UpdateStockItemOutput> {
  // 3. Validate that status is one of 'active' or 'inactive'
  if (input.status !== 'active' && input.status !== 'inactive') {
    throw new AppError(
      'VALIDATION_ERROR',
      'status deve ser "active" ou "inactive".',
      400,
      { field: 'status', value: input.status },
    );
  }

  // 4. Validate that minimumQuantity is a non-negative number
  if (typeof input.minimumQuantity !== 'number' || input.minimumQuantity < 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'minimumQuantity deve ser um número não-negativo.',
      400,
      { field: 'minimumQuantity', value: input.minimumQuantity },
    );
  }

  const now = ctx.clock.nowIso();

  return await ctx.data.runInTransaction(async (tx) => {
    // 1 & 2. Load StockItem MDM record by stockItemId; throw not-found if absent
    const doc = await tx.mdmDocument.get({ mdmId: input.stockItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `Item de estoque não encontrado: ${input.stockItemId}`,
        404,
        { stockItemId: input.stockItemId },
      );
    }

    // 5. Apply updated fields to the cafeFlow namespace inside details
    const existingCafeFlow =
      (doc.details.cafeFlow as Record<string, unknown> | undefined) ?? {};

    // 7. Evaluate lowStockAlert rule: if current quantity is at or below the
    //    new minimumQuantity threshold and status is 'active', flag the item
    const currentQuantity =
      (existingCafeFlow.currentQuantity as number | undefined) ?? 0;
    const lowStockAlert =
      input.status === 'active' && currentQuantity <= input.minimumQuantity;

    const updatedCafeFlow = {
      ...existingCafeFlow,
      name: input.name,
      unitOfMeasure: input.unitOfMeasure,
      minimumQuantity: input.minimumQuantity,
      status: input.status,
      lowStockAlert,
      updatedAt: now,
    };

    // 8. Save the updated MDM record within the transaction
    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: {
          ...doc.details,
          name: input.name,
          status: input.status === 'inactive' ? 'Inactive' : 'Active',
          updatedAt: now,
          cafeFlow: updatedCafeFlow,
        },
      },
      expectedVersion: doc.version,
    });

    // 9. Return the updated StockItem projection
    return {
      stockItemId: input.stockItemId,
      name: input.name,
      unitOfMeasure: input.unitOfMeasure,
      minimumQuantity: input.minimumQuantity,
      status: input.status,
      updatedAt: now,
    };
  });
}
