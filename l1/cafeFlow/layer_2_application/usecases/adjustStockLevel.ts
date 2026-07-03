/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStockLevelRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { StockLevel } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';
import { validateStockLevelInvariants } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

export interface AdjustStockLevelInput {
  stockLevelId: string;
  movementType: string;
  quantity: number;
  reason: string;
}

export interface AdjustStockLevelOutput {
  stockLevelId: string;
  stockItemId: string;
  currentQuantity: number;
  lowStockAlert: boolean;
  stockMovementEventId: string;
}

export async function adjustStockLevel(
  ctx: RequestContext,
  input: AdjustStockLevelInput,
): Promise<AdjustStockLevelOutput> {
  const stockLevels = resolveRepository<IStockLevelRepository>(ctx, 'StockLevel');
  const now = ctx.clock.nowIso();

  // Validate movementType
  if (input.movementType !== 'baixa' && input.movementType !== 'reposicao') {
    throw new AppError(
      'VALIDATION_ERROR',
      'movementType deve ser "baixa" ou "reposicao".',
      400,
      { movementType: input.movementType },
    );
  }

  // Validate quantity is positive
  if (input.quantity <= 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'quantity deve ser maior que zero.',
      400,
      { quantity: input.quantity },
    );
  }

  return ctx.data.runInTransaction(async () => {
    // 1-2. Load StockLevel by id
    const stockLevel = await stockLevels.getById(input.stockLevelId);

    // 3. Read StockItem from MDM to obtain minimumQuantity and validate active status
    const doc = await ctx.data.mdmDocument.get({ mdmId: stockLevel.stockItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `MDM record not found: ${stockLevel.stockItemId}`,
        404,
        { mdmId: stockLevel.stockItemId },
      );
    }

    const stockItem = doc.details as {
      minimumQuantity?: number;
      status?: string;
    };

    // 4. Validate that the StockItem is active
    if (stockItem.status !== 'active') {
      throw new AppError(
        'VALIDATION_ERROR',
        'O item de estoque não está ativo. Operação rejeitada.',
        400,
        { stockItemId: stockLevel.stockItemId, status: stockItem.status },
      );
    }

    // 5. Apply stockDecrementOnPreparing rule: adjust currentQuantity
    let newQuantity: number;
    if (input.movementType === 'baixa') {
      newQuantity = stockLevel.currentQuantity - input.quantity;
    } else {
      newQuantity = stockLevel.currentQuantity + input.quantity;
    }

    // 6. Validate resulting quantity is not negative
    if (newQuantity < 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Baixa não pode exceder o saldo disponível.',
        400,
        {
          currentQuantity: stockLevel.currentQuantity,
          requestedQuantity: input.quantity,
          movementType: input.movementType,
        },
      );
    }

    // 7. Generate stockMovementEventId
    const stockMovementEventId = ctx.idGenerator.newId();

    // 8. Build the StockMovementEvent record (returned to caller; persisted as part of aggregate save)
    //    { stockMovementEventId, stockItemId: stockLevel.stockItemId, movementType, quantity, reason, createdAt: now, updatedAt: now }

    // 9. Update StockLevel with new balance and timestamps
    const updatedStockLevel: StockLevel = {
      ...stockLevel,
      currentQuantity: newQuantity,
      lastMovementAt: now,
      updatedAt: now,
    };

    // Validate domain invariants before saving
    const invariantErrors = validateStockLevelInvariants(updatedStockLevel);
    if (invariantErrors.length > 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        `StockLevel invariants violated: ${invariantErrors.join(', ')}`,
        400,
        { errors: invariantErrors },
      );
    }

    // 11. Save StockLevel within the same transaction
    await stockLevels.save(updatedStockLevel);

    // 10. Apply lowStockAlert rule: compare currentQuantity with StockItem.minimumQuantity
    const minimumQuantity = stockItem.minimumQuantity ?? 0;
    const lowStockAlert = newQuantity < minimumQuantity;

    // 12. Return output
    return {
      stockLevelId: updatedStockLevel.stockLevelId,
      stockItemId: updatedStockLevel.stockItemId,
      currentQuantity: updatedStockLevel.currentQuantity,
      lowStockAlert,
      stockMovementEventId,
    };
  });
}
