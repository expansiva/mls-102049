/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateMenuItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateMenuItemInput {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  status: string;
}

export interface UpdateMenuItemOutput {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  status: string;
  updatedAt: string;
}

export async function updateMenuItem(
  ctx: RequestContext,
  input: UpdateMenuItemInput,
): Promise<UpdateMenuItemOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    // 1. Load the existing MenuItem from MDM by menuItemId
    const doc = await tx.mdmDocument.get({ mdmId: input.menuItemId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `MenuItem not found: ${input.menuItemId}`,
        404,
        { menuItemId: input.menuItemId },
      );
    }

    const existingDetails = doc.details;
    const existingCafeFlow =
      (existingDetails.cafeFlow as Record<string, unknown> | undefined) ?? {};

    // 3. Apply comboPriceDifference rule: if the item belongs to a combo,
    //    verify the price change does not violate the allowed min/max difference
    //    relative to the parent combo's price.
    const comboParentId = existingCafeFlow.comboParentId as string | undefined;
    if (comboParentId) {
      const comboDoc = await tx.mdmDocument.get({ mdmId: comboParentId });
      if (comboDoc) {
        const comboCafeFlow =
          (comboDoc.details.cafeFlow as Record<string, unknown> | undefined) ??
          {};
        const comboPrice = comboCafeFlow.price as number | undefined;
        if (comboPrice !== undefined) {
          const minDifference = comboCafeFlow.comboMinItemPriceDifference as
            | number
            | undefined;
          const maxDifference = comboCafeFlow.comboMaxItemPriceDifference as
            | number
            | undefined;
          const difference = comboPrice - input.price;
          if (
            minDifference !== undefined &&
            difference < minDifference
          ) {
            throw new AppError(
              'CONFLICT',
              'comboPriceDifference: o preço do item viola a diferença mínima permitida em relação ao combo pai.',
              409,
              {
                ruleId: 'comboPriceDifference',
                comboParentId,
                comboPrice,
                itemPrice: input.price,
                difference,
                minDifference,
              },
            );
          }
          if (
            maxDifference !== undefined &&
            difference > maxDifference
          ) {
            throw new AppError(
              'CONFLICT',
              'comboPriceDifference: o preço do item viola a diferença máxima permitida em relação ao combo pai.',
              409,
              {
                ruleId: 'comboPriceDifference',
                comboParentId,
                comboPrice,
                itemPrice: input.price,
                difference,
                maxDifference,
              },
            );
          }
        }
      }
    }

    // 4-6. Update fields, preserve menuItemId and createdAt, set updatedAt automatically
    const now = ctx.clock.nowIso();
    const statusMapped: 'Active' | 'Inactive' =
      input.status === 'inactive' ? 'Inactive' : 'Active';

    const updatedCafeFlow: Record<string, unknown> = {
      ...existingCafeFlow,
      name: input.name,
      category: input.category,
      price: input.price,
      description: input.description ?? null,
      status: input.status,
    };

    // 7. Save the updated MenuItem through MDM within the same transaction
    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: {
          ...existingDetails,
          name: input.name,
          status: statusMapped,
          updatedAt: now,
          cafeFlow: updatedCafeFlow,
        },
      },
      expectedVersion: doc.version,
    });

    // 8. Return the updated MenuItem with all persisted fields
    return {
      menuItemId: input.menuItemId,
      name: input.name,
      category: input.category,
      price: input.price,
      description: input.description,
      status: input.status,
      updatedAt: now,
    };
  });
}
