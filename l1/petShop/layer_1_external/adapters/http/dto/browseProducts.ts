/// <mls fileReference="_102049_/l1/petShop/layer_1_external/adapters/http/dto/browseProducts.ts" enhancement="_blank"/>

// Boundary DTO for the browseProducts routine — the wire shape owned by the HTTP adapter. Alias of the
// usecase output today (toDto is identity); the seam lets the public contract diverge from the
// usecase later without touching the frontend. Frontend copies the shape from the controller defs.
import type { BrowseProductsOutput } from '/_102049_/l1/petShop/layer_2_application/usecases/browseProducts.js';

export type BrowseProductsResponseDto = BrowseProductsOutput;

export function toDto(result: BrowseProductsOutput): BrowseProductsResponseDto {
  return result;
}
