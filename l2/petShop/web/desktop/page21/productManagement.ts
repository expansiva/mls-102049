/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/productManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopProductManagementBase } from '/_102049_/l2/petShop/web/shared/productManagement.js';
import type { PetShopBrowseProductsOutputItem } from '/_102049_/l2/petShop/web/shared/productManagement.js';

@customElement('pet-shop--web--desktop--page21--product-management-102049')
export class PetShopDesktopPage21ProductManagementPage extends PetShopProductManagementBase {
  render() {
    const products: PetShopBrowseProductsOutputItem[] = Array.isArray(this.browseProductsData)
      ? this.browseProductsData
      : [];
    const selectedProductId: string = this.updateProductProductId;
    const selectedProduct: PetShopBrowseProductsOutputItem | null =
      products.find((product: PetShopBrowseProductsOutputItem) => product.productId === selectedProductId) ?? null;
    const selectedStatus: 'available' | 'unavailable' | '' =
      (selectedProduct?.status as 'available' | 'unavailable' | '') ?? (this.updateProductStatus || '');
    const allowedStatuses: Array<'available' | 'unavailable'> = selectedStatus === 'available'
      ? ['unavailable']
      : selectedStatus === 'unavailable'
        ? ['available']
        : ['available', 'unavailable'];
    const browseLoading: boolean = this.browseProductsState === 'loading';
    const updateLoading: boolean = this.updateProductState === 'loading';
    const createLoading: boolean = this.createProductState === 'loading';
    const highlightLoading: boolean = this.setProductHighlightsState === 'loading';

    const createFeedback: string = this.createProductState === 'success'
      ? this.msg['action.createProduct.success']
      : this.createProductState === 'error'
        ? (this.createProductError || this.msg['action.createProduct.error'])
        : '';
    const updateFeedback: string = this.updateProductState === 'success'
      ? this.msg['action.updateProduct.success']
      : this.updateProductState === 'error'
        ? (this.updateProductError || this.msg['action.updateProduct.error'])
        : '';
    const highlightFeedback: string = this.setProductHighlightsState === 'success'
      ? this.msg['action.setProductHighlights.success']
      : this.setProductHighlightsState === 'error'
        ? (this.setProductHighlightsError || this.msg['action.setProductHighlights.error'])
        : '';

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-8">
        <header class="space-y-2">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
            ${this.msg['section.catalog.title']}
          </h1>
        </header>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section class="lg:col-span-2 space-y-6">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="flex flex-col gap-4 border-b border-[var(--border-subtle,#e2e8f0)] p-4">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                    ${this.msg['organism.productList.title']}
                  </h2>
                  <button
                    class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    @click=${this.handleBrowseProductsClick}
                    ?disabled=${browseLoading}
                  >
                    ${this.msg['action.browseProducts']}${browseLoading ? '…' : ''}
                  </button>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.searchTerm']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="text"
                      .value=${this.browseProductsSearchTerm}
                      @input=${this.handleBrowseProductsSearchTermChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.petTypeId']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.browseProductsPetTypeId}
                      @change=${this.handleBrowseProductsPetTypeIdChange}
                    >
                      <option value="">TODO: opções</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.categoryId']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.browseProductsCategoryId}
                      @change=${this.handleBrowseProductsCategoryIdChange}
                    >
                      <option value="">TODO: opções</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.priceMin']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="number"
                      .value=${this.browseProductsPriceMin === '' ? '' : String(this.browseProductsPriceMin)}
                      @input=${this.handleBrowseProductsPriceMinChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.priceMax']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="number"
                      .value=${this.browseProductsPriceMax === '' ? '' : String(this.browseProductsPriceMax)}
                      @input=${this.handleBrowseProductsPriceMaxChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.status']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.browseProductsStatus}
                      @change=${this.handleBrowseProductsStatusChange}
                    >
                      <option value="">—</option>
                      <option value="available">available</option>
                      <option value="unavailable">unavailable</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.highlighted']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.browseProductsHighlighted === '' ? '' : String(this.browseProductsHighlighted)}
                      @change=${this.handleBrowseProductsHighlightedChange}
                    >
                      <option value="">—</option>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  </label>
                </div>
              </div>

              <div class="p-4">
                <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['intent.productList.title']}
                </h3>
                ${browseLoading
                  ? html`<div class="mt-4 space-y-2 text-sm text-[var(--text-muted,#475569)]">Carregando…</div>`
                  : html`
                      <div class="mt-4 overflow-x-auto">
                        <table class="min-w-full text-left text-sm">
                          <thead class="text-[var(--text-muted,#475569)]">
                            <tr>
                              <th class="px-2 py-2">${this.msg['action.selectForEdit']}</th>
                              <th class="px-2 py-2">${this.msg['field.product.name']}</th>
                              <th class="px-2 py-2">${this.msg['field.product.price']}</th>
                              <th class="px-2 py-2">${this.msg['field.product.petTypeName']}</th>
                              <th class="px-2 py-2">${this.msg['field.product.categoryName']}</th>
                              <th class="px-2 py-2">${this.msg['field.product.highlighted']}</th>
                              <th class="px-2 py-2">${this.msg['field.product.status']}</th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)]">
                            ${products.length === 0
                              ? html`
                                  <tr>
                                    <td class="px-2 py-4 text-[var(--text-muted,#475569)]" colspan="7">
                                      TODO: vazio
                                    </td>
                                  </tr>
                                `
                              : products.map((product: PetShopBrowseProductsOutputItem) => html`
                                  <tr class=${selectedProductId === product.productId
                                    ? 'bg-[var(--selected-bg,#e2e8f0)]'
                                    : ''}>
                                    <td class="px-2 py-2">
                                      <input
                                        type="radio"
                                        name="selectedProduct"
                                        .value=${product.productId}
                                        ?checked=${selectedProductId === product.productId}
                                        @change=${this.handleUpdateProductProductIdChange}
                                      />
                                    </td>
                                    <td class="px-2 py-2">${product.name}</td>
                                    <td class="px-2 py-2">${product.price}</td>
                                    <td class="px-2 py-2">${product.petTypeName}</td>
                                    <td class="px-2 py-2">${product.categoryName}</td>
                                    <td class="px-2 py-2">${product.highlighted ? '✓' : '—'}</td>
                                    <td class="px-2 py-2">${product.status}</td>
                                  </tr>
                                `)}
                          </tbody>
                        </table>
                      </div>
                    `}
              </div>
            </div>
          </section>

          <section class="space-y-6">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="border-b border-[var(--border-subtle,#e2e8f0)] p-4">
                <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['section.detail.title']}
                </h2>
              </div>
              <div class="space-y-4 p-4">
                <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['organism.updateProductForm.title']}
                </h3>
                <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3 text-sm text-[var(--text-muted,#475569)]">
                  ${selectedProduct
                    ? html`
                        <div class="font-semibold text-[var(--text-strong,#0f172a)]">${selectedProduct.name}</div>
                        <div>${selectedProduct.categoryName} · ${selectedProduct.petTypeName}</div>
                        <div>${selectedProduct.price}</div>
                      `
                    : html`TODO: selecione um produto`}
                </div>
                <div class="grid grid-cols-1 gap-3">
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.name']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="text"
                      .value=${this.updateProductName}
                      @input=${this.handleUpdateProductNameChange}
                      ?disabled=${!selectedProductId}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.description']}
                    <textarea
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      rows="3"
                      .value=${this.updateProductDescription}
                      @input=${this.handleUpdateProductDescriptionChange}
                      ?disabled=${!selectedProductId}
                    ></textarea>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.price']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="number"
                      .value=${this.updateProductPrice === '' ? '' : String(this.updateProductPrice)}
                      @input=${this.handleUpdateProductPriceChange}
                      ?disabled=${!selectedProductId}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.petTypeId']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.updateProductPetTypeId}
                      @change=${this.handleUpdateProductPetTypeIdChange}
                      ?disabled=${!selectedProductId}
                    >
                      <option value="">TODO: opções</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.categoryId']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.updateProductCategoryId}
                      @change=${this.handleUpdateProductCategoryIdChange}
                      ?disabled=${!selectedProductId}
                    >
                      <option value="">TODO: opções</option>
                    </select>
                  </label>
                  <label class="flex items-center gap-2 text-sm text-[var(--text-muted,#475569)]">
                    <input
                      type="checkbox"
                      ?checked=${this.updateProductHighlighted === true}
                      @change=${this.handleUpdateProductHighlightedChange}
                      ?disabled=${!selectedProductId}
                    />
                    ${this.msg['field.product.highlighted']}
                  </label>
                  <div class="space-y-2">
                    <div class="text-sm text-[var(--text-muted,#475569)]">
                      ${this.msg['field.product.status']}
                    </div>
                    <div class="flex flex-wrap gap-2">
                      ${allowedStatuses.map((status: 'available' | 'unavailable') => html`
                        <label class="flex items-center gap-2 rounded-full border border-[var(--border-default,#e2e8f0)] px-3 py-1 text-sm">
                          <input
                            type="radio"
                            name="updateStatus"
                            .value=${status}
                            ?checked=${(this.updateProductStatus || selectedStatus) === status}
                            @change=${this.handleUpdateProductStatusChange}
                            ?disabled=${!selectedProductId}
                          />
                          ${status}
                        </label>
                      `)}
                    </div>
                  </div>
                </div>
                <button
                  class="mt-2 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  @click=${this.handleUpdateProductClick}
                  ?disabled=${!selectedProductId || updateLoading}
                >
                  ${this.msg['action.updateProduct']}${updateLoading ? '…' : ''}
                </button>
                ${updateFeedback
                  ? html`
                      <div class="rounded-md bg-[var(--status-info-bg,#e0f2fe)] p-2 text-sm text-[var(--status-info-text,#0c4a6e)]">
                        ${updateFeedback}
                      </div>
                    `
                  : ''}
              </div>
            </div>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="border-b border-[var(--border-subtle,#e2e8f0)] p-4">
                <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['organism.createProductForm.title']}
                </h3>
              </div>
              <div class="space-y-4 p-4">
                <div class="grid grid-cols-1 gap-3">
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.name']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="text"
                      .value=${this.createProductName}
                      @input=${this.handleCreateProductNameChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.description']}
                    <textarea
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      rows="3"
                      .value=${this.createProductDescription}
                      @input=${this.handleCreateProductDescriptionChange}
                    ></textarea>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.price']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="number"
                      .value=${this.createProductPrice === '' ? '' : String(this.createProductPrice)}
                      @input=${this.handleCreateProductPriceChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.petTypeId']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.createProductPetTypeId}
                      @change=${this.handleCreateProductPetTypeIdChange}
                    >
                      <option value="">TODO: opções</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                    ${this.msg['field.product.categoryId']}
                    <select
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      .value=${this.createProductCategoryId}
                      @change=${this.handleCreateProductCategoryIdChange}
                    >
                      <option value="">TODO: opções</option>
                    </select>
                  </label>
                  <label class="flex items-center gap-2 text-sm text-[var(--text-muted,#475569)]">
                    <input
                      type="checkbox"
                      ?checked=${this.createProductHighlighted === true}
                      @change=${this.handleCreateProductHighlightedChange}
                    />
                    ${this.msg['field.product.highlighted']}
                  </label>
                  <div class="space-y-2">
                    <div class="text-sm text-[var(--text-muted,#475569)]">
                      ${this.msg['field.product.status']}
                    </div>
                    <div class="flex flex-wrap gap-2">
                      ${(['available', 'unavailable'] as Array<'available' | 'unavailable'>).map((status: 'available' | 'unavailable') => html`
                        <label class="flex items-center gap-2 rounded-full border border-[var(--border-default,#e2e8f0)] px-3 py-1 text-sm">
                          <input
                            type="radio"
                            name="createStatus"
                            .value=${status}
                            ?checked=${this.createProductStatus === status}
                            @change=${this.handleCreateProductStatusChange}
                          />
                          ${status}
                        </label>
                      `)}
                    </div>
                  </div>
                </div>
                <button
                  class="mt-2 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  @click=${this.handleCreateProductClick}
                  ?disabled=${createLoading}
                >
                  ${this.msg['action.createProduct']}${createLoading ? '…' : ''}
                </button>
                ${createFeedback
                  ? html`
                      <div class="rounded-md bg-[var(--status-info-bg,#e0f2fe)] p-2 text-sm text-[var(--status-info-text,#0c4a6e)]">
                        ${createFeedback}
                      </div>
                    `
                  : ''}
              </div>
            </div>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="border-b border-[var(--border-subtle,#e2e8f0)] p-4">
                <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['organism.setHighlightsForm.title']}
                </h3>
              </div>
              <div class="space-y-4 p-4">
                <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#475569)]">
                  ${this.msg['field.product.productIds']}
                  <select
                    class="h-32 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    multiple
                    @change=${this.handleSetProductHighlightsProductIdsChange}
                  >
                    ${products.map((product: PetShopBrowseProductsOutputItem) => html`
                      <option
                        value=${product.productId}
                        ?selected=${Array.isArray(this.setProductHighlightsProductIds)
                          ? this.setProductHighlightsProductIds.includes(product.productId)
                          : false}
                      >
                        ${product.name}
                      </option>
                    `)}
                  </select>
                </label>
                <label class="flex items-center gap-2 text-sm text-[var(--text-muted,#475569)]">
                  <input
                    type="checkbox"
                    ?checked=${this.setProductHighlightsHighlighted === true}
                    @change=${this.handleSetProductHighlightsHighlightedChange}
                  />
                  ${this.msg['field.product.highlighted']}
                </label>
                <button
                  class="mt-2 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  @click=${this.handleSetProductHighlightsClick}
                  ?disabled=${highlightLoading}
                >
                  ${this.msg['action.setProductHighlights']}${highlightLoading ? '…' : ''}
                </button>
                ${highlightFeedback
                  ? html`
                      <div class="rounded-md bg-[var(--status-info-bg,#e0f2fe)] p-2 text-sm text-[var(--status-info-text,#0c4a6e)]">
                        ${highlightFeedback}
                      </div>
                    `
                  : ''}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
