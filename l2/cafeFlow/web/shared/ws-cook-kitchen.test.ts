/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowWsCookKitchenBase } from './ws-cook-kitchen.js';
import type { CafeFlowCreateStockMovementInput, CafeFlowUpdateKitchenStatusInput } from '../contracts/ws-cook-kitchen.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowWsCookKitchenBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_updateKitchenStatusState = Assert<Assignable<typeof page.updateKitchenStatusState, "idle" | "loading" | "success" | "error">>;
type _State_updateKitchenStatusStatus = Assert<Assignable<typeof page.updateKitchenStatusStatus, string | CafeFlowUpdateKitchenStatusInput["status"]>>;
type _State_updateKitchenStatusPreviousStatus = Assert<Assignable<typeof page.updateKitchenStatusPreviousStatus, string | CafeFlowUpdateKitchenStatusInput["previousStatus"]>>;
type _State_createStockMovementState = Assert<Assignable<typeof page.createStockMovementState, "idle" | "loading" | "success" | "error">>;
type _State_createStockMovementMovementType = Assert<Assignable<typeof page.createStockMovementMovementType, string | CafeFlowCreateStockMovementInput["movementType"]>>;
type _State_createStockMovementQuantity = Assert<Assignable<typeof page.createStockMovementQuantity, string | CafeFlowCreateStockMovementInput["quantity"]>>;
type _State_createStockMovementReason = Assert<Assignable<typeof page.createStockMovementReason, string | CafeFlowCreateStockMovementInput["reason"]>>;
type _State_LayoutColOrderId = Assert<Assignable<typeof page.LayoutColOrderId, string>>;
type _State_LayoutColOrderType = Assert<Assignable<typeof page.LayoutColOrderType, string>>;
type _State_LayoutColTableId = Assert<Assignable<typeof page.LayoutColTableId, string>>;
type _State_LayoutColTotal = Assert<Assignable<typeof page.LayoutColTotal, string>>;
type _State_LayoutColCreatedAt = Assert<Assignable<typeof page.LayoutColCreatedAt, string>>;
type _Action_updateKitchenStatus = Assert<Assignable<typeof page.updateKitchenStatus, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateKitchenStatusClick = Assert<Assignable<typeof page.handleUpdateKitchenStatusClick, (...args: any[]) => void>>;
type _Action_createStockMovement = Assert<Assignable<typeof page.createStockMovement, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateStockMovementClick = Assert<Assignable<typeof page.handleCreateStockMovementClick, (...args: any[]) => void>>;
type _Action_setUpdateKitchenStatusStatus = Assert<Assignable<typeof page.setUpdateKitchenStatusStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateKitchenStatusStatusChange = Assert<Assignable<typeof page.handleUpdateKitchenStatusStatusChange, (...args: any[]) => void>>;
type _Action_setUpdateKitchenStatusPreviousStatus = Assert<Assignable<typeof page.setUpdateKitchenStatusPreviousStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateKitchenStatusPreviousStatusChange = Assert<Assignable<typeof page.handleUpdateKitchenStatusPreviousStatusChange, (...args: any[]) => void>>;
type _Action_setCreateStockMovementMovementType = Assert<Assignable<typeof page.setCreateStockMovementMovementType, (...args: any[]) => void>>;
type _Handler_handleCreateStockMovementMovementTypeChange = Assert<Assignable<typeof page.handleCreateStockMovementMovementTypeChange, (...args: any[]) => void>>;
type _Action_setCreateStockMovementQuantity = Assert<Assignable<typeof page.setCreateStockMovementQuantity, (...args: any[]) => void>>;
type _Handler_handleCreateStockMovementQuantityChange = Assert<Assignable<typeof page.handleCreateStockMovementQuantityChange, (...args: any[]) => void>>;
type _Action_setCreateStockMovementReason = Assert<Assignable<typeof page.setCreateStockMovementReason, (...args: any[]) => void>>;
type _Handler_handleCreateStockMovementReasonChange = Assert<Assignable<typeof page.handleCreateStockMovementReasonChange, (...args: any[]) => void>>;

export {};