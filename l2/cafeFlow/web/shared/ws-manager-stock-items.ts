/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
CafeFlowQueryStockItemsInput,
CafeFlowQueryStockItemsOutput,
CafeFlowCreateStockItemInput,
CafeFlowUpdateStockItemInput,
CafeFlowDeleteStockItemInput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.js';

/// **collab_i18n_start**
const message_pt = {
"wsManagerStockItems.section.main.title": "Gestão de Insumos de Estoque",
"wsManagerStockItems.organism.query.title": "Consultar itens de estoque",
"wsManagerStockItems.intent.queryList.title": "Query List",
"wsManagerStockItems.queryList.empty": "Nenhum registro encontrado",
"wsManagerStockItems.field.stockItemId": "Stock Item Id",
"wsManagerStockItems.field.name": "Name",
"wsManagerStockItems.field.unitOfMeasure": "Unit Of Measure",
"wsManagerStockItems.field.minimumQuantity": "Minimum Quantity",
"wsManagerStockItems.field.status": "Status",
"wsManagerStockItems.field.createdAt": "Created At",
"wsManagerStockItems.field.updatedAt": "Updated At",
"wsManagerStockItems.action.query": "Query Stock Items",
"wsManagerStockItems.action.update": "Update Stock Item",
"wsManagerStockItems.action.delete": "Delete Stock Item",
"wsManagerStockItems.organism.create.title": "Cadastrar item de estoque",
"wsManagerStockItems.intent.create.title": "Command Form",
"wsManagerStockItems.action.saveCreate": "Create Stock Item",
"wsManagerStockItems.organism.update.title": "Editar item de estoque",
"wsManagerStockItems.intent.update.title": "Command Form",
"wsManagerStockItems.action.saveUpdate": "Update Stock Item",
"wsManagerStockItems.organism.delete.title": "Remover item de estoque",
"wsManagerStockItems.intent.delete.title": "Command Form",
"wsManagerStockItems.action.confirmDelete": "Delete Stock Item",
"wsManagerStockItems.intent.summary.title": "Summary"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowWsManagerStockItemsBase extends CollabLitElement {
@property({ type: String }) status: string = '';
@property({ type: String }) queryStockItemsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property({ type: String }) queryStockItemsStockItemId: string = '';
@property({ type: String }) queryStockItemsName: string = '';
@property({ type: String }) queryStockItemsStatus: 'active' | 'inactive' | '' = '';
@property({ type: String }) queryStockItemsCreatedAt: string = '';
@property({ type: String }) queryStockItemsUpdatedAt: string = '';
@property({ type: Array }) queryStockItemsData: CafeFlowQueryStockItemsOutput = [];
@property({ type: String }) createStockItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property({ type: String }) createStockItemName: string = '';
@property({ type: String }) createStockItemUnitOfMeasure: string = '';
@property({ type: Number }) createStockItemMinimumQuantity: number | '' = '' as unknown as number;
@property({ type: String }) createStockItemStatus: 'active' | 'inactive' | '' = '';
@property({ type: String }) updateStockItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property({ type: String }) updateStockItemName: string = '';
@property({ type: String }) updateStockItemUnitOfMeasure: string = '';
@property({ type: Number }) updateStockItemMinimumQuantity: number | '' = '' as unknown as number;
@property({ type: String }) updateStockItemStatus: 'active' | 'inactive' | '' = '';
@property({ type: String }) deleteStockItemState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property({ type: String }) deleteStockItemStockItemId: string = '';
@property({ type: String }) deleteStockItemName: string = '';
@property({ type: String }) deleteStockItemUnitOfMeasure: string = '';
@property({ type: Number }) deleteStockItemMinimumQuantity: number | '' = '' as unknown as number;
@property({ type: String }) deleteStockItemStatus: 'active' | 'inactive' | '' = '';

private readonly _stateKeys: string[] = [
'ui.ws-manager-stock-items.status',
'ui.ws-manager-stock-items.action.queryStockItems.status',
'ui.ws-manager-stock-items.input.queryStockItems.stockItemId',
'ui.ws-manager-stock-items.input.queryStockItems.name',
'ui.ws-manager-stock-items.input.queryStockItems.status',
'ui.ws-manager-stock-items.input.queryStockItems.createdAt',
'ui.ws-manager-stock-items.input.queryStockItems.updatedAt',
'ui.ws-manager-stock-items.data.queryStockItems',
'ui.ws-manager-stock-items.action.createStockItem.status',
'ui.ws-manager-stock-items.input.createStockItem.name',
'ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure',
'ui.ws-manager-stock-items.input.createStockItem.minimumQuantity',
'ui.ws-manager-stock-items.input.createStockItem.status',
'ui.ws-manager-stock-items.action.updateStockItem.status',
'ui.ws-manager-stock-items.input.updateStockItem.name',
'ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure',
'ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity',
'ui.ws-manager-stock-items.input.updateStockItem.status',
'ui.ws-manager-stock-items.action.deleteStockItem.status',
'ui.ws-manager-stock-items.input.deleteStockItem.stockItemId',
'ui.ws-manager-stock-items.input.deleteStockItem.name',
'ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure',
'ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity',
'ui.ws-manager-stock-items.input.deleteStockItem.status',
];

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.initializeStateFromStore();
subscribe(this._stateKeys, this);
void this.loadQueryStockItems();
}

disconnectedCallback(): void {
unsubscribe(this._stateKeys, this);
super.disconnectedCallback();
}

handleIcaStateChange(key: string, value: unknown): void {
switch (key) {
case 'ui.ws-manager-stock-items.status':
this.status = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.action.queryStockItems.status':
if (value === 'idle' || value === 'loading' || value === 'success' || value === 'error') {
this.queryStockItemsState = value;
}
break;
case 'ui.ws-manager-stock-items.input.queryStockItems.stockItemId':
this.queryStockItemsStockItemId = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.queryStockItems.name':
this.queryStockItemsName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.queryStockItems.status':
this.queryStockItemsStatus = (value === 'active' || value === 'inactive') ? value : '';
break;
case 'ui.ws-manager-stock-items.input.queryStockItems.createdAt':
this.queryStockItemsCreatedAt = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.queryStockItems.updatedAt':
this.queryStockItemsUpdatedAt = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.data.queryStockItems':
this.queryStockItemsData = Array.isArray(value) ? (value as CafeFlowQueryStockItemsOutput) : [];
break;
case 'ui.ws-manager-stock-items.action.createStockItem.status':
if (value === 'idle' || value === 'loading' || value === 'success' || value === 'error') {
this.createStockItemState = value;
}
break;
case 'ui.ws-manager-stock-items.input.createStockItem.name':
this.createStockItemName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure':
this.createStockItemUnitOfMeasure = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.createStockItem.minimumQuantity':
this.createStockItemMinimumQuantity = typeof value === 'number' ? value : ('' as unknown as number);
break;
case 'ui.ws-manager-stock-items.input.createStockItem.status':
this.createStockItemStatus = (value === 'active' || value === 'inactive') ? value : '';
break;
case 'ui.ws-manager-stock-items.action.updateStockItem.status':
if (value === 'idle' || value === 'loading' || value === 'success' || value === 'error') {
this.updateStockItemState = value;
}
break;
case 'ui.ws-manager-stock-items.input.updateStockItem.name':
this.updateStockItemName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure':
this.updateStockItemUnitOfMeasure = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity':
this.updateStockItemMinimumQuantity = typeof value === 'number' ? value : ('' as unknown as number);
break;
case 'ui.ws-manager-stock-items.input.updateStockItem.status':
this.updateStockItemStatus = (value === 'active' || value === 'inactive') ? value : '';
break;
case 'ui.ws-manager-stock-items.action.deleteStockItem.status':
if (value === 'idle' || value === 'loading' || value === 'success' || value === 'error') {
this.deleteStockItemState = value;
}
break;
case 'ui.ws-manager-stock-items.input.deleteStockItem.stockItemId':
this.deleteStockItemStockItemId = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.deleteStockItem.name':
this.deleteStockItemName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure':
this.deleteStockItemUnitOfMeasure = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity':
this.deleteStockItemMinimumQuantity = typeof value === 'number' ? value : ('' as unknown as number);
break;
case 'ui.ws-manager-stock-items.input.deleteStockItem.status':
this.deleteStockItemStatus = (value === 'active' || value === 'inactive') ? value : '';
break;
default:
break;
}
this.requestUpdate();
}

private initializeStateFromStore(): void {
const statusValue = getState('ui.ws-manager-stock-items.status');
if (statusValue !== undefined) {
this.status = statusValue as string;
} else {
setState('ui.ws-manager-stock-items.status', this.status);
}
const queryStateValue = getState('ui.ws-manager-stock-items.action.queryStockItems.status');
if (queryStateValue !== undefined) {
this.queryStockItemsState = queryStateValue as 'idle' | 'loading' | 'success' | 'error';
} else {
setState('ui.ws-manager-stock-items.action.queryStockItems.status', this.queryStockItemsState);
}
const queryStockItemIdValue = getState('ui.ws-manager-stock-items.input.queryStockItems.stockItemId');
if (queryStockItemIdValue !== undefined) {
this.queryStockItemsStockItemId = queryStockItemIdValue as string;
} else {
setState('ui.ws-manager-stock-items.input.queryStockItems.stockItemId', this.queryStockItemsStockItemId);
}
const queryNameValue = getState('ui.ws-manager-stock-items.input.queryStockItems.name');
if (queryNameValue !== undefined) {
this.queryStockItemsName = queryNameValue as string;
} else {
setState('ui.ws-manager-stock-items.input.queryStockItems.name', this.queryStockItemsName);
}
const queryStatusValue = getState('ui.ws-manager-stock-items.input.queryStockItems.status');
if (queryStatusValue !== undefined) {
this.queryStockItemsStatus = (queryStatusValue === 'active' || queryStatusValue === 'inactive') ? queryStatusValue : '';
} else {
setState('ui.ws-manager-stock-items.input.queryStockItems.status', this.queryStockItemsStatus);
}
const queryCreatedAtValue = getState('ui.ws-manager-stock-items.input.queryStockItems.createdAt');
if (queryCreatedAtValue !== undefined) {
this.queryStockItemsCreatedAt = queryCreatedAtValue as string;
} else {
setState('ui.ws-manager-stock-items.input.queryStockItems.createdAt', this.queryStockItemsCreatedAt);
}
const queryUpdatedAtValue = getState('ui.ws-manager-stock-items.input.queryStockItems.updatedAt');
if (queryUpdatedAtValue !== undefined) {
this.queryStockItemsUpdatedAt = queryUpdatedAtValue as string;
} else {
setState('ui.ws-manager-stock-items.input.queryStockItems.updatedAt', this.queryStockItemsUpdatedAt);
}
const queryDataValue = getState('ui.ws-manager-stock-items.data.queryStockItems');
if (queryDataValue !== undefined) {
this.queryStockItemsData = Array.isArray(queryDataValue) ? (queryDataValue as CafeFlowQueryStockItemsOutput) : [];
} else {
setState('ui.ws-manager-stock-items.data.queryStockItems', this.queryStockItemsData);
}
const createStateValue = getState('ui.ws-manager-stock-items.action.createStockItem.status');
if (createStateValue !== undefined) {
this.createStockItemState = createStateValue as 'idle' | 'loading' | 'success' | 'error';
} else {
setState('ui.ws-manager-stock-items.action.createStockItem.status', this.createStockItemState);
}
const createNameValue = getState('ui.ws-manager-stock-items.input.createStockItem.name');
if (createNameValue !== undefined) {
this.createStockItemName = createNameValue as string;
} else {
setState('ui.ws-manager-stock-items.input.createStockItem.name', this.createStockItemName);
}
const createUnitValue = getState('ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure');
if (createUnitValue !== undefined) {
this.createStockItemUnitOfMeasure = createUnitValue as string;
} else {
setState('ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure', this.createStockItemUnitOfMeasure);
}
const createMinValue = getState('ui.ws-manager-stock-items.input.createStockItem.minimumQuantity');
if (createMinValue !== undefined) {
this.createStockItemMinimumQuantity = typeof createMinValue === 'number' ? createMinValue : ('' as unknown as number);
} else {
setState('ui.ws-manager-stock-items.input.createStockItem.minimumQuantity', this.createStockItemMinimumQuantity);
}
const createStatusValue = getState('ui.ws-manager-stock-items.input.createStockItem.status');
if (createStatusValue !== undefined) {
this.createStockItemStatus = (createStatusValue === 'active' || createStatusValue === 'inactive') ? createStatusValue : '';
} else {
setState('ui.ws-manager-stock-items.input.createStockItem.status', this.createStockItemStatus);
}
const updateStateValue = getState('ui.ws-manager-stock-items.action.updateStockItem.status');
if (updateStateValue !== undefined) {
this.updateStockItemState = updateStateValue as 'idle' | 'loading' | 'success' | 'error';
} else {
setState('ui.ws-manager-stock-items.action.updateStockItem.status', this.updateStockItemState);
}
const updateNameValue = getState('ui.ws-manager-stock-items.input.updateStockItem.name');
if (updateNameValue !== undefined) {
this.updateStockItemName = updateNameValue as string;
} else {
setState('ui.ws-manager-stock-items.input.updateStockItem.name', this.updateStockItemName);
}
const updateUnitValue = getState('ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure');
if (updateUnitValue !== undefined) {
this.updateStockItemUnitOfMeasure = updateUnitValue as string;
} else {
setState('ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure', this.updateStockItemUnitOfMeasure);
}
const updateMinValue = getState('ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity');
if (updateMinValue !== undefined) {
this.updateStockItemMinimumQuantity = typeof updateMinValue === 'number' ? updateMinValue : ('' as unknown as number);
} else {
setState('ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity', this.updateStockItemMinimumQuantity);
}
const updateStatusValue = getState('ui.ws-manager-stock-items.input.updateStockItem.status');
if (updateStatusValue !== undefined) {
this.updateStockItemStatus = (updateStatusValue === 'active' || updateStatusValue === 'inactive') ? updateStatusValue : '';
} else {
setState('ui.ws-manager-stock-items.input.updateStockItem.status', this.updateStockItemStatus);
}
const deleteStateValue = getState('ui.ws-manager-stock-items.action.deleteStockItem.status');
if (deleteStateValue !== undefined) {
this.deleteStockItemState = deleteStateValue as 'idle' | 'loading' | 'success' | 'error';
} else {
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', this.deleteStockItemState);
}
const deleteStockItemIdValue = getState('ui.ws-manager-stock-items.input.deleteStockItem.stockItemId');
if (deleteStockItemIdValue !== undefined) {
this.deleteStockItemStockItemId = deleteStockItemIdValue as string;
} else {
setState('ui.ws-manager-stock-items.input.deleteStockItem.stockItemId', this.deleteStockItemStockItemId);
}
const deleteNameValue = getState('ui.ws-manager-stock-items.input.deleteStockItem.name');
if (deleteNameValue !== undefined) {
this.deleteStockItemName = deleteNameValue as string;
} else {
setState('ui.ws-manager-stock-items.input.deleteStockItem.name', this.deleteStockItemName);
}
const deleteUnitValue = getState('ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure');
if (deleteUnitValue !== undefined) {
this.deleteStockItemUnitOfMeasure = deleteUnitValue as string;
} else {
setState('ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure', this.deleteStockItemUnitOfMeasure);
}
const deleteMinValue = getState('ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity');
if (deleteMinValue !== undefined) {
this.deleteStockItemMinimumQuantity = typeof deleteMinValue === 'number' ? deleteMinValue : ('' as unknown as number);
} else {
setState('ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity', this.deleteStockItemMinimumQuantity);
}
const deleteStatusValue = getState('ui.ws-manager-stock-items.input.deleteStockItem.status');
if (deleteStatusValue !== undefined) {
this.deleteStockItemStatus = (deleteStatusValue === 'active' || deleteStatusValue === 'inactive') ? deleteStatusValue : '';
} else {
setState('ui.ws-manager-stock-items.input.deleteStockItem.status', this.deleteStockItemStatus);
}
}

setQueryStockItemsStockItemId(value: string): void {
this.queryStockItemsStockItemId = value;
setState('ui.ws-manager-stock-items.input.queryStockItems.stockItemId', value);
this.requestUpdate();
}

handleQueryStockItemsStockItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setQueryStockItemsStockItemId(value);
}

setQueryStockItemsName(value: string): void {
this.queryStockItemsName = value;
setState('ui.ws-manager-stock-items.input.queryStockItems.name', value);
this.requestUpdate();
}

handleQueryStockItemsNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setQueryStockItemsName(value);
}

setQueryStockItemsStatus(value: 'active' | 'inactive' | ''): void {
this.queryStockItemsStatus = value;
setState('ui.ws-manager-stock-items.input.queryStockItems.status', value);
this.requestUpdate();
}

handleQueryStockItemsStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = (rawValue === 'active' || rawValue === 'inactive') ? rawValue : '';
this.setQueryStockItemsStatus(value);
}

setQueryStockItemsCreatedAt(value: string): void {
this.queryStockItemsCreatedAt = value;
setState('ui.ws-manager-stock-items.input.queryStockItems.createdAt', value);
this.requestUpdate();
}

handleQueryStockItemsCreatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setQueryStockItemsCreatedAt(value);
}

setQueryStockItemsUpdatedAt(value: string): void {
this.queryStockItemsUpdatedAt = value;
setState('ui.ws-manager-stock-items.input.queryStockItems.updatedAt', value);
this.requestUpdate();
}

handleQueryStockItemsUpdatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setQueryStockItemsUpdatedAt(value);
}

setCreateStockItemName(value: string): void {
this.createStockItemName = value;
setState('ui.ws-manager-stock-items.input.createStockItem.name', value);
this.requestUpdate();
}

handleCreateStockItemNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setCreateStockItemName(value);
}

setCreateStockItemUnitOfMeasure(value: string): void {
this.createStockItemUnitOfMeasure = value;
setState('ui.ws-manager-stock-items.input.createStockItem.unitOfMeasure', value);
this.requestUpdate();
}

handleCreateStockItemUnitOfMeasureChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setCreateStockItemUnitOfMeasure(value);
}

setCreateStockItemMinimumQuantity(value: number | ''): void {
this.createStockItemMinimumQuantity = value;
setState('ui.ws-manager-stock-items.input.createStockItem.minimumQuantity', value);
this.requestUpdate();
}

handleCreateStockItemMinimumQuantityChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = rawValue === '' ? '' : Number(rawValue);
if (value !== '' && Number.isNaN(value)) {
return;
}
this.setCreateStockItemMinimumQuantity(value);
}

setCreateStockItemStatus(value: 'active' | 'inactive' | ''): void {
this.createStockItemStatus = value;
setState('ui.ws-manager-stock-items.input.createStockItem.status', value);
this.requestUpdate();
}

handleCreateStockItemStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = (rawValue === 'active' || rawValue === 'inactive') ? rawValue : '';
this.setCreateStockItemStatus(value);
}

setUpdateStockItemName(value: string): void {
this.updateStockItemName = value;
setState('ui.ws-manager-stock-items.input.updateStockItem.name', value);
this.requestUpdate();
}

handleUpdateStockItemNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setUpdateStockItemName(value);
}

setUpdateStockItemUnitOfMeasure(value: string): void {
this.updateStockItemUnitOfMeasure = value;
setState('ui.ws-manager-stock-items.input.updateStockItem.unitOfMeasure', value);
this.requestUpdate();
}

handleUpdateStockItemUnitOfMeasureChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setUpdateStockItemUnitOfMeasure(value);
}

setUpdateStockItemMinimumQuantity(value: number | ''): void {
this.updateStockItemMinimumQuantity = value;
setState('ui.ws-manager-stock-items.input.updateStockItem.minimumQuantity', value);
this.requestUpdate();
}

handleUpdateStockItemMinimumQuantityChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = rawValue === '' ? '' : Number(rawValue);
if (value !== '' && Number.isNaN(value)) {
return;
}
this.setUpdateStockItemMinimumQuantity(value);
}

setUpdateStockItemStatus(value: 'active' | 'inactive' | ''): void {
this.updateStockItemStatus = value;
setState('ui.ws-manager-stock-items.input.updateStockItem.status', value);
this.requestUpdate();
}

handleUpdateStockItemStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = (rawValue === 'active' || rawValue === 'inactive') ? rawValue : '';
this.setUpdateStockItemStatus(value);
}

setDeleteStockItemStockItemId(value: string): void {
this.deleteStockItemStockItemId = value;
setState('ui.ws-manager-stock-items.input.deleteStockItem.stockItemId', value);
this.requestUpdate();
}

handleDeleteStockItemStockItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setDeleteStockItemStockItemId(value);
}

setDeleteStockItemName(value: string): void {
this.deleteStockItemName = value;
setState('ui.ws-manager-stock-items.input.deleteStockItem.name', value);
this.requestUpdate();
}

handleDeleteStockItemNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setDeleteStockItemName(value);
}

setDeleteStockItemUnitOfMeasure(value: string): void {
this.deleteStockItemUnitOfMeasure = value;
setState('ui.ws-manager-stock-items.input.deleteStockItem.unitOfMeasure', value);
this.requestUpdate();
}

handleDeleteStockItemUnitOfMeasureChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setDeleteStockItemUnitOfMeasure(value);
}

setDeleteStockItemMinimumQuantity(value: number | ''): void {
this.deleteStockItemMinimumQuantity = value;
setState('ui.ws-manager-stock-items.input.deleteStockItem.minimumQuantity', value);
this.requestUpdate();
}

handleDeleteStockItemMinimumQuantityChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = rawValue === '' ? '' : Number(rawValue);
if (value !== '' && Number.isNaN(value)) {
return;
}
this.setDeleteStockItemMinimumQuantity(value);
}

setDeleteStockItemStatus(value: 'active' | 'inactive' | ''): void {
this.deleteStockItemStatus = value;
setState('ui.ws-manager-stock-items.input.deleteStockItem.status', value);
this.requestUpdate();
}

handleDeleteStockItemStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = (rawValue === 'active' || rawValue === 'inactive') ? rawValue : '';
this.setDeleteStockItemStatus(value);
}

async loadQueryStockItems(options: BffClientOptions = {}): Promise<void> {
this.queryStockItemsState = 'loading';
setState('ui.ws-manager-stock-items.action.queryStockItems.status', 'loading');
const params: CafeFlowQueryStockItemsInput = {
stockItemId: this.queryStockItemsStockItemId || undefined,
name: this.queryStockItemsName || undefined,
status: (this.queryStockItemsStatus === 'active' || this.queryStockItemsStatus === 'inactive') ? this.queryStockItemsStatus : undefined,
createdAt: this.queryStockItemsCreatedAt || undefined,
updatedAt: this.queryStockItemsUpdatedAt || undefined,
};
try {
const response = await execBff<CafeFlowQueryStockItemsOutput>(
'cafeFlow.queryStockItems.queryStockItems',
params,
{ ...options, mode: 'silent' },
);
if (response.ok) {
const data = Array.isArray(response.data) ? response.data : [];
this.queryStockItemsData = data;
setState('ui.ws-manager-stock-items.data.queryStockItems', data);
this.queryStockItemsState = 'success';
setState('ui.ws-manager-stock-items.action.queryStockItems.status', 'success');
return;
}
this.queryStockItemsState = 'error';
setState('ui.ws-manager-stock-items.action.queryStockItems.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao consultar itens de estoque.');
} catch (error) {
this.queryStockItemsState = 'error';
setState('ui.ws-manager-stock-items.action.queryStockItems.status', 'error');
throw error;
}
}

handleQueryStockItemsClick(event: Event): void {
void event;
void this.loadQueryStockItems({ mode: 'silent' });
}

async createStockItem(options: BffClientOptions = {}): Promise<void> {
this.createStockItemState = 'loading';
setState('ui.ws-manager-stock-items.action.createStockItem.status', 'loading');
if (this.createStockItemStatus !== 'active' && this.createStockItemStatus !== 'inactive') {
this.createStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.createStockItem.status', 'error');
throw new Error('Status inválido para criação de item.');
}
if (this.createStockItemMinimumQuantity === '') {
this.createStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.createStockItem.status', 'error');
throw new Error('Quantidade mínima obrigatória.');
}
const params: CafeFlowCreateStockItemInput = {
name: this.createStockItemName,
unitOfMeasure: this.createStockItemUnitOfMeasure,
minimumQuantity: this.createStockItemMinimumQuantity,
status: this.createStockItemStatus,
};
try {
const response = await execBff(
'cafeFlow.createStockItem.createStockItem',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.createStockItemState = 'success';
setState('ui.ws-manager-stock-items.action.createStockItem.status', 'success');
return;
}
this.createStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.createStockItem.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao criar item de estoque.');
} catch (error) {
this.createStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.createStockItem.status', 'error');
throw error;
}
}

handleCreateStockItemClick(event: Event): void {
void event;
void runBlockingUiAction(
(signal: AbortSignal) => this.createStockItem({ mode: 'blocking', signal }),
{ mode: 'blocking' },
);
}

async updateStockItem(options: BffClientOptions = {}): Promise<void> {
this.updateStockItemState = 'loading';
setState('ui.ws-manager-stock-items.action.updateStockItem.status', 'loading');
if (this.updateStockItemStatus !== 'active' && this.updateStockItemStatus !== 'inactive') {
this.updateStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.updateStockItem.status', 'error');
throw new Error('Status inválido para atualização de item.');
}
if (this.updateStockItemMinimumQuantity === '') {
this.updateStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.updateStockItem.status', 'error');
throw new Error('Quantidade mínima obrigatória.');
}
const params: CafeFlowUpdateStockItemInput = {
name: this.updateStockItemName,
unitOfMeasure: this.updateStockItemUnitOfMeasure,
minimumQuantity: this.updateStockItemMinimumQuantity,
status: this.updateStockItemStatus,
};
try {
const response = await execBff(
'cafeFlow.updateStockItem.updateStockItem',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.updateStockItemState = 'success';
setState('ui.ws-manager-stock-items.action.updateStockItem.status', 'success');
return;
}
this.updateStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.updateStockItem.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao atualizar item de estoque.');
} catch (error) {
this.updateStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.updateStockItem.status', 'error');
throw error;
}
}

handleUpdateStockItemClick(event: Event): void {
void event;
void runBlockingUiAction(
(signal: AbortSignal) => this.updateStockItem({ mode: 'blocking', signal }),
{ mode: 'blocking' },
);
}

async deleteStockItem(options: BffClientOptions = {}): Promise<void> {
this.deleteStockItemState = 'loading';
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', 'loading');
if (this.deleteStockItemStatus !== 'active' && this.deleteStockItemStatus !== 'inactive') {
this.deleteStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', 'error');
throw new Error('Status inválido para exclusão de item.');
}
if (this.deleteStockItemMinimumQuantity === '') {
this.deleteStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', 'error');
throw new Error('Quantidade mínima obrigatória.');
}
const params: CafeFlowDeleteStockItemInput = {
stockItemId: this.deleteStockItemStockItemId || undefined,
name: this.deleteStockItemName,
unitOfMeasure: this.deleteStockItemUnitOfMeasure,
minimumQuantity: this.deleteStockItemMinimumQuantity,
status: this.deleteStockItemStatus,
};
try {
const response = await execBff(
'cafeFlow.deleteStockItem.deleteStockItem',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.deleteStockItemState = 'success';
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', 'success');
return;
}
this.deleteStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao remover item de estoque.');
} catch (error) {
this.deleteStockItemState = 'error';
setState('ui.ws-manager-stock-items.action.deleteStockItem.status', 'error');
throw error;
}
}

handleDeleteStockItemClick(event: Event): void {
void event;
void runBlockingUiAction(
(signal: AbortSignal) => this.deleteStockItem({ mode: 'blocking', signal }),
{ mode: 'blocking' },
);
}
}
