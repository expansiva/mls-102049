/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/productCatalog.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopProductCatalogBase } from '/_102049_/l2/petShop/web/shared/productCatalog.js';
import type { PetShopBrowseProductCatalogOutputItem } from '/_102049_/l2/petShop/web/contracts/productCatalog.js';

@customElement('pet-shop--web--desktop--page11--product-catalog-102049')
export class PetShopDesktopPage11ProductCatalogPage extends PetShopProductCatalogBase {
  render() {
    const browseItems: PetShopBrowseProductCatalogOutputItem[] = this.browseProductCatalogData?.items ?? [];
    const browseLoading = this.browseProductCatalogState === 'loading';
    const detailsData = this.viewProductDetailsData;
    const detailsLoading = this.viewProductDetailsState === 'loading';
    const orderOutput = this.placeStorePickupOrderOutput;
    const orderLoading = this.placeStorePickupOrderState === 'loading';
    const orderSuccess = this.placeStorePickupOrderState === 'success';
    const orderError = this.placeStorePickupOrderState === 'error';

    return html`
      <div class="min-h-full bg-[var(--bg-secondary-color,#F9F9F9)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['page.title']}
          </h1>

          <!-- Section: Catalog -->
          <section class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
            <h2 class="text-xl font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['sec.catalog.title']}
            </h2>

            <!-- Organism: Browse Catalog -->
            <div class="space-y-3">
              <p class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70">${this.msg['org.browse.catalog.title']}</p>
              <h3 class="text-lg font-medium text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['organism.browse.title']}
              </h3>

              <!-- Filters -->
              <div class="flex flex-wrap gap-3 items-end">
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.searchName']}</label>
                  <input type="text"
                    .value="${this.browseProductCatalogSearchName}"
                    @input="${(e: Event) => this.handleBrowseProductCatalogSearchNameChange(e)}"
                    class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                    placeholder="${this.msg['field.searchName']}" />
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.productCategoryId']}</label>
                  <input type="text"
                    .value="${this.browseProductCatalogProductCategoryId}"
                    @input="${(e: Event) => this.handleBrowseProductCatalogProductCategoryIdChange(e)}"
                    class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                    placeholder="${this.msg['field.productCategoryId']}" />
                </div>
                <button type="button"
                  @click="${() => this.handleBrowseProductCatalogClick()}"
                  class="rounded px-4 py-2 bg-[var(--active-color,#1890FF)] text-[var(--bg-primary-color,#ffffff)] font-medium">
                  ${this.msg['organism.browse.title']}
                </button>
              </div>

              <!-- Browse Table -->
              ${browseLoading ? html`
                <div class="py-8 text-center text-[var(--text-primary-color,#403f3f)]"><!-- TODO: no loading msg key -->Carregando…</div>
              ` : browseItems.length === 0 ? html`
                <div class="py-8 text-center text-[var(--text-primary-color,#403f3f)]">${this.msg['empty.browse']}</div>
              ` : html`
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-[var(--grey-color,#E6E6E6)] text-left text-[var(--text-primary-color,#403f3f)]">
                        <th class="py-2 px-3">${this.msg['column.imageUrl']}</th>
                        <th class="py-2 px-3">${this.msg['column.name']}</th>
                        <th class="py-2 px-3">${this.msg['column.price']}</th>
                        <th class="py-2 px-3">${this.msg['column.productCategoryId']}</th>
                        <th class="py-2 px-3">${this.msg['column.featured']}</th>
                        <th class="py-2 px-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      ${browseItems.map((item: PetShopBrowseProductCatalogOutputItem) => html`
                        <tr class="border-b border-[var(--grey-color,#E6E6E6)] text-[var(--text-primary-color,#403f3f)]">
                          <td class="py-2 px-3">
                            ${item.imageUrl ? html`<img src="${item.imageUrl}" alt="${item.name}" class="w-12 h-12 object-cover rounded" />` : html`<span class="inline-block w-12 h-12 rounded bg-[var(--grey-color,#E6E6E6)]"></span>`}
                          </td>
                          <td class="py-2 px-3">${item.name}</td>
                          <td class="py-2 px-3">${item.price != null ? `R$ ${item.price.toFixed(2)}` : ''}</td>
                          <td class="py-2 px-3">${item.productCategoryId}</td>
                          <td class="py-2 px-3">${item.featured ? '✓' : '—'}</td>
                          <td class="py-2 px-3">
                            <button type="button"
                              @click="${() => { this.setViewProductDetailsProductId(item.productId); this.handleViewProductDetailsClick(); }}"
                              class="rounded px-3 py-1 text-sm bg-[var(--active-color,#1890FF)] text-[var(--bg-primary-color,#ffffff)] font-medium">
                              ${this.msg['action.viewProductDetails']}
                            </button>
                          </td>
                        </tr>
                      `)}
                    </tbody>
                  </table>
                </div>
                ${this.browseProductCatalogData?.total != null ? html`
                  <div class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.browseProductCatalogData.total}</div>
                ` : ''}
              `}
            </div>

            <!-- Organism: Product Details -->
            <div class="space-y-3 border-t border-[var(--grey-color,#E6E6E6)] pt-4">
              <p class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70">${this.msg['org.product.details.title']}</p>
              <h3 class="text-lg font-medium text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['organism.details.title']}
              </h3>
              ${detailsLoading ? html`
                <div class="py-8 text-center text-[var(--text-primary-color,#403f3f)]"><!-- TODO: no loading msg key -->Carregando…</div>
              ` : !detailsData ? html`
                <div class="py-8 text-center text-[var(--text-primary-color,#403f3f)]">${this.msg['empty.details']}</div>
              ` : html`
                <div class="flex gap-4">
                  ${detailsData.imageUrl ? html`<img src="${detailsData.imageUrl}" alt="${detailsData.name}" class="w-32 h-32 object-cover rounded-lg" />` : ''}
                  <div class="flex-1 space-y-2 text-[var(--text-primary-color,#403f3f)]">
                    <div><strong>${this.msg['field.name']}:</strong> ${detailsData.name}</div>
                    <div><strong>${this.msg['field.description']}:</strong> ${detailsData.description}</div>
                    <div><strong>${this.msg['field.price']}:</strong> ${detailsData.price != null ? `R$ ${detailsData.price.toFixed(2)}` : ''}</div>
                    <div><strong>${this.msg['field.productCategoryId']}:</strong> ${detailsData.productCategoryId}</div>
                    <div><strong>${this.msg['field.featured']}:</strong> ${detailsData.featured ? '✓' : '—'}</div>
                    <div><strong>${this.msg['field.status']}:</strong> ${detailsData.status}</div>
                  </div>
                </div>
              `}
            </div>
          </section>

          <!-- Section: Checkout -->
          <section class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
            <h2 class="text-xl font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['section.checkout.title']}
            </h2>

            <!-- Organism: Cart and Checkout -->
            <div class="space-y-3">
              <p class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70">${this.msg['org.cart.and.checkout.title']}</p>

              <!-- Cart Items -->
              <div class="space-y-2">
                <h3 class="text-lg font-medium text-[var(--text-primary-color,#403f3f)]">
                  ${this.msg['organism.cart.title']}
                </h3>
                <div class="py-4 text-center text-[var(--text-primary-color,#403f3f)]">${this.msg['empty.cart']}</div>
              </div>

              <!-- Checkout Form -->
              <div class="space-y-3 border-t border-[var(--grey-color,#E6E6E6)] pt-4">
                <h3 class="text-lg font-medium text-[var(--text-primary-color,#403f3f)]">
                  ${this.msg['organism.checkout.title']}
                </h3>
                <form class="space-y-3" @submit="${(e: Event) => { e.preventDefault(); this.handlePlaceStorePickupOrderClick(); }}">
                  <div class="flex flex-col gap-1">
                    <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.customerName']} *</label>
                    <input type="text"
                      .value="${this.placeStorePickupOrderCustomerName}"
                      @input="${(e: Event) => this.handlePlaceStorePickupOrderCustomerNameChange(e)}"
                      required
                      class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.customerPhone']}</label>
                    <input type="text"
                      .value="${this.placeStorePickupOrderCustomerPhone}"
                      @input="${(e: Event) => this.handlePlaceStorePickupOrderCustomerPhoneChange(e)}"
                      class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.productId']}</label>
                    <input type="text" disabled
                      class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--grey-color-light,#F2F2F2)] text-[var(--text-primary-color,#403f3f)] opacity-60" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.quantity']}</label>
                    <input type="number" disabled
                      class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--grey-color-light,#F2F2F2)] text-[var(--text-primary-color,#403f3f)] opacity-60" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="text-sm text-[var(--text-primary-color,#403f3f)]">${this.msg['field.unitPrice']}</label>
                    <input type="number" disabled
                      class="border border-[var(--grey-color,#E6E6E6)] rounded px-3 py-2 bg-[var(--grey-color-light,#F2F2F2)] text-[var(--text-primary-color,#403f3f)] opacity-60" />
                  </div>
                  <button type="submit"
                    ?disabled="${orderLoading}"
                    class="rounded px-4 py-2 bg-[var(--active-color,#1890FF)] text-[var(--bg-primary-color,#ffffff)] font-medium disabled:opacity-60">
                    ${orderLoading ? html`<!-- TODO: no loading msg key -->Carregando…` : this.msg['action.placeStorePickupOrder']}
                  </button>
                </form>

                <!-- Feedback -->
                ${orderSuccess ? html`
                  <div class="rounded p-3 bg-[var(--success-color,#52C41A)] text-[var(--bg-primary-color,#ffffff)] flex items-center justify-between">
                    <span>${this.msg['action.placeStorePickupOrder.success']}</span>
                    <button type="button"
                      @click="${() => { this.placeStorePickupOrderState = 'idle'; this.requestUpdate(); }}"
                      class="ml-2 font-bold">✕</button>
                  </div>
                ` : ''}
                ${orderError ? html`
                  <div class="rounded p-3 bg-[var(--error-color,#FF4D4F)] text-[var(--bg-primary-color,#ffffff)] flex items-center justify-between">
                    <span>${this.placeStorePickupOrderError || this.msg['action.placeStorePickupOrder.error']}</span>
                    <button type="button"
                      @click="${() => { this.placeStorePickupOrderState = 'idle'; this.requestUpdate(); }}"
                      class="ml-2 font-bold">✕</button>
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Organism: Order Result -->
            <div class="space-y-3 border-t border-[var(--grey-color,#E6E6E6)] pt-4">
              <p class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70">${this.msg['org.order.result.title']}</p>
              <h3 class="text-lg font-medium text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['organism.summary.title']}
              </h3>
              ${!orderOutput ? html`
                <div class="py-4 text-center text-[var(--text-primary-color,#403f3f)]">${this.msg['empty.summary']}</div>
              ` : html`
                <div class="space-y-2 text-[var(--text-primary-color,#403f3f)]">
                  <div><strong>${this.msg['field.orderId']}:</strong> ${orderOutput.orderId}</div>
                  <div><strong>${this.msg['field.status']}:</strong> ${orderOutput.status}</div>
                  <div><strong>${this.msg['field.customerName']}:</strong> ${orderOutput.customerName}</div>
                  <div><strong>${this.msg['field.customerPhone']}:</strong> ${orderOutput.customerPhone}</div>
                  <div><strong>${this.msg['field.createdAt']}:</strong> ${orderOutput.createdAt}</div>
                </div>
              `}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
