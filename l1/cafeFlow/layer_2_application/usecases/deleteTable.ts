/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/deleteTable.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteTableInput {
  tableId: string;
}

export interface DeleteTableOutput {
  tableId: string;
  status: string;
}

export async function deleteTable(ctx: RequestContext, input: DeleteTableInput): Promise<DeleteTableOutput> {
  return ctx.data.runInTransaction(async () => {
    // 1. Load the MDM document for the table to verify it exists
    const doc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError('NOT_FOUND', `Mesa não encontrada: ${input.tableId}`, 404, { tableId: input.tableId });
    }

    // 2. Delete the MDM record (manager confirmation is guaranteed by the presentation layer)
    await ctx.data.mdmDocument.delete({ mdmId: input.tableId });

    // 3. Return success
    return {
      tableId: input.tableId,
      status: 'deleted',
    };
  });
}
