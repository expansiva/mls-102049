/// <mls fileReference="_102049_/l2/petShop/web/shared/operatorManagement.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopOperatorManagementBase } from './operatorManagement.js';
import type { PetShopBrowseOperatorsInput, PetShopBrowseOperatorsOutput, PetShopCreateOperatorInput, PetShopCreateOperatorOutput, PetShopUpdateOperatorInput, PetShopUpdateOperatorOutput } from '../contracts/operatorManagement.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopOperatorManagementBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseOperatorsState = Assert<Assignable<typeof page.browseOperatorsState, "idle" | "loading" | "success" | "error">>;
type _State_browseOperatorsActiveFilter = Assert<Assignable<typeof page.browseOperatorsActiveFilter, string | PetShopBrowseOperatorsInput["activeFilter"]>>;
type _State_browseOperatorsData = Assert<Assignable<typeof page.browseOperatorsData, PetShopBrowseOperatorsOutput>>;
type _State_createOperatorState = Assert<Assignable<typeof page.createOperatorState, "idle" | "loading" | "success" | "error">>;
type _State_createOperatorName = Assert<Assignable<typeof page.createOperatorName, string | PetShopCreateOperatorInput["name"]>>;
type _State_createOperatorEmail = Assert<Assignable<typeof page.createOperatorEmail, string | PetShopCreateOperatorInput["email"]>>;
type _State_createOperatorPhone = Assert<Assignable<typeof page.createOperatorPhone, string | PetShopCreateOperatorInput["phone"]>>;
type _State_createOperatorActive = Assert<Assignable<typeof page.createOperatorActive, string | PetShopCreateOperatorInput["active"]>>;
type _State_createOperatorOutput = Assert<Assignable<typeof page.createOperatorOutput, PetShopCreateOperatorOutput | null>>;
type _State_createOperatorError = Assert<Assignable<typeof page.createOperatorError, string>>;
type _State_updateOperatorState = Assert<Assignable<typeof page.updateOperatorState, "idle" | "loading" | "success" | "error">>;
type _State_updateOperatorOperatorId = Assert<Assignable<typeof page.updateOperatorOperatorId, string | PetShopUpdateOperatorInput["operatorId"]>>;
type _State_updateOperatorName = Assert<Assignable<typeof page.updateOperatorName, string | PetShopUpdateOperatorInput["name"]>>;
type _State_updateOperatorEmail = Assert<Assignable<typeof page.updateOperatorEmail, string | PetShopUpdateOperatorInput["email"]>>;
type _State_updateOperatorPhone = Assert<Assignable<typeof page.updateOperatorPhone, string | PetShopUpdateOperatorInput["phone"]>>;
type _State_updateOperatorActive = Assert<Assignable<typeof page.updateOperatorActive, string | PetShopUpdateOperatorInput["active"]>>;
type _State_updateOperatorOutput = Assert<Assignable<typeof page.updateOperatorOutput, PetShopUpdateOperatorOutput | null>>;
type _State_updateOperatorError = Assert<Assignable<typeof page.updateOperatorError, string>>;
type _Action_loadBrowseOperators = Assert<Assignable<typeof page.loadBrowseOperators, (...args: any[]) => unknown>>;
type _Handler_handleBrowseOperatorsClick = Assert<Assignable<typeof page.handleBrowseOperatorsClick, (...args: any[]) => unknown>>;
type _Action_createOperator = Assert<Assignable<typeof page.createOperator, (...args: any[]) => unknown>>;
type _Handler_handleCreateOperatorClick = Assert<Assignable<typeof page.handleCreateOperatorClick, (...args: any[]) => unknown>>;
type _Action_updateOperator = Assert<Assignable<typeof page.updateOperator, (...args: any[]) => unknown>>;
type _Handler_handleUpdateOperatorClick = Assert<Assignable<typeof page.handleUpdateOperatorClick, (...args: any[]) => unknown>>;
type _Action_setBrowseOperatorsActiveFilter = Assert<Assignable<typeof page.setBrowseOperatorsActiveFilter, (...args: any[]) => unknown>>;
type _Handler_handleBrowseOperatorsActiveFilterChange = Assert<Assignable<typeof page.handleBrowseOperatorsActiveFilterChange, (...args: any[]) => unknown>>;
type _Action_setCreateOperatorName = Assert<Assignable<typeof page.setCreateOperatorName, (...args: any[]) => unknown>>;
type _Handler_handleCreateOperatorNameChange = Assert<Assignable<typeof page.handleCreateOperatorNameChange, (...args: any[]) => unknown>>;
type _Action_setCreateOperatorEmail = Assert<Assignable<typeof page.setCreateOperatorEmail, (...args: any[]) => unknown>>;
type _Handler_handleCreateOperatorEmailChange = Assert<Assignable<typeof page.handleCreateOperatorEmailChange, (...args: any[]) => unknown>>;
type _Action_setCreateOperatorPhone = Assert<Assignable<typeof page.setCreateOperatorPhone, (...args: any[]) => unknown>>;
type _Handler_handleCreateOperatorPhoneChange = Assert<Assignable<typeof page.handleCreateOperatorPhoneChange, (...args: any[]) => unknown>>;
type _Action_setCreateOperatorActive = Assert<Assignable<typeof page.setCreateOperatorActive, (...args: any[]) => unknown>>;
type _Handler_handleCreateOperatorActiveChange = Assert<Assignable<typeof page.handleCreateOperatorActiveChange, (...args: any[]) => unknown>>;
type _Action_setUpdateOperatorOperatorId = Assert<Assignable<typeof page.setUpdateOperatorOperatorId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateOperatorOperatorIdChange = Assert<Assignable<typeof page.handleUpdateOperatorOperatorIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateOperatorName = Assert<Assignable<typeof page.setUpdateOperatorName, (...args: any[]) => unknown>>;
type _Handler_handleUpdateOperatorNameChange = Assert<Assignable<typeof page.handleUpdateOperatorNameChange, (...args: any[]) => unknown>>;
type _Action_setUpdateOperatorEmail = Assert<Assignable<typeof page.setUpdateOperatorEmail, (...args: any[]) => unknown>>;
type _Handler_handleUpdateOperatorEmailChange = Assert<Assignable<typeof page.handleUpdateOperatorEmailChange, (...args: any[]) => unknown>>;
type _Action_setUpdateOperatorPhone = Assert<Assignable<typeof page.setUpdateOperatorPhone, (...args: any[]) => unknown>>;
type _Handler_handleUpdateOperatorPhoneChange = Assert<Assignable<typeof page.handleUpdateOperatorPhoneChange, (...args: any[]) => unknown>>;
type _Action_setUpdateOperatorActive = Assert<Assignable<typeof page.setUpdateOperatorActive, (...args: any[]) => unknown>>;
type _Handler_handleUpdateOperatorActiveChange = Assert<Assignable<typeof page.handleUpdateOperatorActiveChange, (...args: any[]) => unknown>>;

export {};