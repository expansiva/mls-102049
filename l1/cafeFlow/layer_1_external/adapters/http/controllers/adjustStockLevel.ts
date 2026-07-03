/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/adjustStockLevel.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { adjustStockLevel, type AdjustStockLevelInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/adjustStockLevel.js';

export const cafeFlowAdjustStockLevelHandler: BffHandler = async ({ request, ctx }) => {
  const params = request.params as {
    stockLevelId?: string;
    movement?: {
      movementType?: string;
      quantity?: number;
      reason?: string;
    };
  };

  if (!params || !params.stockLevelId) {
    throw new AppError('VALIDATION_ERROR', 'stockLevelId is required', 400, { field: 'stockLevelId' });
  }

  if (!params.movement) {
    throw new AppError('VALIDATION_ERROR', 'movement is required', 400, { field: 'movement' });
  }

  const { movement } = params;

  if (!movement.movementType) {
    throw new AppError('VALIDATION_ERROR', 'movement.movementType is required', 400, { field: 'movement.movementType' });
  }

  if (movement.quantity === undefined || movement.quantity === null) {
    throw new AppError('VALIDATION_ERROR', 'movement.quantity is required', 400, { field: 'movement.quantity' });
  }

  if (!movement.reason) {
    throw new AppError('VALIDATION_ERROR', 'movement.reason is required', 400, { field: 'movement.reason' });
  }

  const input: AdjustStockLevelInput = {
    stockLevelId: params.stockLevelId,
    movementType: movement.movementType,
    quantity: movement.quantity,
    reason: movement.reason,
  };

  const result = await adjustStockLevel(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.adjustStockLevel.adjustStockLevel', handler: cafeFlowAdjustStockLevelHandler },
];
