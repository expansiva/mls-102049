/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopProductManagementBase } from '/_102049_/l2/petShop/web/shared/productManagement.js';
import type { PetShopBrowseProductsOutputItem } from '/_102049_/l2/petShop/web/contracts/productManagement.js';

@customElement('pet-shop--web--desktop--page11--product-management-102049')
export class PetShopDesktopPage11ProductManagementPage extends PetShopProductManagementBase {
  render() {
    const browseItems: PetShopBrowseProductsOutputItem[] = this.browseProductsData?.items ?? [];
    const browseLoading = this.browseProductsState === 'loading';
    const createLoading = this.createProductState === 'loading';
    const updateLoading = this.updateProductState === 'loading';
    const createSuccess = this.createProductState === 'success';
    const createError = this.createProductState === 'error';
    const updateSuccess = this.updateProductState === 'success';
    const updateError = this.updateProductState === 'error';
    const browseTotal = this.browseProductsData?.total ?? 0;

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#0f172a)]">
            ${this.msg['page.title']}
          </h1>

          <!-- ===== Section: Gestão de produtos (title same as page.title — skipped) ===== -->

          <!-- Organism: BrowseProducts — queryList -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]"
            >
              ${this.msg['organism.browseProducts.title']}
            </h2>

            <!-- Filters -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['filter.searchName']}
                </label>
                <input
                  type="text"
                  .value="${this.browseProductsSearchName}"
                  @input="${this.handleBrowseProductsSearchNameChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['filter.filterStatus']}
                </label>
                <select
                  .value="${this.browseProductsFilterStatus}"
                  @change="${this.handleBrowseProductsFilterStatusChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Todos</option>
                  <option value="active">Ativo</option>
                  <option value="inactive">Inativo</option>
                </select>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['filter.filterProductCategoryId']}
                </label>
                <select
                  .value="${this.browseProductsFilterProductCategoryId}"
                  @change="${this.handleBrowseProductsFilterProductCategoryIdChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Todas</option>
                </select>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['filter.filterFeatured']}
                </label>
                <select
                  .value="${this.browseProductsFilterFeatured}"
                  @change="${this.handleBrowseProductsFilterFeaturedChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Todos</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
            </div>

            <!-- Toolbar -->
            <div class="flex flex-wrap gap-2">
              <button
                @click="${this.handleBrowseProductsClick}"
                class="rounded px-4 py-2 text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)]"
              >
                <!-- TODO: no dedicated search-button msg key; literal label -->
                Buscar
              </button>
              <button
                @click="${this.handleCreateProductClick}"
                class="rounded px-4 py-2 text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)]"
              >
                ${this.msg['action.createProduct']}
              </button>
            </div>

            <!-- Table / loading / empty -->
            ${browseLoading
              ? html`<div
                  class="py-8 text-center text-[var(--text-primary-color,#0f172a)]"
                >
                  Carregando…
                </div>`
              : browseItems.length === 0
                ? html`<div
                    class="py-8 text-center text-[var(--text-primary-color,#0f172a)]"
                  >
                    ${this.msg['empty.browseProducts']}
                  </div>`
                : html`
                    <div class="overflow-x-auto">
                      <table class="w-full text-sm">
                        <thead>
                          <tr
                            class="border-b border-[var(--grey-color,#e2e8f0)] text-left text-[var(--text-primary-color,#0f172a)]"
                          >
                            <th class="py-2 px-3">
                              ${this.msg['column.name']}
                            </th>
                            <th class="py-2 px-3">
                              ${this.msg['column.price']}
                            </th>
                            <th class="py-2 px-3">
                              ${this.msg['column.productCategoryId']}
                            </th>
                            <th class="py-2 px-3">
                              ${this.msg['column.featured']}
                            </th>
                            <th class="py-2 px-3">
                              ${this.msg['column.status']}
                            </th>
                            <th class="py-2 px-3"></th>
                          </tr>
                        </thead>
                        <tbody>
                          ${browseItems.map(
                            (item: PetShopBrowseProductsOutputItem) => html`
                              <tr
                                class="border-b border-[var(--grey-color,#e2e8f0)] text-[var(--text-primary-color,#0f172a)]"
                              >
                                <td class="py-2 px-3">${item.name}</td>
                                <td class="py-2 px-3">
                                  R$ ${item.price.toFixed(2)}
                                </td>
                                <td class="py-2 px-3">
                                  ${item.productCategoryId}
                                </td>
                                <td class="py-2 px-3">
                                  ${item.featured ? 'Sim' : 'Não'}
                                </td>
                                <td class="py-2 px-3">${item.status}</td>
                                <td class="py-2 px-3">
                                  <button
                                    @click="${(e: Event) => {
                                      e.preventDefault();
                                      this.setUpdateProductProductId(
                                        item.productId,
                                      );
                                      this.setUpdateProductName(item.name);
                                      this.setUpdateProductPrice(
                                        String(item.price),
                                      );
                                      this.setUpdateProductImageUrl(
                                        item.imageUrl,
                                      );
                                      this.setUpdateProductProductCategoryId(
                                        item.productCategoryId,
                                      );
                                      this.setUpdateProductFeatured(
                                        String(item.featured),
                                      );
                                      this.setUpdateProductStatus(
                                        item.status,
                                      );
                                    }}"
                                    class="rounded px-3 py-1 text-xs font-medium text-[var(--active-color,#1890FF)] border border-[var(--grey-color,#e2e8f0)]"
                                  >
                                    ${this.msg['action.updateProduct']}
                                  </button>
                                </td>
                              </tr>
                            `,
                          )}
                        </tbody>
                      </table>
                    </div>
                    ${browseTotal > 0
                      ? html`<div
                          class="pt-2 text-xs text-[var(--text-primary-color,#0f172a)]"
                        >
                          ${browseTotal} produto(s)
                        </div>`
                      : ''}
                  `}
          </section>

          <!-- Organism: CreateProduct — commandForm -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]"
            >
              ${this.msg['organism.createProduct.title']}
            </h2>
            <p class="text-sm text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['empty.createProduct']}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.name']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <input
                  type="text"
                  .value="${this.createProductName}"
                  @input="${this.handleCreateProductNameChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.price']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  .value="${this.createProductPrice}"
                  @input="${this.handleCreateProductPriceChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.description']}
                </label>
                <textarea
                  .value="${this.createProductDescription}"
                  @input="${this.handleCreateProductDescriptionChange}"
                  rows="3"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                ></textarea>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.imageUrl']}
                </label>
                <input
                  type="text"
                  .value="${this.createProductImageUrl}"
                  @input="${this.handleCreateProductImageUrlChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.productCategoryId']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <select
                  .value="${this.createProductProductCategoryId}"
                  @change="${this.handleCreateProductProductCategoryIdChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Selecione…</option>
                </select>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.featured']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <select
                  .value="${this.createProductFeatured}"
                  @change="${this.handleCreateProductFeaturedChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Selecione…</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
            </div>

            <!-- Create feedback -->
            ${createSuccess
              ? html`<div
                  class="rounded border border-[var(--success-color,#52C41A)] bg-[var(--bg-primary-color,#ffffff)] px-4 py-3 text-sm text-[var(--success-color,#52C41A)]"
                >
                  ${this.msg['action.createProduct.success']}
                </div>`
              : ''}
            ${createError
              ? html`<div
                  class="rounded border border-[var(--error-color,#FF4D4F)] bg-[var(--bg-primary-color,#ffffff)] px-4 py-3 text-sm text-[var(--error-color,#FF4D4F)]"
                >
                  ${this.createProductError ||
                  this.msg['action.createProduct.error']}
                </div>`
              : ''}

            <div>
              <button
                ?disabled="${createLoading}"
                @click="${this.handleCreateProductClick}"
                class="rounded px-4 py-2 text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)] disabled:opacity-50"
              >
                ${createLoading
                  ? 'Salvando…'
                  : this.msg['action.createProduct.submit']}
              </button>
            </div>
          </section>

          <!-- Organism: UpdateProduct — commandForm -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]"
            >
              ${this.msg['organism.updateProduct.title']}
            </h2>
            <p class="text-sm text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['empty.updateProduct']}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input type="hidden" .value="${this.updateProductProductId}" />

              <div class="sm:col-span-2">
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.productId']}
                </label>
                <input
                  type="text"
                  .value="${this.updateProductProductId}"
                  readonly
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-secondary-color,#E6E6E6)]"
                />
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.name']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <input
                  type="text"
                  .value="${this.updateProductName}"
                  @input="${this.handleUpdateProductNameChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.price']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  .value="${this.updateProductPrice}"
                  @input="${this.handleUpdateProductPriceChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.description']}
                </label>
                <textarea
                  .value="${this.updateProductDescription}"
                  @input="${this.handleUpdateProductDescriptionChange}"
                  rows="3"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                ></textarea>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.imageUrl']}
                </label>
                <input
                  type="text"
                  .value="${this.updateProductImageUrl}"
                  @input="${this.handleUpdateProductImageUrlChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                />
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.productCategoryId']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <select
                  .value="${this.updateProductProductCategoryId}"
                  @change="${this.handleUpdateProductProductCategoryIdChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Selecione…</option>
                </select>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.featured']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <select
                  .value="${this.updateProductFeatured}"
                  @change="${this.handleUpdateProductFeaturedChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Selecione…</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>

              <div>
                <label
                  class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1"
                >
                  ${this.msg['field.status']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <select
                  .value="${this.updateProductStatus}"
                  @change="${this.handleUpdateProductStatusChange}"
                  class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                >
                  <option value="">Selecione…</option>
                  <option value="active">Ativo</option>
                  <option value="inactive">Inativo</option>
                </select>
              </div>
            </div>

            <!-- Update feedback -->
            ${updateSuccess
              ? html`<div
                  class="rounded border border-[var(--success-color,#52C41A)] bg-[var(--bg-primary-color,#ffffff)] px-4 py-3 text-sm text-[var(--success-color,#52C41A)]"
                >
                  ${this.msg['action.updateProduct.success']}
                </div>`
              : ''}
            ${updateError
              ? html`<div
                  class="rounded border border-[var(--error-color,#FF4D4F)] bg-[var(--bg-primary-color,#ffffff)] px-4 py-3 text-sm text-[var(--error-color,#FF4D4F)]"
                >
                  ${this.updateProductError ||
                  this.msg['action.updateProduct.error']}
                </div>`
              : ''}

            <div>
              <button
                ?disabled="${updateLoading || !this.updateProductProductId}"
                @click="${this.handleUpdateProductClick}"
                class="rounded px-4 py-2 text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)] disabled:opacity-50"
              >
                ${updateLoading
                  ? 'Salvando…'
                  : this.msg['action.updateProduct.submit']}
              </button>
            </div>
          </section>

          <!-- ===== Section: Resumo ===== -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-3"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]"
            >
              ${this.msg['section.review']}
            </h2>

            ${!this.createProductOutput && !this.updateProductOutput
              ? html`<p
                  class="text-sm text-[var(--text-primary-color,#0f172a)]"
                >
                  ${this.msg['empty.review']}
                </p>`
              : html`
                  <dl
                    class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[var(--text-primary-color,#0f172a)]"
                  >
                    <div>
                      <dt
                        class="font-medium text-[var(--text-primary-color,#0f172a)]"
                      >
                        Total de produtos
                      </dt>
                      <dd>${browseTotal}</dd>
                    </div>

                    ${this.createProductOutput
                      ? html`<div>
                          <dt
                            class="font-medium text-[var(--text-primary-color,#0f172a)]"
                          >
                            Último produto cadastrado
                          </dt>
                          <dd>
                            ${this.createProductOutput.name} — R$
                            ${this.createProductOutput.price.toFixed(2)}
                            (${this.createProductOutput.status})
                          </dd>
                        </div>`
                      : ''}

                    ${this.updateProductOutput
                      ? html`<div>
                          <dt
                            class="font-medium text-[var(--text-primary-color,#0f172a)]"
                          >
                            Último produto atualizado
                          </dt>
                          <dd>
                            ${this.updateProductOutput.name} — R$
                            ${this.updateProductOutput.price.toFixed(2)}
                            (${this.updateProductOutput.status})
                          </dd>
                        </div>`
                      : ''}
                  </dl>
                `}
          </section>
        </div>
      </div>
    `;
  }
}
