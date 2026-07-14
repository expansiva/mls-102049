/// <mls fileReference="_102049_/l2/petShop/web/shared/productCatalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseProductCatalogInput,
  PetShopBrowseProductCatalogOutput,
  PetShopBrowseProductCatalogOutputItem,
  PetShopViewProductDetailsInput,
  PetShopViewProductDetailsOutput,
  PetShopPlaceStorePickupOrderInput,
  PetShopPlaceStorePickupOrderOutput,
} from '/_102049_/l2/petShop/web/contracts/productCatalog.js';

/// **collab_i18n_start**
const message_pt = {
  "page.title": "Catálogo de Produtos e Pedido para Retirada",
  "section.catalog.title": "Catálogo de Produtos",
  "section.checkout.title": "Carrinho e Finalização do Pedido",
  "organism.browse.title": "Navegar no Catálogo",
  "organism.details.title": "Detalhes do Produto",
  "organism.cart.title": "Carrinho de Compras",
  "organism.checkout.title": "Finalizar Pedido de Retirada",
  "organism.summary.title": "Pedido Registrado",
  "field.searchName": "Buscar por nome",
  "field.productCategoryId": "Categoria",
  "field.productId": "Produto",
  "field.name": "Nome",
  "field.description": "Descrição",
  "field.price": "Preço",
  "field.imageUrl": "Imagem",
  "field.featured": "Destaque",
  "field.status": "Status",
  "field.quantity": "Quantidade",
  "field.unitPrice": "Preço Unitário",
  "field.customerName": "Nome do Cliente",
  "field.customerPhone": "Telefone de Contato",
  "field.orderId": "Número do Pedido",
  "field.createdAt": "Data do Pedido",
  "column.imageUrl": "Imagem",
  "column.name": "Nome",
  "column.price": "Preço",
  "column.productCategoryId": "Categoria",
  "column.featured": "Destaque",
  "column.productId": "Produto",
  "column.quantity": "Quantidade",
  "column.unitPrice": "Preço Unitário",
  "action.viewProductDetails": "Ver Detalhes",
  "action.placeStorePickupOrder": "Finalizar Pedido",
  "empty.browse": "Nenhum produto encontrado. Ajuste a busca ou o filtro de categoria.",
  "empty.details": "Selecione um produto no catálogo para ver os detalhes.",
  "empty.cart": "Seu carrinho está vazio. Adicione produtos do catálogo para continuar.",
  "empty.summary": "Finalize o pedido para visualizar o resumo.",
  "action.placeStorePickupOrder.success": "Pedido de retirada registrado com sucesso! Compareça à loja para pagamento e retirada.",
  "action.placeStorePickupOrder.error": "Não foi possível registrar o pedido. Verifique os dados e tente novamente.",
  "sec.catalog.title": "Sec catalog",
  "org.browse.catalog.title": "Navegar no catálogo de produtos com filtros de busca e categoria",
  "org.product.details.title": "Exibir detalhes completos do produto selecionado para decisão de compra",
  "org.cart.and.checkout.title": "Revisar itens do carrinho, informar dados do cliente e finalizar pedido para retirada na loja",
  "org.order.result.title": "Exibir o resumo do pedido registrado para confirmação do cliente"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopProductCatalogBase extends CollabLitElement {
  @property({ type: String }) status: string = "";

  @property({ type: String }) browseProductCatalogState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) browseProductCatalogSearchName: string = "";
  @property({ type: String }) browseProductCatalogProductCategoryId: string = "";
  @property({ type: Object }) browseProductCatalogData: PetShopBrowseProductCatalogOutput = { items: [], total: 0 };

  @property({ type: String }) viewProductDetailsState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) viewProductDetailsProductId: string = "";
  @property({ type: Object }) viewProductDetailsData: PetShopViewProductDetailsOutput | null = null;

  @property({ type: String }) placeStorePickupOrderState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) placeStorePickupOrderCustomerName: string = "";
  @property({ type: String }) placeStorePickupOrderCustomerPhone: string = "";
  @property({ type: Object }) placeStorePickupOrderOutput: PetShopPlaceStorePickupOrderOutput | null = null;
  @property({ type: String }) placeStorePickupOrderError: string = "";

  private subscribedKeys: string[] = [];

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // ---- Route param parsing ----

  private parseRouteParams(): { productId?: string } {
    const pattern = "/petShop/productCatalog/:productId?";
    const patternParts = pattern.split("/").filter((p) => p.length > 0);
    const pathParts = window.location.pathname.split("/").filter((p) => p.length > 0);
    const result: { productId?: string } = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(":")) {
        const isOptional = part.endsWith("?");
        const name = part.replace(":", "").replace("?", "");
        const value = pathParts[i];
        if (value !== undefined && value !== "") {
          try {
            result[name as keyof typeof result] = decodeURIComponent(value) as any;
          } catch {
            result[name as keyof typeof result] = value as any;
          }
        } else if (!isOptional) {
          result[name as keyof typeof result] = (pathParts[i] ?? "") as any;
        }
      }
    }
    return result;
  }

  // ---- State setters ----

  setBrowseProductCatalogSearchName(value: string): void {
    this.browseProductCatalogSearchName = value;
    setState("ui.productCatalog.input.browseProductCatalog.searchName", value);
    this.requestUpdate();
  }

  handleBrowseProductCatalogSearchNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setBrowseProductCatalogSearchName(target.value);
  }

  setBrowseProductCatalogProductCategoryId(value: string): void {
    this.browseProductCatalogProductCategoryId = value;
    setState("ui.productCatalog.input.browseProductCatalog.productCategoryId", value);
    this.requestUpdate();
  }

  handleBrowseProductCatalogProductCategoryIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setBrowseProductCatalogProductCategoryId(target.value);
  }

  setViewProductDetailsProductId(value: string): void {
    this.viewProductDetailsProductId = value;
    setState("ui.productCatalog.input.viewProductDetails.productId", value);
    this.requestUpdate();
  }

  handleViewProductDetailsProductIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setViewProductDetailsProductId(target.value);
  }

  setPlaceStorePickupOrderCustomerName(value: string): void {
    this.placeStorePickupOrderCustomerName = value;
    setState("ui.productCatalog.input.placeStorePickupOrder.customerName", value);
    this.requestUpdate();
  }

  handlePlaceStorePickupOrderCustomerNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setPlaceStorePickupOrderCustomerName(target.value);
  }

  setPlaceStorePickupOrderCustomerPhone(value: string): void {
    this.placeStorePickupOrderCustomerPhone = value;
    setState("ui.productCatalog.input.placeStorePickupOrder.customerPhone", value);
    this.requestUpdate();
  }

  handlePlaceStorePickupOrderCustomerPhoneChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setPlaceStorePickupOrderCustomerPhone(target.value);
  }

  // ---- Query actions ----

  async loadBrowseProductCatalog(): Promise<void> {
    this.browseProductCatalogState = "loading";
    setState("ui.productCatalog.action.browseProductCatalog.status", "loading");
    this.requestUpdate();

    const params: PetShopBrowseProductCatalogInput = {
      searchName: this.browseProductCatalogSearchName || undefined,
      productCategoryId: this.browseProductCatalogProductCategoryId || undefined,
    };

    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopBrowseProductCatalogOutput>(
      "petShop.browseProductCatalog.browseProductCatalog",
      params,
      options
    );

    if (response.ok) {
      const data = response.data ?? { items: [], total: 0 };
      this.browseProductCatalogData = data;
      setState("ui.productCatalog.data.browseProductCatalog", data);
      this.browseProductCatalogState = "success";
      setState("ui.productCatalog.action.browseProductCatalog.status", "success");
    } else {
      this.browseProductCatalogData = { items: [], total: 0 };
      setState("ui.productCatalog.data.browseProductCatalog", { items: [], total: 0 });
      this.browseProductCatalogState = "error";
      setState("ui.productCatalog.action.browseProductCatalog.status", "error");
      if (response.error) {
        console.error("[browseProductCatalog]", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseProductCatalogClick(): void {
    this.loadBrowseProductCatalog();
  }

  async loadViewProductDetails(): Promise<void> {
    // Parse route params
    const routeParams = this.parseRouteParams();
    if (routeParams.productId) {
      this.viewProductDetailsProductId = routeParams.productId;
      setState("ui.productCatalog.input.viewProductDetails.productId", routeParams.productId);
    }

    // If required route param is absent, do not call execBff
    if (!this.viewProductDetailsProductId) {
      this.viewProductDetailsState = "idle";
      setState("ui.productCatalog.action.viewProductDetails.status", "idle");
      this.viewProductDetailsData = null;
      setState("ui.productCatalog.data.viewProductDetails", null);
      this.requestUpdate();
      return;
    }

    this.viewProductDetailsState = "loading";
    setState("ui.productCatalog.action.viewProductDetails.status", "loading");
    this.requestUpdate();

    const params: PetShopViewProductDetailsInput = {
      productId: this.viewProductDetailsProductId,
    };

    const options: BffClientOptions = { mode: "silent" };
    const response = await execBff<PetShopViewProductDetailsOutput>(
      "petShop.viewProductDetails.viewProductDetails",
      params,
      options
    );

    if (response.ok) {
      const data = response.data ?? null;
      this.viewProductDetailsData = data;
      setState("ui.productCatalog.data.viewProductDetails", data);
      this.viewProductDetailsState = "success";
      setState("ui.productCatalog.action.viewProductDetails.status", "success");
    } else {
      this.viewProductDetailsData = null;
      setState("ui.productCatalog.data.viewProductDetails", null);
      this.viewProductDetailsState = "error";
      setState("ui.productCatalog.action.viewProductDetails.status", "error");
      if (response.error) {
        console.error("[viewProductDetails]", response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleViewProductDetailsClick(): void {
    this.loadViewProductDetails();
  }

  // ---- Command actions ----

  async placeStorePickupOrder(): Promise<void> {
    this.placeStorePickupOrderState = "loading";
    setState("ui.productCatalog.action.placeStorePickupOrder.status", "loading");
    this.placeStorePickupOrderError = "";
    setState("ui.productCatalog.action.placeStorePickupOrder.error", "");
    this.requestUpdate();

    const params: PetShopPlaceStorePickupOrderInput = {
      customerName: this.placeStorePickupOrderCustomerName,
      customerPhone: this.placeStorePickupOrderCustomerPhone || undefined,
    };

    const options: BffClientOptions = { mode: "blocking" };

    const result = await runBlockingUiAction(async (signal: AbortSignal) => {
      return execBff<PetShopPlaceStorePickupOrderOutput>(
        "petShop.placeStorePickupOrder.placeStorePickupOrder",
        params,
        { ...options, signal }
      );
    }, { mode: "blocking" });

    if (result && result.ok) {
      const data = result.data ?? null;
      this.placeStorePickupOrderOutput = data;
      setState("ui.productCatalog.output.placeStorePickupOrder", data);

      // Refresh query actions
      let refreshFailed = false;
      try {
        await this.loadBrowseProductCatalog();
      } catch {
        refreshFailed = true;
      }
      try {
        await this.loadViewProductDetails();
      } catch {
        refreshFailed = true;
      }

      if (refreshFailed) {
        this.placeStorePickupOrderState = "error";
        setState("ui.productCatalog.action.placeStorePickupOrder.status", "error");
        this.placeStorePickupOrderError = this.msg["action.placeStorePickupOrder.error"];
        setState("ui.productCatalog.action.placeStorePickupOrder.error", this.placeStorePickupOrderError);
      } else {
        // Clear input fields
        this.placeStorePickupOrderCustomerName = "";
        setState("ui.productCatalog.input.placeStorePickupOrder.customerName", "");
        this.placeStorePickupOrderCustomerPhone = "";
        setState("ui.productCatalog.input.placeStorePickupOrder.customerPhone", "");

        this.placeStorePickupOrderState = "success";
        setState("ui.productCatalog.action.placeStorePickupOrder.status", "success");
      }
    } else if (result && !result.ok) {
      const errorMsg = result.error?.message ?? this.msg["action.placeStorePickupOrder.error"];
      this.placeStorePickupOrderError = errorMsg;
      setState("ui.productCatalog.action.placeStorePickupOrder.error", errorMsg);
      this.placeStorePickupOrderState = "error";
      setState("ui.productCatalog.action.placeStorePickupOrder.status", "error");
    } else {
      // runBlockingUiAction returned undefined (e.g. aborted)
      this.placeStorePickupOrderError = this.msg["action.placeStorePickupOrder.error"];
      setState("ui.productCatalog.action.placeStorePickupOrder.error", this.placeStorePickupOrderError);
      this.placeStorePickupOrderState = "error";
      setState("ui.productCatalog.action.placeStorePickupOrder.status", "error");
    }
    this.requestUpdate();
  }

  handlePlaceStorePickupOrderClick(): void {
    this.placeStorePickupOrder();
  }

  // ---- Lifecycle ----

  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global state where useful
    const savedSearchName = getState("ui.productCatalog.input.browseProductCatalog.searchName");
    if (savedSearchName !== undefined) {
      this.browseProductCatalogSearchName = savedSearchName as string;
    }
    const savedProductCategoryId = getState("ui.productCatalog.input.browseProductCatalog.productCategoryId");
    if (savedProductCategoryId !== undefined) {
      this.browseProductCatalogProductCategoryId = savedProductCategoryId as string;
    }
    const savedProductId = getState("ui.productCatalog.input.viewProductDetails.productId");
    if (savedProductId !== undefined) {
      this.viewProductDetailsProductId = savedProductId as string;
    }
    const savedCustomerName = getState("ui.productCatalog.input.placeStorePickupOrder.customerName");
    if (savedCustomerName !== undefined) {
      this.placeStorePickupOrderCustomerName = savedCustomerName as string;
    }
    const savedCustomerPhone = getState("ui.productCatalog.input.placeStorePickupOrder.customerPhone");
    if (savedCustomerPhone !== undefined) {
      this.placeStorePickupOrderCustomerPhone = savedCustomerPhone as string;
    }

    // Subscribe to shared states
    const keys = [
      "ui.productCatalog.input.browseProductCatalog.searchName",
      "ui.productCatalog.input.browseProductCatalog.productCategoryId",
      "ui.productCatalog.input.viewProductDetails.productId",
      "ui.productCatalog.input.placeStorePickupOrder.customerName",
      "ui.productCatalog.input.placeStorePickupOrder.customerPhone",
    ];
    this.subscribedKeys = keys;
    subscribe(keys, this);

    // Run initial loads
    this.loadBrowseProductCatalog();
    this.loadViewProductDetails();
  }

  disconnectedCallback(): void {
    if (this.subscribedKeys.length > 0) {
      unsubscribe(this.subscribedKeys, this);
    }
    super.disconnectedCallback();
  }
}
