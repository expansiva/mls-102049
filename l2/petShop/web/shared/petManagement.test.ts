/// <mls fileReference="_102049_/l2/petShop/web/shared/petManagement.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { PetShopPetManagementBase } from './petManagement.js';
import type { PetShopBrowseAdoptablePetsAdminInput, PetShopBrowseAdoptablePetsAdminOutput, PetShopCreateAdoptablePetInput, PetShopCreateAdoptablePetOutput, PetShopUpdateAdoptablePetInput, PetShopUpdateAdoptablePetOutput } from '../contracts/petManagement.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: PetShopPetManagementBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_browseAdoptablePetsAdminState = Assert<Assignable<typeof page.browseAdoptablePetsAdminState, "idle" | "loading" | "success" | "error">>;
type _State_browseAdoptablePetsAdminStatusFilter = Assert<Assignable<typeof page.browseAdoptablePetsAdminStatusFilter, string | PetShopBrowseAdoptablePetsAdminInput["statusFilter"]>>;
type _State_browseAdoptablePetsAdminData = Assert<Assignable<typeof page.browseAdoptablePetsAdminData, PetShopBrowseAdoptablePetsAdminOutput>>;
type _State_createAdoptablePetState = Assert<Assignable<typeof page.createAdoptablePetState, "idle" | "loading" | "success" | "error">>;
type _State_createAdoptablePetName = Assert<Assignable<typeof page.createAdoptablePetName, string | PetShopCreateAdoptablePetInput["name"]>>;
type _State_createAdoptablePetAge = Assert<Assignable<typeof page.createAdoptablePetAge, string | PetShopCreateAdoptablePetInput["age"]>>;
type _State_createAdoptablePetDescription = Assert<Assignable<typeof page.createAdoptablePetDescription, string | PetShopCreateAdoptablePetInput["description"]>>;
type _State_createAdoptablePetPhotoUrl = Assert<Assignable<typeof page.createAdoptablePetPhotoUrl, string | PetShopCreateAdoptablePetInput["photoUrl"]>>;
type _State_createAdoptablePetOutput = Assert<Assignable<typeof page.createAdoptablePetOutput, PetShopCreateAdoptablePetOutput | null>>;
type _State_createAdoptablePetError = Assert<Assignable<typeof page.createAdoptablePetError, string>>;
type _State_updateAdoptablePetState = Assert<Assignable<typeof page.updateAdoptablePetState, "idle" | "loading" | "success" | "error">>;
type _State_updateAdoptablePetAdoptablePetId = Assert<Assignable<typeof page.updateAdoptablePetAdoptablePetId, string | PetShopUpdateAdoptablePetInput["adoptablePetId"]>>;
type _State_updateAdoptablePetName = Assert<Assignable<typeof page.updateAdoptablePetName, string | PetShopUpdateAdoptablePetInput["name"]>>;
type _State_updateAdoptablePetAge = Assert<Assignable<typeof page.updateAdoptablePetAge, string | PetShopUpdateAdoptablePetInput["age"]>>;
type _State_updateAdoptablePetDescription = Assert<Assignable<typeof page.updateAdoptablePetDescription, string | PetShopUpdateAdoptablePetInput["description"]>>;
type _State_updateAdoptablePetPhotoUrl = Assert<Assignable<typeof page.updateAdoptablePetPhotoUrl, string | PetShopUpdateAdoptablePetInput["photoUrl"]>>;
type _State_updateAdoptablePetStatus = Assert<Assignable<typeof page.updateAdoptablePetStatus, string | PetShopUpdateAdoptablePetInput["status"]>>;
type _State_updateAdoptablePetOutput = Assert<Assignable<typeof page.updateAdoptablePetOutput, PetShopUpdateAdoptablePetOutput | null>>;
type _State_updateAdoptablePetError = Assert<Assignable<typeof page.updateAdoptablePetError, string>>;
type _Action_loadBrowseAdoptablePetsAdmin = Assert<Assignable<typeof page.loadBrowseAdoptablePetsAdmin, (...args: any[]) => unknown>>;
type _Handler_handleBrowseAdoptablePetsAdminClick = Assert<Assignable<typeof page.handleBrowseAdoptablePetsAdminClick, (...args: any[]) => unknown>>;
type _Action_createAdoptablePet = Assert<Assignable<typeof page.createAdoptablePet, (...args: any[]) => unknown>>;
type _Handler_handleCreateAdoptablePetClick = Assert<Assignable<typeof page.handleCreateAdoptablePetClick, (...args: any[]) => unknown>>;
type _Action_updateAdoptablePet = Assert<Assignable<typeof page.updateAdoptablePet, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetClick = Assert<Assignable<typeof page.handleUpdateAdoptablePetClick, (...args: any[]) => unknown>>;
type _Action_setBrowseAdoptablePetsAdminStatusFilter = Assert<Assignable<typeof page.setBrowseAdoptablePetsAdminStatusFilter, (...args: any[]) => unknown>>;
type _Handler_handleBrowseAdoptablePetsAdminStatusFilterChange = Assert<Assignable<typeof page.handleBrowseAdoptablePetsAdminStatusFilterChange, (...args: any[]) => unknown>>;
type _Action_setCreateAdoptablePetName = Assert<Assignable<typeof page.setCreateAdoptablePetName, (...args: any[]) => unknown>>;
type _Handler_handleCreateAdoptablePetNameChange = Assert<Assignable<typeof page.handleCreateAdoptablePetNameChange, (...args: any[]) => unknown>>;
type _Action_setCreateAdoptablePetAge = Assert<Assignable<typeof page.setCreateAdoptablePetAge, (...args: any[]) => unknown>>;
type _Handler_handleCreateAdoptablePetAgeChange = Assert<Assignable<typeof page.handleCreateAdoptablePetAgeChange, (...args: any[]) => unknown>>;
type _Action_setCreateAdoptablePetDescription = Assert<Assignable<typeof page.setCreateAdoptablePetDescription, (...args: any[]) => unknown>>;
type _Handler_handleCreateAdoptablePetDescriptionChange = Assert<Assignable<typeof page.handleCreateAdoptablePetDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCreateAdoptablePetPhotoUrl = Assert<Assignable<typeof page.setCreateAdoptablePetPhotoUrl, (...args: any[]) => unknown>>;
type _Handler_handleCreateAdoptablePetPhotoUrlChange = Assert<Assignable<typeof page.handleCreateAdoptablePetPhotoUrlChange, (...args: any[]) => unknown>>;
type _Action_setUpdateAdoptablePetAdoptablePetId = Assert<Assignable<typeof page.setUpdateAdoptablePetAdoptablePetId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetAdoptablePetIdChange = Assert<Assignable<typeof page.handleUpdateAdoptablePetAdoptablePetIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateAdoptablePetName = Assert<Assignable<typeof page.setUpdateAdoptablePetName, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetNameChange = Assert<Assignable<typeof page.handleUpdateAdoptablePetNameChange, (...args: any[]) => unknown>>;
type _Action_setUpdateAdoptablePetAge = Assert<Assignable<typeof page.setUpdateAdoptablePetAge, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetAgeChange = Assert<Assignable<typeof page.handleUpdateAdoptablePetAgeChange, (...args: any[]) => unknown>>;
type _Action_setUpdateAdoptablePetDescription = Assert<Assignable<typeof page.setUpdateAdoptablePetDescription, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetDescriptionChange = Assert<Assignable<typeof page.handleUpdateAdoptablePetDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setUpdateAdoptablePetPhotoUrl = Assert<Assignable<typeof page.setUpdateAdoptablePetPhotoUrl, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetPhotoUrlChange = Assert<Assignable<typeof page.handleUpdateAdoptablePetPhotoUrlChange, (...args: any[]) => unknown>>;
type _Action_setUpdateAdoptablePetStatus = Assert<Assignable<typeof page.setUpdateAdoptablePetStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateAdoptablePetStatusChange = Assert<Assignable<typeof page.handleUpdateAdoptablePetStatusChange, (...args: any[]) => unknown>>;

export {};