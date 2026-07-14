/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/homePage.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopHomePageBase } from '/_102049_/l2/petShop/web/shared/homePage.js';
import type { PetShopBrowseHomePageOutputItem } from '/_102049_/l2/petShop/web/contracts/homePage.js';

@customElement('pet-shop--web--desktop--page11--home-page-102049')
export class PetShopDesktopPage11HomePagePage extends PetShopHomePageBase {
  render() {
    const items: PetShopBrowseHomePageOutputItem[] = this.browseHomePageData?.items ?? [];
    const isLoading: boolean = this.browseHomePageState === 'loading';
    const isError: boolean = this.browseHomePageState === 'error';
    const isSuccess: boolean = this.browseHomePageState === 'success';
    const isEmpty: boolean = items.length === 0;
    const firstItem: PetShopBrowseHomePageOutputItem | undefined = items.length > 0 ? items[0] : undefined;

    const fmtMoney = (v: number): string => `R$ ${v.toFixed(2)}`;

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['homePage.title']}
          </h1>

          ${isSuccess ? html`
            <div
              data-feedback
              class="flex items-center justify-between rounded-lg px-4 py-3 bg-[var(--success-color,#52C41A)] text-white"
            >
              <span>${this.msg['homePage.action.browseHomePage.success']}</span>
              <button
                @click=${(e: Event) => (e.target as HTMLElement).closest('[data-feedback]')?.remove()}
                class="ml-4 text-white opacity-80 hover:opacity-100 font-semibold"
                aria-label="Dismiss"
              >✕</button>
            </div>
          ` : null}

          ${isError ? html`
            <div
              data-feedback
              class="flex items-center justify-between rounded-lg px-4 py-3 bg-[var(--error-color,#FF4D4F)] text-white"
            >
              <span>${this.msg['homePage.action.browseHomePage.error']}</span>
              <button
                @click=${(e: Event) => (e.target as HTMLElement).closest('[data-feedback]')?.remove()}
                class="ml-4 text-white opacity-80 hover:opacity-100 font-semibold"
                aria-label="Dismiss"
              >✕</button>
            </div>
          ` : null}

          <div>
            <button
              class="px-4 py-2 rounded-lg text-white disabled:opacity-50 bg-[var(--active-color,#1890FF)]"
              ?disabled=${isLoading}
              @click=${(e: Event) => this.handleBrowseHomePageClick(e)}
            >
              ${isLoading
                ? html`<span class="inline-flex items-center gap-2">
                    <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ${this.msg['homePage.action.browseHomePage']}
                  </span>`
                : this.msg['homePage.action.browseHomePage']}
            </button>
          </div>

          ${isLoading ? html`
            <div class="space-y-4">
              <div class="h-48 rounded-lg bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>
              <div class="h-48 rounded-lg bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>
              <div class="h-48 rounded-lg bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>
            </div>
          ` : html`
            <!-- Section 1: Featured Products -->
            <section
              class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
            >
              <h2 class="text-xl font-semibold text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['homePage.section.featuredProducts']}
              </h2>

              ${isEmpty ? html`
                <p class="text-[var(--text-primary-color-lighter,#535353)]">
                  ${this.msg['homePage.productList.empty']}
                </p>
              ` : html`
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${items.map((item: PetShopBrowseHomePageOutputItem) => html`
                    <div
                      class="rounded-lg border border-[var(--grey-color,#E6E6E6)] overflow-hidden bg-[var(--bg-secondary-color-lighter,#F9F9F9)]"
                    >
                      ${item.imageUrl
                        ? html`<img src=${item.imageUrl} alt=${item.name} class="w-full h-40 object-cover" />`
                        : html`<div
                            class="w-full h-40 bg-[var(--grey-color,#E6E6E6)] flex items-center justify-center text-sm text-[var(--text-primary-color-lighter,#535353)]"
                          >${this.msg['homePage.product.imageUrl']}</div>`}
                      <div class="p-3 space-y-1">
                        <div class="flex items-center justify-between">
                          <h3 class="font-medium text-[var(--text-primary-color,#403f3f)]">${item.name}</h3>
                          ${item.featured
                            ? html`<span
                                class="text-xs px-2 py-0.5 rounded bg-[var(--active-color,#1890FF)] text-white"
                              >${this.msg['homePage.product.featured']}</span>`
                            : null}
                        </div>
                        <p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">${item.description}</p>
                        <div class="flex items-center justify-between pt-1">
                          <span class="font-semibold text-[var(--text-primary-color,#403f3f)]"
                            >${fmtMoney(item.price)}</span>
                          <span class="text-xs text-[var(--text-primary-color-lighter,#535353)]"
                            >${this.msg['homePage.product.status']}: ${item.status}</span>
                        </div>
                      </div>
                    </div>
                  `)}
                </div>
              `}

              ${!isEmpty && firstItem ? html`
                <div class="border-t border-[var(--grey-color,#E6E6E6)] pt-4">
                  <h3 class="text-lg font-medium text-[var(--text-primary-color,#403f3f)] mb-2">
                    ${this.msg['homePage.productDetail.title']}
                  </h3>
                  <div
                    class="flex gap-4 rounded-lg border border-[var(--grey-color,#E6E6E6)] p-4 bg-[var(--bg-secondary-color-lighter,#F9F9F9)]"
                  >
                    ${firstItem.imageUrl
                      ? html`<img
                          src=${firstItem.imageUrl}
                          alt=${firstItem.name}
                          class="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                        />`
                      : null}
                    <div class="space-y-1">
                      <p class="font-medium text-[var(--text-primary-color,#403f3f)]">
                        ${this.msg['homePage.productDetail.name']}: ${firstItem.name}
                      </p>
                      <p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">
                        ${this.msg['homePage.productDetail.description']}: ${firstItem.description}
                      </p>
                      <p class="font-semibold text-[var(--text-primary-color,#403f3f)]">
                        ${this.msg['homePage.productDetail.price']}: ${fmtMoney(firstItem.price)}
                      </p>
                    </div>
                  </div>
                </div>
              ` : null}
            </section>

            <!-- Section 2: Services -->
            <section
              class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
            >
              <h2 class="text-xl font-semibold text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['homePage.section.services']}
              </h2>

              ${isEmpty ? html`
                <p class="text-[var(--text-primary-color-lighter,#535353)]">
                  ${this.msg['homePage.servicesList.empty']}
                </p>
              ` : html`
                <div class="divide-y divide-[var(--grey-color,#E6E6E6)]">
                  ${items.map((item: PetShopBrowseHomePageOutputItem) => html`
                    <div class="py-3 flex items-start justify-between gap-4">
                      <div class="space-y-1">
                        <h3 class="font-medium text-[var(--text-primary-color,#403f3f)]">${item.name}</h3>
                        <p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">${item.description}</p>
                        <span class="text-xs text-[var(--text-primary-color-lighter,#535353)]">
                          ${this.msg['homePage.service.status']}: ${item.status}
                        </span>
                      </div>
                      <span
                        class="font-semibold text-[var(--text-primary-color,#403f3f)] whitespace-nowrap"
                      >${fmtMoney(item.price)}</span>
                    </div>
                  `)}
                </div>
              `}
            </section>

            <!-- Section 3: Adoptable Pets -->
            <section
              class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
            >
              <h2 class="text-xl font-semibold text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['homePage.section.adoptablePets']}
              </h2>

              ${isEmpty ? html`
                <p class="text-[var(--text-primary-color-lighter,#535353)]">
                  ${this.msg['homePage.petsGallery.empty']}
                </p>
              ` : html`
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  ${items.map((item: PetShopBrowseHomePageOutputItem) => html`
                    <div
                      class="rounded-lg border border-[var(--grey-color,#E6E6E6)] overflow-hidden bg-[var(--bg-secondary-color-lighter,#F9F9F9)]"
                    >
                      ${item.imageUrl
                        ? html`<img src=${item.imageUrl} alt=${item.name} class="w-full h-32 object-cover" />`
                        : html`<div
                            class="w-full h-32 bg-[var(--grey-color,#E6E6E6)] flex items-center justify-center text-sm text-[var(--text-primary-color-lighter,#535353)]"
                          >${this.msg['homePage.pet.photoUrl']}</div>`}
                      <div class="p-3 space-y-1">
                        <h3 class="font-medium text-[var(--text-primary-color,#403f3f)]">${item.name}</h3>
                        <p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">${item.description}</p>
                        <span class="text-xs text-[var(--text-primary-color-lighter,#535353)]">
                          ${this.msg['homePage.pet.status']}: ${item.status}
                        </span>
                      </div>
                    </div>
                  `)}
                </div>
              `}
            </section>
          `}
        </div>
      </div>
    `;
  }
}
