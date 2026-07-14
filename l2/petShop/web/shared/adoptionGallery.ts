/// <mls fileReference="_102049_/l2/petShop/web/shared/adoptionGallery.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseAdoptablePetsOutput,
  PetShopViewAdoptablePetDetailsOutput,
  PetShopExpressAdoptionInterestInput,
  PetShopExpressAdoptionInterestOutput,
} from '/_102049_/l2/petShop/web/contracts/adoptionGallery.js';

/// **collab_i18n_start**
const message_pt = {
  "adoptionGallery.section.title": "Galeria de adoção",
  "adoptionGallery.browse.title": "Pets disponíveis para adoção",
  "adoptionGallery.browse.empty": "Nenhum pet disponível para adoção no momento. Volte em breve!",
  "adoptionGallery.details.title": "Detalhes do pet",
  "adoptionGallery.details.empty": "Selecione um pet na galeria para ver os detalhes.",
  "adoptionGallery.interestForm.title": "Manifestar interesse em adoção",
  "adoptionGallery.interestForm.empty": "Selecione um pet disponível para manifestar interesse na adoção.",
  "adoptionGallery.summary.title": "Interesse registrado",
  "adoptionGallery.summary.empty": "Após manifestar interesse, você verá a confirmação aqui.",
  "adoptionGallery.field.photoUrl": "Foto",
  "adoptionGallery.field.name": "Nome",
  "adoptionGallery.field.age": "Idade",
  "adoptionGallery.field.description": "Descrição",
  "adoptionGallery.field.status": "Status",
  "adoptionGallery.field.adoptablePetId": "Pet selecionado",
  "adoptionGallery.field.customerName": "Seu nome completo",
  "adoptionGallery.field.customerEmail": "Seu e-mail",
  "adoptionGallery.field.customerPhone": "Seu telefone (opcional)",
  "adoptionGallery.field.adoptionInterestId": "Protocolo de interesse",
  "adoptionGallery.field.interestStatus": "Situação",
  "adoptionGallery.field.createdAt": "Registrado em",
  "adoptionGallery.action.viewDetails": "Ver detalhes",
  "adoptionGallery.action.expressInterest": "Quero adotar",
  "adoptionGallery.action.submitInterest": "Enviar manifestação de interesse",
  "action.expressAdoptionInterest.success": "Seu interesse em adoção foi registrado com sucesso! A finalização acontece presencialmente na loja com verificação e documentação.",
  "action.expressAdoptionInterest.error": "Não foi possível registrar seu interesse em adoção. Tente novamente em instantes.",
  "org.browse.adoptable.pets.title": "Navegar na galeria de adoção exibindo pets disponíveis com foto, nome, idade e descrição",
  "org.view.pet.details.title": "Exibir detalhes completos do pet selecionado na galeria, incluindo foto ampliada e status de disponibilidade",
  "org.express.interest.title": "Formulário para o cliente manifestar interesse em adotar o pet selecionado, informando nome, e mail e telefone",
  "org.adoption.summary.title": "Exibir confirmação do registro de interesse e informar que a finalização da adoção acontece presencialmente na loja"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopAdoptionGalleryBase extends CollabLitElement {
  @property({ type: String }) status: string = "";

  @property({ type: String }) browseAdoptablePetsState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: Object }) browseAdoptablePetsData: PetShopBrowseAdoptablePetsOutput = { items: [], total: 0 };

  @property({ type: String }) viewAdoptablePetDetailsState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) viewAdoptablePetDetailsAdoptablePetId: string = "";

  @property({ type: Object }) viewAdoptablePetDetailsData: PetShopViewAdoptablePetDetailsOutput | null = null;

  @property({ type: String }) expressAdoptionInterestState: "idle" | "loading" | "success" | "error" = "idle";

  @property({ type: String }) expressAdoptionInterestAdoptablePetId: string = "";

  @property({ type: String }) expressAdoptionInterestCustomerName: string = "";

  @property({ type: String }) expressAdoptionInterestCustomerEmail: string = "";

  @property({ type: String }) expressAdoptionInterestCustomerPhone: string = "";

  @property({ type: Object }) expressAdoptionInterestOutput: PetShopExpressAdoptionInterestOutput | null = null;

  @property({ type: String }) expressAdoptionInterestError: string = "";

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // ---- Route param parsing ----

  private parseRouteParam(paramName: string): string {
    const pattern = "/petShop/adoptionGallery/:adoptablePetId?";
    const patternParts = pattern.split("/").filter((p) => p.length > 0);
    const pathParts = window.location.pathname.split("/").filter((p) => p.length > 0);
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(":")) {
        const cleanName = part.replace(":", "").replace("?", "");
        if (cleanName === paramName && i < pathParts.length) {
          try {
            return decodeURIComponent(pathParts[i]);
          } catch {
            return pathParts[i];
          }
        }
      }
    }
    return "";
  }

  // ---- Query: browseAdoptablePets ----

  async loadBrowseAdoptablePets(): Promise<void> {
    this.browseAdoptablePetsState = "loading";
    setState("ui.adoptionGallery.action.browseAdoptablePets.status", "loading");
    this.requestUpdate();

    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopBrowseAdoptablePetsOutput>(
      "petShop.browseAdoptablePets.browseAdoptablePets",
      {},
      options
    );

    if (response.ok) {
      const data = response.data ?? { items: [], total: 0 };
      this.browseAdoptablePetsData = data;
      setState("ui.adoptionGallery.data.browseAdoptablePets", data);
      this.browseAdoptablePetsState = "success";
      setState("ui.adoptionGallery.action.browseAdoptablePets.status", "success");
    } else {
      this.browseAdoptablePetsData = { items: [], total: 0 };
      setState("ui.adoptionGallery.data.browseAdoptablePets", { items: [], total: 0 });
      this.browseAdoptablePetsState = "error";
      setState("ui.adoptionGallery.action.browseAdoptablePets.status", "error");
      if (response.error) {
        console.error("[browseAdoptablePets]", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseAdoptablePetsClick(_e: Event): void {
    this.loadBrowseAdoptablePets();
  }

  // ---- Query: viewAdoptablePetDetails ----

  async loadViewAdoptablePetDetails(): Promise<void> {
    // Parse route param for adoptablePetId
    const routeParam = this.parseRouteParam("adoptablePetId");
    if (routeParam) {
      this.viewAdoptablePetDetailsAdoptablePetId = routeParam;
      setState("ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId", routeParam);
    }

    const adoptablePetId = this.viewAdoptablePetDetailsAdoptablePetId;
    if (!adoptablePetId) {
      this.viewAdoptablePetDetailsState = "idle";
      setState("ui.adoptionGallery.action.viewAdoptablePetDetails.status", "idle");
      this.viewAdoptablePetDetailsData = null;
      setState("ui.adoptionGallery.data.viewAdoptablePetDetails", null);
      this.requestUpdate();
      return;
    }

    this.viewAdoptablePetDetailsState = "loading";
    setState("ui.adoptionGallery.action.viewAdoptablePetDetails.status", "loading");
    this.requestUpdate();

    const params = { adoptablePetId };
    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopViewAdoptablePetDetailsOutput>(
      "petShop.viewAdoptablePetDetails.viewAdoptablePetDetails",
      params,
      options
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.viewAdoptablePetDetailsData = data;
      setState("ui.adoptionGallery.data.viewAdoptablePetDetails", data);
      this.viewAdoptablePetDetailsState = "success";
      setState("ui.adoptionGallery.action.viewAdoptablePetDetails.status", "success");
    } else {
      this.viewAdoptablePetDetailsData = null;
      setState("ui.adoptionGallery.data.viewAdoptablePetDetails", null);
      this.viewAdoptablePetDetailsState = "error";
      setState("ui.adoptionGallery.action.viewAdoptablePetDetails.status", "error");
      if (response.error) {
        console.error("[viewAdoptablePetDetails]", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleViewAdoptablePetDetailsClick(_e: Event): void {
    this.loadViewAdoptablePetDetails();
  }

  // ---- Command: expressAdoptionInterest ----

  async expressAdoptionInterest(): Promise<void> {
    const adoptablePetId = this.expressAdoptionInterestAdoptablePetId;
    const customerName = this.expressAdoptionInterestCustomerName;
    const customerEmail = this.expressAdoptionInterestCustomerEmail;
    const customerPhone = this.expressAdoptionInterestCustomerPhone;

    const params: PetShopExpressAdoptionInterestInput = {
      adoptablePetId,
      customerName,
      customerEmail,
    };
    if (customerPhone) {
      params.customerPhone = customerPhone;
    }

    this.expressAdoptionInterestState = "loading";
    setState("ui.adoptionGallery.action.expressAdoptionInterest.status", "loading");
    this.expressAdoptionInterestError = "";
    setState("ui.adoptionGallery.action.expressAdoptionInterest.error", "");
    this.requestUpdate();

    const options: BffClientOptions = { mode: "blocking" };
    const response = await execBff<PetShopExpressAdoptionInterestOutput>(
      "petShop.expressAdoptionInterest.expressAdoptionInterest",
      params,
      options
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.expressAdoptionInterestOutput = data;
      setState("ui.adoptionGallery.output.expressAdoptionInterest", data);

      // Refresh referenced query actions
      let refreshFailed = false;
      try {
        await this.loadBrowseAdoptablePets();
      } catch {
        refreshFailed = true;
      }
      try {
        await this.loadViewAdoptablePetDetails();
      } catch {
        refreshFailed = true;
      }

      if (refreshFailed) {
        this.expressAdoptionInterestState = "error";
        setState("ui.adoptionGallery.action.expressAdoptionInterest.status", "error");
        this.expressAdoptionInterestError = this.msg["action.expressAdoptionInterest.error"];
        setState("ui.adoptionGallery.action.expressAdoptionInterest.error", this.expressAdoptionInterestError);
      } else {
        // Clear input state keys
        this.expressAdoptionInterestAdoptablePetId = "";
        setState("ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId", "");
        this.expressAdoptionInterestCustomerName = "";
        setState("ui.adoptionGallery.input.expressAdoptionInterest.customerName", "");
        this.expressAdoptionInterestCustomerEmail = "";
        setState("ui.adoptionGallery.input.expressAdoptionInterest.customerEmail", "");
        this.expressAdoptionInterestCustomerPhone = "";
        setState("ui.adoptionGallery.input.expressAdoptionInterest.customerPhone", "");

        this.expressAdoptionInterestState = "success";
        setState("ui.adoptionGallery.action.expressAdoptionInterest.status", "success");
      }
    } else {
      const errorMsg = response.error?.message ?? this.msg["action.expressAdoptionInterest.error"];
      this.expressAdoptionInterestError = errorMsg;
      setState("ui.adoptionGallery.action.expressAdoptionInterest.error", errorMsg);
      this.expressAdoptionInterestState = "error";
      setState("ui.adoptionGallery.action.expressAdoptionInterest.status", "error");
      if (response.error) {
        console.error("[expressAdoptionInterest]", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleExpressAdoptionInterestClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.expressAdoptionInterest();
    }, { mode: "blocking" });
  }

  // ---- State setters ----

  setViewAdoptablePetDetailsAdoptablePetId(value: string): void {
    this.viewAdoptablePetDetailsAdoptablePetId = value;
    setState("ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId", value);
    this.requestUpdate();
  }

  handleViewAdoptablePetDetailsAdoptablePetIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setViewAdoptablePetDetailsAdoptablePetId(target.value);
  }

  setExpressAdoptionInterestAdoptablePetId(value: string): void {
    this.expressAdoptionInterestAdoptablePetId = value;
    setState("ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId", value);
    this.requestUpdate();
  }

  handleExpressAdoptionInterestAdoptablePetIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setExpressAdoptionInterestAdoptablePetId(target.value);
  }

  setExpressAdoptionInterestCustomerName(value: string): void {
    this.expressAdoptionInterestCustomerName = value;
    setState("ui.adoptionGallery.input.expressAdoptionInterest.customerName", value);
    this.requestUpdate();
  }

  handleExpressAdoptionInterestCustomerNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setExpressAdoptionInterestCustomerName(target.value);
  }

  setExpressAdoptionInterestCustomerEmail(value: string): void {
    this.expressAdoptionInterestCustomerEmail = value;
    setState("ui.adoptionGallery.input.expressAdoptionInterest.customerEmail", value);
    this.requestUpdate();
  }

  handleExpressAdoptionInterestCustomerEmailChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setExpressAdoptionInterestCustomerEmail(target.value);
  }

  setExpressAdoptionInterestCustomerPhone(value: string): void {
    this.expressAdoptionInterestCustomerPhone = value;
    setState("ui.adoptionGallery.input.expressAdoptionInterest.customerPhone", value);
    this.requestUpdate();
  }

  handleExpressAdoptionInterestCustomerPhoneChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setExpressAdoptionInterestCustomerPhone(target.value);
  }

  // ---- Lifecycle ----

  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global state where useful, falling back to defaults
    const savedStatus = getState("ui.adoptionGallery.status");
    this.status = savedStatus ?? "";

    const savedBrowseStatus = getState("ui.adoptionGallery.action.browseAdoptablePets.status");
    this.browseAdoptablePetsState = (savedBrowseStatus as "idle" | "loading" | "success" | "error") ?? "idle";

    const savedBrowseData = getState("ui.adoptionGallery.data.browseAdoptablePets");
    this.browseAdoptablePetsData = (savedBrowseData as PetShopBrowseAdoptablePetsOutput) ?? { items: [], total: 0 };

    const savedViewStatus = getState("ui.adoptionGallery.action.viewAdoptablePetDetails.status");
    this.viewAdoptablePetDetailsState = (savedViewStatus as "idle" | "loading" | "success" | "error") ?? "idle";

    const savedViewPetId = getState("ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId");
    this.viewAdoptablePetDetailsAdoptablePetId = (savedViewPetId as string) ?? "";

    const savedViewData = getState("ui.adoptionGallery.data.viewAdoptablePetDetails");
    this.viewAdoptablePetDetailsData = (savedViewData as PetShopViewAdoptablePetDetailsOutput | null) ?? null;

    const savedExpressStatus = getState("ui.adoptionGallery.action.expressAdoptionInterest.status");
    this.expressAdoptionInterestState = (savedExpressStatus as "idle" | "loading" | "success" | "error") ?? "idle";

    const savedExpressPetId = getState("ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId");
    this.expressAdoptionInterestAdoptablePetId = (savedExpressPetId as string) ?? "";

    const savedCustomerName = getState("ui.adoptionGallery.input.expressAdoptionInterest.customerName");
    this.expressAdoptionInterestCustomerName = (savedCustomerName as string) ?? "";

    const savedCustomerEmail = getState("ui.adoptionGallery.input.expressAdoptionInterest.customerEmail");
    this.expressAdoptionInterestCustomerEmail = (savedCustomerEmail as string) ?? "";

    const savedCustomerPhone = getState("ui.adoptionGallery.input.expressAdoptionInterest.customerPhone");
    this.expressAdoptionInterestCustomerPhone = (savedCustomerPhone as string) ?? "";

    const savedExpressOutput = getState("ui.adoptionGallery.output.expressAdoptionInterest");
    this.expressAdoptionInterestOutput = (savedExpressOutput as PetShopExpressAdoptionInterestOutput | null) ?? null;

    const savedExpressError = getState("ui.adoptionGallery.action.expressAdoptionInterest.error");
    this.expressAdoptionInterestError = (savedExpressError as string) ?? "";

    // Subscribe to shared states
    const subscribedKeys = [
      "ui.adoptionGallery.status",
      "ui.adoptionGallery.action.browseAdoptablePets.status",
      "ui.adoptionGallery.data.browseAdoptablePets",
      "ui.adoptionGallery.action.viewAdoptablePetDetails.status",
      "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId",
      "ui.adoptionGallery.data.viewAdoptablePetDetails",
      "ui.adoptionGallery.action.expressAdoptionInterest.status",
      "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone",
      "ui.adoptionGallery.output.expressAdoptionInterest",
      "ui.adoptionGallery.action.expressAdoptionInterest.error",
    ];
    subscribe(subscribedKeys, this);

    // Run initial loads
    this.loadBrowseAdoptablePets();
    this.loadViewAdoptablePetDetails();
  }

  disconnectedCallback(): void {
    const subscribedKeys = [
      "ui.adoptionGallery.status",
      "ui.adoptionGallery.action.browseAdoptablePets.status",
      "ui.adoptionGallery.data.browseAdoptablePets",
      "ui.adoptionGallery.action.viewAdoptablePetDetails.status",
      "ui.adoptionGallery.input.viewAdoptablePetDetails.adoptablePetId",
      "ui.adoptionGallery.data.viewAdoptablePetDetails",
      "ui.adoptionGallery.action.expressAdoptionInterest.status",
      "ui.adoptionGallery.input.expressAdoptionInterest.adoptablePetId",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerName",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerEmail",
      "ui.adoptionGallery.input.expressAdoptionInterest.customerPhone",
      "ui.adoptionGallery.output.expressAdoptionInterest",
      "ui.adoptionGallery.action.expressAdoptionInterest.error",
    ];
    unsubscribe(subscribedKeys, this);
    super.disconnectedCallback();
  }
}
