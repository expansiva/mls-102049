/// <mls fileReference="_102049_/l2/petShop/web/shared/productCatalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
PetShopViewHighlightsInput,
PetShopViewHighlightsOutput,
PetShopBrowseCatalogInput,
PetShopBrowseCatalogOutput,
PetShopSearchProductsInput,
PetShopSearchProductsOutput,
PetShopFilterProductsInput,
PetShopFilterProductsOutput,
PetShopViewProductDetailsInput,
PetShopViewProductDetailsOutput
} from '/_102049_/l2/petShop/web/contracts/productCatalog.js';
export type {
PetShopViewHighlightsInput,
PetShopViewHighlightsOutputItem,
PetShopViewHighlightsOutput,
PetShopBrowseCatalogInput,
PetShopBrowseCatalogProduct,
PetShopBrowseCatalogOutput,
PetShopSearchProductsInput,
PetShopSearchProductsOutputItem,
PetShopSearchProductsOutput,
PetShopFilterProductsInput,
PetShopFilterProductsOutputItem,
PetShopFilterProductsOutput,
PetShopViewProductDetailsInput,
PetShopViewProductDetailsOutput
} from '/_102049_/l2/petShop/web/contracts/productCatalog.js';

/// **collab_i18n_start**
const message_pt = {
"page.productCatalog.title": "Catálogo de Produtos",
"section.overview.title": "Visão Geral",
"section.catalog.title": "Catálogo de Produtos",
"section.details.title": "Detalhes do Produto",
"organism.highlightsCards.title": "Produtos em Destaque",
"organism.catalogSummary.title": "Resumo do Catálogo",
"organism.catalogBrowser.title": "Navegar Catálogo",
"organism.productDetails.title": "Detalhes do Produto",
"intention.viewHighlights.title": "Produtos em Destaque",
"intention.browseCatalogSummary.title": "Estatísticas do Catálogo",
"intention.browseCatalogFilter.title": "Filtros do Catálogo",
"intention.searchProductsFilter.title": "Buscar Produtos",
"intention.filterProductsFilter.title": "Filtrar Produtos",
"intention.searchProductsList.title": "Resultados da Busca",
"intention.filterProductsList.title": "Resultados Filtrados",
"intention.viewProductDetails.title": "Detalhes do Produto",
"intention.viewHighlights.empty": "Nenhum produto em destaque disponível",
"intention.browseCatalogSummary.empty": "Catálogo vazio",
"intention.searchProductsList.empty": "Nenhum produto encontrado para a sua busca",
"intention.filterProductsList.empty": "Nenhum produto corresponde aos filtros selecionados",
"intention.viewProductDetails.empty": "Selecione um produto para ver os detalhes",
"field.searchTerm.label": "Buscar por nome",
"field.petTypeId.label": "Tipo de Pet",
"field.categoryId.label": "Categoria",
"field.minPrice.label": "Preço Mínimo",
"field.maxPrice.label": "Preço Máximo",
"field.productId.label": "ID",
"field.name.label": "Nome",
"field.description.label": "Descrição",
"field.price.label": "Preço",
"field.petTypeName.label": "Tipo de Pet",
"field.categoryName.label": "Categoria",
"field.highlighted.label": "Destaque",
"field.status.label": "Status",
"field.products.label": "Produtos",
"field.total.label": "Total",
"field.page.label": "Página",
"field.pageSize.label": "Itens por Página",
"field.createdAt.label": "Criado em",
"field.updatedAt.label": "Atualizado em",
"action.browseCatalog.label": "Navegar Catálogo",
"action.searchProducts.label": "Buscar Produtos",
"action.filterProducts.label": "Filtrar",
"action.viewProductDetails.label": "Ver Detalhes",
"action.viewHighlights.label": "Ver Destaques",
"sec.overview.title": "Sec overview",
"org.highlights.title": "Display highlighted products as summary cards for at a glance browsing",
"org.catalog.summary.title": "Show catalog overview metrics including total products and pagination info",
"sec.catalog.title": "Sec catalog",
"org.catalog.browser.title": "Search, filter and browse products in the catalog with combined criteria",
"sec.details.title": "Sec details",
"org.product.details.title": "Display detailed information about a selected product including pet type and category names",
"page.title": "Catálogo de Produtos",
"section.highlights.title": "Produtos em Destaque",
"section.detail.title": "Detalhes do Produto",
"empty.highlights": "Nenhum produto em destaque no momento",
"empty.catalog": "Nenhum produto encontrado",
"empty.detail": "Selecione um produto para ver os detalhes"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopProductCatalogBase extends CollabLitElement {
private readonly subscribedKeys: string[] = [
'ui.productCatalog.status',
'ui.productCatalog.action.viewHighlights.status',
'ui.productCatalog.data.viewHighlights',
'ui.productCatalog.action.browseCatalog.status',
'ui.productCatalog.input.browseCatalog.searchTerm',
'ui.productCatalog.input.browseCatalog.petTypeId',
'ui.productCatalog.input.browseCatalog.categoryId',
'ui.productCatalog.input.browseCatalog.minPrice',
'ui.productCatalog.input.browseCatalog.maxPrice',
'ui.productCatalog.data.browseCatalog',
'ui.productCatalog.action.searchProducts.status',
'ui.productCatalog.input.searchProducts.searchTerm',
'ui.productCatalog.input.searchProducts.petTypeId',
'ui.productCatalog.input.searchProducts.categoryId',
'ui.productCatalog.input.searchProducts.minPrice',
'ui.productCatalog.input.searchProducts.maxPrice',
'ui.productCatalog.data.searchProducts',
'ui.productCatalog.action.filterProducts.status',
'ui.productCatalog.input.filterProducts.petTypeId',
'ui.productCatalog.input.filterProducts.categoryId',
'ui.productCatalog.input.filterProducts.minPrice',
'ui.productCatalog.input.filterProducts.maxPrice',
'ui.productCatalog.data.filterProducts',
'ui.productCatalog.action.viewProductDetails.status',
'ui.productCatalog.input.viewProductDetails.productId',
'ui.productCatalog.data.viewProductDetails'
];

/** state ui.productCatalog.status — pageStatus */
@property()
status: string = '';

/** state ui.productCatalog.action.viewHighlights.status — actionStatus, values: idle | loading | success | error */
@property()
viewHighlightsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

/** state ui.productCatalog.data.viewHighlights — queryResult, outputShape: array */
@property()
viewHighlightsData: PetShopViewHighlightsOutput = [];

/** state ui.productCatalog.action.browseCatalog.status — actionStatus, values: idle | loading | success | error */
@property()
browseCatalogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

/** state ui.productCatalog.input.browseCatalog.searchTerm — input */
@property()
browseCatalogSearchTerm: string = '';

/** state ui.productCatalog.input.browseCatalog.petTypeId — input */
@property()
browseCatalogPetTypeId: string = '';

/** state ui.productCatalog.input.browseCatalog.categoryId — input */
@property()
browseCatalogCategoryId: string = '';

/** state ui.productCatalog.input.browseCatalog.minPrice — input */
@property()
browseCatalogMinPrice: number | '' = '';

/** state ui.productCatalog.input.browseCatalog.maxPrice — input */
@property()
browseCatalogMaxPrice: number | '' = '';

/** state ui.productCatalog.data.browseCatalog — queryResult, outputShape: paginated */
@property()
browseCatalogData: PetShopBrowseCatalogOutput = {
products: [],
total: 0,
page: 0,
pageSize: 0
};

/** state ui.productCatalog.action.searchProducts.status — actionStatus, values: idle | loading | success | error */
@property()
searchProductsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

/** state ui.productCatalog.input.searchProducts.searchTerm — input */
@property()
searchProductsSearchTerm: string = '';

/** state ui.productCatalog.input.searchProducts.petTypeId — input */
@property()
searchProductsPetTypeId: string = '';

/** state ui.productCatalog.input.searchProducts.categoryId — input */
@property()
searchProductsCategoryId: string = '';

/** state ui.productCatalog.input.searchProducts.minPrice — input */
@property()
searchProductsMinPrice: number | '' = '';

/** state ui.productCatalog.input.searchProducts.maxPrice — input */
@property()
searchProductsMaxPrice: number | '' = '';

/** state ui.productCatalog.data.searchProducts — queryResult, outputShape: array */
@property()
searchProductsData: PetShopSearchProductsOutput = [];

/** state ui.productCatalog.action.filterProducts.status — actionStatus, values: idle | loading | success | error */
@property()
filterProductsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

/** state ui.productCatalog.input.filterProducts.petTypeId — input */
@property()
filterProductsPetTypeId: string = '';

/** state ui.productCatalog.input.filterProducts.categoryId — input */
@property()
filterProductsCategoryId: string = '';

/** state ui.productCatalog.input.filterProducts.minPrice — input */
@property()
filterProductsMinPrice: number | '' = '';

/** state ui.productCatalog.input.filterProducts.maxPrice — input */
@property()
filterProductsMaxPrice: number | '' = '';

/** state ui.productCatalog.data.filterProducts — queryResult, outputShape: array */
@property()
filterProductsData: PetShopFilterProductsOutput = [];

/** state ui.productCatalog.action.viewProductDetails.status — actionStatus, values: idle | loading | success | error */
@property()
viewProductDetailsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

/** state ui.productCatalog.input.viewProductDetails.productId — input */
@property()
viewProductDetailsProductId: string = '';

/** state ui.productCatalog.data.viewProductDetails — queryResult, outputShape: object */
@property()
viewProductDetailsData: PetShopViewProductDetailsOutput | null = null;

/** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
protected get msg(): MessageType {
const lang: string = this.getMessageKey(messages);
return messages[lang] || message_pt;
}

/** lifecycle connectedCallback — init state, subscribe and load data */
public override connectedCallback(): void {
super.connectedCallback();
this.status = this.initStateValue('ui.productCatalog.status', '');
this.viewHighlightsState = this.initStateValue('ui.productCatalog.action.viewHighlights.status', 'idle');
this.viewHighlightsData = this.initStateValue('ui.productCatalog.data.viewHighlights', []);
this.browseCatalogState = this.initStateValue('ui.productCatalog.action.browseCatalog.status', 'idle');
this.browseCatalogSearchTerm = this.initStateValue('ui.productCatalog.input.browseCatalog.searchTerm', '');
this.browseCatalogPetTypeId = this.initStateValue('ui.productCatalog.input.browseCatalog.petTypeId', '');
this.browseCatalogCategoryId = this.initStateValue('ui.productCatalog.input.browseCatalog.categoryId', '');
this.browseCatalogMinPrice = this.initStateValue('ui.productCatalog.input.browseCatalog.minPrice', '');
this.browseCatalogMaxPrice = this.initStateValue('ui.productCatalog.input.browseCatalog.maxPrice', '');
this.browseCatalogData = this.initStateValue('ui.productCatalog.data.browseCatalog', {
products: [],
total: 0,
page: 0,
pageSize: 0
});
this.searchProductsState = this.initStateValue('ui.productCatalog.action.searchProducts.status', 'idle');
this.searchProductsSearchTerm = this.initStateValue('ui.productCatalog.input.searchProducts.searchTerm', '');
this.searchProductsPetTypeId = this.initStateValue('ui.productCatalog.input.searchProducts.petTypeId', '');
this.searchProductsCategoryId = this.initStateValue('ui.productCatalog.input.searchProducts.categoryId', '');
this.searchProductsMinPrice = this.initStateValue('ui.productCatalog.input.searchProducts.minPrice', '');
this.searchProductsMaxPrice = this.initStateValue('ui.productCatalog.input.searchProducts.maxPrice', '');
this.searchProductsData = this.initStateValue('ui.productCatalog.data.searchProducts', []);
this.filterProductsState = this.initStateValue('ui.productCatalog.action.filterProducts.status', 'idle');
this.filterProductsPetTypeId = this.initStateValue('ui.productCatalog.input.filterProducts.petTypeId', '');
this.filterProductsCategoryId = this.initStateValue('ui.productCatalog.input.filterProducts.categoryId', '');
this.filterProductsMinPrice = this.initStateValue('ui.productCatalog.input.filterProducts.minPrice', '');
this.filterProductsMaxPrice = this.initStateValue('ui.productCatalog.input.filterProducts.maxPrice', '');
this.filterProductsData = this.initStateValue('ui.productCatalog.data.filterProducts', []);
this.viewProductDetailsState = this.initStateValue('ui.productCatalog.action.viewProductDetails.status', 'idle');
this.viewProductDetailsProductId = this.initStateValue('ui.productCatalog.input.viewProductDetails.productId', '');
this.viewProductDetailsData = this.initStateValue('ui.productCatalog.data.viewProductDetails', null);
subscribe(this.subscribedKeys, this);
void this.loadViewHighlights();
void this.loadBrowseCatalog();
void this.loadSearchProducts();
void this.loadFilterProducts();
void this.loadViewProductDetails();
}

/** lifecycle disconnectedCallback — cleanup subscriptions */
public override disconnectedCallback(): void {
unsubscribe(this.subscribedKeys, this);
super.disconnectedCallback();
}

/** action viewHighlights (query) — route petShop.viewHighlights.viewHighlights; inputs: none; writes ui.productCatalog.data.viewHighlights; status ui.productCatalog.action.viewHighlights.status */
public async loadViewHighlights(): Promise<void> {
this.viewHighlightsState = 'loading';
setState('ui.productCatalog.action.viewHighlights.status', 'loading');
const params: PetShopViewHighlightsInput = {};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<PetShopViewHighlightsOutput>('petShop.viewHighlights.viewHighlights', params, options);
if (response.ok) {
const data = response.data ?? [];
this.viewHighlightsData = data;
setState('ui.productCatalog.data.viewHighlights', data);
this.viewHighlightsState = 'success';
setState('ui.productCatalog.action.viewHighlights.status', 'success');
return;
}
console.error(response.error);
this.viewHighlightsState = 'error';
setState('ui.productCatalog.action.viewHighlights.status', 'error');
}

/** handler for action viewHighlights — bind UI events here */
public handleViewHighlightsClick(event: Event): void {
void event;
void this.loadViewHighlights();
}

/** action browseCatalog (query) — route petShop.browseCatalog.browseCatalog; inputs: ui.productCatalog.input.browseCatalog.searchTerm, ui.productCatalog.input.browseCatalog.petTypeId, ui.productCatalog.input.browseCatalog.categoryId, ui.productCatalog.input.browseCatalog.minPrice, ui.productCatalog.input.browseCatalog.maxPrice; writes ui.productCatalog.data.browseCatalog; status ui.productCatalog.action.browseCatalog.status */
public async loadBrowseCatalog(): Promise<void> {
this.browseCatalogState = 'loading';
setState('ui.productCatalog.action.browseCatalog.status', 'loading');
const params: PetShopBrowseCatalogInput = {
searchTerm: this.normalizeOptionalString(this.browseCatalogSearchTerm),
petTypeId: this.normalizeOptionalString(this.browseCatalogPetTypeId),
categoryId: this.normalizeOptionalString(this.browseCatalogCategoryId),
minPrice: this.normalizeOptionalNumber(this.browseCatalogMinPrice),
maxPrice: this.normalizeOptionalNumber(this.browseCatalogMaxPrice)
};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<PetShopBrowseCatalogOutput>('petShop.browseCatalog.browseCatalog', params, options);
if (response.ok) {
const data = response.data ?? {
products: [],
total: 0,
page: 0,
pageSize: 0
};
this.browseCatalogData = data;
setState('ui.productCatalog.data.browseCatalog', data);
this.browseCatalogState = 'success';
setState('ui.productCatalog.action.browseCatalog.status', 'success');
return;
}
console.error(response.error);
this.browseCatalogState = 'error';
setState('ui.productCatalog.action.browseCatalog.status', 'error');
}

/** handler for action browseCatalog — bind UI events here */
public handleBrowseCatalogClick(event: Event): void {
void event;
void this.loadBrowseCatalog();
}

/** action searchProducts (query) — route petShop.searchProducts.searchProducts; inputs: ui.productCatalog.input.searchProducts.searchTerm, ui.productCatalog.input.searchProducts.petTypeId, ui.productCatalog.input.searchProducts.categoryId, ui.productCatalog.input.searchProducts.minPrice, ui.productCatalog.input.searchProducts.maxPrice; writes ui.productCatalog.data.searchProducts; status ui.productCatalog.action.searchProducts.status */
public async loadSearchProducts(): Promise<void> {
this.searchProductsState = 'loading';
setState('ui.productCatalog.action.searchProducts.status', 'loading');
const params: PetShopSearchProductsInput = {
searchTerm: this.searchProductsSearchTerm,
petTypeId: this.normalizeOptionalString(this.searchProductsPetTypeId),
categoryId: this.normalizeOptionalString(this.searchProductsCategoryId),
minPrice: this.normalizeOptionalNumber(this.searchProductsMinPrice),
maxPrice: this.normalizeOptionalNumber(this.searchProductsMaxPrice)
};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<PetShopSearchProductsOutput>('petShop.searchProducts.searchProducts', params, options);
if (response.ok) {
const data = response.data ?? [];
this.searchProductsData = data;
setState('ui.productCatalog.data.searchProducts', data);
this.searchProductsState = 'success';
setState('ui.productCatalog.action.searchProducts.status', 'success');
return;
}
console.error(response.error);
this.searchProductsState = 'error';
setState('ui.productCatalog.action.searchProducts.status', 'error');
}

/** handler for action searchProducts — bind UI events here */
public handleSearchProductsClick(event: Event): void {
void event;
void this.loadSearchProducts();
}

/** action filterProducts (query) — route petShop.filterProducts.filterProducts; inputs: ui.productCatalog.input.filterProducts.petTypeId, ui.productCatalog.input.filterProducts.categoryId, ui.productCatalog.input.filterProducts.minPrice, ui.productCatalog.input.filterProducts.maxPrice; writes ui.productCatalog.data.filterProducts; status ui.productCatalog.action.filterProducts.status */
public async loadFilterProducts(): Promise<void> {
this.filterProductsState = 'loading';
setState('ui.productCatalog.action.filterProducts.status', 'loading');
const params: PetShopFilterProductsInput = {
petTypeId: this.normalizeOptionalString(this.filterProductsPetTypeId),
categoryId: this.normalizeOptionalString(this.filterProductsCategoryId),
minPrice: this.normalizeOptionalNumber(this.filterProductsMinPrice),
maxPrice: this.normalizeOptionalNumber(this.filterProductsMaxPrice)
};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<PetShopFilterProductsOutput>('petShop.filterProducts.filterProducts', params, options);
if (response.ok) {
const data = response.data ?? [];
this.filterProductsData = data;
setState('ui.productCatalog.data.filterProducts', data);
this.filterProductsState = 'success';
setState('ui.productCatalog.action.filterProducts.status', 'success');
return;
}
console.error(response.error);
this.filterProductsState = 'error';
setState('ui.productCatalog.action.filterProducts.status', 'error');
}

/** handler for action filterProducts — bind UI events here */
public handleFilterProductsClick(event: Event): void {
void event;
void this.loadFilterProducts();
}

/** action viewProductDetails (query) — route petShop.viewProductDetails.viewProductDetails; inputs: ui.productCatalog.input.viewProductDetails.productId; writes ui.productCatalog.data.viewProductDetails; status ui.productCatalog.action.viewProductDetails.status */
public async loadViewProductDetails(): Promise<void> {
const routeParams = this.getRouteParams('/petShop/productCatalog/:productId?', window.location.pathname);
const routeProductId = routeParams.productId;
if (routeProductId !== undefined && routeProductId !== '') {
this.viewProductDetailsProductId = routeProductId;
setState('ui.productCatalog.input.viewProductDetails.productId', routeProductId);
}
if (this.viewProductDetailsProductId === '') {
this.viewProductDetailsState = 'idle';
setState('ui.productCatalog.action.viewProductDetails.status', 'idle');
this.viewProductDetailsData = null;
setState('ui.productCatalog.data.viewProductDetails', null);
return;
}
this.viewProductDetailsState = 'loading';
setState('ui.productCatalog.action.viewProductDetails.status', 'loading');
const params: PetShopViewProductDetailsInput = {
productId: this.viewProductDetailsProductId
};
const options: BffClientOptions = { mode: 'silent' };
const response = await execBff<PetShopViewProductDetailsOutput>('petShop.viewProductDetails.viewProductDetails', params, options);
if (response.ok) {
const data = response.data ?? null;
this.viewProductDetailsData = data;
setState('ui.productCatalog.data.viewProductDetails', data);
this.viewProductDetailsState = 'success';
setState('ui.productCatalog.action.viewProductDetails.status', 'success');
return;
}
console.error(response.error);
this.viewProductDetailsState = 'error';
setState('ui.productCatalog.action.viewProductDetails.status', 'error');
}

/** handler for action viewProductDetails — bind UI events here */
public handleViewProductDetailsClick(event: Event): void {
void event;
void this.loadViewProductDetails();
}

/** setter for state ui.productCatalog.input.browseCatalog.searchTerm */
public setBrowseCatalogSearchTerm(value: string): void {
this.browseCatalogSearchTerm = value;
setState('ui.productCatalog.input.browseCatalog.searchTerm', value);
}

/** handler for action set.browseCatalogSearchTerm — bind UI events here */
public handleBrowseCatalogSearchTermChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setBrowseCatalogSearchTerm(target.value);
}
}

/** setter for state ui.productCatalog.input.browseCatalog.petTypeId */
public setBrowseCatalogPetTypeId(value: string): void {
this.browseCatalogPetTypeId = value;
setState('ui.productCatalog.input.browseCatalog.petTypeId', value);
}

/** handler for action set.browseCatalogPetTypeId — bind UI events here */
public handleBrowseCatalogPetTypeIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setBrowseCatalogPetTypeId(target.value);
}
}

/** setter for state ui.productCatalog.input.browseCatalog.categoryId */
public setBrowseCatalogCategoryId(value: string): void {
this.browseCatalogCategoryId = value;
setState('ui.productCatalog.input.browseCatalog.categoryId', value);
}

/** handler for action set.browseCatalogCategoryId — bind UI events here */
public handleBrowseCatalogCategoryIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setBrowseCatalogCategoryId(target.value);
}
}

/** setter for state ui.productCatalog.input.browseCatalog.minPrice */
public setBrowseCatalogMinPrice(value: number | ''): void {
this.browseCatalogMinPrice = value;
setState('ui.productCatalog.input.browseCatalog.minPrice', value);
}

/** handler for action set.browseCatalogMinPrice — bind UI events here */
public handleBrowseCatalogMinPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
const rawValue = target.value;
const parsedValue = rawValue === '' ? '' : Number(rawValue);
this.setBrowseCatalogMinPrice(parsedValue);
}
}

/** setter for state ui.productCatalog.input.browseCatalog.maxPrice */
public setBrowseCatalogMaxPrice(value: number | ''): void {
this.browseCatalogMaxPrice = value;
setState('ui.productCatalog.input.browseCatalog.maxPrice', value);
}

/** handler for action set.browseCatalogMaxPrice — bind UI events here */
public handleBrowseCatalogMaxPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
const rawValue = target.value;
const parsedValue = rawValue === '' ? '' : Number(rawValue);
this.setBrowseCatalogMaxPrice(parsedValue);
}
}

/** setter for state ui.productCatalog.input.searchProducts.searchTerm */
public setSearchProductsSearchTerm(value: string): void {
this.searchProductsSearchTerm = value;
setState('ui.productCatalog.input.searchProducts.searchTerm', value);
}

/** handler for action set.searchProductsSearchTerm — bind UI events here */
public handleSearchProductsSearchTermChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setSearchProductsSearchTerm(target.value);
}
}

/** setter for state ui.productCatalog.input.searchProducts.petTypeId */
public setSearchProductsPetTypeId(value: string): void {
this.searchProductsPetTypeId = value;
setState('ui.productCatalog.input.searchProducts.petTypeId', value);
}

/** handler for action set.searchProductsPetTypeId — bind UI events here */
public handleSearchProductsPetTypeIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setSearchProductsPetTypeId(target.value);
}
}

/** setter for state ui.productCatalog.input.searchProducts.categoryId */
public setSearchProductsCategoryId(value: string): void {
this.searchProductsCategoryId = value;
setState('ui.productCatalog.input.searchProducts.categoryId', value);
}

/** handler for action set.searchProductsCategoryId — bind UI events here */
public handleSearchProductsCategoryIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setSearchProductsCategoryId(target.value);
}
}

/** setter for state ui.productCatalog.input.searchProducts.minPrice */
public setSearchProductsMinPrice(value: number | ''): void {
this.searchProductsMinPrice = value;
setState('ui.productCatalog.input.searchProducts.minPrice', value);
}

/** handler for action set.searchProductsMinPrice — bind UI events here */
public handleSearchProductsMinPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
const rawValue = target.value;
const parsedValue = rawValue === '' ? '' : Number(rawValue);
this.setSearchProductsMinPrice(parsedValue);
}
}

/** setter for state ui.productCatalog.input.searchProducts.maxPrice */
public setSearchProductsMaxPrice(value: number | ''): void {
this.searchProductsMaxPrice = value;
setState('ui.productCatalog.input.searchProducts.maxPrice', value);
}

/** handler for action set.searchProductsMaxPrice — bind UI events here */
public handleSearchProductsMaxPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
const rawValue = target.value;
const parsedValue = rawValue === '' ? '' : Number(rawValue);
this.setSearchProductsMaxPrice(parsedValue);
}
}

/** setter for state ui.productCatalog.input.filterProducts.petTypeId */
public setFilterProductsPetTypeId(value: string): void {
this.filterProductsPetTypeId = value;
setState('ui.productCatalog.input.filterProducts.petTypeId', value);
}

/** handler for action set.filterProductsPetTypeId — bind UI events here */
public handleFilterProductsPetTypeIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setFilterProductsPetTypeId(target.value);
}
}

/** setter for state ui.productCatalog.input.filterProducts.categoryId */
public setFilterProductsCategoryId(value: string): void {
this.filterProductsCategoryId = value;
setState('ui.productCatalog.input.filterProducts.categoryId', value);
}

/** handler for action set.filterProductsCategoryId — bind UI events here */
public handleFilterProductsCategoryIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setFilterProductsCategoryId(target.value);
}
}

/** setter for state ui.productCatalog.input.filterProducts.minPrice */
public setFilterProductsMinPrice(value: number | ''): void {
this.filterProductsMinPrice = value;
setState('ui.productCatalog.input.filterProducts.minPrice', value);
}

/** handler for action set.filterProductsMinPrice — bind UI events here */
public handleFilterProductsMinPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
const rawValue = target.value;
const parsedValue = rawValue === '' ? '' : Number(rawValue);
this.setFilterProductsMinPrice(parsedValue);
}
}

/** setter for state ui.productCatalog.input.filterProducts.maxPrice */
public setFilterProductsMaxPrice(value: number | ''): void {
this.filterProductsMaxPrice = value;
setState('ui.productCatalog.input.filterProducts.maxPrice', value);
}

/** handler for action set.filterProductsMaxPrice — bind UI events here */
public handleFilterProductsMaxPriceChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
const rawValue = target.value;
const parsedValue = rawValue === '' ? '' : Number(rawValue);
this.setFilterProductsMaxPrice(parsedValue);
}
}

/** setter for state ui.productCatalog.input.viewProductDetails.productId */
public setViewProductDetailsProductId(value: string): void {
this.viewProductDetailsProductId = value;
setState('ui.productCatalog.input.viewProductDetails.productId', value);
}

/** handler for action set.viewProductDetailsProductId — bind UI events here */
public handleViewProductDetailsProductIdChange(event: Event): void {
const target = event.target as HTMLInputElement | HTMLSelectElement | null;
if (target) {
this.setViewProductDetailsProductId(target.value);
}
}

private initStateValue<T>(key: string, defaultValue: T): T {
const stored = getState(key) as T | undefined;
const value = stored ?? defaultValue;
if (stored === undefined) {
setState(key, value);
}
return value;
}

private normalizeOptionalString(value: string): string | undefined {
return value === '' ? undefined : value;
}

private normalizeOptionalNumber(value: number | ''): number | undefined {
return value === '' ? undefined : Number(value);
}

private getRouteParams(pattern: string, path: string): Record<string, string | undefined> {
const params: Record<string, string | undefined> = {};
const patternParts = pattern.split('/').filter(Boolean);
const pathParts = path.split('/').filter(Boolean);
let pathIndex = 0;
for (const part of patternParts) {
if (part.startsWith(':')) {
const isOptional = part.endsWith('?');
const key = part.slice(1, isOptional ? -1 : undefined);
const value = pathParts[pathIndex];
if (value === undefined) {
if (!isOptional) {
params[key] = undefined;
}
} else {
params[key] = decodeURIComponent(value);
pathIndex += 1;
}
} else if (part === pathParts[pathIndex]) {
pathIndex += 1;
}
}
return params;
}
}
