/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
CafeFlowQueryStockLevelsInput,
CafeFlowQueryStockLevelsOutput,
CafeFlowAdjustStockLevelInput,
CafeFlowAdjustStockLevelOutput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.js';

/// **collab_i18n_start**
const message_pt = {
"ws-manager-stock-adjustment.section.stockAdjustment.title": "Controle e Ajuste de Estoque",
"ws-manager-stock-adjustment.organism.queryStockLevels.title": "Consultar níveis de estoque",
"ws-manager-stock-adjustment.organism.adjustStockLevel.title": "Ajustar e repor estoque",
"ws-manager-stock-adjustment.intention.queryStockLevels.title": "Níveis de estoque",
"ws-manager-stock-adjustment.intention.adjustStockLevel.title": "Ajuste de estoque",
"ws-manager-stock-adjustment.intention.review.title": "Resumo do ajuste",
"ws-manager-stock-adjustment.field.stockItemId.label": "Item de estoque",
"ws-manager-stock-adjustment.field.stockItemId.filterLabel": "Filtrar por item de estoque",
"ws-manager-stock-adjustment.field.currentQuantity.label": "Quantidade atual",
"ws-manager-stock-adjustment.field.lastMovementAt.label": "Última movimentação",
"ws-manager-stock-adjustment.field.lastMovementAt.filterLabel": "Filtrar por última movimentação",
"ws-manager-stock-adjustment.action.queryStockLevels.label": "Consultar níveis",
"ws-manager-stock-adjustment.action.adjustStockLevel.label": "Salvar ajuste"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowWsManagerStockAdjustmentBase extends CollabLitElement {
@property()
status: string = '';

@property()
queryStockLevelsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
queryStockLevelsStockItemId: string = '';

@property()
queryStockLevelsLastMovementAt: string = '';

@property()
queryStockLevelsData: CafeFlowQueryStockLevelsOutput = [];

@property()
adjustStockLevelState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
adjustStockLevelCurrentQuantity: number | string = '';

@property()
adjustStockLevelLastMovementAt: string = '';

private readonly _stateKeys: string[] = [
'ui.ws-manager-stock-adjustment.status',
'ui.ws-manager-stock-adjustment.action.queryStockLevels.status',
'ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId',
'ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt',
'ui.ws-manager-stock-adjustment.data.queryStockLevels',
'ui.ws-manager-stock-adjustment.action.adjustStockLevel.status',
'ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity',
'ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt',
];

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.initializeStateFromStore();
subscribe(this._stateKeys, this);
void this.loadQueryStockLevels();
}

disconnectedCallback(): void {
unsubscribe(this._stateKeys, this);
super.disconnectedCallback();
}

handleIcaStateChange(stateKey: string, value: unknown): void {
switch (stateKey) {
case 'ui.ws-manager-stock-adjustment.status':
this.status = (value ?? '') as string;
break;
case 'ui.ws-manager-stock-adjustment.action.queryStockLevels.status':
this.queryStockLevelsState = (value ?? 'idle') as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId':
this.queryStockLevelsStockItemId = (value ?? '') as string;
break;
case 'ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt':
this.queryStockLevelsLastMovementAt = (value ?? '') as string;
break;
case 'ui.ws-manager-stock-adjustment.data.queryStockLevels':
this.queryStockLevelsData = (value ?? []) as CafeFlowQueryStockLevelsOutput;
break;
case 'ui.ws-manager-stock-adjustment.action.adjustStockLevel.status':
this.adjustStockLevelState = (value ?? 'idle') as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity':
this.adjustStockLevelCurrentQuantity = (value ?? '') as number | string;
break;
case 'ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt':
this.adjustStockLevelLastMovementAt = (value ?? '') as string;
break;
default:
break;
}
this.requestUpdate();
}

private initializeStateFromStore(): void {
this.initStateValue('ui.ws-manager-stock-adjustment.status', 'status', '');
this.initStateValue(
'ui.ws-manager-stock-adjustment.action.queryStockLevels.status',
'queryStockLevelsState',
'idle',
);
this.initStateValue(
'ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId',
'queryStockLevelsStockItemId',
'',
);
this.initStateValue(
'ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt',
'queryStockLevelsLastMovementAt',
'',
);
this.initStateValue(
'ui.ws-manager-stock-adjustment.data.queryStockLevels',
'queryStockLevelsData',
[],
);
this.initStateValue(
'ui.ws-manager-stock-adjustment.action.adjustStockLevel.status',
'adjustStockLevelState',
'idle',
);
this.initStateValue(
'ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity',
'adjustStockLevelCurrentQuantity',
'',
);
this.initStateValue(
'ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt',
'adjustStockLevelLastMovementAt',
'',
);
}

private initStateValue<T>(stateKey: string, propertyName: keyof this, fallback: T): void {
const storedValue = getState(stateKey) as T | undefined;
const nextValue = storedValue === undefined ? fallback : storedValue;
(this[propertyName] as unknown as T) = nextValue;
if (storedValue === undefined) {
setState(stateKey, nextValue);
}
}

setQueryStockLevelsStockItemId(value: string): void {
this.queryStockLevelsStockItemId = value;
setState('ui.ws-manager-stock-adjustment.input.queryStockLevels.stockItemId', value);
this.requestUpdate();
}

handleQueryStockLevelsStockItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setQueryStockLevelsStockItemId(value);
}

setQueryStockLevelsLastMovementAt(value: string): void {
this.queryStockLevelsLastMovementAt = value;
setState('ui.ws-manager-stock-adjustment.input.queryStockLevels.lastMovementAt', value);
this.requestUpdate();
}

handleQueryStockLevelsLastMovementAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setQueryStockLevelsLastMovementAt(value);
}

setAdjustStockLevelCurrentQuantity(value: number | string): void {
this.adjustStockLevelCurrentQuantity = value;
setState('ui.ws-manager-stock-adjustment.input.adjustStockLevel.currentQuantity', value);
this.requestUpdate();
}

handleAdjustStockLevelCurrentQuantityChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const rawValue = target?.value ?? '';
const value = rawValue === '' ? '' : Number(rawValue);
this.setAdjustStockLevelCurrentQuantity(value);
}

setAdjustStockLevelLastMovementAt(value: string): void {
this.adjustStockLevelLastMovementAt = value;
setState('ui.ws-manager-stock-adjustment.input.adjustStockLevel.lastMovementAt', value);
this.requestUpdate();
}

handleAdjustStockLevelLastMovementAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
const value = target?.value ?? '';
this.setAdjustStockLevelLastMovementAt(value);
}

async loadQueryStockLevels(signal?: AbortSignal): Promise<void> {
this.queryStockLevelsState = 'loading';
setState('ui.ws-manager-stock-adjustment.action.queryStockLevels.status', 'loading');
const params: CafeFlowQueryStockLevelsInput = {};
if (this.queryStockLevelsStockItemId) {
params.stockItemId = this.queryStockLevelsStockItemId;
}
if (this.queryStockLevelsLastMovementAt) {
params.lastMovementAt = this.queryStockLevelsLastMovementAt;
}
const options: BffClientOptions = { mode: 'silent', signal };
const response = await execBff<CafeFlowQueryStockLevelsOutput>(
'cafeFlow.queryStockLevels.queryStockLevels',
params,
options,
);
if (response.ok) {
const data = response.data ?? [];
this.queryStockLevelsData = data;
setState('ui.ws-manager-stock-adjustment.data.queryStockLevels', data);
this.queryStockLevelsState = 'success';
setState('ui.ws-manager-stock-adjustment.action.queryStockLevels.status', 'success');
return;
}
this.queryStockLevelsData = [];
setState('ui.ws-manager-stock-adjustment.data.queryStockLevels', []);
this.queryStockLevelsState = 'error';
setState('ui.ws-manager-stock-adjustment.action.queryStockLevels.status', 'error');
}

handleQueryStockLevelsClick(event: Event): void {
const _event = event;
void this.loadQueryStockLevels();
}

async adjustStockLevel(signal?: AbortSignal): Promise<void> {
this.adjustStockLevelState = 'loading';
setState('ui.ws-manager-stock-adjustment.action.adjustStockLevel.status', 'loading');
const currentQuantityValue =
typeof this.adjustStockLevelCurrentQuantity === 'number'
? this.adjustStockLevelCurrentQuantity
: Number(this.adjustStockLevelCurrentQuantity || 0);
const params: CafeFlowAdjustStockLevelInput = {
currentQuantity: currentQuantityValue,
lastMovementAt: this.adjustStockLevelLastMovementAt || '',
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowAdjustStockLevelOutput>(
'cafeFlow.adjustStockLevel.adjustStockLevel',
params,
options,
);
if (response.ok) {
this.adjustStockLevelState = 'success';
setState('ui.ws-manager-stock-adjustment.action.adjustStockLevel.status', 'success');
return;
}
this.adjustStockLevelState = 'error';
setState('ui.ws-manager-stock-adjustment.action.adjustStockLevel.status', 'error');
const message = response.error?.message ?? 'Erro ao ajustar estoque.';
throw new Error(message);
}

handleAdjustStockLevelClick(event: Event): void {
const _event = event;
void runBlockingUiAction((signal) => this.adjustStockLevel(signal));
}
}
