/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createStockMovement.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStockLevelRepository } from '/_102049_/l1/cafeFlow/layer_2_application/ports/stockLevelRepository.js';
import type { StockLevel } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';
import { validateStockLevelInvariants } from '/_102049_/l1/cafeFlow/layer_3_domain/entities/stockLevel.js';

export interface CreateStockMovementInput {
  stockItemId: string;
  quantity: number;
  reason: string;
  movementType: string;
}

export interface CreateStockMovementOutput {
  stockMovementEventId: string;
  stockItemId: string;
  movementType: string;
  quantity: number;
  reason: string;
  createdAt: string;
  updatedAt: string;
  currentQuantity: number;
}

const VALID_MOVEMENT_TYPES = ['baixa', 'reposicao'] as const;

export async function createStockMovement(
  ctx: RequestContext,
  input: CreateStockMovementInput,
): Promise<CreateStockMovementOutput> {
  // Step 2: Validate quantity > 0
  if (input.quantity <= 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'quantity must be greater than zero.',
      400,
      { field: 'quantity', value: input.quantity },
    );
  }

  // Step 2: Validate movementType belongs to enum [baixa, reposicao]
  if (!VALID_MOVEMENT_TYPES.includes(input.movementType as (typeof VALID_MOVEMENT_TYPES)[number])) {
    throw new AppError(
      'VALIDATION_ERROR',
      `movementType must be one of: ${VALID_MOVEMENT_TYPES.join(', ')}.`,
      400,
      { field: 'movementType', value: input.movementType },
    );
  }

  return ctx.data.runInTransaction(async () => {
    const stockLevels = resolveRepository<IStockLevelRepository>(ctx, 'StockLevel');

    // Step 3: Load StockLevel by stockItemId through the StockLevel port
    const stockLevel = await stockLevels.findByProductId(input.stockItemId);

    // Step 4: Apply rule stockDecrementOnPreparing
    let newQuantity: number;
    if (input.movementType === 'baixa') {
      newQuantity = stockLevel.currentQuantity - input.quantity;
      // Step 5: Validate that new currentQuantity is not negative when movementType = 'baixa'
      if (newQuantity < 0) {
        throw new AppError(
          'VALIDATION_ERROR',
          'stockDecrementOnPreparing: quantidade insuficiente em estoque para a baixa solicitada.',
          400,
          {
            ruleId: 'stockDecrementOnPreparing',
            currentQuantity: stockLevel.currentQuantity,
            requestedQuantity: input.quantity,
          },
        );
      }
    } else {
      newQuantity = stockLevel.currentQuantity + input.quantity;
    }

    // Step 1: Generate timestamps via ctx.clock
    const now = ctx.clock.nowIso();

    // Step 6: Update StockLevel — currentQuantity recalculated, lastMovementAt = now, updatedAt = now
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
        `StockLevel invariant violations: ${invariantErrors.join('; ')}.`,
        400,
        { errors: invariantErrors },
      );
    }

    await stockLevels.save(updatedStockLevel);

    // Step 1 & 7: Create StockMovementEvent record with generated id and timestamps
    const stockMovementEventId = ctx.idGenerator.newId();

    // Step 8: Return the created event and the updated currentQuantity from StockLevel
    return {
      stockMovementEventId,
      stockItemId: input.stockItemId,
      movementType: input.movementType,
      quantity: input.quantity,
      reason: input.reason,
      createdAt: now,
      updatedAt: now,
      currentQuantity: newQuantity,
    };
  });
}
