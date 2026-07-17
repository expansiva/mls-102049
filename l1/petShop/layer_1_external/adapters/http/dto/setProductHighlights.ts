/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/dto/setProductHighlights.ts" enhancement="_blank"/>

// Boundary DTO for the setProductHighlights routine — the wire shape owned by the HTTP adapter. Alias of the
// usecase output today (toDto is identity); the seam lets the public contract diverge from the
// usecase later without touching the frontend. Frontend copies the shape from the controller defs.
import type { SetProductHighlightsOutput } from '/_102049_/l1/petShop/layer_2_application/usecases/setProductHighlights.js';

export type SetProductHighlightsResponseDto = SetProductHighlightsOutput;

export function toDto(result: SetProductHighlightsOutput): SetProductHighlightsResponseDto {
  return result;
}
