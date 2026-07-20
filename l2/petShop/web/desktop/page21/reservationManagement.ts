/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/reservationManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopReservationManagementBase } from '/_102049_/l2/petShop/web/shared/reservationManagement.js';
import type { BrowseReservationsQueryOutput } from '/_102049_/l2/petShop/web/shared/reservationManagement.js';

@customElement('pet-shop--web--desktop--page21--reservation-management-102049')
export class PetShopDesktopPage21ReservationManagementPage extends PetShopReservationManagementBase {
  render() {
    const reservations: BrowseReservationsQueryOutput[] = Array.isArray(this.browseReservationsQueryData)
      ? this.browseReservationsQueryData
      : [];
    const isListLoading = this.browseReservationsQueryState === 'loading';
    const selectedId = this.updateReservationStatusCommandReservationId || this.processPaymentCommandReservationId || '';
    const selected: BrowseReservationsQueryOutput | undefined = reservations.find((item: BrowseReservationsQueryOutput) => {
      const id = String((item as { reservationId?: string }).reservationId ?? '');
      return id !== '' && id === selectedId;
    });
    const selectedStatus = selected
      ? String((selected as { status?: string }).status ?? '').toLowerCase()
      : '';

    const canConfirm = selectedStatus === 'pending' || selectedStatus === 'awaiting_confirmation' || selectedStatus === 'reserved';
    const canCancel =
      selectedStatus === 'pending' ||
      selectedStatus === 'awaiting_confirmation' ||
      selectedStatus === 'reserved' ||
      selectedStatus === 'confirmed';
    const canFulfill = selectedStatus === 'confirmed' || selectedStatus === 'paid' || selectedStatus === 'ready';
    const canPay =
      selectedStatus === 'confirmed' ||
      selectedStatus === 'ready' ||
      selectedStatus === 'awaiting_payment' ||
      selectedStatus === 'reserved';

    const statusLoading = this.updateReservationStatusCommandState === 'loading';
    const paymentLoading = this.processPaymentCommandState === 'loading';

    const selectReservation = (item: BrowseReservationsQueryOutput) => {
      const id = String((item as { reservationId?: string }).reservationId ?? '');
      this.setUpdateReservationStatusCommandReservationId(id);
      this.setProcessPaymentCommandReservationId(id);
    };

    const runTransition = (newStatus: string) => {
      this.setUpdateReservationStatusCommandNewStatus(newStatus);
      void this.updateReservationStatusCommand();
    };

    return html`
      <div class="min-h-full bg-[var(--ds-color-page-bg,#f8fafc)] text-[var(--ds-color-text-default,#0f172a)] p-6">
        <div class="mx-auto max-w-7xl flex flex-col gap-6">
          <header class="flex flex-col gap-1">
            <h1 class="text-2xl font-semibold text-[var(--ds-color-text-strong,#020617)]">
              ${this.msg['section.reservationList.title']}
            </h1>
            <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
              ${this.msg['reservation.queue.title']}
            </p>
          </header>

          <section class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm">
            <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div class="flex flex-1 flex-col gap-3 md:flex-row">
                <label class="flex flex-1 flex-col gap-1 text-sm">
                  <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.searchTerm']}</span>
                  <input
                    type="search"
                    class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                    .value=${this.browseReservationsQuerySearchTerm}
                    @input=${(event: Event) => this.handleBrowseReservationsQuerySearchTermChange(event)}
                    @change=${(event: Event) => this.handleBrowseReservationsQuerySearchTermChange(event)}
                  />
                </label>
                <label class="flex w-full flex-col gap-1 text-sm md:w-48">
                  <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['filter.statusFilter']}</span>
                  <select
                    class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                    .value=${this.browseReservationsQueryStatusFilter}
                    @change=${(event: Event) => this.handleBrowseReservationsQueryStatusFilterChange(event)}
                  >
                    <option value="">—</option>
                    <option value="pending">pending</option>
                    <option value="confirmed">confirmed</option>
                    <option value="cancelled">cancelled</option>
                    <option value="fulfilled">fulfilled</option>
                    <option value="expired">expired</option>
                  </select>
                </label>
              </div>
              <button
                type="button"
                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-secondary-bg,#f1f5f9)] text-[var(--ds-color-button-secondary-text,#0f172a)] border border-[var(--ds-color-button-secondary-border,#e2e8f0)] disabled:opacity-60"
                ?disabled=${isListLoading}
                @click=${(event: Event) => this.handleBrowseReservationsQueryClick(event)}
              >
                ${isListLoading ? '…' : this.msg['action.refresh']}
              </button>
            </div>
          </section>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <section class="md:col-span-2 rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] shadow-sm">
              <div class="border-b border-[var(--ds-color-border-subtle,#f1f5f9)] px-4 py-3">
                <h2 class="text-lg font-medium text-[var(--ds-color-text-strong,#020617)]">
                  ${this.msg['reservation.list.title']}
                </h2>
              </div>

              ${isListLoading
                ? html`
                    <div class="p-4 flex flex-col gap-3" aria-busy="true">
                      <div class="h-12 rounded-md bg-[var(--ds-color-surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-12 rounded-md bg-[var(--ds-color-surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-12 rounded-md bg-[var(--ds-color-surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : reservations.length === 0
                  ? html`
                      <p class="p-6 text-sm text-[var(--ds-color-text-muted,#64748b)]">
                        ${this.msg['reservation.list.empty']}
                      </p>
                    `
                  : html`
                      <ul class="divide-y divide-[var(--ds-color-border-subtle,#f1f5f9)]">
                        ${reservations.map((item: BrowseReservationsQueryOutput) => {
                          const row = item as {
                            reservationId?: string;
                            customerName?: string;
                            customerPhone?: string;
                            status?: string;
                            expiresAt?: string;
                            createdAt?: string;
                          };
                          const rowId = String(row.reservationId ?? '');
                          const isSelected = rowId !== '' && rowId === selectedId;
                          return html`
                            <li>
                              <button
                                type="button"
                                class="w-full text-left px-4 py-3 flex flex-col gap-1 transition-colors ${isSelected
                                  ? 'bg-[var(--ds-color-selected-bg,#e0f2fe)] border-l-4 border-[var(--ds-color-selected-border,#0284c7)]'
                                  : 'hover:bg-[var(--ds-color-surface-alt-bg,#f8fafc)] border-l-4 border-transparent'}"
                                @click=${() => selectReservation(item)}
                              >
                                <div class="flex items-start justify-between gap-3">
                                  <div class="min-w-0">
                                    <p class="font-medium truncate text-[var(--ds-color-text-strong,#020617)]">
                                      ${row.customerName ?? '—'}
                                    </p>
                                    <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
                                      ${this.msg['field.customerPhone']}: ${row.customerPhone ?? '—'}
                                    </p>
                                  </div>
                                  <span
                                    class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium bg-[var(--ds-color-status-neutral-bg,#f1f5f9)] text-[var(--ds-color-status-neutral-text,#334155)]"
                                  >
                                    ${row.status ?? '—'}
                                  </span>
                                </div>
                                <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--ds-color-text-muted,#64748b)]">
                                  <span>${this.msg['field.expiresAt']}: ${row.expiresAt ?? '—'}</span>
                                  <span>${this.msg['field.createdAt']}: ${row.createdAt ?? '—'}</span>
                                  <span>${this.msg['field.reservationId']}: ${rowId || '—'}</span>
                                </div>
                              </button>
                            </li>
                          `;
                        })}
                      </ul>
                    `}
            </section>

            <aside class="md:col-span-1 flex flex-col gap-4">
              <section class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm flex flex-col gap-4">
                <h2 class="text-lg font-medium text-[var(--ds-color-text-strong,#020617)]">
                  ${this.msg['reservation.transition.title']}
                </h2>

                ${!selected
                  ? html`
                      <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
                        ${this.msg['reservation.list.empty']}
                      </p>
                    `
                  : html`
                      <dl class="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.customerName']}</dt>
                          <dd class="font-medium">${(selected as { customerName?: string }).customerName ?? '—'}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.customerPhone']}</dt>
                          <dd>${(selected as { customerPhone?: string }).customerPhone ?? '—'}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.status']}</dt>
                          <dd>
                            <span
                              class="inline-block rounded-full px-2 py-0.5 text-xs font-medium bg-[var(--ds-color-status-info-bg,#e0f2fe)] text-[var(--ds-color-status-info-text,#075985)]"
                            >
                              ${(selected as { status?: string }).status ?? '—'}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.expiresAt']}</dt>
                          <dd>${(selected as { expiresAt?: string }).expiresAt ?? '—'}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.reservationId']}</dt>
                          <dd class="break-all">${selectedId}</dd>
                        </div>
                      </dl>

                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.cancellationReason']}</span>
                        <input
                          type="text"
                          class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateReservationStatusCommandCancellationReason}
                          @input=${(event: Event) => this.handleUpdateReservationStatusCommandCancellationReasonChange(event)}
                          @change=${(event: Event) => this.handleUpdateReservationStatusCommandCancellationReasonChange(event)}
                        />
                      </label>

                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.paymentId']}</span>
                        <input
                          type="text"
                          class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateReservationStatusCommandPaymentId}
                          @input=${(event: Event) => this.handleUpdateReservationStatusCommandPaymentIdChange(event)}
                          @change=${(event: Event) => this.handleUpdateReservationStatusCommandPaymentIdChange(event)}
                        />
                      </label>

                      <div class="flex flex-col gap-2">
                        ${canConfirm
                          ? html`
                              <button
                                type="button"
                                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-primary-bg,#2563eb)] text-[var(--ds-color-button-primary-text,#ffffff)] disabled:opacity-60"
                                ?disabled=${statusLoading}
                                @click=${() => runTransition('confirmed')}
                              >
                                ${statusLoading ? '…' : this.msg['action.confirmReservation']}
                              </button>
                            `
                          : null}
                        ${canFulfill
                          ? html`
                              <button
                                type="button"
                                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-primary-bg,#2563eb)] text-[var(--ds-color-button-primary-text,#ffffff)] disabled:opacity-60"
                                ?disabled=${statusLoading}
                                @click=${() => runTransition('fulfilled')}
                              >
                                ${statusLoading ? '…' : this.msg['action.fulfillReservation']}
                              </button>
                            `
                          : null}
                        ${canCancel
                          ? html`
                              <button
                                type="button"
                                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-danger-bg,#dc2626)] text-[var(--ds-color-button-danger-text,#ffffff)] disabled:opacity-60"
                                ?disabled=${statusLoading}
                                @click=${() => runTransition('cancelled')}
                              >
                                ${statusLoading ? '…' : this.msg['action.cancelReservation']}
                              </button>
                            `
                          : null}
                        ${!canConfirm && !canCancel && !canFulfill
                          ? html`
                              <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
                                ${(selected as { status?: string }).status ?? '—'}
                              </p>
                            `
                          : null}
                      </div>
                    `}

                ${this.updateReservationStatusCommandState === 'success'
                  ? html`
                      <div
                        class="rounded-md px-3 py-2 text-sm bg-[var(--ds-color-status-success-bg,#dcfce7)] text-[var(--ds-color-status-success-text,#166534)]"
                        role="status"
                      >
                        ${this.msg['action.updateReservationStatusCommand.success']}
                      </div>
                    `
                  : null}
                ${this.updateReservationStatusCommandState === 'error'
                  ? html`
                      <div
                        class="rounded-md px-3 py-2 text-sm bg-[var(--ds-color-status-error-bg,#fee2e2)] text-[var(--ds-color-status-error-text,#991b1b)]"
                        role="alert"
                      >
                        ${this.updateReservationStatusCommandError || this.msg['action.updateReservationStatusCommand.error']}
                      </div>
                    `
                  : null}
              </section>

              <section class="rounded-lg border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-surface-bg,#ffffff)] p-4 shadow-sm flex flex-col gap-4">
                <h2 class="text-lg font-medium text-[var(--ds-color-text-strong,#020617)]">
                  ${this.msg['reservation.payment.title']}
                </h2>

                ${!selected || !canPay
                  ? html`
                      <p class="text-sm text-[var(--ds-color-text-muted,#64748b)]">
                        ${!selected ? this.msg['reservation.list.empty'] : ((selected as { status?: string }).status ?? '—')}
                      </p>
                    `
                  : html`
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--ds-color-text-muted,#64748b)]">${this.msg['field.method']}</span>
                        <select
                          class="rounded-md border border-[var(--ds-color-border-default,#e2e8f0)] bg-[var(--ds-color-input-bg,#ffffff)] px-3 py-2"
                          .value=${this.processPaymentCommandMethod}
                          @change=${(event: Event) => this.handleProcessPaymentCommandMethodChange(event)}
                        >
                          <option value="">—</option>
                          <option value="cash">cash</option>
                          <option value="card">card</option>
                          <option value="pix">pix</option>
                          <option value="transfer">transfer</option>
                        </select>
                      </label>

                      <button
                        type="button"
                        class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--ds-color-button-primary-bg,#2563eb)] text-[var(--ds-color-button-primary-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${paymentLoading || !this.processPaymentCommandMethod}
                        @click=${(event: Event) => this.handleProcessPaymentCommandClick(event)}
                      >
                        ${paymentLoading ? '…' : this.msg['action.processPayment']}
                      </button>
                    `}

                ${this.processPaymentCommandState === 'success'
                  ? html`
                      <div
                        class="rounded-md px-3 py-2 text-sm bg-[var(--ds-color-status-success-bg,#dcfce7)] text-[var(--ds-color-status-success-text,#166534)]"
                        role="status"
                      >
                        ${this.msg['action.processPaymentCommand.success']}
                      </div>
                    `
                  : null}
                ${this.processPaymentCommandState === 'error'
                  ? html`
                      <div
                        class="rounded-md px-3 py-2 text-sm bg-[var(--ds-color-status-error-bg,#fee2e2)] text-[var(--ds-color-status-error-text,#991b1b)]"
                        role="alert"
                      >
                        ${this.processPaymentCommandError || this.msg['action.processPaymentCommand.error']}
                      </div>
                    `
                  : null}
              </section>
            </aside>
          </div>
        </div>
      </div>
    `;
  }
}
