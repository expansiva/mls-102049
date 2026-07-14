/// <mls fileReference="_102049_/l2/petShop/web/shared/operatorSchedule.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  PetShopViewOperatorScheduleOutput,
  PetShopViewServiceBookingDetailsOutput,
} from '/_102049_/l2/petShop/web/contracts/operatorSchedule.js';

/// **collab_i18n_start**
const message_pt = {
  "page.title": "Agenda de serviços do turno",
  "section.schedule.title": "Agenda de serviços do turno",
  "section.payment.title": "Informações de pagamento",
  "organism.metrics.title": "Resumo da agenda",
  "organism.metrics.empty": "Nenhum agendamento encontrado para o seu turno.",
  "metric.confirmed": "Confirmados",
  "metric.inProgress": "Em andamento",
  "metric.completed": "Concluídos",
  "metric.total": "Total do turno",
  "organism.list.title": "Agendamentos do turno",
  "organism.list.empty": "Nenhum agendamento confirmado para o seu turno no momento.",
  "organism.details.title": "Detalhes do agendamento",
  "organism.details.empty": "Selecione um agendamento da lista para visualizar os detalhes completos.",
  "organism.payment.title": "Pagamento",
  "organism.payment.empty": "Selecione um agendamento para ver as informações de pagamento.",
  "column.customerName": "Cliente",
  "column.customerPhone": "Telefone",
  "column.bookingDate": "Data",
  "column.bookingTime": "Horário",
  "column.status": "Status",
  "column.notes": "Observações",
  "filter.status": "Filtrar por status",
  "filter.bookingDate": "Filtrar por data",
  "field.serviceBookingId": "ID do agendamento",
  "field.serviceId": "Serviço",
  "field.customerName": "Cliente",
  "field.customerPhone": "Telefone",
  "field.bookingDate": "Data",
  "field.bookingTime": "Horário",
  "field.status": "Status",
  "field.notes": "Observações",
  "field.completedAt": "Concluído em",
  "field.cancelledAt": "Cancelado em",
  "field.cancelReason": "Motivo do cancelamento",
  "field.createdAt": "Criado em",
  "field.updatedAt": "Atualizado em",
  "field.paymentInfo": "Pagamento presencial na loja",
  "field.paymentMethod": "Forma de pagamento",
  "action.viewDetails": "Ver detalhes",
  "action.viewOperatorSchedule.success": "Agenda do turno carregada com sucesso.",
  "action.viewOperatorSchedule.error": "Não foi possível carregar a agenda do turno. Tente novamente.",
  "action.viewServiceBookingDetails.success": "Detalhes do agendamento carregados com sucesso.",
  "action.viewServiceBookingDetails.error": "Não foi possível carregar os detalhes do agendamento. Tente novamente.",
  "scheduleMetrics.title": "Exibir resumo da agenda do turno com contadores por status",
  "scheduleList.title": "Listar agendamentos confirmados do turno do operador ordenados por data e horário",
  "bookingDetails.title": "Exibir detalhes completos do agendamento selecionado incluindo informações de pagamento presencial",
  "paymentContext.title": "Exibir informação de pagamento presencial na loja para o agendamento selecionado"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopOperatorScheduleBase extends CollabLitElement {
  @property({ type: String }) status: string = '';

  @property({ type: String })
  viewOperatorScheduleState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: Object })
  viewOperatorScheduleData: PetShopViewOperatorScheduleOutput = { items: [], total: 0 };

  @property({ type: String })
  viewServiceBookingDetailsState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String })
  viewServiceBookingDetailsServiceBookingId: string = '';

  @property({ type: Object })
  viewServiceBookingDetailsData: PetShopViewServiceBookingDetailsOutput | null = null;

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  private parseRouteParams(): Record<string, string> {
    const routePattern = '/petShop/operatorSchedule/:serviceBookingId?';
    const pathname = window.location.pathname;
    const patternParts = routePattern.split('/').filter((p) => p.length > 0);
    const pathParts = pathname.split('/').filter((p) => p.length > 0);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const patternPart = patternParts[i];
      const pathPart = pathParts[i] ?? '';
      if (patternPart.startsWith(':')) {
        const isOptional = patternPart.endsWith('?');
        const paramName = isOptional
          ? patternPart.slice(1, -1)
          : patternPart.slice(1);
        if (pathPart) {
          try {
            params[paramName] = decodeURIComponent(pathPart);
          } catch {
            params[paramName] = pathPart;
          }
        }
      }
    }
    return params;
  }

  async loadViewOperatorSchedule(): Promise<void> {
    this.viewOperatorScheduleState = "loading";
    setState("ui.operatorSchedule.action.viewOperatorSchedule.status", "loading");

    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopViewOperatorScheduleOutput>(
      "petShop.viewOperatorSchedule.viewOperatorSchedule",
      {},
      options
    );

    if (response.ok) {
      const data = response.data ?? { items: [], total: 0 };
      this.viewOperatorScheduleData = data;
      setState("ui.operatorSchedule.data.viewOperatorSchedule", data);
      this.viewOperatorScheduleState = "success";
      setState("ui.operatorSchedule.action.viewOperatorSchedule.status", "success");
    } else {
      this.viewOperatorScheduleState = "error";
      setState("ui.operatorSchedule.action.viewOperatorSchedule.status", "error");
      if (response.error) {
        console.error("[viewOperatorSchedule]", response.error.message);
      }
    }
  }

  handleViewOperatorScheduleClick(): void {
    this.loadViewOperatorSchedule();
  }

  async loadViewServiceBookingDetails(): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeServiceBookingId = routeParams["serviceBookingId"] ?? "";

    if (routeServiceBookingId) {
      this.viewServiceBookingDetailsServiceBookingId = routeServiceBookingId;
      setState("ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId", routeServiceBookingId);
    }

    const serviceBookingId = this.viewServiceBookingDetailsServiceBookingId;

    if (!serviceBookingId) {
      this.viewServiceBookingDetailsState = "idle";
      setState("ui.operatorSchedule.action.viewServiceBookingDetails.status", "idle");
      this.viewServiceBookingDetailsData = null;
      setState("ui.operatorSchedule.data.viewServiceBookingDetails", null);
      return;
    }

    this.viewServiceBookingDetailsState = "loading";
    setState("ui.operatorSchedule.action.viewServiceBookingDetails.status", "loading");

    const params = { serviceBookingId };
    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopViewServiceBookingDetailsOutput>(
      "petShop.viewServiceBookingDetails.viewServiceBookingDetails",
      params,
      options
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.viewServiceBookingDetailsData = data;
      setState("ui.operatorSchedule.data.viewServiceBookingDetails", data);
      this.viewServiceBookingDetailsState = "success";
      setState("ui.operatorSchedule.action.viewServiceBookingDetails.status", "success");
    } else {
      this.viewServiceBookingDetailsState = "error";
      setState("ui.operatorSchedule.action.viewServiceBookingDetails.status", "error");
      if (response.error) {
        console.error("[viewServiceBookingDetails]", response.error.message);
      }
    }
  }

  handleViewServiceBookingDetailsClick(): void {
    this.loadViewServiceBookingDetails();
  }

  setViewServiceBookingDetailsServiceBookingId(value: string): void {
    this.viewServiceBookingDetailsServiceBookingId = value;
    setState("ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId", value);
    this.requestUpdate();
  }

  handleViewServiceBookingDetailsServiceBookingIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewServiceBookingDetailsServiceBookingId(target.value);
  }

  connectedCallback(): void {
    super.connectedCallback();

    const savedStatus = getState("ui.operatorSchedule.status");
    if (savedStatus !== undefined) {
      this.status = savedStatus as string;
    }

    const savedViewOperatorScheduleState = getState("ui.operatorSchedule.action.viewOperatorSchedule.status");
    if (savedViewOperatorScheduleState !== undefined) {
      this.viewOperatorScheduleState = savedViewOperatorScheduleState as "idle" | "loading" | "success" | "error";
    }

    const savedViewOperatorScheduleData = getState("ui.operatorSchedule.data.viewOperatorSchedule");
    if (savedViewOperatorScheduleData !== undefined) {
      this.viewOperatorScheduleData = savedViewOperatorScheduleData as PetShopViewOperatorScheduleOutput;
    }

    const savedViewServiceBookingDetailsState = getState("ui.operatorSchedule.action.viewServiceBookingDetails.status");
    if (savedViewServiceBookingDetailsState !== undefined) {
      this.viewServiceBookingDetailsState = savedViewServiceBookingDetailsState as "idle" | "loading" | "success" | "error";
    }

    const savedServiceBookingId = getState("ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId");
    if (savedServiceBookingId !== undefined) {
      this.viewServiceBookingDetailsServiceBookingId = savedServiceBookingId as string;
    }

    const savedViewServiceBookingDetailsData = getState("ui.operatorSchedule.data.viewServiceBookingDetails");
    if (savedViewServiceBookingDetailsData !== undefined) {
      this.viewServiceBookingDetailsData = savedViewServiceBookingDetailsData as PetShopViewServiceBookingDetailsOutput | null;
    }

    subscribe(
      [
        "ui.operatorSchedule.status",
        "ui.operatorSchedule.action.viewOperatorSchedule.status",
        "ui.operatorSchedule.data.viewOperatorSchedule",
        "ui.operatorSchedule.action.viewServiceBookingDetails.status",
        "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId",
        "ui.operatorSchedule.data.viewServiceBookingDetails"
      ],
      this
    );

    this.loadViewOperatorSchedule();
    this.loadViewServiceBookingDetails();
  }

  disconnectedCallback(): void {
    unsubscribe(
      [
        "ui.operatorSchedule.status",
        "ui.operatorSchedule.action.viewOperatorSchedule.status",
        "ui.operatorSchedule.data.viewOperatorSchedule",
        "ui.operatorSchedule.action.viewServiceBookingDetails.status",
        "ui.operatorSchedule.input.viewServiceBookingDetails.serviceBookingId",
        "ui.operatorSchedule.data.viewServiceBookingDetails"
      ],
      this
    );
    super.disconnectedCallback();
  }
}
