/// <mls fileReference="_102049_/l2/petShop/web/shared/adoptionGallery.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopAdoptionGalleryBase } from './adoptionGallery.js';
import type { PetShopBrowseAdoptablePetsOutput, PetShopExpressAdoptionInterestInput, PetShopExpressAdoptionInterestOutput, PetShopViewAdoptablePetDetailsInput, PetShopViewAdoptablePetDetailsOutput } from '../contracts/adoptionGallery.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopAdoptionGalleryBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseAdoptablePetsState = Assert<Assignable<typeof page.browseAdoptablePetsState, "idle" | "loading" | "success" | "error">>;
type _State_browseAdoptablePetsData = Assert<Assignable<typeof page.browseAdoptablePetsData, PetShopBrowseAdoptablePetsOutput>>;
type _State_viewAdoptablePetDetailsState = Assert<Assignable<typeof page.viewAdoptablePetDetailsState, "idle" | "loading" | "success" | "error">>;
type _State_viewAdoptablePetDetailsAdoptablePetId = Assert<Assignable<typeof page.viewAdoptablePetDetailsAdoptablePetId, string | PetShopViewAdoptablePetDetailsInput["adoptablePetId"]>>;
type _State_viewAdoptablePetDetailsData = Assert<Assignable<typeof page.viewAdoptablePetDetailsData, PetShopViewAdoptablePetDetailsOutput | null>>;
type _State_expressAdoptionInterestState = Assert<Assignable<typeof page.expressAdoptionInterestState, "idle" | "loading" | "success" | "error">>;
type _State_expressAdoptionInterestAdoptablePetId = Assert<Assignable<typeof page.expressAdoptionInterestAdoptablePetId, string | PetShopExpressAdoptionInterestInput["adoptablePetId"]>>;
type _State_expressAdoptionInterestCustomerName = Assert<Assignable<typeof page.expressAdoptionInterestCustomerName, string | PetShopExpressAdoptionInterestInput["customerName"]>>;
type _State_expressAdoptionInterestCustomerEmail = Assert<Assignable<typeof page.expressAdoptionInterestCustomerEmail, string | PetShopExpressAdoptionInterestInput["customerEmail"]>>;
type _State_expressAdoptionInterestCustomerPhone = Assert<Assignable<typeof page.expressAdoptionInterestCustomerPhone, string | PetShopExpressAdoptionInterestInput["customerPhone"]>>;
type _State_expressAdoptionInterestOutput = Assert<Assignable<typeof page.expressAdoptionInterestOutput, PetShopExpressAdoptionInterestOutput | null>>;
type _State_expressAdoptionInterestError = Assert<Assignable<typeof page.expressAdoptionInterestError, string>>;
type _Action_loadBrowseAdoptablePets = Assert<Assignable<typeof page.loadBrowseAdoptablePets, (...args: any[]) => unknown>>;
type _Handler_handleBrowseAdoptablePetsClick = Assert<Assignable<typeof page.handleBrowseAdoptablePetsClick, (...args: any[]) => unknown>>;
type _Action_loadViewAdoptablePetDetails = Assert<Assignable<typeof page.loadViewAdoptablePetDetails, (...args: any[]) => unknown>>;
type _Handler_handleViewAdoptablePetDetailsClick = Assert<Assignable<typeof page.handleViewAdoptablePetDetailsClick, (...args: any[]) => unknown>>;
type _Action_expressAdoptionInterest = Assert<Assignable<typeof page.expressAdoptionInterest, (...args: any[]) => unknown>>;
type _Handler_handleExpressAdoptionInterestClick = Assert<Assignable<typeof page.handleExpressAdoptionInterestClick, (...args: any[]) => unknown>>;
type _Action_setViewAdoptablePetDetailsAdoptablePetId = Assert<Assignable<typeof page.setViewAdoptablePetDetailsAdoptablePetId, (...args: any[]) => unknown>>;
type _Handler_handleViewAdoptablePetDetailsAdoptablePetIdChange = Assert<Assignable<typeof page.handleViewAdoptablePetDetailsAdoptablePetIdChange, (...args: any[]) => unknown>>;
type _Action_setExpressAdoptionInterestAdoptablePetId = Assert<Assignable<typeof page.setExpressAdoptionInterestAdoptablePetId, (...args: any[]) => unknown>>;
type _Handler_handleExpressAdoptionInterestAdoptablePetIdChange = Assert<Assignable<typeof page.handleExpressAdoptionInterestAdoptablePetIdChange, (...args: any[]) => unknown>>;
type _Action_setExpressAdoptionInterestCustomerName = Assert<Assignable<typeof page.setExpressAdoptionInterestCustomerName, (...args: any[]) => unknown>>;
type _Handler_handleExpressAdoptionInterestCustomerNameChange = Assert<Assignable<typeof page.handleExpressAdoptionInterestCustomerNameChange, (...args: any[]) => unknown>>;
type _Action_setExpressAdoptionInterestCustomerEmail = Assert<Assignable<typeof page.setExpressAdoptionInterestCustomerEmail, (...args: any[]) => unknown>>;
type _Handler_handleExpressAdoptionInterestCustomerEmailChange = Assert<Assignable<typeof page.handleExpressAdoptionInterestCustomerEmailChange, (...args: any[]) => unknown>>;
type _Action_setExpressAdoptionInterestCustomerPhone = Assert<Assignable<typeof page.setExpressAdoptionInterestCustomerPhone, (...args: any[]) => unknown>>;
type _Handler_handleExpressAdoptionInterestCustomerPhoneChange = Assert<Assignable<typeof page.handleExpressAdoptionInterestCustomerPhoneChange, (...args: any[]) => unknown>>;

export {};