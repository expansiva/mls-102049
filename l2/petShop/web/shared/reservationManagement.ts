/// <mls fileReference="_102049_/l2/petShop/web/shared/reservationManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  BrowseReservationsQueryInput,
  BrowseReservationsQueryOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.browseReservationsQuery.js';
import { browseReservationsQueryRoute } from '/_102049_/l2/petShop/web/contracts/reservationManagement.browseReservationsQuery.js';
import type {
  UpdateReservationStatusCommandInput,
  UpdateReservationStatusCommandOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.updateReservationStatusCommand.js';
import { updateReservationStatusCommandRoute } from '/_102049_/l2/petShop/web/contracts/reservationManagement.updateReservationStatusCommand.js';
import type {
  ProcessPaymentCommandInput,
  ProcessPaymentCommandOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.processPaymentCommand.js';
import { processPaymentCommandRoute } from '/_102049_/l2/petShop/web/contracts/reservationManagement.processPaymentCommand.js';

export type {
  BrowseReservationsQueryInput,
  BrowseReservationsQueryOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.browseReservationsQuery.js';
export type {
  UpdateReservationStatusCommandInput,
  UpdateReservationStatusCommandOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.updateReservationStatusCommand.js';
export type {
  ProcessPaymentCommandInput,
  ProcessPaymentCommandOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.processPaymentCommand.js';

/// **collab_i18n_start**
const message_pt = {
  "section.reservationList.title": "Reservas",
  "organism.reservationKanbanBoard.title": "Painel de reservas",
  "intent.reservationKanban.title": "Fluxo de reservas",
  "field.reservationId": "Reserva",
  "field.customerName": "Cliente",
  "field.customerPhone": "Telefone",
  "field.status": "Status",
  "field.expiresAt": "Validade",
  "filter.searchTerm": "Buscar por nome, telefone ou reserva",
  "filter.statusFilter": "Status",
  "filter.page": "Página",
  "filter.pageSize": "Itens por página",
  "action.refresh": "Atualizar",
  "action.updateStatus": "Atualizar status",
  "action.processPayment": "Receber pagamento",
  "empty.reservations": "Nenhuma reserva encontrada",
  "organism.updateReservationStatusPanel.title": "Confirmar ou cancelar reserva",
  "intent.updateReservationStatus.title": "Atualização de status",
  "field.newStatus": "Novo status",
  "field.cancellationReason": "Motivo do cancelamento",
  "field.paymentId": "Pagamento",
  "action.confirmUpdate": "Salvar status",
  "organism.processPaymentPanel.title": "Receber pagamento presencial",
  "intent.processPayment.title": "Pagamento da reserva",
  "field.method": "Forma de pagamento",
  "action.receivePayment": "Receber pagamento",
  "action.updateReservationStatusCommand.success": "Status da reserva atualizado com sucesso.",
  "action.updateReservationStatusCommand.error": "Não foi possível atualizar o status da reserva.",
  "action.processPaymentCommand.success": "Pagamento registrado e reserva encerrada.",
  "action.processPaymentCommand.error": "Não foi possível processar o pagamento.",
  "reservation.queue.title": "Fila de reservas",
  "reservation.list.title": "Reservas pendentes",
  "reservation.list.empty": "Nenhuma reserva encontrada. Ajuste a busca ou o filtro de status.",
  "reservation.transition.title": "Atualizar status da reserva",
  "reservation.payment.title": "Receber pagamento",
  "field.createdAt": "Criada em",
  "action.confirmReservation": "Confirmar",
  "action.cancelReservation": "Cancelar",
  "action.fulfillReservation": "Marcar como atendida"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopReservationManagementBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state browseReservationsQueryState — actionStatus, values: idle, loading, success, error */
  @property() browseReservationsQueryState: "idle" | "loading" | "success" | "error" = 'idle';
  /** state browseReservationsQuerySearchTerm — input */
  @property() browseReservationsQuerySearchTerm: string = '';
  /** state browseReservationsQueryStatusFilter — input */
  @property() browseReservationsQueryStatusFilter: string = '';
  /** state browseReservationsQueryPage — input */
  @property() browseReservationsQueryPage: string = '';
  /** state browseReservationsQueryPageSize — input */
  @property() browseReservationsQueryPageSize: string = '';
  /** state browseReservationsQueryData — queryResult, outputShape: array */
  @property() browseReservationsQueryData: BrowseReservationsQueryOutput[] = [];
  /** state updateReservationStatusCommandState — actionStatus, values: idle, loading, success, error */
  @property() updateReservationStatusCommandState: "idle" | "loading" | "success" | "error" = 'idle';
  /** state updateReservationStatusCommandReservationId — input */
  @property() updateReservationStatusCommandReservationId: string = '';
  /** state updateReservationStatusCommandNewStatus — input */
  @property() updateReservationStatusCommandNewStatus: string = '';
  /** state updateReservationStatusCommandCancellationReason — input */
  @property() updateReservationStatusCommandCancellationReason: string = '';
  /** state updateReservationStatusCommandPaymentId — input */
  @property() updateReservationStatusCommandPaymentId: string = '';
  /** state updateReservationStatusCommandOutput — commandOutput */
  @property() updateReservationStatusCommandOutput: UpdateReservationStatusCommandOutput | null = null;
  /** state updateReservationStatusCommandError — actionError */
  @property() updateReservationStatusCommandError: string = '';
  /** state processPaymentCommandState — actionStatus, values: idle, loading, success, error */
  @property() processPaymentCommandState: "idle" | "loading" | "success" | "error" = 'idle';
  /** state processPaymentCommandReservationId — input */
  @property() processPaymentCommandReservationId: string = '';
  /** state processPaymentCommandMethod — input */
  @property() processPaymentCommandMethod: string = '';
  /** state processPaymentCommandOutput — commandOutput */
  @property() processPaymentCommandOutput: ProcessPaymentCommandOutput | null = null;
  /** state processPaymentCommandError — actionError */
  @property() processPaymentCommandError: string = '';

  private readonly subscribedKeys: string[] = [
    'ui.reservationManagement.status',
    'ui.reservationManagement.action.browseReservationsQuery.status',
    'ui.reservationManagement.input.browseReservationsQuery.searchTerm',
    'ui.reservationManagement.input.browseReservationsQuery.statusFilter',
    'ui.reservationManagement.input.browseReservationsQuery.page',
    'ui.reservationManagement.input.browseReservationsQuery.pageSize',
    'ui.reservationManagement.data.browseReservationsQuery',
    'ui.reservationManagement.action.updateReservationStatusCommand.status',
    'ui.reservationManagement.input.updateReservationStatusCommand.reservationId',
    'ui.reservationManagement.input.updateReservationStatusCommand.newStatus',
    'ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason',
    'ui.reservationManagement.input.updateReservationStatusCommand.paymentId',
    'ui.reservationManagement.output.updateReservationStatusCommand',
    'ui.reservationManagement.action.updateReservationStatusCommand.error',
    'ui.reservationManagement.action.processPaymentCommand.status',
    'ui.reservationManagement.input.processPaymentCommand.reservationId',
    'ui.reservationManagement.input.processPaymentCommand.method',
    'ui.reservationManagement.output.processPaymentCommand',
    'ui.reservationManagement.action.processPaymentCommand.error',
  ];

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.reservationManagement.status', 'status', '');
    this.initStateValue('ui.reservationManagement.action.browseReservationsQuery.status', 'browseReservationsQueryState', 'idle');
    this.initStateValue('ui.reservationManagement.input.browseReservationsQuery.searchTerm', 'browseReservationsQuerySearchTerm', '');
    this.initStateValue('ui.reservationManagement.input.browseReservationsQuery.statusFilter', 'browseReservationsQueryStatusFilter', '');
    this.initStateValue('ui.reservationManagement.input.browseReservationsQuery.page', 'browseReservationsQueryPage', '');
    this.initStateValue('ui.reservationManagement.input.browseReservationsQuery.pageSize', 'browseReservationsQueryPageSize', '');
    this.initStateValue('ui.reservationManagement.data.browseReservationsQuery', 'browseReservationsQueryData', []);
    this.initStateValue('ui.reservationManagement.action.updateReservationStatusCommand.status', 'updateReservationStatusCommandState', 'idle');
    this.initStateValue('ui.reservationManagement.input.updateReservationStatusCommand.reservationId', 'updateReservationStatusCommandReservationId', '');
    this.initStateValue('ui.reservationManagement.input.updateReservationStatusCommand.newStatus', 'updateReservationStatusCommandNewStatus', '');
    this.initStateValue('ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason', 'updateReservationStatusCommandCancellationReason', '');
    this.initStateValue('ui.reservationManagement.input.updateReservationStatusCommand.paymentId', 'updateReservationStatusCommandPaymentId', '');
    this.initStateValue('ui.reservationManagement.output.updateReservationStatusCommand', 'updateReservationStatusCommandOutput', null);
    this.initStateValue('ui.reservationManagement.action.updateReservationStatusCommand.error', 'updateReservationStatusCommandError', '');
    this.initStateValue('ui.reservationManagement.action.processPaymentCommand.status', 'processPaymentCommandState', 'idle');
    this.initStateValue('ui.reservationManagement.input.processPaymentCommand.reservationId', 'processPaymentCommandReservationId', '');
    this.initStateValue('ui.reservationManagement.input.processPaymentCommand.method', 'processPaymentCommandMethod', '');
    this.initStateValue('ui.reservationManagement.output.processPaymentCommand', 'processPaymentCommandOutput', null);
    this.initStateValue('ui.reservationManagement.action.processPaymentCommand.error', 'processPaymentCommandError', '');
    subscribe(this.subscribedKeys, this);
    void this.loadBrowseReservationsQuery();
  }

  disconnectedCallback(): void {
    unsubscribe(this.subscribedKeys, this);
    super.disconnectedCallback();
  }

  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.reservationManagement.status':
        this.status = value as string;
        break;
      case 'ui.reservationManagement.action.browseReservationsQuery.status':
        this.browseReservationsQueryState = value as "idle" | "loading" | "success" | "error";
        break;
      case 'ui.reservationManagement.input.browseReservationsQuery.searchTerm':
        this.browseReservationsQuerySearchTerm = value as string;
        break;
      case 'ui.reservationManagement.input.browseReservationsQuery.statusFilter':
        this.browseReservationsQueryStatusFilter = value as string;
        break;
      case 'ui.reservationManagement.input.browseReservationsQuery.page':
        this.browseReservationsQueryPage = value as string;
        break;
      case 'ui.reservationManagement.input.browseReservationsQuery.pageSize':
        this.browseReservationsQueryPageSize = value as string;
        break;
      case 'ui.reservationManagement.data.browseReservationsQuery':
        this.browseReservationsQueryData = value as BrowseReservationsQueryOutput[];
        break;
      case 'ui.reservationManagement.action.updateReservationStatusCommand.status':
        this.updateReservationStatusCommandState = value as "idle" | "loading" | "success" | "error";
        break;
      case 'ui.reservationManagement.input.updateReservationStatusCommand.reservationId':
        this.updateReservationStatusCommandReservationId = value as string;
        break;
      case 'ui.reservationManagement.input.updateReservationStatusCommand.newStatus':
        this.updateReservationStatusCommandNewStatus = value as string;
        break;
      case 'ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason':
        this.updateReservationStatusCommandCancellationReason = value as string;
        break;
      case 'ui.reservationManagement.input.updateReservationStatusCommand.paymentId':
        this.updateReservationStatusCommandPaymentId = value as string;
        break;
      case 'ui.reservationManagement.output.updateReservationStatusCommand':
        this.updateReservationStatusCommandOutput = value as UpdateReservationStatusCommandOutput | null;
        break;
      case 'ui.reservationManagement.action.updateReservationStatusCommand.error':
        this.updateReservationStatusCommandError = value as string;
        break;
      case 'ui.reservationManagement.action.processPaymentCommand.status':
        this.processPaymentCommandState = value as "idle" | "loading" | "success" | "error";
        break;
      case 'ui.reservationManagement.input.processPaymentCommand.reservationId':
        this.processPaymentCommandReservationId = value as string;
        break;
      case 'ui.reservationManagement.input.processPaymentCommand.method':
        this.processPaymentCommandMethod = value as string;
        break;
      case 'ui.reservationManagement.output.processPaymentCommand':
        this.processPaymentCommandOutput = value as ProcessPaymentCommandOutput | null;
        break;
      case 'ui.reservationManagement.action.processPaymentCommand.error':
        this.processPaymentCommandError = value as string;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, propName: keyof this, defaultValue: unknown): void {
    const existing = getState(stateKey);
    const value = existing !== undefined && existing !== null ? existing : defaultValue;
    (this as any)[propName] = value;
    if (existing === undefined || existing === null) {
      setState(stateKey, value);
    }
  }

  private applyRouteParams(): void {
    const pattern = '/petShop/reservationManagement/:reservationId?';
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(':')) {
        const optional = part.endsWith('?');
        const name = optional ? part.slice(1, -1) : part.slice(1);
        const raw = pathParts[i];
        if (raw !== undefined && raw !== '') {
          params[name] = decodeURIComponent(raw);
        }
      }
    }
    if (params.reservationId !== undefined && params.reservationId !== '') {
      this.updateReservationStatusCommandReservationId = params.reservationId;
      setState('ui.reservationManagement.input.updateReservationStatusCommand.reservationId', params.reservationId);
    }
  }

  /** action browseReservationsQuery (query) — route petShop.reservationManagement.browseReservationsQuery; inputs: searchTerm, statusFilter, page, pageSize; writes ui.reservationManagement.data.browseReservationsQuery; status ui.reservationManagement.action.browseReservationsQuery.status */
  async loadBrowseReservationsQuery(): Promise<void> {
    this.browseReservationsQueryState = 'loading';
    setState('ui.reservationManagement.action.browseReservationsQuery.status', 'loading');
    const params: BrowseReservationsQueryInput = {};
    if (this.browseReservationsQuerySearchTerm !== '') {
      params.searchTerm = this.browseReservationsQuerySearchTerm;
    }
    if (this.browseReservationsQueryStatusFilter !== '') {
      params.statusFilter = this.browseReservationsQueryStatusFilter;
    }
    if (this.browseReservationsQueryPage !== '') {
      const pageNum = Number(this.browseReservationsQueryPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.browseReservationsQueryPageSize !== '') {
      const pageSizeNum = Number(this.browseReservationsQueryPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<BrowseReservationsQueryOutput[]>(browseReservationsQueryRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.browseReservationsQueryData = data;
      setState('ui.reservationManagement.data.browseReservationsQuery', data);
      this.browseReservationsQueryState = 'success';
      setState('ui.reservationManagement.action.browseReservationsQuery.status', 'success');
    } else {
      console.error('browseReservationsQuery failed', response.error);
      this.browseReservationsQueryState = 'error';
      setState('ui.reservationManagement.action.browseReservationsQuery.status', 'error');
    }
  }

  /** handler for action browseReservationsQuery — bind UI events here */
  handleBrowseReservationsQueryClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadBrowseReservationsQuery();
  }

  /** action updateReservationStatusCommand (command) — route petShop.reservationManagement.updateReservationStatusCommand; inputs: reservationId, newStatus, cancellationReason, paymentId; writes ui.reservationManagement.output.updateReservationStatusCommand; status ui.reservationManagement.action.updateReservationStatusCommand.status; feedback keys action.updateReservationStatusCommand.success / action.updateReservationStatusCommand.error */
  async updateReservationStatusCommand(): Promise<void> {
    this.applyRouteParams();
    if (!this.updateReservationStatusCommandReservationId) {
      this.updateReservationStatusCommandState = 'idle';
      setState('ui.reservationManagement.action.updateReservationStatusCommand.status', 'idle');
      return;
    }
    this.updateReservationStatusCommandState = 'loading';
    setState('ui.reservationManagement.action.updateReservationStatusCommand.status', 'loading');
    this.updateReservationStatusCommandError = '';
    setState('ui.reservationManagement.action.updateReservationStatusCommand.error', '');
    const params: UpdateReservationStatusCommandInput = {
      reservationId: this.updateReservationStatusCommandReservationId,
      newStatus: this.updateReservationStatusCommandNewStatus,
    };
    if (this.updateReservationStatusCommandCancellationReason !== '') {
      params.cancellationReason = this.updateReservationStatusCommandCancellationReason;
    }
    if (this.updateReservationStatusCommandPaymentId !== '') {
      params.paymentId = this.updateReservationStatusCommandPaymentId;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<UpdateReservationStatusCommandOutput>(updateReservationStatusCommandRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.updateReservationStatusCommandOutput = data;
      setState('ui.reservationManagement.output.updateReservationStatusCommand', data);
      try {
        await this.loadBrowseReservationsQuery();
      } catch (refreshError) {
        console.error('refresh after updateReservationStatusCommand failed', refreshError);
        this.updateReservationStatusCommandState = 'error';
        setState('ui.reservationManagement.action.updateReservationStatusCommand.status', 'error');
        return;
      }
      this.updateReservationStatusCommandNewStatus = '';
      setState('ui.reservationManagement.input.updateReservationStatusCommand.newStatus', '');
      this.updateReservationStatusCommandCancellationReason = '';
      setState('ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason', '');
      this.updateReservationStatusCommandPaymentId = '';
      setState('ui.reservationManagement.input.updateReservationStatusCommand.paymentId', '');
      this.updateReservationStatusCommandState = 'success';
      setState('ui.reservationManagement.action.updateReservationStatusCommand.status', 'success');
    } else {
      const errMsg = response.error?.message ?? '';
      this.updateReservationStatusCommandError = errMsg;
      setState('ui.reservationManagement.action.updateReservationStatusCommand.error', errMsg);
      console.error('updateReservationStatusCommand failed', response.error);
      this.updateReservationStatusCommandState = 'error';
      setState('ui.reservationManagement.action.updateReservationStatusCommand.status', 'error');
    }
  }

  /** handler for action updateReservationStatusCommand — bind UI events here */
  handleUpdateReservationStatusCommandClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async () => {
      await this.updateReservationStatusCommand();
    });
  }

  /** action processPaymentCommand (command) — route petShop.reservationManagement.processPaymentCommand; inputs: reservationId, method; writes ui.reservationManagement.output.processPaymentCommand; status ui.reservationManagement.action.processPaymentCommand.status; feedback keys action.processPaymentCommand.success / action.processPaymentCommand.error */
  async processPaymentCommand(): Promise<void> {
    this.processPaymentCommandState = 'loading';
    setState('ui.reservationManagement.action.processPaymentCommand.status', 'loading');
    this.processPaymentCommandError = '';
    setState('ui.reservationManagement.action.processPaymentCommand.error', '');
    const params: ProcessPaymentCommandInput = {
      reservationId: this.processPaymentCommandReservationId,
      method: this.processPaymentCommandMethod,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<ProcessPaymentCommandOutput>(processPaymentCommandRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.processPaymentCommandOutput = data;
      setState('ui.reservationManagement.output.processPaymentCommand', data);
      try {
        await this.loadBrowseReservationsQuery();
      } catch (refreshError) {
        console.error('refresh after processPaymentCommand failed', refreshError);
        this.processPaymentCommandState = 'error';
        setState('ui.reservationManagement.action.processPaymentCommand.status', 'error');
        return;
      }
      this.processPaymentCommandReservationId = '';
      setState('ui.reservationManagement.input.processPaymentCommand.reservationId', '');
      this.processPaymentCommandMethod = '';
      setState('ui.reservationManagement.input.processPaymentCommand.method', '');
      this.processPaymentCommandState = 'success';
      setState('ui.reservationManagement.action.processPaymentCommand.status', 'success');
    } else {
      const errMsg = response.error?.message ?? '';
      this.processPaymentCommandError = errMsg;
      setState('ui.reservationManagement.action.processPaymentCommand.error', errMsg);
      console.error('processPaymentCommand failed', response.error);
      this.processPaymentCommandState = 'error';
      setState('ui.reservationManagement.action.processPaymentCommand.status', 'error');
    }
  }

  /** handler for action processPaymentCommand — bind UI events here */
  handleProcessPaymentCommandClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async () => {
      await this.processPaymentCommand();
    });
  }

  /** setter for state ui.reservationManagement.input.browseReservationsQuery.searchTerm */
  setBrowseReservationsQuerySearchTerm(value: string): void {
    this.browseReservationsQuerySearchTerm = value;
    setState('ui.reservationManagement.input.browseReservationsQuery.searchTerm', value);
    this.requestUpdate();
  }

  /** handler for action set.browseReservationsQuerySearchTerm — bind UI events here */
  handleBrowseReservationsQuerySearchTermChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setBrowseReservationsQuerySearchTerm(value);
  }

  /** setter for state ui.reservationManagement.input.browseReservationsQuery.statusFilter */
  setBrowseReservationsQueryStatusFilter(value: string): void {
    this.browseReservationsQueryStatusFilter = value;
    setState('ui.reservationManagement.input.browseReservationsQuery.statusFilter', value);
    this.requestUpdate();
  }

  /** handler for action set.browseReservationsQueryStatusFilter — bind UI events here */
  handleBrowseReservationsQueryStatusFilterChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setBrowseReservationsQueryStatusFilter(value);
  }

  /** setter for state ui.reservationManagement.input.browseReservationsQuery.page */
  setBrowseReservationsQueryPage(value: string): void {
    this.browseReservationsQueryPage = value;
    setState('ui.reservationManagement.input.browseReservationsQuery.page', value);
    this.requestUpdate();
  }

  /** handler for action set.browseReservationsQueryPage — bind UI events here */
  handleBrowseReservationsQueryPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setBrowseReservationsQueryPage(value);
  }

  /** setter for state ui.reservationManagement.input.browseReservationsQuery.pageSize */
  setBrowseReservationsQueryPageSize(value: string): void {
    this.browseReservationsQueryPageSize = value;
    setState('ui.reservationManagement.input.browseReservationsQuery.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.browseReservationsQueryPageSize — bind UI events here */
  handleBrowseReservationsQueryPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setBrowseReservationsQueryPageSize(value);
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatusCommand.reservationId */
  setUpdateReservationStatusCommandReservationId(value: string): void {
    this.updateReservationStatusCommandReservationId = value;
    setState('ui.reservationManagement.input.updateReservationStatusCommand.reservationId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReservationStatusCommandReservationId — bind UI events here */
  handleUpdateReservationStatusCommandReservationIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setUpdateReservationStatusCommandReservationId(value);
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatusCommand.newStatus */
  setUpdateReservationStatusCommandNewStatus(value: string): void {
    this.updateReservationStatusCommandNewStatus = value;
    setState('ui.reservationManagement.input.updateReservationStatusCommand.newStatus', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReservationStatusCommandNewStatus — bind UI events here */
  handleUpdateReservationStatusCommandNewStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setUpdateReservationStatusCommandNewStatus(value);
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason */
  setUpdateReservationStatusCommandCancellationReason(value: string): void {
    this.updateReservationStatusCommandCancellationReason = value;
    setState('ui.reservationManagement.input.updateReservationStatusCommand.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReservationStatusCommandCancellationReason — bind UI events here */
  handleUpdateReservationStatusCommandCancellationReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setUpdateReservationStatusCommandCancellationReason(value);
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatusCommand.paymentId */
  setUpdateReservationStatusCommandPaymentId(value: string): void {
    this.updateReservationStatusCommandPaymentId = value;
    setState('ui.reservationManagement.input.updateReservationStatusCommand.paymentId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReservationStatusCommandPaymentId — bind UI events here */
  handleUpdateReservationStatusCommandPaymentIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setUpdateReservationStatusCommandPaymentId(value);
  }

  /** setter for state ui.reservationManagement.input.processPaymentCommand.reservationId */
  setProcessPaymentCommandReservationId(value: string): void {
    this.processPaymentCommandReservationId = value;
    setState('ui.reservationManagement.input.processPaymentCommand.reservationId', value);
    this.requestUpdate();
  }

  /** handler for action set.processPaymentCommandReservationId — bind UI events here */
  handleProcessPaymentCommandReservationIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setProcessPaymentCommandReservationId(value);
  }

  /** setter for state ui.reservationManagement.input.processPaymentCommand.method */
  setProcessPaymentCommandMethod(value: string): void {
    this.processPaymentCommandMethod = value;
    setState('ui.reservationManagement.input.processPaymentCommand.method', value);
    this.requestUpdate();
  }

  /** handler for action set.processPaymentCommandMethod — bind UI events here */
  handleProcessPaymentCommandMethodChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setProcessPaymentCommandMethod(value);
  }
}
