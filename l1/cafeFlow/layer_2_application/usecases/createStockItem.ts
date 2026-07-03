/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createStockItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateStockItemInput {
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
}

export interface CreateStockItemOutput {
  stockItemId: string;
  name: string;
  unitOfMeasure: string;
  minimumQuantity: number;
  status: string;
}

export async function createStockItem(
  ctx: RequestContext,
  input: CreateStockItemInput,
): Promise<CreateStockItemOutput> {
  // 1. Validate that name, unitOfMeasure and minimumQuantity are provided and non-empty
  if (!input.name || input.name.trim() === '') {
    throw new AppError(
      'VALIDATION_ERROR',
      'name é obrigatório e não pode ser vazio.',
      400,
      { field: 'name' },
    );
  }
  if (!input.unitOfMeasure || input.unitOfMeasure.trim() === '') {
    throw new AppError(
      'VALIDATION_ERROR',
      'unitOfMeasure é obrigatório e não pode ser vazio.',
      400,
      { field: 'unitOfMeasure' },
    );
  }
  if (input.minimumQuantity == null || isNaN(input.minimumQuantity)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'minimumQuantity é obrigatório e deve ser um número.',
      400,
      { field: 'minimumQuantity' },
    );
  }

  // 6. Apply lowStockAlert rule: minimumQuantity must be strictly positive to serve as a low-stock threshold
  if (input.minimumQuantity <= 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'lowStockAlert: minimumQuantity deve ser maior que zero para configurar alerta de estoque baixo.',
      400,
      { ruleId: 'lowStockAlert' },
    );
  }

  // 2. Generate stockItemId
  const stockItemId = ctx.idGenerator.newId();

  // 3. Resolve timestamps
  const now = ctx.clock.nowIso();

  // 4. Set status to 'active' for newly created stock items
  const status = 'active';

  // 5 & 7. Persist StockItem as an MDM record inside a transaction
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.put({
      record: {
        mdmId: stockItemId,
        version: 1,
        details: {
          mdmId: stockItemId,
          subtype: 'Product',
          name: input.name,
          status: 'Active',
          countryCode: 'BR',
          tags: [],
          aliases: [],
          contacts: [],
          relationshipRefs: {},
          addresses: [],
          createdAt: now,
          updatedAt: now,
          cafeFlow: {
            unitOfMeasure: input.unitOfMeasure,
            minimumQuantity: input.minimumQuantity,
            status,
          },
        },
      },
    });
  });

  // 8. Return projected output
  return {
    stockItemId,
    name: input.name,
    unitOfMeasure: input.unitOfMeasure,
    minimumQuantity: input.minimumQuantity,
    status,
  };
}
