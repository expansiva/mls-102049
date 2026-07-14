/// <mls fileReference="_102049_/l2/petShop/web/shared/operatorManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseOperatorsInput,
  PetShopBrowseOperatorsOutput,
  PetShopCreateOperatorInput,
  PetShopCreateOperatorOutput,
  PetShopUpdateOperatorInput,
  PetShopUpdateOperatorOutput,
} from '/_102049_/l2/petShop/web/contracts/operatorManagement.js';

/// **collab_i18n_start**
const message_pt = {
  "operatorManagement.browse.title": "Operadores cadastrados",
  "operatorManagement.browse.empty": "Nenhum operador cadastrado ainda. Clique em \"Cadastrar operador\" para adicionar o primeiro.",
  "operatorManagement.create.title": "Cadastrar operador",
  "operatorManagement.create.empty": "Preencha os dados abaixo para cadastrar um novo operador.",
  "operatorManagement.update.title": "Editar operador",
  "operatorManagement.update.empty": "Selecione um operador na lista para editar seus dados.",
  "operatorManagement.field.name": "Nome",
  "operatorManagement.field.email": "E-mail",
  "operatorManagement.field.phone": "Telefone",
  "operatorManagement.field.active": "Ativo",
  "operatorManagement.field.updatedAt": "Atualizado em",
  "operatorManagement.field.operatorId": "Operador",
  "operatorManagement.filter.active": "Apenas ativos",
  "operatorManagement.action.create": "Cadastrar operador",
  "operatorManagement.action.create.submit": "Salvar operador",
  "operatorManagement.action.update": "Editar",
  "operatorManagement.action.update.submit": "Salvar alterações",
  "action.createOperator.success": "Operador cadastrado com sucesso. Ele já está disponível para alocação em turnos e agendamentos.",
  "action.createOperator.error": "Não foi possível cadastrar o operador. Verifique os dados informados e tente novamente.",
  "action.updateOperator.success": "Dados do operador atualizados com sucesso.",
  "action.updateOperator.error": "Não foi possível atualizar o operador. Verifique os dados informados e tente novamente.",
  "sec.operator.management.title": "Sec operator management",
  "org.browse.operators.title": "Listar operadores cadastrados com filtros e ações por linha",
  "org.create.operator.title": "Cadastrar novo operador com nome, e mail, telefone e status ativo",
  "org.update.operator.title": "Editar dados de um operador selecionado na lista"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopOperatorManagementBase extends CollabLitElement {
  @property({ type: String }) status: string = '';

  @property({ type: String }) browseOperatorsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) browseOperatorsActiveFilter: string = '';
  @property({ type: Object }) browseOperatorsData: PetShopBrowseOperatorsOutput = { items: [], total: 0 };

  @property({ type: String }) createOperatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) createOperatorName: string = '';
  @property({ type: String }) createOperatorEmail: string = '';
  @property({ type: String }) createOperatorPhone: string = '';
  @property({ type: String }) createOperatorActive: string = '';
  @property({ type: Object }) createOperatorOutput: PetShopCreateOperatorOutput | null = null;
  @property({ type: String }) createOperatorError: string = '';

  @property({ type: String }) updateOperatorState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) updateOperatorOperatorId: string = '';
  @property({ type: String }) updateOperatorName: string = '';
  @property({ type: String }) updateOperatorEmail: string = '';
  @property({ type: String }) updateOperatorPhone: string = '';
  @property({ type: String }) updateOperatorActive: string = '';
  @property({ type: Object }) updateOperatorOutput: PetShopUpdateOperatorOutput | null = null;
  @property({ type: String }) updateOperatorError: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  private subscribedKeys: string[] = [];

  connectedCallback(): void {
    super.connectedCallback();

    const savedStatus = getState('ui.operatorManagement.status');
    if (savedStatus !== undefined) this.status = savedStatus as string;

    const savedBrowseState = getState('ui.operatorManagement.action.browseOperators.status');
    if (savedBrowseState !== undefined) this.browseOperatorsState = savedBrowseState as 'idle' | 'loading' | 'success' | 'error';

    const savedBrowseData = getState('ui.operatorManagement.data.browseOperators');
    if (savedBrowseData !== undefined) this.browseOperatorsData = savedBrowseData as PetShopBrowseOperatorsOutput;

    const savedActiveFilter = getState('ui.operatorManagement.input.browseOperators.activeFilter');
    if (savedActiveFilter !== undefined) this.browseOperatorsActiveFilter = savedActiveFilter as string;

    const savedCreateState = getState('ui.operatorManagement.action.createOperator.status');
    if (savedCreateState !== undefined) this.createOperatorState = savedCreateState as 'idle' | 'loading' | 'success' | 'error';

    const savedCreateError = getState('ui.operatorManagement.action.createOperator.error');
    if (savedCreateError !== undefined) this.createOperatorError = savedCreateError as string;

    const savedUpdateState = getState('ui.operatorManagement.action.updateOperator.status');
    if (savedUpdateState !== undefined) this.updateOperatorState = savedUpdateState as 'idle' | 'loading' | 'success' | 'error';

    const savedUpdateError = getState('ui.operatorManagement.action.updateOperator.error');
    if (savedUpdateError !== undefined) this.updateOperatorError = savedUpdateError as string;

    const sharedKeys = [
      'ui.operatorManagement.status',
      'ui.operatorManagement.data.browseOperators',
    ];
    subscribe(sharedKeys, this);
    this.subscribedKeys = sharedKeys;

    this.loadBrowseOperators();
  }

  disconnectedCallback(): void {
    if (this.subscribedKeys.length > 0) {
      unsubscribe(this.subscribedKeys, this);
    }
    super.disconnectedCallback();
  }

  // ---- Route param parsing ----

  private parseRouteParams(): Record<string, string> {
    const pattern = '/petShop/operatorManagement/:operatorId?';
    const patternParts = pattern.split('/').filter((p) => p.length > 0);
    const pathParts = window.location.pathname.split('/').filter((p) => p.length > 0);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(':')) {
        const isOptional = part.endsWith('?');
        const name = isOptional ? part.slice(1, -1) : part.slice(1);
        const value = pathParts[i] ? decodeURIComponent(pathParts[i]) : '';
        if (value) {
          params[name] = value;
        }
      }
    }
    return params;
  }

  // ---- Query: browseOperators ----

  async loadBrowseOperators(): Promise<void> {
    this.browseOperatorsState = 'loading';
    setState('ui.operatorManagement.action.browseOperators.status', 'loading');
    this.requestUpdate();

    const activeFilterBool = this.browseOperatorsActiveFilter === '' ? undefined : this.browseOperatorsActiveFilter === 'true';
    const params: PetShopBrowseOperatorsInput = {};
    if (activeFilterBool !== undefined) {
      params.activeFilter = activeFilterBool;
    }

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopBrowseOperatorsOutput>(
      'petShop.browseOperators.browseOperators',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? { items: [], total: 0 };
      this.browseOperatorsData = data;
      setState('ui.operatorManagement.data.browseOperators', data);
      this.browseOperatorsState = 'success';
      setState('ui.operatorManagement.action.browseOperators.status', 'success');
    } else {
      this.browseOperatorsData = { items: [], total: 0 };
      setState('ui.operatorManagement.data.browseOperators', { items: [], total: 0 });
      this.browseOperatorsState = 'error';
      setState('ui.operatorManagement.action.browseOperators.status', 'error');
      if (response.error) {
        console.error('[browseOperators]', response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseOperatorsClick(_e: Event): void {
    this.loadBrowseOperators();
  }

  // ---- Command: createOperator ----

  async createOperator(): Promise<void> {
    this.createOperatorState = 'loading';
    setState('ui.operatorManagement.action.createOperator.status', 'loading');
    this.createOperatorError = '';
    setState('ui.operatorManagement.action.createOperator.error', '');
    this.requestUpdate();

    const params: PetShopCreateOperatorInput = {
      name: this.createOperatorName,
      active: this.createOperatorActive === 'true',
    };
    if (this.createOperatorEmail) {
      params.email = this.createOperatorEmail;
    }
    if (this.createOperatorPhone) {
      params.phone = this.createOperatorPhone;
    }

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopCreateOperatorOutput>(
      'petShop.createOperator.createOperator',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.createOperatorOutput = data;
      setState('ui.operatorManagement.output.createOperator', data);

      // Refresh browseOperators first
      await this.loadBrowseOperators();

      // Clear inputs
      this.createOperatorName = '';
      setState('ui.operatorManagement.input.createOperator.name', '');
      this.createOperatorEmail = '';
      setState('ui.operatorManagement.input.createOperator.email', '');
      this.createOperatorPhone = '';
      setState('ui.operatorManagement.input.createOperator.phone', '');
      this.createOperatorActive = '';
      setState('ui.operatorManagement.input.createOperator.active', '');

      this.createOperatorState = 'success';
      setState('ui.operatorManagement.action.createOperator.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.createOperator.error'];
      this.createOperatorError = errorMsg;
      setState('ui.operatorManagement.action.createOperator.error', errorMsg);
      this.createOperatorState = 'error';
      setState('ui.operatorManagement.action.createOperator.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateOperatorClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createOperator();
    }, { mode: 'blocking' });
  }

  // ---- Command: updateOperator ----

  async updateOperator(): Promise<void> {
    // Parse route params
    const routeParams = this.parseRouteParams();
    const routeOperatorId = routeParams['operatorId'] ?? '';
    if (routeOperatorId && !this.updateOperatorOperatorId) {
      this.updateOperatorOperatorId = routeOperatorId;
      setState('ui.operatorManagement.input.updateOperator.operatorId', routeOperatorId);
    }

    if (!this.updateOperatorOperatorId) {
      this.updateOperatorState = 'idle';
      setState('ui.operatorManagement.action.updateOperator.status', 'idle');
      this.requestUpdate();
      return;
    }

    this.updateOperatorState = 'loading';
    setState('ui.operatorManagement.action.updateOperator.status', 'loading');
    this.updateOperatorError = '';
    setState('ui.operatorManagement.action.updateOperator.error', '');
    this.requestUpdate();

    const params: PetShopUpdateOperatorInput = {
      operatorId: this.updateOperatorOperatorId,
      name: this.updateOperatorName,
      active: this.updateOperatorActive === 'true',
    };
    if (this.updateOperatorEmail) {
      params.email = this.updateOperatorEmail;
    }
    if (this.updateOperatorPhone) {
      params.phone = this.updateOperatorPhone;
    }

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopUpdateOperatorOutput>(
      'petShop.updateOperator.updateOperator',
      params,
      options,
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.updateOperatorOutput = data;
      setState('ui.operatorManagement.output.updateOperator', data);

      // Refresh browseOperators first
      await this.loadBrowseOperators();

      // Clear inputs
      this.updateOperatorName = '';
      setState('ui.operatorManagement.input.updateOperator.name', '');
      this.updateOperatorEmail = '';
      setState('ui.operatorManagement.input.updateOperator.email', '');
      this.updateOperatorPhone = '';
      setState('ui.operatorManagement.input.updateOperator.phone', '');
      this.updateOperatorActive = '';
      setState('ui.operatorManagement.input.updateOperator.active', '');

      this.updateOperatorState = 'success';
      setState('ui.operatorManagement.action.updateOperator.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.updateOperator.error'];
      this.updateOperatorError = errorMsg;
      setState('ui.operatorManagement.action.updateOperator.error', errorMsg);
      this.updateOperatorState = 'error';
      setState('ui.operatorManagement.action.updateOperator.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateOperatorClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateOperator();
    }, { mode: 'blocking' });
  }

  // ---- State setters ----

  setBrowseOperatorsActiveFilter(value: string): void {
    this.browseOperatorsActiveFilter = value;
    setState('ui.operatorManagement.input.browseOperators.activeFilter', value);
    this.requestUpdate();
  }

  handleBrowseOperatorsActiveFilterChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? String(target.checked) : target.value;
    this.setBrowseOperatorsActiveFilter(value);
  }

  setCreateOperatorName(value: string): void {
    this.createOperatorName = value;
    setState('ui.operatorManagement.input.createOperator.name', value);
    this.requestUpdate();
  }

  handleCreateOperatorNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOperatorName(target.value);
  }

  setCreateOperatorEmail(value: string): void {
    this.createOperatorEmail = value;
    setState('ui.operatorManagement.input.createOperator.email', value);
    this.requestUpdate();
  }

  handleCreateOperatorEmailChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOperatorEmail(target.value);
  }

  setCreateOperatorPhone(value: string): void {
    this.createOperatorPhone = value;
    setState('ui.operatorManagement.input.createOperator.phone', value);
    this.requestUpdate();
  }

  handleCreateOperatorPhoneChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateOperatorPhone(target.value);
  }

  setCreateOperatorActive(value: string): void {
    this.createOperatorActive = value;
    setState('ui.operatorManagement.input.createOperator.active', value);
    this.requestUpdate();
  }

  handleCreateOperatorActiveChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? String(target.checked) : target.value;
    this.setCreateOperatorActive(value);
  }

  setUpdateOperatorOperatorId(value: string): void {
    this.updateOperatorOperatorId = value;
    setState('ui.operatorManagement.input.updateOperator.operatorId', value);
    this.requestUpdate();
  }

  handleUpdateOperatorOperatorIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOperatorOperatorId(target.value);
  }

  setUpdateOperatorName(value: string): void {
    this.updateOperatorName = value;
    setState('ui.operatorManagement.input.updateOperator.name', value);
    this.requestUpdate();
  }

  handleUpdateOperatorNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOperatorName(target.value);
  }

  setUpdateOperatorEmail(value: string): void {
    this.updateOperatorEmail = value;
    setState('ui.operatorManagement.input.updateOperator.email', value);
    this.requestUpdate();
  }

  handleUpdateOperatorEmailChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOperatorEmail(target.value);
  }

  setUpdateOperatorPhone(value: string): void {
    this.updateOperatorPhone = value;
    setState('ui.operatorManagement.input.updateOperator.phone', value);
    this.requestUpdate();
  }

  handleUpdateOperatorPhoneChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateOperatorPhone(target.value);
  }

  setUpdateOperatorActive(value: string): void {
    this.updateOperatorActive = value;
    setState('ui.operatorManagement.input.updateOperator.active', value);
    this.requestUpdate();
  }

  handleUpdateOperatorActiveChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? String(target.checked) : target.value;
    this.setUpdateOperatorActive(value);
  }
}
