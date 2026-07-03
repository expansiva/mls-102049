/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteStockItemInput {
  stockItemId: string;
}

export interface DeleteStockItemOutput {
  stockItemId: string;
  status: string;
}

export async function deleteStockItem(
  ctx: RequestContext,
  input: DeleteStockItemInput,
): Promise<DeleteStockItemOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    // 1 & 2. Load the StockItem (MDM master-data record) by id
    const doc = await tx.mdmDocument.get({ mdmId: input.stockItemId });

    // 3. Validate that the item exists
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `StockItem não encontrado: ${input.stockItemId}`,
        404,
        { stockItemId: input.stockItemId },
      );
    }

    // 4. Apply lowStockAlert rule: if the item was at or below minimum quantity,
    //    register an alert about the removal of a critical stock item.
    const details = doc.details as Record<string, unknown>;
    const cafeFlow = (details.cafeFlow as Record<string, unknown> | undefined) ?? {};
    const quantity =
      (cafeFlow.quantity as number | undefined) ??
      (details.quantity as number | undefined);
    const minQuantity =
      (cafeFlow.minQuantity as number | undefined) ??
      (details.minQuantity as number | undefined);

    if (
      typeof quantity === 'number' &&
      typeof minQuantity === 'number' &&
      quantity <= minQuantity
    ) {
      ctx.log.info('lowStockAlert: item de estoque crítico removido', {
        stockItemId: input.stockItemId,
        quantity,
        minQuantity,
      });
    }

    // 5. Permanently delete the StockItem (MDM record) within the same transaction
    await tx.mdmDocument.delete({ mdmId: input.stockItemId });

    // 6. Return confirmation
    return {
      stockItemId: input.stockItemId,
      status: 'deleted',
    };
  });
}
