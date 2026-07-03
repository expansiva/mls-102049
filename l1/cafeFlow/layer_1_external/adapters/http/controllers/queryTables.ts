/// <mls fileReference="_102049_/l1/cafeFlow/layer_1_external/adapters/http/controllers/queryTables.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryTables, type QueryTablesInput } from '/_102049_/l1/cafeFlow/layer_2_application/usecases/queryTables.js';

export const cafeFlowQueryTablesHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as Partial<QueryTablesInput>;

  // Boundary validation — both filters are optional, but if provided must be non-empty strings.
  if (params.statusFilter !== undefined && params.statusFilter !== null) {
    if (typeof params.statusFilter !== 'string' || params.statusFilter.trim() === '') {
      throw new AppError('VALIDATION_ERROR', 'statusFilter must be a non-empty string', 400, { field: 'statusFilter' });
    }
  }

  if (params.numberFilter !== undefined && params.numberFilter !== null) {
    if (typeof params.numberFilter !== 'string' || params.numberFilter.trim() === '') {
      throw new AppError('VALIDATION_ERROR', 'numberFilter must be a non-empty string', 400, { field: 'numberFilter' });
    }
  }

  const input: QueryTablesInput = {
    statusFilter: params.statusFilter,
    numberFilter: params.numberFilter,
  };

  const result = await queryTables(ctx, input);
  return ok(result);
};

export const routes: ControllerRoute[] = [
  { key: 'cafeFlow.queryTables.queryTables', handler: cafeFlowQueryTablesHandler },
];
