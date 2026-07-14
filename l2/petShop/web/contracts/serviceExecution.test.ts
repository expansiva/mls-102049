/// <mls fileReference="_102049_/l2/petShop/web/contracts/serviceExecution.test.ts" enhancement="_blank"/>

import type { PetShopCompleteServiceExecutionInput, PetShopCompleteServiceExecutionOutput, PetShopStartServiceExecutionInput, PetShopStartServiceExecutionOutput } from './serviceExecution.js';

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Assert<T extends true> = T;

// This file is generated from .defs.ts so tsc catches contract drift in the generated .ts.
type ExpectedPetShopStartServiceExecutionInput = {
  serviceBookingId: string;
};
type ExpectedPetShopStartServiceExecutionOutput = {
  serviceBookingId: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  updatedAt: string;
};
type ExpectedPetShopCompleteServiceExecutionInput = {
  serviceBookingId: string;
};
type ExpectedPetShopCompleteServiceExecutionOutput = {
  serviceBookingId: string;
  status: "confirmed" | "inProgress" | "completed" | "cancelled";
  completedAt: string;
};

type _PetShopStartServiceExecutionInput = Assert<Equal<PetShopStartServiceExecutionInput, ExpectedPetShopStartServiceExecutionInput>>;
type _PetShopStartServiceExecutionOutput = Assert<Equal<PetShopStartServiceExecutionOutput, ExpectedPetShopStartServiceExecutionOutput>>;
type _PetShopCompleteServiceExecutionInput = Assert<Equal<PetShopCompleteServiceExecutionInput, ExpectedPetShopCompleteServiceExecutionInput>>;
type _PetShopCompleteServiceExecutionOutput = Assert<Equal<PetShopCompleteServiceExecutionOutput, ExpectedPetShopCompleteServiceExecutionOutput>>;

export {};