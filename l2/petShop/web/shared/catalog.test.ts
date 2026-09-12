/// <mls fileReference="_102049_/l2/petShop/web/shared/catalog.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopCatalogBase } from './catalog.js';
import type { 
    BrowseCatalogInput, BrowseCatalogOutput,
} from '/_102049_/l2/petShop/web/contracts/catalog.browseCatalog.js';
import type {
    FeaturedProductsInput, FeaturedProductsOutput
} from '/_102049_/l2/petShop/web/contracts/catalog.featuredProducts.js';
import type {
    ProductDetailsInput, ProductDetailsOutput,
} from '/_102049_/l2/petShop/web/contracts/catalog.productDetails.js';   
import type {
    ReserveProductInput, ReserveProductOutput
} from '/_102049_/l2/petShop/web/contracts/catalog.reserveProduct.js';
    

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopCatalogBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_featuredProductsState = Assert<Assignable<typeof page.featuredProductsState, "idle" | "loading" | "success" | "error">>;
type _State_featuredProductsCategoryId = Assert<Assignable<typeof page.featuredProductsCategoryId, string | FeaturedProductsInput["categoryId"]>>;
type _State_featuredProductsPetTypeId = Assert<Assignable<typeof page.featuredProductsPetTypeId, string | FeaturedProductsInput["petTypeId"]>>;
type _State_featuredProductsName = Assert<Assignable<typeof page.featuredProductsName, string | FeaturedProductsInput["name"]>>;
type _State_featuredProductsPriceMin = Assert<Assignable<typeof page.featuredProductsPriceMin, string |         FeaturedProductsInput["priceMin"]>>;
type _State_featuredProductsPriceMax = Assert<Assignable<typeof page.featuredProductsPriceMax, string | FeaturedProductsInput["priceMax"]>>;
type _State_featuredProductsPage = Assert<Assignable<typeof page.featuredProductsPage, string | FeaturedProductsInput["page"]>>;
type _State_featuredProductsPageSize = Assert<Assignable<typeof page.featuredProductsPageSize, string | FeaturedProductsInput["pageSize"]>>;
type _State_featuredProductsData = Assert<Assignable<typeof page.featuredProductsData, unknown[] | FeaturedProductsOutput>>;
type _State_browseCatalogState = Assert<Assignable<typeof page.browseCatalogState, "idle" | "loading" | "success" | "error">>;
type _State_browseCatalogSearchName = Assert<Assignable<typeof page.browseCatalogSearchName, string | BrowseCatalogInput["searchName"]>>;
type _State_browseCatalogPetTypeId = Assert<Assignable<typeof page.browseCatalogPetTypeId, string | BrowseCatalogInput["petTypeId"]>>;
type _State_browseCatalogCategoryId = Assert<Assignable<typeof page.browseCatalogCategoryId, string | BrowseCatalogInput["categoryId"]>>;
type _State_browseCatalogMinPrice = Assert<Assignable<typeof page.browseCatalogMinPrice, string | BrowseCatalogInput["minPrice"]>>;
type _State_browseCatalogMaxPrice = Assert<Assignable<typeof page.browseCatalogMaxPrice, string | BrowseCatalogInput["maxPrice"]>>;
type _State_browseCatalogPage = Assert<Assignable<typeof page.browseCatalogPage, string | BrowseCatalogInput["page"]>>;
type _State_browseCatalogPageSize = Assert<Assignable<typeof page.browseCatalogPageSize, string | BrowseCatalogInput["pageSize"]>>;
type _State_browseCatalogData = Assert<Assignable<typeof page.browseCatalogData,    BrowseCatalogOutput>>;
type _State_productDetailsState = Assert<Assignable<typeof page.productDetailsState, "idle" | "loading" | "success" | "error">>;
type _State_productDetailsProductId = Assert<Assignable<typeof page.productDetailsProductId, string | ProductDetailsInput["productId"]>>;
type _State_productDetailsData = Assert<Assignable<typeof page.productDetailsData, ProductDetailsOutput | null>>;
type _State_reserveProductState = Assert<Assignable<typeof page.reserveProductState, "idle" | "loading" | "success" | "error">>;
type _State_reserveProductCustomerName = Assert<Assignable<typeof page.reserveProductCustomerName, string | ReserveProductInput["customerName"]>>;
type _State_reserveProductCustomerPhone = Assert<Assignable<typeof page.reserveProductCustomerPhone, string | ReserveProductInput["customerPhone"]>>;
type _State_reserveProductProductId = Assert<Assignable<typeof page.reserveProductProductId, string | ReserveProductInput["productId"]>>;
type _State_reserveProductQuantity = Assert<Assignable<typeof page.reserveProductQuantity, string | ReserveProductInput["quantity"]>>;
type _State_reserveProductOutput = Assert<Assignable<typeof page.reserveProductOutput, ReserveProductOutput | null>>;
type _State_reserveProductError = Assert<Assignable<typeof page.reserveProductError, string>>;
type _Action_loadFeaturedProducts = Assert<Assignable<typeof page.loadFeaturedProducts, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsClick = Assert<Assignable<typeof page.handleFeaturedProductsClick, (...args: any[]) => unknown>>;
type _Action_loadBrowseCatalog = Assert<Assignable<typeof page.loadBrowseCatalog, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogClick = Assert<Assignable<typeof page.handleBrowseCatalogClick, (...args: any[]) => unknown>>;
type _Action_loadProductDetails = Assert<Assignable<typeof page.loadProductDetails, (...args: any[]) => unknown>>;
type _Handler_handleProductDetailsClick = Assert<Assignable<typeof page.handleProductDetailsClick, (...args: any[]) => unknown>>;
type _Action_reserveProduct = Assert<Assignable<typeof page.reserveProduct, (...args: any[]) => unknown>>;
type _Handler_handleReserveProductClick = Assert<Assignable<typeof page.handleReserveProductClick, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsCategoryId = Assert<Assignable<typeof page.setFeaturedProductsCategoryId, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsCategoryIdChange = Assert<Assignable<typeof page.handleFeaturedProductsCategoryIdChange, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsPetTypeId = Assert<Assignable<typeof page.setFeaturedProductsPetTypeId, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsPetTypeIdChange = Assert<Assignable<typeof page.handleFeaturedProductsPetTypeIdChange, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsName = Assert<Assignable<typeof page.setFeaturedProductsName, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsNameChange = Assert<Assignable<typeof page.handleFeaturedProductsNameChange, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsPriceMin = Assert<Assignable<typeof page.setFeaturedProductsPriceMin, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsPriceMinChange = Assert<Assignable<typeof page.handleFeaturedProductsPriceMinChange, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsPriceMax = Assert<Assignable<typeof page.setFeaturedProductsPriceMax, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsPriceMaxChange = Assert<Assignable<typeof page.handleFeaturedProductsPriceMaxChange, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsPage = Assert<Assignable<typeof page.setFeaturedProductsPage, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsPageChange = Assert<Assignable<typeof page.handleFeaturedProductsPageChange, (...args: any[]) => unknown>>;
type _Action_setFeaturedProductsPageSize = Assert<Assignable<typeof page.setFeaturedProductsPageSize, (...args: any[]) => unknown>>;
type _Handler_handleFeaturedProductsPageSizeChange = Assert<Assignable<typeof page.handleFeaturedProductsPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogSearchName = Assert<Assignable<typeof page.setBrowseCatalogSearchName, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogSearchNameChange = Assert<Assignable<typeof page.handleBrowseCatalogSearchNameChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogPetTypeId = Assert<Assignable<typeof page.setBrowseCatalogPetTypeId, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogPetTypeIdChange = Assert<Assignable<typeof page.handleBrowseCatalogPetTypeIdChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogCategoryId = Assert<Assignable<typeof page.setBrowseCatalogCategoryId, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogCategoryIdChange = Assert<Assignable<typeof page.handleBrowseCatalogCategoryIdChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogMinPrice = Assert<Assignable<typeof page.setBrowseCatalogMinPrice, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogMinPriceChange = Assert<Assignable<typeof page.handleBrowseCatalogMinPriceChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogMaxPrice = Assert<Assignable<typeof page.setBrowseCatalogMaxPrice, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogMaxPriceChange = Assert<Assignable<typeof page.handleBrowseCatalogMaxPriceChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogPage = Assert<Assignable<typeof page.setBrowseCatalogPage, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogPageChange = Assert<Assignable<typeof page.handleBrowseCatalogPageChange, (...args: any[]) => unknown>>;
type _Action_setBrowseCatalogPageSize = Assert<Assignable<typeof page.setBrowseCatalogPageSize, (...args: any[]) => unknown>>;
type _Handler_handleBrowseCatalogPageSizeChange = Assert<Assignable<typeof page.handleBrowseCatalogPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setProductDetailsProductId = Assert<Assignable<typeof page.setProductDetailsProductId, (...args: any[]) => unknown>>;
type _Handler_handleProductDetailsProductIdChange = Assert<Assignable<typeof page.handleProductDetailsProductIdChange, (...args: any[]) => unknown>>;
type _Action_setReserveProductCustomerName = Assert<Assignable<typeof page.setReserveProductCustomerName, (...args: any[]) => unknown>>;
type _Handler_handleReserveProductCustomerNameChange = Assert<Assignable<typeof page.handleReserveProductCustomerNameChange, (...args: any[]) => unknown>>;
type _Action_setReserveProductCustomerPhone = Assert<Assignable<typeof page.setReserveProductCustomerPhone, (...args: any[]) => unknown>>;
type _Handler_handleReserveProductCustomerPhoneChange = Assert<Assignable<typeof page.handleReserveProductCustomerPhoneChange, (...args: any[]) => unknown>>;
type _Action_setReserveProductProductId = Assert<Assignable<typeof page.setReserveProductProductId, (...args: any[]) => unknown>>;
type _Handler_handleReserveProductProductIdChange = Assert<Assignable<typeof page.handleReserveProductProductIdChange, (...args: any[]) => unknown>>;
type _Action_setReserveProductQuantity = Assert<Assignable<typeof page.setReserveProductQuantity, (...args: any[]) => unknown>>;
type _Handler_handleReserveProductQuantityChange = Assert<Assignable<typeof page.handleReserveProductQuantityChange, (...args: any[]) => unknown>>;

export {};