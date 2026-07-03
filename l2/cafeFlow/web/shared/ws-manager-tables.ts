/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-tables.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
CafeFlowQueryTablesInput,
CafeFlowQueryTablesOutput,
CafeFlowCreateTableInput,
CafeFlowCreateTableOutput,
CafeFlowUpdateTableInput,
CafeFlowUpdateTableOutput,
CafeFlowDeleteTableInput,
CafeFlowDeleteTableOutput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.js';

/// **collab_i18n_start**
const message_pt = {
"ws-manager-tables.section.gestaoMesas.title": "Gestão de Mesas",
"ws-manager-tables.organism.queryTables.title": "Consultar mesas",
"ws-manager-tables.intent.queryTables.title": "Query List",
"ws-manager-tables.table.tableId": "Table Id",
"ws-manager-tables.table.number": "Number",
"ws-manager-tables.table.name": "Name",
"ws-manager-tables.table.status": "Status",
"ws-manager-tables.table.createdAt": "Created At",
"ws-manager-tables.table.updatedAt": "Updated At",
"ws-manager-tables.filter.tableId": "Table Id",
"ws-manager-tables.filter.name": "Name",
"ws-manager-tables.filter.status": "Status",
"ws-manager-tables.filter.createdAt": "Created At",
"ws-manager-tables.filter.updatedAt": "Updated At",
"ws-manager-tables.action.queryTables": "Query Tables",
"ws-manager-tables.organism.createTable.title": "Cadastrar mesa",
"ws-manager-tables.intent.createTable.title": "Command Form",
"ws-manager-tables.field.number": "Number",
"ws-manager-tables.field.name": "Name",
"ws-manager-tables.field.status": "Status",
"ws-manager-tables.action.createTable": "Create Table",
"ws-manager-tables.organism.updateTable.title": "Editar mesa",
"ws-manager-tables.intent.updateTable.title": "Command Form",
"ws-manager-tables.action.updateTable": "Update Table",
"ws-manager-tables.organism.deleteTable.title": "Remover mesa",
"ws-manager-tables.intent.deleteTable.title": "Command Form",
"ws-manager-tables.field.tableId": "Table Id",
"ws-manager-tables.action.deleteTable": "Delete Table",
"ws-manager-tables.organism.summary.title": "Revisar contexto e resultados",
"ws-manager-tables.intent.summary.title": "Summary"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';

type InputElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export class CafeFlowWsManagerTablesBase extends CollabLitElement {
@property() status: string = '';
@property() queryTablesState: ActionStatus = 'idle';
@property() queryTablesTableId: string = '';
@property() queryTablesName: string = '';
@property() queryTablesStatus: CafeFlowQueryTablesInput['status'] | '' = '';
@property() queryTablesCreatedAt: string = '';
@property() queryTablesUpdatedAt: string = '';
@property() queryTablesData: CafeFlowQueryTablesOutput = [];
@property() createTableState: ActionStatus = 'idle';
@property() createTableNumber: string = '';
@property() createTableName: string = '';
@property() createTableStatus: CafeFlowCreateTableInput['status'] | '' = '';
@property() updateTableState: ActionStatus = 'idle';
@property() updateTableNumber: string = '';
@property() updateTableName: string = '';
@property() updateTableStatus: CafeFlowUpdateTableInput['status'] | '' = '';
@property() deleteTableState: ActionStatus = 'idle';
@property() deleteTableTableId: string = '';
@property() deleteTableNumber: string = '';
@property() deleteTableName: string = '';
@property() deleteTableStatus: CafeFlowDeleteTableInput['status'] | '' = '';

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

private readonly stateKeys: string[] = [
'ui.ws-manager-tables.status',
'ui.ws-manager-tables.action.queryTables.status',
'ui.ws-manager-tables.input.queryTables.tableId',
'ui.ws-manager-tables.input.queryTables.name',
'ui.ws-manager-tables.input.queryTables.status',
'ui.ws-manager-tables.input.queryTables.createdAt',
'ui.ws-manager-tables.input.queryTables.updatedAt',
'ui.ws-manager-tables.data.queryTables',
'ui.ws-manager-tables.action.createTable.status',
'ui.ws-manager-tables.input.createTable.number',
'ui.ws-manager-tables.input.createTable.name',
'ui.ws-manager-tables.input.createTable.status',
'ui.ws-manager-tables.action.updateTable.status',
'ui.ws-manager-tables.input.updateTable.number',
'ui.ws-manager-tables.input.updateTable.name',
'ui.ws-manager-tables.input.updateTable.status',
'ui.ws-manager-tables.action.deleteTable.status',
'ui.ws-manager-tables.input.deleteTable.tableId',
'ui.ws-manager-tables.input.deleteTable.number',
'ui.ws-manager-tables.input.deleteTable.name',
'ui.ws-manager-tables.input.deleteTable.status',
];

connectedCallback(): void {
super.connectedCallback();
this.stateKeys.forEach((key: string) => {
const value: unknown = getState(key);
this.applyStateValue(key, value);
});
subscribe(this.stateKeys, this);
void this.loadQueryTables();
}

disconnectedCallback(): void {
unsubscribe(this.stateKeys, this);
super.disconnectedCallback();
}

handleIcaStateChange(stateKey: string, value: unknown): void {
this.applyStateValue(stateKey, value);
}

private applyStateValue(stateKey: string, value: unknown): void {
switch (stateKey) {
case 'ui.ws-manager-tables.status':
this.status = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.action.queryTables.status':
this.queryTablesState = (value as ActionStatus) ?? 'idle';
break;
case 'ui.ws-manager-tables.input.queryTables.tableId':
this.queryTablesTableId = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.queryTables.name':
this.queryTablesName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.queryTables.status':
this.queryTablesStatus = (typeof value === 'string' ? value : '') as CafeFlowQueryTablesInput['status'] | '';
break;
case 'ui.ws-manager-tables.input.queryTables.createdAt':
this.queryTablesCreatedAt = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.queryTables.updatedAt':
this.queryTablesUpdatedAt = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.data.queryTables':
this.queryTablesData = Array.isArray(value) ? (value as CafeFlowQueryTablesOutput) : [];
break;
case 'ui.ws-manager-tables.action.createTable.status':
this.createTableState = (value as ActionStatus) ?? 'idle';
break;
case 'ui.ws-manager-tables.input.createTable.number':
this.createTableNumber = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.createTable.name':
this.createTableName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.createTable.status':
this.createTableStatus = (typeof value === 'string' ? value : '') as CafeFlowCreateTableInput['status'] | '';
break;
case 'ui.ws-manager-tables.action.updateTable.status':
this.updateTableState = (value as ActionStatus) ?? 'idle';
break;
case 'ui.ws-manager-tables.input.updateTable.number':
this.updateTableNumber = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.updateTable.name':
this.updateTableName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.updateTable.status':
this.updateTableStatus = (typeof value === 'string' ? value : '') as CafeFlowUpdateTableInput['status'] | '';
break;
case 'ui.ws-manager-tables.action.deleteTable.status':
this.deleteTableState = (value as ActionStatus) ?? 'idle';
break;
case 'ui.ws-manager-tables.input.deleteTable.tableId':
this.deleteTableTableId = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.deleteTable.number':
this.deleteTableNumber = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.deleteTable.name':
this.deleteTableName = typeof value === 'string' ? value : '';
break;
case 'ui.ws-manager-tables.input.deleteTable.status':
this.deleteTableStatus = (typeof value === 'string' ? value : '') as CafeFlowDeleteTableInput['status'] | '';
break;
default:
break;
}
this.requestUpdate();
}

private getInputValue(event: Event): string | null {
const target = event.target as InputElement | null;
if (!target) {
return null;
}
return target.value;
}

setQueryTablesTableId(value: string): void {
this.queryTablesTableId = value;
setState('ui.ws-manager-tables.input.queryTables.tableId', value);
this.requestUpdate();
}

handleQueryTablesTableIdChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setQueryTablesTableId(value);
}

setQueryTablesName(value: string): void {
this.queryTablesName = value;
setState('ui.ws-manager-tables.input.queryTables.name', value);
this.requestUpdate();
}

handleQueryTablesNameChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setQueryTablesName(value);
}

setQueryTablesStatus(value: string): void {
this.queryTablesStatus = value as CafeFlowQueryTablesInput['status'] | '';
setState('ui.ws-manager-tables.input.queryTables.status', value);
this.requestUpdate();
}

handleQueryTablesStatusChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setQueryTablesStatus(value);
}

setQueryTablesCreatedAt(value: string): void {
this.queryTablesCreatedAt = value;
setState('ui.ws-manager-tables.input.queryTables.createdAt', value);
this.requestUpdate();
}

handleQueryTablesCreatedAtChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setQueryTablesCreatedAt(value);
}

setQueryTablesUpdatedAt(value: string): void {
this.queryTablesUpdatedAt = value;
setState('ui.ws-manager-tables.input.queryTables.updatedAt', value);
this.requestUpdate();
}

handleQueryTablesUpdatedAtChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setQueryTablesUpdatedAt(value);
}

setCreateTableNumber(value: string): void {
this.createTableNumber = value;
setState('ui.ws-manager-tables.input.createTable.number', value);
this.requestUpdate();
}

handleCreateTableNumberChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setCreateTableNumber(value);
}

setCreateTableName(value: string): void {
this.createTableName = value;
setState('ui.ws-manager-tables.input.createTable.name', value);
this.requestUpdate();
}

handleCreateTableNameChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setCreateTableName(value);
}

setCreateTableStatus(value: string): void {
this.createTableStatus = value as CafeFlowCreateTableInput['status'] | '';
setState('ui.ws-manager-tables.input.createTable.status', value);
this.requestUpdate();
}

handleCreateTableStatusChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setCreateTableStatus(value);
}

setUpdateTableNumber(value: string): void {
this.updateTableNumber = value;
setState('ui.ws-manager-tables.input.updateTable.number', value);
this.requestUpdate();
}

handleUpdateTableNumberChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setUpdateTableNumber(value);
}

setUpdateTableName(value: string): void {
this.updateTableName = value;
setState('ui.ws-manager-tables.input.updateTable.name', value);
this.requestUpdate();
}

handleUpdateTableNameChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setUpdateTableName(value);
}

setUpdateTableStatus(value: string): void {
this.updateTableStatus = value as CafeFlowUpdateTableInput['status'] | '';
setState('ui.ws-manager-tables.input.updateTable.status', value);
this.requestUpdate();
}

handleUpdateTableStatusChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setUpdateTableStatus(value);
}

setDeleteTableTableId(value: string): void {
this.deleteTableTableId = value;
setState('ui.ws-manager-tables.input.deleteTable.tableId', value);
this.requestUpdate();
}

handleDeleteTableTableIdChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setDeleteTableTableId(value);
}

setDeleteTableNumber(value: string): void {
this.deleteTableNumber = value;
setState('ui.ws-manager-tables.input.deleteTable.number', value);
this.requestUpdate();
}

handleDeleteTableNumberChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setDeleteTableNumber(value);
}

setDeleteTableName(value: string): void {
this.deleteTableName = value;
setState('ui.ws-manager-tables.input.deleteTable.name', value);
this.requestUpdate();
}

handleDeleteTableNameChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setDeleteTableName(value);
}

setDeleteTableStatus(value: string): void {
this.deleteTableStatus = value as CafeFlowDeleteTableInput['status'] | '';
setState('ui.ws-manager-tables.input.deleteTable.status', value);
this.requestUpdate();
}

handleDeleteTableStatusChange(event: Event): void {
const value = this.getInputValue(event);
if (value === null) {
return;
}
this.setDeleteTableStatus(value);
}

async loadQueryTables(signal?: AbortSignal): Promise<void> {
this.queryTablesState = 'loading';
setState('ui.ws-manager-tables.action.queryTables.status', 'loading');
const params: CafeFlowQueryTablesInput = {
tableId: this.queryTablesTableId || undefined,
name: this.queryTablesName || undefined,
status: (this.queryTablesStatus || undefined) as CafeFlowQueryTablesInput['status'] | undefined,
createdAt: this.queryTablesCreatedAt || undefined,
updatedAt: this.queryTablesUpdatedAt || undefined,
};
const options: BffClientOptions = { mode: 'silent', signal };
const response = await execBff<CafeFlowQueryTablesOutput>('cafeFlow.queryTables.queryTables', params, options);
if (!response.ok) {
this.queryTablesState = 'error';
setState('ui.ws-manager-tables.action.queryTables.status', 'error');
return;
}
const data = response.data ?? [];
this.queryTablesData = Array.isArray(data) ? data : [];
setState('ui.ws-manager-tables.data.queryTables', this.queryTablesData);
this.queryTablesState = 'success';
setState('ui.ws-manager-tables.action.queryTables.status', 'success');
}

handleQueryTablesClick(event: Event): void {
event.preventDefault();
void this.loadQueryTables();
}

async createTable(signal?: AbortSignal): Promise<void> {
if (!this.createTableStatus) {
this.createTableState = 'error';
setState('ui.ws-manager-tables.action.createTable.status', 'error');
throw new Error('Status obrigatório');
}
this.createTableState = 'loading';
setState('ui.ws-manager-tables.action.createTable.status', 'loading');
const params: CafeFlowCreateTableInput = {
number: this.createTableNumber,
name: this.createTableName || undefined,
status: this.createTableStatus as CafeFlowCreateTableInput['status'],
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowCreateTableOutput>('cafeFlow.createTable.createTable', params, options);
if (!response.ok) {
this.createTableState = 'error';
setState('ui.ws-manager-tables.action.createTable.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao criar mesa');
}
this.createTableState = 'success';
setState('ui.ws-manager-tables.action.createTable.status', 'success');
}

handleCreateTableClick(event: Event): void {
event.preventDefault();
void runBlockingUiAction((signal: AbortSignal) => this.createTable(signal));
}

async updateTable(signal?: AbortSignal): Promise<void> {
if (!this.updateTableStatus) {
this.updateTableState = 'error';
setState('ui.ws-manager-tables.action.updateTable.status', 'error');
throw new Error('Status obrigatório');
}
this.updateTableState = 'loading';
setState('ui.ws-manager-tables.action.updateTable.status', 'loading');
const params: CafeFlowUpdateTableInput = {
number: this.updateTableNumber,
name: this.updateTableName || undefined,
status: this.updateTableStatus as CafeFlowUpdateTableInput['status'],
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowUpdateTableOutput>('cafeFlow.updateTable.updateTable', params, options);
if (!response.ok) {
this.updateTableState = 'error';
setState('ui.ws-manager-tables.action.updateTable.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao atualizar mesa');
}
this.updateTableState = 'success';
setState('ui.ws-manager-tables.action.updateTable.status', 'success');
}

handleUpdateTableClick(event: Event): void {
event.preventDefault();
void runBlockingUiAction((signal: AbortSignal) => this.updateTable(signal));
}

async deleteTable(signal?: AbortSignal): Promise<void> {
if (!this.deleteTableStatus) {
this.deleteTableState = 'error';
setState('ui.ws-manager-tables.action.deleteTable.status', 'error');
throw new Error('Status obrigatório');
}
this.deleteTableState = 'loading';
setState('ui.ws-manager-tables.action.deleteTable.status', 'loading');
const params: CafeFlowDeleteTableInput = {
tableId: this.deleteTableTableId || undefined,
number: this.deleteTableNumber,
name: this.deleteTableName || undefined,
status: this.deleteTableStatus as CafeFlowDeleteTableInput['status'],
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowDeleteTableOutput>('cafeFlow.deleteTable.deleteTable', params, options);
if (!response.ok) {
this.deleteTableState = 'error';
setState('ui.ws-manager-tables.action.deleteTable.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao remover mesa');
}
this.deleteTableState = 'success';
setState('ui.ws-manager-tables.action.deleteTable.status', 'success');
}

handleDeleteTableClick(event: Event): void {
event.preventDefault();
void runBlockingUiAction((signal: AbortSignal) => this.deleteTable(signal));
}
}
