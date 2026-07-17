/// <mls fileReference="_102049_/l2/petShop/web/shared/myReservations.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';

import type {
  PetShopCreateReservationOutput,
  PetShopCancelReservationOutput,
  PetShopViewMyReservationsOutput,
} from '/_102049_/l2/petShop/web/contracts/myReservations.js';

export type {
  PetShopCreateReservationInput,
  PetShopCreateReservationItem,
  PetShopCreateReservationOutput,
  PetShopCancelReservationInput,
  PetShopCancelReservationRestoredProduct,
  PetShopCancelReservationOutput,
  PetShopViewMyReservationsInput,
  PetShopViewMyReservationsItem,
  PetShopViewMyReservationsOutputItem,
  PetShopViewMyReservationsOutput,
} from '/_102049_/l2/petShop/web/contracts/myReservations.js';

/// **collab_i18n_start**
const message_pt = {
  "section.board.title": "Minhas Reservas",
  "section.create.title": "Criar Reserva",
  "section.cancel.title": "Cancelar Reserva",
  "column.reservationId.label": "Reserva",
  "column.status.label": "Status",
  "column.expiresAt.label": "Expira em",
  "column.createdAt.label": "Criada em",
  "column.confirmedAt.label": "Confirmada em",
  "column.readyAt.label": "Pronta em",
  "column.items.label": "Itens",
  "empty.board": "Nenhuma reserva encontrada",
  "empty.create": "Selecione produtos para criar uma reserva",
  "empty.cancel": "Selecione uma reserva no quadro para cancelar",
  "field.items.label": "Produtos e quantidades",
  "field.reservationId.label": "Reserva selecionada",
  "field.cancelReason.label": "Motivo do cancelamento (opcional)",
  "action.createReservation.label": "Criar Reserva",
  "action.cancelReservation.label": "Cancelar Reserva",
  "action.createReservation.success": "Reserva criada com sucesso! Você tem 24 horas para retirar na loja.",
  "action.createReservation.error": "Não foi possível criar a reserva. Verifique a disponibilidade dos produtos.",
  "action.cancelReservation.success": "Reserva cancelada com sucesso. Os produtos foram devolvidos ao estoque.",
  "action.cancelReservation.error": "Não foi possível cancelar a reserva. Tente novamente.",
  "rowAction.cancelReservation.label": "Cancelar",
  "toolbar.refresh.label": "Atualizar",
  "lane.active": "Ativas",
  "lane.ready": "Prontas para retirada",
  "lane.delivered": "Entregues",
  "lane.expired": "Expiradas",
  "lane.cancelled": "Canceladas",
  "page.myReservations.title": "Minhas Reservas",
  "section.reservations.title": "Minhas Reservas",
  "section.createReservation.title": "Nova Reserva",
  "organism.reservationList.title": "Lista de Reservas",
  "organism.createForm.title": "Criar Reserva",
  "intention.queryReservations.title": "Reservas",
  "intention.cancelReservation.title": "Cancelar Reserva",
  "intention.createReservation.title": "Criar Nova Reserva",
  "filter.status.label": "Filtrar por status",
  "action.viewMyReservations.label": "Atualizar",
  "action.selectForCancel.label": "Selecionar",
  "empty.reservations": "Você ainda não possui reservas.",
  "empty.cancelContext": "Selecione uma reserva ativa ou pronta para cancelar.",
  "empty.createForm": "Selecione produtos do catálogo para criar sua reserva."
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopMyReservationsBase extends CollabLitElement {
  /** state ui.myReservations.status — pageStatus */
  @property({ type: String }) status = '';

  /** state ui.myReservations.action.createReservation.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) createReservationState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.myReservations.input.createReservation.items — input */
  @property({ type: String }) createReservationItems = '';

  /** state ui.myReservations.output.createReservation — commandOutput */
  @property({ type: Object }) createReservationOutput: PetShopCreateReservationOutput | null = null;

  /** state ui.myReservations.action.createReservation.error — actionError */
  @property({ type: String }) createReservationError = '';

  /** state ui.myReservations.action.cancelReservation.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cancelReservationState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.myReservations.input.cancelReservation.reservationId — input (selection) */
  @property({ type: String }) cancelReservationReservationId = '';

  /** state ui.myReservations.input.cancelReservation.cancelReason — input */
  @property({ type: String }) cancelReservationCancelReason = '';

  /** state ui.myReservations.output.cancelReservation — commandOutput */
  @property({ type: Object }) cancelReservationOutput: PetShopCancelReservationOutput | null = null;

  /** state ui.myReservations.action.cancelReservation.error — actionError */
  @property({ type: String }) cancelReservationError = '';

  /** state ui.myReservations.action.viewMyReservations.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) viewMyReservationsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.myReservations.data.viewMyReservations — queryResult, outputShape: array */
  @property({ type: Array }) viewMyReservationsData: PetShopViewMyReservationsOutput = [];

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  /** action createReservation (command) — route petShop.reservationLifecycle.createReservation; inputs: items; writes ui.myReservations.output.createReservation; status ui.myReservations.action.createReservation.status; feedback keys action.createReservation.success / action.createReservation.error */
  async createReservation(): Promise<void> {
    this.createReservationState = 'loading';
    setState('ui.myReservations.action.createReservation.status', 'loading');

    const params = {
      items: this.createReservationItems,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    const response = await execBff<PetShopCreateReservationOutput>(
      'petShop.reservationLifecycle.createReservation',
      params,
      options
    );

    if (response.ok) {
      this.createReservationOutput = response.data ?? null;
      setState('ui.myReservations.output.createReservation', this.createReservationOutput);

      // Refresh query actions
      let refreshFailed = false;
      try {
        await this.loadViewMyReservations();
      } catch {
        refreshFailed = true;
      }

      if (refreshFailed) {
        this.createReservationState = 'error';
        setState('ui.myReservations.action.createReservation.status', 'error');
        return;
      }

      // Clear input state keys
      this.createReservationItems = '';
      setState('ui.myReservations.input.createReservation.items', '');

      this.createReservationState = 'success';
      setState('ui.myReservations.action.createReservation.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.createReservation.error'];
      this.createReservationError = errorMsg;
      setState('ui.myReservations.action.createReservation.error', errorMsg);
      this.createReservationState = 'error';
      setState('ui.myReservations.action.createReservation.status', 'error');
    }
  }

  /** handler for action createReservation — bind UI events here */
  async handleCreateReservationClick(e: Event): Promise<void> {
    e.preventDefault();
    await runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createReservation();
    });
  }

  /** action cancelReservation (command) — route petShop.reservationLifecycle.cancelReservation; inputs: reservationId, cancelReason; writes ui.myReservations.output.cancelReservation; status ui.myReservations.action.cancelReservation.status; feedback keys action.cancelReservation.success / action.cancelReservation.error */
  async cancelReservation(): Promise<void> {
    this.cancelReservationState = 'loading';
    setState('ui.myReservations.action.cancelReservation.status', 'loading');

    const params = {
      reservationId: this.cancelReservationReservationId,
      cancelReason: this.cancelReservationCancelReason,
    };

    const options: BffClientOptions = { mode: 'blocking' };

    const response = await execBff<PetShopCancelReservationOutput>(
      'petShop.reservationLifecycle.cancelReservation',
      params,
      options
    );

    if (response.ok) {
      this.cancelReservationOutput = response.data ?? null;
      setState('ui.myReservations.output.cancelReservation', this.cancelReservationOutput);

      // Refresh query actions
      let refreshFailed = false;
      try {
        await this.loadViewMyReservations();
      } catch {
        refreshFailed = true;
      }

      if (refreshFailed) {
        this.cancelReservationState = 'error';
        setState('ui.myReservations.action.cancelReservation.status', 'error');
        return;
      }

      // Clear input state keys
      this.cancelReservationReservationId = '';
      setState('ui.myReservations.input.cancelReservation.reservationId', '');
      this.cancelReservationCancelReason = '';
      setState('ui.myReservations.input.cancelReservation.cancelReason', '');

      this.cancelReservationState = 'success';
      setState('ui.myReservations.action.cancelReservation.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.cancelReservation.error'];
      this.cancelReservationError = errorMsg;
      setState('ui.myReservations.action.cancelReservation.error', errorMsg);
      this.cancelReservationState = 'error';
      setState('ui.myReservations.action.cancelReservation.status', 'error');
    }
  }

  /** handler for action cancelReservation — bind UI events here */
  async handleCancelReservationClick(e: Event): Promise<void> {
    e.preventDefault();
    await runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cancelReservation();
    });
  }

  /** action viewMyReservations (query) — route petShop.viewMyReservations.viewMyReservations; inputs: none; writes ui.myReservations.data.viewMyReservations; status ui.myReservations.action.viewMyReservations.status */
  async loadViewMyReservations(): Promise<void> {
    this.viewMyReservationsState = 'loading';
    setState('ui.myReservations.action.viewMyReservations.status', 'loading');

    const params: Record<string, unknown> = {};
    const options: BffClientOptions = { mode: 'silent' };

    const response = await execBff<PetShopViewMyReservationsOutput>(
      'petShop.viewMyReservations.viewMyReservations',
      params,
      options
    );

    if (response.ok) {
      this.viewMyReservationsData = response.data ?? [];
      setState('ui.myReservations.data.viewMyReservations', this.viewMyReservationsData);
      this.viewMyReservationsState = 'success';
      setState('ui.myReservations.action.viewMyReservations.status', 'success');
    } else {
      this.viewMyReservationsData = [];
      setState('ui.myReservations.data.viewMyReservations', []);
      this.viewMyReservationsState = 'error';
      setState('ui.myReservations.action.viewMyReservations.status', 'error');
    }
  }

  /** handler for action viewMyReservations — bind UI events here */
  async handleViewMyReservationsClick(e: Event): Promise<void> {
    e.preventDefault();
    await this.loadViewMyReservations();
  }

  /** setter for state ui.myReservations.input.createReservation.items */
  setCreateReservationItems(value: string): void {
    this.createReservationItems = value;
    setState('ui.myReservations.input.createReservation.items', value);
    this.requestUpdate();
  }

  /** handler for action set.createReservationItems — bind UI events here */
  handleCreateReservationItemsChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    this.setCreateReservationItems(target.value);
  }

  /** setter for state ui.myReservations.input.cancelReservation.reservationId */
  setCancelReservationReservationId(value: string): void {
    this.cancelReservationReservationId = value;
    setState('ui.myReservations.input.cancelReservation.reservationId', value);
    this.requestUpdate();
  }

  /** handler for action set.cancelReservationReservationId — bind UI events here */
  handleCancelReservationReservationIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCancelReservationReservationId(target.value);
  }

  /** setter for state ui.myReservations.input.cancelReservation.cancelReason */
  setCancelReservationCancelReason(value: string): void {
    this.cancelReservationCancelReason = value;
    setState('ui.myReservations.input.cancelReservation.cancelReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cancelReservationCancelReason — bind UI events here */
  handleCancelReservationCancelReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    this.setCancelReservationCancelReason(target.value);
  }

  override connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global store where useful
    const storedStatus = getState('ui.myReservations.status');
    if (storedStatus !== undefined) {
      this.status = storedStatus as string;
    }

    const storedCreateItems = getState('ui.myReservations.input.createReservation.items');
    if (storedCreateItems !== undefined) {
      this.createReservationItems = storedCreateItems as string;
    }

    const storedCancelReservationId = getState('ui.myReservations.input.cancelReservation.reservationId');
    if (storedCancelReservationId !== undefined) {
      this.cancelReservationReservationId = storedCancelReservationId as string;
    }

    const storedCancelReason = getState('ui.myReservations.input.cancelReservation.cancelReason');
    if (storedCancelReason !== undefined) {
      this.cancelReservationCancelReason = storedCancelReason as string;
    }

    const storedViewData = getState('ui.myReservations.data.viewMyReservations');
    if (storedViewData !== undefined) {
      this.viewMyReservationsData = storedViewData as PetShopViewMyReservationsOutput;
    }

    // Subscribe to shared states
    subscribe(
      [
        'ui.myReservations.status',
        'ui.myReservations.input.createReservation.items',
        'ui.myReservations.input.cancelReservation.reservationId',
        'ui.myReservations.input.cancelReservation.cancelReason',
        'ui.myReservations.data.viewMyReservations',
      ],
      this
    );

    // Run initial loads
    this.loadViewMyReservations();
  }

  override disconnectedCallback(): void {
    unsubscribe(
      [
        'ui.myReservations.status',
        'ui.myReservations.input.createReservation.items',
        'ui.myReservations.input.cancelReservation.reservationId',
        'ui.myReservations.input.cancelReservation.cancelReason',
        'ui.myReservations.data.viewMyReservations',
      ],
      this
    );
    super.disconnectedCallback();
  }
}
