/// <mls fileReference="_102049_/l2/petShop/web/shared/homePage.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopHomePageBase } from './homePage.js';
import type { PetShopBrowseHomePageOutput } from '../contracts/homePage.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopHomePageBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseHomePageState = Assert<Assignable<typeof page.browseHomePageState, "idle" | "loading" | "success" | "error">>;
type _State_browseHomePageData = Assert<Assignable<typeof page.browseHomePageData, PetShopBrowseHomePageOutput>>;
type _Action_loadBrowseHomePage = Assert<Assignable<typeof page.loadBrowseHomePage, (...args: any[]) => unknown>>;
type _Handler_handleBrowseHomePageClick = Assert<Assignable<typeof page.handleBrowseHomePageClick, (...args: any[]) => unknown>>;

export {};