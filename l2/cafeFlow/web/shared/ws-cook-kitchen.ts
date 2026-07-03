/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
CafeFlowUpdateKitchenStatusInput,
CafeFlowUpdateKitchenStatusOutput,
CafeFlowCreateStockMovementInput,
CafeFlowCreateStockMovementOutput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-cook-kitchen.js';

/// **collab_i18n_start**
const message_pt = {
"ws-cook-kitchen.section.kitchenQueue.title": "Cozinha – Fila de Tickets e Baixa de Estoque",
"ws-cook-kitchen.organism.updateKitchenStatus.title": "Atualizar status de cozinha",
"ws-cook-kitchen.organism.createStockMovement.title": "Dar baixa no estoque",
"ws-cook-kitchen.intent.ticketQueue.title": "Fila de tickets da cozinha",
"ws-cook-kitchen.intent.startPreparation.title": "Iniciar preparo",
"ws-cook-kitchen.intent.markReady.title": "Marcar como pronto",
"ws-cook-kitchen.intent.stockMovement.title": "Baixa de estoque",
"ws-cook-kitchen.field.orderId": "Pedido",
"ws-cook-kitchen.field.orderType": "Tipo",
"ws-cook-kitchen.field.tableId": "Mesa",
"ws-cook-kitchen.field.orderStatus": "Status",
"ws-cook-kitchen.field.total": "Total",
"ws-cook-kitchen.field.createdAt": "Criado em",
"ws-cook-kitchen.field.previousStatus": "Status anterior",
"ws-cook-kitchen.field.status": "Novo status",
"ws-cook-kitchen.action.updateKitchenStatus": "Atualizar status",
"ws-cook-kitchen.action.markReady": "Confirmar pronto",
"ws-cook-kitchen.field.movementType": "Tipo de movimentação",
"ws-cook-kitchen.field.quantity": "Quantidade",
"ws-cook-kitchen.field.reason": "Motivo",
"ws-cook-kitchen.action.createStockMovement": "Registrar baixa"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';
	export class CafeFlowWsCookKitchenBase extends CollabLitElement {
@property() status: string = '';
@property() updateKitchenStatusState: ActionStatus = 'idle';
@property() updateKitchenStatusStatus: CafeFlowUpdateKitchenStatusInput['status'] | '' = '';
@property() updateKitchenStatusPreviousStatus: CafeFlowUpdateKitchenStatusInput['previousStatus'] | '' = '';
@property() createStockMovementState: ActionStatus = 'idle';
@property() createStockMovementMovementType: CafeFlowCreateStockMovementInput['movementType'] | '' = '';
@property() createStockMovementQuantity: CafeFlowCreateStockMovementInput['quantity'] | '' = '';
@property() createStockMovementReason: CafeFlowCreateStockMovementInput['reason'] | '' = '';
@property() LayoutColOrderId: string = '';
@property() LayoutColOrderType: string = '';
@property() LayoutColTableId: string = '';
@property() LayoutColTotal: string = '';
@property() LayoutColCreatedAt: string = '';

private readonly stateKeys: string[] = [
'ui.ws-cook-kitchen.status',
'ui.ws-cook-kitchen.action.updateKitchenStatus.status',
'ui.ws-cook-kitchen.input.updateKitchenStatus.status',
'ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus',
'ui.ws-cook-kitchen.action.createStockMovement.status',
'ui.ws-cook-kitchen.input.createStockMovement.movementType',
'ui.ws-cook-kitchen.input.createStockMovement.quantity',
'ui.ws-cook-kitchen.input.createStockMovement.reason',
'ui.ws-cook-kitchen.layout.col-order-id',
'ui.ws-cook-kitchen.layout.col-order-type',
'ui.ws-cook-kitchen.layout.col-table-id',
'ui.ws-cook-kitchen.layout.col-total',
'ui.ws-cook-kitchen.layout.col-created-at',
];

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.initializeState();
subscribe(this.stateKeys, this);
}

disconnectedCallback(): void {
unsubscribe(this.stateKeys, this);
super.disconnectedCallback();
}

private initializeState(): void {
const statusState = getState('ui.ws-cook-kitchen.status');
if (statusState !== undefined) {
this.status = statusState as string;
}
const updateKitchenStatusState = getState('ui.ws-cook-kitchen.action.updateKitchenStatus.status');
if (updateKitchenStatusState !== undefined) {
this.updateKitchenStatusState = updateKitchenStatusState as ActionStatus;
}
const updateKitchenStatusStatus = getState('ui.ws-cook-kitchen.input.updateKitchenStatus.status');
if (updateKitchenStatusStatus !== undefined) {
this.updateKitchenStatusStatus = updateKitchenStatusStatus as CafeFlowUpdateKitchenStatusInput['status'] | '';
}
const updateKitchenStatusPreviousStatus = getState('ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus');
if (updateKitchenStatusPreviousStatus !== undefined) {
this.updateKitchenStatusPreviousStatus = updateKitchenStatusPreviousStatus as CafeFlowUpdateKitchenStatusInput['previousStatus'] | '';
}
const createStockMovementState = getState('ui.ws-cook-kitchen.action.createStockMovement.status');
if (createStockMovementState !== undefined) {
this.createStockMovementState = createStockMovementState as ActionStatus;
}
const createStockMovementMovementType = getState('ui.ws-cook-kitchen.input.createStockMovement.movementType');
if (createStockMovementMovementType !== undefined) {
this.createStockMovementMovementType = createStockMovementMovementType as CafeFlowCreateStockMovementInput['movementType'] | '';
}
const createStockMovementQuantity = getState('ui.ws-cook-kitchen.input.createStockMovement.quantity');
if (createStockMovementQuantity !== undefined) {
this.createStockMovementQuantity = createStockMovementQuantity as CafeFlowCreateStockMovementInput['quantity'] | '';
}
const createStockMovementReason = getState('ui.ws-cook-kitchen.input.createStockMovement.reason');
if (createStockMovementReason !== undefined) {
this.createStockMovementReason = createStockMovementReason as CafeFlowCreateStockMovementInput['reason'] | '';
}
const layoutColOrderId = getState('ui.ws-cook-kitchen.layout.col-order-id');
if (layoutColOrderId !== undefined) {
this.LayoutColOrderId = layoutColOrderId as string;
}
const layoutColOrderType = getState('ui.ws-cook-kitchen.layout.col-order-type');
if (layoutColOrderType !== undefined) {
this.LayoutColOrderType = layoutColOrderType as string;
}
const layoutColTableId = getState('ui.ws-cook-kitchen.layout.col-table-id');
if (layoutColTableId !== undefined) {
this.LayoutColTableId = layoutColTableId as string;
}
const layoutColTotal = getState('ui.ws-cook-kitchen.layout.col-total');
if (layoutColTotal !== undefined) {
this.LayoutColTotal = layoutColTotal as string;
}
const layoutColCreatedAt = getState('ui.ws-cook-kitchen.layout.col-created-at');
if (layoutColCreatedAt !== undefined) {
this.LayoutColCreatedAt = layoutColCreatedAt as string;
}
}

handleIcaStateChange(key: string, value: unknown): void {
if (value === undefined) {
return;
}
switch (key) {
case 'ui.ws-cook-kitchen.status':
this.status = value as string;
break;
case 'ui.ws-cook-kitchen.action.updateKitchenStatus.status':
this.updateKitchenStatusState = value as ActionStatus;
break;
case 'ui.ws-cook-kitchen.input.updateKitchenStatus.status':
this.updateKitchenStatusStatus = value as CafeFlowUpdateKitchenStatusInput['status'] | '';
break;
case 'ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus':
this.updateKitchenStatusPreviousStatus = value as CafeFlowUpdateKitchenStatusInput['previousStatus'] | '';
break;
case 'ui.ws-cook-kitchen.action.createStockMovement.status':
this.createStockMovementState = value as ActionStatus;
break;
case 'ui.ws-cook-kitchen.input.createStockMovement.movementType':
this.createStockMovementMovementType = value as CafeFlowCreateStockMovementInput['movementType'] | '';
break;
case 'ui.ws-cook-kitchen.input.createStockMovement.quantity':
this.createStockMovementQuantity = value as CafeFlowCreateStockMovementInput['quantity'] | '';
break;
case 'ui.ws-cook-kitchen.input.createStockMovement.reason':
this.createStockMovementReason = value as CafeFlowCreateStockMovementInput['reason'] | '';
break;
case 'ui.ws-cook-kitchen.layout.col-order-id':
this.LayoutColOrderId = value as string;
break;
case 'ui.ws-cook-kitchen.layout.col-order-type':
this.LayoutColOrderType = value as string;
break;
case 'ui.ws-cook-kitchen.layout.col-table-id':
this.LayoutColTableId = value as string;
break;
case 'ui.ws-cook-kitchen.layout.col-total':
this.LayoutColTotal = value as string;
break;
case 'ui.ws-cook-kitchen.layout.col-created-at':
this.LayoutColCreatedAt = value as string;
break;
default:
break;
}
}

setUpdateKitchenStatusStatus(value: CafeFlowUpdateKitchenStatusInput['status'] | ''): void {
this.updateKitchenStatusStatus = value;
setState('ui.ws-cook-kitchen.input.updateKitchenStatus.status', value);
this.requestUpdate();
}

handleUpdateKitchenStatusStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setUpdateKitchenStatusStatus(target.value as CafeFlowUpdateKitchenStatusInput['status'] | '');
}

setUpdateKitchenStatusPreviousStatus(value: CafeFlowUpdateKitchenStatusInput['previousStatus'] | ''): void {
this.updateKitchenStatusPreviousStatus = value;
setState('ui.ws-cook-kitchen.input.updateKitchenStatus.previousStatus', value);
this.requestUpdate();
}

handleUpdateKitchenStatusPreviousStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setUpdateKitchenStatusPreviousStatus(target.value as CafeFlowUpdateKitchenStatusInput['previousStatus'] | '');
}

setCreateStockMovementMovementType(value: CafeFlowCreateStockMovementInput['movementType'] | ''): void {
this.createStockMovementMovementType = value;
setState('ui.ws-cook-kitchen.input.createStockMovement.movementType', value);
this.requestUpdate();
}

handleCreateStockMovementMovementTypeChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setCreateStockMovementMovementType(target.value as CafeFlowCreateStockMovementInput['movementType'] | '');
}

setCreateStockMovementQuantity(value: CafeFlowCreateStockMovementInput['quantity'] | ''): void {
this.createStockMovementQuantity = value;
setState('ui.ws-cook-kitchen.input.createStockMovement.quantity', value);
this.requestUpdate();
}

handleCreateStockMovementQuantityChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (!target) {
return;
}
if (target.value === '') {
this.setCreateStockMovementQuantity('');
return;
}
const numericValue = Number(target.value);
if (Number.isNaN(numericValue)) {
return;
}
this.setCreateStockMovementQuantity(numericValue);
}

setCreateStockMovementReason(value: CafeFlowCreateStockMovementInput['reason'] | ''): void {
this.createStockMovementReason = value;
setState('ui.ws-cook-kitchen.input.createStockMovement.reason', value);
this.requestUpdate();
}

handleCreateStockMovementReasonChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (!target) {
return;
}
this.setCreateStockMovementReason(target.value as CafeFlowCreateStockMovementInput['reason'] | '');
}

async updateKitchenStatus(options: { signal?: AbortSignal } = {}): Promise<void> {
this.updateKitchenStatusState = 'loading';
setState('ui.ws-cook-kitchen.action.updateKitchenStatus.status', 'loading');
if (this.updateKitchenStatusStatus === '') {
this.updateKitchenStatusState = 'error';
setState('ui.ws-cook-kitchen.action.updateKitchenStatus.status', 'error');
throw new Error('Status inválido');
}
const params: CafeFlowUpdateKitchenStatusInput = {
status: this.updateKitchenStatusStatus,
};
if (this.updateKitchenStatusPreviousStatus !== '') {
params.previousStatus = this.updateKitchenStatusPreviousStatus as CafeFlowUpdateKitchenStatusInput['previousStatus'];
}
const bffOptions: BffClientOptions = {
mode: 'blocking',
signal: options.signal,
};
const response = await execBff<CafeFlowUpdateKitchenStatusOutput>(
'cafeFlow.orderLifecycle.updateKitchenStatus',
params,
bffOptions,
);
if (response.ok) {
this.updateKitchenStatusState = 'success';
setState('ui.ws-cook-kitchen.action.updateKitchenStatus.status', 'success');
return;
}
this.updateKitchenStatusState = 'error';
setState('ui.ws-cook-kitchen.action.updateKitchenStatus.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao atualizar status');
}

handleUpdateKitchenStatusClick(): void {
void runBlockingUiAction((signal: AbortSignal) => this.updateKitchenStatus({ signal }));
}

async createStockMovement(options: { signal?: AbortSignal } = {}): Promise<void> {
this.createStockMovementState = 'loading';
setState('ui.ws-cook-kitchen.action.createStockMovement.status', 'loading');
if (this.createStockMovementMovementType === '') {
this.createStockMovementState = 'error';
setState('ui.ws-cook-kitchen.action.createStockMovement.status', 'error');
throw new Error('Tipo de movimentação inválido');
}
if (this.createStockMovementReason === '') {
this.createStockMovementState = 'error';
setState('ui.ws-cook-kitchen.action.createStockMovement.status', 'error');
throw new Error('Motivo inválido');
}
let quantityValue: number;
if (this.createStockMovementQuantity === '') {
this.createStockMovementState = 'error';
setState('ui.ws-cook-kitchen.action.createStockMovement.status', 'error');
throw new Error('Quantidade inválida');
}
quantityValue = this.createStockMovementQuantity as number;
const params: CafeFlowCreateStockMovementInput = {
movementType: this.createStockMovementMovementType,
quantity: quantityValue,
reason: this.createStockMovementReason,
};
const bffOptions: BffClientOptions = {
mode: 'blocking',
signal: options.signal,
};
const response = await execBff<CafeFlowCreateStockMovementOutput>(
'cafeFlow.orderLifecycle.createStockMovement',
params,
bffOptions,
);
if (response.ok) {
this.createStockMovementState = 'success';
setState('ui.ws-cook-kitchen.action.createStockMovement.status', 'success');
return;
}
this.createStockMovementState = 'error';
setState('ui.ws-cook-kitchen.action.createStockMovement.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao criar movimentação');
}

handleCreateStockMovementClick(): void {
void runBlockingUiAction((signal: AbortSignal) => this.createStockMovement({ signal }));
}
}
