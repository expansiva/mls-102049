/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseServicesInput,
  PetShopBrowseServicesOutput,
  PetShopCreateServiceInput,
  PetShopCreateServiceOutput,
  PetShopUpdateServiceInput,
  PetShopUpdateServiceOutput,
} from '/_102049_/l2/petShop/web/contracts/serviceManagement.js';

/// **collab_i18n_start**
const message_pt = {
  "section.serviceManagement.title": "Gestão de serviços",
  "browseServices.title": "Serviços cadastrados",
  "browseServices.empty": "Nenhum serviço cadastrado ainda. Clique em \"Cadastrar serviço\" para adicionar o primeiro.",
  "createService.title": "Cadastrar novo serviço",
  "createService.empty": "Preencha os campos abaixo para cadastrar um novo serviço.",
  "updateService.title": "Editar serviço",
  "updateService.empty": "Selecione um serviço na lista para editar seus dados.",
  "field.name": "Nome",
  "field.description": "Descrição",
  "field.estimatedDurationMinutes": "Duração estimada (min)",
  "field.price": "Preço",
  "field.status": "Status",
  "field.serviceId": "ID do serviço",
  "filter.statusFilter": "Filtrar por status",
  "toolbar.createService": "Cadastrar serviço",
  "rowAction.updateService": "Editar",
  "action.createService.submit": "Confirmar cadastro",
  "action.updateService.submit": "Salvar alterações",
  "status.active": "Ativo",
  "status.inactive": "Inativo",
  "action.createService.success": "Serviço cadastrado com sucesso e disponível para agendamento.",
  "action.createService.error": "Não foi possível cadastrar o serviço. Verifique os dados e tente novamente.",
  "action.updateService.success": "Serviço atualizado com sucesso.",
  "action.updateService.error": "Não foi possível atualizar o serviço. Verifique os dados e tente novamente.",
  "org.browse.services.title": "Listar serviços cadastrados com filtros e ações por linha",
  "org.create.service.title": "Formulário de cadastro de novo serviço",
  "org.update.service.title": "Formulário de edição e ativação/desativação de serviço existente"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopServiceManagementBase extends CollabLitElement {
  @property({ type: String }) status: string = '';

  @property({ type: String }) browseServicesState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) browseServicesStatusFilter: string = '';
  @property({ type: Object }) browseServicesData: PetShopBrowseServicesOutput = { items: [], total: 0 };

  @property({ type: String }) createServiceState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) createServiceName: string = '';
  @property({ type: String }) createServiceDescription: string = '';
  @property({ type: String }) createServiceEstimatedDurationMinutes: string = '';
  @property({ type: String }) createServicePrice: string = '';
  @property({ type: Object }) createServiceOutput: PetShopCreateServiceOutput | null = null;
  @property({ type: String }) createServiceError: string = '';

  @property({ type: String }) updateServiceState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) updateServiceServiceId: string = '';
  @property({ type: String }) updateServiceName: string = '';
  @property({ type: String }) updateServiceDescription: string = '';
  @property({ type: String }) updateServiceEstimatedDurationMinutes: string = '';
  @property({ type: String }) updateServicePrice: string = '';
  @property({ type: String }) updateServiceStatus: string = '';
  @property({ type: Object }) updateServiceOutput: PetShopUpdateServiceOutput | null = null;
  @property({ type: String }) updateServiceError: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  /* ---------- State setters ---------- */

  setBrowseServicesStatusFilter(value: string): void {
    this.browseServicesStatusFilter = value;
    setState('ui.serviceManagement.input.browseServices.statusFilter', value);
    this.requestUpdate();
  }

  handleBrowseServicesStatusFilterChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (!target) return;
    this.setBrowseServicesStatusFilter(target.value);
  }

  setCreateServiceName(value: string): void {
    this.createServiceName = value;
    setState('ui.serviceManagement.input.createService.name', value);
    this.requestUpdate();
  }

  handleCreateServiceNameChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | null;
    if (!target) return;
    this.setCreateServiceName(target.value);
  }

  setCreateServiceDescription(value: string): void {
    this.createServiceDescription = value;
    setState('ui.serviceManagement.input.createService.description', value);
    this.requestUpdate();
  }

  handleCreateServiceDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | null;
    if (!target) return;
    this.setCreateServiceDescription(target.value);
  }

  setCreateServiceEstimatedDurationMinutes(value: string): void {
    this.createServiceEstimatedDurationMinutes = value;
    setState('ui.serviceManagement.input.createService.estimatedDurationMinutes', value);
    this.requestUpdate();
  }

  handleCreateServiceEstimatedDurationMinutesChange(e: Event): void {
    const target = e.target as HTMLInputElement | null;
    if (!target) return;
    this.setCreateServiceEstimatedDurationMinutes(target.value);
  }

  setCreateServicePrice(value: string): void {
    this.createServicePrice = value;
    setState('ui.serviceManagement.input.createService.price', value);
    this.requestUpdate();
  }

  handleCreateServicePriceChange(e: Event): void {
    const target = e.target as HTMLInputElement | null;
    if (!target) return;
    this.setCreateServicePrice(target.value);
  }

  setUpdateServiceServiceId(value: string): void {
    this.updateServiceServiceId = value;
    setState('ui.serviceManagement.input.updateService.serviceId', value);
    this.requestUpdate();
  }

  handleUpdateServiceServiceIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (!target) return;
    this.setUpdateServiceServiceId(target.value);
  }

  setUpdateServiceName(value: string): void {
    this.updateServiceName = value;
    setState('ui.serviceManagement.input.updateService.name', value);
    this.requestUpdate();
  }

  handleUpdateServiceNameChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | null;
    if (!target) return;
    this.setUpdateServiceName(target.value);
  }

  setUpdateServiceDescription(value: string): void {
    this.updateServiceDescription = value;
    setState('ui.serviceManagement.input.updateService.description', value);
    this.requestUpdate();
  }

  handleUpdateServiceDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | null;
    if (!target) return;
    this.setUpdateServiceDescription(target.value);
  }

  setUpdateServiceEstimatedDurationMinutes(value: string): void {
    this.updateServiceEstimatedDurationMinutes = value;
    setState('ui.serviceManagement.input.updateService.estimatedDurationMinutes', value);
    this.requestUpdate();
  }

  handleUpdateServiceEstimatedDurationMinutesChange(e: Event): void {
    const target = e.target as HTMLInputElement | null;
    if (!target) return;
    this.setUpdateServiceEstimatedDurationMinutes(target.value);
  }

  setUpdateServicePrice(value: string): void {
    this.updateServicePrice = value;
    setState('ui.serviceManagement.input.updateService.price', value);
    this.requestUpdate();
  }

  handleUpdateServicePriceChange(e: Event): void {
    const target = e.target as HTMLInputElement | null;
    if (!target) return;
    this.setUpdateServicePrice(target.value);
  }

  setUpdateServiceStatus(value: string): void {
    this.updateServiceStatus = value;
    setState('ui.serviceManagement.input.updateService.status', value);
    this.requestUpdate();
  }

  handleUpdateServiceStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (!target) return;
    this.setUpdateServiceStatus(target.value);
  }

  /* ---------- Query / Command actions ---------- */

  async loadBrowseServices(): Promise<void> {
    this.browseServicesState = 'loading';
    setState('ui.serviceManagement.action.browseServices.status', 'loading');
    this.requestUpdate();

    const params: PetShopBrowseServicesInput = {};
    if (this.browseServicesStatusFilter === 'active' || this.browseServicesStatusFilter === 'inactive') {
      params.statusFilter = this.browseServicesStatusFilter;
    }

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopBrowseServicesOutput>(
      'petShop.browseServices.browseServices',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? { items: [], total: 0 };
      this.browseServicesData = data;
      setState('ui.serviceManagement.data.browseServices', data);
      this.browseServicesState = 'success';
      setState('ui.serviceManagement.action.browseServices.status', 'success');
    } else {
      this.browseServicesData = { items: [], total: 0 };
      setState('ui.serviceManagement.data.browseServices', { items: [], total: 0 });
      this.browseServicesState = 'error';
      setState('ui.serviceManagement.action.browseServices.status', 'error');
      if (response.error) {
        console.error('[browseServices]', response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseServicesClick(): void {
    this.loadBrowseServices();
  }

  async createService(): Promise<void> {
    this.createServiceState = 'loading';
    setState('ui.serviceManagement.action.createService.status', 'loading');
    this.createServiceError = '';
    setState('ui.serviceManagement.action.createService.error', '');
    this.requestUpdate();

    const estimatedDuration = parseInt(this.createServiceEstimatedDurationMinutes, 10);
    const price = parseFloat(this.createServicePrice);

    const params: PetShopCreateServiceInput = {
      name: this.createServiceName,
      description: this.createServiceDescription,
      estimatedDurationMinutes: isNaN(estimatedDuration) ? 0 : estimatedDuration,
      price: isNaN(price) ? 0 : price,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopCreateServiceOutput>(
      'petShop.createService.createService',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.createServiceOutput = data;
      setState('ui.serviceManagement.output.createService', data);

      // Refresh browseServices before setting success
      await this.loadBrowseServices();
      if (this.browseServicesState === 'error') {
        this.createServiceState = 'error';
        setState('ui.serviceManagement.action.createService.status', 'error');
        this.requestUpdate();
        return;
      }

      // Clear inputs
      this.createServiceName = '';
      setState('ui.serviceManagement.input.createService.name', '');
      this.createServiceDescription = '';
      setState('ui.serviceManagement.input.createService.description', '');
      this.createServiceEstimatedDurationMinutes = '';
      setState('ui.serviceManagement.input.createService.estimatedDurationMinutes', '');
      this.createServicePrice = '';
      setState('ui.serviceManagement.input.createService.price', '');

      this.createServiceState = 'success';
      setState('ui.serviceManagement.action.createService.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.createService.error'];
      this.createServiceError = errorMsg;
      setState('ui.serviceManagement.action.createService.error', errorMsg);
      this.createServiceState = 'error';
      setState('ui.serviceManagement.action.createService.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateServiceClick(): void {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createService();
    }, { mode: 'blocking' });
  }

  async updateService(): Promise<void> {
    this.updateServiceState = 'loading';
    setState('ui.serviceManagement.action.updateService.status', 'loading');
    this.updateServiceError = '';
    setState('ui.serviceManagement.action.updateService.error', '');
    this.requestUpdate();

    const estimatedDuration = parseInt(this.updateServiceEstimatedDurationMinutes, 10);
    const price = parseFloat(this.updateServicePrice);

    const params: PetShopUpdateServiceInput = {
      serviceId: this.updateServiceServiceId,
      name: this.updateServiceName,
      description: this.updateServiceDescription,
      estimatedDurationMinutes: isNaN(estimatedDuration) ? 0 : estimatedDuration,
      price: isNaN(price) ? 0 : price,
      status: (this.updateServiceStatus === 'active' || this.updateServiceStatus === 'inactive')
        ? this.updateServiceStatus
        : 'active',
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopUpdateServiceOutput>(
      'petShop.updateService.updateService',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.updateServiceOutput = data;
      setState('ui.serviceManagement.output.updateService', data);

      // Refresh browseServices before setting success
      await this.loadBrowseServices();
      if (this.browseServicesState === 'error') {
        this.updateServiceState = 'error';
        setState('ui.serviceManagement.action.updateService.status', 'error');
        this.requestUpdate();
        return;
      }

      // Clear inputs
      this.updateServiceServiceId = '';
      setState('ui.serviceManagement.input.updateService.serviceId', '');
      this.updateServiceName = '';
      setState('ui.serviceManagement.input.updateService.name', '');
      this.updateServiceDescription = '';
      setState('ui.serviceManagement.input.updateService.description', '');
      this.updateServiceEstimatedDurationMinutes = '';
      setState('ui.serviceManagement.input.updateService.estimatedDurationMinutes', '');
      this.updateServicePrice = '';
      setState('ui.serviceManagement.input.updateService.price', '');
      this.updateServiceStatus = '';
      setState('ui.serviceManagement.input.updateService.status', '');

      this.updateServiceState = 'success';
      setState('ui.serviceManagement.action.updateService.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.updateService.error'];
      this.updateServiceError = errorMsg;
      setState('ui.serviceManagement.action.updateService.error', errorMsg);
      this.updateServiceState = 'error';
      setState('ui.serviceManagement.action.updateService.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateServiceClick(): void {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateService();
    }, { mode: 'blocking' });
  }

  /* ---------- Lifecycle ---------- */

  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global store where useful
    const savedStatusFilter = getState('ui.serviceManagement.input.browseServices.statusFilter') as string | undefined;
    if (savedStatusFilter !== undefined && savedStatusFilter !== null) {
      this.browseServicesStatusFilter = savedStatusFilter;
    }

    const savedBrowseData = getState('ui.serviceManagement.data.browseServices') as PetShopBrowseServicesOutput | undefined;
    if (savedBrowseData) {
      this.browseServicesData = savedBrowseData;
    }

    // Subscribe to shared states
    subscribe(
      [
        'ui.serviceManagement.input.browseServices.statusFilter',
        'ui.serviceManagement.data.browseServices',
      ],
      this,
    );

    // Run initial loads
    this.loadBrowseServices();
  }

  disconnectedCallback(): void {
    unsubscribe(
      [
        'ui.serviceManagement.input.browseServices.statusFilter',
        'ui.serviceManagement.data.browseServices',
      ],
      this,
    );
    super.disconnectedCallback();
  }
}
