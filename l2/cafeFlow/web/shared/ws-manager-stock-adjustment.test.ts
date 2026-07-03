/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowWsManagerStockAdjustmentBase } from './ws-manager-stock-adjustment.js';
import type { CafeFlowAdjustStockLevelInput, CafeFlowQueryStockLevelsInput } from '../contracts/ws-manager-stock-adjustment.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowWsManagerStockAdjustmentBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_queryStockLevelsState = Assert<Assignable<typeof page.queryStockLevelsState, "idle" | "loading" | "success" | "error">>;
type _State_queryStockLevelsStockItemId = Assert<Assignable<typeof page.queryStockLevelsStockItemId, string | CafeFlowQueryStockLevelsInput["stockItemId"]>>;
type _State_queryStockLevelsLastMovementAt = Assert<Assignable<typeof page.queryStockLevelsLastMovementAt, string | CafeFlowQueryStockLevelsInput["lastMovementAt"]>>;
type _State_queryStockLevelsData = Assert<Assignable<typeof page.queryStockLevelsData, unknown[]>>;
type _State_adjustStockLevelState = Assert<Assignable<typeof page.adjustStockLevelState, "idle" | "loading" | "success" | "error">>;
type _State_adjustStockLevelCurrentQuantity = Assert<Assignable<typeof page.adjustStockLevelCurrentQuantity, string | CafeFlowAdjustStockLevelInput["currentQuantity"]>>;
type _State_adjustStockLevelLastMovementAt = Assert<Assignable<typeof page.adjustStockLevelLastMovementAt, string | CafeFlowAdjustStockLevelInput["lastMovementAt"]>>;
type _Action_loadQueryStockLevels = Assert<Assignable<typeof page.loadQueryStockLevels, (...args: any[]) => Promise<void>>>;
type _Handler_handleQueryStockLevelsClick = Assert<Assignable<typeof page.handleQueryStockLevelsClick, (...args: any[]) => void>>;
type _Action_adjustStockLevel = Assert<Assignable<typeof page.adjustStockLevel, (...args: any[]) => Promise<void>>>;
type _Handler_handleAdjustStockLevelClick = Assert<Assignable<typeof page.handleAdjustStockLevelClick, (...args: any[]) => void>>;
type _Action_setQueryStockLevelsStockItemId = Assert<Assignable<typeof page.setQueryStockLevelsStockItemId, (...args: any[]) => void>>;
type _Handler_handleQueryStockLevelsStockItemIdChange = Assert<Assignable<typeof page.handleQueryStockLevelsStockItemIdChange, (...args: any[]) => void>>;
type _Action_setQueryStockLevelsLastMovementAt = Assert<Assignable<typeof page.setQueryStockLevelsLastMovementAt, (...args: any[]) => void>>;
type _Handler_handleQueryStockLevelsLastMovementAtChange = Assert<Assignable<typeof page.handleQueryStockLevelsLastMovementAtChange, (...args: any[]) => void>>;
type _Action_setAdjustStockLevelCurrentQuantity = Assert<Assignable<typeof page.setAdjustStockLevelCurrentQuantity, (...args: any[]) => void>>;
type _Handler_handleAdjustStockLevelCurrentQuantityChange = Assert<Assignable<typeof page.handleAdjustStockLevelCurrentQuantityChange, (...args: any[]) => void>>;
type _Action_setAdjustStockLevelLastMovementAt = Assert<Assignable<typeof page.setAdjustStockLevelLastMovementAt, (...args: any[]) => void>>;
type _Handler_handleAdjustStockLevelLastMovementAtChange = Assert<Assignable<typeof page.handleAdjustStockLevelLastMovementAtChange, (...args: any[]) => void>>;

export {};