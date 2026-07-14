/// <mls fileReference="_102049_/l2/petShop/web/shared/productManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';
import type {
  PetShopBrowseProductsInput,
  PetShopBrowseProductsOutput,
  PetShopBrowseProductsOutputItem,
  PetShopCreateProductInput,
  PetShopCreateProductOutput,
  PetShopUpdateProductInput,
  PetShopUpdateProductOutput,
} from '/_102049_/l2/petShop/web/contracts/productManagement.js';

/// **collab_i18n_start**
const message_pt = {
  "page.title": "Gestão de produtos",
  "section.productManagement": "Gestão de produtos",
  "section.review": "Resumo",
  "organism.browseProducts.title": "Produtos cadastrados",
  "organism.createProduct.title": "Cadastrar novo produto",
  "organism.updateProduct.title": "Editar produto",
  "organism.review.title": "Resumo da gestão",
  "empty.browseProducts": "Nenhum produto encontrado. Ajuste os filtros ou cadastre um novo produto.",
  "empty.createProduct": "Preencha os dados do produto para cadastrá-lo no catálogo.",
  "empty.updateProduct": "Selecione um produto na lista para editar seus dados.",
  "empty.review": "Nenhuma ação realizada ainda. Gerencie produtos acima para ver o resumo aqui.",
  "column.name": "Nome",
  "column.price": "Preço",
  "column.productCategoryId": "Categoria",
  "column.featured": "Destaque",
  "column.status": "Status",
  "filter.searchName": "Buscar por nome",
  "filter.filterStatus": "Status",
  "filter.filterProductCategoryId": "Categoria",
  "filter.filterFeatured": "Apenas destaques",
  "field.name": "Nome",
  "field.description": "Descrição",
  "field.price": "Preço",
  "field.imageUrl": "URL da imagem",
  "field.productCategoryId": "Categoria",
  "field.featured": "Destaque na página inicial",
  "field.status": "Status",
  "field.productId": "Produto",
  "action.createProduct": "Cadastrar produto",
  "action.createProduct.submit": "Salvar produto",
  "action.updateProduct": "Editar",
  "action.updateProduct.submit": "Salvar alterações",
  "action.createProduct.success": "Produto cadastrado com sucesso no catálogo.",
  "action.createProduct.error": "Não foi possível cadastrar o produto. Verifique os dados e tente novamente.",
  "action.updateProduct.success": "Produto atualizado com sucesso no catálogo.",
  "action.updateProduct.error": "Não foi possível atualizar o produto. Verifique os dados e tente novamente.",
  "org.browseProducts.title": "Listar produtos cadastrados com filtros e seleção para edição",
  "org.createProduct.title": "Cadastrar novo produto no catálogo",
  "org.updateProduct.title": "Editar produto existente e definir destaque",
  "org.review.title": "Revisar o contexto e o resultado das ações principais da página"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopProductManagementBase extends CollabLitElement {
  @property({ type: String }) status: string = '';

  @property({ type: String }) browseProductsState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) browseProductsSearchName: string = '';
  @property({ type: String }) browseProductsFilterStatus: string = '';
  @property({ type: String }) browseProductsFilterProductCategoryId: string = '';
  @property({ type: String }) browseProductsFilterFeatured: string = '';
  @property({ type: Object }) browseProductsData: PetShopBrowseProductsOutput = { items: [], total: 0 };

  @property({ type: String }) createProductState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) createProductName: string = '';
  @property({ type: String }) createProductDescription: string = '';
  @property({ type: String }) createProductPrice: string = '';
  @property({ type: String }) createProductImageUrl: string = '';
  @property({ type: String }) createProductProductCategoryId: string = '';
  @property({ type: String }) createProductFeatured: string = '';
  @property({ type: Object }) createProductOutput: PetShopCreateProductOutput | null = null;
  @property({ type: String }) createProductError: string = '';

  @property({ type: String }) updateProductState: "idle" | "loading" | "success" | "error" = "idle";
  @property({ type: String }) updateProductProductId: string = '';
  @property({ type: String }) updateProductName: string = '';
  @property({ type: String }) updateProductDescription: string = '';
  @property({ type: String }) updateProductPrice: string = '';
  @property({ type: String }) updateProductImageUrl: string = '';
  @property({ type: String }) updateProductProductCategoryId: string = '';
  @property({ type: String }) updateProductFeatured: string = '';
  @property({ type: String }) updateProductStatus: string = '';
  @property({ type: Object }) updateProductOutput: PetShopUpdateProductOutput | null = null;
  @property({ type: String }) updateProductError: string = '';

  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  // ---- State setters: browseProducts filters ----

  setBrowseProductsSearchName(value: string): void {
    this.browseProductsSearchName = value;
    setState('ui.productManagement.input.browseProducts.searchName', value);
    this.requestUpdate();
  }

  handleBrowseProductsSearchNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setBrowseProductsSearchName(target.value);
  }

  setBrowseProductsFilterStatus(value: string): void {
    this.browseProductsFilterStatus = value;
    setState('ui.productManagement.input.browseProducts.filterStatus', value);
    this.requestUpdate();
  }

  handleBrowseProductsFilterStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setBrowseProductsFilterStatus(target.value);
  }

  setBrowseProductsFilterProductCategoryId(value: string): void {
    this.browseProductsFilterProductCategoryId = value;
    setState('ui.productManagement.input.browseProducts.filterProductCategoryId', value);
    this.requestUpdate();
  }

  handleBrowseProductsFilterProductCategoryIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setBrowseProductsFilterProductCategoryId(target.value);
  }

  setBrowseProductsFilterFeatured(value: string): void {
    this.browseProductsFilterFeatured = value;
    setState('ui.productManagement.input.browseProducts.filterFeatured', value);
    this.requestUpdate();
  }

  handleBrowseProductsFilterFeaturedChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setBrowseProductsFilterFeatured(target.value);
  }

  // ---- State setters: createProduct form ----

  setCreateProductName(value: string): void {
    this.createProductName = value;
    setState('ui.productManagement.input.createProduct.name', value);
    this.requestUpdate();
  }

  handleCreateProductNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateProductName(target.value);
  }

  setCreateProductDescription(value: string): void {
    this.createProductDescription = value;
    setState('ui.productManagement.input.createProduct.description', value);
    this.requestUpdate();
  }

  handleCreateProductDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCreateProductDescription(target.value);
  }

  setCreateProductPrice(value: string): void {
    this.createProductPrice = value;
    setState('ui.productManagement.input.createProduct.price', value);
    this.requestUpdate();
  }

  handleCreateProductPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateProductPrice(target.value);
  }

  setCreateProductImageUrl(value: string): void {
    this.createProductImageUrl = value;
    setState('ui.productManagement.input.createProduct.imageUrl', value);
    this.requestUpdate();
  }

  handleCreateProductImageUrlChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateProductImageUrl(target.value);
  }

  setCreateProductProductCategoryId(value: string): void {
    this.createProductProductCategoryId = value;
    setState('ui.productManagement.input.createProduct.productCategoryId', value);
    this.requestUpdate();
  }

  handleCreateProductProductCategoryIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCreateProductProductCategoryId(target.value);
  }

  setCreateProductFeatured(value: string): void {
    this.createProductFeatured = value;
    setState('ui.productManagement.input.createProduct.featured', value);
    this.requestUpdate();
  }

  handleCreateProductFeaturedChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCreateProductFeatured(target.value);
  }

  // ---- State setters: updateProduct form ----

  setUpdateProductProductId(value: string): void {
    this.updateProductProductId = value;
    setState('ui.productManagement.input.updateProduct.productId', value);
    this.requestUpdate();
  }

  handleUpdateProductProductIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateProductProductId(target.value);
  }

  setUpdateProductName(value: string): void {
    this.updateProductName = value;
    setState('ui.productManagement.input.updateProduct.name', value);
    this.requestUpdate();
  }

  handleUpdateProductNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateProductName(target.value);
  }

  setUpdateProductDescription(value: string): void {
    this.updateProductDescription = value;
    setState('ui.productManagement.input.updateProduct.description', value);
    this.requestUpdate();
  }

  handleUpdateProductDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setUpdateProductDescription(target.value);
  }

  setUpdateProductPrice(value: string): void {
    this.updateProductPrice = value;
    setState('ui.productManagement.input.updateProduct.price', value);
    this.requestUpdate();
  }

  handleUpdateProductPriceChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateProductPrice(target.value);
  }

  setUpdateProductImageUrl(value: string): void {
    this.updateProductImageUrl = value;
    setState('ui.productManagement.input.updateProduct.imageUrl', value);
    this.requestUpdate();
  }

  handleUpdateProductImageUrlChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateProductImageUrl(target.value);
  }

  setUpdateProductProductCategoryId(value: string): void {
    this.updateProductProductCategoryId = value;
    setState('ui.productManagement.input.updateProduct.productCategoryId', value);
    this.requestUpdate();
  }

  handleUpdateProductProductCategoryIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateProductProductCategoryId(target.value);
  }

  setUpdateProductFeatured(value: string): void {
    this.updateProductFeatured = value;
    setState('ui.productManagement.input.updateProduct.featured', value);
    this.requestUpdate();
  }

  handleUpdateProductFeaturedChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateProductFeatured(target.value);
  }

  setUpdateProductStatus(value: string): void {
    this.updateProductStatus = value;
    setState('ui.productManagement.input.updateProduct.status', value);
    this.requestUpdate();
  }

  handleUpdateProductStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setUpdateProductStatus(target.value);
  }

  // ---- Query action: browseProducts ----

  async loadBrowseProducts(): Promise<void> {
    this.browseProductsState = 'loading';
    setState('ui.productManagement.action.browseProducts.status', 'loading');
    this.requestUpdate();

    const params: PetShopBrowseProductsInput = {};
    if (this.browseProductsSearchName) {
      params.searchName = this.browseProductsSearchName;
    }
    if (this.browseProductsFilterStatus === 'active' || this.browseProductsFilterStatus === 'inactive') {
      params.filterStatus = this.browseProductsFilterStatus;
    }
    if (this.browseProductsFilterProductCategoryId) {
      params.filterProductCategoryId = this.browseProductsFilterProductCategoryId;
    }
    if (this.browseProductsFilterFeatured === 'true' || this.browseProductsFilterFeatured === 'false') {
      params.filterFeatured = this.browseProductsFilterFeatured === 'true';
    }

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopBrowseProductsOutput>(
      'petShop.browseProducts.browseProducts',
      params,
      options,
    );

    if (response.ok) {
      const data: PetShopBrowseProductsOutput = response.data ?? { items: [], total: 0 };
      this.browseProductsData = data;
      setState('ui.productManagement.data.browseProducts', data);
      this.browseProductsState = 'success';
      setState('ui.productManagement.action.browseProducts.status', 'success');
    } else {
      this.browseProductsData = { items: [], total: 0 };
      setState('ui.productManagement.data.browseProducts', { items: [], total: 0 });
      this.browseProductsState = 'error';
      setState('ui.productManagement.action.browseProducts.status', 'error');
      if (response.error) {
        console.error('browseProducts error:', response.error.message);
      }
    }
    this.requestUpdate();
  }

  handleBrowseProductsClick(e: Event): void {
    e.preventDefault();
    this.loadBrowseProducts();
  }

  // ---- Command action: createProduct ----

  async createProduct(): Promise<void> {
    this.createProductState = 'loading';
    setState('ui.productManagement.action.createProduct.status', 'loading');
    this.createProductError = '';
    setState('ui.productManagement.action.createProduct.error', '');
    this.requestUpdate();

    const priceNum = parseFloat(this.createProductPrice);
    const featuredBool = this.createProductFeatured === 'true' || this.createProductFeatured === 'true';

    const params: PetShopCreateProductInput = {
      name: this.createProductName,
      price: isNaN(priceNum) ? 0 : priceNum,
      productCategoryId: this.createProductProductCategoryId,
      featured: featuredBool,
    };
    if (this.createProductDescription) {
      params.description = this.createProductDescription;
    }
    if (this.createProductImageUrl) {
      params.imageUrl = this.createProductImageUrl;
    }

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopCreateProductOutput>(
      'petShop.createProduct.createProduct',
      params,
      options,
    );

    if (response.ok) {
      const data: PetShopCreateProductOutput | null = response.data ?? null;
      this.createProductOutput = data;
      setState('ui.productManagement.output.createProduct', data);

      // Refresh browseProducts before setting success
      await this.loadBrowseProducts();
      if (this.browseProductsState === 'error') {
        this.createProductState = 'error';
        setState('ui.productManagement.action.createProduct.status', 'error');
        this.requestUpdate();
        return;
      }

      // Clear form inputs
      this.createProductName = '';
      setState('ui.productManagement.input.createProduct.name', '');
      this.createProductDescription = '';
      setState('ui.productManagement.input.createProduct.description', '');
      this.createProductPrice = '';
      setState('ui.productManagement.input.createProduct.price', '');
      this.createProductImageUrl = '';
      setState('ui.productManagement.input.createProduct.imageUrl', '');
      this.createProductProductCategoryId = '';
      setState('ui.productManagement.input.createProduct.productCategoryId', '');
      this.createProductFeatured = '';
      setState('ui.productManagement.input.createProduct.featured', '');

      this.createProductState = 'success';
      setState('ui.productManagement.action.createProduct.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.createProduct.error'];
      this.createProductError = errorMsg;
      setState('ui.productManagement.action.createProduct.error', errorMsg);
      this.createProductState = 'error';
      setState('ui.productManagement.action.createProduct.status', 'error');
    }
    this.requestUpdate();
  }

  handleCreateProductClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createProduct();
    }, { mode: 'blocking' });
  }

  // ---- Command action: updateProduct ----

  async updateProduct(): Promise<void> {
    if (!this.updateProductProductId) {
      this.updateProductState = 'idle';
      setState('ui.productManagement.action.updateProduct.status', 'idle');
      this.requestUpdate();
      return;
    }

    this.updateProductState = 'loading';
    setState('ui.productManagement.action.updateProduct.status', 'loading');
    this.updateProductError = '';
    setState('ui.productManagement.action.updateProduct.error', '');
    this.requestUpdate();

    const priceNum = parseFloat(this.updateProductPrice);
    const featuredBool = this.updateProductFeatured === 'true';
    const statusVal: "active" | "inactive" =
      this.updateProductStatus === 'inactive' ? 'inactive' : 'active';

    const params: PetShopUpdateProductInput = {
      productId: this.updateProductProductId,
      name: this.updateProductName,
      price: isNaN(priceNum) ? 0 : priceNum,
      productCategoryId: this.updateProductProductCategoryId,
      featured: featuredBool,
      status: statusVal,
    };
    if (this.updateProductDescription) {
      params.description = this.updateProductDescription;
    }
    if (this.updateProductImageUrl) {
      params.imageUrl = this.updateProductImageUrl;
    }

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<PetShopUpdateProductOutput>(
      'petShop.updateProduct.updateProduct',
      params,
      options,
    );

    if (response.ok) {
      const data: PetShopUpdateProductOutput | null = response.data ?? null;
      this.updateProductOutput = data;
      setState('ui.productManagement.output.updateProduct', data);

      // Refresh browseProducts before setting success
      await this.loadBrowseProducts();
      if (this.browseProductsState === 'error') {
        this.updateProductState = 'error';
        setState('ui.productManagement.action.updateProduct.status', 'error');
        this.requestUpdate();
        return;
      }

      // Clear form inputs
      this.updateProductProductId = '';
      setState('ui.productManagement.input.updateProduct.productId', '');
      this.updateProductName = '';
      setState('ui.productManagement.input.updateProduct.name', '');
      this.updateProductDescription = '';
      setState('ui.productManagement.input.updateProduct.description', '');
      this.updateProductPrice = '';
      setState('ui.productManagement.input.updateProduct.price', '');
      this.updateProductImageUrl = '';
      setState('ui.productManagement.input.updateProduct.imageUrl', '');
      this.updateProductProductCategoryId = '';
      setState('ui.productManagement.input.updateProduct.productCategoryId', '');
      this.updateProductFeatured = '';
      setState('ui.productManagement.input.updateProduct.featured', '');
      this.updateProductStatus = '';
      setState('ui.productManagement.input.updateProduct.status', '');

      this.updateProductState = 'success';
      setState('ui.productManagement.action.updateProduct.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? this.msg['action.updateProduct.error'];
      this.updateProductError = errorMsg;
      setState('ui.productManagement.action.updateProduct.error', errorMsg);
      this.updateProductState = 'error';
      setState('ui.productManagement.action.updateProduct.status', 'error');
    }
    this.requestUpdate();
  }

  handleUpdateProductClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateProduct();
    }, { mode: 'blocking' });
  }

  // ---- Lifecycle ----

  connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from global store where useful
    const savedSearchName = getState('ui.productManagement.input.browseProducts.searchName');
    if (savedSearchName !== undefined && savedSearchName !== null) {
      this.browseProductsSearchName = savedSearchName as string;
    }
    const savedFilterStatus = getState('ui.productManagement.input.browseProducts.filterStatus');
    if (savedFilterStatus !== undefined && savedFilterStatus !== null) {
      this.browseProductsFilterStatus = savedFilterStatus as string;
    }
    const savedFilterCategory = getState('ui.productManagement.input.browseProducts.filterProductCategoryId');
    if (savedFilterCategory !== undefined && savedFilterCategory !== null) {
      this.browseProductsFilterProductCategoryId = savedFilterCategory as string;
    }
    const savedFilterFeatured = getState('ui.productManagement.input.browseProducts.filterFeatured');
    if (savedFilterFeatured !== undefined && savedFilterFeatured !== null) {
      this.browseProductsFilterFeatured = savedFilterFeatured as string;
    }

    // Run initial loads
    this.loadBrowseProducts();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
