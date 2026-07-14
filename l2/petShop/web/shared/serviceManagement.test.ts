/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceManagement.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopServiceManagementBase } from './serviceManagement.js';
import type { PetShopBrowseServicesInput, PetShopBrowseServicesOutput, PetShopCreateServiceInput, PetShopCreateServiceOutput, PetShopUpdateServiceInput, PetShopUpdateServiceOutput } from '../contracts/serviceManagement.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopServiceManagementBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseServicesState = Assert<Assignable<typeof page.browseServicesState, "idle" | "loading" | "success" | "error">>;
type _State_browseServicesStatusFilter = Assert<Assignable<typeof page.browseServicesStatusFilter, string | PetShopBrowseServicesInput["statusFilter"]>>;
type _State_browseServicesData = Assert<Assignable<typeof page.browseServicesData, PetShopBrowseServicesOutput>>;
type _State_createServiceState = Assert<Assignable<typeof page.createServiceState, "idle" | "loading" | "success" | "error">>;
type _State_createServiceName = Assert<Assignable<typeof page.createServiceName, string | PetShopCreateServiceInput["name"]>>;
type _State_createServiceDescription = Assert<Assignable<typeof page.createServiceDescription, string | PetShopCreateServiceInput["description"]>>;
type _State_createServiceEstimatedDurationMinutes = Assert<Assignable<typeof page.createServiceEstimatedDurationMinutes, string | PetShopCreateServiceInput["estimatedDurationMinutes"]>>;
type _State_createServicePrice = Assert<Assignable<typeof page.createServicePrice, string | PetShopCreateServiceInput["price"]>>;
type _State_createServiceOutput = Assert<Assignable<typeof page.createServiceOutput, PetShopCreateServiceOutput | null>>;
type _State_createServiceError = Assert<Assignable<typeof page.createServiceError, string>>;
type _State_updateServiceState = Assert<Assignable<typeof page.updateServiceState, "idle" | "loading" | "success" | "error">>;
type _State_updateServiceServiceId = Assert<Assignable<typeof page.updateServiceServiceId, string | PetShopUpdateServiceInput["serviceId"]>>;
type _State_updateServiceName = Assert<Assignable<typeof page.updateServiceName, string | PetShopUpdateServiceInput["name"]>>;
type _State_updateServiceDescription = Assert<Assignable<typeof page.updateServiceDescription, string | PetShopUpdateServiceInput["description"]>>;
type _State_updateServiceEstimatedDurationMinutes = Assert<Assignable<typeof page.updateServiceEstimatedDurationMinutes, string | PetShopUpdateServiceInput["estimatedDurationMinutes"]>>;
type _State_updateServicePrice = Assert<Assignable<typeof page.updateServicePrice, string | PetShopUpdateServiceInput["price"]>>;
type _State_updateServiceStatus = Assert<Assignable<typeof page.updateServiceStatus, string | PetShopUpdateServiceInput["status"]>>;
type _State_updateServiceOutput = Assert<Assignable<typeof page.updateServiceOutput, PetShopUpdateServiceOutput | null>>;
type _State_updateServiceError = Assert<Assignable<typeof page.updateServiceError, string>>;
type _Action_loadBrowseServices = Assert<Assignable<typeof page.loadBrowseServices, (...args: any[]) => unknown>>;
type _Handler_handleBrowseServicesClick = Assert<Assignable<typeof page.handleBrowseServicesClick, (...args: any[]) => unknown>>;
type _Action_createService = Assert<Assignable<typeof page.createService, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceClick = Assert<Assignable<typeof page.handleCreateServiceClick, (...args: any[]) => unknown>>;
type _Action_updateService = Assert<Assignable<typeof page.updateService, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServiceClick = Assert<Assignable<typeof page.handleUpdateServiceClick, (...args: any[]) => unknown>>;
type _Action_setBrowseServicesStatusFilter = Assert<Assignable<typeof page.setBrowseServicesStatusFilter, (...args: any[]) => unknown>>;
type _Handler_handleBrowseServicesStatusFilterChange = Assert<Assignable<typeof page.handleBrowseServicesStatusFilterChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceName = Assert<Assignable<typeof page.setCreateServiceName, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceNameChange = Assert<Assignable<typeof page.handleCreateServiceNameChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceDescription = Assert<Assignable<typeof page.setCreateServiceDescription, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceDescriptionChange = Assert<Assignable<typeof page.handleCreateServiceDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCreateServiceEstimatedDurationMinutes = Assert<Assignable<typeof page.setCreateServiceEstimatedDurationMinutes, (...args: any[]) => unknown>>;
type _Handler_handleCreateServiceEstimatedDurationMinutesChange = Assert<Assignable<typeof page.handleCreateServiceEstimatedDurationMinutesChange, (...args: any[]) => unknown>>;
type _Action_setCreateServicePrice = Assert<Assignable<typeof page.setCreateServicePrice, (...args: any[]) => unknown>>;
type _Handler_handleCreateServicePriceChange = Assert<Assignable<typeof page.handleCreateServicePriceChange, (...args: any[]) => unknown>>;
type _Action_setUpdateServiceServiceId = Assert<Assignable<typeof page.setUpdateServiceServiceId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServiceServiceIdChange = Assert<Assignable<typeof page.handleUpdateServiceServiceIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateServiceName = Assert<Assignable<typeof page.setUpdateServiceName, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServiceNameChange = Assert<Assignable<typeof page.handleUpdateServiceNameChange, (...args: any[]) => unknown>>;
type _Action_setUpdateServiceDescription = Assert<Assignable<typeof page.setUpdateServiceDescription, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServiceDescriptionChange = Assert<Assignable<typeof page.handleUpdateServiceDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setUpdateServiceEstimatedDurationMinutes = Assert<Assignable<typeof page.setUpdateServiceEstimatedDurationMinutes, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServiceEstimatedDurationMinutesChange = Assert<Assignable<typeof page.handleUpdateServiceEstimatedDurationMinutesChange, (...args: any[]) => unknown>>;
type _Action_setUpdateServicePrice = Assert<Assignable<typeof page.setUpdateServicePrice, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServicePriceChange = Assert<Assignable<typeof page.handleUpdateServicePriceChange, (...args: any[]) => unknown>>;
type _Action_setUpdateServiceStatus = Assert<Assignable<typeof page.setUpdateServiceStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateServiceStatusChange = Assert<Assignable<typeof page.handleUpdateServiceStatusChange, (...args: any[]) => unknown>>;

export {};