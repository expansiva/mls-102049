/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/catalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopCatalogBase } from '/_102049_/l2/petShop/web/shared/catalog.js';
import type {
  FeaturedProductsOutput,
  BrowseCatalogOutput,
  ProductDetailsOutput,
} from '/_102049_/l2/petShop/web/shared/catalog.js';

type BrowseCatalogRow = NonNullable<BrowseCatalogOutput['items']>[number];

@customElement('pet-shop--web--desktop--page21--catalog-102049')
export class PetShopDesktopPage21CatalogPage extends PetShopCatalogBase {
  render() {
    const featuredItems: FeaturedProductsOutput[] = Array.isArray(this.featuredProductsData)
      ? this.featuredProductsData
      : [];
    const browseData = this.browseCatalogData;
    const browseItems: BrowseCatalogRow[] = Array.isArray(browseData?.items)
      ? browseData.items
      : [];
    const browseTotal =
      browseData && typeof browseData.total === 'number' ? browseData.total : browseItems.length;
    const details: ProductDetailsOutput | null = this.productDetailsData;
    const selectedProductId = this.productDetailsProductId || this.reserveProductProductId || '';
    const featuredLoading = this.featuredProductsState === 'loading';
    const browseLoading = this.browseCatalogState === 'loading';
    const detailsLoading = this.productDetailsState === 'loading';
    const reserveLoading = this.reserveProductState === 'loading';
    const formatCurrency = (value: unknown): string => {
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isFinite(num)) {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'BRL' }).format(num);
      }
      return value == null ? '' : String(value);
    };
    const selectProduct = (productId: string, event?: Event) => {
      this.setProductDetailsProductId(productId);
      this.setReserveProductProductId(productId);
      this.handleProductDetailsClick(event);
    };
    const isSelected = (productId: unknown): boolean =>
      selectedProductId !== '' && String(productId ?? '') === selectedProductId;

    return html`
      <div class="min-h-full p-6 space-y-8 bg-[var(--ds-color-page-bg,#f8fafc)] text-[var(--ds-color-text-default,#0f172a)]">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--ds-color-text-strong,#020617)]">
            ${this.msg['section.vitrine.title']}
          </h1>
        </header>

        <!-- Vitrine / featured card-board -->
        <section class="space-y-4" aria-labelledby="sec-vitrine">
          <div class="flex flex-wrap items-end justify-between gap-3">
            <h2 id="sec-vitrine" class="text-lg font-semibold text-[var(--ds-color-text-strong,#020617)]">
              ${this.msg['organism.vitrine.featured.title']}
            </h2>
          </div>

          <div class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm">
            <div class="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-6">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.featured.categoryId']}</span>
                <input
                  class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                  .value=${this.featuredProductsCategoryId}
                  @change=${(e: Event) => this.handleFeaturedProductsCategoryIdChange(e)}
                  @input=${(e: Event) => this.handleFeaturedProductsCategoryIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.featured.petTypeId']}</span>
                <input
                  class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                  .value=${this.featuredProductsPetTypeId}
                  @change=${(e: Event) => this.handleFeaturedProductsPetTypeIdChange(e)}
                  @input=${(e: Event) => this.handleFeaturedProductsPetTypeIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm md:col-span-2">
                <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.featured.name']}</span>
                <input
                  class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                  .value=${this.featuredProductsName}
                  @change=${(e: Event) => this.handleFeaturedProductsNameChange(e)}
                  @input=${(e: Event) => this.handleFeaturedProductsNameChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.featured.priceMin']}</span>
                <input
                  type="number"
                  class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                  .value=${this.featuredProductsPriceMin}
                  @change=${(e: Event) => this.handleFeaturedProductsPriceMinChange(e)}
                  @input=${(e: Event) => this.handleFeaturedProductsPriceMinChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.featured.priceMax']}</span>
                <input
                  type="number"
                  class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                  .value=${this.featuredProductsPriceMax}
                  @change=${(e: Event) => this.handleFeaturedProductsPriceMaxChange(e)}
                  @input=${(e: Event) => this.handleFeaturedProductsPriceMaxChange(e)}
                />
              </label>
            </div>
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-primary-bg,#2563eb)] text-[var(--ds-color-button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${featuredLoading}
                @click=${(e: Event) => this.handleFeaturedProductsClick(e)}
              >
                ${featuredLoading ? '…' : this.msg['action.applyFilters']}
              </button>
            </div>
          </div>

          ${featuredLoading
            ? html`
                <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  ${[0, 1, 2, 3].map(
                    () => html`
                      <div class="h-36 animate-pulse rounded-lg bg-[var(--ds-color-surface-alt-bg,#f1f5f9)]"></div>
                    `,
                  )}
                </div>
              `
            : featuredItems.length === 0
              ? html`
                  <p class="rounded-lg border border-dashed border-[var(--ds-color-border-subtle,#e2e8f0)] px-4 py-8 text-center text-[var(--ds-color-text-muted,#64748b)]">
                    ${this.msg['section.vitrine.featured.empty']}
                  </p>
                `
              : html`
                  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    ${featuredItems.map((item: FeaturedProductsOutput) => {
                      const productId = String((item as { productId?: string | number }).productId ?? '');
                      const selected = isSelected(productId);
                      return html`
                        <article
                          class="flex flex-col gap-3 rounded-lg border p-4 shadow-sm transition
                            ${selected
                              ? 'border-[var(--ds-color-selected-border,#2563eb)] bg-[var(--ds-color-selected-bg,#eff6ff)]'
                              : 'border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)]'}"
                        >
                          <div class="space-y-1">
                            <h3 class="font-medium text-[var(--ds-color-text-strong,#020617)]">
                              ${String((item as { name?: unknown }).name ?? '')}
                            </h3>
                            <p class="text-lg font-semibold text-[var(--ds-color-text-default,#0f172a)]">
                              ${formatCurrency((item as { price?: unknown }).price)}
                            </p>
                            <p class="text-xs text-[var(--ds-color-text-muted,#64748b)]">
                              ${this.msg['field.product.isFeatured']}:
                              ${(item as { isFeatured?: unknown }).isFeatured ? '★' : '—'}
                            </p>
                            <p class="text-xs text-[var(--ds-color-text-muted,#64748b)]">
                              ${this.msg['field.product.categoryId']}:
                              ${String((item as { categoryId?: unknown }).categoryId ?? '—')}
                            </p>
                            <p class="text-xs text-[var(--ds-color-text-muted,#64748b)]">
                              ${this.msg['field.product.petTypeId']}:
                              ${String((item as { petTypeId?: unknown }).petTypeId ?? '—')}
                            </p>
                          </div>
                          <button
                            type="button"
                            class="mt-auto rounded-md px-3 py-2 text-sm font-medium
                              bg-[var(--ds-color-button-secondary-bg,#f8fafc)]
                              text-[var(--ds-color-button-secondary-text,#0f172a)]
                              border border-[var(--ds-color-button-secondary-border,#e2e8f0)]"
                            ?disabled=${detailsLoading || !productId}
                            @click=${(e: Event) => selectProduct(productId, e)}
                          >
                            ${this.msg['action.productDetails']}
                          </button>
                        </article>
                      `;
                    })}
                  </div>
                `}
        </section>

        <!-- Catálogo master-detail + reserva contextual -->
        <section class="space-y-4" aria-labelledby="sec-catalogo">
          <h2 id="sec-catalogo" class="text-lg font-semibold text-[var(--ds-color-text-strong,#020617)]">
            ${this.msg['section.catalogo.title']}
          </h2>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <!-- Master: browse list -->
            <div class="lg:col-span-2 space-y-3">
              <div class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm">
                <h3 class="mb-3 text-sm font-semibold text-[var(--ds-color-text-strong,#020617)]">
                  ${this.msg['organism.catalogo.browse.title']}
                </h3>
                <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  <label class="flex flex-col gap-1 text-sm sm:col-span-2">
                    <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.browse.searchName']}</span>
                    <input
                      class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                      .value=${this.browseCatalogSearchName}
                      @change=${(e: Event) => this.handleBrowseCatalogSearchNameChange(e)}
                      @input=${(e: Event) => this.handleBrowseCatalogSearchNameChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.browse.petTypeId']}</span>
                    <input
                      class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                      .value=${this.browseCatalogPetTypeId}
                      @change=${(e: Event) => this.handleBrowseCatalogPetTypeIdChange(e)}
                      @input=${(e: Event) => this.handleBrowseCatalogPetTypeIdChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.browse.categoryId']}</span>
                    <input
                      class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                      .value=${this.browseCatalogCategoryId}
                      @change=${(e: Event) => this.handleBrowseCatalogCategoryIdChange(e)}
                      @input=${(e: Event) => this.handleBrowseCatalogCategoryIdChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.browse.minPrice']}</span>
                    <input
                      type="number"
                      class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                      .value=${this.browseCatalogMinPrice}
                      @change=${(e: Event) => this.handleBrowseCatalogMinPriceChange(e)}
                      @input=${(e: Event) => this.handleBrowseCatalogMinPriceChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.browse.maxPrice']}</span>
                    <input
                      type="number"
                      class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                      .value=${this.browseCatalogMaxPrice}
                      @change=${(e: Event) => this.handleBrowseCatalogMaxPriceChange(e)}
                      @input=${(e: Event) => this.handleBrowseCatalogMaxPriceChange(e)}
                    />
                  </label>
                </div>
                <div class="mt-3 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-primary-bg,#2563eb)] text-[var(--ds-color-button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${browseLoading}
                    @click=${(e: Event) => this.handleBrowseCatalogClick(e)}
                  >
                    ${browseLoading ? '…' : this.msg['action.applyFilters']}
                  </button>
                  <span class="text-xs text-[var(--ds-color-text-muted,#64748b)]">
                    ${browseTotal}
                  </span>
                </div>
              </div>

              ${browseLoading
                ? html`
                    <div class="space-y-2">
                      ${[0, 1, 2, 3].map(
                        () => html`
                          <div class="h-16 animate-pulse rounded-lg bg-[var(--ds-color-surface-alt-bg,#f1f5f9)]"></div>
                        `,
                      )}
                    </div>
                  `
                : browseItems.length === 0
                  ? html`
                      <p class="rounded-lg border border-dashed border-[var(--ds-color-border-subtle,#e2e8f0)] px-4 py-8 text-center text-[var(--ds-color-text-muted,#64748b)]">
                        ${this.msg['section.catalogo.browse.empty']}
                      </p>
                    `
                  : html`
                      <ul class="space-y-2">
                        ${browseItems.map((item: BrowseCatalogRow) => {
                          const productId = String((item as { productId?: string | number }).productId ?? '');
                          const selected = isSelected(productId);
                          return html`
                            <li
                              class="flex flex-wrap items-center justify-between gap-3 rounded-lg border px-4 py-3
                                ${selected
                                  ? 'border-[var(--ds-color-selected-border,#2563eb)] bg-[var(--ds-color-selected-bg,#eff6ff)] text-[var(--ds-color-selected-text,#0f172a)]'
                                  : 'border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)]'}"
                            >
                              <div class="min-w-0 flex-1 space-y-0.5">
                                <p class="truncate font-medium text-[var(--ds-color-text-strong,#020617)]">
                                  ${String((item as { name?: unknown }).name ?? '')}
                                </p>
                                <p class="text-sm text-[var(--ds-color-text-default,#0f172a)]">
                                  ${formatCurrency((item as { price?: unknown }).price)}
                                  <span class="ml-2 text-xs text-[var(--ds-color-text-muted,#64748b)]">
                                    ${(item as { isFeatured?: unknown }).isFeatured
                                      ? this.msg['field.product.isFeatured']
                                      : ''}
                                  </span>
                                </p>
                                <p class="text-xs text-[var(--ds-color-text-muted,#64748b)]">
                                  ${this.msg['field.product.categoryId']}:
                                  ${String((item as { categoryId?: unknown }).categoryId ?? '—')}
                                  ·
                                  ${this.msg['field.product.petTypeId']}:
                                  ${String((item as { petTypeId?: unknown }).petTypeId ?? '—')}
                                </p>
                              </div>
                              <button
                                type="button"
                                class="rounded-md px-3 py-2 text-sm font-medium
                                  bg-[var(--ds-color-button-secondary-bg,#f8fafc)]
                                  text-[var(--ds-color-button-secondary-text,#0f172a)]
                                  border border-[var(--ds-color-button-secondary-border,#e2e8f0)]"
                                ?disabled=${detailsLoading || !productId}
                                @click=${(e: Event) => selectProduct(productId, e)}
                              >
                                ${this.msg['action.productDetails']}
                              </button>
                            </li>
                          `;
                        })}
                      </ul>
                    `}
            </div>

            <!-- Detail panel: product summary + reserve form -->
            <aside class="space-y-4">
              <div class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm space-y-3">
                <h3 class="text-sm font-semibold text-[var(--ds-color-text-strong,#020617)]">
                  ${this.msg['organism.detalhe.product.title']}
                </h3>

                ${detailsLoading
                  ? html`
                      <div class="space-y-2">
                        <div class="h-6 w-2/3 animate-pulse rounded bg-[var(--ds-color-surface-alt-bg,#f1f5f9)]"></div>
                        <div class="h-10 w-1/2 animate-pulse rounded bg-[var(--ds-color-surface-alt-bg,#f1f5f9)]"></div>
                        <div class="h-4 w-full animate-pulse rounded bg-[var(--ds-color-surface-alt-bg,#f1f5f9)]"></div>
                      </div>
                    `
                  : !details
                    ? html`
                        <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
                          ${this.msg['section.detalhe.product.empty']}
                        </p>
                      `
                    : html`
                        <div class="space-y-3">
                          <div class="rounded-md bg-[var(--ds-color-surface-alt-bg,#f1f5f9)] px-3 py-3">
                            <p class="text-xs uppercase tracking-wide text-[var(--ds-color-text-muted,#64748b)]">
                              ${this.msg['field.product.name']}
                            </p>
                            <p class="text-lg font-semibold text-[var(--ds-color-text-strong,#020617)]">
                              ${String((details as { name?: unknown }).name ?? '')}
                            </p>
                            <p class="mt-1 text-2xl font-bold text-[var(--ds-color-text-default,#0f172a)]">
                              ${formatCurrency((details as { price?: unknown }).price)}
                            </p>
                          </div>
                          <dl class="grid grid-cols-1 gap-2 text-sm">
                            <div class="flex justify-between gap-2 border-b border-[var(--ds-color-border-subtle,#e2e8f0)] py-1">
                              <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.product.isFeatured']}</dt>
                              <dd>${(details as { isFeatured?: unknown }).isFeatured ? '★' : '—'}</dd>
                            </div>
                            <div class="flex justify-between gap-2 border-b border-[var(--ds-color-border-subtle,#e2e8f0)] py-1">
                              <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.product.categoryName']}</dt>
                              <dd>${String((details as { categoryName?: unknown }).categoryName ?? '—')}</dd>
                            </div>
                            <div class="flex justify-between gap-2 border-b border-[var(--ds-color-border-subtle,#e2e8f0)] py-1">
                              <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.product.petTypeName']}</dt>
                              <dd>${String((details as { petTypeName?: unknown }).petTypeName ?? '—')}</dd>
                            </div>
                          </dl>
                        </div>
                      `}
              </div>

              <div class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm space-y-3">
                <h3 class="text-sm font-semibold text-[var(--ds-color-text-strong,#020617)]">
                  ${this.msg['organism.detalhe.reserve.title']}
                </h3>

                ${!details && !selectedProductId
                  ? html`
                      <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
                        ${this.msg['section.detalhe.reserve.empty']}
                      </p>
                    `
                  : html`
                      <div class="space-y-3">
                        <label class="flex flex-col gap-1 text-sm">
                          <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.reserve.quantity']}</span>
                          <input
                            type="number"
                            min="1"
                            class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                            .value=${this.reserveProductQuantity}
                            @change=${(e: Event) => this.handleReserveProductQuantityChange(e)}
                            @input=${(e: Event) => this.handleReserveProductQuantityChange(e)}
                          />
                        </label>
                        <label class="flex flex-col gap-1 text-sm">
                          <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.reserve.customerName']}</span>
                          <input
                            type="text"
                            class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                            .value=${this.reserveProductCustomerName}
                            @change=${(e: Event) => this.handleReserveProductCustomerNameChange(e)}
                            @input=${(e: Event) => this.handleReserveProductCustomerNameChange(e)}
                          />
                        </label>
                        <label class="flex flex-col gap-1 text-sm">
                          <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.reserve.customerPhone']}</span>
                          <input
                            type="tel"
                            class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                            .value=${this.reserveProductCustomerPhone}
                            @change=${(e: Event) => this.handleReserveProductCustomerPhoneChange(e)}
                            @input=${(e: Event) => this.handleReserveProductCustomerPhoneChange(e)}
                          />
                        </label>

                        <button
                          type="button"
                          class="w-full rounded-md px-4 py-2.5 text-sm font-semibold
                            bg-[var(--ds-color-button-primary-bg,#2563eb)]
                            text-[var(--ds-color-button-primary-text,#ffffff)]
                            disabled:opacity-60"
                          ?disabled=${reserveLoading || !selectedProductId}
                          @click=${(e: Event) => {
                            if (selectedProductId) {
                              this.setReserveProductProductId(selectedProductId);
                            }
                            this.handleReserveProductClick(e);
                          }}
                        >
                          ${reserveLoading ? '…' : this.msg['action.reserveProduct']}
                        </button>

                        ${this.reserveProductState === 'success'
                          ? html`
                              <div
                                class="rounded-md px-3 py-2 text-sm
                                  bg-[var(--ds-color-status-success-bg,#dcfce7)]
                                  text-[var(--ds-color-status-success-text,#166534)]"
                                role="status"
                              >
                                ${this.msg['action.reserveProduct.success']}
                              </div>
                            `
                          : nothingPlaceholder(this.reserveProductState === 'error'
                              ? this.reserveProductError || this.msg['action.reserveProduct.error']
                              : '')}
                        ${this.reserveProductState === 'error'
                          ? html`
                              <div
                                class="rounded-md px-3 py-2 text-sm
                                  bg-[var(--ds-color-status-error-bg,#fee2e2)]
                                  text-[var(--ds-color-status-error-text,#991b1b)]"
                                role="alert"
                              >
                                ${this.reserveProductError || this.msg['action.reserveProduct.error']}
                              </div>
                            `
                          : null}
                      </div>
                    `}
              </div>
            </aside>
          </div>
        </section>
      </div>
    `;
  }
}

function nothingPlaceholder(_text: string): unknown {
  return null;
}
