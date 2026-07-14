/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceBooking.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopServiceBookingBase } from './serviceBooking.js';
import type { PetShopBrowseServiceCatalogOutput, PetShopCreateServiceBookingInput, PetShopCreateServiceBookingOutput } from '../contracts/serviceBooking.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopServiceBookingBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseServiceCatalogState = Assert<Assignable<typeof page.browseServiceCatalogState, "idle" | "loading" | "success" | "error">>;
type _State_browseServiceCatalogData = Assert<Assignable<typeof page.browseServiceCatalogData, PetShopBrowseServiceCatalogOutput>>;
type _State_createServiceBookingState = Assert<Assignable<typeof page.createServiceBookingState, "idle" | "loading" | "success" | "error">>;
type _State_createServiceBookingServiceId = Assert<Assignable<typeof page.createServiceBookingServiceId, string | PetShopCreateServiceBookingInput["serviceId"]>>;
type _State_createServiceBookingCustomerName = Assert<Assignable<typeof page.createServiceBookingCustomerName, string | PetShopCreateServiceBookingInput["customerName"]>>;
type _State_createServiceBookingCustomerPhone = Assert<Assignable<typeof page.createServiceBookingCustomerPhone, string | PetShopCreateServiceBookingInput["customerPhone"]>>;
type _State_createServiceBookingBookingDate = Assert<Assignable<typeof page.createServiceBookingBookingDate, string | PetShopCreateServiceBookingInput["bookingDate"]>>;
type _State_createServiceBookingBookingTime = Assert<Assignable<typeof page.createServiceBookingBookingTime, string | PetShopCreateServiceBookingInput["bookingTime"]>>;
type _State_createServiceBookingNotes = Assert<Assignable<typeof page.createServiceBookingNotes, string | PetShopCreateServiceBookingInput["notes"]>>;
type _State_createServiceBookingOutput = Assert<Assignable<typeof page.createServiceBookingOutput, PetShopCreateServiceBookingOutput | null>>;
type _State_createServiceBookingError = Assert<Assignable<typeof page.createServiceBookingError, string>>;
type _Action_loadBrowseServiceCatalog = Assert<Assignable<typeof page.loadBrowseServiceCatalog, (...args: any[]) => unknown>>;
type _Handler_handleBrowseServiceCatalogClick = Assert<Assignable<typeof page.handleBrowseServiceCatalogClick, (...args: any[]) => unknown>>;
type _Action_createServiceBooking = Assert<Assignable<typeof page.createServiceBooking, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingClick = Assert<Assignable<typeof page.handleCreateServiceBookingClick, (...args: any[]) => unknown>>;
type _Action_setCreateServiceBookingServiceId = Assert<Assignable<typeof page.setCreateServiceBookingServiceId, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingServiceIdChange = Assert<Assignable<typeof page.handleCreateServiceBookingServiceIdChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceBookingCustomerName = Assert<Assignable<typeof page.setCreateServiceBookingCustomerName, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingCustomerNameChange = Assert<Assignable<typeof page.handleCreateServiceBookingCustomerNameChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceBookingCustomerPhone = Assert<Assignable<typeof page.setCreateServiceBookingCustomerPhone, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingCustomerPhoneChange = Assert<Assignable<typeof page.handleCreateServiceBookingCustomerPhoneChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceBookingBookingDate = Assert<Assignable<typeof page.setCreateServiceBookingBookingDate, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingBookingDateChange = Assert<Assignable<typeof page.handleCreateServiceBookingBookingDateChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceBookingBookingTime = Assert<Assignable<typeof page.setCreateServiceBookingBookingTime, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingBookingTimeChange = Assert<Assignable<typeof page.handleCreateServiceBookingBookingTimeChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceBookingNotes = Assert<Assignable<typeof page.setCreateServiceBookingNotes, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceBookingNotesChange = Assert<Assignable<typeof page.handleCreateServiceBookingNotesChange, (...args: any[]) => unknown>>;

export {};