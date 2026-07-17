/// <mls fileReference="_102049_/l2/petShop/web/shared/reservationManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  PetShopExpireReservation,
  PetShopExpireReservationsInput,
  PetShopExpireReservationsOutput,
  PetShopListReservationsInput,
  PetShopListReservationsItem,
  PetShopListReservationsOutput,
  PetShopListReservationsOutputItem,
  PetShopPayInStoreInput,
  PetShopPayInStoreOutput,
  PetShopUpdateReservationStatusInput,
  PetShopUpdateReservationStatusOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.js';
export type {
  PetShopExpireReservation,
  PetShopExpireReservationsInput,
  PetShopExpireReservationsOutput,
  PetShopListReservationsInput,
  PetShopListReservationsItem,
  PetShopListReservationsOutput,
  PetShopListReservationsOutputItem,
  PetShopPayInStoreInput,
  PetShopPayInStoreOutput,
  PetShopUpdateReservationStatusInput,
  PetShopUpdateReservationStatusOutput,
} from '/_102049_/l2/petShop/web/contracts/reservationManagement.js';

/// **collab_i18n_start**
const message_pt = {
  "page.reservationManagement.title": "Gestão de Reservas",
  "section.queue.title": "Reservas recebidas",
  "section.queue.empty": "Nenhuma reserva encontrada",
  "section.execute.title": "Ações da Reserva",
  "section.batch.title": "Operações em Lote",
  "section.review.title": "Resumo",
  "intention.queryReservations.title": "Reservas Recebidas",
  "intention.updateStatus.title": "Atualizar Status",
  "intention.payInStore.title": "Pagamento Presencial",
  "intention.expireReservations.title": "Expirar Reservas Vencidas",
  "intention.expireReservations.empty": "Nenhuma reserva vencida para expirar",
  "intention.summary.title": "Resumo das Ações",
  "column.reservationId": "Reserva",
  "column.customerId": "Cliente",
  "column.status": "Status",
  "column.expiresAt": "Expira em",
  "column.readyAt": "Pronta em",
  "column.items": "Itens",
  "filter.status": "Filtrar por status",
  "field.reservationId": "Reserva",
  "field.status": "Status",
  "field.cancelReason": "Motivo do cancelamento",
  "field.paymentId": "Pagamento (ID)",
  "field.paymentMethod": "Método de pagamento",
  "field.paymentAmount": "Valor pago",
  "action.refresh": "Atualizar",
  "action.selectForUpdate": "Gerenciar",
  "action.selectForPayment": "Selecionar para pagamento",
  "action.updateReservationStatus.submit": "Atualizar Status",
  "action.payInStore.submit": "Registrar Pagamento",
  "action.expireReservations.submit": "Expirar Reservas",
  "action.updateReservationStatus.success": "Status atualizado com sucesso",
  "action.updateReservationStatus.error": "Erro ao atualizar status",
  "action.payInStore.success": "Pagamento registrado com sucesso",
  "action.payInStore.error": "Erro ao registrar pagamento",
  "action.expireReservations.success": "Reservas expiradas com sucesso",
  "action.expireReservations.error": "Erro ao expirar reservas",
  "org.reservationQueue.title": "Listar reservas recebidas com status atual e itens, permitindo filtragem e seleção para ações subsequentes",
  "org.reservationTransitions.title": "Permitir à loja atualizar o status da reserva selecionada e registrar pagamento presencial, com formulários contextuais baseados na reserva selecionada na fila",
  "org.batchOperations.title": "Permitir à loja expirar em lote todas as reservas vencidas, restaurando a disponibilidade dos produtos associados",
  "org.reviewSummary.title": "Revisar o contexto e o resultado das ações principais da página após execução de comandos",
  "section.detail.title": "Ações da reserva",
  "organism.reservationBoard.title": "Fila de reservas",
  "organism.reservationTransitions.title": "Atualizar status",
  "organism.payInStore.title": "Pagamento presencial",
  "intent.listReservations.title": "Lista de reservas",
  "intent.updateReservationStatus.title": "Transições de status",
  "intent.payInStore.title": "Registrar pagamento",
  "field.customerId": "Cliente",
  "field.expiresAt": "Expira em",
  "field.readyAt": "Pronta em",
  "field.deliveredAt": "Entregue em",
  "field.items": "Itens",
  "action.listReservations": "Atualizar fila",
  "action.expireReservations": "Expirar vencidas",
  "action.selectReservation": "Selecionar para status",
  "action.updateReservationStatus.ready": "Marcar como pronta",
  "action.updateReservationStatus.delivered": "Marcar como entregue",
  "action.updateReservationStatus.cancelled": "Cancelar reserva",
  "action.payInStore": "Registrar pagamento"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopReservationManagementBase extends CollabLitElement {
  private readonly _stateKeys: string[] = [
    'ui.reservationManagement.status',
    'ui.reservationManagement.action.listReservations.status',
    'ui.reservationManagement.input.listReservations.status',
    'ui.reservationManagement.data.listReservations',
    'ui.reservationManagement.action.updateReservationStatus.status',
    'ui.reservationManagement.input.updateReservationStatus.reservationId',
    'ui.reservationManagement.input.updateReservationStatus.status',
    'ui.reservationManagement.input.updateReservationStatus.cancelReason',
    'ui.reservationManagement.input.updateReservationStatus.paymentId',
    'ui.reservationManagement.output.updateReservationStatus',
    'ui.reservationManagement.action.updateReservationStatus.error',
    'ui.reservationManagement.action.payInStore.status',
    'ui.reservationManagement.input.payInStore.reservationId',
    'ui.reservationManagement.input.payInStore.paymentMethod',
    'ui.reservationManagement.input.payInStore.paymentAmount',
    'ui.reservationManagement.output.payInStore',
    'ui.reservationManagement.action.payInStore.error',
    'ui.reservationManagement.action.expireReservations.status',
    'ui.reservationManagement.output.expireReservations',
    'ui.reservationManagement.action.expireReservations.error',
  ];

  /** state ui.reservationManagement.status — pageStatus */
  @property()
  public status: string = '';

  /** state ui.reservationManagement.action.listReservations.status — actionStatus, values: idle | loading | success | error */
  @property()
  public listReservationsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.reservationManagement.input.listReservations.status — input, values: draft | active | ready | delivered | expired | cancelled */
  @property()
  public listReservationsStatus: PetShopListReservationsInput['status'] | '' = '';

  /** state ui.reservationManagement.data.listReservations — queryResult, outputShape: array */
  @property()
  public listReservationsData: PetShopListReservationsOutput = [];

  /** state ui.reservationManagement.action.updateReservationStatus.status — actionStatus, values: idle | loading | success | error */
  @property()
  public updateReservationStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.reservationManagement.input.updateReservationStatus.reservationId — input */
  @property()
  public updateReservationStatusReservationId: string = '';

  /** state ui.reservationManagement.input.updateReservationStatus.status — input, values: draft | active | ready | delivered | expired | cancelled */
  @property()
  public updateReservationStatusStatus: PetShopUpdateReservationStatusInput['status'] | '' = '';

  /** state ui.reservationManagement.input.updateReservationStatus.cancelReason — input */
  @property()
  public updateReservationStatusCancelReason: string = '';

  /** state ui.reservationManagement.input.updateReservationStatus.paymentId — input */
  @property()
  public updateReservationStatusPaymentId: string = '';

  /** state ui.reservationManagement.output.updateReservationStatus — commandOutput */
  @property()
  public updateReservationStatusOutput: PetShopUpdateReservationStatusOutput | null = null;

  /** state ui.reservationManagement.action.updateReservationStatus.error — actionError */
  @property()
  public updateReservationStatusError: string = '';

  /** state ui.reservationManagement.action.payInStore.status — actionStatus, values: idle | loading | success | error */
  @property()
  public payInStoreState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.reservationManagement.input.payInStore.reservationId — input */
  @property()
  public payInStoreReservationId: string = '';

  /** state ui.reservationManagement.input.payInStore.paymentMethod — input */
  @property()
  public payInStorePaymentMethod: unknown = '';

  /** state ui.reservationManagement.input.payInStore.paymentAmount — input */
  @property()
  public payInStorePaymentAmount: number | '' = '';

  /** state ui.reservationManagement.output.payInStore — commandOutput */
  @property()
  public payInStoreOutput: PetShopPayInStoreOutput | null = null;

  /** state ui.reservationManagement.action.payInStore.error — actionError */
  @property()
  public payInStoreError: string = '';

  /** state ui.reservationManagement.action.expireReservations.status — actionStatus, values: idle | loading | success | error */
  @property()
  public expireReservationsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.reservationManagement.output.expireReservations — commandOutput */
  @property()
  public expireReservationsOutput: PetShopExpireReservationsOutput | null = null;

  /** state ui.reservationManagement.action.expireReservations.error — actionError */
  @property()
  public expireReservationsError: string = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    const storedStatus = getState('ui.reservationManagement.status');
    if (storedStatus !== undefined) {
      this.status = storedStatus as string;
    } else {
      setState('ui.reservationManagement.status', this.status);
    }
    const storedListReservationsState = getState('ui.reservationManagement.action.listReservations.status');
    if (storedListReservationsState !== undefined) {
      this.listReservationsState = storedListReservationsState as 'idle' | 'loading' | 'success' | 'error';
    } else {
      setState('ui.reservationManagement.action.listReservations.status', this.listReservationsState);
    }
    const storedListReservationsStatus = getState('ui.reservationManagement.input.listReservations.status');
    if (storedListReservationsStatus !== undefined) {
      this.listReservationsStatus = storedListReservationsStatus as PetShopListReservationsInput['status'] | '';
    } else {
      setState('ui.reservationManagement.input.listReservations.status', this.listReservationsStatus);
    }
    const storedListReservationsData = getState('ui.reservationManagement.data.listReservations');
    if (storedListReservationsData !== undefined) {
      this.listReservationsData = storedListReservationsData as PetShopListReservationsOutput;
    } else {
      setState('ui.reservationManagement.data.listReservations', this.listReservationsData);
    }
    const storedUpdateReservationStatusState = getState('ui.reservationManagement.action.updateReservationStatus.status');
    if (storedUpdateReservationStatusState !== undefined) {
      this.updateReservationStatusState = storedUpdateReservationStatusState as 'idle' | 'loading' | 'success' | 'error';
    } else {
      setState('ui.reservationManagement.action.updateReservationStatus.status', this.updateReservationStatusState);
    }
    const storedUpdateReservationStatusReservationId = getState('ui.reservationManagement.input.updateReservationStatus.reservationId');
    if (storedUpdateReservationStatusReservationId !== undefined) {
      this.updateReservationStatusReservationId = storedUpdateReservationStatusReservationId as string;
    } else {
      setState('ui.reservationManagement.input.updateReservationStatus.reservationId', this.updateReservationStatusReservationId);
    }
    const storedUpdateReservationStatusStatus = getState('ui.reservationManagement.input.updateReservationStatus.status');
    if (storedUpdateReservationStatusStatus !== undefined) {
      this.updateReservationStatusStatus = storedUpdateReservationStatusStatus as PetShopUpdateReservationStatusInput['status'] | '';
    } else {
      setState('ui.reservationManagement.input.updateReservationStatus.status', this.updateReservationStatusStatus);
    }
    const storedUpdateReservationStatusCancelReason = getState('ui.reservationManagement.input.updateReservationStatus.cancelReason');
    if (storedUpdateReservationStatusCancelReason !== undefined) {
      this.updateReservationStatusCancelReason = storedUpdateReservationStatusCancelReason as string;
    } else {
      setState('ui.reservationManagement.input.updateReservationStatus.cancelReason', this.updateReservationStatusCancelReason);
    }
    const storedUpdateReservationStatusPaymentId = getState('ui.reservationManagement.input.updateReservationStatus.paymentId');
    if (storedUpdateReservationStatusPaymentId !== undefined) {
      this.updateReservationStatusPaymentId = storedUpdateReservationStatusPaymentId as string;
    } else {
      setState('ui.reservationManagement.input.updateReservationStatus.paymentId', this.updateReservationStatusPaymentId);
    }
    const storedUpdateReservationStatusOutput = getState('ui.reservationManagement.output.updateReservationStatus');
    if (storedUpdateReservationStatusOutput !== undefined) {
      this.updateReservationStatusOutput = storedUpdateReservationStatusOutput as PetShopUpdateReservationStatusOutput | null;
    } else {
      setState('ui.reservationManagement.output.updateReservationStatus', this.updateReservationStatusOutput);
    }
    const storedUpdateReservationStatusError = getState('ui.reservationManagement.action.updateReservationStatus.error');
    if (storedUpdateReservationStatusError !== undefined) {
      this.updateReservationStatusError = storedUpdateReservationStatusError as string;
    } else {
      setState('ui.reservationManagement.action.updateReservationStatus.error', this.updateReservationStatusError);
    }
    const storedPayInStoreState = getState('ui.reservationManagement.action.payInStore.status');
    if (storedPayInStoreState !== undefined) {
      this.payInStoreState = storedPayInStoreState as 'idle' | 'loading' | 'success' | 'error';
    } else {
      setState('ui.reservationManagement.action.payInStore.status', this.payInStoreState);
    }
    const storedPayInStoreReservationId = getState('ui.reservationManagement.input.payInStore.reservationId');
    if (storedPayInStoreReservationId !== undefined) {
      this.payInStoreReservationId = storedPayInStoreReservationId as string;
    } else {
      setState('ui.reservationManagement.input.payInStore.reservationId', this.payInStoreReservationId);
    }
    const storedPayInStorePaymentMethod = getState('ui.reservationManagement.input.payInStore.paymentMethod');
    if (storedPayInStorePaymentMethod !== undefined) {
      this.payInStorePaymentMethod = storedPayInStorePaymentMethod as unknown;
    } else {
      setState('ui.reservationManagement.input.payInStore.paymentMethod', this.payInStorePaymentMethod);
    }
    const storedPayInStorePaymentAmount = getState('ui.reservationManagement.input.payInStore.paymentAmount');
    if (storedPayInStorePaymentAmount !== undefined) {
      this.payInStorePaymentAmount = storedPayInStorePaymentAmount as number | '';
    } else {
      setState('ui.reservationManagement.input.payInStore.paymentAmount', this.payInStorePaymentAmount);
    }
    const storedPayInStoreOutput = getState('ui.reservationManagement.output.payInStore');
    if (storedPayInStoreOutput !== undefined) {
      this.payInStoreOutput = storedPayInStoreOutput as PetShopPayInStoreOutput | null;
    } else {
      setState('ui.reservationManagement.output.payInStore', this.payInStoreOutput);
    }
    const storedPayInStoreError = getState('ui.reservationManagement.action.payInStore.error');
    if (storedPayInStoreError !== undefined) {
      this.payInStoreError = storedPayInStoreError as string;
    } else {
      setState('ui.reservationManagement.action.payInStore.error', this.payInStoreError);
    }
    const storedExpireReservationsState = getState('ui.reservationManagement.action.expireReservations.status');
    if (storedExpireReservationsState !== undefined) {
      this.expireReservationsState = storedExpireReservationsState as 'idle' | 'loading' | 'success' | 'error';
    } else {
      setState('ui.reservationManagement.action.expireReservations.status', this.expireReservationsState);
    }
    const storedExpireReservationsOutput = getState('ui.reservationManagement.output.expireReservations');
    if (storedExpireReservationsOutput !== undefined) {
      this.expireReservationsOutput = storedExpireReservationsOutput as PetShopExpireReservationsOutput | null;
    } else {
      setState('ui.reservationManagement.output.expireReservations', this.expireReservationsOutput);
    }
    const storedExpireReservationsError = getState('ui.reservationManagement.action.expireReservations.error');
    if (storedExpireReservationsError !== undefined) {
      this.expireReservationsError = storedExpireReservationsError as string;
    } else {
      setState('ui.reservationManagement.action.expireReservations.error', this.expireReservationsError);
    }
    subscribe(this._stateKeys, this);
    void this.loadListReservations();
  }

  public override disconnectedCallback(): void {
    unsubscribe(this._stateKeys, this);
    super.disconnectedCallback();
  }

  /** action listReservations (query) — route petShop.listReservations.listReservations; inputs: status; writes ui.reservationManagement.data.listReservations; status ui.reservationManagement.action.listReservations.status */
  public async loadListReservations(): Promise<boolean> {
    this.listReservationsState = 'loading';
    setState('ui.reservationManagement.action.listReservations.status', this.listReservationsState);
    const params: PetShopListReservationsInput = {};
    if (this.listReservationsStatus) {
      params.status = this.listReservationsStatus;
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopListReservationsOutput>('petShop.listReservations.listReservations', params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.listReservationsData = Array.isArray(data) ? data : [];
      setState('ui.reservationManagement.data.listReservations', this.listReservationsData);
      this.listReservationsState = 'success';
      setState('ui.reservationManagement.action.listReservations.status', this.listReservationsState);
      return true;
    }
    this.listReservationsState = 'error';
    setState('ui.reservationManagement.action.listReservations.status', this.listReservationsState);
    if (response.error) {
      console.error(response.error);
    }
    return false;
  }

  /** handler for action listReservations — bind UI events here */
  public handleListReservationsClick(): void {
    void this.loadListReservations();
  }

  /** action updateReservationStatus (command) — route petShop.reservationLifecycle.updateReservationStatus; inputs: reservationId, status, cancelReason, paymentId; writes ui.reservationManagement.output.updateReservationStatus; status ui.reservationManagement.action.updateReservationStatus.status; feedback keys action.updateReservationStatus.success / action.updateReservationStatus.error */
  public async updateReservationStatus(signal?: AbortSignal): Promise<boolean> {
    this.updateReservationStatusState = 'loading';
    setState('ui.reservationManagement.action.updateReservationStatus.status', this.updateReservationStatusState);
    const params: PetShopUpdateReservationStatusInput = {
      reservationId: this.updateReservationStatusReservationId,
      status: this.updateReservationStatusStatus as PetShopUpdateReservationStatusInput['status'],
      cancelReason: this.updateReservationStatusCancelReason || undefined,
      paymentId: this.updateReservationStatusPaymentId || undefined,
    };
    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<PetShopUpdateReservationStatusOutput>(
      'petShop.reservationLifecycle.updateReservationStatus',
      params,
      options,
    );
    if (!response.ok) {
      this.updateReservationStatusError = response.error?.message ?? '';
      setState('ui.reservationManagement.action.updateReservationStatus.error', this.updateReservationStatusError);
      this.updateReservationStatusState = 'error';
      setState('ui.reservationManagement.action.updateReservationStatus.status', this.updateReservationStatusState);
      return false;
    }
    this.updateReservationStatusOutput = response.data ?? null;
    setState('ui.reservationManagement.output.updateReservationStatus', this.updateReservationStatusOutput);
    const refreshOk = await this.loadListReservations();
    if (!refreshOk) {
      this.updateReservationStatusState = 'error';
      setState('ui.reservationManagement.action.updateReservationStatus.status', this.updateReservationStatusState);
      return false;
    }
    this.updateReservationStatusReservationId = '';
    setState('ui.reservationManagement.input.updateReservationStatus.reservationId', this.updateReservationStatusReservationId);
    this.updateReservationStatusStatus = '';
    setState('ui.reservationManagement.input.updateReservationStatus.status', this.updateReservationStatusStatus);
    this.updateReservationStatusCancelReason = '';
    setState('ui.reservationManagement.input.updateReservationStatus.cancelReason', this.updateReservationStatusCancelReason);
    this.updateReservationStatusPaymentId = '';
    setState('ui.reservationManagement.input.updateReservationStatus.paymentId', this.updateReservationStatusPaymentId);
    this.updateReservationStatusError = '';
    setState('ui.reservationManagement.action.updateReservationStatus.error', this.updateReservationStatusError);
    this.updateReservationStatusState = 'success';
    setState('ui.reservationManagement.action.updateReservationStatus.status', this.updateReservationStatusState);
    return true;
  }

  /** handler for action updateReservationStatus — bind UI events here */
  public handleUpdateReservationStatusClick(): void {
    void runBlockingUiAction((signal: AbortSignal) => this.updateReservationStatus(signal));
  }

  /** action payInStore (command) — route petShop.reservationLifecycle.payInStore; inputs: reservationId, paymentMethod, paymentAmount; writes ui.reservationManagement.output.payInStore; status ui.reservationManagement.action.payInStore.status; feedback keys action.payInStore.success / action.payInStore.error */
  public async payInStore(signal?: AbortSignal): Promise<boolean> {
    this.payInStoreState = 'loading';
    setState('ui.reservationManagement.action.payInStore.status', this.payInStoreState);
    const params: PetShopPayInStoreInput = {
      reservationId: this.payInStoreReservationId,
      paymentMethod: this.payInStorePaymentMethod,
      paymentAmount: this.payInStorePaymentAmount as number,
    };
    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<PetShopPayInStoreOutput>(
      'petShop.reservationLifecycle.payInStore',
      params,
      options,
    );
    if (!response.ok) {
      this.payInStoreError = response.error?.message ?? '';
      setState('ui.reservationManagement.action.payInStore.error', this.payInStoreError);
      this.payInStoreState = 'error';
      setState('ui.reservationManagement.action.payInStore.status', this.payInStoreState);
      return false;
    }
    this.payInStoreOutput = response.data ?? null;
    setState('ui.reservationManagement.output.payInStore', this.payInStoreOutput);
    const refreshOk = await this.loadListReservations();
    if (!refreshOk) {
      this.payInStoreState = 'error';
      setState('ui.reservationManagement.action.payInStore.status', this.payInStoreState);
      return false;
    }
    this.payInStoreReservationId = '';
    setState('ui.reservationManagement.input.payInStore.reservationId', this.payInStoreReservationId);
    this.payInStorePaymentMethod = '';
    setState('ui.reservationManagement.input.payInStore.paymentMethod', this.payInStorePaymentMethod);
    this.payInStorePaymentAmount = '';
    setState('ui.reservationManagement.input.payInStore.paymentAmount', this.payInStorePaymentAmount);
    this.payInStoreError = '';
    setState('ui.reservationManagement.action.payInStore.error', this.payInStoreError);
    this.payInStoreState = 'success';
    setState('ui.reservationManagement.action.payInStore.status', this.payInStoreState);
    return true;
  }

  /** handler for action payInStore — bind UI events here */
  public handlePayInStoreClick(): void {
    void runBlockingUiAction((signal: AbortSignal) => this.payInStore(signal));
  }

  /** action expireReservations (command) — route petShop.reservationLifecycle.expireReservations; inputs: none; writes ui.reservationManagement.output.expireReservations; status ui.reservationManagement.action.expireReservations.status; feedback keys action.expireReservations.success / action.expireReservations.error */
  public async expireReservations(signal?: AbortSignal): Promise<boolean> {
    this.expireReservationsState = 'loading';
    setState('ui.reservationManagement.action.expireReservations.status', this.expireReservationsState);
    const params: PetShopExpireReservationsInput = {};
    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<PetShopExpireReservationsOutput>(
      'petShop.reservationLifecycle.expireReservations',
      params,
      options,
    );
    if (!response.ok) {
      this.expireReservationsError = response.error?.message ?? '';
      setState('ui.reservationManagement.action.expireReservations.error', this.expireReservationsError);
      this.expireReservationsState = 'error';
      setState('ui.reservationManagement.action.expireReservations.status', this.expireReservationsState);
      return false;
    }
    this.expireReservationsOutput = response.data ?? null;
    setState('ui.reservationManagement.output.expireReservations', this.expireReservationsOutput);
    const refreshOk = await this.loadListReservations();
    if (!refreshOk) {
      this.expireReservationsState = 'error';
      setState('ui.reservationManagement.action.expireReservations.status', this.expireReservationsState);
      return false;
    }
    this.expireReservationsError = '';
    setState('ui.reservationManagement.action.expireReservations.error', this.expireReservationsError);
    this.expireReservationsState = 'success';
    setState('ui.reservationManagement.action.expireReservations.status', this.expireReservationsState);
    return true;
  }

  /** handler for action expireReservations — bind UI events here */
  public handleExpireReservationsClick(): void {
    void runBlockingUiAction((signal: AbortSignal) => this.expireReservations(signal));
  }

  /** setter for state ui.reservationManagement.input.listReservations.status */
  public setListReservationsStatus(value: PetShopListReservationsInput['status'] | ''): void {
    this.listReservationsStatus = value;
    setState('ui.reservationManagement.input.listReservations.status', this.listReservationsStatus);
  }

  /** handler for action set.listReservationsStatus — bind UI events here */
  public handleListReservationsStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setListReservationsStatus(target.value as PetShopListReservationsInput['status'] | '');
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatus.reservationId */
  public setUpdateReservationStatusReservationId(value: string): void {
    this.updateReservationStatusReservationId = value;
    setState('ui.reservationManagement.input.updateReservationStatus.reservationId', this.updateReservationStatusReservationId);
    const sourceState = getState('ui.reservationManagement.data.listReservations') as PetShopListReservationsOutput | undefined;
    const collection = Array.isArray(sourceState) ? sourceState : this.listReservationsData;
    const match = collection.find((item: PetShopListReservationsOutputItem) => {
      return String(item.reservationId) === String(value);
    });
    if (match && match.status !== undefined && match.status !== null) {
      const nextStatus = match.status as PetShopUpdateReservationStatusInput['status'];
      this.updateReservationStatusStatus = nextStatus;
      setState('ui.reservationManagement.input.updateReservationStatus.status', this.updateReservationStatusStatus);
    }
  }

  /** handler for action set.updateReservationStatusReservationId — bind UI events here */
  public handleUpdateReservationStatusReservationIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setUpdateReservationStatusReservationId(target.value);
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatus.status */
  public setUpdateReservationStatusStatus(value: PetShopUpdateReservationStatusInput['status'] | ''): void {
    this.updateReservationStatusStatus = value;
    setState('ui.reservationManagement.input.updateReservationStatus.status', this.updateReservationStatusStatus);
  }

  /** handler for action set.updateReservationStatusStatus — bind UI events here */
  public handleUpdateReservationStatusStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setUpdateReservationStatusStatus(target.value as PetShopUpdateReservationStatusInput['status'] | '');
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatus.cancelReason */
  public setUpdateReservationStatusCancelReason(value: string): void {
    this.updateReservationStatusCancelReason = value;
    setState('ui.reservationManagement.input.updateReservationStatus.cancelReason', this.updateReservationStatusCancelReason);
  }

  /** handler for action set.updateReservationStatusCancelReason — bind UI events here */
  public handleUpdateReservationStatusCancelReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setUpdateReservationStatusCancelReason(target.value);
  }

  /** setter for state ui.reservationManagement.input.updateReservationStatus.paymentId */
  public setUpdateReservationStatusPaymentId(value: string): void {
    this.updateReservationStatusPaymentId = value;
    setState('ui.reservationManagement.input.updateReservationStatus.paymentId', this.updateReservationStatusPaymentId);
  }

  /** handler for action set.updateReservationStatusPaymentId — bind UI events here */
  public handleUpdateReservationStatusPaymentIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setUpdateReservationStatusPaymentId(target.value);
  }

  /** setter for state ui.reservationManagement.input.payInStore.reservationId */
  public setPayInStoreReservationId(value: string): void {
    this.payInStoreReservationId = value;
    setState('ui.reservationManagement.input.payInStore.reservationId', this.payInStoreReservationId);
  }

  /** handler for action set.payInStoreReservationId — bind UI events here */
  public handlePayInStoreReservationIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setPayInStoreReservationId(target.value);
  }

  /** setter for state ui.reservationManagement.input.payInStore.paymentMethod */
  public setPayInStorePaymentMethod(value: unknown): void {
    this.payInStorePaymentMethod = value;
    setState('ui.reservationManagement.input.payInStore.paymentMethod', this.payInStorePaymentMethod);
  }

  /** handler for action set.payInStorePaymentMethod — bind UI events here */
  public handlePayInStorePaymentMethodChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    this.setPayInStorePaymentMethod(target.value);
  }

  /** setter for state ui.reservationManagement.input.payInStore.paymentAmount */
  public setPayInStorePaymentAmount(value: number | ''): void {
    this.payInStorePaymentAmount = value;
    setState('ui.reservationManagement.input.payInStore.paymentAmount', this.payInStorePaymentAmount);
  }

  /** handler for action set.payInStorePaymentAmount — bind UI events here */
  public handlePayInStorePaymentAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return;
    }
    const rawValue = target.value;
    if (rawValue === '') {
      this.setPayInStorePaymentAmount('');
      return;
    }
    const parsedValue = Number(rawValue);
    if (!Number.isNaN(parsedValue)) {
      this.setPayInStorePaymentAmount(parsedValue);
    }
  }
}
