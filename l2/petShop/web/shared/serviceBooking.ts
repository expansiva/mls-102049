/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceBooking.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseServiceCatalogOutput,
  PetShopCreateServiceBookingInput,
  PetShopCreateServiceBookingOutput,
} from '/_102049_/l2/petShop/web/contracts/serviceBooking.js';

/// **collab_i18n_start**
const message_pt = {
  "page.title": "Agendamento de Serviço",
  "section.catalog.title": "Serviços Disponíveis",
  "section.catalog.empty": "Nenhum serviço ativo encontrado. Volte mais tarde.",
  "section.booking.title": "Agendar Serviço",
  "section.booking.empty": "Selecione um serviço no catálogo acima para iniciar o agendamento.",
  "section.confirmation.title": "Confirmação do Agendamento",
  "section.confirmation.empty": "Após confirmar o agendamento, os detalhes aparecerão aqui.",
  "field.serviceId.label": "Serviço",
  "field.customerName.label": "Seu nome",
  "field.customerPhone.label": "Telefone",
  "field.bookingDate.label": "Data do agendamento",
  "field.bookingTime.label": "Horário",
  "field.notes.label": "Observações",
  "field.serviceBookingId.label": "Número do agendamento",
  "field.status.label": "Status",
  "column.serviceId.label": "ID",
  "column.name.label": "Serviço",
  "column.description.label": "Descrição",
  "column.estimatedDurationMinutes.label": "Duração estimada",
  "column.price.label": "Preço",
  "filter.name.label": "Buscar serviço",
  "action.browseServiceCatalog.label": "Atualizar serviços",
  "action.createServiceBooking.label": "Confirmar agendamento",
  "action.createServiceBooking.success": "Agendamento confirmado com sucesso! O pagamento será realizado presencialmente na loja.",
  "action.createServiceBooking.error": "Não foi possível concluir o agendamento. Verifique os dados e tente novamente.",
  "summary.paymentNotice": "Pagamento presencial na loja",
  "sec.catalog.title": "Sec catalog",
  "org.browseCatalog.title": "Ver serviços oferecidos",
  "sec.booking.title": "Sec booking",
  "org.createBooking.title": "Agendar serviço",
  "sec.confirmation.title": "Sec confirmation",
  "org.bookingSummary.title": "Revisar o contexto e o resultado das ações principais da página"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopServiceBookingBase extends CollabLitElement {
  @property({ type: String }) status: string = '';

  @property({ type: String }) browseServiceCatalogState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: Object }) browseServiceCatalogData: PetShopBrowseServiceCatalogOutput = { items: [], total: 0 };

  @property({ type: String }) createServiceBookingState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) createServiceBookingServiceId: string = '';
  @property({ type: String }) createServiceBookingCustomerName: string = '';
  @property({ type: String }) createServiceBookingCustomerPhone: string = '';
  @property({ type: String }) createServiceBookingBookingDate: string = '';
  @property({ type: String }) createServiceBookingBookingTime: string = '';
  @property({ type: String }) createServiceBookingNotes: string = '';

  @property({ type: Object }) createServiceBookingOutput: PetShopCreateServiceBookingOutput | null = null;

  @property({ type: String }) createServiceBookingError: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // ---- State key to property map ----
  private readonly stateKeyMap: Record<string, string> = {
    'ui.serviceBooking.status': 'status',
    'ui.serviceBooking.action.browseServiceCatalog.status': 'browseServiceCatalogState',
    'ui.serviceBooking.data.browseServiceCatalog': 'browseServiceCatalogData',
    'ui.serviceBooking.action.createServiceBooking.status': 'createServiceBookingState',
    'ui.serviceBooking.input.createServiceBooking.serviceId': 'createServiceBookingServiceId',
    'ui.serviceBooking.input.createServiceBooking.customerName': 'createServiceBookingCustomerName',
    'ui.serviceBooking.input.createServiceBooking.customerPhone': 'createServiceBookingCustomerPhone',
    'ui.serviceBooking.input.createServiceBooking.bookingDate': 'createServiceBookingBookingDate',
    'ui.serviceBooking.input.createServiceBooking.bookingTime': 'createServiceBookingBookingTime',
    'ui.serviceBooking.input.createServiceBooking.notes': 'createServiceBookingNotes',
    'ui.serviceBooking.output.createServiceBooking': 'createServiceBookingOutput',
    'ui.serviceBooking.action.createServiceBooking.error': 'createServiceBookingError',
  };

  private subscribedKeys: string[] = [];

  // ---- Query action: browseServiceCatalog ----
  async loadBrowseServiceCatalog(): Promise<void> {
    this.browseServiceCatalogState = 'loading';
    setState('ui.serviceBooking.action.browseServiceCatalog.status', 'loading');

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopBrowseServiceCatalogOutput>(
      'petShop.browseServiceCatalog.browseServiceCatalog',
      {},
      options,
    );

    if (response.ok) {
      const data = response.data ?? { items: [], total: 0 };
      this.browseServiceCatalogData = data;
      setState('ui.serviceBooking.data.browseServiceCatalog', data);
      this.browseServiceCatalogState = 'success';
      setState('ui.serviceBooking.action.browseServiceCatalog.status', 'success');
    } else {
      this.browseServiceCatalogData = { items: [], total: 0 };
      setState('ui.serviceBooking.data.browseServiceCatalog', { items: [], total: 0 });
      this.browseServiceCatalogState = 'error';
      setState('ui.serviceBooking.action.browseServiceCatalog.status', 'error');
      if (response.error) {
        console.error('[browseServiceCatalog]', response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseServiceCatalogClick(_e: Event): void {
    this.loadBrowseServiceCatalog();
  }

  // ---- Command action: createServiceBooking ----
  async createServiceBooking(): Promise<void> {
    this.createServiceBookingState = 'loading';
    setState('ui.serviceBooking.action.createServiceBooking.status', 'loading');
    this.createServiceBookingError = '';
    setState('ui.serviceBooking.action.createServiceBooking.error', '');

    const params: PetShopCreateServiceBookingInput = {
      serviceId: this.createServiceBookingServiceId,
      customerName: this.createServiceBookingCustomerName,
      customerPhone: this.createServiceBookingCustomerPhone,
      bookingDate: this.createServiceBookingBookingDate,
      bookingTime: this.createServiceBookingBookingTime,
      notes: this.createServiceBookingNotes || undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopCreateServiceBookingOutput>(
      'petShop.serviceBookingLifecycle.createServiceBooking',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.createServiceBookingOutput = data;
      setState('ui.serviceBooking.output.createServiceBooking', data);

      // Refresh browseServiceCatalog before setting success
      let refreshFailed = false;
      try {
        await this.loadBrowseServiceCatalog();
        if (this.browseServiceCatalogState === 'error') {
          refreshFailed = true;
        }
      } catch {
        refreshFailed = true;
      }

      if (refreshFailed) {
        this.createServiceBookingState = 'error';
        setState('ui.serviceBooking.action.createServiceBooking.status', 'error');
        this.createServiceBookingError = this.msg['action.createServiceBooking.error'];
        setState('ui.serviceBooking.action.createServiceBooking.error', this.createServiceBookingError);
      } else {
        // Clear input fields
        this.createServiceBookingServiceId = '';
        setState('ui.serviceBooking.input.createServiceBooking.serviceId', '');
        this.createServiceBookingCustomerName = '';
        setState('ui.serviceBooking.input.createServiceBooking.customerName', '');
        this.createServiceBookingCustomerPhone = '';
        setState('ui.serviceBooking.input.createServiceBooking.customerPhone', '');
        this.createServiceBookingBookingDate = '';
        setState('ui.serviceBooking.input.createServiceBooking.bookingDate', '');
        this.createServiceBookingBookingTime = '';
        setState('ui.serviceBooking.input.createServiceBooking.bookingTime', '');
        this.createServiceBookingNotes = '';
        setState('ui.serviceBooking.input.createServiceBooking.notes', '');

        this.createServiceBookingState = 'success';
        setState('ui.serviceBooking.action.createServiceBooking.status', 'success');
      }
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.createServiceBooking.error'];
      this.createServiceBookingError = errorMsg;
      setState('ui.serviceBooking.action.createServiceBooking.error', errorMsg);
      this.createServiceBookingState = 'error';
      setState('ui.serviceBooking.action.createServiceBooking.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateServiceBookingClick(_e: Event): void {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createServiceBooking();
    }, { mode: 'blocking' });
  }

  // ---- State setters ----
  setCreateServiceBookingServiceId(value: string): void {
    this.createServiceBookingServiceId = value;
    setState('ui.serviceBooking.input.createServiceBooking.serviceId', value);
    this.requestUpdate();
  }

  handleCreateServiceBookingServiceIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setCreateServiceBookingServiceId(target.value);
  }

  setCreateServiceBookingCustomerName(value: string): void {
    this.createServiceBookingCustomerName = value;
    setState('ui.serviceBooking.input.createServiceBooking.customerName', value);
    this.requestUpdate();
  }

  handleCreateServiceBookingCustomerNameChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setCreateServiceBookingCustomerName(target.value);
  }

  setCreateServiceBookingCustomerPhone(value: string): void {
    this.createServiceBookingCustomerPhone = value;
    setState('ui.serviceBooking.input.createServiceBooking.customerPhone', value);
    this.requestUpdate();
  }

  handleCreateServiceBookingCustomerPhoneChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setCreateServiceBookingCustomerPhone(target.value);
  }

  setCreateServiceBookingBookingDate(value: string): void {
    this.createServiceBookingBookingDate = value;
    setState('ui.serviceBooking.input.createServiceBooking.bookingDate', value);
    this.requestUpdate();
  }

  handleCreateServiceBookingBookingDateChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setCreateServiceBookingBookingDate(target.value);
  }

  setCreateServiceBookingBookingTime(value: string): void {
    this.createServiceBookingBookingTime = value;
    setState('ui.serviceBooking.input.createServiceBooking.bookingTime', value);
    this.requestUpdate();
  }

  handleCreateServiceBookingBookingTimeChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setCreateServiceBookingBookingTime(target.value);
  }

  setCreateServiceBookingNotes(value: string): void {
    this.createServiceBookingNotes = value;
    setState('ui.serviceBooking.input.createServiceBooking.notes', value);
    this.requestUpdate();
  }

  handleCreateServiceBookingNotesChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setCreateServiceBookingNotes(target.value);
  }

  // ---- Lifecycle ----
  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global state where useful, falling back to defaults
    const savedStatus = getState('ui.serviceBooking.status');
    this.status = typeof savedStatus === 'string' ? savedStatus : '';

    const savedBrowseStatus = getState('ui.serviceBooking.action.browseServiceCatalog.status');
    this.browseServiceCatalogState = (savedBrowseStatus as "idle" | "loading" | "success" | "error") ?? 'idle';

    const savedBrowseData = getState('ui.serviceBooking.data.browseServiceCatalog');
    this.browseServiceCatalogData = savedBrowseData ?? { items: [], total: 0 };

    const savedCreateStatus = getState('ui.serviceBooking.action.createServiceBooking.status');
    this.createServiceBookingState = (savedCreateStatus as "idle" | "loading" | "success" | "error") ?? 'idle';

    const savedCreateError = getState('ui.serviceBooking.action.createServiceBooking.error');
    this.createServiceBookingError = typeof savedCreateError === 'string' ? savedCreateError : '';

    const savedOutput = getState('ui.serviceBooking.output.createServiceBooking');
    this.createServiceBookingOutput = savedOutput ?? null;

    // Subscribe to shared states
    const keys = Object.keys(this.stateKeyMap);
    subscribe(keys, this);
    this.subscribedKeys = keys;

    // Run initial loads
    this.loadBrowseServiceCatalog();
  }

  disconnectedCallback(): void {
    if (this.subscribedKeys.length > 0) {
      unsubscribe(this.subscribedKeys, this);
      this.subscribedKeys = [];
    }
    super.disconnectedCallback();
  }
}
