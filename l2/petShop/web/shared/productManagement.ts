/// <mls fileReference="_102049_/l2/petShop/web/shared/productManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  PetShopBrowseProductsInput,
  PetShopBrowseProductsOutput,
  PetShopBrowseProductsOutputItem,
  PetShopCreateProductInput,
  PetShopCreateProductOutput,
  PetShopUpdateProductInput,
  PetShopUpdateProductOutput,
  PetShopSetProductHighlightsInput,
  PetShopSetProductHighlightsOutput
} from '/_102049_/l2/petShop/web/contracts/productManagement.js';
export type {
  PetShopBrowseProductsInput,
  PetShopBrowseProductsOutputItem,
  PetShopBrowseProductsOutput,
  PetShopCreateProductInput,
  PetShopCreateProductOutput,
  PetShopUpdateProductInput,
  PetShopUpdateProductOutput,
  PetShopSetProductHighlightsInput,
  PetShopSetProductHighlightsProduct,
  PetShopSetProductHighlightsOutput
} from '/_102049_/l2/petShop/web/contracts/productManagement.js';

/// **collab_i18n_start**
const message_pt = {
  "page.productManagement.title": "Gestão de Produtos",
  "section.productList.title": "Catálogo de Produtos",
  "section.createProduct.title": "Cadastrar Produto",
  "section.updateProduct.title": "Editar Produto",
  "section.setHighlights.title": "Definir Produtos em Destaque",
  "field.searchTerm.label": "Buscar",
  "field.petTypeId.label": "Tipo de Pet",
  "field.categoryId.label": "Categoria",
  "field.priceMin.label": "Preço Mínimo",
  "field.priceMax.label": "Preço Máximo",
  "field.status.label": "Status",
  "field.highlighted.label": "Destaque",
  "field.name.label": "Nome",
  "field.description.label": "Descrição",
  "field.price.label": "Preço",
  "field.productId.label": "ID do Produto",
  "field.productIds.label": "Produtos",
  "column.name.label": "Nome",
  "column.price.label": "Preço",
  "column.petTypeName.label": "Tipo de Pet",
  "column.categoryName.label": "Categoria",
  "column.highlighted.label": "Destaque",
  "column.status.label": "Status",
  "action.browseProducts.label": "Buscar",
  "action.createProduct.label": "Cadastrar Produto",
  "action.updateProduct.label": "Editar",
  "action.setProductHighlights.label": "Definir Destaque",
  "empty.productList": "Nenhum produto encontrado. Ajuste os filtros ou cadastre um novo produto.",
  "action.createProduct.success": "Produto cadastrado com sucesso",
  "action.createProduct.error": "Erro ao cadastrar produto",
  "action.updateProduct.success": "Produto atualizado com sucesso",
  "action.updateProduct.error": "Erro ao atualizar produto",
  "action.setProductHighlights.success": "Destaque atualizado com sucesso",
  "action.setProductHighlights.error": "Erro ao atualizar destaque",
  "section.product.list.title": "Section product list",
  "org.product.table.title": "Listar, buscar e filtrar produtos do catálogo com ações de criação, edição e destaque",
  "section.create.product.title": "Section create product",
  "org.create.form.title": "Cadastrar novo produto no catálogo com nome, descrição, preço, tipo de pet, categoria, destaque e status",
  "section.update.product.title": "Section update product",
  "org.update.form.title": "Editar produto existente selecionado na lista, com preenchimento automático dos campos",
  "section.set.highlights.title": "Section set highlights",
  "org.highlights.form.title": "Marcar ou desmarcar produtos como destaque, verificando que apenas produtos disponíveis podem ser destacados",
  "section.catalog.title": "Catálogo de Produtos",
  "section.detail.title": "Detalhes do Produto",
  "organism.productList.title": "Produtos",
  "organism.updateProductForm.title": "Editar Produto",
  "organism.createProductForm.title": "Cadastrar Produto",
  "organism.setHighlightsForm.title": "Destaque em Massa",
  "intent.productList.title": "Lista de Produtos",
  "intent.updateProduct.title": "Editar Produto Selecionado",
  "intent.createProduct.title": "Novo Produto",
  "intent.setHighlights.title": "Definir Destaque",
  "field.product.name": "Nome",
  "field.product.description": "Descrição",
  "field.product.price": "Preço",
  "field.product.petTypeId": "Tipo de Pet",
  "field.product.petTypeName": "Tipo de Pet",
  "field.product.categoryId": "Categoria",
  "field.product.categoryName": "Categoria",
  "field.product.highlighted": "Destaque",
  "field.product.status": "Disponibilidade",
  "field.product.searchTerm": "Buscar por nome",
  "field.product.priceMin": "Preço mín.",
  "field.product.priceMax": "Preço máx.",
  "field.product.productIds": "Produtos",
  "action.browseProducts": "Buscar",
  "action.selectForEdit": "Editar",
  "action.updateProduct": "Salvar alterações",
  "action.createProduct": "Cadastrar produto",
  "action.setProductHighlights": "Aplicar destaque"
};
type MessageType = typeof message_pt;
const messages: { [key: string]: MessageType } = { pt: message_pt };
/// **collab_i18n_end**

export class PetShopProductManagementBase extends CollabLitElement {
  private readonly stateDefaults: Record<string, unknown> = {
    'ui.productManagement.status': '',
    'ui.productManagement.action.browseProducts.status': 'idle',
    'ui.productManagement.input.browseProducts.searchTerm': '',
    'ui.productManagement.input.browseProducts.petTypeId': '',
    'ui.productManagement.input.browseProducts.categoryId': '',
    'ui.productManagement.input.browseProducts.priceMin': '',
    'ui.productManagement.input.browseProducts.priceMax': '',
    'ui.productManagement.input.browseProducts.status': '',
    'ui.productManagement.input.browseProducts.highlighted': '',
    'ui.productManagement.data.browseProducts': [],
    'ui.productManagement.action.createProduct.status': 'idle',
    'ui.productManagement.input.createProduct.name': '',
    'ui.productManagement.input.createProduct.description': '',
    'ui.productManagement.input.createProduct.price': '',
    'ui.productManagement.input.createProduct.petTypeId': '',
    'ui.productManagement.input.createProduct.categoryId': '',
    'ui.productManagement.input.createProduct.highlighted': '',
    'ui.productManagement.input.createProduct.status': '',
    'ui.productManagement.output.createProduct': null,
    'ui.productManagement.action.createProduct.error': '',
    'ui.productManagement.action.updateProduct.status': 'idle',
    'ui.productManagement.input.updateProduct.productId': '',
    'ui.productManagement.input.updateProduct.name': '',
    'ui.productManagement.input.updateProduct.description': '',
    'ui.productManagement.input.updateProduct.price': '',
    'ui.productManagement.input.updateProduct.petTypeId': '',
    'ui.productManagement.input.updateProduct.categoryId': '',
    'ui.productManagement.input.updateProduct.highlighted': '',
    'ui.productManagement.input.updateProduct.status': '',
    'ui.productManagement.output.updateProduct': null,
    'ui.productManagement.action.updateProduct.error': '',
    'ui.productManagement.action.setProductHighlights.status': 'idle',
    'ui.productManagement.input.setProductHighlights.productIds': '',
    'ui.productManagement.input.setProductHighlights.highlighted': '',
    'ui.productManagement.output.setProductHighlights': null,
    'ui.productManagement.action.setProductHighlights.error': ''
  };

  private readonly subscribedKeys: string[] = [
    'ui.productManagement.status',
    'ui.productManagement.action.browseProducts.status',
    'ui.productManagement.input.browseProducts.searchTerm',
    'ui.productManagement.input.browseProducts.petTypeId',
    'ui.productManagement.input.browseProducts.categoryId',
    'ui.productManagement.input.browseProducts.priceMin',
    'ui.productManagement.input.browseProducts.priceMax',
    'ui.productManagement.input.browseProducts.status',
    'ui.productManagement.input.browseProducts.highlighted',
    'ui.productManagement.data.browseProducts',
    'ui.productManagement.action.createProduct.status',
    'ui.productManagement.input.createProduct.name',
    'ui.productManagement.input.createProduct.description',
    'ui.productManagement.input.createProduct.price',
    'ui.productManagement.input.createProduct.petTypeId',
    'ui.productManagement.input.createProduct.categoryId',
    'ui.productManagement.input.createProduct.highlighted',
    'ui.productManagement.input.createProduct.status',
    'ui.productManagement.output.createProduct',
    'ui.productManagement.action.createProduct.error',
    'ui.productManagement.action.updateProduct.status',
    'ui.productManagement.input.updateProduct.productId',
    'ui.productManagement.input.updateProduct.name',
    'ui.productManagement.input.updateProduct.description',
    'ui.productManagement.input.updateProduct.price',
    'ui.productManagement.input.updateProduct.petTypeId',
    'ui.productManagement.input.updateProduct.categoryId',
    'ui.productManagement.input.updateProduct.highlighted',
    'ui.productManagement.input.updateProduct.status',
    'ui.productManagement.output.updateProduct',
    'ui.productManagement.action.updateProduct.error',
    'ui.productManagement.action.setProductHighlights.status',
    'ui.productManagement.input.setProductHighlights.productIds',
    'ui.productManagement.input.setProductHighlights.highlighted',
    'ui.productManagement.output.setProductHighlights',
    'ui.productManagement.action.setProductHighlights.error'
  ];

  /** state ui.productManagement.status — pageStatus */
  @property()
  status: string = '';

  /** state ui.productManagement.action.browseProducts.status — actionStatus, values: idle | loading | success | error */
  @property()
  browseProductsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.productManagement.input.browseProducts.searchTerm — input */
  @property()
  browseProductsSearchTerm: string = '';

  /** state ui.productManagement.input.browseProducts.petTypeId — input */
  @property()
  browseProductsPetTypeId: string = '';

  /** state ui.productManagement.input.browseProducts.categoryId — input */
  @property()
  browseProductsCategoryId: string = '';

  /** state ui.productManagement.input.browseProducts.priceMin — input */
  @property()
  browseProductsPriceMin: number | '' = '';

  /** state ui.productManagement.input.browseProducts.priceMax — input */
  @property()
  browseProductsPriceMax: number | '' = '';

  /** state ui.productManagement.input.browseProducts.status — input, values: available | unavailable */
  @property()
  browseProductsStatus: 'available' | 'unavailable' | '' = '';

  /** state ui.productManagement.input.browseProducts.highlighted — input */
  @property()
  browseProductsHighlighted: boolean | '' = '';

  /** state ui.productManagement.data.browseProducts — queryResult, outputShape: array */
  @property()
  browseProductsData: PetShopBrowseProductsOutput = [];

  /** state ui.productManagement.action.createProduct.status — actionStatus, values: idle | loading | success | error */
  @property()
  createProductState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.productManagement.input.createProduct.name — input */
  @property()
  createProductName: string = '';

  /** state ui.productManagement.input.createProduct.description — input */
  @property()
  createProductDescription: string = '';

  /** state ui.productManagement.input.createProduct.price — input */
  @property()
  createProductPrice: number | '' = '';

  /** state ui.productManagement.input.createProduct.petTypeId — input */
  @property()
  createProductPetTypeId: string = '';

  /** state ui.productManagement.input.createProduct.categoryId — input */
  @property()
  createProductCategoryId: string = '';

  /** state ui.productManagement.input.createProduct.highlighted — input */
  @property()
  createProductHighlighted: boolean | '' = '';

  /** state ui.productManagement.input.createProduct.status — input, values: available | unavailable */
  @property()
  createProductStatus: 'available' | 'unavailable' | '' = '';

  /** state ui.productManagement.output.createProduct — commandOutput */
  @property()
  createProductOutput: PetShopCreateProductOutput | null = null;

  /** state ui.productManagement.action.createProduct.error — actionError */
  @property()
  createProductError: string = '';

  /** state ui.productManagement.action.updateProduct.status — actionStatus, values: idle | loading | success | error */
  @property()
  updateProductState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.productManagement.input.updateProduct.productId — input */
  @property()
  updateProductProductId: string = '';

  /** state ui.productManagement.input.updateProduct.name — input */
  @property()
  updateProductName: string = '';

  /** state ui.productManagement.input.updateProduct.description — input */
  @property()
  updateProductDescription: string = '';

  /** state ui.productManagement.input.updateProduct.price — input */
  @property()
  updateProductPrice: number | '' = '';

  /** state ui.productManagement.input.updateProduct.petTypeId — input */
  @property()
  updateProductPetTypeId: string = '';

  /** state ui.productManagement.input.updateProduct.categoryId — input */
  @property()
  updateProductCategoryId: string = '';

  /** state ui.productManagement.input.updateProduct.highlighted — input */
  @property()
  updateProductHighlighted: boolean | '' = '';

  /** state ui.productManagement.input.updateProduct.status — input, values: available | unavailable */
  @property()
  updateProductStatus: 'available' | 'unavailable' | '' = '';

  /** state ui.productManagement.output.updateProduct — commandOutput */
  @property()
  updateProductOutput: PetShopUpdateProductOutput | null = null;

  /** state ui.productManagement.action.updateProduct.error — actionError */
  @property()
  updateProductError: string = '';

  /** state ui.productManagement.action.setProductHighlights.status — actionStatus, values: idle | loading | success | error */
  @property()
  setProductHighlightsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.productManagement.input.setProductHighlights.productIds — input */
  @property()
  setProductHighlightsProductIds: string[] | '' = '';

  /** state ui.productManagement.input.setProductHighlights.highlighted — input */
  @property()
  setProductHighlightsHighlighted: boolean | '' = '';

  /** state ui.productManagement.output.setProductHighlights — commandOutput */
  @property()
  setProductHighlightsOutput: PetShopSetProductHighlightsOutput | null = null;

  /** state ui.productManagement.action.setProductHighlights.error — actionError */
  @property()
  setProductHighlightsError: string = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_pt;
  }

  public override connectedCallback(): void {
    super.connectedCallback();
    this.status = this.getStateValue<string>('ui.productManagement.status', '');
    this.browseProductsState = this.getStateValue<'idle' | 'loading' | 'success' | 'error'>(
      'ui.productManagement.action.browseProducts.status',
      'idle'
    );
    this.browseProductsSearchTerm = this.getStateValue<string>(
      'ui.productManagement.input.browseProducts.searchTerm',
      ''
    );
    this.browseProductsPetTypeId = this.getStateValue<string>(
      'ui.productManagement.input.browseProducts.petTypeId',
      ''
    );
    this.browseProductsCategoryId = this.getStateValue<string>(
      'ui.productManagement.input.browseProducts.categoryId',
      ''
    );
    this.browseProductsPriceMin = this.getStateValue<number | ''>(
      'ui.productManagement.input.browseProducts.priceMin',
      ''
    );
    this.browseProductsPriceMax = this.getStateValue<number | ''>(
      'ui.productManagement.input.browseProducts.priceMax',
      ''
    );
    this.browseProductsStatus = this.getStateValue<'available' | 'unavailable' | ''>(
      'ui.productManagement.input.browseProducts.status',
      ''
    );
    this.browseProductsHighlighted = this.getStateValue<boolean | ''>(
      'ui.productManagement.input.browseProducts.highlighted',
      ''
    );
    this.browseProductsData = this.getStateValue<PetShopBrowseProductsOutput>(
      'ui.productManagement.data.browseProducts',
      []
    );
    this.createProductState = this.getStateValue<'idle' | 'loading' | 'success' | 'error'>(
      'ui.productManagement.action.createProduct.status',
      'idle'
    );
    this.createProductName = this.getStateValue<string>('ui.productManagement.input.createProduct.name', '');
    this.createProductDescription = this.getStateValue<string>(
      'ui.productManagement.input.createProduct.description',
      ''
    );
    this.createProductPrice = this.getStateValue<number | ''>(
      'ui.productManagement.input.createProduct.price',
      ''
    );
    this.createProductPetTypeId = this.getStateValue<string>(
      'ui.productManagement.input.createProduct.petTypeId',
      ''
    );
    this.createProductCategoryId = this.getStateValue<string>(
      'ui.productManagement.input.createProduct.categoryId',
      ''
    );
    this.createProductHighlighted = this.getStateValue<boolean | ''>(
      'ui.productManagement.input.createProduct.highlighted',
      ''
    );
    this.createProductStatus = this.getStateValue<'available' | 'unavailable' | ''>(
      'ui.productManagement.input.createProduct.status',
      ''
    );
    this.createProductOutput = this.getStateValue<PetShopCreateProductOutput | null>(
      'ui.productManagement.output.createProduct',
      null
    );
    this.createProductError = this.getStateValue<string>('ui.productManagement.action.createProduct.error', '');
    this.updateProductState = this.getStateValue<'idle' | 'loading' | 'success' | 'error'>(
      'ui.productManagement.action.updateProduct.status',
      'idle'
    );
    this.updateProductProductId = this.getStateValue<string>(
      'ui.productManagement.input.updateProduct.productId',
      ''
    );
    this.updateProductName = this.getStateValue<string>('ui.productManagement.input.updateProduct.name', '');
    this.updateProductDescription = this.getStateValue<string>(
      'ui.productManagement.input.updateProduct.description',
      ''
    );
    this.updateProductPrice = this.getStateValue<number | ''>(
      'ui.productManagement.input.updateProduct.price',
      ''
    );
    this.updateProductPetTypeId = this.getStateValue<string>(
      'ui.productManagement.input.updateProduct.petTypeId',
      ''
    );
    this.updateProductCategoryId = this.getStateValue<string>(
      'ui.productManagement.input.updateProduct.categoryId',
      ''
    );
    this.updateProductHighlighted = this.getStateValue<boolean | ''>(
      'ui.productManagement.input.updateProduct.highlighted',
      ''
    );
    this.updateProductStatus = this.getStateValue<'available' | 'unavailable' | ''>(
      'ui.productManagement.input.updateProduct.status',
      ''
    );
    this.updateProductOutput = this.getStateValue<PetShopUpdateProductOutput | null>(
      'ui.productManagement.output.updateProduct',
      null
    );
    this.updateProductError = this.getStateValue<string>('ui.productManagement.action.updateProduct.error', '');
    this.setProductHighlightsState = this.getStateValue<'idle' | 'loading' | 'success' | 'error'>(
      'ui.productManagement.action.setProductHighlights.status',
      'idle'
    );
    this.setProductHighlightsProductIds = this.getStateValue<string[] | ''>(
      'ui.productManagement.input.setProductHighlights.productIds',
      ''
    );
    this.setProductHighlightsHighlighted = this.getStateValue<boolean | ''>(
      'ui.productManagement.input.setProductHighlights.highlighted',
      ''
    );
    this.setProductHighlightsOutput = this.getStateValue<PetShopSetProductHighlightsOutput | null>(
      'ui.productManagement.output.setProductHighlights',
      null
    );
    this.setProductHighlightsError = this.getStateValue<string>(
      'ui.productManagement.action.setProductHighlights.error',
      ''
    );
    subscribe(this.subscribedKeys, this);
    void this.loadBrowseProducts();
  }

  public override disconnectedCallback(): void {
    unsubscribe(this.subscribedKeys, this);
    super.disconnectedCallback();
  }

  /** action browseProducts (query) — route petShop.browseProducts.browseProducts; inputs: searchTerm, petTypeId, categoryId, priceMin, priceMax, status, highlighted; writes ui.productManagement.data.browseProducts; status ui.productManagement.action.browseProducts.status */
  async loadBrowseProducts(): Promise<void> {
    this.browseProductsState = 'loading';
    setState('ui.productManagement.action.browseProducts.status', 'loading');
    const params: PetShopBrowseProductsInput = {};
    if (this.browseProductsSearchTerm !== '') {
      params.searchTerm = this.browseProductsSearchTerm;
    }
    if (this.browseProductsPetTypeId !== '') {
      params.petTypeId = this.browseProductsPetTypeId;
    }
    if (this.browseProductsCategoryId !== '') {
      params.categoryId = this.browseProductsCategoryId;
    }
    if (typeof this.browseProductsPriceMin === 'number' && !Number.isNaN(this.browseProductsPriceMin)) {
      params.priceMin = this.browseProductsPriceMin;
    }
    if (typeof this.browseProductsPriceMax === 'number' && !Number.isNaN(this.browseProductsPriceMax)) {
      params.priceMax = this.browseProductsPriceMax;
    }
    if (this.browseProductsStatus !== '') {
      params.status = this.browseProductsStatus;
    }
    if (typeof this.browseProductsHighlighted === 'boolean') {
      params.highlighted = this.browseProductsHighlighted;
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<PetShopBrowseProductsOutput>('petShop.browseProducts.browseProducts', params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.browseProductsData = Array.isArray(data) ? data : [];
      setState('ui.productManagement.data.browseProducts', this.browseProductsData);
      this.browseProductsState = 'success';
      setState('ui.productManagement.action.browseProducts.status', 'success');
    } else {
      this.browseProductsState = 'error';
      setState('ui.productManagement.action.browseProducts.status', 'error');
    }
  }

  /** handler for action browseProducts — bind UI events here */
  handleBrowseProductsClick(_event: Event): void {
    void this.loadBrowseProducts();
  }

  /** action createProduct (command) — route petShop.createProduct.createProduct; inputs: name, description, price, petTypeId, categoryId, highlighted, status; writes ui.productManagement.output.createProduct; status ui.productManagement.action.createProduct.status; feedback keys action.createProduct.success / action.createProduct.error */
  async createProduct(signal?: AbortSignal): Promise<void> {
    this.createProductState = 'loading';
    setState('ui.productManagement.action.createProduct.status', 'loading');
    const params: PetShopCreateProductInput = {
      name: this.createProductName,
      price: typeof this.createProductPrice === 'number' && !Number.isNaN(this.createProductPrice) ? this.createProductPrice : 0,
      petTypeId: this.createProductPetTypeId,
      categoryId: this.createProductCategoryId,
      highlighted: typeof this.createProductHighlighted === 'boolean' ? this.createProductHighlighted : false,
      status: this.createProductStatus === '' ? 'available' : this.createProductStatus
    };
    if (this.createProductDescription !== '') {
      params.description = this.createProductDescription;
    }
    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<PetShopCreateProductOutput>('petShop.createProduct.createProduct', params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.createProductOutput = data;
      setState('ui.productManagement.output.createProduct', data);
      const refreshOk = await this.refreshBrowseProducts();
      if (!refreshOk) {
        this.createProductState = 'error';
        setState('ui.productManagement.action.createProduct.status', 'error');
        return;
      }
      this.clearInputStates([
        'ui.productManagement.input.createProduct.name',
        'ui.productManagement.input.createProduct.description',
        'ui.productManagement.input.createProduct.price',
        'ui.productManagement.input.createProduct.petTypeId',
        'ui.productManagement.input.createProduct.categoryId',
        'ui.productManagement.input.createProduct.highlighted',
        'ui.productManagement.input.createProduct.status'
      ]);
      this.createProductState = 'success';
      setState('ui.productManagement.action.createProduct.status', 'success');
      setState('ui.productManagement.action.createProduct.error', '');
      this.createProductError = '';
    } else {
      const errorMessage = response.error?.message ?? '';
      this.createProductError = errorMessage;
      setState('ui.productManagement.action.createProduct.error', errorMessage);
      this.createProductState = 'error';
      setState('ui.productManagement.action.createProduct.status', 'error');
    }
  }

  /** handler for action createProduct — bind UI events here */
  handleCreateProductClick(_event: Event): void {
    void runBlockingUiAction((signal: AbortSignal) => this.createProduct(signal));
  }

  /** action updateProduct (command) — route petShop.updateProduct.updateProduct; inputs: productId, name, description, price, petTypeId, categoryId, highlighted, status; writes ui.productManagement.output.updateProduct; status ui.productManagement.action.updateProduct.status; feedback keys action.updateProduct.success / action.updateProduct.error */
  async updateProduct(signal?: AbortSignal): Promise<void> {
    this.updateProductState = 'loading';
    setState('ui.productManagement.action.updateProduct.status', 'loading');
    const params: PetShopUpdateProductInput = { productId: this.updateProductProductId };
    if (this.updateProductName !== '') {
      params.name = this.updateProductName;
    }
    if (this.updateProductDescription !== '') {
      params.description = this.updateProductDescription;
    }
    if (typeof this.updateProductPrice === 'number' && !Number.isNaN(this.updateProductPrice)) {
      params.price = this.updateProductPrice;
    }
    if (this.updateProductPetTypeId !== '') {
      params.petTypeId = this.updateProductPetTypeId;
    }
    if (this.updateProductCategoryId !== '') {
      params.categoryId = this.updateProductCategoryId;
    }
    if (typeof this.updateProductHighlighted === 'boolean') {
      params.highlighted = this.updateProductHighlighted;
    }
    if (this.updateProductStatus !== '') {
      params.status = this.updateProductStatus;
    }
    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<PetShopUpdateProductOutput>('petShop.updateProduct.updateProduct', params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.updateProductOutput = data;
      setState('ui.productManagement.output.updateProduct', data);
      const refreshOk = await this.refreshBrowseProducts();
      if (!refreshOk) {
        this.updateProductState = 'error';
        setState('ui.productManagement.action.updateProduct.status', 'error');
        return;
      }
      this.clearInputStates([
        'ui.productManagement.input.updateProduct.productId',
        'ui.productManagement.input.updateProduct.name',
        'ui.productManagement.input.updateProduct.description',
        'ui.productManagement.input.updateProduct.price',
        'ui.productManagement.input.updateProduct.petTypeId',
        'ui.productManagement.input.updateProduct.categoryId',
        'ui.productManagement.input.updateProduct.highlighted',
        'ui.productManagement.input.updateProduct.status'
      ]);
      this.updateProductState = 'success';
      setState('ui.productManagement.action.updateProduct.status', 'success');
      setState('ui.productManagement.action.updateProduct.error', '');
      this.updateProductError = '';
    } else {
      const errorMessage = response.error?.message ?? '';
      this.updateProductError = errorMessage;
      setState('ui.productManagement.action.updateProduct.error', errorMessage);
      this.updateProductState = 'error';
      setState('ui.productManagement.action.updateProduct.status', 'error');
    }
  }

  /** handler for action updateProduct — bind UI events here */
  handleUpdateProductClick(_event: Event): void {
    void runBlockingUiAction((signal: AbortSignal) => this.updateProduct(signal));
  }

  /** action setProductHighlights (command) — route petShop.setProductHighlights.setProductHighlights; inputs: productIds, highlighted; writes ui.productManagement.output.setProductHighlights; status ui.productManagement.action.setProductHighlights.status; feedback keys action.setProductHighlights.success / action.setProductHighlights.error */
  async setProductHighlights(signal?: AbortSignal): Promise<void> {
    this.setProductHighlightsState = 'loading';
    setState('ui.productManagement.action.setProductHighlights.status', 'loading');
    const productIds = this.normalizeStringArray(this.setProductHighlightsProductIds);
    const params: PetShopSetProductHighlightsInput = {
      productIds,
      highlighted: typeof this.setProductHighlightsHighlighted === 'boolean' ? this.setProductHighlightsHighlighted : false
    };
    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<PetShopSetProductHighlightsOutput>(
      'petShop.setProductHighlights.setProductHighlights',
      params,
      options
    );
    if (response.ok) {
      const data = response.data ?? null;
      this.setProductHighlightsOutput = data;
      setState('ui.productManagement.output.setProductHighlights', data);
      const refreshOk = await this.refreshBrowseProducts();
      if (!refreshOk) {
        this.setProductHighlightsState = 'error';
        setState('ui.productManagement.action.setProductHighlights.status', 'error');
        return;
      }
      this.clearInputStates([
        'ui.productManagement.input.setProductHighlights.productIds',
        'ui.productManagement.input.setProductHighlights.highlighted'
      ]);
      this.setProductHighlightsState = 'success';
      setState('ui.productManagement.action.setProductHighlights.status', 'success');
      setState('ui.productManagement.action.setProductHighlights.error', '');
      this.setProductHighlightsError = '';
    } else {
      const errorMessage = response.error?.message ?? '';
      this.setProductHighlightsError = errorMessage;
      setState('ui.productManagement.action.setProductHighlights.error', errorMessage);
      this.setProductHighlightsState = 'error';
      setState('ui.productManagement.action.setProductHighlights.status', 'error');
    }
  }

  /** handler for action setProductHighlights — bind UI events here */
  handleSetProductHighlightsClick(_event: Event): void {
    void runBlockingUiAction((signal: AbortSignal) => this.setProductHighlights(signal));
  }

  /** setter for state ui.productManagement.input.browseProducts.searchTerm */
  setBrowseProductsSearchTerm(value: string): void {
    this.browseProductsSearchTerm = value;
    setState('ui.productManagement.input.browseProducts.searchTerm', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsSearchTerm — bind UI events here */
  handleBrowseProductsSearchTermChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setBrowseProductsSearchTerm(value);
    }
  }

  /** setter for state ui.productManagement.input.browseProducts.petTypeId */
  setBrowseProductsPetTypeId(value: string): void {
    this.browseProductsPetTypeId = value;
    setState('ui.productManagement.input.browseProducts.petTypeId', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsPetTypeId — bind UI events here */
  handleBrowseProductsPetTypeIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setBrowseProductsPetTypeId(value);
    }
  }

  /** setter for state ui.productManagement.input.browseProducts.categoryId */
  setBrowseProductsCategoryId(value: string): void {
    this.browseProductsCategoryId = value;
    setState('ui.productManagement.input.browseProducts.categoryId', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsCategoryId — bind UI events here */
  handleBrowseProductsCategoryIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setBrowseProductsCategoryId(value);
    }
  }

  /** setter for state ui.productManagement.input.browseProducts.priceMin */
  setBrowseProductsPriceMin(value: number | ''): void {
    this.browseProductsPriceMin = value;
    setState('ui.productManagement.input.browseProducts.priceMin', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsPriceMin — bind UI events here */
  handleBrowseProductsPriceMinChange(event: Event): void {
    const value = this.getNumberInputValue(event);
    if (value !== null) {
      this.setBrowseProductsPriceMin(value);
    }
  }

  /** setter for state ui.productManagement.input.browseProducts.priceMax */
  setBrowseProductsPriceMax(value: number | ''): void {
    this.browseProductsPriceMax = value;
    setState('ui.productManagement.input.browseProducts.priceMax', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsPriceMax — bind UI events here */
  handleBrowseProductsPriceMaxChange(event: Event): void {
    const value = this.getNumberInputValue(event);
    if (value !== null) {
      this.setBrowseProductsPriceMax(value);
    }
  }

  /** setter for state ui.productManagement.input.browseProducts.status */
  setBrowseProductsStatus(value: 'available' | 'unavailable' | ''): void {
    this.browseProductsStatus = value;
    setState('ui.productManagement.input.browseProducts.status', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsStatus — bind UI events here */
  handleBrowseProductsStatusChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value === 'available' || value === 'unavailable' || value === '') {
      this.setBrowseProductsStatus(value);
    }
  }

  /** setter for state ui.productManagement.input.browseProducts.highlighted */
  setBrowseProductsHighlighted(value: boolean | ''): void {
    this.browseProductsHighlighted = value;
    setState('ui.productManagement.input.browseProducts.highlighted', value);
    this.requestUpdate();
  }

  /** handler for action set.browseProductsHighlighted — bind UI events here */
  handleBrowseProductsHighlightedChange(event: Event): void {
    const value = this.getBooleanInputValue(event);
    if (value !== null) {
      this.setBrowseProductsHighlighted(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.name */
  setCreateProductName(value: string): void {
    this.createProductName = value;
    setState('ui.productManagement.input.createProduct.name', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductName — bind UI events here */
  handleCreateProductNameChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setCreateProductName(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.description */
  setCreateProductDescription(value: string): void {
    this.createProductDescription = value;
    setState('ui.productManagement.input.createProduct.description', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductDescription — bind UI events here */
  handleCreateProductDescriptionChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setCreateProductDescription(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.price */
  setCreateProductPrice(value: number | ''): void {
    this.createProductPrice = value;
    setState('ui.productManagement.input.createProduct.price', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductPrice — bind UI events here */
  handleCreateProductPriceChange(event: Event): void {
    const value = this.getNumberInputValue(event);
    if (value !== null) {
      this.setCreateProductPrice(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.petTypeId */
  setCreateProductPetTypeId(value: string): void {
    this.createProductPetTypeId = value;
    setState('ui.productManagement.input.createProduct.petTypeId', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductPetTypeId — bind UI events here */
  handleCreateProductPetTypeIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setCreateProductPetTypeId(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.categoryId */
  setCreateProductCategoryId(value: string): void {
    this.createProductCategoryId = value;
    setState('ui.productManagement.input.createProduct.categoryId', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductCategoryId — bind UI events here */
  handleCreateProductCategoryIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setCreateProductCategoryId(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.highlighted */
  setCreateProductHighlighted(value: boolean | ''): void {
    this.createProductHighlighted = value;
    setState('ui.productManagement.input.createProduct.highlighted', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductHighlighted — bind UI events here */
  handleCreateProductHighlightedChange(event: Event): void {
    const value = this.getBooleanInputValue(event);
    if (value !== null) {
      this.setCreateProductHighlighted(value);
    }
  }

  /** setter for state ui.productManagement.input.createProduct.status */
  setCreateProductStatus(value: 'available' | 'unavailable' | ''): void {
    this.createProductStatus = value;
    setState('ui.productManagement.input.createProduct.status', value);
    this.requestUpdate();
  }

  /** handler for action set.createProductStatus — bind UI events here */
  handleCreateProductStatusChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value === 'available' || value === 'unavailable' || value === '') {
      this.setCreateProductStatus(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.productId */
  setUpdateProductProductId(value: string): void {
    this.updateProductProductId = value;
    setState('ui.productManagement.input.updateProduct.productId', value);
    const collectionState = getState('ui.productManagement.data.browseProducts') as PetShopBrowseProductsOutput | null;
    const collection = Array.isArray(collectionState)
      ? collectionState
      : Array.isArray(this.browseProductsData)
        ? this.browseProductsData
        : [];
    const match = collection.find((item: PetShopBrowseProductsOutputItem) => String(item.productId) === String(value));
    if (match) {
      if (match.name !== null && match.name !== undefined) {
        this.updateProductName = match.name;
        setState('ui.productManagement.input.updateProduct.name', match.name);
      }
      if (match.description !== null && match.description !== undefined) {
        this.updateProductDescription = match.description;
        setState('ui.productManagement.input.updateProduct.description', match.description);
      }
      if (match.price !== null && match.price !== undefined) {
        this.updateProductPrice = match.price;
        setState('ui.productManagement.input.updateProduct.price', match.price);
      }
      if (match.petTypeId !== null && match.petTypeId !== undefined) {
        this.updateProductPetTypeId = match.petTypeId;
        setState('ui.productManagement.input.updateProduct.petTypeId', match.petTypeId);
      }
      if (match.categoryId !== null && match.categoryId !== undefined) {
        this.updateProductCategoryId = match.categoryId;
        setState('ui.productManagement.input.updateProduct.categoryId', match.categoryId);
      }
      if (match.highlighted !== null && match.highlighted !== undefined) {
        this.updateProductHighlighted = match.highlighted;
        setState('ui.productManagement.input.updateProduct.highlighted', match.highlighted);
      }
      if (match.status !== null && match.status !== undefined) {
        const statusValue = match.status === 'available' || match.status === 'unavailable' ? match.status : '';
        this.updateProductStatus = statusValue;
        setState('ui.productManagement.input.updateProduct.status', statusValue);
      }
    }
    this.requestUpdate();
  }

  /** handler for action set.updateProductProductId — bind UI events here */
  handleUpdateProductProductIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setUpdateProductProductId(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.name */
  setUpdateProductName(value: string): void {
    this.updateProductName = value;
    setState('ui.productManagement.input.updateProduct.name', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductName — bind UI events here */
  handleUpdateProductNameChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setUpdateProductName(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.description */
  setUpdateProductDescription(value: string): void {
    this.updateProductDescription = value;
    setState('ui.productManagement.input.updateProduct.description', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductDescription — bind UI events here */
  handleUpdateProductDescriptionChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setUpdateProductDescription(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.price */
  setUpdateProductPrice(value: number | ''): void {
    this.updateProductPrice = value;
    setState('ui.productManagement.input.updateProduct.price', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductPrice — bind UI events here */
  handleUpdateProductPriceChange(event: Event): void {
    const value = this.getNumberInputValue(event);
    if (value !== null) {
      this.setUpdateProductPrice(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.petTypeId */
  setUpdateProductPetTypeId(value: string): void {
    this.updateProductPetTypeId = value;
    setState('ui.productManagement.input.updateProduct.petTypeId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductPetTypeId — bind UI events here */
  handleUpdateProductPetTypeIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setUpdateProductPetTypeId(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.categoryId */
  setUpdateProductCategoryId(value: string): void {
    this.updateProductCategoryId = value;
    setState('ui.productManagement.input.updateProduct.categoryId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductCategoryId — bind UI events here */
  handleUpdateProductCategoryIdChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      this.setUpdateProductCategoryId(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.highlighted */
  setUpdateProductHighlighted(value: boolean | ''): void {
    this.updateProductHighlighted = value;
    setState('ui.productManagement.input.updateProduct.highlighted', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductHighlighted — bind UI events here */
  handleUpdateProductHighlightedChange(event: Event): void {
    const value = this.getBooleanInputValue(event);
    if (value !== null) {
      this.setUpdateProductHighlighted(value);
    }
  }

  /** setter for state ui.productManagement.input.updateProduct.status */
  setUpdateProductStatus(value: 'available' | 'unavailable' | ''): void {
    this.updateProductStatus = value;
    setState('ui.productManagement.input.updateProduct.status', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProductStatus — bind UI events here */
  handleUpdateProductStatusChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value === 'available' || value === 'unavailable' || value === '') {
      this.setUpdateProductStatus(value);
    }
  }

  /** setter for state ui.productManagement.input.setProductHighlights.productIds */
  setSetProductHighlightsProductIds(value: string[] | ''): void {
    this.setProductHighlightsProductIds = value;
    setState('ui.productManagement.input.setProductHighlights.productIds', value);
    this.requestUpdate();
  }

  /** handler for action set.setProductHighlightsProductIds — bind UI events here */
  handleSetProductHighlightsProductIdsChange(event: Event): void {
    const value = this.getInputValue(event);
    if (value !== null) {
      const ids = this.normalizeStringArray(value);
      this.setSetProductHighlightsProductIds(ids.length > 0 ? ids : '');
    }
  }

  /** setter for state ui.productManagement.input.setProductHighlights.highlighted */
  setSetProductHighlightsHighlighted(value: boolean | ''): void {
    this.setProductHighlightsHighlighted = value;
    setState('ui.productManagement.input.setProductHighlights.highlighted', value);
    this.requestUpdate();
  }

  /** handler for action set.setProductHighlightsHighlighted — bind UI events here */
  handleSetProductHighlightsHighlightedChange(event: Event): void {
    const value = this.getBooleanInputValue(event);
    if (value !== null) {
      this.setSetProductHighlightsHighlighted(value);
    }
  }

  private getStateValue<T>(stateKey: string, fallback: T): T {
    const stored = getState(stateKey) as T | undefined;
    return stored !== undefined ? stored : fallback;
  }

  private getInputValue(event: Event): string | null {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return null;
    }
    return target.value;
  }

  private getNumberInputValue(event: Event): number | '' | null {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return null;
    }
    const raw = target.value;
    if (raw === '') {
      return '';
    }
    const numeric = Number(raw);
    return Number.isNaN(numeric) ? '' : numeric;
  }

  private getBooleanInputValue(event: Event): boolean | '' | null {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) {
      return null;
    }
    if ('checked' in target) {
      return target.checked;
    }
    if (target.value === '') {
      return '';
    }
    if (target.value === 'true') {
      return true;
    }
    if (target.value === 'false') {
      return false;
    }
    return '';
  }

  private normalizeStringArray(value: string[] | string | ''): string[] {
    if (Array.isArray(value)) {
      return value.filter((item: string) => item.trim() !== '');
    }
    if (value === '') {
      return [];
    }
    return value
      .split(',')
      .map((item: string) => item.trim())
      .filter((item: string) => item !== '');
  }

  private clearInputStates(stateKeys: string[]): void {
    stateKeys.forEach((stateKey: string) => {
      const fallback = this.stateDefaults[stateKey];
      if (fallback !== undefined) {
        setState(stateKey, fallback);
        switch (stateKey) {
          case 'ui.productManagement.input.createProduct.name':
            this.createProductName = fallback as string;
            break;
          case 'ui.productManagement.input.createProduct.description':
            this.createProductDescription = fallback as string;
            break;
          case 'ui.productManagement.input.createProduct.price':
            this.createProductPrice = fallback as number | '';
            break;
          case 'ui.productManagement.input.createProduct.petTypeId':
            this.createProductPetTypeId = fallback as string;
            break;
          case 'ui.productManagement.input.createProduct.categoryId':
            this.createProductCategoryId = fallback as string;
            break;
          case 'ui.productManagement.input.createProduct.highlighted':
            this.createProductHighlighted = fallback as boolean | '';
            break;
          case 'ui.productManagement.input.createProduct.status':
            this.createProductStatus = fallback as 'available' | 'unavailable' | '';
            break;
          case 'ui.productManagement.input.updateProduct.productId':
            this.updateProductProductId = fallback as string;
            break;
          case 'ui.productManagement.input.updateProduct.name':
            this.updateProductName = fallback as string;
            break;
          case 'ui.productManagement.input.updateProduct.description':
            this.updateProductDescription = fallback as string;
            break;
          case 'ui.productManagement.input.updateProduct.price':
            this.updateProductPrice = fallback as number | '';
            break;
          case 'ui.productManagement.input.updateProduct.petTypeId':
            this.updateProductPetTypeId = fallback as string;
            break;
          case 'ui.productManagement.input.updateProduct.categoryId':
            this.updateProductCategoryId = fallback as string;
            break;
          case 'ui.productManagement.input.updateProduct.highlighted':
            this.updateProductHighlighted = fallback as boolean | '';
            break;
          case 'ui.productManagement.input.updateProduct.status':
            this.updateProductStatus = fallback as 'available' | 'unavailable' | '';
            break;
          case 'ui.productManagement.input.setProductHighlights.productIds':
            this.setProductHighlightsProductIds = fallback as string[] | '';
            break;
          case 'ui.productManagement.input.setProductHighlights.highlighted':
            this.setProductHighlightsHighlighted = fallback as boolean | '';
            break;
          default:
            break;
        }
      }
    });
    this.requestUpdate();
  }

  private async refreshBrowseProducts(): Promise<boolean> {
    await this.loadBrowseProducts();
    return this.browseProductsState === 'success';
  }
}
