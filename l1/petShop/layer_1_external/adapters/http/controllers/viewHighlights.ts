/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/controllers/viewHighlights.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler, type ControllerRoute } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewHighlights, type ViewHighlightsInput } from '/_102049_/l1/petShop/layer_2_application/usecases/viewHighlights.js';
import { toDto } from '/_102049_/l1/petShop/layer_1_external/adapters/http/dto/viewHighlights.js';

export const petShopViewHighlightsHandler: BffHandler = async ({ ctx }) => {
  // No client boundary inputs — the usecase resolves everything from ctx/ports.
  const input: ViewHighlightsInput = {};
  const result = await viewHighlights(ctx, input);
  // outputSource 'dto': project each item through the single boundary DTO point.
  return ok(result.map(toDto));
};

export const routes: ControllerRoute[] = [
  { key: 'petShop.viewHighlights.viewHighlights', handler: petShopViewHighlightsHandler },
];
