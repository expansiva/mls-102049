/// <mls fileReference="_102049_/l2/petShop/web/shared/schedulingCapacity.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopAssignOperatorToShiftInput,
  PetShopAssignOperatorToShiftOutput,
  PetShopReviewSchedulingCapacityInput,
  PetShopReviewSchedulingCapacityOutput,
} from '/_102049_/l2/petShop/web/contracts/schedulingCapacity.js';

/// **collab_i18n_start**
const message_pt = {
  "section.schedulingCapacity.title": "Alocação e capacidade de atendimento",
  "intention.queryList.title": "Alocações de operadores em turnos",
  "intention.queryList.empty": "Nenhuma alocação encontrada. Ajuste o filtro de turno ou aloque um operador para visualizar a capacidade.",
  "intention.commandForm.title": "Alocar operador em turno",
  "intention.commandForm.empty": "Selecione um operador e um turno para criar a alocação.",
  "intention.summary.title": "Capacidade de atendimento por turno",
  "intention.summary.empty": "Nenhuma capacidade calculada. Revise as alocações para visualizar a capacidade de atendimento.",
  "field.operatorId.label": "Operador",
  "field.shiftId.label": "Turno",
  "column.shiftAssignmentId.label": "ID da alocação",
  "column.name.label": "Nome do operador",
  "column.shiftId.label": "Turno",
  "column.startTime.label": "Início",
  "column.endTime.label": "Fim",
  "column.createdAt.label": "Criado em",
  "filter.shiftId.label": "Filtrar por turno",
  "action.assignOperatorToShift.label": "Alocar",
  "action.reviewSchedulingCapacity.label": "Atualizar",
  "action.assignOperatorToShift.success": "Operador alocado no turno com sucesso. A capacidade de atendimento foi recalculada.",
  "action.assignOperatorToShift.error": "Não foi possível alocar o operador no turno. Verifique os dados e tente novamente.",
  "action.reviewSchedulingCapacity.success": "Capacidade de atendimento atualizada.",
  "action.reviewSchedulingCapacity.error": "Não foi possível carregar as alocações. Tente novamente.",
  "org.review.scheduling.capacity.title": "Revisar capacidade de atendimento listando alocações de operadores em turnos",
  "org.assign.operator.to.shift.title": "Alocar operador em turno selecionando operador e turno existentes",
  "org.capacity.summary.title": "Apresentar o número de operadores alocados por turno como indicador da capacidade de agendamento disponível"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopSchedulingCapacityBase extends CollabLitElement {
  @property() status = "";

  @property() assignOperatorToShiftState: "idle" | "loading" | "success" | "error" = "idle";

  @property() assignOperatorToShiftOperatorId = "";

  @property() assignOperatorToShiftShiftId = "";

  @property() assignOperatorToShiftOutput: PetShopAssignOperatorToShiftOutput | null = null;

  @property() assignOperatorToShiftError = "";

  @property() reviewSchedulingCapacityState: "idle" | "loading" | "success" | "error" = "idle";

  @property() reviewSchedulingCapacityShiftId = "";

  @property() reviewSchedulingCapacityData: PetShopReviewSchedulingCapacityOutput = { items: [], total: 0 };

  @property() activeCompanyId = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // ---- State setters ----

  setAssignOperatorToShiftOperatorId(value: string): void {
    this.assignOperatorToShiftOperatorId = value;
    setState("ui.schedulingCapacity.input.assignOperatorToShift.operatorId", value);
    this.requestUpdate();
  }

  handleAssignOperatorToShiftOperatorIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setAssignOperatorToShiftOperatorId(target.value);
  }

  setAssignOperatorToShiftShiftId(value: string): void {
    this.assignOperatorToShiftShiftId = value;
    setState("ui.schedulingCapacity.input.assignOperatorToShift.shiftId", value);
    this.requestUpdate();
  }

  handleAssignOperatorToShiftShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setAssignOperatorToShiftShiftId(target.value);
  }

  setReviewSchedulingCapacityShiftId(value: string): void {
    this.reviewSchedulingCapacityShiftId = value;
    setState("ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId", value);
    this.requestUpdate();
  }

  handleReviewSchedulingCapacityShiftIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    this.setReviewSchedulingCapacityShiftId(target.value);
  }

  // ---- Query action: reviewSchedulingCapacity ----

  async loadReviewSchedulingCapacity(): Promise<void> {
    this.reviewSchedulingCapacityState = "loading";
    setState("ui.schedulingCapacity.action.reviewSchedulingCapacity.status", "loading");
    this.requestUpdate();

    const params: PetShopReviewSchedulingCapacityInput = {
      shiftId: this.reviewSchedulingCapacityShiftId || undefined,
    };

    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopReviewSchedulingCapacityOutput>(
      "petShop.reviewSchedulingCapacity.reviewSchedulingCapacity",
      params,
      options,
    );

    if (response.ok) {
      const data: PetShopReviewSchedulingCapacityOutput =
        response.data ?? { items: [], total: 0 };
      this.reviewSchedulingCapacityData = data;
      setState("ui.schedulingCapacity.data.reviewSchedulingCapacity", data);
      this.reviewSchedulingCapacityState = "success";
      setState("ui.schedulingCapacity.action.reviewSchedulingCapacity.status", "success");
    } else {
      this.reviewSchedulingCapacityState = "error";
      setState("ui.schedulingCapacity.action.reviewSchedulingCapacity.status", "error");
      if (response.error?.message) {
        console.error("reviewSchedulingCapacity error:", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleReviewSchedulingCapacityClick(e: Event): void {
    e.preventDefault();
    this.loadReviewSchedulingCapacity();
  }

  // ---- Command action: assignOperatorToShift ----

  async assignOperatorToShift(): Promise<void> {
    this.assignOperatorToShiftState = "loading";
    setState("ui.schedulingCapacity.action.assignOperatorToShift.status", "loading");
    this.assignOperatorToShiftError = "";
    setState("ui.schedulingCapacity.action.assignOperatorToShift.error", "");
    this.requestUpdate();

    const params: PetShopAssignOperatorToShiftInput = {
      operatorId: this.assignOperatorToShiftOperatorId,
      shiftId: this.assignOperatorToShiftShiftId,
    };

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<PetShopAssignOperatorToShiftOutput>(
      "petShop.assignOperatorToShift.assignOperatorToShift",
      params,
      options,
    );

    if (response.ok) {
      const output: PetShopAssignOperatorToShiftOutput | null =
        response.data ?? null;
      this.assignOperatorToShiftOutput = output;
      setState("ui.schedulingCapacity.output.assignOperatorToShift", output);

      // Refresh query actions before declaring success
      try {
        await this.loadReviewSchedulingCapacity();
      } catch {
        this.assignOperatorToShiftState = "error";
        setState("ui.schedulingCapacity.action.assignOperatorToShift.status", "error");
        this.requestUpdate();
        return;
      }

      // Clear input fields
      this.assignOperatorToShiftOperatorId = "";
      setState("ui.schedulingCapacity.input.assignOperatorToShift.operatorId", "");
      this.assignOperatorToShiftShiftId = "";
      setState("ui.schedulingCapacity.input.assignOperatorToShift.shiftId", "");

      this.assignOperatorToShiftState = "success";
      setState("ui.schedulingCapacity.action.assignOperatorToShift.status", "success");
    } else {
      const errorMsg = response.error?.message ?? this.msg["action.assignOperatorToShift.error"];
      this.assignOperatorToShiftError = errorMsg;
      setState("ui.schedulingCapacity.action.assignOperatorToShift.error", errorMsg);
      this.assignOperatorToShiftState = "error";
      setState("ui.schedulingCapacity.action.assignOperatorToShift.status", "error");
    }
    this.requestUpdate();
  }

  handleAssignOperatorToShiftClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.assignOperatorToShift();
    }, { mode: "blocking" });
  }

  // ---- Lifecycle ----

  connectedCallback(): void {
    super.connectedCallback();

    // Initialize shared state from global store
    const savedActiveCompanyId = getState("ui.schedulingCapacity.businessContext.activeCompanyId");
    if (savedActiveCompanyId) {
      this.activeCompanyId = savedActiveCompanyId as string;
    } else {
      setState("ui.schedulingCapacity.businessContext.activeCompanyId", this.activeCompanyId);
    }

    const savedReviewShiftId = getState("ui.schedulingCapacity.input.reviewSchedulingCapacity.shiftId");
    if (savedReviewShiftId) {
      this.reviewSchedulingCapacityShiftId = savedReviewShiftId as string;
    }

    // Subscribe to business context
    subscribe("ui.schedulingCapacity.businessContext.activeCompanyId", this);

    // Run initial loads
    this.loadReviewSchedulingCapacity();
  }

  disconnectedCallback(): void {
    unsubscribe("ui.schedulingCapacity.businessContext.activeCompanyId", this);
    super.disconnectedCallback();
  }

  handleIcaStateChange(key: string, value: unknown): void {
    if (key === "ui.schedulingCapacity.businessContext.activeCompanyId") {
      this.activeCompanyId = (value as string) ?? "";
      this.requestUpdate();
    }
  }
}
