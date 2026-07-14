/// <mls fileReference="_102049_/l2/petShop/web/shared/productCatalog.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopProductCatalogBase } from './productCatalog.js';
import type { PetShopBrowseProductCatalogInput, PetShopBrowseProductCatalogOutput, PetShopPlaceStorePickupOrderInput, PetShopPlaceStorePickupOrderOutput, PetShopViewProductDetailsInput, PetShopViewProductDetailsOutput } from '../contracts/productCatalog.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopProductCatalogBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseProductCatalogState = Assert<Assignable<typeof page.browseProductCatalogState, "idle" | "loading" | "success" | "error">>;
type _State_browseProductCatalogSearchName = Assert<Assignable<typeof page.browseProductCatalogSearchName, string | PetShopBrowseProductCatalogInput["searchName"]>>;
type _State_browseProductCatalogProductCategoryId = Assert<Assignable<typeof page.browseProductCatalogProductCategoryId, string | PetShopBrowseProductCatalogInput["productCategoryId"]>>;
type _State_browseProductCatalogData = Assert<Assignable<typeof page.browseProductCatalogData, PetShopBrowseProductCatalogOutput>>;
type _State_viewProductDetailsState = Assert<Assignable<typeof page.viewProductDetailsState, "idle" | "loading" | "success" | "error">>;
type _State_viewProductDetailsProductId = Assert<Assignable<typeof page.viewProductDetailsProductId, string | PetShopViewProductDetailsInput["productId"]>>;
type _State_viewProductDetailsData = Assert<Assignable<typeof page.viewProductDetailsData, PetShopViewProductDetailsOutput | null>>;
type _State_placeStorePickupOrderState = Assert<Assignable<typeof page.placeStorePickupOrderState, "idle" | "loading" | "success" | "error">>;
type _State_placeStorePickupOrderCustomerName = Assert<Assignable<typeof page.placeStorePickupOrderCustomerName, string | PetShopPlaceStorePickupOrderInput["customerName"]>>;
type _State_placeStorePickupOrderCustomerPhone = Assert<Assignable<typeof page.placeStorePickupOrderCustomerPhone, string | PetShopPlaceStorePickupOrderInput["customerPhone"]>>;
type _State_placeStorePickupOrderOutput = Assert<Assignable<typeof page.placeStorePickupOrderOutput, PetShopPlaceStorePickupOrderOutput | null>>;
type _State_placeStorePickupOrderError = Assert<Assignable<typeof page.placeStorePickupOrderError, string>>;
type _Action_loadBrowseProductCatalog = Assert<Assignable<typeof page.loadBrowseProductCatalog, (...args: any[]) => unknown>>;
type _Handler_handleBrowseProductCatalogClick = Assert<Assignable<typeof page.handleBrowseProductCatalogClick, (...args: any[]) => unknown>>;
type _Action_loadViewProductDetails = Assert<Assignable<typeof page.loadViewProductDetails, (...args: any[]) => unknown>>;
type _Handler_handleViewProductDetailsClick = Assert<Assignable<typeof page.handleViewProductDetailsClick, (...args: any[]) => unknown>>;
type _Action_placeStorePickupOrder = Assert<Assignable<typeof page.placeStorePickupOrder, (...args: any[]) => unknown>>;
type _Handler_handlePlaceStorePickupOrderClick = Assert<Assignable<typeof page.handlePlaceStorePickupOrderClick, (...args: any[]) => unknown>>;
type _Action_setBrowseProductCatalogSearchName = Assert<Assignable<typeof page.setBrowseProductCatalogSearchName, (...args: any[]) => unknown>>;
type _Handler_handleBrowseProductCatalogSearchNameChange = Assert<Assignable<typeof page.handleBrowseProductCatalogSearchNameChange, (...args: any[]) => unknown>>;
type _Action_setBrowseProductCatalogProductCategoryId = Assert<Assignable<typeof page.setBrowseProductCatalogProductCategoryId, (...args: any[]) => unknown>>;
type _Handler_handleBrowseProductCatalogProductCategoryIdChange = Assert<Assignable<typeof page.handleBrowseProductCatalogProductCategoryIdChange, (...args: any[]) => unknown>>;
type _Action_setViewProductDetailsProductId = Assert<Assignable<typeof page.setViewProductDetailsProductId, (...args: any[]) => unknown>>;
type _Handler_handleViewProductDetailsProductIdChange = Assert<Assignable<typeof page.handleViewProductDetailsProductIdChange, (...args: any[]) => unknown>>;
type _Action_setPlaceStorePickupOrderCustomerName = Assert<Assignable<typeof page.setPlaceStorePickupOrderCustomerName, (...args: any[]) => unknown>>;
type _Handler_handlePlaceStorePickupOrderCustomerNameChange = Assert<Assignable<typeof page.handlePlaceStorePickupOrderCustomerNameChange, (...args: any[]) => unknown>>;
type _Action_setPlaceStorePickupOrderCustomerPhone = Assert<Assignable<typeof page.setPlaceStorePickupOrderCustomerPhone, (...args: any[]) => unknown>>;
type _Handler_handlePlaceStorePickupOrderCustomerPhoneChange = Assert<Assignable<typeof page.handlePlaceStorePickupOrderCustomerPhoneChange, (...args: any[]) => unknown>>;

export {};