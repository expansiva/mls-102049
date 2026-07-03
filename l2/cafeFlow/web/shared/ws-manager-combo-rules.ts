/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
CafeFlowQueryComboRulesInput,
CafeFlowQueryComboRulesOutput,
CafeFlowCreateComboRuleInput,
CafeFlowCreateComboRuleOutput,
CafeFlowUpdateComboRuleInput,
CafeFlowUpdateComboRuleOutput,
CafeFlowDeleteComboRuleInput,
CafeFlowDeleteComboRuleOutput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.js';

/// **collab_i18n_start**
const message_pt = {
"page.title": "Gestão de Regras de Combo e Substituição",
"organism.queryComboRules.title": "Consultar Regras de Combo",
"organism.createComboRule.title": "Criar Regra de Combo",
"organism.updateComboRule.title": "Editar Regra de Combo",
"organism.deleteComboRule.title": "Remover Regra de Combo",
"intention.queryList.title": "Regras de Combo Cadastradas",
"intention.createForm.title": "Nova Regra de Combo",
"intention.updateForm.title": "Alterar Regra de Combo",
"intention.deleteForm.title": "Confirmar Exclusão de Regra",
"action.queryComboRules.label": "Buscar",
"action.createComboRule.label": "Salvar",
"action.updateComboRule.label": "Salvar Alterações",
"action.deleteComboRule.label": "Confirmar Exclusão",
"field.comboRuleId.label": "ID da Regra",
"field.menuItemId.label": "Item do Cardápio",
"field.name.label": "Nome",
"field.description.label": "Descrição",
"field.priceDifference.label": "Diferença de Preço",
"field.status.label": "Situação",
"field.createdAt.label": "Criado em",
"field.updatedAt.label": "Atualizado em",
"empty.queryComboRules.label": "Nenhuma regra de combo encontrada",
"sec.main.title": "Gestão de Regras de Combo e Substituição"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class CafeFlowWsManagerComboRulesBase extends CollabLitElement {
@property() status: string = '';
@property() queryComboRulesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property() queryComboRulesComboRuleId: string = '';
@property() queryComboRulesMenuItemId: string = '';
@property() queryComboRulesName: string = '';
@property() queryComboRulesStatus: string = '';
@property() queryComboRulesCreatedAt: string = '';
@property() queryComboRulesUpdatedAt: string = '';
@property() queryComboRulesData: CafeFlowQueryComboRulesOutput = [];
@property() createComboRuleState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property() createComboRuleName: string = '';
@property() createComboRuleDescription: string = '';
@property() createComboRulePriceDifference: number | string = '';
@property() createComboRuleStatus: string = '';
@property() updateComboRuleState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property() updateComboRuleName: string = '';
@property() updateComboRuleDescription: string = '';
@property() updateComboRulePriceDifference: number | string = '';
@property() updateComboRuleStatus: string = '';
@property() deleteComboRuleState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
@property() deleteComboRuleComboRuleId: string = '';
@property() deleteComboRuleMenuItemId: string = '';
@property() deleteComboRuleName: string = '';
@property() deleteComboRuleDescription: string = '';
@property() deleteComboRulePriceDifference: number | string = '';
@property() deleteComboRuleStatus: string = '';
@property() OutputCreateComboRule: CafeFlowCreateComboRuleOutput | null = null;
@property() OutputUpdateComboRule: CafeFlowUpdateComboRuleOutput | null = null;
@property() OutputDeleteComboRule: CafeFlowDeleteComboRuleOutput | null = null;

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.initializeState();
this.subscribeToState();
void this.loadQueryComboRules();
}

disconnectedCallback(): void {
this.unsubscribeFromState();
super.disconnectedCallback();
}

protected handleIcaStateChange(stateKey: string, value: unknown): void {
switch (stateKey) {
case 'ui.ws-manager-combo-rules.status':
this.status = value as string;
break;
case 'ui.ws-manager-combo-rules.action.queryComboRules.status':
this.queryComboRulesState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId':
this.queryComboRulesComboRuleId = value as string;
break;
case 'ui.ws-manager-combo-rules.input.queryComboRules.menuItemId':
this.queryComboRulesMenuItemId = value as string;
break;
case 'ui.ws-manager-combo-rules.input.queryComboRules.name':
this.queryComboRulesName = value as string;
break;
case 'ui.ws-manager-combo-rules.input.queryComboRules.status':
this.queryComboRulesStatus = value as string;
break;
case 'ui.ws-manager-combo-rules.input.queryComboRules.createdAt':
this.queryComboRulesCreatedAt = value as string;
break;
case 'ui.ws-manager-combo-rules.input.queryComboRules.updatedAt':
this.queryComboRulesUpdatedAt = value as string;
break;
case 'ui.ws-manager-combo-rules.data.queryComboRules':
this.queryComboRulesData = value as CafeFlowQueryComboRulesOutput;
break;
case 'ui.ws-manager-combo-rules.action.createComboRule.status':
this.createComboRuleState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-manager-combo-rules.input.createComboRule.name':
this.createComboRuleName = value as string;
break;
case 'ui.ws-manager-combo-rules.input.createComboRule.description':
this.createComboRuleDescription = value as string;
break;
case 'ui.ws-manager-combo-rules.input.createComboRule.priceDifference':
this.createComboRulePriceDifference = value as number | string;
break;
case 'ui.ws-manager-combo-rules.input.createComboRule.status':
this.createComboRuleStatus = value as string;
break;
case 'ui.ws-manager-combo-rules.action.updateComboRule.status':
this.updateComboRuleState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-manager-combo-rules.input.updateComboRule.name':
this.updateComboRuleName = value as string;
break;
case 'ui.ws-manager-combo-rules.input.updateComboRule.description':
this.updateComboRuleDescription = value as string;
break;
case 'ui.ws-manager-combo-rules.input.updateComboRule.priceDifference':
this.updateComboRulePriceDifference = value as number | string;
break;
case 'ui.ws-manager-combo-rules.input.updateComboRule.status':
this.updateComboRuleStatus = value as string;
break;
case 'ui.ws-manager-combo-rules.action.deleteComboRule.status':
this.deleteComboRuleState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId':
this.deleteComboRuleComboRuleId = value as string;
break;
case 'ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId':
this.deleteComboRuleMenuItemId = value as string;
break;
case 'ui.ws-manager-combo-rules.input.deleteComboRule.name':
this.deleteComboRuleName = value as string;
break;
case 'ui.ws-manager-combo-rules.input.deleteComboRule.description':
this.deleteComboRuleDescription = value as string;
break;
case 'ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference':
this.deleteComboRulePriceDifference = value as number | string;
break;
case 'ui.ws-manager-combo-rules.input.deleteComboRule.status':
this.deleteComboRuleStatus = value as string;
break;
case 'ui.ws-manager-combo-rules.output.createComboRule':
this.OutputCreateComboRule = value as CafeFlowCreateComboRuleOutput | null;
break;
case 'ui.ws-manager-combo-rules.output.updateComboRule':
this.OutputUpdateComboRule = value as CafeFlowUpdateComboRuleOutput | null;
break;
case 'ui.ws-manager-combo-rules.output.deleteComboRule':
this.OutputDeleteComboRule = value as CafeFlowDeleteComboRuleOutput | null;
break;
default:
break;
}
this.requestUpdate();
}

private initializeState(): void {
this.status = this.readState('ui.ws-manager-combo-rules.status', this.status);
this.queryComboRulesState = this.readState('ui.ws-manager-combo-rules.action.queryComboRules.status', this.queryComboRulesState);
this.queryComboRulesComboRuleId = this.readState('ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId', this.queryComboRulesComboRuleId);
this.queryComboRulesMenuItemId = this.readState('ui.ws-manager-combo-rules.input.queryComboRules.menuItemId', this.queryComboRulesMenuItemId);
this.queryComboRulesName = this.readState('ui.ws-manager-combo-rules.input.queryComboRules.name', this.queryComboRulesName);
this.queryComboRulesStatus = this.readState('ui.ws-manager-combo-rules.input.queryComboRules.status', this.queryComboRulesStatus);
this.queryComboRulesCreatedAt = this.readState('ui.ws-manager-combo-rules.input.queryComboRules.createdAt', this.queryComboRulesCreatedAt);
this.queryComboRulesUpdatedAt = this.readState('ui.ws-manager-combo-rules.input.queryComboRules.updatedAt', this.queryComboRulesUpdatedAt);
this.queryComboRulesData = this.readState('ui.ws-manager-combo-rules.data.queryComboRules', this.queryComboRulesData);
this.createComboRuleState = this.readState('ui.ws-manager-combo-rules.action.createComboRule.status', this.createComboRuleState);
this.createComboRuleName = this.readState('ui.ws-manager-combo-rules.input.createComboRule.name', this.createComboRuleName);
this.createComboRuleDescription = this.readState('ui.ws-manager-combo-rules.input.createComboRule.description', this.createComboRuleDescription);
this.createComboRulePriceDifference = this.readState('ui.ws-manager-combo-rules.input.createComboRule.priceDifference', this.createComboRulePriceDifference);
this.createComboRuleStatus = this.readState('ui.ws-manager-combo-rules.input.createComboRule.status', this.createComboRuleStatus);
this.updateComboRuleState = this.readState('ui.ws-manager-combo-rules.action.updateComboRule.status', this.updateComboRuleState);
this.updateComboRuleName = this.readState('ui.ws-manager-combo-rules.input.updateComboRule.name', this.updateComboRuleName);
this.updateComboRuleDescription = this.readState('ui.ws-manager-combo-rules.input.updateComboRule.description', this.updateComboRuleDescription);
this.updateComboRulePriceDifference = this.readState('ui.ws-manager-combo-rules.input.updateComboRule.priceDifference', this.updateComboRulePriceDifference);
this.updateComboRuleStatus = this.readState('ui.ws-manager-combo-rules.input.updateComboRule.status', this.updateComboRuleStatus);
this.deleteComboRuleState = this.readState('ui.ws-manager-combo-rules.action.deleteComboRule.status', this.deleteComboRuleState);
this.deleteComboRuleComboRuleId = this.readState('ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId', this.deleteComboRuleComboRuleId);
this.deleteComboRuleMenuItemId = this.readState('ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId', this.deleteComboRuleMenuItemId);
this.deleteComboRuleName = this.readState('ui.ws-manager-combo-rules.input.deleteComboRule.name', this.deleteComboRuleName);
this.deleteComboRuleDescription = this.readState('ui.ws-manager-combo-rules.input.deleteComboRule.description', this.deleteComboRuleDescription);
this.deleteComboRulePriceDifference = this.readState('ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference', this.deleteComboRulePriceDifference);
this.deleteComboRuleStatus = this.readState('ui.ws-manager-combo-rules.input.deleteComboRule.status', this.deleteComboRuleStatus);
this.OutputCreateComboRule = this.readState('ui.ws-manager-combo-rules.output.createComboRule', this.OutputCreateComboRule);
this.OutputUpdateComboRule = this.readState('ui.ws-manager-combo-rules.output.updateComboRule', this.OutputUpdateComboRule);
this.OutputDeleteComboRule = this.readState('ui.ws-manager-combo-rules.output.deleteComboRule', this.OutputDeleteComboRule);
}

private readState<T>(key: string, fallback: T): T {
const stored = getState(key) as T | undefined;
if (stored !== undefined) {
return stored;
}
setState(key, fallback);
return fallback;
}

private subscribeToState(): void {
subscribe([
'ui.ws-manager-combo-rules.status',
'ui.ws-manager-combo-rules.action.queryComboRules.status',
'ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId',
'ui.ws-manager-combo-rules.input.queryComboRules.menuItemId',
'ui.ws-manager-combo-rules.input.queryComboRules.name',
'ui.ws-manager-combo-rules.input.queryComboRules.status',
'ui.ws-manager-combo-rules.input.queryComboRules.createdAt',
'ui.ws-manager-combo-rules.input.queryComboRules.updatedAt',
'ui.ws-manager-combo-rules.data.queryComboRules',
'ui.ws-manager-combo-rules.action.createComboRule.status',
'ui.ws-manager-combo-rules.input.createComboRule.name',
'ui.ws-manager-combo-rules.input.createComboRule.description',
'ui.ws-manager-combo-rules.input.createComboRule.priceDifference',
'ui.ws-manager-combo-rules.input.createComboRule.status',
'ui.ws-manager-combo-rules.action.updateComboRule.status',
'ui.ws-manager-combo-rules.input.updateComboRule.name',
'ui.ws-manager-combo-rules.input.updateComboRule.description',
'ui.ws-manager-combo-rules.input.updateComboRule.priceDifference',
'ui.ws-manager-combo-rules.input.updateComboRule.status',
'ui.ws-manager-combo-rules.action.deleteComboRule.status',
'ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId',
'ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId',
'ui.ws-manager-combo-rules.input.deleteComboRule.name',
'ui.ws-manager-combo-rules.input.deleteComboRule.description',
'ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference',
'ui.ws-manager-combo-rules.input.deleteComboRule.status',
'ui.ws-manager-combo-rules.output.createComboRule',
'ui.ws-manager-combo-rules.output.updateComboRule',
'ui.ws-manager-combo-rules.output.deleteComboRule'
], this);
}

private unsubscribeFromState(): void {
unsubscribe([
'ui.ws-manager-combo-rules.status',
'ui.ws-manager-combo-rules.action.queryComboRules.status',
'ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId',
'ui.ws-manager-combo-rules.input.queryComboRules.menuItemId',
'ui.ws-manager-combo-rules.input.queryComboRules.name',
'ui.ws-manager-combo-rules.input.queryComboRules.status',
'ui.ws-manager-combo-rules.input.queryComboRules.createdAt',
'ui.ws-manager-combo-rules.input.queryComboRules.updatedAt',
'ui.ws-manager-combo-rules.data.queryComboRules',
'ui.ws-manager-combo-rules.action.createComboRule.status',
'ui.ws-manager-combo-rules.input.createComboRule.name',
'ui.ws-manager-combo-rules.input.createComboRule.description',
'ui.ws-manager-combo-rules.input.createComboRule.priceDifference',
'ui.ws-manager-combo-rules.input.createComboRule.status',
'ui.ws-manager-combo-rules.action.updateComboRule.status',
'ui.ws-manager-combo-rules.input.updateComboRule.name',
'ui.ws-manager-combo-rules.input.updateComboRule.description',
'ui.ws-manager-combo-rules.input.updateComboRule.priceDifference',
'ui.ws-manager-combo-rules.input.updateComboRule.status',
'ui.ws-manager-combo-rules.action.deleteComboRule.status',
'ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId',
'ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId',
'ui.ws-manager-combo-rules.input.deleteComboRule.name',
'ui.ws-manager-combo-rules.input.deleteComboRule.description',
'ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference',
'ui.ws-manager-combo-rules.input.deleteComboRule.status',
'ui.ws-manager-combo-rules.output.createComboRule',
'ui.ws-manager-combo-rules.output.updateComboRule',
'ui.ws-manager-combo-rules.output.deleteComboRule'
], this);
}

async loadQueryComboRules(): Promise<void> {
this.queryComboRulesState = 'loading';
setState('ui.ws-manager-combo-rules.action.queryComboRules.status', this.queryComboRulesState);
const params: CafeFlowQueryComboRulesInput = {
comboRuleId: this.queryComboRulesComboRuleId || undefined,
menuItemId: this.queryComboRulesMenuItemId || undefined,
name: this.queryComboRulesName || undefined,
status: this.queryComboRulesStatus ? (this.queryComboRulesStatus as 'active' | 'inactive') : undefined,
createdAt: this.queryComboRulesCreatedAt || undefined,
updatedAt: this.queryComboRulesUpdatedAt || undefined,
};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<CafeFlowQueryComboRulesOutput>('cafeFlow.queryComboRules.queryComboRules', params, options);
if (!response.ok) {
this.queryComboRulesState = 'error';
setState('ui.ws-manager-combo-rules.action.queryComboRules.status', this.queryComboRulesState);
throw response.error ?? new Error('Falha ao consultar regras de combo.');
}
const data = response.data ?? [];
this.queryComboRulesData = data;
setState('ui.ws-manager-combo-rules.data.queryComboRules', data);
this.queryComboRulesState = 'success';
setState('ui.ws-manager-combo-rules.action.queryComboRules.status', this.queryComboRulesState);
}

handleQueryComboRulesClick(_event: Event): void {
void this.loadQueryComboRules();
}

async createComboRule(signal?: AbortSignal): Promise<void> {
this.createComboRuleState = 'loading';
setState('ui.ws-manager-combo-rules.action.createComboRule.status', this.createComboRuleState);
const priceDifference = typeof this.createComboRulePriceDifference === 'string'
? Number(this.createComboRulePriceDifference)
: this.createComboRulePriceDifference;
const params: CafeFlowCreateComboRuleInput = {
name: this.createComboRuleName,
description: this.createComboRuleDescription || undefined,
priceDifference,
status: this.createComboRuleStatus as 'active' | 'inactive',
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowCreateComboRuleOutput>('cafeFlow.createComboRule.createComboRule', params, options);
if (!response.ok) {
this.createComboRuleState = 'error';
setState('ui.ws-manager-combo-rules.action.createComboRule.status', this.createComboRuleState);
throw response.error ?? new Error('Falha ao criar regra de combo.');
}
this.OutputCreateComboRule = response.data;
setState('ui.ws-manager-combo-rules.output.createComboRule', this.OutputCreateComboRule);
this.createComboRuleState = 'success';
setState('ui.ws-manager-combo-rules.action.createComboRule.status', this.createComboRuleState);
}

handleCreateComboRuleClick(_event: Event): void {
void runBlockingUiAction((signal: AbortSignal) => this.createComboRule(signal));
}

async updateComboRule(signal?: AbortSignal): Promise<void> {
this.updateComboRuleState = 'loading';
setState('ui.ws-manager-combo-rules.action.updateComboRule.status', this.updateComboRuleState);
const priceDifference = typeof this.updateComboRulePriceDifference === 'string'
? Number(this.updateComboRulePriceDifference)
: this.updateComboRulePriceDifference;
const params: CafeFlowUpdateComboRuleInput = {
name: this.updateComboRuleName,
description: this.updateComboRuleDescription || undefined,
priceDifference,
status: this.updateComboRuleStatus as 'active' | 'inactive',
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowUpdateComboRuleOutput>('cafeFlow.updateComboRule.updateComboRule', params, options);
if (!response.ok) {
this.updateComboRuleState = 'error';
setState('ui.ws-manager-combo-rules.action.updateComboRule.status', this.updateComboRuleState);
throw response.error ?? new Error('Falha ao atualizar regra de combo.');
}
this.OutputUpdateComboRule = response.data;
setState('ui.ws-manager-combo-rules.output.updateComboRule', this.OutputUpdateComboRule);
this.updateComboRuleState = 'success';
setState('ui.ws-manager-combo-rules.action.updateComboRule.status', this.updateComboRuleState);
}

handleUpdateComboRuleClick(_event: Event): void {
void runBlockingUiAction((signal: AbortSignal) => this.updateComboRule(signal));
}

async deleteComboRule(signal?: AbortSignal): Promise<void> {
this.deleteComboRuleState = 'loading';
setState('ui.ws-manager-combo-rules.action.deleteComboRule.status', this.deleteComboRuleState);
const priceDifference = typeof this.deleteComboRulePriceDifference === 'string'
? Number(this.deleteComboRulePriceDifference)
: this.deleteComboRulePriceDifference;
const params: CafeFlowDeleteComboRuleInput = {
comboRuleId: this.deleteComboRuleComboRuleId || undefined,
menuItemId: this.deleteComboRuleMenuItemId || undefined,
name: this.deleteComboRuleName,
description: this.deleteComboRuleDescription || undefined,
priceDifference,
status: this.deleteComboRuleStatus as 'active' | 'inactive',
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<CafeFlowDeleteComboRuleOutput>('cafeFlow.deleteComboRule.deleteComboRule', params, options);
if (!response.ok) {
this.deleteComboRuleState = 'error';
setState('ui.ws-manager-combo-rules.action.deleteComboRule.status', this.deleteComboRuleState);
throw response.error ?? new Error('Falha ao remover regra de combo.');
}
this.OutputDeleteComboRule = response.data;
setState('ui.ws-manager-combo-rules.output.deleteComboRule', this.OutputDeleteComboRule);
this.deleteComboRuleState = 'success';
setState('ui.ws-manager-combo-rules.action.deleteComboRule.status', this.deleteComboRuleState);
}

handleDeleteComboRuleClick(_event: Event): void {
void runBlockingUiAction((signal: AbortSignal) => this.deleteComboRule(signal));
}

setQueryComboRulesComboRuleId(value: string): void {
this.queryComboRulesComboRuleId = value;
setState('ui.ws-manager-combo-rules.input.queryComboRules.comboRuleId', value);
this.requestUpdate();
}

handleQueryComboRulesComboRuleIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setQueryComboRulesComboRuleId(target.value);
}

setQueryComboRulesMenuItemId(value: string): void {
this.queryComboRulesMenuItemId = value;
setState('ui.ws-manager-combo-rules.input.queryComboRules.menuItemId', value);
this.requestUpdate();
}

handleQueryComboRulesMenuItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setQueryComboRulesMenuItemId(target.value);
}

setQueryComboRulesName(value: string): void {
this.queryComboRulesName = value;
setState('ui.ws-manager-combo-rules.input.queryComboRules.name', value);
this.requestUpdate();
}

handleQueryComboRulesNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setQueryComboRulesName(target.value);
}

setQueryComboRulesStatus(value: string): void {
this.queryComboRulesStatus = value;
setState('ui.ws-manager-combo-rules.input.queryComboRules.status', value);
this.requestUpdate();
}

handleQueryComboRulesStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setQueryComboRulesStatus(target.value);
}

setQueryComboRulesCreatedAt(value: string): void {
this.queryComboRulesCreatedAt = value;
setState('ui.ws-manager-combo-rules.input.queryComboRules.createdAt', value);
this.requestUpdate();
}

handleQueryComboRulesCreatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setQueryComboRulesCreatedAt(target.value);
}

setQueryComboRulesUpdatedAt(value: string): void {
this.queryComboRulesUpdatedAt = value;
setState('ui.ws-manager-combo-rules.input.queryComboRules.updatedAt', value);
this.requestUpdate();
}

handleQueryComboRulesUpdatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setQueryComboRulesUpdatedAt(target.value);
}

setCreateComboRuleName(value: string): void {
this.createComboRuleName = value;
setState('ui.ws-manager-combo-rules.input.createComboRule.name', value);
this.requestUpdate();
}

handleCreateComboRuleNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setCreateComboRuleName(target.value);
}

setCreateComboRuleDescription(value: string): void {
this.createComboRuleDescription = value;
setState('ui.ws-manager-combo-rules.input.createComboRule.description', value);
this.requestUpdate();
}

handleCreateComboRuleDescriptionChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setCreateComboRuleDescription(target.value);
}

setCreateComboRulePriceDifference(value: string): void {
this.createComboRulePriceDifference = value;
setState('ui.ws-manager-combo-rules.input.createComboRule.priceDifference', value);
this.requestUpdate();
}

handleCreateComboRulePriceDifferenceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setCreateComboRulePriceDifference(target.value);
}

setCreateComboRuleStatus(value: string): void {
this.createComboRuleStatus = value;
setState('ui.ws-manager-combo-rules.input.createComboRule.status', value);
this.requestUpdate();
}

handleCreateComboRuleStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setCreateComboRuleStatus(target.value);
}

setUpdateComboRuleName(value: string): void {
this.updateComboRuleName = value;
setState('ui.ws-manager-combo-rules.input.updateComboRule.name', value);
this.requestUpdate();
}

handleUpdateComboRuleNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setUpdateComboRuleName(target.value);
}

setUpdateComboRuleDescription(value: string): void {
this.updateComboRuleDescription = value;
setState('ui.ws-manager-combo-rules.input.updateComboRule.description', value);
this.requestUpdate();
}

handleUpdateComboRuleDescriptionChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setUpdateComboRuleDescription(target.value);
}

setUpdateComboRulePriceDifference(value: string): void {
this.updateComboRulePriceDifference = value;
setState('ui.ws-manager-combo-rules.input.updateComboRule.priceDifference', value);
this.requestUpdate();
}

handleUpdateComboRulePriceDifferenceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setUpdateComboRulePriceDifference(target.value);
}

setUpdateComboRuleStatus(value: string): void {
this.updateComboRuleStatus = value;
setState('ui.ws-manager-combo-rules.input.updateComboRule.status', value);
this.requestUpdate();
}

handleUpdateComboRuleStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setUpdateComboRuleStatus(target.value);
}

setDeleteComboRuleComboRuleId(value: string): void {
this.deleteComboRuleComboRuleId = value;
setState('ui.ws-manager-combo-rules.input.deleteComboRule.comboRuleId', value);
this.requestUpdate();
}

handleDeleteComboRuleComboRuleIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setDeleteComboRuleComboRuleId(target.value);
}

setDeleteComboRuleMenuItemId(value: string): void {
this.deleteComboRuleMenuItemId = value;
setState('ui.ws-manager-combo-rules.input.deleteComboRule.menuItemId', value);
this.requestUpdate();
}

handleDeleteComboRuleMenuItemIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setDeleteComboRuleMenuItemId(target.value);
}

setDeleteComboRuleName(value: string): void {
this.deleteComboRuleName = value;
setState('ui.ws-manager-combo-rules.input.deleteComboRule.name', value);
this.requestUpdate();
}

handleDeleteComboRuleNameChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setDeleteComboRuleName(target.value);
}

setDeleteComboRuleDescription(value: string): void {
this.deleteComboRuleDescription = value;
setState('ui.ws-manager-combo-rules.input.deleteComboRule.description', value);
this.requestUpdate();
}

handleDeleteComboRuleDescriptionChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setDeleteComboRuleDescription(target.value);
}

setDeleteComboRulePriceDifference(value: string): void {
this.deleteComboRulePriceDifference = value;
setState('ui.ws-manager-combo-rules.input.deleteComboRule.priceDifference', value);
this.requestUpdate();
}

handleDeleteComboRulePriceDifferenceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setDeleteComboRulePriceDifference(target.value);
}

setDeleteComboRuleStatus(value: string): void {
this.deleteComboRuleStatus = value;
setState('ui.ws-manager-combo-rules.input.deleteComboRule.status', value);
this.requestUpdate();
}

handleDeleteComboRuleStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null;
if (!target) return;
this.setDeleteComboRuleStatus(target.value);
}
}
