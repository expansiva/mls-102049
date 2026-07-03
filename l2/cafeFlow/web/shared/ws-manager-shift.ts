/// <mls fileReference="_102049_/l2/cafeFlow/web/shared/ws-manager-shift.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
CafeFlowCloseShiftInput,
CafeFlowGenerateShiftClosingReportInput,
CafeFlowGenerateShiftClosingReportOutput,
CafeFlowOpenShiftInput,
CafeFlowOpenShiftOutput,
CafeFlowQueryDashboardInput,
CafeFlowQueryDashboardOutput,
} from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-shift.js';

/// **collab_i18n_start**
const message_pt = {
"wsManagerShift.section.shiftLifecycle.title": "Turno Diário – Abertura, Dashboard e Fechamento",
"wsManagerShift.organism.openShift.title": "Abertura do Turno",
"wsManagerShift.intention.openShift.form.title": "Abrir turno",
"wsManagerShift.field.openShift.status": "Status do turno",
"wsManagerShift.field.openShift.openedAt": "Abertura do turno",
"wsManagerShift.field.openShift.closedAt": "Fechamento do turno (opcional)",
"wsManagerShift.action.openShift.submit": "Abrir turno",
"wsManagerShift.organism.queryDashboard.title": "Dashboard do Turno",
"wsManagerShift.intention.queryDashboard.list.title": "Agregação do dashboard",
"wsManagerShift.col.queryDashboard.shiftId": "ID do turno",
"wsManagerShift.col.queryDashboard.status": "Status",
"wsManagerShift.col.queryDashboard.openedAt": "Abertura",
"wsManagerShift.col.queryDashboard.closedAt": "Fechamento",
"wsManagerShift.col.queryDashboard.createdAt": "Criado em",
"wsManagerShift.col.queryDashboard.updatedAt": "Atualizado em",
"wsManagerShift.filter.queryDashboard.shiftId": "ID do turno",
"wsManagerShift.filter.queryDashboard.status": "Status",
"wsManagerShift.filter.queryDashboard.openedAt": "Abertura",
"wsManagerShift.filter.queryDashboard.closedAt": "Fechamento",
"wsManagerShift.filter.queryDashboard.createdAt": "Criado em",
"wsManagerShift.filter.queryDashboard.updatedAt": "Atualizado em",
"wsManagerShift.action.queryDashboard.refresh": "Atualizar dashboard",
"wsManagerShift.organism.closeShift.title": "Fechamento do Turno",
"wsManagerShift.intention.closeShift.form.title": "Fechar turno",
"wsManagerShift.field.closeShift.status": "Status do turno",
"wsManagerShift.field.closeShift.closedAt": "Fechamento do turno",
"wsManagerShift.action.closeShift.submit": "Fechar turno",
"wsManagerShift.organism.generateShiftClosingReport.title": "Relatório de Fechamento",
"wsManagerShift.intention.generateShiftClosingReport.list.title": "Relatório de fechamento do turno",
"wsManagerShift.col.generateShiftClosingReport.shiftId": "ID do turno",
"wsManagerShift.col.generateShiftClosingReport.status": "Status",
"wsManagerShift.col.generateShiftClosingReport.openedAt": "Abertura",
"wsManagerShift.col.generateShiftClosingReport.closedAt": "Fechamento",
"wsManagerShift.col.generateShiftClosingReport.createdAt": "Criado em",
"wsManagerShift.col.generateShiftClosingReport.updatedAt": "Atualizado em",
"wsManagerShift.filter.generateShiftClosingReport.shiftId": "ID do turno",
"wsManagerShift.filter.generateShiftClosingReport.status": "Status",
"wsManagerShift.filter.generateShiftClosingReport.openedAt": "Abertura",
"wsManagerShift.filter.generateShiftClosingReport.closedAt": "Fechamento",
"wsManagerShift.filter.generateShiftClosingReport.createdAt": "Criado em",
"wsManagerShift.filter.generateShiftClosingReport.updatedAt": "Atualizado em",
"wsManagerShift.action.generateShiftClosingReport.run": "Gerar relatório"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

type ActionStatus = 'idle' | 'loading' | 'success' | 'error';
type ShiftStatusInput = CafeFlowOpenShiftInput['status'] | '';

export class CafeFlowWsManagerShiftBase extends CollabLitElement {
@property({ type: String }) status: string = '';
@property({ type: String }) openShiftState: ActionStatus = 'idle';
@property({ type: String }) openShiftStatus: ShiftStatusInput = '';
@property({ type: String }) openShiftOpenedAt: string = '';
@property({ type: String }) openShiftClosedAt: string = '';
@property({ type: String }) queryDashboardState: ActionStatus = 'idle';
@property({ type: String }) queryDashboardShiftId: string = '';
@property({ type: String }) queryDashboardStatus: ShiftStatusInput = '';
@property({ type: String }) queryDashboardOpenedAt: string = '';
@property({ type: String }) queryDashboardClosedAt: string = '';
@property({ type: String }) queryDashboardCreatedAt: string = '';
@property({ type: String }) queryDashboardUpdatedAt: string = '';
@property({ type: Array }) queryDashboardData: CafeFlowQueryDashboardOutput = [];
@property({ type: String }) closeShiftState: ActionStatus = 'idle';
@property({ type: String }) closeShiftStatus: ShiftStatusInput = '';
@property({ type: String }) closeShiftClosedAt: string = '';
@property({ type: String }) generateShiftClosingReportState: ActionStatus = 'idle';
@property({ type: String }) generateShiftClosingReportShiftId: string = '';
@property({ type: String }) generateShiftClosingReportStatus: ShiftStatusInput = '';
@property({ type: String }) generateShiftClosingReportOpenedAt: string = '';
@property({ type: String }) generateShiftClosingReportClosedAt: string = '';
@property({ type: String }) generateShiftClosingReportCreatedAt: string = '';
@property({ type: String }) generateShiftClosingReportUpdatedAt: string = '';
@property({ type: Array }) generateShiftClosingReportData: CafeFlowGenerateShiftClosingReportOutput = [];

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.status = this.readStateValue<string>('ui.ws-manager-shift.status', this.status);
this.openShiftState = this.readStateValue<ActionStatus>('ui.ws-manager-shift.action.openShift.status', this.openShiftState);
this.openShiftStatus = this.readStateValue<ShiftStatusInput>('ui.ws-manager-shift.input.openShift.status', this.openShiftStatus);
this.openShiftOpenedAt = this.readStateValue<string>('ui.ws-manager-shift.input.openShift.openedAt', this.openShiftOpenedAt);
this.openShiftClosedAt = this.readStateValue<string>('ui.ws-manager-shift.input.openShift.closedAt', this.openShiftClosedAt);
this.queryDashboardState = this.readStateValue<ActionStatus>('ui.ws-manager-shift.action.queryDashboard.status', this.queryDashboardState);
this.queryDashboardShiftId = this.readStateValue<string>('ui.ws-manager-shift.input.queryDashboard.shiftId', this.queryDashboardShiftId);
this.queryDashboardStatus = this.readStateValue<ShiftStatusInput>('ui.ws-manager-shift.input.queryDashboard.status', this.queryDashboardStatus);
this.queryDashboardOpenedAt = this.readStateValue<string>('ui.ws-manager-shift.input.queryDashboard.openedAt', this.queryDashboardOpenedAt);
this.queryDashboardClosedAt = this.readStateValue<string>('ui.ws-manager-shift.input.queryDashboard.closedAt', this.queryDashboardClosedAt);
this.queryDashboardCreatedAt = this.readStateValue<string>('ui.ws-manager-shift.input.queryDashboard.createdAt', this.queryDashboardCreatedAt);
this.queryDashboardUpdatedAt = this.readStateValue<string>('ui.ws-manager-shift.input.queryDashboard.updatedAt', this.queryDashboardUpdatedAt);
this.queryDashboardData = this.readStateValue<CafeFlowQueryDashboardOutput>(
'ui.ws-manager-shift.data.queryDashboard',
this.queryDashboardData,
);
this.closeShiftState = this.readStateValue<ActionStatus>('ui.ws-manager-shift.action.closeShift.status', this.closeShiftState);
this.closeShiftStatus = this.readStateValue<ShiftStatusInput>('ui.ws-manager-shift.input.closeShift.status', this.closeShiftStatus);
this.closeShiftClosedAt = this.readStateValue<string>('ui.ws-manager-shift.input.closeShift.closedAt', this.closeShiftClosedAt);
this.generateShiftClosingReportState = this.readStateValue<ActionStatus>(
'ui.ws-manager-shift.action.generateShiftClosingReport.status',
this.generateShiftClosingReportState,
);
this.generateShiftClosingReportShiftId = this.readStateValue<string>(
'ui.ws-manager-shift.input.generateShiftClosingReport.shiftId',
this.generateShiftClosingReportShiftId,
);
this.generateShiftClosingReportStatus = this.readStateValue<ShiftStatusInput>(
'ui.ws-manager-shift.input.generateShiftClosingReport.status',
this.generateShiftClosingReportStatus,
);
this.generateShiftClosingReportOpenedAt = this.readStateValue<string>(
'ui.ws-manager-shift.input.generateShiftClosingReport.openedAt',
this.generateShiftClosingReportOpenedAt,
);
this.generateShiftClosingReportClosedAt = this.readStateValue<string>(
'ui.ws-manager-shift.input.generateShiftClosingReport.closedAt',
this.generateShiftClosingReportClosedAt,
);
this.generateShiftClosingReportCreatedAt = this.readStateValue<string>(
'ui.ws-manager-shift.input.generateShiftClosingReport.createdAt',
this.generateShiftClosingReportCreatedAt,
);
this.generateShiftClosingReportUpdatedAt = this.readStateValue<string>(
'ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt',
this.generateShiftClosingReportUpdatedAt,
);
this.generateShiftClosingReportData = this.readStateValue<CafeFlowGenerateShiftClosingReportOutput>(
'ui.ws-manager-shift.data.generateShiftClosingReport',
this.generateShiftClosingReportData,
);
subscribe([
'ui.ws-manager-shift.status',
'ui.ws-manager-shift.action.openShift.status',
'ui.ws-manager-shift.input.openShift.status',
'ui.ws-manager-shift.input.openShift.openedAt',
'ui.ws-manager-shift.input.openShift.closedAt',
'ui.ws-manager-shift.action.queryDashboard.status',
'ui.ws-manager-shift.input.queryDashboard.shiftId',
'ui.ws-manager-shift.input.queryDashboard.status',
'ui.ws-manager-shift.input.queryDashboard.openedAt',
'ui.ws-manager-shift.input.queryDashboard.closedAt',
'ui.ws-manager-shift.input.queryDashboard.createdAt',
'ui.ws-manager-shift.input.queryDashboard.updatedAt',
'ui.ws-manager-shift.data.queryDashboard',
'ui.ws-manager-shift.action.closeShift.status',
'ui.ws-manager-shift.input.closeShift.status',
'ui.ws-manager-shift.input.closeShift.closedAt',
'ui.ws-manager-shift.action.generateShiftClosingReport.status',
'ui.ws-manager-shift.input.generateShiftClosingReport.shiftId',
'ui.ws-manager-shift.input.generateShiftClosingReport.status',
'ui.ws-manager-shift.input.generateShiftClosingReport.openedAt',
'ui.ws-manager-shift.input.generateShiftClosingReport.closedAt',
'ui.ws-manager-shift.input.generateShiftClosingReport.createdAt',
'ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt',
'ui.ws-manager-shift.data.generateShiftClosingReport',
], this);
void this.loadQueryDashboard();
void this.loadGenerateShiftClosingReport();
}

disconnectedCallback(): void {
unsubscribe([
'ui.ws-manager-shift.status',
'ui.ws-manager-shift.action.openShift.status',
'ui.ws-manager-shift.input.openShift.status',
'ui.ws-manager-shift.input.openShift.openedAt',
'ui.ws-manager-shift.input.openShift.closedAt',
'ui.ws-manager-shift.action.queryDashboard.status',
'ui.ws-manager-shift.input.queryDashboard.shiftId',
'ui.ws-manager-shift.input.queryDashboard.status',
'ui.ws-manager-shift.input.queryDashboard.openedAt',
'ui.ws-manager-shift.input.queryDashboard.closedAt',
'ui.ws-manager-shift.input.queryDashboard.createdAt',
'ui.ws-manager-shift.input.queryDashboard.updatedAt',
'ui.ws-manager-shift.data.queryDashboard',
'ui.ws-manager-shift.action.closeShift.status',
'ui.ws-manager-shift.input.closeShift.status',
'ui.ws-manager-shift.input.closeShift.closedAt',
'ui.ws-manager-shift.action.generateShiftClosingReport.status',
'ui.ws-manager-shift.input.generateShiftClosingReport.shiftId',
'ui.ws-manager-shift.input.generateShiftClosingReport.status',
'ui.ws-manager-shift.input.generateShiftClosingReport.openedAt',
'ui.ws-manager-shift.input.generateShiftClosingReport.closedAt',
'ui.ws-manager-shift.input.generateShiftClosingReport.createdAt',
'ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt',
'ui.ws-manager-shift.data.generateShiftClosingReport',
], this);
super.disconnectedCallback();
}

handleIcaStateChange(stateKey: string, value: unknown): void {
switch (stateKey) {
case 'ui.ws-manager-shift.status':
if (typeof value === 'string') this.status = value;
break;
case 'ui.ws-manager-shift.action.openShift.status':
this.openShiftState = this.asActionStatus(value, this.openShiftState);
break;
case 'ui.ws-manager-shift.input.openShift.status':
if (typeof value === 'string') this.openShiftStatus = value as ShiftStatusInput;
break;
case 'ui.ws-manager-shift.input.openShift.openedAt':
if (typeof value === 'string') this.openShiftOpenedAt = value;
break;
case 'ui.ws-manager-shift.input.openShift.closedAt':
if (typeof value === 'string') this.openShiftClosedAt = value;
break;
case 'ui.ws-manager-shift.action.queryDashboard.status':
this.queryDashboardState = this.asActionStatus(value, this.queryDashboardState);
break;
case 'ui.ws-manager-shift.input.queryDashboard.shiftId':
if (typeof value === 'string') this.queryDashboardShiftId = value;
break;
case 'ui.ws-manager-shift.input.queryDashboard.status':
if (typeof value === 'string') this.queryDashboardStatus = value as ShiftStatusInput;
break;
case 'ui.ws-manager-shift.input.queryDashboard.openedAt':
if (typeof value === 'string') this.queryDashboardOpenedAt = value;
break;
case 'ui.ws-manager-shift.input.queryDashboard.closedAt':
if (typeof value === 'string') this.queryDashboardClosedAt = value;
break;
case 'ui.ws-manager-shift.input.queryDashboard.createdAt':
if (typeof value === 'string') this.queryDashboardCreatedAt = value;
break;
case 'ui.ws-manager-shift.input.queryDashboard.updatedAt':
if (typeof value === 'string') this.queryDashboardUpdatedAt = value;
break;
case 'ui.ws-manager-shift.data.queryDashboard':
if (Array.isArray(value)) this.queryDashboardData = value as CafeFlowQueryDashboardOutput;
break;
case 'ui.ws-manager-shift.action.closeShift.status':
this.closeShiftState = this.asActionStatus(value, this.closeShiftState);
break;
case 'ui.ws-manager-shift.input.closeShift.status':
if (typeof value === 'string') this.closeShiftStatus = value as ShiftStatusInput;
break;
case 'ui.ws-manager-shift.input.closeShift.closedAt':
if (typeof value === 'string') this.closeShiftClosedAt = value;
break;
case 'ui.ws-manager-shift.action.generateShiftClosingReport.status':
this.generateShiftClosingReportState = this.asActionStatus(value, this.generateShiftClosingReportState);
break;
case 'ui.ws-manager-shift.input.generateShiftClosingReport.shiftId':
if (typeof value === 'string') this.generateShiftClosingReportShiftId = value;
break;
case 'ui.ws-manager-shift.input.generateShiftClosingReport.status':
if (typeof value === 'string') this.generateShiftClosingReportStatus = value as ShiftStatusInput;
break;
case 'ui.ws-manager-shift.input.generateShiftClosingReport.openedAt':
if (typeof value === 'string') this.generateShiftClosingReportOpenedAt = value;
break;
case 'ui.ws-manager-shift.input.generateShiftClosingReport.closedAt':
if (typeof value === 'string') this.generateShiftClosingReportClosedAt = value;
break;
case 'ui.ws-manager-shift.input.generateShiftClosingReport.createdAt':
if (typeof value === 'string') this.generateShiftClosingReportCreatedAt = value;
break;
case 'ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt':
if (typeof value === 'string') this.generateShiftClosingReportUpdatedAt = value;
break;
case 'ui.ws-manager-shift.data.generateShiftClosingReport':
if (Array.isArray(value)) this.generateShiftClosingReportData = value as CafeFlowGenerateShiftClosingReportOutput;
break;
default:
break;
}
}

setOpenShiftStatus(value: ShiftStatusInput): void {
this.openShiftStatus = value;
setState('ui.ws-manager-shift.input.openShift.status', value);
this.requestUpdate();
}

handleOpenShiftStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setOpenShiftStatus(value as ShiftStatusInput);
}

setOpenShiftOpenedAt(value: string): void {
this.openShiftOpenedAt = value;
setState('ui.ws-manager-shift.input.openShift.openedAt', value);
this.requestUpdate();
}

handleOpenShiftOpenedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setOpenShiftOpenedAt(value);
}

setOpenShiftClosedAt(value: string): void {
this.openShiftClosedAt = value;
setState('ui.ws-manager-shift.input.openShift.closedAt', value);
this.requestUpdate();
}

handleOpenShiftClosedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setOpenShiftClosedAt(value);
}

setQueryDashboardShiftId(value: string): void {
this.queryDashboardShiftId = value;
setState('ui.ws-manager-shift.input.queryDashboard.shiftId', value);
this.requestUpdate();
}

handleQueryDashboardShiftIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setQueryDashboardShiftId(value);
}

setQueryDashboardStatus(value: ShiftStatusInput): void {
this.queryDashboardStatus = value;
setState('ui.ws-manager-shift.input.queryDashboard.status', value);
this.requestUpdate();
}

handleQueryDashboardStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setQueryDashboardStatus(value as ShiftStatusInput);
}

setQueryDashboardOpenedAt(value: string): void {
this.queryDashboardOpenedAt = value;
setState('ui.ws-manager-shift.input.queryDashboard.openedAt', value);
this.requestUpdate();
}

handleQueryDashboardOpenedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setQueryDashboardOpenedAt(value);
}

setQueryDashboardClosedAt(value: string): void {
this.queryDashboardClosedAt = value;
setState('ui.ws-manager-shift.input.queryDashboard.closedAt', value);
this.requestUpdate();
}

handleQueryDashboardClosedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setQueryDashboardClosedAt(value);
}

setQueryDashboardCreatedAt(value: string): void {
this.queryDashboardCreatedAt = value;
setState('ui.ws-manager-shift.input.queryDashboard.createdAt', value);
this.requestUpdate();
}

handleQueryDashboardCreatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setQueryDashboardCreatedAt(value);
}

setQueryDashboardUpdatedAt(value: string): void {
this.queryDashboardUpdatedAt = value;
setState('ui.ws-manager-shift.input.queryDashboard.updatedAt', value);
this.requestUpdate();
}

handleQueryDashboardUpdatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setQueryDashboardUpdatedAt(value);
}

setCloseShiftStatus(value: ShiftStatusInput): void {
this.closeShiftStatus = value;
setState('ui.ws-manager-shift.input.closeShift.status', value);
this.requestUpdate();
}

handleCloseShiftStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setCloseShiftStatus(value as ShiftStatusInput);
}

setCloseShiftClosedAt(value: string): void {
this.closeShiftClosedAt = value;
setState('ui.ws-manager-shift.input.closeShift.closedAt', value);
this.requestUpdate();
}

handleCloseShiftClosedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setCloseShiftClosedAt(value);
}

setGenerateShiftClosingReportShiftId(value: string): void {
this.generateShiftClosingReportShiftId = value;
setState('ui.ws-manager-shift.input.generateShiftClosingReport.shiftId', value);
this.requestUpdate();
}

handleGenerateShiftClosingReportShiftIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setGenerateShiftClosingReportShiftId(value);
}

setGenerateShiftClosingReportStatus(value: ShiftStatusInput): void {
this.generateShiftClosingReportStatus = value;
setState('ui.ws-manager-shift.input.generateShiftClosingReport.status', value);
this.requestUpdate();
}

handleGenerateShiftClosingReportStatusChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setGenerateShiftClosingReportStatus(value as ShiftStatusInput);
}

setGenerateShiftClosingReportOpenedAt(value: string): void {
this.generateShiftClosingReportOpenedAt = value;
setState('ui.ws-manager-shift.input.generateShiftClosingReport.openedAt', value);
this.requestUpdate();
}

handleGenerateShiftClosingReportOpenedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setGenerateShiftClosingReportOpenedAt(value);
}

setGenerateShiftClosingReportClosedAt(value: string): void {
this.generateShiftClosingReportClosedAt = value;
setState('ui.ws-manager-shift.input.generateShiftClosingReport.closedAt', value);
this.requestUpdate();
}

handleGenerateShiftClosingReportClosedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setGenerateShiftClosingReportClosedAt(value);
}

setGenerateShiftClosingReportCreatedAt(value: string): void {
this.generateShiftClosingReportCreatedAt = value;
setState('ui.ws-manager-shift.input.generateShiftClosingReport.createdAt', value);
this.requestUpdate();
}

handleGenerateShiftClosingReportCreatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setGenerateShiftClosingReportCreatedAt(value);
}

setGenerateShiftClosingReportUpdatedAt(value: string): void {
this.generateShiftClosingReportUpdatedAt = value;
setState('ui.ws-manager-shift.input.generateShiftClosingReport.updatedAt', value);
this.requestUpdate();
}

handleGenerateShiftClosingReportUpdatedAtChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
const value = target?.value ?? '';
this.setGenerateShiftClosingReportUpdatedAt(value);
}

async openShift(options: BffClientOptions = {}): Promise<void> {
this.updateActionStatus('ui.ws-manager-shift.action.openShift.status', 'openShiftState', 'loading');
const params: CafeFlowOpenShiftInput = {
status: this.openShiftStatus as CafeFlowOpenShiftInput['status'],
openedAt: this.openShiftOpenedAt,
};
if (this.openShiftClosedAt) {
params.closedAt = this.openShiftClosedAt;
}
const response = await execBff<CafeFlowOpenShiftOutput>(
'cafeFlow.dailyShiftLifecycle.openShift',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.updateActionStatus('ui.ws-manager-shift.action.openShift.status', 'openShiftState', 'success');
return;
}
this.updateActionStatus('ui.ws-manager-shift.action.openShift.status', 'openShiftState', 'error');
throw new Error(response.error?.message ?? 'Erro ao abrir turno');
}

async handleOpenShiftClick(_event: Event): Promise<void> {
await runBlockingUiAction((signal: AbortSignal) => this.openShift({ signal }));
}

async loadQueryDashboard(options: BffClientOptions = {}): Promise<void> {
this.updateActionStatus('ui.ws-manager-shift.action.queryDashboard.status', 'queryDashboardState', 'loading');
const params: CafeFlowQueryDashboardInput = {};
if (this.queryDashboardShiftId) params.shiftId = this.queryDashboardShiftId;
if (this.queryDashboardStatus) params.status = this.queryDashboardStatus as CafeFlowQueryDashboardInput['status'];
if (this.queryDashboardOpenedAt) params.openedAt = this.queryDashboardOpenedAt;
if (this.queryDashboardClosedAt) params.closedAt = this.queryDashboardClosedAt;
if (this.queryDashboardCreatedAt) params.createdAt = this.queryDashboardCreatedAt;
if (this.queryDashboardUpdatedAt) params.updatedAt = this.queryDashboardUpdatedAt;
const response = await execBff<CafeFlowQueryDashboardOutput>(
'cafeFlow.dailyShiftLifecycle.queryDashboard',
params,
{ ...options, mode: 'silent' },
);
if (response.ok) {
const data = response.data ?? [];
this.queryDashboardData = data;
setState('ui.ws-manager-shift.data.queryDashboard', data);
this.updateActionStatus('ui.ws-manager-shift.action.queryDashboard.status', 'queryDashboardState', 'success');
return;
}
this.queryDashboardData = [];
setState('ui.ws-manager-shift.data.queryDashboard', []);
this.updateActionStatus('ui.ws-manager-shift.action.queryDashboard.status', 'queryDashboardState', 'error');
}

async handleQueryDashboardClick(_event: Event): Promise<void> {
await this.loadQueryDashboard();
}

async closeShift(options: BffClientOptions = {}): Promise<void> {
this.updateActionStatus('ui.ws-manager-shift.action.closeShift.status', 'closeShiftState', 'loading');
const params: CafeFlowCloseShiftInput = {
status: this.closeShiftStatus as CafeFlowCloseShiftInput['status'],
};
if (this.closeShiftClosedAt) {
params.closedAt = this.closeShiftClosedAt;
}
const response = await execBff(
'cafeFlow.dailyShiftLifecycle.closeShift',
params,
{ ...options, mode: 'blocking' },
);
if (response.ok) {
this.updateActionStatus('ui.ws-manager-shift.action.closeShift.status', 'closeShiftState', 'success');
return;
}
this.updateActionStatus('ui.ws-manager-shift.action.closeShift.status', 'closeShiftState', 'error');
throw new Error(response.error?.message ?? 'Erro ao fechar turno');
}

async handleCloseShiftClick(_event: Event): Promise<void> {
await runBlockingUiAction((signal: AbortSignal) => this.closeShift({ signal }));
}

async loadGenerateShiftClosingReport(options: BffClientOptions = {}): Promise<void> {
this.updateActionStatus(
'ui.ws-manager-shift.action.generateShiftClosingReport.status',
'generateShiftClosingReportState',
'loading',
);
const params: CafeFlowGenerateShiftClosingReportInput = {};
if (this.generateShiftClosingReportShiftId) params.shiftId = this.generateShiftClosingReportShiftId;
if (this.generateShiftClosingReportStatus) {
params.status = this.generateShiftClosingReportStatus as CafeFlowGenerateShiftClosingReportInput['status'];
}
if (this.generateShiftClosingReportOpenedAt) params.openedAt = this.generateShiftClosingReportOpenedAt;
if (this.generateShiftClosingReportClosedAt) params.closedAt = this.generateShiftClosingReportClosedAt;
if (this.generateShiftClosingReportCreatedAt) params.createdAt = this.generateShiftClosingReportCreatedAt;
if (this.generateShiftClosingReportUpdatedAt) params.updatedAt = this.generateShiftClosingReportUpdatedAt;
const response = await execBff<CafeFlowGenerateShiftClosingReportOutput>(
'cafeFlow.dailyShiftLifecycle.generateShiftClosingReport',
params,
{ ...options, mode: 'silent' },
);
if (response.ok) {
const data = response.data ?? [];
this.generateShiftClosingReportData = data;
setState('ui.ws-manager-shift.data.generateShiftClosingReport', data);
this.updateActionStatus(
'ui.ws-manager-shift.action.generateShiftClosingReport.status',
'generateShiftClosingReportState',
'success',
);
return;
}
this.generateShiftClosingReportData = [];
setState('ui.ws-manager-shift.data.generateShiftClosingReport', []);
this.updateActionStatus(
'ui.ws-manager-shift.action.generateShiftClosingReport.status',
'generateShiftClosingReportState',
'error',
);
}

async handleGenerateShiftClosingReportClick(_event: Event): Promise<void> {
await this.loadGenerateShiftClosingReport();
}

private readStateValue<TValue>(stateKey: string, fallback: TValue): TValue {
const stored = getState(stateKey) as TValue | undefined;
if (stored === undefined) {
setState(stateKey, fallback);
return fallback;
}
return stored;
}

private asActionStatus(value: unknown, fallback: ActionStatus): ActionStatus {
if (value === 'idle' || value === 'loading' || value === 'success' || value === 'error') {
return value;
}
return fallback;
}

private updateActionStatus(stateKey: string, prop: 'openShiftState' | 'queryDashboardState' | 'closeShiftState' | 'generateShiftClosingReportState',
status: ActionStatus): void {
this[prop] = status;
setState(stateKey, status);
}
}
