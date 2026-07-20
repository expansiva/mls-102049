/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/catalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopCatalogBase } from '/_102049_/l2/petShop/web/shared/catalog.js';
import type {
  FeaturedProductsOutput,
  BrowseCatalogOutput,
  ProductDetailsOutput,
} from '/_102049_/l2/petShop/web/shared/catalog.js';

@customElement('pet-shop--web--desktop--page11--catalog-102049')
export class PetShopDesktopPage11CatalogPage extends PetShopCatalogBase {
  render() {
    const featuredRows: FeaturedProductsOutput[] = Array.isArray(this.featuredProductsData)
      ? this.featuredProductsData
      : [];
    const browseData: BrowseCatalogOutput | null =
      this.browseCatalogData != null ? this.browseCatalogData : null;
    const browseItems: FeaturedProductsOutput[] =
      browseData != null && Array.isArray((browseData as { items?: unknown }).items)
        ? ((browseData as { items: FeaturedProductsOutput[] }).items)
        : [];
    const browseTotal =
      browseData != null && typeof (browseData as { total?: unknown }).total === 'number'
        ? (browseData as { total: number }).total
        : undefined;
    const browsePage =
      browseData != null && typeof (browseData as { page?: unknown }).page === 'number'
        ? (browseData as { page: number }).page
        : undefined;
    const browsePageSize =
      browseData != null && typeof (browseData as { pageSize?: unknown }).pageSize === 'number'
        ? (browseData as { pageSize: number }).pageSize
        : undefined;
    const productDetails: ProductDetailsOutput | null = this.productDetailsData;
    const featuredLoading = this.featuredProductsState === 'loading';
    const browseLoading = this.browseCatalogState === 'loading';
    const detailsLoading = this.productDetailsState === 'loading';
    const reserveLoading = this.reserveProductState === 'loading';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['sec.vitrine.title']}
            </h1>
          </header>

          <!-- Section: Vitrine -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['sec.vitrine.title']}
            </h2>

            <!-- Featured filters -->
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['org.vitrine.filters.title']}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.categoryId']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.featuredProductsCategoryId}
                    @input=${(e: Event) => this.handleFeaturedProductsCategoryIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.petTypeId']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.featuredProductsPetTypeId}
                    @input=${(e: Event) => this.handleFeaturedProductsPetTypeIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.name']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.featuredProductsName}
                    @input=${(e: Event) => this.handleFeaturedProductsNameChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.priceMin']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.featuredProductsPriceMin}
                    @input=${(e: Event) => this.handleFeaturedProductsPriceMinChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.priceMax']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.featuredProductsPriceMax}
                    @input=${(e: Event) => this.handleFeaturedProductsPriceMaxChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.page']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.featuredProductsPage}
                    @input=${(e: Event) => this.handleFeaturedProductsPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.pageSize']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.featuredProductsPageSize}
                    @input=${(e: Event) => this.handleFeaturedProductsPageSizeChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${featuredLoading}
                  @click=${(e: Event) => this.handleFeaturedProductsClick(e)}
                >
                  ${featuredLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : null}
                  ${this.msg['action.applyFilters']}
                </button>
              </div>
            </div>

            <!-- Featured cards -->
            <div class="space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['org.vitrine.cards.title']}
              </h3>
              ${featuredLoading
                ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      ${[1, 2, 3].map(
                        () => html`
                          <div class="h-36 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                        `,
                      )}
                    </div>
                  `
                : featuredRows.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['int.vitrine.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        ${featuredRows.map((item: FeaturedProductsOutput) => {
                          const row = item as FeaturedProductsOutput & {
                            productId?: string;
                            name?: string;
                            price?: number | string;
                            isFeatured?: boolean;
                          };
                          const productId =
                            row.productId != null ? String(row.productId) : '';
                          return html`
                            <article
                              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-2 shadow-sm"
                            >
                              <div class="font-medium text-[var(--text-strong,#0f172a)]">
                                ${row.name ?? ''}
                              </div>
                              <div class="text-sm text-[var(--text-default,#0f172a)]">
                                <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.price']}:</span>
                                ${row.price ?? ''}
                              </div>
                              <div class="text-sm text-[var(--text-muted,#64748b)]">
                                ${this.msg['field.isFeatured']}: ${row.isFeatured ? '✓' : '—'}
                              </div>
                              <button
                                type="button"
                                class="mt-2 inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
                                @click=${() => {
                                  this.setProductDetailsProductId(productId);
                                  this.setReserveProductProductId(productId);
                                  this.handleProductDetailsClick();
                                }}
                              >
                                ${this.msg['action.productDetails']}
                              </button>
                            </article>
                          `;
                        })}
                      </div>
                    `}
            </div>
          </section>

          <!-- Section: Catálogo -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['sec.catalogo.title']}
            </h2>

            <!-- Catalog filters -->
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['org.catalogo.filters.title']}
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.searchName']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.browseCatalogSearchName}
                    @input=${(e: Event) => this.handleBrowseCatalogSearchNameChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.petTypeId']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.browseCatalogPetTypeId}
                    @input=${(e: Event) => this.handleBrowseCatalogPetTypeIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.categoryId']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.browseCatalogCategoryId}
                    @input=${(e: Event) => this.handleBrowseCatalogCategoryIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.minPrice']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.browseCatalogMinPrice}
                    @input=${(e: Event) => this.handleBrowseCatalogMinPriceChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.maxPrice']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.browseCatalogMaxPrice}
                    @input=${(e: Event) => this.handleBrowseCatalogMaxPriceChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.page']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.browseCatalogPage}
                    @input=${(e: Event) => this.handleBrowseCatalogPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.pageSize']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="number"
                    .value=${this.browseCatalogPageSize}
                    @input=${(e: Event) => this.handleBrowseCatalogPageSizeChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${browseLoading}
                  @click=${(e: Event) => this.handleBrowseCatalogClick(e)}
                >
                  ${browseLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : null}
                  ${this.msg['action.applyFilters']}
                </button>
              </div>
            </div>

            <!-- Catalog cards -->
            <div class="space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['org.catalogo.cards.title']}
              </h3>
              ${browseLoading
                ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      ${[1, 2, 3].map(
                        () => html`
                          <div class="h-36 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                        `,
                      )}
                    </div>
                  `
                : browseItems.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['int.catalogo.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        ${browseItems.map((item: FeaturedProductsOutput) => {
                          const row = item as FeaturedProductsOutput & {
                            productId?: string;
                            name?: string;
                            price?: number | string;
                            isFeatured?: boolean;
                          };
                          const productId =
                            row.productId != null ? String(row.productId) : '';
                          return html`
                            <article
                              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-2 shadow-sm"
                            >
                              <div class="font-medium text-[var(--text-strong,#0f172a)]">
                                ${row.name ?? ''}
                              </div>
                              <div class="text-sm text-[var(--text-default,#0f172a)]">
                                <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.price']}:</span>
                                ${row.price ?? ''}
                              </div>
                              <button
                                type="button"
                                class="mt-2 inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
                                @click=${() => {
                                  this.setProductDetailsProductId(productId);
                                  this.setReserveProductProductId(productId);
                                  this.handleProductDetailsClick();
                                }}
                              >
                                ${this.msg['action.productDetails']}
                              </button>
                            </article>
                          `;
                        })}
                      </div>
                      ${browseTotal != null || browsePage != null
                        ? html`
                            <div class="flex flex-wrap gap-4 text-sm text-[var(--text-muted,#64748b)]">
                              ${browseTotal != null
                                ? html`<span>${this.msg['field.items']}: ${browseTotal}</span>`
                                : null}
                              ${browsePage != null
                                ? html`<span>${this.msg['field.page']}: ${browsePage}</span>`
                                : null}
                              ${browsePageSize != null
                                ? html`<span>${this.msg['field.pageSize']}: ${browsePageSize}</span>`
                                : null}
                            </div>
                          `
                        : null}
                    `}
            </div>
          </section>

          <!-- Section: Detalhe + Reserva -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['sec.detalhe.reserva.title']}
            </h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <!-- Product details -->
              <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
                <h3 class="text-sm font-medium text-[var(--text-strong,#0f172a)]">
                  ${this.msg['org.detalhe.card.title']}
                </h3>
                ${detailsLoading
                  ? html`
                      <div class="space-y-2 animate-pulse">
                        <div class="h-4 w-2/3 rounded bg-[var(--surface-bg,#e2e8f0)]"></div>
                        <div class="h-4 w-1/2 rounded bg-[var(--surface-bg,#e2e8f0)]"></div>
                        <div class="h-4 w-3/4 rounded bg-[var(--surface-bg,#e2e8f0)]"></div>
                      </div>
                    `
                  : productDetails == null
                    ? html`
                        <p class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['int.detalhe.view.empty']}
                        </p>
                      `
                    : (() => {
                        const d = productDetails as ProductDetailsOutput & {
                          name?: string;
                          price?: number | string;
                          isFeatured?: boolean;
                          categoryName?: string;
                          petTypeName?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          productId?: string;
                        };
                        return html`
                          <dl class="grid grid-cols-1 gap-2 text-sm">
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.name']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.name ?? ''}</dd>
                            </div>
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.price']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.price ?? ''}</dd>
                            </div>
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.isFeatured']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.isFeatured ? '✓' : '—'}</dd>
                            </div>
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.categoryName']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.categoryName ?? ''}</dd>
                            </div>
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.petTypeName']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.petTypeName ?? ''}</dd>
                            </div>
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.createdAt']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.createdAt ?? ''}</dd>
                            </div>
                            <div class="flex flex-col">
                              <dt class="text-[var(--text-muted,#64748b)]">${this.msg['field.updatedAt']}</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">${d.updatedAt ?? ''}</dd>
                            </div>
                          </dl>
                        `;
                      })()}
              </div>

              <!-- Reserve form -->
              <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
                <h3 class="text-sm font-medium text-[var(--text-strong,#0f172a)]">
                  ${this.msg['org.reserva.form.title']}
                </h3>
                <form
                  class="space-y-3"
                  @submit=${(e: Event) => {
                    e.preventDefault();
                    this.handleReserveProductClick(e);
                  }}
                >
                  <input type="hidden" .value=${this.reserveProductProductId} />
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.quantity']}</span>
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                      type="number"
                      required
                      .value=${this.reserveProductQuantity}
                      @input=${(e: Event) => this.handleReserveProductQuantityChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.customerName']}</span>
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                      type="text"
                      required
                      .value=${this.reserveProductCustomerName}
                      @input=${(e: Event) => this.handleReserveProductCustomerNameChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.customerPhone']}</span>
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                      type="tel"
                      required
                      .value=${this.reserveProductCustomerPhone}
                      @input=${(e: Event) => this.handleReserveProductCustomerPhoneChange(e)}
                    />
                  </label>
                  <div class="flex flex-wrap gap-2">
                    <button
                      type="submit"
                      class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                      ?disabled=${reserveLoading}
                    >
                      ${reserveLoading
                        ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                        : null}
                      ${this.msg['action.reserveProduct']}
                    </button>
                  </div>
                </form>

                ${this.reserveProductState === 'success'
                  ? html`
                      <div
                        class="flex items-start justify-between gap-2 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                        role="status"
                      >
                        <span>${this.msg['action.reserveProduct.success']}</span>
                        <button
                          type="button"
                          class="text-[var(--text-muted,#64748b)] underline"
                          @click=${() => {
                            /* dismiss: status is owned by base; no local setter — hide via re-render after next action */
                          }}
                        >
                          ×
                        </button>
                      </div>
                    `
                  : null}
                ${this.reserveProductState === 'error'
                  ? html`
                      <div
                        class="flex items-start justify-between gap-2 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                        role="alert"
                      >
                        <span
                          >${this.reserveProductError
                            ? this.reserveProductError
                            : this.msg['action.reserveProduct.error']}</span
                        >
                        <button
                          type="button"
                          class="text-[var(--text-muted,#64748b)] underline"
                          @click=${() => {
                            /* dismiss feedback region */
                          }}
                        >
                          ×
                        </button>
                      </div>
                    `
                  : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
