/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopProductManagementBase } from '/_102049_/l2/petShop/web/shared/productManagement.js';
import type { PetShopBrowseProductsOutputItem } from '/_102049_/l2/petShop/web/shared/productManagement.js';

@customElement('pet-shop--web--desktop--page11--product-management-102049')
export class PetShopDesktopPage11ProductManagementPage extends PetShopProductManagementBase {
  render() {
    const products = this.browseProductsData;
    const isLoading = this.browseProductsState === 'loading';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">
            ${this.msg['page.productManagement.title']}
          </h1>

          <!-- Section: Product List -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.product.list.title']}
            </h2>

            <!-- Filters -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.searchTerm.label']}
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.browseProductsSearchTerm}
                  @change=${this.handleBrowseProductsSearchTermChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.petTypeId.label']}
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.browseProductsPetTypeId}
                  @change=${this.handleBrowseProductsPetTypeIdChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.categoryId.label']}
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.browseProductsCategoryId}
                  @change=${this.handleBrowseProductsCategoryIdChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.priceMin.label']}
                </label>
                <input
                  type="number"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.browseProductsPriceMin === '' ? '' : String(this.browseProductsPriceMin)}
                  @change=${this.handleBrowseProductsPriceMinChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.priceMax.label']}
                </label>
                <input
                  type="number"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.browseProductsPriceMax === '' ? '' : String(this.browseProductsPriceMax)}
                  @change=${this.handleBrowseProductsPriceMaxChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.status.label']}
                </label>
                <select
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  @change=${this.handleBrowseProductsStatusChange}
                >
                  <option value="" ?selected=${this.browseProductsStatus === ''}>—</option>
                  <option value="available" ?selected=${this.browseProductsStatus === 'available'}>available</option>
                  <option value="unavailable" ?selected=${this.browseProductsStatus === 'unavailable'}>unavailable</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.highlighted.label']}
                </label>
                <select
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  @change=${this.handleBrowseProductsHighlightedChange}
                >
                  <option value="" ?selected=${this.browseProductsHighlighted === ''}>—</option>
                  <option value="true" ?selected=${this.browseProductsHighlighted === true}>true</option>
                  <option value="false" ?selected=${this.browseProductsHighlighted === false}>false</option>
                </select>
              </div>
              <div class="flex items-end">
                <button
                  class="w-full rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] disabled:opacity-50"
                  ?disabled=${isLoading}
                  @click=${this.handleBrowseProductsClick}
                >
                  ${this.msg['action.browseProducts.label']}
                </button>
              </div>
            </div>

            <!-- Toolbar -->
            <div class="flex gap-2">
              <button
                class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)]"
                @click=${this.handleCreateProductClick}
              >
                ${this.msg['action.createProduct.label']}
              </button>
              <button
                class="rounded border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] hover:bg-[var(--button-secondary-bg-hover,#e2e8f0)]"
                @click=${this.handleSetProductHighlightsClick}
              >
                ${this.msg['action.setProductHighlights.label']}
              </button>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              ${isLoading
                ? html`<div class="py-8 text-center text-[var(--text-muted,#64748b)]">Loading…</div>`
                : products.length === 0
                  ? html`<div class="py-8 text-center text-[var(--text-muted,#64748b)]">${this.msg['empty.productList']}</div>`
                  : html`
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-[var(--border-default,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                          <th class="py-2 px-3">${this.msg['column.name.label']}</th>
                          <th class="py-2 px-3">${this.msg['column.price.label']}</th>
                          <th class="py-2 px-3">${this.msg['column.petTypeName.label']}</th>
                          <th class="py-2 px-3">${this.msg['column.categoryName.label']}</th>
                          <th class="py-2 px-3">${this.msg['column.highlighted.label']}</th>
                          <th class="py-2 px-3">${this.msg['column.status.label']}</th>
                          <th class="py-2 px-3"></th>
                        </tr>
                      </thead>
                      <tbody>
                        ${products.map((item: PetShopBrowseProductsOutputItem) => html`
                          <tr class="border-b border-[var(--border-subtle,#f1f5f9)]">
                            <td class="py-2 px-3 text-[var(--text-default,#0f172a)]">${item.name}</td>
                            <td class="py-2 px-3 text-[var(--text-default,#0f172a)]">${item.price}</td>
                            <td class="py-2 px-3 text-[var(--text-default,#0f172a)]">${item.petTypeName}</td>
                            <td class="py-2 px-3 text-[var(--text-default,#0f172a)]">${item.categoryName}</td>
                            <td class="py-2 px-3 text-[var(--text-default,#0f172a)]">
                              <input type="checkbox" ?checked=${item.highlighted === true} disabled />
                            </td>
                            <td class="py-2 px-3 text-[var(--text-default,#0f172a)]">${item.status}</td>
                            <td class="py-2 px-3">
                              <button
                                class="rounded border border-[var(--border-default,#e2e8f0)] px-2 py-1 text-xs text-[var(--text-default,#0f172a)] hover:bg-[var(--surface-alt-bg,#f8fafc)]"
                                @click=${(e: Event) => { this.setUpdateProductProductId(String(item.productId)); this.handleUpdateProductClick(e); }}
                              >
                                ${this.msg['action.updateProduct.label']}
                              </button>
                            </td>
                          </tr>
                        `)}
                      </tbody>
                    </table>
                  `}
            </div>
          </section>

          <!-- Section: Create Product -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.create.product.title']}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.name.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.createProductName}
                  @change=${this.handleCreateProductNameChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.price.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="number"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.createProductPrice === '' ? '' : String(this.createProductPrice)}
                  @change=${this.handleCreateProductPriceChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.petTypeId.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.createProductPetTypeId}
                  @change=${this.handleCreateProductPetTypeIdChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.categoryId.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.createProductCategoryId}
                  @change=${this.handleCreateProductCategoryIdChange}
                />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.description.label']}
                </label>
                <textarea
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.createProductDescription}
                  @change=${this.handleCreateProductDescriptionChange}
                ></textarea>
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.status.label']}
                </label>
                <select
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  @change=${this.handleCreateProductStatusChange}
                >
                  <option value="" ?selected=${this.createProductStatus === ''}>—</option>
                  <option value="available" ?selected=${this.createProductStatus === 'available'}>available</option>
                  <option value="unavailable" ?selected=${this.createProductStatus === 'unavailable'}>unavailable</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.highlighted.label']}
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    ?checked=${this.createProductHighlighted === true}
                    @change=${this.handleCreateProductHighlightedChange}
                  />
                  <span class="text-sm text-[var(--text-default,#0f172a)]">${this.msg['field.highlighted.label']}</span>
                </label>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button
                class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] disabled:opacity-50"
                ?disabled=${this.createProductState === 'loading'}
                @click=${this.handleCreateProductClick}
              >
                ${this.createProductState === 'loading' ? '…' : this.msg['action.createProduct.label']}
              </button>
              ${this.createProductState === 'success'
                ? html`<span class="text-sm text-[var(--status-success-text,#16a34a)]">${this.msg['action.createProduct.success']}</span>`
                : ''}
              ${this.createProductState === 'error'
                ? html`<span class="text-sm text-[var(--status-error-text,#ef4444)]">${this.createProductError || this.msg['action.createProduct.error']}</span>`
                : ''}
            </div>
          </section>

          <!-- Section: Update Product -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.update.product.title']}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.productId.label']}
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--text-muted,#64748b)]"
                  .value=${this.updateProductProductId}
                  readonly
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.name.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProductName}
                  @change=${this.handleUpdateProductNameChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.price.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="number"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProductPrice === '' ? '' : String(this.updateProductPrice)}
                  @change=${this.handleUpdateProductPriceChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.petTypeId.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProductPetTypeId}
                  @change=${this.handleUpdateProductPetTypeIdChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.categoryId.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProductCategoryId}
                  @change=${this.handleUpdateProductCategoryIdChange}
                />
              </div>
              <div class="sm:col-span-2">
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.description.label']}
                </label>
                <textarea
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProductDescription}
                  @change=${this.handleUpdateProductDescriptionChange}
                ></textarea>
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.status.label']}
                </label>
                <select
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  @change=${this.handleUpdateProductStatusChange}
                >
                  <option value="" ?selected=${this.updateProductStatus === ''}>—</option>
                  <option value="available" ?selected=${this.updateProductStatus === 'available'}>available</option>
                  <option value="unavailable" ?selected=${this.updateProductStatus === 'unavailable'}>unavailable</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.highlighted.label']}
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="checkbox"
                    ?checked=${this.updateProductHighlighted === true}
                    @change=${this.handleUpdateProductHighlightedChange}
                  />
                  <span class="text-sm text-[var(--text-default,#0f172a)]">${this.msg['field.highlighted.label']}</span>
                </label>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button
                class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] disabled:opacity-50"
                ?disabled=${this.updateProductState === 'loading'}
                @click=${this.handleUpdateProductClick}
              >
                ${this.updateProductState === 'loading' ? '…' : this.msg['action.updateProduct.label']}
              </button>
              ${this.updateProductState === 'success'
                ? html`<span class="text-sm text-[var(--status-success-text,#16a34a)]">${this.msg['action.updateProduct.success']}</span>`
                : ''}
              ${this.updateProductState === 'error'
                ? html`<span class="text-sm text-[var(--status-error-text,#ef4444)]">${this.updateProductError || this.msg['action.updateProduct.error']}</span>`
                : ''}
            </div>
          </section>

          <!-- Section: Set Highlights -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.set.highlights.title']}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="sm:col-span-2">
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.productIds.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${Array.isArray(this.setProductHighlightsProductIds) ? this.setProductHighlightsProductIds.join(', ') : ''}
                  @change=${this.handleSetProductHighlightsProductIdsChange}
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-muted,#64748b)] mb-1">
                  ${this.msg['field.highlighted.label']} <span class="text-[var(--status-error-text,#ef4444)]">*</span>
                </label>
                <select
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  @change=${this.handleSetProductHighlightsHighlightedChange}
                >
                  <option value="" ?selected=${this.setProductHighlightsHighlighted === ''}>—</option>
                  <option value="true" ?selected=${this.setProductHighlightsHighlighted === true}>true</option>
                  <option value="false" ?selected=${this.setProductHighlightsHighlighted === false}>false</option>
                </select>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <button
                class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] disabled:opacity-50"
                ?disabled=${this.setProductHighlightsState === 'loading'}
                @click=${this.handleSetProductHighlightsClick}
              >
                ${this.setProductHighlightsState === 'loading' ? '…' : this.msg['action.setProductHighlights.label']}
              </button>
              ${this.setProductHighlightsState === 'success'
                ? html`<span class="text-sm text-[var(--status-success-text,#16a34a)]">${this.msg['action.setProductHighlights.success']}</span>`
                : ''}
              ${this.setProductHighlightsState === 'error'
                ? html`<span class="text-sm text-[var(--status-error-text,#ef4444)]">${this.setProductHighlightsError || this.msg['action.setProductHighlights.error']}</span>`
                : ''}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
