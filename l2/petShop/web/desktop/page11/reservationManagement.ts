/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/reservationManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopReservationManagementBase } from '/_102049_/l2/petShop/web/shared/reservationManagement.js';

@customElement('pet-shop--web--desktop--page11--reservation-management-102049')
export class PetShopDesktopPage11ReservationManagementPage extends PetShopReservationManagementBase {
  render() {
    const reservations = this.browseReservationsQueryData ?? [];
    const isListLoading = this.browseReservationsQueryState === 'loading';
    const isUpdateLoading = this.updateReservationStatusCommandState === 'loading';
    const isPaymentLoading = this.processPaymentCommandState === 'loading';
    const statusLanes = ['pending', 'confirmed', 'fulfilled', 'cancelled', 'expired'];
    const grouped = statusLanes.map((lane) => ({
      status: lane,
      items: reservations.filter((item) => String(item.status ?? '').toLowerCase() === lane),
    }));
    const unmatched = reservations.filter(
      (item) => !statusLanes.includes(String(item.status ?? '').toLowerCase()),
    );

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.reservationList.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm min-w-[12rem] flex-1">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['filter.searchTerm']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="text"
                  .value=${this.browseReservationsQuerySearchTerm}
                  @input=${(event: Event) => this.handleBrowseReservationsQuerySearchTermChange(event)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm min-w-[10rem]">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['filter.statusFilter']}</span>
                <select
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.browseReservationsQueryStatusFilter}
                  @change=${(event: Event) => this.handleBrowseReservationsQueryStatusFilterChange(event)}
                >
                  <option value="">—</option>
                  <option value="pending">pending</option>
                  <option value="confirmed">confirmed</option>
                  <option value="fulfilled">fulfilled</option>
                  <option value="cancelled">cancelled</option>
                  <option value="expired">expired</option>
                </select>
              </label>
              <label class="flex flex-col gap-1 text-sm w-24">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['filter.page']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="number"
                  .value=${this.browseReservationsQueryPage}
                  @input=${(event: Event) => this.handleBrowseReservationsQueryPageChange(event)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm w-28">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['filter.pageSize']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="number"
                  .value=${this.browseReservationsQueryPageSize}
                  @input=${(event: Event) => this.handleBrowseReservationsQueryPageSizeChange(event)}
                />
              </label>
              <button
                type="button"
                class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${isListLoading}
                @click=${(event: Event) => this.handleBrowseReservationsQueryClick(event)}
              >
                ${isListLoading ? '…' : this.msg['action.refresh']}
              </button>
            </div>

            ${isListLoading
              ? html`
                  <div class="space-y-2" aria-busy="true">
                    <div class="h-20 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-20 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-20 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : reservations.length === 0
                ? html`
                    <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                      ${this.msg['empty.reservations']}
                    </p>
                  `
                : html`
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                      ${grouped.map(
                        (lane) => html`
                          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-2 min-h-[8rem]">
                            <div class="flex items-center justify-between gap-2">
                              <h2 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                                ${lane.status}
                              </h2>
                              <span class="text-xs px-2 py-0.5 rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">
                                ${lane.items.length}
                              </span>
                            </div>
                            ${lane.items.length === 0
                              ? html`<p class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['empty.reservations']}</p>`
                              : lane.items.map(
                                  (item) => html`
                                    <article class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 space-y-2 text-sm">
                                      <div class="font-medium text-[var(--text-strong,#0f172a)]">
                                        ${item.customerName ?? '—'}
                                      </div>
                                      <dl class="grid grid-cols-1 gap-1 text-xs text-[var(--text-muted,#64748b)]">
                                        <div class="flex justify-between gap-2">
                                          <dt>${this.msg['field.reservationId']}</dt>
                                          <dd class="text-[var(--text-default,#0f172a)]">${item.reservationId ?? '—'}</dd>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                          <dt>${this.msg['field.customerPhone']}</dt>
                                          <dd class="text-[var(--text-default,#0f172a)]">${item.customerPhone ?? '—'}</dd>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                          <dt>${this.msg['field.status']}</dt>
                                          <dd class="text-[var(--text-default,#0f172a)]">${item.status ?? '—'}</dd>
                                        </div>
                                        <div class="flex justify-between gap-2">
                                          <dt>${this.msg['field.expiresAt']}</dt>
                                          <dd class="text-[var(--text-default,#0f172a)]">${item.expiresAt ?? '—'}</dd>
                                        </div>
                                      </dl>
                                      <div class="flex flex-wrap gap-2 pt-1">
                                        <button
                                          type="button"
                                          class="rounded-md px-2 py-1 text-xs border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)]"
                                          @click=${() => {
                                            const id = item.reservationId != null ? String(item.reservationId) : '';
                                            this.setUpdateReservationStatusCommandReservationId(id);
                                          }}
                                        >
                                          ${this.msg['action.updateStatus']}
                                        </button>
                                        <button
                                          type="button"
                                          class="rounded-md px-2 py-1 text-xs border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)]"
                                          @click=${() => {
                                            const id = item.reservationId != null ? String(item.reservationId) : '';
                                            this.setProcessPaymentCommandReservationId(id);
                                          }}
                                        >
                                          ${this.msg['action.processPayment']}
                                        </button>
                                      </div>
                                    </article>
                                  `,
                                )}
                          </div>
                        `,
                      )}
                      ${unmatched.length > 0
                        ? html`
                            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-2 md:col-span-2 xl:col-span-3">
                              <h2 class="text-sm font-semibold text-[var(--text-muted,#64748b)]">other</h2>
                              ${unmatched.map(
                                (item) => html`
                                  <article class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 space-y-2 text-sm">
                                    <div class="font-medium">${item.customerName ?? '—'} · ${item.status ?? '—'}</div>
                                    <div class="text-xs text-[var(--text-muted,#64748b)]">${item.reservationId ?? '—'}</div>
                                    <div class="flex flex-wrap gap-2">
                                      <button
                                        type="button"
                                        class="rounded-md px-2 py-1 text-xs border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)]"
                                        @click=${() => {
                                          const id = item.reservationId != null ? String(item.reservationId) : '';
                                          this.setUpdateReservationStatusCommandReservationId(id);
                                        }}
                                      >
                                        ${this.msg['action.updateStatus']}
                                      </button>
                                      <button
                                        type="button"
                                        class="rounded-md px-2 py-1 text-xs border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)]"
                                        @click=${() => {
                                          const id = item.reservationId != null ? String(item.reservationId) : '';
                                          this.setProcessPaymentCommandReservationId(id);
                                        }}
                                      >
                                        ${this.msg['action.processPayment']}
                                      </button>
                                    </div>
                                  </article>
                                `,
                              )}
                            </div>
                          `
                        : null}
                    </div>
                  `}
          </section>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.updateReservationStatusPanel.title']}
              </h2>
              <form
                class="space-y-3"
                @submit=${(event: Event) => {
                  event.preventDefault();
                  this.handleUpdateReservationStatusCommandClick(event);
                }}
              >
                <input type="hidden" .value=${this.updateReservationStatusCommandReservationId} />
                <div class="text-xs text-[var(--text-muted,#64748b)]">
                  ${this.msg['field.reservationId']}:
                  <span class="text-[var(--text-default,#0f172a)]">${this.updateReservationStatusCommandReservationId || '—'}</span>
                </div>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.newStatus']}</span>
                  <select
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.updateReservationStatusCommandNewStatus}
                    @change=${(event: Event) => this.handleUpdateReservationStatusCommandNewStatusChange(event)}
                    required
                  >
                    <option value="">—</option>
                    <option value="confirmed">confirmed</option>
                    <option value="fulfilled">fulfilled</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.cancellationReason']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.updateReservationStatusCommandCancellationReason}
                    @input=${(event: Event) => this.handleUpdateReservationStatusCommandCancellationReasonChange(event)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.paymentId']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.updateReservationStatusCommandPaymentId}
                    @input=${(event: Event) => this.handleUpdateReservationStatusCommandPaymentIdChange(event)}
                  />
                </label>
                <button
                  type="submit"
                  class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${isUpdateLoading}
                >
                  ${isUpdateLoading ? '…' : this.msg['action.confirmUpdate']}
                </button>
              </form>
              ${this.updateReservationStatusCommandState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm flex items-start justify-between gap-3"
                      role="status"
                    >
                      <span>${this.msg['action.updateReservationStatusCommand.success']}</span>
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${() => {
                          this.updateReservationStatusCommandState = 'idle';
                        }}
                      >
                        ×
                      </button>
                    </div>
                  `
                : null}
              ${this.updateReservationStatusCommandState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm flex items-start justify-between gap-3"
                      role="alert"
                    >
                      <span
                        >${this.updateReservationStatusCommandError ||
                        this.msg['action.updateReservationStatusCommand.error']}</span
                      >
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${() => {
                          this.updateReservationStatusCommandState = 'idle';
                        }}
                      >
                        ×
                      </button>
                    </div>
                  `
                : null}
            </section>

            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.processPaymentPanel.title']}
              </h2>
              <form
                class="space-y-3"
                @submit=${(event: Event) => {
                  event.preventDefault();
                  this.handleProcessPaymentCommandClick(event);
                }}
              >
                <input type="hidden" .value=${this.processPaymentCommandReservationId} />
                <div class="text-xs text-[var(--text-muted,#64748b)]">
                  ${this.msg['field.reservationId']}:
                  <span class="text-[var(--text-default,#0f172a)]">${this.processPaymentCommandReservationId || '—'}</span>
                </div>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['field.method']}</span>
                  <select
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.processPaymentCommandMethod}
                    @change=${(event: Event) => this.handleProcessPaymentCommandMethodChange(event)}
                    required
                  >
                    <option value="">—</option>
                    <option value="cash">cash</option>
                    <option value="card">card</option>
                    <option value="pix">pix</option>
                  </select>
                </label>
                <button
                  type="submit"
                  class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${isPaymentLoading}
                >
                  ${isPaymentLoading ? '…' : this.msg['action.receivePayment']}
                </button>
              </form>
              ${this.processPaymentCommandState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm flex items-start justify-between gap-3"
                      role="status"
                    >
                      <span>${this.msg['action.processPaymentCommand.success']}</span>
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${() => {
                          this.processPaymentCommandState = 'idle';
                        }}
                      >
                        ×
                      </button>
                    </div>
                  `
                : null}
              ${this.processPaymentCommandState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm flex items-start justify-between gap-3"
                      role="alert"
                    >
                      <span
                        >${this.processPaymentCommandError || this.msg['action.processPaymentCommand.error']}</span
                      >
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${() => {
                          this.processPaymentCommandState = 'idle';
                        }}
                      >
                        ×
                      </button>
                    </div>
                  `
                : null}
            </section>
          </div>
        </div>
      </div>
    `;
  }
}
