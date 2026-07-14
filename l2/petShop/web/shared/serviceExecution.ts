/// <mls fileReference="_102049_/l2/petShop/web/shared/serviceExecution.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  PetShopStartServiceExecutionInput,
  PetShopStartServiceExecutionOutput,
  PetShopCompleteServiceExecutionInput,
  PetShopCompleteServiceExecutionOutput,
} from '/_102049_/l2/petShop/web/contracts/serviceExecution.js';

/// **collab_i18n_start**
const message_pt = {
  "page.title": "Execução de serviço agendado",
  "section.bookings.title": "Agenda de atendimentos",
  "section.bookings.empty": "Selecione um agendamento para iniciar ou concluir o atendimento.",
  "section.start.title": "Iniciar atendimento",
  "section.start.empty": "Selecione um agendamento confirmado na agenda acima para iniciar o atendimento.",
  "section.complete.title": "Concluir serviço",
  "section.complete.empty": "Selecione um agendamento em andamento na agenda acima para concluir o serviço.",
  "section.review.title": "Resumo da execução",
  "section.review.empty": "Nenhuma ação executada ainda. Selecione um agendamento e execute uma ação para visualizar o resumo.",
  "column.customerName": "Cliente",
  "column.bookingDate": "Data",
  "column.bookingTime": "Horário",
  "column.status": "Status",
  "column.notes": "Observações",
  "column.updatedAt": "Atualizado em",
  "column.completedAt": "Concluído em",
  "filter.status": "Filtrar por status",
  "field.serviceBookingId": "Agendamento selecionado",
  "action.startServiceExecution": "Iniciar atendimento",
  "action.completeServiceExecution": "Concluir serviço",
  "action.startServiceExecution.success": "Atendimento iniciado com sucesso. O agendamento está em andamento.",
  "action.startServiceExecution.error": "Não foi possível iniciar o atendimento. Verifique se você é o operador atribuído e tente novamente.",
  "action.completeServiceExecution.success": "Serviço concluído com sucesso. A capacidade do operador foi liberada para novos agendamentos.",
  "action.completeServiceExecution.error": "Não foi possível concluir o serviço. Verifique se o agendamento está em andamento e tente novamente.",
  "intention.bookingQuery.title": "Agendamentos atribuídos",
  "intention.workflowStatus.title": "Status do agendamento selecionado",
  "intention.startForm.title": "Confirmar início do atendimento",
  "intention.completeForm.title": "Confirmar conclusão do serviço",
  "intention.review.title": "Resultado da última ação",
  "sec.bookings.title": "Agenda de atendimentos",
  "org.booking.list.title": "Listar agendamentos atribuídos ao operador para seleção e execução",
  "sec.start.service.title": "Iniciar atendimento",
  "org.start.service.title": "Iniciar atendimento do serviço agendado",
  "sec.complete.service.title": "Concluir serviço",
  "org.complete.service.title": "Concluir serviço agendado",
  "sec.review.title": "Resumo da execução",
  "org.review.title": "Revisar o contexto e o resultado das ações principais da página"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopServiceExecutionBase extends CollabLitElement {
  @property({ type: String }) status: string = "";

  @property({ type: String }) startServiceExecutionState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) startServiceExecutionServiceBookingId: string = "";
  @property({ type: Object }) startServiceExecutionOutput: PetShopStartServiceExecutionOutput | null = null;
  @property({ type: String }) startServiceExecutionError: string = "";

  @property({ type: String }) completeServiceExecutionState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) completeServiceExecutionServiceBookingId: string = "";
  @property({ type: Object }) completeServiceExecutionOutput: PetShopCompleteServiceExecutionOutput | null = null;
  @property({ type: String }) completeServiceExecutionError: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const existingStatus = getState("ui.serviceExecution.status");
    if (existingStatus !== undefined) {
      this.status = existingStatus as string;
    }
    const existingStartBookingId = getState("ui.serviceExecution.input.startServiceExecution.serviceBookingId");
    if (existingStartBookingId !== undefined) {
      this.startServiceExecutionServiceBookingId = existingStartBookingId as string;
    }
    const existingCompleteBookingId = getState("ui.serviceExecution.input.completeServiceExecution.serviceBookingId");
    if (existingCompleteBookingId !== undefined) {
      this.completeServiceExecutionServiceBookingId = existingCompleteBookingId as string;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  // --- State setters ---

  setStartServiceExecutionServiceBookingId(value: string): void {
    this.startServiceExecutionServiceBookingId = value;
    setState("ui.serviceExecution.input.startServiceExecution.serviceBookingId", value);
    this.requestUpdate();
  }

  handleStartServiceExecutionServiceBookingIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (!target) return;
    const value = target.value ?? "";
    this.setStartServiceExecutionServiceBookingId(value);
  }

  setCompleteServiceExecutionServiceBookingId(value: string): void {
    this.completeServiceExecutionServiceBookingId = value;
    setState("ui.serviceExecution.input.completeServiceExecution.serviceBookingId", value);
    this.requestUpdate();
  }

  handleCompleteServiceExecutionServiceBookingIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (!target) return;
    const value = target.value ?? "";
    this.setCompleteServiceExecutionServiceBookingId(value);
  }

  // --- Command: startServiceExecution ---

  async startServiceExecution(): Promise<void> {
    if (!this.startServiceExecutionServiceBookingId) {
      this.startServiceExecutionState = "idle";
      setState("ui.serviceExecution.action.startServiceExecution.status", "idle");
      this.requestUpdate();
      return;
    }

    this.startServiceExecutionState = "loading";
    setState("ui.serviceExecution.action.startServiceExecution.status", "loading");
    this.requestUpdate();

    const params: PetShopStartServiceExecutionInput = {
      serviceBookingId: this.startServiceExecutionServiceBookingId,
    };

    const options: BffClientOptions = { mode: "blocking" };

    const response = await execBff<PetShopStartServiceExecutionOutput>(
      "petShop.serviceBookingLifecycle.startServiceExecution",
      params,
      options,
    );

    if (response.ok) {
      const outputData: PetShopStartServiceExecutionOutput | null =
        response.data ?? null;
      this.startServiceExecutionOutput = outputData;
      setState("ui.serviceExecution.output.startServiceExecution", outputData);

      // Clear input state keys on success
      this.startServiceExecutionServiceBookingId = "";
      setState("ui.serviceExecution.input.startServiceExecution.serviceBookingId", "");

      this.startServiceExecutionError = "";
      setState("ui.serviceExecution.action.startServiceExecution.error", "");

      this.startServiceExecutionState = "success";
      setState("ui.serviceExecution.action.startServiceExecution.status", "success");
    } else {
      const errorMsg = response.error?.message ?? this.msg["action.startServiceExecution.error"];
      this.startServiceExecutionError = errorMsg;
      setState("ui.serviceExecution.action.startServiceExecution.error", errorMsg);

      this.startServiceExecutionState = "error";
      setState("ui.serviceExecution.action.startServiceExecution.status", "error");
    }

    this.requestUpdate();
  }

  handleStartServiceExecutionClick(): void {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.startServiceExecution();
    }, { mode: "blocking" });
  }

  // --- Command: completeServiceExecution ---

  async completeServiceExecution(): Promise<void> {
    if (!this.completeServiceExecutionServiceBookingId) {
      this.completeServiceExecutionState = "idle";
      setState("ui.serviceExecution.action.completeServiceExecution.status", "idle");
      this.requestUpdate();
      return;
    }

    this.completeServiceExecutionState = "loading";
    setState("ui.serviceExecution.action.completeServiceExecution.status", "loading");
    this.requestUpdate();

    const params: PetShopCompleteServiceExecutionInput = {
      serviceBookingId: this.completeServiceExecutionServiceBookingId,
    };

    const options: BffClientOptions = { mode: "blocking" };

    const response = await execBff<PetShopCompleteServiceExecutionOutput>(
      "petShop.serviceBookingLifecycle.completeServiceExecution",
      params,
      options,
    );

    if (response.ok) {
      const outputData: PetShopCompleteServiceExecutionOutput | null =
        response.data ?? null;
      this.completeServiceExecutionOutput = outputData;
      setState("ui.serviceExecution.output.completeServiceExecution", outputData);

      // Clear input state keys on success
      this.completeServiceExecutionServiceBookingId = "";
      setState("ui.serviceExecution.input.completeServiceExecution.serviceBookingId", "");

      this.completeServiceExecutionError = "";
      setState("ui.serviceExecution.action.completeServiceExecution.error", "");

      this.completeServiceExecutionState = "success";
      setState("ui.serviceExecution.action.completeServiceExecution.status", "success");
    } else {
      const errorMsg = response.error?.message ?? this.msg["action.completeServiceExecution.error"];
      this.completeServiceExecutionError = errorMsg;
      setState("ui.serviceExecution.action.completeServiceExecution.error", errorMsg);

      this.completeServiceExecutionState = "error";
      setState("ui.serviceExecution.action.completeServiceExecution.status", "error");
    }

    this.requestUpdate();
  }

  handleCompleteServiceExecutionClick(): void {
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.completeServiceExecution();
    }, { mode: "blocking" });
  }
}
