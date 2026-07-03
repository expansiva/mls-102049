/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-menu.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
CafeFlowQueryMenuItemsInput,
CafeFlowQueryMenuItemsOutput,
CafeFlowCreateMenuItemInput,
CafeFlowUpdateMenuItemInput,
CafeFlowDeleteMenuItemInput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.js';

/// **collab_i18n_start**
const message_pt = {
"wsManagerMenu.section.management.title": "Gestão de Cardápio",
"wsManagerMenu.organism.queryMenuItems.title": "Itens do cardápio",
"wsManagerMenu.organism.createMenuItem.title": "Novo item",
"wsManagerMenu.organism.updateMenuItem.title": "Editar item",
"wsManagerMenu.organism.deleteMenuItem.title": "Remover item",
"wsManagerMenu.organism.summary.title": "Resumo do cardápio",
"wsManagerMenu.intent.queryMenuItems.title": "Consultar itens",
"wsManagerMenu.intent.createMenuItem.title": "Criar item",
"wsManagerMenu.intent.updateMenuItem.title": "Atualizar item",
"wsManagerMenu.intent.deleteMenuItem.title": "Excluir item",
"wsManagerMenu.intent.summary.title": "Resumo",
"wsManagerMenu.field.menuItemId": "ID do item",
"wsManagerMenu.field.name": "Nome",
"wsManagerMenu.field.category": "Categoria",
"wsManagerMenu.field.price": "Preço",
"wsManagerMenu.field.description": "Descrição",
"wsManagerMenu.field.status": "Status",
"wsManagerMenu.field.createdAt": "Criado em",
"wsManagerMenu.field.updatedAt": "Atualizado em",
"wsManagerMenu.action.query": "Buscar",
"wsManagerMenu.action.saveItem": "Salvar item",
"wsManagerMenu.action.saveChanges": "Salvar alterações",
"wsManagerMenu.action.confirmDelete": "Confirmar exclusão"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

type MenuItemStatus = 'active' | 'inactive' | '';

export class CafeFlowWsManagerMenuBase extends CollabLitElement {
@property() status: string = '';
@property() queryMenuItemsState: ActionStatus = 'idle';
@property() queryMenuItemsMenuItemId: string = '';
@property() queryMenuItemsName: string = '';
@property() queryMenuItemsCategory: string = '';
@property() queryMenuItemsStatus: MenuItemStatus = '';
@property() queryMenuItemsCreatedAt: string = '';
@property() queryMenuItemsUpdatedAt: string = '';
@property() queryMenuItemsData: CafeFlowQueryMenuItemsOutput = [];
@property() createMenuItemState: ActionStatus = 'idle';
@property() createMenuItemName: string = '';
@property() createMenuItemCategory: string = '';
@property() createMenuItemPrice: number = Number('');
@property() createMenuItemDescription: string = '';
@property() createMenuItemStatus: MenuItemStatus = '';
@property() updateMenuItemState: ActionStatus = 'idle';
@property() updateMenuItemName: string = '';
@property() updateMenuItemCategory: string = '';
@property() updateMenuItemPrice: number = Number('');
@property() updateMenuItemDescription: string = '';
@property() updateMenuItemStatus: MenuItemStatus = '';
@property() deleteMenuItemState: ActionStatus = 'idle';
@property() deleteMenuItemMenuItemId: string = '';
@property() deleteMenuItemName: string = '';
@property() deleteMenuItemCategory: string = '';
@property() deleteMenuItemPrice: number = Number('');
@property() deleteMenuItemDescription: string = '';
@property() deleteMenuItemStatus: MenuItemStatus = '';

private readonly stateKeys: string[] = [
'ui.ws-manager-menu.status',
'ui.ws-manager-menu.action.queryMenuItems.status',
'ui.ws-manager-menu.input.queryMenuItems.menuItemId',
'ui.ws-manager-menu.input.queryMenuItems.name',
'ui.ws-manager-menu.input.queryMenuItems.category',
'ui.ws-manager-menu.input.queryMenuItems.status',
'ui.ws-manager-menu.input.queryMenuItems.createdAt',
'ui.ws-manager-menu.input.queryMenuItems.updatedAt',
'ui.ws-manager-menu.data.queryMenuItems',
'ui.ws-manager-menu.action.createMenuItem.status',
'ui.ws-manager-menu.input.createMenuItem.name',
'ui.ws-manager-menu.input.createMenuItem.category',
'ui.ws-manager-menu.input.createMenuItem.price',
'ui.ws-manager-menu.input.createMenuItem.description',
'ui.ws-manager-menu.input.createMenuItem.status',
'ui.ws-manager-menu.action.updateMenuItem.status',
'ui.ws-manager-menu.input.updateMenuItem.name',
'ui.ws-manager-menu.input.updateMenuItem.category',
'ui.ws-manager-menu.input.updateMenuItem.price',
'ui.ws-manager-menu.input.updateMenuItem.description',
'ui.ws-manager-menu.input.updateMenuItem.status',
'ui.ws-manager-menu.action.deleteMenuItem.status',
'ui.ws-manager-menu.input.deleteMenuItem.menuItemId',
'ui.ws-manager-menu.input.deleteMenuItem.name',
'ui.ws-manager-menu.input.deleteMenuItem.category',
'ui.ws-manager-menu.input.deleteMenuItem.price',
'ui.ws-manager-menu.input.deleteMenuItem.description',
'ui.ws-manager-menu.input.deleteMenuItem.status',
];

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.status = this.initStateValue<string>('ui.ws-manager-menu.status', '');
this.queryMenuItemsState = this.initStateValue<ActionStatus>('ui.ws-manager-menu.action.queryMenuItems.status', 'idle');
this.queryMenuItemsMenuItemId = this.initStateValue<string>('ui.ws-manager-menu.input.queryMenuItems.menuItemId', '');
this.queryMenuItemsName = this.initStateValue<string>('ui.ws-manager-menu.input.queryMenuItems.name', '');
this.queryMenuItemsCategory = this.initStateValue<string>('ui.ws-manager-menu.input.queryMenuItems.category', '');
this.queryMenuItemsStatus = this.initStateValue<MenuItemStatus>('ui.ws-manager-menu.input.queryMenuItems.status', '');
this.queryMenuItemsCreatedAt = this.initStateValue<string>('ui.ws-manager-menu.input.queryMenuItems.createdAt', '');
this.queryMenuItemsUpdatedAt = this.initStateValue<string>('ui.ws-manager-menu.input.queryMenuItems.updatedAt', '');
this.queryMenuItemsData = this.initStateValue<CafeFlowQueryMenuItemsOutput>('ui.ws-manager-menu.data.queryMenuItems', []);
this.createMenuItemState = this.initStateValue<ActionStatus>('ui.ws-manager-menu.action.createMenuItem.status', 'idle');
this.createMenuItemName = this.initStateValue<string>('ui.ws-manager-menu.input.createMenuItem.name', '');
this.createMenuItemCategory = this.initStateValue<string>('ui.ws-manager-menu.input.createMenuItem.category', '');
this.createMenuItemPrice = this.initStateValue<number>('ui.ws-manager-menu.input.createMenuItem.price', Number(''));
this.createMenuItemDescription = this.initStateValue<string>('ui.ws-manager-menu.input.createMenuItem.description', '');
this.createMenuItemStatus = this.initStateValue<MenuItemStatus>('ui.ws-manager-menu.input.createMenuItem.status', '');
this.updateMenuItemState = this.initStateValue<ActionStatus>('ui.ws-manager-menu.action.updateMenuItem.status', 'idle');
this.updateMenuItemName = this.initStateValue<string>('ui.ws-manager-menu.input.updateMenuItem.name', '');
this.updateMenuItemCategory = this.initStateValue<string>('ui.ws-manager-menu.input.updateMenuItem.category', '');
this.updateMenuItemPrice = this.initStateValue<number>('ui.ws-manager-menu.input.updateMenuItem.price', Number(''));
this.updateMenuItemDescription = this.initStateValue<string>('ui.ws-manager-menu.input.updateMenuItem.description', '');
this.updateMenuItemStatus = this.initStateValue<MenuItemStatus>('ui.ws-manager-menu.input.updateMenuItem.status', '');
this.deleteMenuItemState = this.initStateValue<ActionStatus>('ui.ws-manager-menu.action.deleteMenuItem.status', 'idle');
this.deleteMenuItemMenuItemId = this.initStateValue<string>('ui.ws-manager-menu.input.deleteMenuItem.menuItemId', '');
this.deleteMenuItemName = this.initStateValue<string>('ui.ws-manager-menu.input.deleteMenuItem.name', '');
this.deleteMenuItemCategory = this.initStateValue<string>('ui.ws-manager-menu.input.deleteMenuItem.category', '');
this.deleteMenuItemPrice = this.initStateValue<number>('ui.ws-manager-menu.input.deleteMenuItem.price', Number(''));
this.deleteMenuItemDescription = this.initStateValue<string>('ui.ws-manager-menu.input.deleteMenuItem.description', '');
this.deleteMenuItemStatus = this.initStateValue<MenuItemStatus>('ui.ws-manager-menu.input.deleteMenuItem.status', '');
subscribe(this.stateKeys, this);
void this.loadQueryMenuItems();
}

disconnectedCallback(): void {
unsubscribe(this.stateKeys, this);
super.disconnectedCallback();
}

handleIcaStateChange(key: string, value: unknown): void {
switch (key) {
case 'ui.ws-manager-menu.status':
this.status = value as string;
break;
case 'ui.ws-manager-menu.action.queryMenuItems.status':
this.queryMenuItemsState = value as ActionStatus;
break;
case 'ui.ws-manager-menu.input.queryMenuItems.menuItemId':
this.queryMenuItemsMenuItemId = value as string;
break;
case 'ui.ws-manager-menu.input.queryMenuItems.name':
this.queryMenuItemsName = value as string;
break;
case 'ui.ws-manager-menu.input.queryMenuItems.category':
this.queryMenuItemsCategory = value as string;
break;
case 'ui.ws-manager-menu.input.queryMenuItems.status':
this.queryMenuItemsStatus = value as MenuItemStatus;
break;
case 'ui.ws-manager-menu.input.queryMenuItems.createdAt':
this.queryMenuItemsCreatedAt = value as string;
break;
case 'ui.ws-manager-menu.input.queryMenuItems.updatedAt':
this.queryMenuItemsUpdatedAt = value as string;
break;
case 'ui.ws-manager-menu.data.queryMenuItems':
this.queryMenuItemsData = value as CafeFlowQueryMenuItemsOutput;
break;
case 'ui.ws-manager-menu.action.createMenuItem.status':
this.createMenuItemState = value as ActionStatus;
break;
case 'ui.ws-manager-menu.input.createMenuItem.name':
this.createMenuItemName = value as string;
break;
case 'ui.ws-manager-menu.input.createMenuItem.category':
this.createMenuItemCategory = value as string;
break;
case 'ui.ws-manager-menu.input.createMenuItem.price':
this.createMenuItemPrice = value as number;
break;
case 'ui.ws-manager-menu.input.createMenuItem.description':
this.createMenuItemDescription = value as string;
break;
case 'ui.ws-manager-menu.input.createMenuItem.status':
this.createMenuItemStatus = value as MenuItemStatus;
break;
case 'ui.ws-manager-menu.action.updateMenuItem.status':
this.updateMenuItemState = value as ActionStatus;
break;
case 'ui.ws-manager-menu.input.updateMenuItem.name':
this.updateMenuItemName = value as string;
break;
case 'ui.ws-manager-menu.input.updateMenuItem.category':
this.updateMenuItemCategory = value as string;
break;
case 'ui.ws-manager-menu.input.updateMenuItem.price':
this.updateMenuItemPrice = value as number;
break;
case 'ui.ws-manager-menu.input.updateMenuItem.description':
this.updateMenuItemDescription = value as string;
break;
case 'ui.ws-manager-menu.input.updateMenuItem.status':
this.updateMenuItemStatus = value as MenuItemStatus;
break;
case 'ui.ws-manager-menu.action.deleteMenuItem.status':
this.deleteMenuItemState = value as ActionStatus;
break;
case 'ui.ws-manager-menu.input.deleteMenuItem.menuItemId':
this.deleteMenuItemMenuItemId = value as string;
break;
case 'ui.ws-manager-menu.input.deleteMenuItem.name':
this.deleteMenuItemName = value as string;
break;
case 'ui.ws-manager-menu.input.deleteMenuItem.category':
this.deleteMenuItemCategory = value as string;
break;
case 'ui.ws-manager-menu.input.deleteMenuItem.price':
this.deleteMenuItemPrice = value as number;
break;
case 'ui.ws-manager-menu.input.deleteMenuItem.description':
this.deleteMenuItemDescription = value as string;
break;
case 'ui.ws-manager-menu.input.deleteMenuItem.status':
this.deleteMenuItemStatus = value as MenuItemStatus;
break;
default:
return;
}
this.requestUpdate();
}

private initStateValue<T>(key: string, fallback: T): T {
const stored = getState(key) as T | undefined;
if (stored === undefined) {
setState(key, fallback);
return fallback;
}
return stored;
}

setQueryMenuItemsMenuItemId(value: string): void {
this.queryMenuItemsMenuItemId = value;
setState('ui.ws-manager-menu.input.queryMenuItems.menuItemId', value);
this.requestUpdate();
}

handleQueryMenuItemsMenuItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setQueryMenuItemsMenuItemId(target.value);
}

setQueryMenuItemsName(value: string): void {
this.queryMenuItemsName = value;
setState('ui.ws-manager-menu.input.queryMenuItems.name', value);
this.requestUpdate();
}

handleQueryMenuItemsNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setQueryMenuItemsName(target.value);
}

setQueryMenuItemsCategory(value: string): void {
this.queryMenuItemsCategory = value;
setState('ui.ws-manager-menu.input.queryMenuItems.category', value);
this.requestUpdate();
}

handleQueryMenuItemsCategoryChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setQueryMenuItemsCategory(target.value);
}

setQueryMenuItemsStatus(value: MenuItemStatus): void {
this.queryMenuItemsStatus = value;
setState('ui.ws-manager-menu.input.queryMenuItems.status', value);
this.requestUpdate();
}

handleQueryMenuItemsStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setQueryMenuItemsStatus(target.value as MenuItemStatus);
}

setQueryMenuItemsCreatedAt(value: string): void {
this.queryMenuItemsCreatedAt = value;
setState('ui.ws-manager-menu.input.queryMenuItems.createdAt', value);
this.requestUpdate();
}

handleQueryMenuItemsCreatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setQueryMenuItemsCreatedAt(target.value);
}

setQueryMenuItemsUpdatedAt(value: string): void {
this.queryMenuItemsUpdatedAt = value;
setState('ui.ws-manager-menu.input.queryMenuItems.updatedAt', value);
this.requestUpdate();
}

handleQueryMenuItemsUpdatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setQueryMenuItemsUpdatedAt(target.value);
}

setCreateMenuItemName(value: string): void {
this.createMenuItemName = value;
setState('ui.ws-manager-menu.input.createMenuItem.name', value);
this.requestUpdate();
}

handleCreateMenuItemNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setCreateMenuItemName(target.value);
}

setCreateMenuItemCategory(value: string): void {
this.createMenuItemCategory = value;
setState('ui.ws-manager-menu.input.createMenuItem.category', value);
this.requestUpdate();
}

handleCreateMenuItemCategoryChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setCreateMenuItemCategory(target.value);
}

setCreateMenuItemPrice(value: number): void {
this.createMenuItemPrice = value;
setState('ui.ws-manager-menu.input.createMenuItem.price', value);
this.requestUpdate();
}

handleCreateMenuItemPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
const numericValue = Number(target.value);
this.setCreateMenuItemPrice(Number.isNaN(numericValue) ? 0 : numericValue);
}

setCreateMenuItemDescription(value: string): void {
this.createMenuItemDescription = value;
setState('ui.ws-manager-menu.input.createMenuItem.description', value);
this.requestUpdate();
}

handleCreateMenuItemDescriptionChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setCreateMenuItemDescription(target.value);
}

setCreateMenuItemStatus(value: MenuItemStatus): void {
this.createMenuItemStatus = value;
setState('ui.ws-manager-menu.input.createMenuItem.status', value);
this.requestUpdate();
}

handleCreateMenuItemStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setCreateMenuItemStatus(target.value as MenuItemStatus);
}

setUpdateMenuItemName(value: string): void {
this.updateMenuItemName = value;
setState('ui.ws-manager-menu.input.updateMenuItem.name', value);
this.requestUpdate();
}

handleUpdateMenuItemNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setUpdateMenuItemName(target.value);
}

setUpdateMenuItemCategory(value: string): void {
this.updateMenuItemCategory = value;
setState('ui.ws-manager-menu.input.updateMenuItem.category', value);
this.requestUpdate();
}

handleUpdateMenuItemCategoryChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setUpdateMenuItemCategory(target.value);
}

setUpdateMenuItemPrice(value: number): void {
this.updateMenuItemPrice = value;
setState('ui.ws-manager-menu.input.updateMenuItem.price', value);
this.requestUpdate();
}

handleUpdateMenuItemPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
const numericValue = Number(target.value);
this.setUpdateMenuItemPrice(Number.isNaN(numericValue) ? 0 : numericValue);
}

setUpdateMenuItemDescription(value: string): void {
this.updateMenuItemDescription = value;
setState('ui.ws-manager-menu.input.updateMenuItem.description', value);
this.requestUpdate();
}

handleUpdateMenuItemDescriptionChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setUpdateMenuItemDescription(target.value);
}

setUpdateMenuItemStatus(value: MenuItemStatus): void {
this.updateMenuItemStatus = value;
setState('ui.ws-manager-menu.input.updateMenuItem.status', value);
this.requestUpdate();
}

handleUpdateMenuItemStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setUpdateMenuItemStatus(target.value as MenuItemStatus);
}

setDeleteMenuItemMenuItemId(value: string): void {
this.deleteMenuItemMenuItemId = value;
setState('ui.ws-manager-menu.input.deleteMenuItem.menuItemId', value);
this.requestUpdate();
}

handleDeleteMenuItemMenuItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setDeleteMenuItemMenuItemId(target.value);
}

setDeleteMenuItemName(value: string): void {
this.deleteMenuItemName = value;
setState('ui.ws-manager-menu.input.deleteMenuItem.name', value);
this.requestUpdate();
}

handleDeleteMenuItemNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setDeleteMenuItemName(target.value);
}

setDeleteMenuItemCategory(value: string): void {
this.deleteMenuItemCategory = value;
setState('ui.ws-manager-menu.input.deleteMenuItem.category', value);
this.requestUpdate();
}

handleDeleteMenuItemCategoryChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setDeleteMenuItemCategory(target.value);
}

setDeleteMenuItemPrice(value: number): void {
this.deleteMenuItemPrice = value;
setState('ui.ws-manager-menu.input.deleteMenuItem.price', value);
this.requestUpdate();
}

handleDeleteMenuItemPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
const numericValue = Number(target.value);
this.setDeleteMenuItemPrice(Number.isNaN(numericValue) ? 0 : numericValue);
}

setDeleteMenuItemDescription(value: string): void {
this.deleteMenuItemDescription = value;
setState('ui.ws-manager-menu.input.deleteMenuItem.description', value);
this.requestUpdate();
}

handleDeleteMenuItemDescriptionChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setDeleteMenuItemDescription(target.value);
}

setDeleteMenuItemStatus(value: MenuItemStatus): void {
this.deleteMenuItemStatus = value;
setState('ui.ws-manager-menu.input.deleteMenuItem.status', value);
this.requestUpdate();
}

handleDeleteMenuItemStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setDeleteMenuItemStatus(target.value as MenuItemStatus);
}

async loadQueryMenuItems(options: BffClientOptions = {}): Promise<void> {
this.queryMenuItemsState = 'loading';
setState('ui.ws-manager-menu.action.queryMenuItems.status', 'loading');
const params: CafeFlowQueryMenuItemsInput = {
menuItemId: this.queryMenuItemsMenuItemId || undefined,
name: this.queryMenuItemsName || undefined,
category: this.queryMenuItemsCategory || undefined,
status: this.queryMenuItemsStatus || undefined,
createdAt: this.queryMenuItemsCreatedAt || undefined,
updatedAt: this.queryMenuItemsUpdatedAt || undefined,
};
const response = await execBff<CafeFlowQueryMenuItemsOutput>(
'cafeFlow.queryMenuItems.queryMenuItems',
params,
{ ...options, mode: 'silent' },
);
if (response.ok) {
const data = response.data ?? [];
this.queryMenuItemsData = data;
setState('ui.ws-manager-menu.data.queryMenuItems', data);
this.queryMenuItemsState = 'success';
setState('ui.ws-manager-menu.action.queryMenuItems.status', 'success');
return;
}
this.queryMenuItemsState = 'error';
setState('ui.ws-manager-menu.action.queryMenuItems.status', 'error');
const fallback: CafeFlowQueryMenuItemsOutput = [];
this.queryMenuItemsData = fallback;
setState('ui.ws-manager-menu.data.queryMenuItems', fallback);
}

handleQueryMenuItemsClick(event: Event): void {
void this.loadQueryMenuItems();
}

async createMenuItem(options: BffClientOptions = {}): Promise<void> {
this.createMenuItemState = 'loading';
setState('ui.ws-manager-menu.action.createMenuItem.status', 'loading');
const statusValue = this.createMenuItemStatus;
if (statusValue !== 'active' && statusValue !== 'inactive') {
this.createMenuItemState = 'error';
setState('ui.ws-manager-menu.action.createMenuItem.status', 'error');
throw new Error('Status inválido.');
}
const params: CafeFlowCreateMenuItemInput = {
name: this.createMenuItemName,
category: this.createMenuItemCategory,
price: this.createMenuItemPrice,
description: this.createMenuItemDescription || undefined,
status: statusValue,
};
const response = await execBff(
'cafeFlow.createMenuItem.createMenuItem',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.createMenuItemState = 'success';
setState('ui.ws-manager-menu.action.createMenuItem.status', 'success');
return;
}
this.createMenuItemState = 'error';
setState('ui.ws-manager-menu.action.createMenuItem.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao criar item do cardápio.');
}

handleCreateMenuItemClick(event: Event): void {
void runBlockingUiAction(async (signal: AbortSignal) => {
await this.createMenuItem({ signal });
}, { mode: 'blocking' });
}

async updateMenuItem(options: BffClientOptions = {}): Promise<void> {
this.updateMenuItemState = 'loading';
setState('ui.ws-manager-menu.action.updateMenuItem.status', 'loading');
const statusValue = this.updateMenuItemStatus;
if (statusValue !== 'active' && statusValue !== 'inactive') {
this.updateMenuItemState = 'error';
setState('ui.ws-manager-menu.action.updateMenuItem.status', 'error');
throw new Error('Status inválido.');
}
const params: CafeFlowUpdateMenuItemInput = {
name: this.updateMenuItemName,
category: this.updateMenuItemCategory,
price: this.updateMenuItemPrice,
description: this.updateMenuItemDescription || undefined,
status: statusValue,
};
const response = await execBff(
'cafeFlow.updateMenuItem.updateMenuItem',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.updateMenuItemState = 'success';
setState('ui.ws-manager-menu.action.updateMenuItem.status', 'success');
return;
}
this.updateMenuItemState = 'error';
setState('ui.ws-manager-menu.action.updateMenuItem.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao atualizar item do cardápio.');
}

handleUpdateMenuItemClick(event: Event): void {
void runBlockingUiAction(async (signal: AbortSignal) => {
await this.updateMenuItem({ signal });
}, { mode: 'blocking' });
}

async deleteMenuItem(options: BffClientOptions = {}): Promise<void> {
this.deleteMenuItemState = 'loading';
setState('ui.ws-manager-menu.action.deleteMenuItem.status', 'loading');
const statusValue = this.deleteMenuItemStatus;
if (statusValue !== 'active' && statusValue !== 'inactive') {
this.deleteMenuItemState = 'error';
setState('ui.ws-manager-menu.action.deleteMenuItem.status', 'error');
throw new Error('Status inválido.');
}
const params: CafeFlowDeleteMenuItemInput = {
menuItemId: this.deleteMenuItemMenuItemId || undefined,
name: this.deleteMenuItemName,
category: this.deleteMenuItemCategory,
price: this.deleteMenuItemPrice,
description: this.deleteMenuItemDescription || undefined,
status: statusValue,
};
const response = await execBff(
'cafeFlow.deleteMenuItem.deleteMenuItem',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.deleteMenuItemState = 'success';
setState('ui.ws-manager-menu.action.deleteMenuItem.status', 'success');
return;
}
this.deleteMenuItemState = 'error';
setState('ui.ws-manager-menu.action.deleteMenuItem.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao remover item do cardápio.');
}

handleDeleteMenuItemClick(event: Event): void {
void runBlockingUiAction(async (signal: AbortSignal) => {
await this.deleteMenuItem({ signal });
}, { mode: 'blocking' });
}
}
