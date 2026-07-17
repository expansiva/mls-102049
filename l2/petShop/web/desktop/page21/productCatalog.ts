/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/productCatalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopProductCatalogBase } from '/_102049_/l2/petShop/web/shared/productCatalog.js';
import type {
  PetShopViewHighlightsOutputItem,
  PetShopBrowseCatalogProduct,
  PetShopSearchProductsOutputItem,
  PetShopFilterProductsOutputItem,
  PetShopViewProductDetailsOutput,
} from '/_102049_/l2/petShop/web/shared/productCatalog.js';

@customElement('pet-shop--web--desktop--page21--product-catalog-102049')
export class PetShopDesktopPage21ProductCatalogPage extends PetShopProductCatalogBase {
  render() {
    const formatCurrency = (v: number | undefined | null): string => {
      if (v == null) return '—';
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);
    };

    const highlights: PetShopViewHighlightsOutputItem[] = this.viewHighlightsData ?? [];
    const browseProducts: PetShopBrowseCatalogProduct[] = this.browseCatalogData?.products ?? [];
    const searchResults: PetShopSearchProductsOutputItem[] = this.searchProductsData ?? [];
    const filterResults: PetShopFilterProductsOutputItem[] = this.filterProductsData ?? [];
    const detail: PetShopViewProductDetailsOutput | null = this.viewProductDetailsData;

    const showSearchResults =
      this.searchProductsState === 'loading' || this.searchProductsState === 'success';
    const showFilterResults =
      !showSearchResults &&
      (this.filterProductsState === 'loading' || this.filterProductsState === 'success');

    const selectProduct = (productId: string): void => {
      this.setViewProductDetailsProductId(productId);
      this.loadViewProductDetails();
    };

    /* ---------- Highlight card (card-board) ---------- */
    const renderHighlightCard = (item: PetShopViewHighlightsOutputItem) => html`
      <div
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 hover:border-[var(--selected-border,#3b82f6)] transition cursor-pointer flex flex-col"
        @click=${() => selectProduct(item.productId)}
      >
        <div class="flex items-start justify-between mb-2">
          <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)] truncate">${item.name}</h3>
          ${item.highlighted
            ? html`<span
                class="text-xs px-2 py-0.5 rounded-full bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)] whitespace-nowrap"
                >★</span
              >`
            : ''}
        </div>
        <p class="text-xs text-[var(--text-muted,#64748b)] mb-3 flex-1 line-clamp-2">${item.description}</p>
        <div class="flex items-center justify-between mt-auto">
          <span class="text-base font-bold text-[var(--text-strong,#0f172a)]">${formatCurrency(item.price)}</span>
          <span
            class="text-xs px-2 py-0.5 rounded bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
            >${item.status}</span
          >
        </div>
      </div>
    `;

    /* ---------- Search result row (has petTypeName, categoryName) ---------- */
    const renderSearchRow = (item: PetShopSearchProductsOutputItem) => html`
      <div
        class="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-subtle,#f1f5f9)] hover:bg-[var(--surface-alt-bg,#f8fafc)] cursor-pointer"
        @click=${() => selectProduct(item.productId)}
      >
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-[var(--text-strong,#0f172a)] truncate">${item.name}</span>
            ${item.highlighted ? html`<span class="text-xs text-[var(--status-warning-text,#92400e)]">★</span>` : ''}
          </div>
          <p class="text-xs text-[var(--text-muted,#64748b)] truncate">${item.description}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-[var(--text-muted,#64748b)]">${item.petTypeName}</span>
            <span class="text-xs text-[var(--text-muted,#64748b)]">·</span>
            <span class="text-xs text-[var(--text-muted,#64748b)]">${item.categoryName}</span>
          </div>
        </div>
        <span class="text-sm font-bold text-[var(--text-strong,#0f172a)] whitespace-nowrap">${formatCurrency(item.price)}</span>
        <button
          class="text-xs px-3 py-1.5 rounded border border-[var(--border-default,#e2e8f0)] text-[var(--link-text,#3b82f6)] hover:bg-[var(--surface-alt-bg,#f8fafc)] whitespace-nowrap"
          @click=${(e: Event) => {
            e.stopPropagation();
            selectProduct(item.productId);
          }}
        >
          ${this.msg['action.viewProductDetails.label']}
        </button>
      </div>
    `;

    /* ---------- Filter result row (no petTypeName, categoryName) ---------- */
    const renderFilterRow = (item: PetShopFilterProductsOutputItem) => html`
      <div
        class="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-subtle,#f1f5f9)] hover:bg-[var(--surface-alt-bg,#f8fafc)] cursor-pointer"
        @click=${() => selectProduct(item.productId)}
      >
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-[var(--text-strong,#0f172a)] truncate">${item.name}</span>
            ${item.highlighted ? html`<span class="text-xs text-[var(--status-warning-text,#92400e)]">★</span>` : ''}
          </div>
          <p class="text-xs text-[var(--text-muted,#64748b)] truncate">${item.description}</p>
        </div>
        <span class="text-sm font-bold text-[var(--text-strong,#0f172a)] whitespace-nowrap">${formatCurrency(item.price)}</span>
        <button
          class="text-xs px-3 py-1.5 rounded border border-[var(--border-default,#e2e8f0)] text-[var(--link-text,#3b82f6)] hover:bg-[var(--surface-alt-bg,#f8fafc)] whitespace-nowrap"
          @click=${(e: Event) => {
            e.stopPropagation();
            selectProduct(item.productId);
          }}
        >
          ${this.msg['action.viewProductDetails.label']}
        </button>
      </div>
    `;

    /* ---------- Browse product row (has petTypeName, categoryName) ---------- */
    const renderBrowseRow = (item: PetShopBrowseCatalogProduct) => html`
      <div
        class="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-subtle,#f1f5f9)] hover:bg-[var(--surface-alt-bg,#f8fafc)] cursor-pointer"
        @click=${() => selectProduct(item.productId)}
      >
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium text-[var(--text-strong,#0f172a)] truncate">${item.name}</span>
            ${item.highlighted ? html`<span class="text-xs text-[var(--status-warning-text,#92400e)]">★</span>` : ''}
          </div>
          <p class="text-xs text-[var(--text-muted,#64748b)] truncate">${item.description}</p>
          <div class="flex items-center gap-2 mt-1">
            <span class="text-xs text-[var(--text-muted,#64748b)]">${item.petTypeName}</span>
            <span class="text-xs text-[var(--text-muted,#64748b)]">·</span>
            <span class="text-xs text-[var(--text-muted,#64748b)]">${item.categoryName}</span>
          </div>
        </div>
        <span class="text-sm font-bold text-[var(--text-strong,#0f172a)] whitespace-nowrap">${formatCurrency(item.price)}</span>
        <button
          class="text-xs px-3 py-1.5 rounded border border-[var(--border-default,#e2e8f0)] text-[var(--link-text,#3b82f6)] hover:bg-[var(--surface-alt-bg,#f8fafc)] whitespace-nowrap"
          @click=${(e: Event) => {
            e.stopPropagation();
            selectProduct(item.productId);
          }}
        >
          ${this.msg['action.viewProductDetails.label']}
        </button>
      </div>
    `;

    /* ---------- Detail panel ---------- */
    const renderDetailPanel = (d: PetShopViewProductDetailsOutput) => html`
      <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
        <div class="flex items-start justify-between mb-3">
          <h3 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${d.name}</h3>
          ${d.highlighted
            ? html`<span
                class="text-xs px-2 py-0.5 rounded-full bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]"
                >★</span
              >`
            : ''}
        </div>
        <p class="text-sm text-[var(--text-muted,#64748b)] mb-4">${d.description}</p>
        <div class="text-2xl font-bold text-[var(--text-strong,#0f172a)] mb-4">${formatCurrency(d.price)}</div>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span class="text-xs text-[var(--text-muted,#64748b)] block">${this.msg['field.petTypeName.label']}</span>
            <span class="text-[var(--text-default,#334155)]">${d.petTypeName}</span>
          </div>
          <div>
            <span class="text-xs text-[var(--text-muted,#64748b)] block">${this.msg['field.categoryName.label']}</span>
            <span class="text-[var(--text-default,#334155)]">${d.categoryName}</span>
          </div>
          <div>
            <span class="text-xs text-[var(--text-muted,#64748b)] block">${this.msg['field.status.label']}</span>
            <span class="text-[var(--text-default,#334155)]">${d.status}</span>
          </div>
          <div>
            <span class="text-xs text-[var(--text-muted,#64748b)] block">${this.msg['field.highlighted.label']}</span>
            <span class="text-[var(--text-default,#334155)]">${d.highlighted ? 'Sim' : 'Não'}</span>
          </div>
        </div>
      </div>
    `;

    /* ---------- Loading skeleton ---------- */
    const renderSkeleton = (count: number) => html`
      <div class="divide-y divide-[var(--border-subtle,#f1f5f9)]">
        ${Array.from({ length: count }).map(
          () => html`
            <div class="flex items-center gap-3 px-4 py-3 animate-pulse">
              <div class="flex-1">
                <div class="h-4 w-1/2 bg-[var(--border-default,#cbd5e1)] rounded mb-2"></div>
                <div class="h-3 w-3/4 bg-[var(--border-default,#cbd5e1)] rounded"></div>
              </div>
              <div class="h-6 w-20 bg-[var(--border-default,#cbd5e1)] rounded"></div>
            </div>
          `,
        )}
      </div>
    `;

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] p-4 md:p-6 lg:p-8">
        <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)] mb-6">${this.msg['page.title']}</h1>

        <!-- Highlights Section (card-board) -->
        <section class="mb-8">
          <h2 class="text-lg font-semibold text-[var(--text-default,#334155)] mb-4">
            ${this.msg['section.highlights.title']}
          </h2>
          ${this.viewHighlightsState === 'loading'
            ? html`
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  ${[0, 1, 2, 3].map(
                    () => html`
                      <div
                        class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 animate-pulse"
                      >
                        <div class="h-4 w-3/4 bg-[var(--border-default,#cbd5e1)] rounded mb-2"></div>
                        <div class="h-3 w-full bg-[var(--border-default,#cbd5e1)] rounded mb-2"></div>
                        <div class="h-6 w-1/3 bg-[var(--border-default,#cbd5e1)] rounded"></div>
                      </div>
                    `,
                  )}
                </div>
              `
            : highlights.length === 0
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['empty.highlights']}</p>`
              : html`
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    ${highlights.map(renderHighlightCard)}
                  </div>
                `}
        </section>

        <!-- Catalog Section -->
        <section class="mb-8">
          <h2 class="text-lg font-semibold text-[var(--text-default,#334155)] mb-4">
            ${this.msg['section.catalog.title']}
          </h2>

          <!-- Inline Filter Bar (unified — avoids separate query forms) -->
          <div
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 mb-4"
          >
            <div class="flex flex-wrap items-end gap-3">
              <div class="flex-1 min-w-[200px]">
                <label class="block text-xs font-medium text-[var(--text-muted,#64748b)] mb-1"
                  >${this.msg['field.searchTerm.label']}</label
                >
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:border-[var(--focus-ring,#3b82f6)] focus:outline-none"
                  .value=${this.browseCatalogSearchTerm}
                  @change=${this.handleBrowseCatalogSearchTermChange}
                  placeholder="${this.msg['field.searchTerm.label']}"
                />
              </div>
              <div class="min-w-[140px]">
                <label class="block text-xs font-medium text-[var(--text-muted,#64748b)] mb-1"
                  >${this.msg['field.petTypeId.label']}</label
                >
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:border-[var(--focus-ring,#3b82f6)] focus:outline-none"
                  .value=${this.browseCatalogPetTypeId}
                  @change=${this.handleBrowseCatalogPetTypeIdChange}
                />
              </div>
              <div class="min-w-[140px]">
                <label class="block text-xs font-medium text-[var(--text-muted,#64748b)] mb-1"
                  >${this.msg['field.categoryId.label']}</label
                >
                <input
                  type="text"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:border-[var(--focus-ring,#3b82f6)] focus:outline-none"
                  .value=${this.browseCatalogCategoryId}
                  @change=${this.handleBrowseCatalogCategoryIdChange}
                />
              </div>
              <div class="min-w-[110px]">
                <label class="block text-xs font-medium text-[var(--text-muted,#64748b)] mb-1"
                  >${this.msg['field.minPrice.label']}</label
                >
                <input
                  type="number"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:border-[var(--focus-ring,#3b82f6)] focus:outline-none"
                  .value=${this.browseCatalogMinPrice}
                  @change=${this.handleBrowseCatalogMinPriceChange}
                />
              </div>
              <div class="min-w-[110px]">
                <label class="block text-xs font-medium text-[var(--text-muted,#64748b)] mb-1"
                  >${this.msg['field.maxPrice.label']}</label
                >
                <input
                  type="number"
                  class="w-full rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:border-[var(--focus-ring,#3b82f6)] focus:outline-none"
                  .value=${this.browseCatalogMaxPrice}
                  @change=${this.handleBrowseCatalogMaxPriceChange}
                />
              </div>
              <button
                class="rounded-lg px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#3b82f6)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50 whitespace-nowrap"
                ?disabled=${this.browseCatalogState === 'loading'}
                @click=${this.handleBrowseCatalogClick}
              >
                ${this.browseCatalogState === 'loading' ? '...' : this.msg['action.browseCatalog.label']}
              </button>
            </div>
          </div>

          <!-- Results + Detail: Master-Detail -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Results List -->
            <div class="lg:col-span-2">
              <div
                class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] overflow-hidden"
              >
                ${showSearchResults
                  ? html`
                      ${this.searchProductsState === 'loading'
                        ? renderSkeleton(4)
                        : searchResults.length === 0
                          ? html`<div class="p-4 text-sm text-[var(--text-muted,#64748b)]">
                              ${this.msg['empty.catalog']}
                            </div>`
                          : html`<div>${searchResults.map(renderSearchRow)}</div>`}
                    `
                  : showFilterResults
                    ? html`
                        ${this.filterProductsState === 'loading'
                          ? renderSkeleton(4)
                          : filterResults.length === 0
                            ? html`<div class="p-4 text-sm text-[var(--text-muted,#64748b)]">
                                ${this.msg['empty.catalog']}
                              </div>`
                            : html`<div>${filterResults.map(renderFilterRow)}</div>`}
                      `
                    : html`
                        ${this.browseCatalogState === 'loading'
                          ? renderSkeleton(4)
                          : browseProducts.length === 0
                            ? html`<div class="p-4 text-sm text-[var(--text-muted,#64748b)]">
                                ${this.msg['empty.catalog']}
                              </div>`
                            : html`
                                <div>${browseProducts.map(renderBrowseRow)}</div>
                                <div
                                  class="flex items-center justify-between px-4 py-3 border-t border-[var(--border-default,#e2e8f0)] text-xs text-[var(--text-muted,#64748b)]"
                                >
                                  <span
                                    >${this.msg['field.total.label']}: ${this.browseCatalogData?.total ?? 0}</span
                                  >
                                  <span
                                    >${this.msg['field.page.label']}:
                                    ${this.browseCatalogData?.page ?? 1}
                                    /
                                    ${Math.ceil(
                                      (this.browseCatalogData?.total ?? 0) /
                                        (this.browseCatalogData?.pageSize ?? 1),
                                    ) || 1}</span
                                  >
                                </div>
                              `}
                      `}
              </div>
            </div>

            <!-- Detail Panel -->
            <div class="lg:col-span-1">
              <h3 class="text-sm font-semibold text-[var(--text-default,#334155)] mb-3">
                ${this.msg['section.detail.title']}
              </h3>
              ${this.viewProductDetailsState === 'loading'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 animate-pulse"
                    >
                      <div class="h-5 w-3/4 bg-[var(--border-default,#cbd5e1)] rounded mb-3"></div>
                      <div class="h-3 w-full bg-[var(--border-default,#cbd5e1)] rounded mb-2"></div>
                      <div class="h-3 w-2/3 bg-[var(--border-default,#cbd5e1)] rounded mb-4"></div>
                      <div class="h-8 w-1/3 bg-[var(--border-default,#cbd5e1)] rounded"></div>
                    </div>
                  `
                : detail
                  ? renderDetailPanel(detail)
                  : html`
                      <div
                        class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"
                      >
                        <p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['empty.detail']}</p>
                      </div>
                    `}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
