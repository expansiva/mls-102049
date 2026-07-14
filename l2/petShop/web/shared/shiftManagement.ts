/// <mls fileReference="_102049_/l2/petShop/web/shared/shiftManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseShiftsInput,
  PetShopBrowseShiftsOutput,
  PetShopCreateShiftInput,
  PetShopCreateShiftOutput,
  PetShopUpdateShiftInput,
  PetShopUpdateShiftOutput,
} from '/_102049_/l2/petShop/web/contracts/shiftManagement.js';

/// **collab_i18n_start**
const message_pt = {
  "shiftManagement.section.gestaoTurnos.title": "Gestão de turnos",
  "shiftManagement.organism.browseShifts.title": "Turnos cadastrados",
  "shiftManagement.organism.createShift.title": "Novo turno",
  "shiftManagement.organism.updateShift.title": "Editar turno",
  "shiftManagement.intent.browseList.title": "Lista de turnos",
  "shiftManagement.intent.browseList.empty": "Nenhum turno encontrado. Crie um novo turno para começar.",
  "shiftManagement.intent.createForm.title": "Criar turno",
  "shiftManagement.intent.updateForm.title": "Atualizar turno",
  "shiftManagement.field.name.label": "Nome do turno",
  "shiftManagement.field.startTime.label": "Início",
  "shiftManagement.field.endTime.label": "Fim",
  "shiftManagement.field.monday.label": "Segunda",
  "shiftManagement.field.tuesday.label": "Terça",
  "shiftManagement.field.wednesday.label": "Quarta",
  "shiftManagement.field.thursday.label": "Quinta",
  "shiftManagement.field.friday.label": "Sexta",
  "shiftManagement.field.saturday.label": "Sábado",
  "shiftManagement.field.sunday.label": "Domingo",
  "shiftManagement.field.active.label": "Ativo",
  "shiftManagement.filter.activeFilter.label": "Somente ativos",
  "shiftManagement.action.createShift.label": "Novo turno",
  "shiftManagement.action.updateShift.label": "Editar",
  "shiftManagement.action.createShift.submit": "Criar turno",
  "shiftManagement.action.updateShift.submit": "Salvar alterações",
  "action.createShift.success": "Turno criado com sucesso.",
  "action.createShift.error": "Não foi possível criar o turno. Tente novamente.",
  "action.updateShift.success": "Turno atualizado com sucesso.",
  "action.updateShift.error": "Não foi possível atualizar o turno. Tente novamente."
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopShiftManagementBase extends CollabLitElement {
  // --- State properties ---

  @property({ type: String }) status: string = '';

  @property({ type: String }) browseShiftsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) browseShiftsActiveFilter: string = '';
  @property({ type: Object }) browseShiftsData: PetShopBrowseShiftsOutput = { items: [], total: 0 };

  @property({ type: String }) createShiftState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) createShiftName: string = '';
  @property({ type: String }) createShiftStartTime: string = '';
  @property({ type: String }) createShiftEndTime: string = '';
  @property({ type: String }) createShiftMonday: string = '';
  @property({ type: String }) createShiftTuesday: string = '';
  @property({ type: String }) createShiftWednesday: string = '';
  @property({ type: String }) createShiftThursday: string = '';
  @property({ type: String }) createShiftFriday: string = '';
  @property({ type: String }) createShiftSaturday: string = '';
  @property({ type: String }) createShiftSunday: string = '';
  @property({ type: String }) createShiftActive: string = '';
  @property({ type: Object }) createShiftOutput: PetShopCreateShiftOutput | null = null;
  @property({ type: String }) createShiftError: string = '';

  @property({ type: String }) updateShiftState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property({ type: String }) updateShiftShiftId: string = '';
  @property({ type: String }) updateShiftName: string = '';
  @property({ type: String }) updateShiftStartTime: string = '';
  @property({ type: String }) updateShiftEndTime: string = '';
  @property({ type: String }) updateShiftMonday: string = '';
  @property({ type: String }) updateShiftTuesday: string = '';
  @property({ type: String }) updateShiftWednesday: string = '';
  @property({ type: String }) updateShiftThursday: string = '';
  @property({ type: String }) updateShiftFriday: string = '';
  @property({ type: String }) updateShiftSaturday: string = '';
  @property({ type: String }) updateShiftSunday: string = '';
  @property({ type: String }) updateShiftActive: string = '';
  @property({ type: Object }) updateShiftOutput: PetShopUpdateShiftOutput | null = null;
  @property({ type: String }) updateShiftError: string = '';

  // --- Subscribed state keys for cleanup ---
  private readonly subscribedKeys: string[] = [
    'ui.shiftManagement.status',
    'ui.shiftManagement.action.browseShifts.status',
    'ui.shiftManagement.input.browseShifts.activeFilter',
    'ui.shiftManagement.data.browseShifts',
    'ui.shiftManagement.action.createShift.status',
    'ui.shiftManagement.input.createShift.name',
    'ui.shiftManagement.input.createShift.startTime',
    'ui.shiftManagement.input.createShift.endTime',
    'ui.shiftManagement.input.createShift.monday',
    'ui.shiftManagement.input.createShift.tuesday',
    'ui.shiftManagement.input.createShift.wednesday',
    'ui.shiftManagement.input.createShift.thursday',
    'ui.shiftManagement.input.createShift.friday',
    'ui.shiftManagement.input.createShift.saturday',
    'ui.shiftManagement.input.createShift.sunday',
    'ui.shiftManagement.input.createShift.active',
    'ui.shiftManagement.output.createShift',
    'ui.shiftManagement.action.createShift.error',
    'ui.shiftManagement.action.updateShift.status',
    'ui.shiftManagement.input.updateShift.shiftId',
    'ui.shiftManagement.input.updateShift.name',
    'ui.shiftManagement.input.updateShift.startTime',
    'ui.shiftManagement.input.updateShift.endTime',
    'ui.shiftManagement.input.updateShift.monday',
    'ui.shiftManagement.input.updateShift.tuesday',
    'ui.shiftManagement.input.updateShift.wednesday',
    'ui.shiftManagement.input.updateShift.thursday',
    'ui.shiftManagement.input.updateShift.friday',
    'ui.shiftManagement.input.updateShift.saturday',
    'ui.shiftManagement.input.updateShift.sunday',
    'ui.shiftManagement.input.updateShift.active',
    'ui.shiftManagement.output.updateShift',
    'ui.shiftManagement.action.updateShift.error',
  ];

  // --- i18n getter ---
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // --- Helpers ---
  private toBool(value: string): boolean {
    return value === 'true' || value === '1';
  }

  private readInputValue(e: Event): string {
    const target = e.target as HTMLInputElement;
    if (target.type === 'checkbox') {
      return target.checked ? 'true' : 'false';
    }
    return target.value;
  }

  // --- Query: browseShifts ---
  async loadBrowseShifts(): Promise<boolean> {
    this.browseShiftsState = 'loading';
    setState('ui.shiftManagement.action.browseShifts.status', 'loading');

    const params: PetShopBrowseShiftsInput = {};
    if (this.browseShiftsActiveFilter !== '') {
      params.activeFilter = this.toBool(this.browseShiftsActiveFilter);
    }

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopBrowseShiftsOutput>(
      'petShop.browseShifts.browseShifts',
      params,
      options,
    );

    if (response.ok) {
      const data: PetShopBrowseShiftsOutput = response.data ?? { items: [], total: 0 };
      this.browseShiftsData = data;
      setState('ui.shiftManagement.data.browseShifts', data);
      this.browseShiftsState = 'success';
      setState('ui.shiftManagement.action.browseShifts.status', 'success');
      return true;
    } else {
      this.browseShiftsState = 'error';
      setState('ui.shiftManagement.action.browseShifts.status', 'error');
      if (response.error) {
        console.error('[browseShifts]', response.error.message);
      }
      return false;
    }
  }

  handleBrowseShiftsClick(): void {
    this.loadBrowseShifts();
  }

  // --- Command: createShift ---
  async createShift(signal?: AbortSignal): Promise<void> {
    this.createShiftState = 'loading';
    setState('ui.shiftManagement.action.createShift.status', 'loading');

    const params: PetShopCreateShiftInput = {
      name: this.createShiftName,
      startTime: this.createShiftStartTime,
      endTime: this.createShiftEndTime,
      monday: this.toBool(this.createShiftMonday),
      tuesday: this.toBool(this.createShiftTuesday),
      wednesday: this.toBool(this.createShiftWednesday),
      thursday: this.toBool(this.createShiftThursday),
      friday: this.toBool(this.createShiftFriday),
      saturday: this.toBool(this.createShiftSaturday),
      sunday: this.toBool(this.createShiftSunday),
      active: this.toBool(this.createShiftActive),
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<PetShopCreateShiftOutput>(
      'petShop.createShift.createShift',
      params,
      options,
    );

    if (response.ok) {
      const output: PetShopCreateShiftOutput | null = response.data ?? null;
      this.createShiftOutput = output;
      setState('ui.shiftManagement.output.createShift', output);

      // Refresh browseShifts
      const refreshOk = await this.loadBrowseShifts();
      if (!refreshOk) {
        this.createShiftState = 'error';
        setState('ui.shiftManagement.action.createShift.status', 'error');
        return;
      }

      // Clear inputs
      this.createShiftName = '';
      this.createShiftStartTime = '';
      this.createShiftEndTime = '';
      this.createShiftMonday = '';
      this.createShiftTuesday = '';
      this.createShiftWednesday = '';
      this.createShiftThursday = '';
      this.createShiftFriday = '';
      this.createShiftSaturday = '';
      this.createShiftSunday = '';
      this.createShiftActive = '';
      setState('ui.shiftManagement.input.createShift.name', '');
      setState('ui.shiftManagement.input.createShift.startTime', '');
      setState('ui.shiftManagement.input.createShift.endTime', '');
      setState('ui.shiftManagement.input.createShift.monday', '');
      setState('ui.shiftManagement.input.createShift.tuesday', '');
      setState('ui.shiftManagement.input.createShift.wednesday', '');
      setState('ui.shiftManagement.input.createShift.thursday', '');
      setState('ui.shiftManagement.input.createShift.friday', '');
      setState('ui.shiftManagement.input.createShift.saturday', '');
      setState('ui.shiftManagement.input.createShift.sunday', '');
      setState('ui.shiftManagement.input.createShift.active', '');

      this.createShiftError = '';
      setState('ui.shiftManagement.action.createShift.error', '');

      this.createShiftState = 'success';
      setState('ui.shiftManagement.action.createShift.status', 'success');
    } else {
      const errorMsg: string = response.error?.message ?? this.msg['action.createShift.error'];
      this.createShiftError = errorMsg;
      setState('ui.shiftManagement.action.createShift.error', errorMsg);
      this.createShiftState = 'error';
      setState('ui.shiftManagement.action.createShift.status', 'error');
    }
  }

  handleCreateShiftClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.createShift(signal);
    }, { mode: 'blocking' });
  }

  // --- Command: updateShift ---
  async updateShift(signal?: AbortSignal): Promise<void> {
    if (!this.updateShiftShiftId) {
      this.updateShiftState = 'idle';
      setState('ui.shiftManagement.action.updateShift.status', 'idle');
      return;
    }

    this.updateShiftState = 'loading';
    setState('ui.shiftManagement.action.updateShift.status', 'loading');

    const params: PetShopUpdateShiftInput = {
      shiftId: this.updateShiftShiftId,
      name: this.updateShiftName,
      startTime: this.updateShiftStartTime,
      endTime: this.updateShiftEndTime,
      monday: this.toBool(this.updateShiftMonday),
      tuesday: this.toBool(this.updateShiftTuesday),
      wednesday: this.toBool(this.updateShiftWednesday),
      thursday: this.toBool(this.updateShiftThursday),
      friday: this.toBool(this.updateShiftFriday),
      saturday: this.toBool(this.updateShiftSaturday),
      sunday: this.toBool(this.updateShiftSunday),
      active: this.toBool(this.updateShiftActive),
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<PetShopUpdateShiftOutput>(
      'petShop.updateShift.updateShift',
      params,
      options,
    );

    if (response.ok) {
      const output: PetShopUpdateShiftOutput | null = response.data ?? null;
      this.updateShiftOutput = output;
      setState('ui.shiftManagement.output.updateShift', output);

      // Refresh browseShifts
      const refreshOk = await this.loadBrowseShifts();
      if (!refreshOk) {
        this.updateShiftState = 'error';
        setState('ui.shiftManagement.action.updateShift.status', 'error');
        return;
      }

      // Clear inputs
      this.updateShiftShiftId = '';
      this.updateShiftName = '';
      this.updateShiftStartTime = '';
      this.updateShiftEndTime = '';
      this.updateShiftMonday = '';
      this.updateShiftTuesday = '';
      this.updateShiftWednesday = '';
      this.updateShiftThursday = '';
      this.updateShiftFriday = '';
      this.updateShiftSaturday = '';
      this.updateShiftSunday = '';
      this.updateShiftActive = '';
      setState('ui.shiftManagement.input.updateShift.shiftId', '');
      setState('ui.shiftManagement.input.updateShift.name', '');
      setState('ui.shiftManagement.input.updateShift.startTime', '');
      setState('ui.shiftManagement.input.updateShift.endTime', '');
      setState('ui.shiftManagement.input.updateShift.monday', '');
      setState('ui.shiftManagement.input.updateShift.tuesday', '');
      setState('ui.shiftManagement.input.updateShift.wednesday', '');
      setState('ui.shiftManagement.input.updateShift.thursday', '');
      setState('ui.shiftManagement.input.updateShift.friday', '');
      setState('ui.shiftManagement.input.updateShift.saturday', '');
      setState('ui.shiftManagement.input.updateShift.sunday', '');
      setState('ui.shiftManagement.input.updateShift.active', '');

      this.updateShiftError = '';
      setState('ui.shiftManagement.action.updateShift.error', '');

      this.updateShiftState = 'success';
      setState('ui.shiftManagement.action.updateShift.status', 'success');
    } else {
      const errorMsg: string = response.error?.message ?? this.msg['action.updateShift.error'];
      this.updateShiftError = errorMsg;
      setState('ui.shiftManagement.action.updateShift.error', errorMsg);
      this.updateShiftState = 'error';
      setState('ui.shiftManagement.action.updateShift.status', 'error');
    }
  }

  handleUpdateShiftClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.updateShift(signal);
    }, { mode: 'blocking' });
  }

  // --- State setters: browseShifts ---
  setBrowseShiftsActiveFilter(value: string): void {
    this.browseShiftsActiveFilter = value;
    setState('ui.shiftManagement.input.browseShifts.activeFilter', value);
    this.requestUpdate();
  }

  handleBrowseShiftsActiveFilterChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setBrowseShiftsActiveFilter(value);
  }

  // --- State setters: createShift ---
  setCreateShiftName(value: string): void {
    this.createShiftName = value;
    setState('ui.shiftManagement.input.createShift.name', value);
    this.requestUpdate();
  }

  handleCreateShiftNameChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftName(value);
  }

  setCreateShiftStartTime(value: string): void {
    this.createShiftStartTime = value;
    setState('ui.shiftManagement.input.createShift.startTime', value);
    this.requestUpdate();
  }

  handleCreateShiftStartTimeChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftStartTime(value);
  }

  setCreateShiftEndTime(value: string): void {
    this.createShiftEndTime = value;
    setState('ui.shiftManagement.input.createShift.endTime', value);
    this.requestUpdate();
  }

  handleCreateShiftEndTimeChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftEndTime(value);
  }

  setCreateShiftMonday(value: string): void {
    this.createShiftMonday = value;
    setState('ui.shiftManagement.input.createShift.monday', value);
    this.requestUpdate();
  }

  handleCreateShiftMondayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftMonday(value);
  }

  setCreateShiftTuesday(value: string): void {
    this.createShiftTuesday = value;
    setState('ui.shiftManagement.input.createShift.tuesday', value);
    this.requestUpdate();
  }

  handleCreateShiftTuesdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftTuesday(value);
  }

  setCreateShiftWednesday(value: string): void {
    this.createShiftWednesday = value;
    setState('ui.shiftManagement.input.createShift.wednesday', value);
    this.requestUpdate();
  }

  handleCreateShiftWednesdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftWednesday(value);
  }

  setCreateShiftThursday(value: string): void {
    this.createShiftThursday = value;
    setState('ui.shiftManagement.input.createShift.thursday', value);
    this.requestUpdate();
  }

  handleCreateShiftThursdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftThursday(value);
  }

  setCreateShiftFriday(value: string): void {
    this.createShiftFriday = value;
    setState('ui.shiftManagement.input.createShift.friday', value);
    this.requestUpdate();
  }

  handleCreateShiftFridayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftFriday(value);
  }

  setCreateShiftSaturday(value: string): void {
    this.createShiftSaturday = value;
    setState('ui.shiftManagement.input.createShift.saturday', value);
    this.requestUpdate();
  }

  handleCreateShiftSaturdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftSaturday(value);
  }

  setCreateShiftSunday(value: string): void {
    this.createShiftSunday = value;
    setState('ui.shiftManagement.input.createShift.sunday', value);
    this.requestUpdate();
  }

  handleCreateShiftSundayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftSunday(value);
  }

  setCreateShiftActive(value: string): void {
    this.createShiftActive = value;
    setState('ui.shiftManagement.input.createShift.active', value);
    this.requestUpdate();
  }

  handleCreateShiftActiveChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setCreateShiftActive(value);
  }

  // --- State setters: updateShift ---
  setUpdateShiftShiftId(value: string): void {
    this.updateShiftShiftId = value;
    setState('ui.shiftManagement.input.updateShift.shiftId', value);
    this.requestUpdate();
  }

  handleUpdateShiftShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateShiftShiftId(target.value);
  }

  setUpdateShiftName(value: string): void {
    this.updateShiftName = value;
    setState('ui.shiftManagement.input.updateShift.name', value);
    this.requestUpdate();
  }

  handleUpdateShiftNameChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftName(value);
  }

  setUpdateShiftStartTime(value: string): void {
    this.updateShiftStartTime = value;
    setState('ui.shiftManagement.input.updateShift.startTime', value);
    this.requestUpdate();
  }

  handleUpdateShiftStartTimeChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftStartTime(value);
  }

  setUpdateShiftEndTime(value: string): void {
    this.updateShiftEndTime = value;
    setState('ui.shiftManagement.input.updateShift.endTime', value);
    this.requestUpdate();
  }

  handleUpdateShiftEndTimeChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftEndTime(value);
  }

  setUpdateShiftMonday(value: string): void {
    this.updateShiftMonday = value;
    setState('ui.shiftManagement.input.updateShift.monday', value);
    this.requestUpdate();
  }

  handleUpdateShiftMondayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftMonday(value);
  }

  setUpdateShiftTuesday(value: string): void {
    this.updateShiftTuesday = value;
    setState('ui.shiftManagement.input.updateShift.tuesday', value);
    this.requestUpdate();
  }

  handleUpdateShiftTuesdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftTuesday(value);
  }

  setUpdateShiftWednesday(value: string): void {
    this.updateShiftWednesday = value;
    setState('ui.shiftManagement.input.updateShift.wednesday', value);
    this.requestUpdate();
  }

  handleUpdateShiftWednesdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftWednesday(value);
  }

  setUpdateShiftThursday(value: string): void {
    this.updateShiftThursday = value;
    setState('ui.shiftManagement.input.updateShift.thursday', value);
    this.requestUpdate();
  }

  handleUpdateShiftThursdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftThursday(value);
  }

  setUpdateShiftFriday(value: string): void {
    this.updateShiftFriday = value;
    setState('ui.shiftManagement.input.updateShift.friday', value);
    this.requestUpdate();
  }

  handleUpdateShiftFridayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftFriday(value);
  }

  setUpdateShiftSaturday(value: string): void {
    this.updateShiftSaturday = value;
    setState('ui.shiftManagement.input.updateShift.saturday', value);
    this.requestUpdate();
  }

  handleUpdateShiftSaturdayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftSaturday(value);
  }

  setUpdateShiftSunday(value: string): void {
    this.updateShiftSunday = value;
    setState('ui.shiftManagement.input.updateShift.sunday', value);
    this.requestUpdate();
  }

  handleUpdateShiftSundayChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftSunday(value);
  }

  setUpdateShiftActive(value: string): void {
    this.updateShiftActive = value;
    setState('ui.shiftManagement.input.updateShift.active', value);
    this.requestUpdate();
  }

  handleUpdateShiftActiveChange(e: Event): void {
    const value: string = this.readInputValue(e);
    this.setUpdateShiftActive(value);
  }

  // --- Lifecycle ---
  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global state where available, falling back to defaults
    const savedStatus = getState('ui.shiftManagement.status');
    this.status = typeof savedStatus === 'string' ? savedStatus : '';

    const savedBrowseState = getState('ui.shiftManagement.action.browseShifts.status');
    this.browseShiftsState = savedBrowseState ?? 'idle';

    const savedBrowseData = getState('ui.shiftManagement.data.browseShifts');
    this.browseShiftsData = savedBrowseData ?? { items: [], total: 0 };

    const savedActiveFilter = getState('ui.shiftManagement.input.browseShifts.activeFilter');
    this.browseShiftsActiveFilter = typeof savedActiveFilter === 'string' ? savedActiveFilter : '';

    const savedCreateState = getState('ui.shiftManagement.action.createShift.status');
    this.createShiftState = savedCreateState ?? 'idle';

    const savedCreateError = getState('ui.shiftManagement.action.createShift.error');
    this.createShiftError = typeof savedCreateError === 'string' ? savedCreateError : '';

    const savedUpdateState = getState('ui.shiftManagement.action.updateShift.status');
    this.updateShiftState = savedUpdateState ?? 'idle';

    const savedUpdateError = getState('ui.shiftManagement.action.updateShift.error');
    this.updateShiftError = typeof savedUpdateError === 'string' ? savedUpdateError : '';

    // Subscribe to shared state keys
    subscribe(this.subscribedKeys, this);

    // Run initial loads
    this.loadBrowseShifts();
  }

  disconnectedCallback(): void {
    unsubscribe(this.subscribedKeys, this);
    super.disconnectedCallback();
  }
}
