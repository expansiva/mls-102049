/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-tables.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { CafeFlowWsManagerTablesBase } from './ws-manager-tables.js';
import type { CafeFlowCreateTableInput, CafeFlowDeleteTableInput, CafeFlowQueryTablesInput, CafeFlowUpdateTableInput } from '../contracts/ws-manager-tables.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: CafeFlowWsManagerTablesBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_queryTablesState = Assert<Assignable<typeof page.queryTablesState, "idle" | "loading" | "success" | "error">>;
type _State_queryTablesTableId = Assert<Assignable<typeof page.queryTablesTableId, string | CafeFlowQueryTablesInput["tableId"]>>;
type _State_queryTablesName = Assert<Assignable<typeof page.queryTablesName, string | CafeFlowQueryTablesInput["name"]>>;
type _State_queryTablesStatus = Assert<Assignable<typeof page.queryTablesStatus, string | CafeFlowQueryTablesInput["status"]>>;
type _State_queryTablesCreatedAt = Assert<Assignable<typeof page.queryTablesCreatedAt, string | CafeFlowQueryTablesInput["createdAt"]>>;
type _State_queryTablesUpdatedAt = Assert<Assignable<typeof page.queryTablesUpdatedAt, string | CafeFlowQueryTablesInput["updatedAt"]>>;
type _State_queryTablesData = Assert<Assignable<typeof page.queryTablesData, unknown[]>>;
type _State_createTableState = Assert<Assignable<typeof page.createTableState, "idle" | "loading" | "success" | "error">>;
type _State_createTableNumber = Assert<Assignable<typeof page.createTableNumber, string | CafeFlowCreateTableInput["number"]>>;
type _State_createTableName = Assert<Assignable<typeof page.createTableName, string | CafeFlowCreateTableInput["name"]>>;
type _State_createTableStatus = Assert<Assignable<typeof page.createTableStatus, string | CafeFlowCreateTableInput["status"]>>;
type _State_updateTableState = Assert<Assignable<typeof page.updateTableState, "idle" | "loading" | "success" | "error">>;
type _State_updateTableNumber = Assert<Assignable<typeof page.updateTableNumber, string | CafeFlowUpdateTableInput["number"]>>;
type _State_updateTableName = Assert<Assignable<typeof page.updateTableName, string | CafeFlowUpdateTableInput["name"]>>;
type _State_updateTableStatus = Assert<Assignable<typeof page.updateTableStatus, string | CafeFlowUpdateTableInput["status"]>>;
type _State_deleteTableState = Assert<Assignable<typeof page.deleteTableState, "idle" | "loading" | "success" | "error">>;
type _State_deleteTableTableId = Assert<Assignable<typeof page.deleteTableTableId, string | CafeFlowDeleteTableInput["tableId"]>>;
type _State_deleteTableNumber = Assert<Assignable<typeof page.deleteTableNumber, string | CafeFlowDeleteTableInput["number"]>>;
type _State_deleteTableName = Assert<Assignable<typeof page.deleteTableName, string | CafeFlowDeleteTableInput["name"]>>;
type _State_deleteTableStatus = Assert<Assignable<typeof page.deleteTableStatus, string | CafeFlowDeleteTableInput["status"]>>;
type _Action_loadQueryTables = Assert<Assignable<typeof page.loadQueryTables, (...args: any[]) => Promise<void>>>;
type _Handler_handleQueryTablesClick = Assert<Assignable<typeof page.handleQueryTablesClick, (...args: any[]) => void>>;
type _Action_createTable = Assert<Assignable<typeof page.createTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleCreateTableClick = Assert<Assignable<typeof page.handleCreateTableClick, (...args: any[]) => void>>;
type _Action_updateTable = Assert<Assignable<typeof page.updateTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleUpdateTableClick = Assert<Assignable<typeof page.handleUpdateTableClick, (...args: any[]) => void>>;
type _Action_deleteTable = Assert<Assignable<typeof page.deleteTable, (...args: any[]) => Promise<void>>>;
type _Handler_handleDeleteTableClick = Assert<Assignable<typeof page.handleDeleteTableClick, (...args: any[]) => void>>;
type _Action_setQueryTablesTableId = Assert<Assignable<typeof page.setQueryTablesTableId, (...args: any[]) => void>>;
type _Handler_handleQueryTablesTableIdChange = Assert<Assignable<typeof page.handleQueryTablesTableIdChange, (...args: any[]) => void>>;
type _Action_setQueryTablesName = Assert<Assignable<typeof page.setQueryTablesName, (...args: any[]) => void>>;
type _Handler_handleQueryTablesNameChange = Assert<Assignable<typeof page.handleQueryTablesNameChange, (...args: any[]) => void>>;
type _Action_setQueryTablesStatus = Assert<Assignable<typeof page.setQueryTablesStatus, (...args: any[]) => void>>;
type _Handler_handleQueryTablesStatusChange = Assert<Assignable<typeof page.handleQueryTablesStatusChange, (...args: any[]) => void>>;
type _Action_setQueryTablesCreatedAt = Assert<Assignable<typeof page.setQueryTablesCreatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryTablesCreatedAtChange = Assert<Assignable<typeof page.handleQueryTablesCreatedAtChange, (...args: any[]) => void>>;
type _Action_setQueryTablesUpdatedAt = Assert<Assignable<typeof page.setQueryTablesUpdatedAt, (...args: any[]) => void>>;
type _Handler_handleQueryTablesUpdatedAtChange = Assert<Assignable<typeof page.handleQueryTablesUpdatedAtChange, (...args: any[]) => void>>;
type _Action_setCreateTableNumber = Assert<Assignable<typeof page.setCreateTableNumber, (...args: any[]) => void>>;
type _Handler_handleCreateTableNumberChange = Assert<Assignable<typeof page.handleCreateTableNumberChange, (...args: any[]) => void>>;
type _Action_setCreateTableName = Assert<Assignable<typeof page.setCreateTableName, (...args: any[]) => void>>;
type _Handler_handleCreateTableNameChange = Assert<Assignable<typeof page.handleCreateTableNameChange, (...args: any[]) => void>>;
type _Action_setCreateTableStatus = Assert<Assignable<typeof page.setCreateTableStatus, (...args: any[]) => void>>;
type _Handler_handleCreateTableStatusChange = Assert<Assignable<typeof page.handleCreateTableStatusChange, (...args: any[]) => void>>;
type _Action_setUpdateTableNumber = Assert<Assignable<typeof page.setUpdateTableNumber, (...args: any[]) => void>>;
type _Handler_handleUpdateTableNumberChange = Assert<Assignable<typeof page.handleUpdateTableNumberChange, (...args: any[]) => void>>;
type _Action_setUpdateTableName = Assert<Assignable<typeof page.setUpdateTableName, (...args: any[]) => void>>;
type _Handler_handleUpdateTableNameChange = Assert<Assignable<typeof page.handleUpdateTableNameChange, (...args: any[]) => void>>;
type _Action_setUpdateTableStatus = Assert<Assignable<typeof page.setUpdateTableStatus, (...args: any[]) => void>>;
type _Handler_handleUpdateTableStatusChange = Assert<Assignable<typeof page.handleUpdateTableStatusChange, (...args: any[]) => void>>;
type _Action_setDeleteTableTableId = Assert<Assignable<typeof page.setDeleteTableTableId, (...args: any[]) => void>>;
type _Handler_handleDeleteTableTableIdChange = Assert<Assignable<typeof page.handleDeleteTableTableIdChange, (...args: any[]) => void>>;
type _Action_setDeleteTableNumber = Assert<Assignable<typeof page.setDeleteTableNumber, (...args: any[]) => void>>;
type _Handler_handleDeleteTableNumberChange = Assert<Assignable<typeof page.handleDeleteTableNumberChange, (...args: any[]) => void>>;
type _Action_setDeleteTableName = Assert<Assignable<typeof page.setDeleteTableName, (...args: any[]) => void>>;
type _Handler_handleDeleteTableNameChange = Assert<Assignable<typeof page.handleDeleteTableNameChange, (...args: any[]) => void>>;
type _Action_setDeleteTableStatus = Assert<Assignable<typeof page.setDeleteTableStatus, (...args: any[]) => void>>;
type _Handler_handleDeleteTableStatusChange = Assert<Assignable<typeof page.handleDeleteTableStatusChange, (...args: any[]) => void>>;

export {};