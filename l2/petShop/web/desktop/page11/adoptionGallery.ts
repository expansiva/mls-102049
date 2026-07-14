/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/adoptionGallery.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopAdoptionGalleryBase } from '/_102049_/l2/petShop/web/shared/adoptionGallery.js';

@customElement('pet-shop--web--desktop--page11--adoption-gallery-102049')
export class PetShopDesktopPage11AdoptionGalleryPage extends PetShopAdoptionGalleryBase {
  render() {
    const browseItems = this.browseAdoptablePetsData?.items ?? [];
    const browseLoading = this.browseAdoptablePetsState === 'loading';
    const browseEmpty = !browseLoading && browseItems.length === 0;

    const detail = this.viewAdoptablePetDetailsData;
    const detailLoading = this.viewAdoptablePetDetailsState === 'loading';
    const hasDetail = detail !== null && detail !== undefined;

    const interestLoading = this.expressAdoptionInterestState === 'loading';
    const interestSuccess = this.expressAdoptionInterestState === 'success';
    const interestError = this.expressAdoptionInterestState === 'error';
    const hasSelectedPet = this.expressAdoptionInterestAdoptablePetId !== '';

    const output = this.expressAdoptionInterestOutput;
    const hasOutput = output !== null && output !== undefined;

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#0f172a)]">
            ${this.msg['adoptionGallery.section.title']}
          </h1>

          <!-- Browse Gallery -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-xl font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['adoptionGallery.browse.title']}
            </h2>
            ${browseLoading
              ? html`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  ${[0, 1, 2].map(
                    () => html`
                      <div
                        class="rounded-lg border border-[var(--grey-color,#e2e8f0)] p-4 animate-pulse"
                      >
                        <div
                          class="w-full h-48 bg-[var(--bg-secondary-color,#f1f5f9)] rounded mb-3"
                        ></div>
                        <div
                          class="h-4 bg-[var(--bg-secondary-color,#f1f5f9)] rounded mb-2"
                        ></div>
                        <div
                          class="h-4 bg-[var(--bg-secondary-color,#f1f5f9)] rounded w-1/2"
                        ></div>
                      </div>
                    `
                  )}
                </div>`
              : browseEmpty
                ? html`<p
                    class="text-[var(--text-primary-color,#0f172a)] py-8 text-center"
                  >
                    ${this.msg['adoptionGallery.browse.empty']}
                  </p>`
                : html`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${browseItems.map(
                      (pet) => html`
                        <div
                          class="rounded-lg border border-[var(--grey-color,#e2e8f0)] overflow-hidden bg-[var(--bg-primary-color,#ffffff)]"
                        >
                          <img
                            src="${pet.photoUrl}"
                            alt="${pet.name}"
                            class="w-full h-48 object-cover"
                          />
                          <div class="p-4 space-y-2">
                            <h3
                              class="font-semibold text-[var(--text-primary-color,#0f172a)]"
                            >
                              ${pet.name}
                            </h3>
                            <p class="text-sm text-[var(--text-primary-color,#0f172a)]">
                              ${this.msg['adoptionGallery.field.age']}: ${pet.age}
                            </p>
                            <p class="text-sm text-[var(--text-primary-color,#0f172a)]">
                              ${pet.description}
                            </p>
                            <button
                              type="button"
                              class="mt-2 w-full rounded px-4 py-2 text-sm font-medium text-white bg-[var(--text-secondary-color,#1C91CD)] hover:opacity-90"
                              @click=${(e: Event) => {
                                this.setViewAdoptablePetDetailsAdoptablePetId(
                                  pet.adoptablePetId
                                );
                                this.setExpressAdoptionInterestAdoptablePetId(
                                  pet.adoptablePetId
                                );
                                this.handleViewAdoptablePetDetailsClick(e);
                              }}
                            >
                              ${this.msg['adoptionGallery.action.viewDetails']}
                            </button>
                          </div>
                        </div>
                      `
                    )}
                  </div>`}
          </section>

          <!-- Pet Details -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-xl font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['adoptionGallery.details.title']}
            </h2>
            ${detailLoading
              ? html`<div class="animate-pulse space-y-3">
                  <div
                    class="w-full max-w-md h-64 bg-[var(--bg-secondary-color,#f1f5f9)] rounded"
                  ></div>
                  <div
                    class="h-4 bg-[var(--bg-secondary-color,#f1f5f9)] rounded w-1/3"
                  ></div>
                  <div
                    class="h-4 bg-[var(--bg-secondary-color,#f1f5f9)] rounded w-1/4"
                  ></div>
                  <div
                    class="h-4 bg-[var(--bg-secondary-color,#f1f5f9)] rounded"
                  ></div>
                </div>`
              : !hasDetail
                ? html`<p
                    class="text-[var(--text-primary-color,#0f172a)] py-8 text-center"
                  >
                    ${this.msg['adoptionGallery.details.empty']}
                  </p>`
                : html`<div class="space-y-4">
                    <img
                      src="${detail!.photoUrl}"
                      alt="${detail!.name}"
                      class="w-full max-w-md h-64 object-cover rounded-lg"
                    />
                    <div class="space-y-2">
                      <p class="text-[var(--text-primary-color,#0f172a)]">
                        <span class="font-semibold"
                          >${this.msg['adoptionGallery.field.name']}:</span
                        >
                        ${detail!.name}
                      </p>
                      <p class="text-[var(--text-primary-color,#0f172a)]">
                        <span class="font-semibold"
                          >${this.msg['adoptionGallery.field.age']}:</span
                        >
                        ${detail!.age}
                      </p>
                      <p class="text-[var(--text-primary-color,#0f172a)]">
                        <span class="font-semibold"
                          >${this.msg['adoptionGallery.field.description']}:</span
                        >
                        ${detail!.description}
                      </p>
                      <p class="text-[var(--text-primary-color,#0f172a)]">
                        <span class="font-semibold"
                          >${this.msg['adoptionGallery.field.status']}:</span
                        >
                        ${detail!.status}
                      </p>
                    </div>
                    <button
                      type="button"
                      class="rounded px-4 py-2 text-sm font-medium text-white bg-[var(--text-secondary-color,#1C91CD)] hover:opacity-90"
                      @click=${(e: Event) => {
                        this.setExpressAdoptionInterestAdoptablePetId(
                          this.viewAdoptablePetDetailsAdoptablePetId
                        );
                        this.handleExpressAdoptionInterestClick(e);
                      }}
                    >
                      ${this.msg['adoptionGallery.action.expressInterest']}
                    </button>
                  </div>`}
          </section>

          <!-- Interest Form -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-xl font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['adoptionGallery.interestForm.title']}
            </h2>
            ${!hasSelectedPet && !interestSuccess
              ? html`<p
                  class="text-[var(--text-primary-color,#0f172a)] py-4 text-center"
                >
                  ${this.msg['adoptionGallery.interestForm.empty']}
                </p>`
              : html`<form
                  class="space-y-4"
                  @submit=${(e: Event) => this.handleExpressAdoptionInterestClick(e)}
                >
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--text-primary-color,#0f172a)] mb-1"
                    >
                      ${this.msg['adoptionGallery.field.adoptablePetId']}
                    </label>
                    <div
                      class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-sm text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-secondary-color,#f8fafc)]"
                    >
                      ${this.expressAdoptionInterestAdoptablePetId}
                    </div>
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--text-primary-color,#0f172a)] mb-1"
                    >
                      ${this.msg['adoptionGallery.field.customerName']}
                    </label>
                    <input
                      type="text"
                      required
                      .value=${this.expressAdoptionInterestCustomerName}
                      @input=${(e: Event) =>
                        this.handleExpressAdoptionInterestCustomerNameChange(e)}
                      class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--text-primary-color,#0f172a)] mb-1"
                    >
                      ${this.msg['adoptionGallery.field.customerEmail']}
                    </label>
                    <input
                      type="email"
                      required
                      .value=${this.expressAdoptionInterestCustomerEmail}
                      @input=${(e: Event) =>
                        this.handleExpressAdoptionInterestCustomerEmailChange(e)}
                      class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                    />
                  </div>
                  <div>
                    <label
                      class="block text-sm font-medium text-[var(--text-primary-color,#0f172a)] mb-1"
                    >
                      ${this.msg['adoptionGallery.field.customerPhone']}
                    </label>
                    <input
                      type="tel"
                      .value=${this.expressAdoptionInterestCustomerPhone}
                      @input=${(e: Event) =>
                        this.handleExpressAdoptionInterestCustomerPhoneChange(e)}
                      class="w-full rounded border border-[var(--grey-color,#e2e8f0)] px-3 py-2 text-[var(--text-primary-color,#0f172a)] bg-[var(--bg-primary-color,#ffffff)]"
                    />
                  </div>
                  <button
                    type="submit"
                    ?disabled=${interestLoading}
                    class="rounded px-4 py-2 text-sm font-medium text-white bg-[var(--text-secondary-color,#1C91CD)] hover:opacity-90 disabled:opacity-50"
                  >
                    ${interestLoading
                      ? '...'
                      : this.msg['adoptionGallery.action.submitInterest']}
                  </button>
                </form>`}
            ${interestSuccess
              ? html`<div
                  class="rounded-lg border border-[var(--success-color,#52C41A)] p-4 flex items-start justify-between gap-4"
                >
                  <p class="text-sm text-[var(--text-primary-color,#0f172a)]">
                    ${this.msg['action.expressAdoptionInterest.success']}
                  </p>
                  <!-- TODO: no dismiss handler available in shared class -->
                </div>`
              : interestError
                ? html`<div
                    class="rounded-lg border border-[var(--error-color,#FF4D4F)] p-4 flex items-start justify-between gap-4"
                  >
                    <p class="text-sm text-[var(--error-color,#FF4D4F)]">
                      ${this.expressAdoptionInterestError ||
                      this.msg['action.expressAdoptionInterest.error']}
                    </p>
                    <!-- TODO: no dismiss handler available in shared class -->
                  </div>`
                : null}
          </section>

          <!-- Summary -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-xl font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['adoptionGallery.summary.title']}
            </h2>
            ${!hasOutput
              ? html`<p
                  class="text-[var(--text-primary-color,#0f172a)] py-4 text-center"
                >
                  ${this.msg['adoptionGallery.summary.empty']}
                </p>`
              : html`<dl class="space-y-2">
                  <div class="flex justify-between">
                    <dt
                      class="text-sm font-medium text-[var(--text-primary-color,#0f172a)]"
                    >
                      ${this.msg['adoptionGallery.field.adoptionInterestId']}
                    </dt>
                    <dd class="text-sm text-[var(--text-primary-color,#0f172a)]">
                      ${output!.adoptionInterestId}
                    </dd>
                  </div>
                  <div class="flex justify-between">
                    <dt
                      class="text-sm font-medium text-[var(--text-primary-color,#0f172a)]"
                    >
                      ${this.msg['adoptionGallery.field.interestStatus']}
                    </dt>
                    <dd class="text-sm text-[var(--text-primary-color,#0f172a)]">
                      ${output!.status}
                    </dd>
                  </div>
                  <div class="flex justify-between">
                    <dt
                      class="text-sm font-medium text-[var(--text-primary-color,#0f172a)]"
                    >
                      ${this.msg['adoptionGallery.field.customerName']}
                    </dt>
                    <dd class="text-sm text-[var(--text-primary-color,#0f172a)]">
                      ${output!.customerName}
                    </dd>
                  </div>
                  <div class="flex justify-between">
                    <dt
                      class="text-sm font-medium text-[var(--text-primary-color,#0f172a)]"
                    >
                      ${this.msg['adoptionGallery.field.createdAt']}
                    </dt>
                    <dd class="text-sm text-[var(--text-primary-color,#0f172a)]">
                      ${output!.createdAt}
                    </dd>
                  </div>
                </dl>`}
          </section>
        </div>
      </div>
    `;
  }
}
