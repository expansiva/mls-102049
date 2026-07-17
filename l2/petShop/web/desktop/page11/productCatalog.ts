/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productCatalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopProductCatalogBase } from '/_102049_/l2/petShop/web/shared/productCatalog.js';
import type {
  PetShopViewHighlightsOutputItem,
  PetShopSearchProductsOutputItem,
  PetShopFilterProductsOutputItem,
} from '/_102049_/l2/petShop/web/shared/productCatalog.js';

@customElement('pet-shop--web--desktop--page11--product-catalog-102049')
export class PetShopDesktopPage11ProductCatalogPage extends PetShopProductCatalogBase {
  render() {
    const renderHighlights = () => {
      if (this.viewHighlightsState === 'loading') {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">Carregando…</div>`;
      }
      if (this.viewHighlightsState === 'error') {
        return html`<div class="py-4 text-sm text-[var(--status-error-text,#dc2626)]"><!-- TODO: no error feedback key in msgKeys -->Erro ao carregar destaques.</div>`;
      }
      const items: PetShopViewHighlightsOutputItem[] = this.viewHighlightsData ?? [];
      if (items.length === 0) {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.viewHighlights.empty']}</div>`;
      }
      return html`
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          ${items.map((item: PetShopViewHighlightsOutputItem) => html`
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="font-medium text-[var(--text-strong,#0f172a)] truncate">${item.name}</span>
                ${item.highlighted
                  ? html`<span class="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">&#9733;</span>`
                  : ''}
              </div>
              <p class="text-sm text-[var(--text-muted,#64748b)]">${item.description}</p>
              <div class="flex items-center justify-between">
                <span class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">R$ ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
                <span class="text-xs text-[var(--text-muted,#64748b)]">${item.status}</span>
              </div>
              <button
                class="text-sm text-[var(--link-text,#2563eb)] hover:underline"
                @click=${(e: Event) => { this.setViewProductDetailsProductId(item.productId); this.handleViewProductDetailsClick(e); }}
              >
                ${this.msg['action.viewProductDetails.label']}
              </button>
            </div>
          `)}
        </div>
      `;
    };

    const renderCatalogSummary = () => {
      if (this.browseCatalogState === 'loading') {
        return html`<div class="py-2 text-sm text-[var(--text-muted,#64748b)]">Carregando…</div>`;
      }
      const data = this.browseCatalogData;
      const products = data?.products ?? [];
      if (this.browseCatalogState === 'idle' && products.length === 0) {
        return html`<div class="py-2 text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.browseCatalogSummary.empty']}</div>`;
      }
      return html`
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['field.total.label']}</div>
            <div class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${data?.total ?? 0}</div>
          </div>
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['field.page.label']}</div>
            <div class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${data?.page ?? 0}</div>
          </div>
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['field.pageSize.label']}</div>
            <div class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${data?.pageSize ?? 0}</div>
          </div>
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['field.products.label']}</div>
            <div class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${products.length}</div>
          </div>
        </div>
      `;
    };

    const inputClass =
      'w-full px-3 py-2 text-sm rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]';
    const labelClass = 'block text-xs text-[var(--text-muted,#64748b)] mb-1';
    const btnPrimaryClass =
      'px-4 py-2 text-sm font-medium rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50';

    const renderBrowseFilterForm = () => {
      return html`
        <div class="flex flex-wrap items-end gap-3">
          <div class="flex-1 min-w-[140px]">
            <label class=${labelClass}>${this.msg['field.searchTerm.label']}</label>
            <input type="text" class=${inputClass} .value=${this.browseCatalogSearchTerm} @input=${this.handleBrowseCatalogSearchTermChange} />
          </div>
          <div class="min-w-[120px]">
            <label class=${labelClass}>${this.msg['field.petTypeId.label']}</label>
            <input type="text" class=${inputClass} .value=${this.browseCatalogPetTypeId} @input=${this.handleBrowseCatalogPetTypeIdChange} />
          </div>
          <div class="min-w-[120px]">
            <label class=${labelClass}>${this.msg['field.categoryId.label']}</label>
            <input type="text" class=${inputClass} .value=${this.browseCatalogCategoryId} @input=${this.handleBrowseCatalogCategoryIdChange} />
          </div>
          <div class="min-w-[100px]">
            <label class=${labelClass}>${this.msg['field.minPrice.label']}</label>
            <input type="number" class=${inputClass} .value=${this.browseCatalogMinPrice} @input=${this.handleBrowseCatalogMinPriceChange} />
          </div>
          <div class="min-w-[100px]">
            <label class=${labelClass}>${this.msg['field.maxPrice.label']}</label>
            <input type="number" class=${inputClass} .value=${this.browseCatalogMaxPrice} @input=${this.handleBrowseCatalogMaxPriceChange} />
          </div>
          <button class=${btnPrimaryClass} ?disabled=${this.browseCatalogState === 'loading'} @click=${this.handleBrowseCatalogClick}>
            ${this.browseCatalogState === 'loading' ? '…' : this.msg['action.browseCatalog.label']}
          </button>
        </div>
      `;
    };

    const renderSearchFilterForm = () => {
      return html`
        <div class="flex flex-wrap items-end gap-3">
          <div class="flex-1 min-w-[140px]">
            <label class=${labelClass}>${this.msg['field.searchTerm.label']}</label>
            <input type="text" class=${inputClass} .value=${this.searchProductsSearchTerm} @input=${this.handleSearchProductsSearchTermChange} />
          </div>
          <div class="min-w-[120px]">
            <label class=${labelClass}>${this.msg['field.petTypeId.label']}</label>
            <input type="text" class=${inputClass} .value=${this.searchProductsPetTypeId} @input=${this.handleSearchProductsPetTypeIdChange} />
          </div>
          <div class="min-w-[120px]">
            <label class=${labelClass}>${this.msg['field.categoryId.label']}</label>
            <input type="text" class=${inputClass} .value=${this.searchProductsCategoryId} @input=${this.handleSearchProductsCategoryIdChange} />
          </div>
          <div class="min-w-[100px]">
            <label class=${labelClass}>${this.msg['field.minPrice.label']}</label>
            <input type="number" class=${inputClass} .value=${this.searchProductsMinPrice} @input=${this.handleSearchProductsMinPriceChange} />
          </div>
          <div class="min-w-[100px]">
            <label class=${labelClass}>${this.msg['field.maxPrice.label']}</label>
            <input type="number" class=${inputClass} .value=${this.searchProductsMaxPrice} @input=${this.handleSearchProductsMaxPriceChange} />
          </div>
          <button class=${btnPrimaryClass} ?disabled=${this.searchProductsState === 'loading'} @click=${this.handleSearchProductsClick}>
            ${this.searchProductsState === 'loading' ? '…' : this.msg['action.searchProducts.label']}
          </button>
        </div>
      `;
    };

    const renderFilterForm = () => {
      return html`
        <div class="flex flex-wrap items-end gap-3">
          <div class="min-w-[120px]">
            <label class=${labelClass}>${this.msg['field.petTypeId.label']}</label>
            <input type="text" class=${inputClass} .value=${this.filterProductsPetTypeId} @input=${this.handleFilterProductsPetTypeIdChange} />
          </div>
          <div class="min-w-[120px]">
            <label class=${labelClass}>${this.msg['field.categoryId.label']}</label>
            <input type="text" class=${inputClass} .value=${this.filterProductsCategoryId} @input=${this.handleFilterProductsCategoryIdChange} />
          </div>
          <div class="min-w-[100px]">
            <label class=${labelClass}>${this.msg['field.minPrice.label']}</label>
            <input type="number" class=${inputClass} .value=${this.filterProductsMinPrice} @input=${this.handleFilterProductsMinPriceChange} />
          </div>
          <div class="min-w-[100px]">
            <label class=${labelClass}>${this.msg['field.maxPrice.label']}</label>
            <input type="number" class=${inputClass} .value=${this.filterProductsMaxPrice} @input=${this.handleFilterProductsMaxPriceChange} />
          </div>
          <button class=${btnPrimaryClass} ?disabled=${this.filterProductsState === 'loading'} @click=${this.handleFilterProductsClick}>
            ${this.filterProductsState === 'loading' ? '…' : this.msg['action.filterProducts.label']}
          </button>
        </div>
      `;
    };

    const renderSearchResults = () => {
      if (this.searchProductsState === 'loading') {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">Carregando…</div>`;
      }
      if (this.searchProductsState === 'error') {
        return html`<div class="py-4 text-sm text-[var(--status-error-text,#dc2626)]"><!-- TODO: no error feedback key in msgKeys -->Erro ao buscar produtos.</div>`;
      }
      const items: PetShopSearchProductsOutputItem[] = this.searchProductsData ?? [];
      if (items.length === 0) {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.searchProductsList.empty']}</div>`;
      }
      const thClass = 'text-left py-2 px-3 font-medium text-[var(--text-muted,#64748b)] whitespace-nowrap';
      const tdClass = 'py-2 px-3 text-[var(--text-default,#0f172a)]';
      return html`
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-[var(--border-default,#e2e8f0)]">
                <th class=${thClass}>${this.msg['field.name.label']}</th>
                <th class=${thClass}>${this.msg['field.description.label']}</th>
                <th class=${thClass}>${this.msg['field.price.label']}</th>
                <th class=${thClass}>${this.msg['field.petTypeName.label']}</th>
                <th class=${thClass}>${this.msg['field.categoryName.label']}</th>
                <th class=${thClass}>${this.msg['field.highlighted.label']}</th>
                <th class=${thClass}>${this.msg['field.status.label']}</th>
                <th class=${thClass}>${this.msg['field.productId.label']}</th>
                <th class=${thClass}></th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item: PetShopSearchProductsOutputItem) => html`
                <tr class="border-b border-[var(--border-subtle,#f1f5f9)]">
                  <td class=${tdClass}>${item.name}</td>
                  <td class=${tdClass + ' max-w-xs truncate text-[var(--text-muted,#64748b)]'}>${item.description}</td>
                  <td class=${tdClass + ' whitespace-nowrap'}>R$ ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</td>
                  <td class=${tdClass}>${item.petTypeName}</td>
                  <td class=${tdClass}>${item.categoryName}</td>
                  <td class=${tdClass}><!-- TODO: no highlighted boolean label key -->${item.highlighted ? 'Sim' : 'Não'}</td>
                  <td class=${tdClass}>${item.status}</td>
                  <td class=${tdClass + ' text-[var(--text-muted,#64748b)]'}>${item.productId}</td>
                  <td class=${tdClass}>
                    <button
                      class="text-sm text-[var(--link-text,#2563eb)] hover:underline"
                      @click=${(e: Event) => { this.setViewProductDetailsProductId(item.productId); this.handleViewProductDetailsClick(e); }}
                    >
                      ${this.msg['action.viewProductDetails.label']}
                    </button>
                  </td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      `;
    };

    const renderFilterResults = () => {
      if (this.filterProductsState === 'loading') {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">Carregando…</div>`;
      }
      if (this.filterProductsState === 'error') {
        return html`<div class="py-4 text-sm text-[var(--status-error-text,#dc2626)]"><!-- TODO: no error feedback key in msgKeys -->Erro ao filtrar produtos.</div>`;
      }
      const items: PetShopFilterProductsOutputItem[] = this.filterProductsData ?? [];
      if (items.length === 0) {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.filterProductsList.empty']}</div>`;
      }
      const thClass = 'text-left py-2 px-3 font-medium text-[var(--text-muted,#64748b)] whitespace-nowrap';
      const tdClass = 'py-2 px-3 text-[var(--text-default,#0f172a)]';
      return html`
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-[var(--border-default,#e2e8f0)]">
                <th class=${thClass}>${this.msg['field.name.label']}</th>
                <th class=${thClass}>${this.msg['field.description.label']}</th>
                <th class=${thClass}>${this.msg['field.price.label']}</th>
                <th class=${thClass}>${this.msg['field.petTypeId.label']}</th>
                <th class=${thClass}>${this.msg['field.categoryId.label']}</th>
                <th class=${thClass}>${this.msg['field.highlighted.label']}</th>
                <th class=${thClass}>${this.msg['field.status.label']}</th>
                <th class=${thClass}>${this.msg['field.productId.label']}</th>
                <th class=${thClass}></th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item: PetShopFilterProductsOutputItem) => html`
                <tr class="border-b border-[var(--border-subtle,#f1f5f9)]">
                  <td class=${tdClass}>${item.name}</td>
                  <td class=${tdClass + ' max-w-xs truncate text-[var(--text-muted,#64748b)]'}>${item.description}</td>
                  <td class=${tdClass + ' whitespace-nowrap'}>R$ ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</td>
                  <td class=${tdClass}>${item.petTypeId}</td>
                  <td class=${tdClass}>${item.categoryId}</td>
                  <td class=${tdClass}><!-- TODO: no highlighted boolean label key -->${item.highlighted ? 'Sim' : 'Não'}</td>
                  <td class=${tdClass}>${item.status}</td>
                  <td class=${tdClass + ' text-[var(--text-muted,#64748b)]'}>${item.productId}</td>
                  <td class=${tdClass}>
                    <button
                      class="text-sm text-[var(--link-text,#2563eb)] hover:underline"
                      @click=${(e: Event) => { this.setViewProductDetailsProductId(item.productId); this.handleViewProductDetailsClick(e); }}
                    >
                      ${this.msg['action.viewProductDetails.label']}
                    </button>
                  </td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      `;
    };

    const renderProductDetails = () => {
      if (this.viewProductDetailsState === 'loading') {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">Carregando…</div>`;
      }
      if (this.viewProductDetailsState === 'error') {
        return html`<div class="py-4 text-sm text-[var(--status-error-text,#dc2626)]"><!-- TODO: no error feedback key in msgKeys -->Erro ao carregar detalhes.</div>`;
      }
      const detail = this.viewProductDetailsData;
      if (!detail) {
        return html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.viewProductDetails.empty']}</div>`;
      }
      const dtClass = 'text-xs text-[var(--text-muted,#64748b)]';
      const ddClass = 'text-sm text-[var(--text-default,#0f172a)]';
      return html`
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <dt class=${dtClass}>${this.msg['field.name.label']}</dt>
            <dd class=${ddClass + ' font-medium'}>${detail.name}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.price.label']}</dt>
            <dd class=${ddClass + ' text-lg font-semibold'}>R$ ${typeof detail.price === 'number' ? detail.price.toFixed(2) : detail.price}</dd>
          </div>
          <div class="sm:col-span-2">
            <dt class=${dtClass}>${this.msg['field.description.label']}</dt>
            <dd class=${ddClass}>${detail.description}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.petTypeName.label']}</dt>
            <dd class=${ddClass}>${detail.petTypeName}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.categoryName.label']}</dt>
            <dd class=${ddClass}>${detail.categoryName}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.highlighted.label']}</dt>
            <dd class=${ddClass}><!-- TODO: no highlighted boolean label key -->${detail.highlighted ? 'Sim' : 'Não'}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.status.label']}</dt>
            <dd class=${ddClass}>${detail.status}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.createdAt.label']}</dt>
            <dd class=${ddClass}>${detail.createdAt ? new Date(detail.createdAt).toLocaleString('pt-BR') : '—'}</dd>
          </div>
          <div>
            <dt class=${dtClass}>${this.msg['field.updatedAt.label']}</dt>
            <dd class=${ddClass}>${detail.updatedAt ? new Date(detail.updatedAt).toLocaleString('pt-BR') : '—'}</dd>
          </div>
        </dl>
      `;
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">
            ${this.msg['page.productCatalog.title']}
          </h1>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-5">
            <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${this.msg['sec.overview.title']}</h2>

            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium text-[var(--text-default,#0f172a)]">${this.msg['org.highlights.title']}</h3>
                <button
                  class="px-3 py-1.5 text-sm rounded-md border border-[var(--border-default,#e2e8f0)] text-[var(--text-default,#0f172a)] hover:bg-[var(--surface-alt-bg,#f1f5f9)]"
                  @click=${this.handleViewHighlightsClick}
                >
                  ${this.msg['action.viewHighlights.label']}
                </button>
              </div>
              <p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.viewHighlights.title']}</p>
              ${renderHighlights()}
            </div>

            <div class="space-y-3">
              <h3 class="text-lg font-medium text-[var(--text-default,#0f172a)]">${this.msg['org.catalog.summary.title']}</h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.browseCatalogSummary.title']}</p>
              ${renderCatalogSummary()}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-5">
            <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${this.msg['sec.catalog.title']}</h2>

            <div class="space-y-5">
              <h3 class="text-lg font-medium text-[var(--text-default,#0f172a)]">${this.msg['org.catalog.browser.title']}</h3>

              <div class="space-y-2">
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.msg['intention.browseCatalogFilter.title']}</p>
                ${renderBrowseFilterForm()}
              </div>

              <div class="space-y-2">
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.msg['intention.searchProductsFilter.title']}</p>
                ${renderSearchFilterForm()}
              </div>

              <div class="space-y-2">
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.msg['intention.filterProductsFilter.title']}</p>
                ${renderFilterForm()}
              </div>

              <div class="space-y-2">
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.msg['intention.searchProductsList.title']}</p>
                ${renderSearchResults()}
              </div>

              <div class="space-y-2">
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.msg['intention.filterProductsList.title']}</p>
                ${renderFilterResults()}
              </div>
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-5">
            <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">${this.msg['sec.details.title']}</h2>

            <div class="space-y-3">
              <h3 class="text-lg font-medium text-[var(--text-default,#0f172a)]">${this.msg['org.product.details.title']}</h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intention.viewProductDetails.title']}</p>
              ${renderProductDetails()}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
