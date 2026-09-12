/// <mls fileReference="_102049_/l2/petShop/web/shared/catalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type { FeaturedProductsInput, FeaturedProductsOutput } from '/_102049_/l2/petShop/web/contracts/catalog.featuredProducts.js';
import { featuredProductsRoute } from '/_102049_/l2/petShop/web/contracts/catalog.featuredProducts.js';
import type { BrowseCatalogInput, BrowseCatalogOutput } from '/_102049_/l2/petShop/web/contracts/catalog.browseCatalog.js';
import { browseCatalogRoute } from '/_102049_/l2/petShop/web/contracts/catalog.browseCatalog.js';
import type { ProductDetailsInput, ProductDetailsOutput } from '/_102049_/l2/petShop/web/contracts/catalog.productDetails.js';
import { productDetailsRoute } from '/_102049_/l2/petShop/web/contracts/catalog.productDetails.js';
import type { ReserveProductInput, ReserveProductOutput } from '/_102049_/l2/petShop/web/contracts/catalog.reserveProduct.js';
import { reserveProductRoute } from '/_102049_/l2/petShop/web/contracts/catalog.reserveProduct.js';

export type { FeaturedProductsInput, FeaturedProductsOutput } from '/_102049_/l2/petShop/web/contracts/catalog.featuredProducts.js';
export type { BrowseCatalogInput, BrowseCatalogOutput } from '/_102049_/l2/petShop/web/contracts/catalog.browseCatalog.js';
export type { ProductDetailsInput, ProductDetailsOutput } from '/_102049_/l2/petShop/web/contracts/catalog.productDetails.js';
export type { ReserveProductInput, ReserveProductOutput } from '/_102049_/l2/petShop/web/contracts/catalog.reserveProduct.js';

/// **collab_i18n_start**
const message_pt = {
  "org.vitrine.cards.title": "Vitrine em destaque",
  "int.vitrine.list.title": "Produtos em destaque",
  "int.vitrine.list.empty": "Nenhum produto em destaque encontrado",
  "org.vitrine.filters.title": "Filtros da vitrine",
  "int.vitrine.filters.title": "Filtrar destaques",
  "int.vitrine.filters.empty": "Ajuste os filtros para ver destaques",
  "org.catalogo.cards.title": "Catálogo completo",
  "int.catalogo.list.title": "Produtos do catálogo",
  "int.catalogo.list.empty": "Nenhum produto encontrado no catálogo",
  "org.catalogo.filters.title": "Filtros do catálogo",
  "int.catalogo.filters.title": "Filtrar catálogo",
  "int.catalogo.filters.empty": "Use a busca e os filtros para refinar",
  "org.detalhe.card.title": "Detalhes do produto",
  "int.detalhe.view.title": "Informações do produto",
  "int.detalhe.view.empty": "Selecione um produto para ver detalhes",
  "org.reserva.form.title": "Reservar produto",
  "int.reserva.form.title": "Dados da reserva",
  "int.reserva.form.empty": "Preencha os dados para reservar",
  "field.name": "Nome",
  "field.price": "Preço",
  "field.isFeatured": "Destaque",
  "field.categoryId": "Categoria",
  "field.petTypeId": "Tipo de pet",
  "field.priceMin": "Preço mínimo",
  "field.priceMax": "Preço máximo",
  "field.page": "Página",
  "field.pageSize": "Itens por página",
  "field.items": "Itens",
  "field.searchName": "Buscar por nome",
  "field.minPrice": "Preço mínimo",
  "field.maxPrice": "Preço máximo",
  "field.categoryName": "Categoria",
  "field.petTypeName": "Tipo de pet",
  "field.createdAt": "Criado em",
  "field.updatedAt": "Atualizado em",
  "field.productId": "Produto",
  "field.quantity": "Quantidade",
  "field.customerName": "Nome do cliente",
  "field.customerPhone": "Telefone do cliente",
  "action.productDetails": "Ver detalhes",
  "action.applyFilters": "Aplicar filtros",
  "action.reserveProduct": "Reservar para retirada",
  "action.reserveProduct.success": "Reserva confirmada! Guarde o número da reserva para a retirada na loja.",
  "action.reserveProduct.error": "Não foi possível concluir a reserva. Verifique os dados e tente novamente.",
  "sec.vitrine.title": "Sec vitrine",
  "sec.catalogo.title": "Sec catalogo",
  "sec.detalhe.reserva.title": "Sec detalhe reserva",
  "section.vitrine.title": "Vitrine",
  "section.vitrine.featured.title": "Produtos em destaque",
  "section.vitrine.featured.empty": "Nenhum produto em destaque no momento. Explore o catálogo completo.",
  "organism.vitrine.featured.title": "Destaques da loja",
  "section.catalogo.title": "Catálogo",
  "section.catalogo.browse.title": "Todos os produtos",
  "section.catalogo.browse.empty": "Nenhum produto encontrado com esses filtros. Ajuste a busca e tente de novo.",
  "organism.catalogo.browse.title": "Buscar no catálogo",
  "section.detalheReserva.title": "Detalhe e reserva",
  "section.detalhe.product.title": "Detalhes do produto",
  "section.detalhe.product.empty": "Selecione um produto na vitrine ou no catálogo para ver os detalhes.",
  "organism.detalhe.product.title": "Ficha do produto",
  "section.detalhe.reserve.title": "Reservar para retirada",
  "section.detalhe.reserve.empty": "Preencha seus dados para reservar este produto.",
  "organism.detalhe.reserve.title": "Reservar produto",
  "field.product.name": "Nome",
  "field.product.price": "Preço",
  "field.product.isFeatured": "Destaque",
  "field.product.categoryId": "Categoria",
  "field.product.petTypeId": "Tipo de pet",
  "field.product.categoryName": "Categoria",
  "field.product.petTypeName": "Tipo de pet",
  "field.reserve.quantity": "Quantidade",
  "field.reserve.customerName": "Seu nome",
  "field.reserve.customerPhone": "Telefone de contato",
  "filter.featured.categoryId": "Categoria",
  "filter.featured.petTypeId": "Tipo de pet",
  "filter.featured.name": "Nome do produto",
  "filter.featured.priceMin": "Preço mínimo",
  "filter.featured.priceMax": "Preço máximo",
  "filter.browse.searchName": "Buscar por nome",
  "filter.browse.petTypeId": "Tipo de pet",
  "filter.browse.categoryId": "Categoria",
  "filter.browse.minPrice": "Preço mínimo",
  "filter.browse.maxPrice": "Preço máximo"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

type ActionStatus = "idle" | "loading" | "success" | "error";

const BROWSE_CATALOG_DEFAULT: BrowseCatalogOutput = {
  items: [],
  total: 0,
  page: 0,
  pageSize: 0
};

export class PetShopCatalogBase extends CollabLitElement {
  /** state ui.catalog.status — pageStatus */
  @property() status: string = "";
  /** state ui.catalog.action.featuredProducts.status — actionStatus, values: idle|loading|success|error */
  @property() featuredProductsState: ActionStatus = "idle";
  /** state ui.catalog.input.featuredProducts.categoryId — input */
  @property() featuredProductsCategoryId: string = "";
  /** state ui.catalog.input.featuredProducts.petTypeId — input */
  @property() featuredProductsPetTypeId: string = "";
  /** state ui.catalog.input.featuredProducts.name — input */
  @property() featuredProductsName: string = "";
  /** state ui.catalog.input.featuredProducts.priceMin — input */
  @property() featuredProductsPriceMin: string = "";
  /** state ui.catalog.input.featuredProducts.priceMax — input */
  @property() featuredProductsPriceMax: string = "";
  /** state ui.catalog.input.featuredProducts.page — input */
  @property() featuredProductsPage: string = "";
  /** state ui.catalog.input.featuredProducts.pageSize — input */
  @property() featuredProductsPageSize: string = "";
  /** state ui.catalog.data.featuredProducts — queryResult, outputShape: array */
  @property() featuredProductsData: FeaturedProductsOutput[] = [];
  /** state ui.catalog.action.browseCatalog.status — actionStatus, values: idle|loading|success|error */
  @property() browseCatalogState: ActionStatus = "idle";
  /** state ui.catalog.input.browseCatalog.searchName — input */
  @property() browseCatalogSearchName: string = "";
  /** state ui.catalog.input.browseCatalog.petTypeId — input */
  @property() browseCatalogPetTypeId: string = "";
  /** state ui.catalog.input.browseCatalog.categoryId — input */
  @property() browseCatalogCategoryId: string = "";
  /** state ui.catalog.input.browseCatalog.minPrice — input */
  @property() browseCatalogMinPrice: string = "";
  /** state ui.catalog.input.browseCatalog.maxPrice — input */
  @property() browseCatalogMaxPrice: string = "";
  /** state ui.catalog.input.browseCatalog.page — input */
  @property() browseCatalogPage: string = "";
  /** state ui.catalog.input.browseCatalog.pageSize — input */
  @property() browseCatalogPageSize: string = "";
  /** state ui.catalog.data.browseCatalog — queryResult, outputShape: paginated */
  @property() browseCatalogData: BrowseCatalogOutput = { items: [], total: 0, page: 0, pageSize: 0 };
  /** state ui.catalog.action.productDetails.status — actionStatus, values: idle|loading|success|error */
  @property() productDetailsState: ActionStatus = "idle";
  /** state ui.catalog.input.productDetails.productId — input */
  @property() productDetailsProductId: string = "";
  /** state ui.catalog.data.productDetails — queryResult, outputShape: object */
  @property() productDetailsData: ProductDetailsOutput | null = null;
  /** state ui.catalog.action.reserveProduct.status — actionStatus, values: idle|loading|success|error */
  @property() reserveProductState: ActionStatus = "idle";
  /** state ui.catalog.input.reserveProduct.customerName — input */
  @property() reserveProductCustomerName: string = "";
  /** state ui.catalog.input.reserveProduct.customerPhone — input */
  @property() reserveProductCustomerPhone: string = "";
  /** state ui.catalog.input.reserveProduct.productId — input */
  @property() reserveProductProductId: string = "";
  /** state ui.catalog.input.reserveProduct.quantity — input */
  @property() reserveProductQuantity: string = "";
  /** state ui.catalog.output.reserveProduct — commandOutput */
  @property() reserveProductOutput: ReserveProductOutput | null = null;
  /** state ui.catalog.action.reserveProduct.error — actionError */
  @property() reserveProductError: string = "";

  private readonly subscribedKeys: string[] = [
    "ui.catalog.status",
    "ui.catalog.action.featuredProducts.status",
    "ui.catalog.input.featuredProducts.categoryId",
    "ui.catalog.input.featuredProducts.petTypeId",
    "ui.catalog.input.featuredProducts.name",
    "ui.catalog.input.featuredProducts.priceMin",
    "ui.catalog.input.featuredProducts.priceMax",
    "ui.catalog.input.featuredProducts.page",
    "ui.catalog.input.featuredProducts.pageSize",
    "ui.catalog.data.featuredProducts",
    "ui.catalog.action.browseCatalog.status",
    "ui.catalog.input.browseCatalog.searchName",
    "ui.catalog.input.browseCatalog.petTypeId",
    "ui.catalog.input.browseCatalog.categoryId",
    "ui.catalog.input.browseCatalog.minPrice",
    "ui.catalog.input.browseCatalog.maxPrice",
    "ui.catalog.input.browseCatalog.page",
    "ui.catalog.input.browseCatalog.pageSize",
    "ui.catalog.data.browseCatalog",
    "ui.catalog.action.productDetails.status",
    "ui.catalog.input.productDetails.productId",
    "ui.catalog.data.productDetails",
    "ui.catalog.action.reserveProduct.status",
    "ui.catalog.input.reserveProduct.customerName",
    "ui.catalog.input.reserveProduct.customerPhone",
    "ui.catalog.input.reserveProduct.productId",
    "ui.catalog.input.reserveProduct.quantity",
    "ui.catalog.output.reserveProduct",
    "ui.catalog.action.reserveProduct.error"
  ];

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue("ui.catalog.status", "status", "");
    this.initStateValue("ui.catalog.action.featuredProducts.status", "featuredProductsState", "idle");
    this.initStateValue("ui.catalog.input.featuredProducts.categoryId", "featuredProductsCategoryId", "");
    this.initStateValue("ui.catalog.input.featuredProducts.petTypeId", "featuredProductsPetTypeId", "");
    this.initStateValue("ui.catalog.input.featuredProducts.name", "featuredProductsName", "");
    this.initStateValue("ui.catalog.input.featuredProducts.priceMin", "featuredProductsPriceMin", "");
    this.initStateValue("ui.catalog.input.featuredProducts.priceMax", "featuredProductsPriceMax", "");
    this.initStateValue("ui.catalog.input.featuredProducts.page", "featuredProductsPage", "");
    this.initStateValue("ui.catalog.input.featuredProducts.pageSize", "featuredProductsPageSize", "");
    this.initStateValue("ui.catalog.data.featuredProducts", "featuredProductsData", []);
    this.initStateValue("ui.catalog.action.browseCatalog.status", "browseCatalogState", "idle");
    this.initStateValue("ui.catalog.input.browseCatalog.searchName", "browseCatalogSearchName", "");
    this.initStateValue("ui.catalog.input.browseCatalog.petTypeId", "browseCatalogPetTypeId", "");
    this.initStateValue("ui.catalog.input.browseCatalog.categoryId", "browseCatalogCategoryId", "");
    this.initStateValue("ui.catalog.input.browseCatalog.minPrice", "browseCatalogMinPrice", "");
    this.initStateValue("ui.catalog.input.browseCatalog.maxPrice", "browseCatalogMaxPrice", "");
    this.initStateValue("ui.catalog.input.browseCatalog.page", "browseCatalogPage", "");
    this.initStateValue("ui.catalog.input.browseCatalog.pageSize", "browseCatalogPageSize", "");
    this.initStateValue("ui.catalog.data.browseCatalog", "browseCatalogData", { items: [], total: 0, page: 0, pageSize: 0 });
    this.initStateValue("ui.catalog.action.productDetails.status", "productDetailsState", "idle");
    this.initStateValue("ui.catalog.input.productDetails.productId", "productDetailsProductId", "");
    this.initStateValue("ui.catalog.data.productDetails", "productDetailsData", null);
    this.initStateValue("ui.catalog.action.reserveProduct.status", "reserveProductState", "idle");
    this.initStateValue("ui.catalog.input.reserveProduct.customerName", "reserveProductCustomerName", "");
    this.initStateValue("ui.catalog.input.reserveProduct.customerPhone", "reserveProductCustomerPhone", "");
    this.initStateValue("ui.catalog.input.reserveProduct.productId", "reserveProductProductId", "");
    this.initStateValue("ui.catalog.input.reserveProduct.quantity", "reserveProductQuantity", "");
    this.initStateValue("ui.catalog.output.reserveProduct", "reserveProductOutput", null);
    this.initStateValue("ui.catalog.action.reserveProduct.error", "reserveProductError", "");
    subscribe(this.subscribedKeys, this);
    void this.loadFeaturedProducts();
    void this.loadBrowseCatalog();
  }

  disconnectedCallback(): void {
    unsubscribe(this.subscribedKeys, this);
    super.disconnectedCallback();
  }

  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case "ui.catalog.status":
        this.status = value as string;
        break;
      case "ui.catalog.action.featuredProducts.status":
        this.featuredProductsState = value as ActionStatus;
        break;
      case "ui.catalog.input.featuredProducts.categoryId":
        this.featuredProductsCategoryId = value as string;
        break;
      case "ui.catalog.input.featuredProducts.petTypeId":
        this.featuredProductsPetTypeId = value as string;
        break;
      case "ui.catalog.input.featuredProducts.name":
        this.featuredProductsName = value as string;
        break;
      case "ui.catalog.input.featuredProducts.priceMin":
        this.featuredProductsPriceMin = value as string;
        break;
      case "ui.catalog.input.featuredProducts.priceMax":
        this.featuredProductsPriceMax = value as string;
        break;
      case "ui.catalog.input.featuredProducts.page":
        this.featuredProductsPage = value as string;
        break;
      case "ui.catalog.input.featuredProducts.pageSize":
        this.featuredProductsPageSize = value as string;
        break;
      case "ui.catalog.data.featuredProducts":
        this.featuredProductsData = (value as FeaturedProductsOutput[]) ?? [];
        break;
      case "ui.catalog.action.browseCatalog.status":
        this.browseCatalogState = value as ActionStatus;
        break;
      case "ui.catalog.input.browseCatalog.searchName":
        this.browseCatalogSearchName = value as string;
        break;
      case "ui.catalog.input.browseCatalog.petTypeId":
        this.browseCatalogPetTypeId = value as string;
        break;
      case "ui.catalog.input.browseCatalog.categoryId":
        this.browseCatalogCategoryId = value as string;
        break;
      case "ui.catalog.input.browseCatalog.minPrice":
        this.browseCatalogMinPrice = value as string;
        break;
      case "ui.catalog.input.browseCatalog.maxPrice":
        this.browseCatalogMaxPrice = value as string;
        break;
      case "ui.catalog.input.browseCatalog.page":
        this.browseCatalogPage = value as string;
        break;
      case "ui.catalog.input.browseCatalog.pageSize":
        this.browseCatalogPageSize = value as string;
        break;
      case "ui.catalog.data.browseCatalog":
        this.browseCatalogData = (value as BrowseCatalogOutput) ?? { items: [], total: 0, page: 0, pageSize: 0 };
        break;
      case "ui.catalog.action.productDetails.status":
        this.productDetailsState = value as ActionStatus;
        break;
      case "ui.catalog.input.productDetails.productId":
        this.productDetailsProductId = value as string;
        break;
      case "ui.catalog.data.productDetails":
        this.productDetailsData = (value as ProductDetailsOutput | null) ?? null;
        break;
      case "ui.catalog.action.reserveProduct.status":
        this.reserveProductState = value as ActionStatus;
        break;
      case "ui.catalog.input.reserveProduct.customerName":
        this.reserveProductCustomerName = value as string;
        break;
      case "ui.catalog.input.reserveProduct.customerPhone":
        this.reserveProductCustomerPhone = value as string;
        break;
      case "ui.catalog.input.reserveProduct.productId":
        this.reserveProductProductId = value as string;
        break;
      case "ui.catalog.input.reserveProduct.quantity":
        this.reserveProductQuantity = value as string;
        break;
      case "ui.catalog.output.reserveProduct":
        this.reserveProductOutput = (value as ReserveProductOutput | null) ?? null;
        break;
      case "ui.catalog.action.reserveProduct.error":
        this.reserveProductError = value as string;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, propName: keyof this, defaultValue: unknown): void {
    const existing = getState(stateKey);
    const value = existing !== undefined && existing !== null ? existing : defaultValue;
    (this as Record<string, unknown>)[propName as string] = value;
    if (existing === undefined || existing === null) {
      setState(stateKey, value);
    }
  }

  private applyRouteParams(): void {
    const pattern = "/petShop/catalog/:productId?";
    const path = typeof window !== "undefined" ? window.location.pathname : "";
    const patternParts = pattern.split("/").filter(Boolean);
    const pathParts = path.split("/").filter(Boolean);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(":")) {
        const optional = part.endsWith("?");
        const name = optional ? part.slice(1, -1) : part.slice(1);
        const raw = pathParts[i];
        if (raw !== undefined && raw !== "") {
          try {
            params[name] = decodeURIComponent(raw);
          } catch {
            params[name] = raw;
          }
        }
      }
    }
    if (params.productId && !this.productDetailsProductId) {
      this.productDetailsProductId = params.productId;
      setState("ui.catalog.input.productDetails.productId", params.productId);
    }
  }

  private optionalNumber(value: string): number | undefined {
    if (value === "" || value === undefined || value === null) {
      return undefined;
    }
    const n = Number(value);
    return Number.isFinite(n) ? n : undefined;
  }

  private optionalString(value: string): string | undefined {
    if (value === "" || value === undefined || value === null) {
      return undefined;
    }
    return value;
  }

  /** action featuredProducts (query) — route petShop.catalog.featuredProducts; inputs: categoryId, petTypeId, name, priceMin, priceMax, page, pageSize; writes ui.catalog.data.featuredProducts; status ui.catalog.action.featuredProducts.status */
  async loadFeaturedProducts(): Promise<void> {
    this.featuredProductsState = "loading";
    setState("ui.catalog.action.featuredProducts.status", "loading");
    const params: FeaturedProductsInput = {
      categoryId: this.optionalString(this.featuredProductsCategoryId),
      petTypeId: this.optionalString(this.featuredProductsPetTypeId),
      name: this.optionalString(this.featuredProductsName),
      priceMin: this.optionalNumber(this.featuredProductsPriceMin),
      priceMax: this.optionalNumber(this.featuredProductsPriceMax),
      page: this.optionalNumber(this.featuredProductsPage),
      pageSize: this.optionalNumber(this.featuredProductsPageSize)
    };
    const options: BffClientOptions = { mode: "silent" };
    try {
      const response = await execBff<FeaturedProductsOutput[]>(featuredProductsRoute, params, options);
      if (response.ok) {
        const data = response.data ?? [];
        this.featuredProductsData = data;
        setState("ui.catalog.data.featuredProducts", data);
        this.featuredProductsState = "success";
        setState("ui.catalog.action.featuredProducts.status", "success");
      } else {
        console.error("featuredProducts failed", response.error);
        this.featuredProductsState = "error";
        setState("ui.catalog.action.featuredProducts.status", "error");
      }
    } catch (err) {
      console.error("featuredProducts error", err);
      this.featuredProductsState = "error";
      setState("ui.catalog.action.featuredProducts.status", "error");
    }
  }

  /** handler for action featuredProducts — bind UI events here */
  handleFeaturedProductsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadFeaturedProducts();
  }

  /** action browseCatalog (query) — route petShop.catalog.browseCatalog; inputs: searchName, petTypeId, categoryId, minPrice, maxPrice, page, pageSize; writes ui.catalog.data.browseCatalog; status ui.catalog.action.browseCatalog.status */
  async loadBrowseCatalog(): Promise<void> {
    this.browseCatalogState = "loading";
    setState("ui.catalog.action.browseCatalog.status", "loading");
    const params: BrowseCatalogInput = {
      searchName: this.optionalString(this.browseCatalogSearchName),
      petTypeId: this.optionalString(this.browseCatalogPetTypeId),
      categoryId: this.optionalString(this.browseCatalogCategoryId),
      minPrice: this.optionalNumber(this.browseCatalogMinPrice),
      maxPrice: this.optionalNumber(this.browseCatalogMaxPrice),
      page: this.optionalNumber(this.browseCatalogPage),
      pageSize: this.optionalNumber(this.browseCatalogPageSize)
    };
    const options: BffClientOptions = { mode: "silent" };
    try {
      const response = await execBff<BrowseCatalogOutput>(browseCatalogRoute, params, options);
      if (response.ok) {
        const data = response.data ?? BROWSE_CATALOG_DEFAULT;
        this.browseCatalogData = data;
        setState("ui.catalog.data.browseCatalog", data);
        this.browseCatalogState = "success";
        setState("ui.catalog.action.browseCatalog.status", "success");
      } else {
        console.error("browseCatalog failed", response.error);
        this.browseCatalogState = "error";
        setState("ui.catalog.action.browseCatalog.status", "error");
      }
    } catch (err) {
      console.error("browseCatalog error", err);
      this.browseCatalogState = "error";
      setState("ui.catalog.action.browseCatalog.status", "error");
    }
  }

  /** handler for action browseCatalog — bind UI events here */
  handleBrowseCatalogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadBrowseCatalog();
  }

  /** action productDetails (query) — route petShop.catalog.productDetails; inputs: productId; writes ui.catalog.data.productDetails; status ui.catalog.action.productDetails.status */
  async loadProductDetails(): Promise<void> {
    this.applyRouteParams();
    const productId = this.productDetailsProductId;
    if (!productId) {
      this.productDetailsState = "idle";
      setState("ui.catalog.action.productDetails.status", "idle");
      this.productDetailsData = null;
      setState("ui.catalog.data.productDetails", null);
      return;
    }
    this.productDetailsState = "loading";
    setState("ui.catalog.action.productDetails.status", "loading");
    const params: ProductDetailsInput = { productId };
    const options: BffClientOptions = { mode: "silent" };
    try {
      const response = await execBff<ProductDetailsOutput>(productDetailsRoute, params, options);
      if (response.ok) {
        const data = response.data ?? null;
        this.productDetailsData = data;
        setState("ui.catalog.data.productDetails", data);
        this.productDetailsState = "success";
        setState("ui.catalog.action.productDetails.status", "success");
      } else {
        console.error("productDetails failed", response.error);
        this.productDetailsState = "error";
        setState("ui.catalog.action.productDetails.status", "error");
      }
    } catch (err) {
      console.error("productDetails error", err);
      this.productDetailsState = "error";
      setState("ui.catalog.action.productDetails.status", "error");
    }
  }

  /** handler for action productDetails — bind UI events here */
  handleProductDetailsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadProductDetails();
  }

  /** action reserveProduct (command) — route petShop.catalog.reserveProduct; inputs: customerName, customerPhone, productId, quantity; writes ui.catalog.output.reserveProduct; status ui.catalog.action.reserveProduct.status; feedback keys action.reserveProduct.success / action.reserveProduct.error */
  async reserveProduct(signal?: AbortSignal): Promise<void> {
    this.reserveProductState = "loading";
    setState("ui.catalog.action.reserveProduct.status", "loading");
    this.reserveProductError = "";
    setState("ui.catalog.action.reserveProduct.error", "");
    const params: ReserveProductInput = {
      customerName: this.reserveProductCustomerName,
      customerPhone: this.reserveProductCustomerPhone,
      productId: this.reserveProductProductId,
      quantity: Number(this.reserveProductQuantity)
    };
    const options: BffClientOptions = { mode: "blocking", signal };
    try {
      const response = await execBff<ReserveProductOutput>(reserveProductRoute, params, options);
      if (response.ok) {
        const data = response.data ?? null;
        this.reserveProductOutput = data;
        setState("ui.catalog.output.reserveProduct", data);
        try {
          await this.loadFeaturedProducts();
          await this.loadBrowseCatalog();
          await this.loadProductDetails();
        } catch (refreshErr) {
          console.error("reserveProduct refresh failed", refreshErr);
          this.reserveProductState = "error";
          setState("ui.catalog.action.reserveProduct.status", "error");
          return;
        }
        this.reserveProductCustomerName = "";
        setState("ui.catalog.input.reserveProduct.customerName", "");
        this.reserveProductCustomerPhone = "";
        setState("ui.catalog.input.reserveProduct.customerPhone", "");
        this.reserveProductProductId = "";
        setState("ui.catalog.input.reserveProduct.productId", "");
        this.reserveProductQuantity = "";
        setState("ui.catalog.input.reserveProduct.quantity", "");
        this.reserveProductState = "success";
        setState("ui.catalog.action.reserveProduct.status", "success");
      } else {
        const errMsg =
          (response.error && (response.error as { message?: string }).message) ||
          this.msg["action.reserveProduct.error"];
        this.reserveProductError = errMsg;
        setState("ui.catalog.action.reserveProduct.error", errMsg);
        console.error("reserveProduct failed", response.error);
        this.reserveProductState = "error";
        setState("ui.catalog.action.reserveProduct.status", "error");
      }
    } catch (err) {
      const errMsg =
        err instanceof Error ? err.message : this.msg["action.reserveProduct.error"];
      this.reserveProductError = errMsg;
      setState("ui.catalog.action.reserveProduct.error", errMsg);
      console.error("reserveProduct error", err);
      this.reserveProductState = "error";
      setState("ui.catalog.action.reserveProduct.status", "error");
    }
  }

  /** handler for action reserveProduct — bind UI events here */
  handleReserveProductClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (signal: AbortSignal) => {
      await this.reserveProduct(signal);
    });
  }

  /** setter for state ui.catalog.input.featuredProducts.categoryId */
  setFeaturedProductsCategoryId(value: string): void {
    this.featuredProductsCategoryId = value;
    setState("ui.catalog.input.featuredProducts.categoryId", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsCategoryId — bind UI events here */
  handleFeaturedProductsCategoryIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsCategoryId(value);
  }

  /** setter for state ui.catalog.input.featuredProducts.petTypeId */
  setFeaturedProductsPetTypeId(value: string): void {
    this.featuredProductsPetTypeId = value;
    setState("ui.catalog.input.featuredProducts.petTypeId", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsPetTypeId — bind UI events here */
  handleFeaturedProductsPetTypeIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsPetTypeId(value);
  }

  /** setter for state ui.catalog.input.featuredProducts.name */
  setFeaturedProductsName(value: string): void {
    this.featuredProductsName = value;
    setState("ui.catalog.input.featuredProducts.name", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsName — bind UI events here */
  handleFeaturedProductsNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsName(value);
  }

  /** setter for state ui.catalog.input.featuredProducts.priceMin */
  setFeaturedProductsPriceMin(value: string): void {
    this.featuredProductsPriceMin = value;
    setState("ui.catalog.input.featuredProducts.priceMin", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsPriceMin — bind UI events here */
  handleFeaturedProductsPriceMinChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsPriceMin(value);
  }

  /** setter for state ui.catalog.input.featuredProducts.priceMax */
  setFeaturedProductsPriceMax(value: string): void {
    this.featuredProductsPriceMax = value;
    setState("ui.catalog.input.featuredProducts.priceMax", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsPriceMax — bind UI events here */
  handleFeaturedProductsPriceMaxChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsPriceMax(value);
  }

  /** setter for state ui.catalog.input.featuredProducts.page */
  setFeaturedProductsPage(value: string): void {
    this.featuredProductsPage = value;
    setState("ui.catalog.input.featuredProducts.page", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsPage — bind UI events here */
  handleFeaturedProductsPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsPage(value);
  }

  /** setter for state ui.catalog.input.featuredProducts.pageSize */
  setFeaturedProductsPageSize(value: string): void {
    this.featuredProductsPageSize = value;
    setState("ui.catalog.input.featuredProducts.pageSize", value);
    this.requestUpdate();
  }

  /** handler for action set.featuredProductsPageSize — bind UI events here */
  handleFeaturedProductsPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setFeaturedProductsPageSize(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.searchName */
  setBrowseCatalogSearchName(value: string): void {
    this.browseCatalogSearchName = value;
    setState("ui.catalog.input.browseCatalog.searchName", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogSearchName — bind UI events here */
  handleBrowseCatalogSearchNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogSearchName(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.petTypeId */
  setBrowseCatalogPetTypeId(value: string): void {
    this.browseCatalogPetTypeId = value;
    setState("ui.catalog.input.browseCatalog.petTypeId", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogPetTypeId — bind UI events here */
  handleBrowseCatalogPetTypeIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogPetTypeId(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.categoryId */
  setBrowseCatalogCategoryId(value: string): void {
    this.browseCatalogCategoryId = value;
    setState("ui.catalog.input.browseCatalog.categoryId", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogCategoryId — bind UI events here */
  handleBrowseCatalogCategoryIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogCategoryId(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.minPrice */
  setBrowseCatalogMinPrice(value: string): void {
    this.browseCatalogMinPrice = value;
    setState("ui.catalog.input.browseCatalog.minPrice", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogMinPrice — bind UI events here */
  handleBrowseCatalogMinPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogMinPrice(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.maxPrice */
  setBrowseCatalogMaxPrice(value: string): void {
    this.browseCatalogMaxPrice = value;
    setState("ui.catalog.input.browseCatalog.maxPrice", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogMaxPrice — bind UI events here */
  handleBrowseCatalogMaxPriceChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogMaxPrice(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.page */
  setBrowseCatalogPage(value: string): void {
    this.browseCatalogPage = value;
    setState("ui.catalog.input.browseCatalog.page", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogPage — bind UI events here */
  handleBrowseCatalogPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogPage(value);
  }

  /** setter for state ui.catalog.input.browseCatalog.pageSize */
  setBrowseCatalogPageSize(value: string): void {
    this.browseCatalogPageSize = value;
    setState("ui.catalog.input.browseCatalog.pageSize", value);
    this.requestUpdate();
  }

  /** handler for action set.browseCatalogPageSize — bind UI events here */
  handleBrowseCatalogPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setBrowseCatalogPageSize(value);
  }

  /** setter for state ui.catalog.input.productDetails.productId */
  setProductDetailsProductId(value: string): void {
    this.productDetailsProductId = value;
    setState("ui.catalog.input.productDetails.productId", value);
    this.requestUpdate();
  }

  /** handler for action set.productDetailsProductId — bind UI events here */
  handleProductDetailsProductIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setProductDetailsProductId(value);
  }

  /** setter for state ui.catalog.input.reserveProduct.customerName */
  setReserveProductCustomerName(value: string): void {
    this.reserveProductCustomerName = value;
    setState("ui.catalog.input.reserveProduct.customerName", value);
    this.requestUpdate();
  }

  /** handler for action set.reserveProductCustomerName — bind UI events here */
  handleReserveProductCustomerNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setReserveProductCustomerName(value);
  }

  /** setter for state ui.catalog.input.reserveProduct.customerPhone */
  setReserveProductCustomerPhone(value: string): void {
    this.reserveProductCustomerPhone = value;
    setState("ui.catalog.input.reserveProduct.customerPhone", value);
    this.requestUpdate();
  }

  /** handler for action set.reserveProductCustomerPhone — bind UI events here */
  handleReserveProductCustomerPhoneChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setReserveProductCustomerPhone(value);
  }

  /** setter for state ui.catalog.input.reserveProduct.productId */
  setReserveProductProductId(value: string): void {
    this.reserveProductProductId = value;
    setState("ui.catalog.input.reserveProduct.productId", value);
    this.requestUpdate();
  }

  /** handler for action set.reserveProductProductId — bind UI events here */
  handleReserveProductProductIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setReserveProductProductId(value);
  }

  /** setter for state ui.catalog.input.reserveProduct.quantity */
  setReserveProductQuantity(value: string): void {
    this.reserveProductQuantity = value;
    setState("ui.catalog.input.reserveProduct.quantity", value);
    this.requestUpdate();
  }

  /** handler for action set.reserveProductQuantity — bind UI events here */
  handleReserveProductQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target ? String(target.value) : "";
    this.setReserveProductQuantity(value);
  }
}
