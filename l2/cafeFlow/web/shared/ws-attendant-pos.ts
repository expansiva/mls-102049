/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js'; 
import type {
CafeFlowCreateOrderInput,
CafeFlowSettleOrderInput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-attendant-pos.js';

/// **collab_i18n_start**
const message_pt = {
"ws-attendant-pos.section.main.title": "POS – Lançamento e Finalização de Pedidos",
"ws-attendant-pos.organism.createOrder.title": "Lançar pedido no POS",
"ws-attendant-pos.organism.settleOrder.title": "Finalizar pedido",
"ws-attendant-pos.createOrder.step.selectTable.title": "Selecionar mesa ou informar número",
"ws-attendant-pos.createOrder.step.addItems.title": "Adicionar itens do cardápio ao pedido",
"ws-attendant-pos.createOrder.step.applyCombos.title": "Aplicar regras de combo e substituições",
"ws-attendant-pos.createOrder.step.confirmSend.title": "Confirmar e enviar pedido para a cozinha",
"ws-attendant-pos.settleOrder.step.verifyReady.title": "Verificar pedido pronto pela cozinha",
"ws-attendant-pos.settleOrder.step.confirmDelivery.title": "Confirmar entrega ou pagamento",
"ws-attendant-pos.settleOrder.step.finalize.title": "Marcar pedido como finalizado",
"ws-attendant-pos.field.orderType.label": "Modalidade do pedido",
"ws-attendant-pos.field.status.label": "Status do pedido",
"ws-attendant-pos.field.total.label": "Total do pedido",
"ws-attendant-pos.action.createOrder.label": "Enviar pedido para a cozinha",
"ws-attendant-pos.action.settleOrder.label": "Finalizar pedido"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowWsAttendantPosBase extends CollabLitElement {
@property()
status: string = '';

@property()
createOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
createOrderOrderType: CafeFlowCreateOrderInput['orderType'] | '' = '';

@property()
createOrderStatus: CafeFlowCreateOrderInput['status'] | '' = '';

@property()
createOrderTotal: number | '' = '';

@property()
settleOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
settleOrderStatus: CafeFlowSettleOrderInput['status'] | '' = '';

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

private readonly stateKeys: string[] = [
'ui.ws-attendant-pos.status',
'ui.ws-attendant-pos.action.createOrder.status',
'ui.ws-attendant-pos.input.createOrder.orderType',
'ui.ws-attendant-pos.input.createOrder.status',
'ui.ws-attendant-pos.input.createOrder.total',
'ui.ws-attendant-pos.action.settleOrder.status',
'ui.ws-attendant-pos.input.settleOrder.status',
];

connectedCallback(): void {
super.connectedCallback();
const statusValue = getState('ui.ws-attendant-pos.status');
this.status = statusValue !== undefined ? (statusValue as string) : '';
const createOrderStateValue = getState('ui.ws-attendant-pos.action.createOrder.status');
this.createOrderState = createOrderStateValue !== undefined
? (createOrderStateValue as 'idle' | 'loading' | 'success' | 'error')
: 'idle';
const createOrderOrderTypeValue = getState('ui.ws-attendant-pos.input.createOrder.orderType');
this.createOrderOrderType = createOrderOrderTypeValue !== undefined
? (createOrderOrderTypeValue as CafeFlowCreateOrderInput['orderType'] | '')
: '';
const createOrderStatusValue = getState('ui.ws-attendant-pos.input.createOrder.status');
this.createOrderStatus = createOrderStatusValue !== undefined
? (createOrderStatusValue as CafeFlowCreateOrderInput['status'] | '')
: '';
const createOrderTotalValue = getState('ui.ws-attendant-pos.input.createOrder.total');
this.createOrderTotal = createOrderTotalValue !== undefined
? (createOrderTotalValue as number | '')
: '';
const settleOrderStateValue = getState('ui.ws-attendant-pos.action.settleOrder.status');
this.settleOrderState = settleOrderStateValue !== undefined
? (settleOrderStateValue as 'idle' | 'loading' | 'success' | 'error')
: 'idle';
const settleOrderStatusValue = getState('ui.ws-attendant-pos.input.settleOrder.status');
this.settleOrderStatus = settleOrderStatusValue !== undefined
? (settleOrderStatusValue as CafeFlowSettleOrderInput['status'] | '')
: '';
subscribe(this.stateKeys, this);
}

disconnectedCallback(): void {
unsubscribe(this.stateKeys, this);
super.disconnectedCallback();
}

handleIcaStateChange(stateKey: string, value: unknown): void {
switch (stateKey) {
case 'ui.ws-attendant-pos.status':
this.status = value as string;
break;
case 'ui.ws-attendant-pos.action.createOrder.status':
this.createOrderState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-attendant-pos.input.createOrder.orderType':
this.createOrderOrderType = value as CafeFlowCreateOrderInput['orderType'] | '';
break;
case 'ui.ws-attendant-pos.input.createOrder.status':
this.createOrderStatus = value as CafeFlowCreateOrderInput['status'] | '';
break;
case 'ui.ws-attendant-pos.input.createOrder.total':
this.createOrderTotal = value as number | '';
break;
case 'ui.ws-attendant-pos.action.settleOrder.status':
this.settleOrderState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-attendant-pos.input.settleOrder.status':
this.settleOrderStatus = value as CafeFlowSettleOrderInput['status'] | '';
break;
default:
break;
}
this.requestUpdate();
}

setCreateOrderOrderType(value: CafeFlowCreateOrderInput['orderType'] | ''): void {
this.createOrderOrderType = value;
setState('ui.ws-attendant-pos.input.createOrder.orderType', value);
this.requestUpdate();
}

handleCreateOrderOrderTypeChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setCreateOrderOrderType(value as CafeFlowCreateOrderInput['orderType'] | '');
}

setCreateOrderStatus(value: CafeFlowCreateOrderInput['status'] | ''): void {
this.createOrderStatus = value;
setState('ui.ws-attendant-pos.input.createOrder.status', value);
this.requestUpdate();
}

handleCreateOrderStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setCreateOrderStatus(value as CafeFlowCreateOrderInput['status'] | '');
}

setCreateOrderTotal(value: number | ''): void {
this.createOrderTotal = value;
setState('ui.ws-attendant-pos.input.createOrder.total', value);
this.requestUpdate();
}

handleCreateOrderTotalChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
const nextValue = value === '' ? '' : Number(value);
this.setCreateOrderTotal(nextValue);
}

setSettleOrderStatus(value: CafeFlowSettleOrderInput['status'] | ''): void {
this.settleOrderStatus = value;
setState('ui.ws-attendant-pos.input.settleOrder.status', value);
this.requestUpdate();
}

handleSettleOrderStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setSettleOrderStatus(value as CafeFlowSettleOrderInput['status'] | '');
}

async createOrder(signal?: AbortSignal): Promise<void> {
this.createOrderState = 'loading';
setState('ui.ws-attendant-pos.action.createOrder.status', 'loading');
const params: CafeFlowCreateOrderInput = {
orderType: this.createOrderOrderType as CafeFlowCreateOrderInput['orderType'],
status: this.createOrderStatus as CafeFlowCreateOrderInput['status'],
total: typeof this.createOrderTotal === 'number' ? this.createOrderTotal : Number(this.createOrderTotal),
};
const options: BffClientOptions = {
mode: 'blocking',
signal,
};
try {
const response = await execBff('cafeFlow.orderLifecycle.createOrder', params, options);
if (!response.ok) {
this.createOrderState = 'error';
setState('ui.ws-attendant-pos.action.createOrder.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao executar createOrder');
}
this.createOrderState = 'success';
setState('ui.ws-attendant-pos.action.createOrder.status', 'success');
} catch (error) {
this.createOrderState = 'error';
setState('ui.ws-attendant-pos.action.createOrder.status', 'error');
throw error;
}
}

async handleCreateOrderClick(): Promise<void> {
await runBlockingUiAction(async (signal: AbortSignal) => {
await this.createOrder(signal);
});
}

async settleOrder(signal?: AbortSignal): Promise<void> {
this.settleOrderState = 'loading';
setState('ui.ws-attendant-pos.action.settleOrder.status', 'loading');
const params: CafeFlowSettleOrderInput = {
status: this.settleOrderStatus as CafeFlowSettleOrderInput['status'],
};
const options: BffClientOptions = {
mode: 'blocking',
signal,
};
try {
const response = await execBff('cafeFlow.orderLifecycle.settleOrder', params, options);
if (!response.ok) {
this.settleOrderState = 'error';
setState('ui.ws-attendant-pos.action.settleOrder.status', 'error');
throw new Error(response.error?.message ?? 'Erro ao executar settleOrder');
}
this.settleOrderState = 'success';
setState('ui.ws-attendant-pos.action.settleOrder.status', 'success');
} catch (error) {
this.settleOrderState = 'error';
setState('ui.ws-attendant-pos.action.settleOrder.status', 'error');
throw error;
}
}

async handleSettleOrderClick(): Promise<void> {
await runBlockingUiAction(async (signal: AbortSignal) => {
await this.settleOrder(signal);
});
}
}
