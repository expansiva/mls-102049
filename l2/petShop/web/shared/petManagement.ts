/// <mls fileReference="_102049_/l2/petShop/web/shared/petManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
PetShopBrowseAdoptablePetsAdminInput,
PetShopBrowseAdoptablePetsAdminOutput,
PetShopCreateAdoptablePetInput,
PetShopCreateAdoptablePetOutput,
PetShopUpdateAdoptablePetInput,
PetShopUpdateAdoptablePetOutput,
} from '/_102049_/l2/petShop/web/contracts/petManagement.js';

/// **collab_i18n_start**
const message_pt = {
"petManagement.section.title": "Gestão de pets para adoção",
"petManagement.list.title": "Pets cadastrados",
"petManagement.list.empty": "Nenhum pet cadastrado ainda. Clique em \"Cadastrar pet\" para adicionar o primeiro.",
"petManagement.create.title": "Cadastrar novo pet",
"petManagement.create.empty": "Preencha os dados do pet para cadastrá-lo como disponível para adoção.",
"petManagement.update.title": "Editar pet",
"petManagement.update.empty": "Selecione um pet na lista para editar suas informações e disponibilidade.",
"petManagement.summary.title": "Resumo",
"petManagement.summary.sectionTitle": "Resumo da gestão",
"petManagement.summary.empty": "Nenhuma ação realizada nesta sessão ainda.",
"petManagement.field.name": "Nome",
"petManagement.field.age": "Idade (anos)",
"petManagement.field.description": "Descrição",
"petManagement.field.photoUrl": "Foto (URL)",
"petManagement.field.status": "Status",
"petManagement.field.adoptablePetId": "ID do pet",
"petManagement.field.createdAt": "Cadastrado em",
"petManagement.field.updatedAt": "Atualizado em",
"petManagement.filter.statusFilter": "Filtrar por status",
"petManagement.action.create": "Cadastrar pet",
"petManagement.action.create.submit": "Salvar cadastro",
"petManagement.action.update": "Editar",
"petManagement.action.update.submit": "Salvar alterações",
"action.createAdoptablePet.success": "Pet cadastrado com sucesso e disponível na galeria pública.",
"action.createAdoptablePet.error": "Não foi possível cadastrar o pet. Verifique os dados e tente novamente.",
"action.updateAdoptablePet.success": "Pet atualizado com sucesso. A disponibilidade na galeria pública foi ajustada.",
"action.updateAdoptablePet.error": "Não foi possível atualizar o pet. Verifique os dados e tente novamente.",
"org.browse.pets.title": "Listar pets para adoção cadastrados com filtros de status e ações por linha",
"org.create.pet.title": "Cadastrar novo pet para adoção com nome, idade, descrição e foto",
"org.update.pet.title": "Editar dados do pet selecionado e controlar disponibilidade na galeria pública",
"org.pet.summary.title": "Revisar o contexto e o resultado das ações principais da página"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopPetManagementBase extends CollabLitElement {
@property()
status: string = '';

@property()
browseAdoptablePetsAdminState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
browseAdoptablePetsAdminStatusFilter: "available" | "unavailable" | '' = '';

@property()
browseAdoptablePetsAdminData: PetShopBrowseAdoptablePetsAdminOutput = this.createBrowseAdoptablePetsAdminDefault();

@property()
createAdoptablePetState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
createAdoptablePetName: string = '';

@property()
createAdoptablePetAge: number | '' = '';

@property()
createAdoptablePetDescription: string = '';

@property()
createAdoptablePetPhotoUrl: string = '';

@property()
createAdoptablePetOutput: PetShopCreateAdoptablePetOutput | null = null;

@property()
createAdoptablePetError: string = '';

@property()
updateAdoptablePetState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

@property()
updateAdoptablePetAdoptablePetId: string = '';

@property()
updateAdoptablePetName: string = '';

@property()
updateAdoptablePetAge: number | '' = '';

@property()
updateAdoptablePetDescription: string = '';

@property()
updateAdoptablePetPhotoUrl: string = '';

@property()
updateAdoptablePetStatus: "available" | "unavailable" | '' = '';

@property()
updateAdoptablePetOutput: PetShopUpdateAdoptablePetOutput | null = null;

@property()
updateAdoptablePetError: string = '';

protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

connectedCallback(): void {
super.connectedCallback();
this.status = (getState('ui.petManagement.status') as string | undefined) ?? '';
this.browseAdoptablePetsAdminState = (getState('ui.petManagement.action.browseAdoptablePetsAdmin.status') as 'idle' | 'loading' | 'success' | 'error' | undefined) ?? 'idle';
this.browseAdoptablePetsAdminStatusFilter = (getState('ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter') as "available" | "unavailable" | '' | undefined) ?? '';
const browseData = getState('ui.petManagement.data.browseAdoptablePetsAdmin') as PetShopBrowseAdoptablePetsAdminOutput | null | undefined;
this.browseAdoptablePetsAdminData = browseData ?? this.createBrowseAdoptablePetsAdminDefault();
this.createAdoptablePetState = (getState('ui.petManagement.action.createAdoptablePet.status') as 'idle' | 'loading' | 'success' | 'error' | undefined) ?? 'idle';
this.createAdoptablePetName = (getState('ui.petManagement.input.createAdoptablePet.name') as string | undefined) ?? '';
this.createAdoptablePetAge = (getState('ui.petManagement.input.createAdoptablePet.age') as number | '' | undefined) ?? '';
this.createAdoptablePetDescription = (getState('ui.petManagement.input.createAdoptablePet.description') as string | undefined) ?? '';
this.createAdoptablePetPhotoUrl = (getState('ui.petManagement.input.createAdoptablePet.photoUrl') as string | undefined) ?? '';
this.createAdoptablePetOutput = (getState('ui.petManagement.output.createAdoptablePet') as PetShopCreateAdoptablePetOutput | null | undefined) ?? null;
this.createAdoptablePetError = (getState('ui.petManagement.action.createAdoptablePet.error') as string | undefined) ?? '';
this.updateAdoptablePetState = (getState('ui.petManagement.action.updateAdoptablePet.status') as 'idle' | 'loading' | 'success' | 'error' | undefined) ?? 'idle';
this.updateAdoptablePetAdoptablePetId = (getState('ui.petManagement.input.updateAdoptablePet.adoptablePetId') as string | undefined) ?? '';
this.updateAdoptablePetName = (getState('ui.petManagement.input.updateAdoptablePet.name') as string | undefined) ?? '';
this.updateAdoptablePetAge = (getState('ui.petManagement.input.updateAdoptablePet.age') as number | '' | undefined) ?? '';
this.updateAdoptablePetDescription = (getState('ui.petManagement.input.updateAdoptablePet.description') as string | undefined) ?? '';
this.updateAdoptablePetPhotoUrl = (getState('ui.petManagement.input.updateAdoptablePet.photoUrl') as string | undefined) ?? '';
this.updateAdoptablePetStatus = (getState('ui.petManagement.input.updateAdoptablePet.status') as "available" | "unavailable" | '' | undefined) ?? '';
this.updateAdoptablePetOutput = (getState('ui.petManagement.output.updateAdoptablePet') as PetShopUpdateAdoptablePetOutput | null | undefined) ?? null;
this.updateAdoptablePetError = (getState('ui.petManagement.action.updateAdoptablePet.error') as string | undefined) ?? '';
subscribe([
'ui.petManagement.status',
'ui.petManagement.action.browseAdoptablePetsAdmin.status',
'ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter',
'ui.petManagement.data.browseAdoptablePetsAdmin',
'ui.petManagement.action.createAdoptablePet.status',
'ui.petManagement.input.createAdoptablePet.name',
'ui.petManagement.input.createAdoptablePet.age',
'ui.petManagement.input.createAdoptablePet.description',
'ui.petManagement.input.createAdoptablePet.photoUrl',
'ui.petManagement.output.createAdoptablePet',
'ui.petManagement.action.createAdoptablePet.error',
'ui.petManagement.action.updateAdoptablePet.status',
'ui.petManagement.input.updateAdoptablePet.adoptablePetId',
'ui.petManagement.input.updateAdoptablePet.name',
'ui.petManagement.input.updateAdoptablePet.age',
'ui.petManagement.input.updateAdoptablePet.description',
'ui.petManagement.input.updateAdoptablePet.photoUrl',
'ui.petManagement.input.updateAdoptablePet.status',
'ui.petManagement.output.updateAdoptablePet',
'ui.petManagement.action.updateAdoptablePet.error',
], this);
void this.loadBrowseAdoptablePetsAdmin();
}

disconnectedCallback(): void {
unsubscribe([
'ui.petManagement.status',
'ui.petManagement.action.browseAdoptablePetsAdmin.status',
'ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter',
'ui.petManagement.data.browseAdoptablePetsAdmin',
'ui.petManagement.action.createAdoptablePet.status',
'ui.petManagement.input.createAdoptablePet.name',
'ui.petManagement.input.createAdoptablePet.age',
'ui.petManagement.input.createAdoptablePet.description',
'ui.petManagement.input.createAdoptablePet.photoUrl',
'ui.petManagement.output.createAdoptablePet',
'ui.petManagement.action.createAdoptablePet.error',
'ui.petManagement.action.updateAdoptablePet.status',
'ui.petManagement.input.updateAdoptablePet.adoptablePetId',
'ui.petManagement.input.updateAdoptablePet.name',
'ui.petManagement.input.updateAdoptablePet.age',
'ui.petManagement.input.updateAdoptablePet.description',
'ui.petManagement.input.updateAdoptablePet.photoUrl',
'ui.petManagement.input.updateAdoptablePet.status',
'ui.petManagement.output.updateAdoptablePet',
'ui.petManagement.action.updateAdoptablePet.error',
], this);
super.disconnectedCallback();
}

handleIcaStateChange(stateKey: string, value: unknown): void {
switch (stateKey) {
case 'ui.petManagement.status':
this.status = value as string;
break;
case 'ui.petManagement.action.browseAdoptablePetsAdmin.status':
this.browseAdoptablePetsAdminState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter':
this.browseAdoptablePetsAdminStatusFilter = value as "available" | "unavailable" | '';
break;
case 'ui.petManagement.data.browseAdoptablePetsAdmin':
this.browseAdoptablePetsAdminData = (value as PetShopBrowseAdoptablePetsAdminOutput | null) ?? this.createBrowseAdoptablePetsAdminDefault();
break;
case 'ui.petManagement.action.createAdoptablePet.status':
this.createAdoptablePetState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.petManagement.input.createAdoptablePet.name':
this.createAdoptablePetName = value as string;
break;
case 'ui.petManagement.input.createAdoptablePet.age':
this.createAdoptablePetAge = value as number | '';
break;
case 'ui.petManagement.input.createAdoptablePet.description':
this.createAdoptablePetDescription = value as string;
break;
case 'ui.petManagement.input.createAdoptablePet.photoUrl':
this.createAdoptablePetPhotoUrl = value as string;
break;
case 'ui.petManagement.output.createAdoptablePet':
this.createAdoptablePetOutput = value as PetShopCreateAdoptablePetOutput | null;
break;
case 'ui.petManagement.action.createAdoptablePet.error':
this.createAdoptablePetError = value as string;
break;
case 'ui.petManagement.action.updateAdoptablePet.status':
this.updateAdoptablePetState = value as 'idle' | 'loading' | 'success' | 'error';
break;
case 'ui.petManagement.input.updateAdoptablePet.adoptablePetId':
this.updateAdoptablePetAdoptablePetId = value as string;
break;
case 'ui.petManagement.input.updateAdoptablePet.name':
this.updateAdoptablePetName = value as string;
break;
case 'ui.petManagement.input.updateAdoptablePet.age':
this.updateAdoptablePetAge = value as number | '';
break;
case 'ui.petManagement.input.updateAdoptablePet.description':
this.updateAdoptablePetDescription = value as string;
break;
case 'ui.petManagement.input.updateAdoptablePet.photoUrl':
this.updateAdoptablePetPhotoUrl = value as string;
break;
case 'ui.petManagement.input.updateAdoptablePet.status':
this.updateAdoptablePetStatus = value as "available" | "unavailable" | '';
break;
case 'ui.petManagement.output.updateAdoptablePet':
this.updateAdoptablePetOutput = value as PetShopUpdateAdoptablePetOutput | null;
break;
case 'ui.petManagement.action.updateAdoptablePet.error':
this.updateAdoptablePetError = value as string;
break;
default:
return;
}
this.requestUpdate();
}

setBrowseAdoptablePetsAdminStatusFilter(value: "available" | "unavailable" | ''): void {
this.browseAdoptablePetsAdminStatusFilter = value;
setState('ui.petManagement.input.browseAdoptablePetsAdmin.statusFilter', value);
this.requestUpdate();
}

handleBrowseAdoptablePetsAdminStatusFilterChange(event: Event): void {
const value = this.readTextValue(event) as "available" | "unavailable" | '';
this.setBrowseAdoptablePetsAdminStatusFilter(value);
}

setCreateAdoptablePetName(value: string): void {
this.createAdoptablePetName = value;
setState('ui.petManagement.input.createAdoptablePet.name', value);
this.requestUpdate();
}

handleCreateAdoptablePetNameChange(event: Event): void {
const value = this.readTextValue(event);
this.setCreateAdoptablePetName(value);
}

setCreateAdoptablePetAge(value: number | ''): void {
this.createAdoptablePetAge = value;
setState('ui.petManagement.input.createAdoptablePet.age', value);
this.requestUpdate();
}

handleCreateAdoptablePetAgeChange(event: Event): void {
const value = this.readNumberValue(event);
this.setCreateAdoptablePetAge(value);
}

setCreateAdoptablePetDescription(value: string): void {
this.createAdoptablePetDescription = value;
setState('ui.petManagement.input.createAdoptablePet.description', value);
this.requestUpdate();
}

handleCreateAdoptablePetDescriptionChange(event: Event): void {
const value = this.readTextValue(event);
this.setCreateAdoptablePetDescription(value);
}

setCreateAdoptablePetPhotoUrl(value: string): void {
this.createAdoptablePetPhotoUrl = value;
setState('ui.petManagement.input.createAdoptablePet.photoUrl', value);
this.requestUpdate();
}

handleCreateAdoptablePetPhotoUrlChange(event: Event): void {
const value = this.readTextValue(event);
this.setCreateAdoptablePetPhotoUrl(value);
}

setUpdateAdoptablePetAdoptablePetId(value: string): void {
this.updateAdoptablePetAdoptablePetId = value;
setState('ui.petManagement.input.updateAdoptablePet.adoptablePetId', value);
this.requestUpdate();
}

handleUpdateAdoptablePetAdoptablePetIdChange(event: Event): void {
const value = this.readTextValue(event);
this.setUpdateAdoptablePetAdoptablePetId(value);
}

setUpdateAdoptablePetName(value: string): void {
this.updateAdoptablePetName = value;
setState('ui.petManagement.input.updateAdoptablePet.name', value);
this.requestUpdate();
}

handleUpdateAdoptablePetNameChange(event: Event): void {
const value = this.readTextValue(event);
this.setUpdateAdoptablePetName(value);
}

setUpdateAdoptablePetAge(value: number | ''): void {
this.updateAdoptablePetAge = value;
setState('ui.petManagement.input.updateAdoptablePet.age', value);
this.requestUpdate();
}

handleUpdateAdoptablePetAgeChange(event: Event): void {
const value = this.readNumberValue(event);
this.setUpdateAdoptablePetAge(value);
}

setUpdateAdoptablePetDescription(value: string): void {
this.updateAdoptablePetDescription = value;
setState('ui.petManagement.input.updateAdoptablePet.description', value);
this.requestUpdate();
}

handleUpdateAdoptablePetDescriptionChange(event: Event): void {
const value = this.readTextValue(event);
this.setUpdateAdoptablePetDescription(value);
}

setUpdateAdoptablePetPhotoUrl(value: string): void {
this.updateAdoptablePetPhotoUrl = value;
setState('ui.petManagement.input.updateAdoptablePet.photoUrl', value);
this.requestUpdate();
}

handleUpdateAdoptablePetPhotoUrlChange(event: Event): void {
const value = this.readTextValue(event);
this.setUpdateAdoptablePetPhotoUrl(value);
}

setUpdateAdoptablePetStatus(value: "available" | "unavailable" | ''): void {
this.updateAdoptablePetStatus = value;
setState('ui.petManagement.input.updateAdoptablePet.status', value);
this.requestUpdate();
}

handleUpdateAdoptablePetStatusChange(event: Event): void {
const value = this.readTextValue(event) as "available" | "unavailable" | '';
this.setUpdateAdoptablePetStatus(value);
}

async loadBrowseAdoptablePetsAdmin(signal?: AbortSignal): Promise<boolean> {
this.browseAdoptablePetsAdminState = 'loading';
setState('ui.petManagement.action.browseAdoptablePetsAdmin.status', 'loading');
const params: PetShopBrowseAdoptablePetsAdminInput = {};
if (this.browseAdoptablePetsAdminStatusFilter) {
params.statusFilter = this.browseAdoptablePetsAdminStatusFilter as "available" | "unavailable";
}
const options: BffClientOptions = { mode: 'silent', signal };
const response = await execBff<PetShopBrowseAdoptablePetsAdminOutput>(
'petShop.browseAdoptablePetsAdmin.browseAdoptablePetsAdmin',
params,
options,
);
if (response.ok) {
const data = response.data ?? this.createBrowseAdoptablePetsAdminDefault();
this.browseAdoptablePetsAdminData = data;
setState('ui.petManagement.data.browseAdoptablePetsAdmin', data);
this.browseAdoptablePetsAdminState = 'success';
setState('ui.petManagement.action.browseAdoptablePetsAdmin.status', 'success');
return true;
}
console.error(response.error);
this.browseAdoptablePetsAdminState = 'error';
setState('ui.petManagement.action.browseAdoptablePetsAdmin.status', 'error');
return false;
}

handleBrowseAdoptablePetsAdminClick(): void {
void this.loadBrowseAdoptablePetsAdmin();
}

async createAdoptablePet(signal?: AbortSignal): Promise<boolean> {
this.createAdoptablePetState = 'loading';
setState('ui.petManagement.action.createAdoptablePet.status', 'loading');
const ageValue = this.createAdoptablePetAge;
let age = typeof ageValue === 'number' ? ageValue : Number(ageValue || 0);
if (!Number.isFinite(age)) {
age = 0;
}
const params: PetShopCreateAdoptablePetInput = {
name: this.createAdoptablePetName,
age,
description: this.createAdoptablePetDescription,
photoUrl: this.createAdoptablePetPhotoUrl,
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<PetShopCreateAdoptablePetOutput>(
'petShop.createAdoptablePet.createAdoptablePet',
params,
options,
);
if (!response.ok) {
const message = response.error?.message ?? this.msg['action.createAdoptablePet.error'];
this.createAdoptablePetError = message;
setState('ui.petManagement.action.createAdoptablePet.error', message);
this.createAdoptablePetState = 'error';
setState('ui.petManagement.action.createAdoptablePet.status', 'error');
return false;
}
const data = response.data ?? null;
this.createAdoptablePetOutput = data;
setState('ui.petManagement.output.createAdoptablePet', data);
const refreshed = await this.loadBrowseAdoptablePetsAdmin(signal);
if (!refreshed) {
const message = this.msg['action.createAdoptablePet.error'];
this.createAdoptablePetError = message;
setState('ui.petManagement.action.createAdoptablePet.error', message);
this.createAdoptablePetState = 'error';
setState('ui.petManagement.action.createAdoptablePet.status', 'error');
return false;
}
this.setCreateAdoptablePetName('');
this.setCreateAdoptablePetAge('');
this.setCreateAdoptablePetDescription('');
this.setCreateAdoptablePetPhotoUrl('');
this.createAdoptablePetError = '';
setState('ui.petManagement.action.createAdoptablePet.error', '');
this.createAdoptablePetState = 'success';
setState('ui.petManagement.action.createAdoptablePet.status', 'success');
return true;
}

handleCreateAdoptablePetClick(): void {
void runBlockingUiAction((signal: AbortSignal) => this.createAdoptablePet(signal));
}

async updateAdoptablePet(signal?: AbortSignal): Promise<boolean> {
this.updateAdoptablePetState = 'loading';
setState('ui.petManagement.action.updateAdoptablePet.status', 'loading');
const ageValue = this.updateAdoptablePetAge;
let age = typeof ageValue === 'number' ? ageValue : Number(ageValue || 0);
if (!Number.isFinite(age)) {
age = 0;
}
const params: PetShopUpdateAdoptablePetInput = {
adoptablePetId: this.updateAdoptablePetAdoptablePetId,
name: this.updateAdoptablePetName,
age,
description: this.updateAdoptablePetDescription,
photoUrl: this.updateAdoptablePetPhotoUrl,
status: this.updateAdoptablePetStatus as "available" | "unavailable",
};
const options: BffClientOptions = { mode: 'blocking', signal };
const response = await execBff<PetShopUpdateAdoptablePetOutput>(
'petShop.updateAdoptablePet.updateAdoptablePet',
params,
options,
);
if (!response.ok) {
const message = response.error?.message ?? this.msg['action.updateAdoptablePet.error'];
this.updateAdoptablePetError = message;
setState('ui.petManagement.action.updateAdoptablePet.error', message);
this.updateAdoptablePetState = 'error';
setState('ui.petManagement.action.updateAdoptablePet.status', 'error');
return false;
}
const data = response.data ?? null;
this.updateAdoptablePetOutput = data;
setState('ui.petManagement.output.updateAdoptablePet', data);
const refreshed = await this.loadBrowseAdoptablePetsAdmin(signal);
if (!refreshed) {
const message = this.msg['action.updateAdoptablePet.error'];
this.updateAdoptablePetError = message;
setState('ui.petManagement.action.updateAdoptablePet.error', message);
this.updateAdoptablePetState = 'error';
setState('ui.petManagement.action.updateAdoptablePet.status', 'error');
return false;
}
this.setUpdateAdoptablePetAdoptablePetId('');
this.setUpdateAdoptablePetName('');
this.setUpdateAdoptablePetAge('');
this.setUpdateAdoptablePetDescription('');
this.setUpdateAdoptablePetPhotoUrl('');
this.setUpdateAdoptablePetStatus('');
this.updateAdoptablePetError = '';
setState('ui.petManagement.action.updateAdoptablePet.error', '');
this.updateAdoptablePetState = 'success';
setState('ui.petManagement.action.updateAdoptablePet.status', 'success');
return true;
}

handleUpdateAdoptablePetClick(): void {
void runBlockingUiAction((signal: AbortSignal) => this.updateAdoptablePet(signal));
}

private readTextValue(event: Event): string {
const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
return target?.value ?? '';
}

private readNumberValue(event: Event): number | '' {
const raw = this.readTextValue(event);
if (!raw) {
return '';
}
const parsed = Number(raw);
return Number.isFinite(parsed) ? parsed : '';
}

private createBrowseAdoptablePetsAdminDefault(): PetShopBrowseAdoptablePetsAdminOutput {
return { items: [], total: 0 };
}
}
