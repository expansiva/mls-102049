/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/reservationManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopReservationManagementBase } from '/_102049_/l2/petShop/web/shared/reservationManagement.js';

@customElement('pet-shop--web--desktop--page11--reservation-management-102049')
export class PetShopDesktopPage11ReservationManagementPage extends PetShopReservationManagementBase {
  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">
            ${this.msg['page.reservationManagement.title']}
          </h1>

          <!-- Section: Queue -->
          <section
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.queue.title']}
            </h2>
            <div class="space-y-3">
              <h3 class="text-base font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['org.reservationQueue.title']}
              </h3>
              <div class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intention.queryReservations.title']}
              </div>

              <!-- Filter + Refresh toolbar -->
              <div class="flex items-end gap-3 flex-wrap">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]"
                    >${this.msg['filter.status']}</span
                  >
                  <select
                    .value=${this.listReservationsStatus}
                    @change=${this.handleListReservationsStatusChange}
                    class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  >
                    <option value="">—</option>
                    <option value="draft">draft</option>
                    <option value="active">active</option>
                    <option value="ready">ready</option>
                    <option value="delivered">delivered</option>
                    <option value="expired">expired</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                </label>
                <button
                  @click=${this.handleListReservationsClick}
                  ?disabled=${this.listReservationsState === 'loading'}
                  class="rounded border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-sm text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                >
                  ${this.listReservationsState === 'loading'
                    ? '…'
                    : this.msg['action.refresh']}
                </button>
              </div>

              <!-- Table / loading / empty -->
              ${this.listReservationsState === 'loading'
                ? html`
                    <div
                      class="py-8 text-center text-[var(--text-muted,#64748b)]"
                    >
                      <!-- TODO: no loading msg key in shared — placeholder -->
                      …
                    </div>
                  `
                : this.listReservationsData.length > 0
                  ? html`
                      <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                          <thead>
                            <tr
                              class="border-b border-[var(--border-default,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]"
                            >
                              <th class="py-2 px-2 font-medium">
                                ${this.msg['column.reservationId']}
                              </th>
                              <th class="py-2 px-2 font-medium">
                                ${this.msg['column.customerId']}
                              </th>
                              <th class="py-2 px-2 font-medium">
                                ${this.msg['column.status']}
                              </th>
                              <th class="py-2 px-2 font-medium">
                                ${this.msg['column.expiresAt']}
                              </th>
                              <th class="py-2 px-2 font-medium">
                                ${this.msg['column.readyAt']}
                              </th>
                              <th class="py-2 px-2 font-medium">
                                ${this.msg['column.items']}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            ${this.listReservationsData.map(
                              (item) => html`
                                <tr
                                  class="border-b border-[var(--border-subtle,#f1f5f9)]"
                                >
                                  <td
                                    class="py-2 px-2 text-[var(--text-default,#0f172a)]"
                                  >
                                    ${item.reservationId ?? '—'}
                                  </td>
                                  <td
                                    class="py-2 px-2 text-[var(--text-default,#0f172a)]"
                                  >
                                    ${item.customerId ?? '—'}
                                  </td>
                                  <td
                                    class="py-2 px-2 text-[var(--text-default,#0f172a)]"
                                  >
                                    ${item.status ?? '—'}
                                  </td>
                                  <td
                                    class="py-2 px-2 text-[var(--text-default,#0f172a)]"
                                  >
                                    ${item.expiresAt ?? '—'}
                                  </td>
                                  <td
                                    class="py-2 px-2 text-[var(--text-default,#0f172a)]"
                                  >
                                    ${item.readyAt ?? '—'}
                                  </td>
                                  <td
                                    class="py-2 px-2 text-[var(--text-default,#0f172a)]"
                                  >
                                    ${item.items != null
                                      ? Array.isArray(item.items)
                                        ? item.items.length
                                        : String(item.items)
                                      : '—'}
                                  </td>
                                </tr>
                              `
                            )}
                          </tbody>
                        </table>
                      </div>
                    `
                  : html`
                      <div
                        class="py-8 text-center text-[var(--text-muted,#64748b)]"
                      >
                        ${this.msg['section.queue.empty']}
                      </div>
                    `}
            </div>
          </section>

          <!-- Section: Execute -->
          <section
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.execute.title']}
            </h2>
            <div class="space-y-4">
              <h3 class="text-base font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['org.reservationTransitions.title']}
              </h3>

              <!-- Update Status Form -->
              <div
                class="space-y-3 rounded-lg border border-[var(--border-subtle,#f1f5f9)] p-3"
              >
                <div
                  class="text-sm font-semibold text-[var(--text-default,#0f172a)]"
                >
                  ${this.msg['intention.updateStatus.title']}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.reservationId']}</span
                    >
                    <input
                      type="text"
                      .value=${this.updateReservationStatusReservationId}
                      readonly
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-[var(--text-muted,#64748b)]"
                    />
                  </label>
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.status']}</span
                    >
                    <select
                      .value=${this.updateReservationStatusStatus}
                      @change=${this.handleUpdateReservationStatusStatusChange}
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    >
                      <option value="">—</option>
                      <option value="active">active</option>
                      <option value="ready">ready</option>
                      <option value="delivered">delivered</option>
                      <option value="cancelled">cancelled</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.cancelReason']}</span
                    >
                    <input
                      type="text"
                      .value=${this.updateReservationStatusCancelReason}
                      @input=${this
                        .handleUpdateReservationStatusCancelReasonChange}
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    />
                  </label>
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.paymentId']}</span
                    >
                    <input
                      type="text"
                      .value=${this.updateReservationStatusPaymentId}
                      @input=${this
                        .handleUpdateReservationStatusPaymentIdChange}
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    />
                  </label>
                </div>
                <button
                  @click=${this.handleUpdateReservationStatusClick}
                  ?disabled=${this.updateReservationStatusState === 'loading'}
                  class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                >
                  ${this.updateReservationStatusState === 'loading'
                    ? '…'
                    : this.msg['action.updateReservationStatus.submit']}
                </button>
                ${this.updateReservationStatusState === 'success'
                  ? html`
                      <div
                        class="rounded bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                      >
                        ${this.msg['action.updateReservationStatus.success']}
                      </div>
                    `
                  : this.updateReservationStatusState === 'error'
                    ? html`
                        <div
                          class="rounded bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#dc2626)]"
                        >
                          ${this.updateReservationStatusError ||
                          this.msg['action.updateReservationStatus.error']}
                        </div>
                      `
                    : null}
              </div>

              <!-- Pay In Store Form -->
              <div
                class="space-y-3 rounded-lg border border-[var(--border-subtle,#f1f5f9)] p-3"
              >
                <div
                  class="text-sm font-semibold text-[var(--text-default,#0f172a)]"
                >
                  ${this.msg['intention.payInStore.title']}
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.reservationId']}</span
                    >
                    <input
                      type="text"
                      .value=${this.payInStoreReservationId}
                      readonly
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-[var(--text-muted,#64748b)]"
                    />
                  </label>
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.paymentMethod']}</span
                    >
                    <select
                      .value=${String(this.payInStorePaymentMethod ?? '')}
                      @change=${this.handlePayInStorePaymentMethodChange}
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    >
                      <option value="">—</option>
                      <!-- TODO: payment method options from shared catalog -->
                      <option value="cash">cash</option>
                      <option value="card">card</option>
                      <option value="pix">pix</option>
                    </select>
                  </label>
                  <label class="flex flex-col gap-1">
                    <span class="text-sm text-[var(--text-muted,#64748b)]"
                      >${this.msg['field.paymentAmount']}</span
                    >
                    <input
                      type="number"
                      .value=${String(this.payInStorePaymentAmount)}
                      @input=${this.handlePayInStorePaymentAmountChange}
                      class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    />
                  </label>
                </div>
                <button
                  @click=${this.handlePayInStoreClick}
                  ?disabled=${this.payInStoreState === 'loading'}
                  class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                >
                  ${this.payInStoreState === 'loading'
                    ? '…'
                    : this.msg['action.payInStore.submit']}
                </button>
                ${this.payInStoreState === 'success'
                  ? html`
                      <div
                        class="rounded bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                      >
                        ${this.msg['action.payInStore.success']}
                      </div>
                    `
                  : this.payInStoreState === 'error'
                    ? html`
                        <div
                          class="rounded bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#dc2626)]"
                        >
                          ${this.payInStoreError ||
                          this.msg['action.payInStore.error']}
                        </div>
                      `
                    : null}
              </div>
            </div>
          </section>

          <!-- Section: Batch -->
          <section
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.batch.title']}
            </h2>
            <div class="space-y-3">
              <h3 class="text-base font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['org.batchOperations.title']}
              </h3>
              <div
                class="space-y-3 rounded-lg border border-[var(--border-subtle,#f1f5f9)] p-3"
              >
                <div
                  class="text-sm font-semibold text-[var(--text-default,#0f172a)]"
                >
                  ${this.msg['intention.expireReservations.title']}
                </div>
                <p class="text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intention.expireReservations.empty']}
                </p>
                <button
                  @click=${this.handleExpireReservationsClick}
                  ?disabled=${this.expireReservationsState === 'loading'}
                  class="rounded bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                >
                  ${this.expireReservationsState === 'loading'
                    ? '…'
                    : this.msg['action.expireReservations.submit']}
                </button>
                ${this.expireReservationsState === 'success'
                  ? html`
                      <div
                        class="rounded bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                      >
                        ${this.msg['action.expireReservations.success']}
                      </div>
                    `
                  : this.expireReservationsState === 'error'
                    ? html`
                        <div
                          class="rounded bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#dc2626)]"
                        >
                          ${this.expireReservationsError ||
                          this.msg['action.expireReservations.error']}
                        </div>
                      `
                    : null}
              </div>
            </div>
          </section>

          <!-- Section: Review -->
          <section
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-default,#0f172a)]">
              ${this.msg['section.review.title']}
            </h2>
            <div class="space-y-3">
              <h3 class="text-base font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['org.reviewSummary.title']}
              </h3>
              <div class="space-y-2">
                <div
                  class="text-sm font-semibold text-[var(--text-default,#0f172a)]"
                >
                  ${this.msg['intention.summary.title']}
                </div>
                <div class="space-y-2 text-sm">
                  ${this.updateReservationStatusOutput
                    ? html`
                        <div
                          class="rounded border border-[var(--border-subtle,#f1f5f9)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                        >
                          <span class="text-[var(--text-muted,#64748b)]"
                            >${this.msg['field.reservationId']}:</span
                          >
                          ${this.updateReservationStatusOutput.reservationId ??
                          '—'}
                          <span
                            class="text-[var(--text-muted,#64748b)] ml-2"
                            >${this.msg['field.status']}:</span
                          >
                          ${this.updateReservationStatusOutput.status ?? '—'}
                        </div>
                      `
                    : null}
                  ${this.payInStoreOutput
                    ? html`
                        <div
                          class="rounded border border-[var(--border-subtle,#f1f5f9)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                        >
                          <span class="text-[var(--text-muted,#64748b)]"
                            >${this.msg['field.paymentId']}:</span
                          >
                          ${this.payInStoreOutput.paymentId ?? '—'}
                        </div>
                      `
                    : null}
                  ${this.expireReservationsOutput
                    ? html`
                        <div
                          class="rounded border border-[var(--border-subtle,#f1f5f9)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                        >
                          <!-- TODO: no msg key for expiredCount label -->
                          <span class="text-[var(--text-muted,#64748b)]"
                            >expiredCount:</span
                          >
                          ${this.expireReservationsOutput.expiredCount ?? '—'}
                        </div>
                      `
                    : null}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
