/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/serviceBooking.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopServiceBookingBase } from '/_102049_/l2/petShop/web/shared/serviceBooking.js';

@customElement('pet-shop--web--desktop--page11--service-booking-102049')
export class PetShopDesktopPage11ServiceBookingPage extends PetShopServiceBookingBase {
  render() {
    const catalogItems = this.browseServiceCatalogData?.items ?? [];
    const catalogLoading = this.browseServiceCatalogState === 'loading';
    const catalogEmpty = catalogItems.length === 0;
    const bookingLoading = this.createServiceBookingState === 'loading';
    const bookingSuccess = this.createServiceBookingState === 'success';
    const bookingError = this.createServiceBookingState === 'error';
    const output = this.createServiceBookingOutput;

    return html`
      <div class="min-h-full bg-[var(--ds-color-surface,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Page title -->
          <h1 class="text-2xl font-bold text-[var(--ds-color-text,#0f172a)]">
            ${this.msg['page.title']}
          </h1>

          <!-- Section: Catalog -->
          <section class="rounded-lg border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] p-4 space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-[var(--ds-color-text,#0f172a)]">
                ${this.msg['section.catalog.title']}
              </h2>
              <button
                type="button"
                class="px-3 py-1.5 text-sm rounded-md border border-[var(--ds-color-border,#e2e8f0)] text-[var(--ds-color-text,#0f172a)] hover:bg-[var(--ds-color-surface-hover,#f2f2f2)] disabled:opacity-50"
                ?disabled=${catalogLoading}
                @click=${(e: Event) => this.handleBrowseServiceCatalogClick(e)}
              >
                ${catalogLoading ? '...' : this.msg['action.browseServiceCatalog.label']}
              </button>
            </div>

            ${catalogLoading
              ? html`<div class="space-y-2">
                  ${[0, 1, 2].map(() => html`
                    <div class="h-16 rounded-md bg-[var(--ds-color-surface-hover,#f2f2f2)] animate-pulse"></div>
                  `)}
                </div>`
              : catalogEmpty
                ? html`<p class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">
                    ${this.msg['section.catalog.empty']}
                  </p>`
                : html`<div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-[var(--ds-color-border,#e2e8f0)] text-left text-[var(--ds-color-text-secondary,#64748b)]">
                          <th class="py-2 pr-4 font-medium">${this.msg['column.name.label']}</th>
                          <th class="py-2 pr-4 font-medium">${this.msg['column.description.label']}</th>
                          <th class="py-2 pr-4 font-medium">${this.msg['column.estimatedDurationMinutes.label']}</th>
                          <th class="py-2 pr-4 font-medium">${this.msg['column.price.label']}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${catalogItems.map((item) => html`
                          <tr class="border-b border-[var(--ds-color-border,#e2e8f0)]">
                            <td class="py-2 pr-4 text-[var(--ds-color-text,#0f172a)]">${item.name}</td>
                            <td class="py-2 pr-4 text-[var(--ds-color-text-secondary,#64748b)]">${item.description}</td>
                            <td class="py-2 pr-4 text-[var(--ds-color-text,#0f172a)]">${item.estimatedDurationMinutes} min</td>
                            <td class="py-2 pr-4 text-[var(--ds-color-text,#0f172a)]">R$ ${item.price.toFixed(2)}</td>
                          </tr>
                        `)}
                      </tbody>
                    </table>
                  </div>`}
          </section>

          <!-- Section: Booking form -->
          <section class="rounded-lg border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--ds-color-text,#0f172a)]">
              ${this.msg['section.booking.title']}
            </h2>

            ${catalogEmpty && !catalogLoading
              ? html`<p class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">
                  ${this.msg['section.booking.empty']}
                </p>`
              : html`<form class="space-y-4" @submit=${(e: Event) => { e.preventDefault(); this.handleCreateServiceBookingClick(e); }}>
                  <!-- Service select (not a text field — technical id) -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-[var(--ds-color-text,#0f172a)]" for="fld_serviceId">
                      ${this.msg['field.serviceId.label']} <span class="text-[var(--ds-color-error,#FF4D4F)]">*</span>
                    </label>
                    <select
                      id="fld_serviceId"
                      class="w-full px-3 py-2 rounded-md border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] text-[var(--ds-color-text,#0f172a)] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-active,#1890FF)]"
                      .value=${this.createServiceBookingServiceId}
                      @change=${(e: Event) => this.handleCreateServiceBookingServiceIdChange(e)}
                      ?disabled=${bookingLoading}
                    >
                      <option value="">--</option>
                      ${catalogItems.map((item) => html`
                        <option value=${item.serviceId} ?selected=${this.createServiceBookingServiceId === item.serviceId}>
                          ${item.name} — R$ ${item.price.toFixed(2)}
                        </option>
                      `)}
                    </select>
                  </div>

                  <!-- Customer name -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-[var(--ds-color-text,#0f172a)]" for="fld_customerName">
                      ${this.msg['field.customerName.label']} <span class="text-[var(--ds-color-error,#FF4D4F)]">*</span>
                    </label>
                    <input
                      id="fld_customerName"
                      type="text"
                      class="w-full px-3 py-2 rounded-md border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] text-[var(--ds-color-text,#0f172a)] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-active,#1890FF)]"
                      .value=${this.createServiceBookingCustomerName}
                      @input=${(e: Event) => this.handleCreateServiceBookingCustomerNameChange(e)}
                      ?disabled=${bookingLoading}
                    />
                  </div>

                  <!-- Customer phone -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-[var(--ds-color-text,#0f172a)]" for="fld_customerPhone">
                      ${this.msg['field.customerPhone.label']} <span class="text-[var(--ds-color-error,#FF4D4F)]">*</span>
                    </label>
                    <input
                      id="fld_customerPhone"
                      type="tel"
                      class="w-full px-3 py-2 rounded-md border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] text-[var(--ds-color-text,#0f172a)] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-active,#1890FF)]"
                      .value=${this.createServiceBookingCustomerPhone}
                      @input=${(e: Event) => this.handleCreateServiceBookingCustomerPhoneChange(e)}
                      ?disabled=${bookingLoading}
                    />
                  </div>

                  <!-- Booking date -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-[var(--ds-color-text,#0f172a)]" for="fld_bookingDate">
                      ${this.msg['field.bookingDate.label']} <span class="text-[var(--ds-color-error,#FF4D4F)]">*</span>
                    </label>
                    <input
                      id="fld_bookingDate"
                      type="date"
                      class="w-full px-3 py-2 rounded-md border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] text-[var(--ds-color-text,#0f172a)] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-active,#1890FF)]"
                      .value=${this.createServiceBookingBookingDate}
                      @input=${(e: Event) => this.handleCreateServiceBookingBookingDateChange(e)}
                      ?disabled=${bookingLoading}
                    />
                  </div>

                  <!-- Booking time -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-[var(--ds-color-text,#0f172a)]" for="fld_bookingTime">
                      ${this.msg['field.bookingTime.label']} <span class="text-[var(--ds-color-error,#FF4D4F)]">*</span>
                    </label>
                    <input
                      id="fld_bookingTime"
                      type="time"
                      class="w-full px-3 py-2 rounded-md border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] text-[var(--ds-color-text,#0f172a)] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-active,#1890FF)]"
                      .value=${this.createServiceBookingBookingTime}
                      @input=${(e: Event) => this.handleCreateServiceBookingBookingTimeChange(e)}
                      ?disabled=${bookingLoading}
                    />
                  </div>

                  <!-- Notes -->
                  <div class="space-y-1">
                    <label class="block text-sm font-medium text-[var(--ds-color-text,#0f172a)]" for="fld_notes">
                      ${this.msg['field.notes.label']}
                    </label>
                    <textarea
                      id="fld_notes"
                      rows="3"
                      class="w-full px-3 py-2 rounded-md border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] text-[var(--ds-color-text,#0f172a)] focus:outline-none focus:ring-1 focus:ring-[var(--ds-color-active,#1890FF)]"
                      .value=${this.createServiceBookingNotes}
                      @input=${(e: Event) => this.handleCreateServiceBookingNotesChange(e)}
                      ?disabled=${bookingLoading}
                    ></textarea>
                  </div>

                  <!-- Submit button -->
                  <div class="flex items-center gap-3">
                    <button
                      type="submit"
                      class="px-4 py-2 rounded-md bg-[var(--ds-color-active,#1890FF)] text-white font-medium hover:bg-[var(--ds-color-active-hover,#1a99ff)] disabled:opacity-50"
                      ?disabled=${bookingLoading}
                    >
                      ${bookingLoading ? '...' : this.msg['action.createServiceBooking.label']}
                    </button>
                  </div>
                </form>`}

            <!-- Feedback: success -->
            ${bookingSuccess
              ? html`<div class="flex items-start justify-between rounded-md p-3 bg-[var(--ds-color-success-bg,rgba(82,196,26,0.1))] border border-[var(--ds-color-success,#52C41A)]">
                  <p class="text-sm text-[var(--ds-color-success,#52C41A)]">
                    ${this.msg['action.createServiceBooking.success']}
                  </p>
                  <button
                    type="button"
                    class="text-sm text-[var(--ds-color-text-secondary,#64748b)] hover:text-[var(--ds-color-text,#0f172a)]"
                    @click=${() => { this.createServiceBookingState = 'idle'; this.requestUpdate(); }}
                  >×</button>
                </div>`
              : null}

            <!-- Feedback: error -->
            ${bookingError
              ? html`<div class="flex items-start justify-between rounded-md p-3 bg-[var(--ds-color-error-bg,rgba(255,77,79,0.1))] border border-[var(--ds-color-error,#FF4D4F)]">
                  <p class="text-sm text-[var(--ds-color-error,#FF4D4F)]">
                    ${this.createServiceBookingError || this.msg['action.createServiceBooking.error']}
                  </p>
                  <button
                    type="button"
                    class="text-sm text-[var(--ds-color-text-secondary,#64748b)] hover:text-[var(--ds-color-text,#0f172a)]"
                    @click=${() => { this.createServiceBookingState = 'idle'; this.createServiceBookingError = ''; this.requestUpdate(); }}
                  >×</button>
                </div>`
              : null}
          </section>

          <!-- Section: Confirmation summary -->
          <section class="rounded-lg border border-[var(--ds-color-border,#e2e8f0)] bg-[var(--ds-color-surface,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--ds-color-text,#0f172a)]">
              ${this.msg['section.confirmation.title']}
            </h2>

            ${output
              ? html`<dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <dt class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">${this.msg['field.serviceBookingId.label']}</dt>
                    <dd class="text-sm font-medium text-[var(--ds-color-text,#0f172a)]">${output.serviceBookingId}</dd>
                  </div>
                  <div class="space-y-1">
                    <dt class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">${this.msg['field.customerName.label']}</dt>
                    <dd class="text-sm font-medium text-[var(--ds-color-text,#0f172a)]">${output.customerName}</dd>
                  </div>
                  <div class="space-y-1">
                    <dt class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">${this.msg['field.bookingDate.label']}</dt>
                    <dd class="text-sm font-medium text-[var(--ds-color-text,#0f172a)]">${output.bookingDate}</dd>
                  </div>
                  <div class="space-y-1">
                    <dt class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">${this.msg['field.bookingTime.label']}</dt>
                    <dd class="text-sm font-medium text-[var(--ds-color-text,#0f172a)]">${output.bookingTime}</dd>
                  </div>
                  <div class="space-y-1">
                    <dt class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">${this.msg['field.status.label']}</dt>
                    <dd class="text-sm font-medium text-[var(--ds-color-text,#0f172a)]">${output.status}</dd>
                  </div>
                  <div class="space-y-1 sm:col-span-2">
                    <dt class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">${this.msg['summary.paymentNotice']}</dt>
                    <dd class="text-sm font-medium text-[var(--ds-color-text,#0f172a)]">${this.msg['summary.paymentNotice']}</dd>
                  </div>
                </dl>`
              : html`<p class="text-sm text-[var(--ds-color-text-secondary,#64748b)]">
                  ${this.msg['section.confirmation.empty']}
                </p>`}
          </section>
        </div>
      </div>
    `;
  }
}
