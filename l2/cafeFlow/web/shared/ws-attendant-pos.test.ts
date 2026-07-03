/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowWsAttendantPosBase } from './ws-attendant-pos.js';
import type { CafeFlowCreateOrderInput, CafeFlowSettleOrderInput } from '../contracts/ws-attendant-pos.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowWsAttendantPosBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_createOrderState = Assert<Assignable<typeof page.createOrderState, "idle" | "loading" | "success" | "error">>;
type _State_createOrderOrderType = Assert<Assignable<typeof page.createOrderOrderType, string | CafeFlowCreateOrderInput["orderType"]>>;
type _State_createOrderStatus = Assert<Assignable<typeof page.createOrderStatus, string | CafeFlowCreateOrderInput["status"]>>;
type _State_createOrderTotal = Assert<Assignable<typeof page.createOrderTotal, string | CafeFlowCreateOrderInput["total"]>>;
type _State_settleOrderState = Assert<Assignable<typeof page.settleOrderState, "idle" | "loading" | "success" | "error">>;
type _State_settleOrderStatus = Assert<Assignable<typeof page.settleOrderStatus, string | CafeFlowSettleOrderInput["status"]>>;
type _Action_createOrder = Assert<Assignable<typeof page.createOrder, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateOrderClick = Assert<Assignable<typeof page.handleCreateOrderClick, (...args: any[]) => void>>;
type _Action_settleOrder = Assert<Assignable<typeof page.settleOrder, (...args: any[]) => Promise<void>>>;
type _Handler_handleSettleOrderClick = Assert<Assignable<typeof page.handleSettleOrderClick, (...args: any[]) => void>>;
type _Action_setCreateOrderOrderType = Assert<Assignable<typeof page.setCreateOrderOrderType, (...args: any[]) => void>>;
type _Handler_handleCreateOrderOrderTypeChange = Assert<Assignable<typeof page.handleCreateOrderOrderTypeChange, (...args: any[]) => void>>;
type _Action_setCreateOrderStatus = Assert<Assignable<typeof page.setCreateOrderStatus, (...args: any[]) => void>>;
type _Handler_handleCreateOrderStatusChange = Assert<Assignable<typeof page.handleCreateOrderStatusChange, (...args: any[]) => void>>;
type _Action_setCreateOrderTotal = Assert<Assignable<typeof page.setCreateOrderTotal, (...args: any[]) => void>>;
type _Handler_handleCreateOrderTotalChange = Assert<Assignable<typeof page.handleCreateOrderTotalChange, (...args: any[]) => void>>;
type _Action_setSettleOrderStatus = Assert<Assignable<typeof page.setSettleOrderStatus, (...args: any[]) => void>>;
type _Handler_handleSettleOrderStatusChange = Assert<Assignable<typeof page.handleSettleOrderStatusChange, (...args: any[]) => void>>;

export {};