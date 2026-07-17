/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/setProductHighlights.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { setProductHighlights, type SetProductHighlightsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/setProductHighlights.js';

export const petShopSetProductHighlightsHandler: BffHandler = async ({ request, ctx }) => {
const params = (request.params ?? {}) as Partial<SetProductHighlightsInput>;
if (!params.productIds || params.productIds.length === 0) {
throw new AppError('VALIDATION_ERROR', 'productIds is required', 400, { field: 'productIds' });
}
if (typeof params.highlighted !== 'boolean') {
throw new AppError('VALIDATION_ERROR', 'highlighted is required', 400, { field: 'highlighted' });
}
const input: SetProductHighlightsInput = {
productIds: params.productIds,
highlighted: params.highlighted,
};
const result = await setProductHighlights(ctx, input);
return ok(toDto(result));
};

export const routes: ControllerRoute[] = [
{ key: 'petShop.setProductHighlights.setProductHighlights', handler: petShopSetProductHighlightsHandler },
];
