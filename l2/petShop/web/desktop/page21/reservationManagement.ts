/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/reservationManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { PetShopListReservationsOutputItem, PetShopUpdateReservationStatusInput } from '/_102049_/l2/petShop/web/shared/reservationManagement.js';
import { PetShopReservationManagementBase } from '/_102049_/l2/petShop/web/shared/reservationManagement.js';

@customElement('pet-shop--web--desktop--page21--reservation-management-102049')
export class PetShopDesktopPage21ReservationManagementPage extends PetShopReservationManagementBase {
  render() {
    const reservations: PetShopListReservationsOutputItem[] = Array.isArray(this.listReservationsData)
      ? this.listReservationsData
      : [];
    const selectedReservationId = this.updateReservationStatusReservationId || this.payInStoreReservationId;
    const selectedReservation = selectedReservationId
      ? reservations.find((item: PetShopListReservationsOutputItem) => item.reservationId === selectedReservationId)
      : undefined;

    const statuses = ['draft', 'active', 'ready', 'delivered', 'expired', 'cancelled'] as const;
    const reservationsByStatus = statuses.map((status) => ({
      status,
      items: reservations.filter((item: PetShopListReservationsOutputItem) => item.status === status),
    }));

    const listLoading = this.listReservationsState === 'loading';
    const updateLoading = this.updateReservationStatusState === 'loading';
    const payLoading = this.payInStoreState === 'loading';
    const expireLoading = this.expireReservationsState === 'loading';

    const updateFeedback =
      this.updateReservationStatusState === 'success'
        ? this.msg['action.updateReservationStatus.success']
        : this.updateReservationStatusState === 'error'
          ? this.updateReservationStatusError || this.msg['action.updateReservationStatus.error']
          : '';
    const payFeedback =
      this.payInStoreState === 'success'
        ? this.msg['action.payInStore.success']
        : this.payInStoreState === 'error'
          ? this.payInStoreError || this.msg['action.payInStore.error']
          : '';
    const expireFeedback =
      this.expireReservationsState === 'success'
        ? this.msg['action.expireReservations.success']
        : this.expireReservationsState === 'error'
          ? this.expireReservationsError || this.msg['action.expireReservations.error']
          : '';

    const paymentMethodValue = typeof this.payInStorePaymentMethod === 'string' ? this.payInStorePaymentMethod : '';
    const paymentAmountValue = this.payInStorePaymentAmount === '' ? '' : String(this.payInStorePaymentAmount);

    const selectReservation = (reservationId: string) => {
      this.setUpdateReservationStatusReservationId(reservationId);
      this.setPayInStoreReservationId(reservationId);
    };

    const allowedTransitions = (currentStatus: string | undefined): PetShopUpdateReservationStatusInput['status'][] => {
      switch (currentStatus) {
        case 'active':
          return ['ready', 'cancelled'];
        case 'ready':
          return ['delivered', 'cancelled'];
        case 'draft':
          return ['cancelled'];
        case 'expired':
        case 'delivered':
        case 'cancelled':
          return [];
        default:
          return ['ready', 'delivered', 'cancelled'];
      }
    };

    const transitionOptions = allowedTransitions(selectedReservation?.status);

    return html`
      <div
        class="min-h-screen bg-[var(--ds-page-bg,#f8fafc)] text-[var(--ds-text-default,#0f172a)] p-6 space-y-6"
      >
        <header class="space-y-1">
          <h1 class="text-2xl font-bold text-[var(--ds-text-strong,#0f172a)]">
            Gestão de Reservas (TODO i18n)
          </h1>
          <p class="text-sm text-[var(--ds-text-muted,#64748b)]">
            ${this.msg['section.queue.title']}
          </p>
        </header>

        <div class="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <section class="space-y-4">
            <div
              class="rounded-lg border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-surface-bg,#ffffff)] shadow-sm"
            >
              <div class="flex flex-wrap items-center justify-between gap-4 p-4">
                <div>
                  <h2 class="text-lg font-semibold text-[var(--ds-text-strong,#0f172a)]">
                    ${this.msg['section.queue.title']}
                  </h2>
                  <p class="text-sm text-[var(--ds-text-muted,#64748b)]">
                    ${this.msg['organism.reservationBoard.title']}
                  </p>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <label class="text-sm text-[var(--ds-text-muted,#64748b)]" for="statusFilter">
                    ${this.msg['filter.status']}
                  </label>
                  <select
                    id="statusFilter"
                    class="rounded-md border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-input-bg,#ffffff)] px-3 py-2 text-sm"
                    .value=${this.listReservationsStatus}
                    @change=${this.handleListReservationsStatusChange}
                  >
                    <option value="">--</option>
                    ${statuses.map(
                      (status) => html`<option value=${status}>${status}</option>`
                    )}
                  </select>
                  <button
                    class="rounded-md bg-[var(--ds-button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--ds-button-primary-text,#ffffff)] disabled:opacity-60"
                    @click=${this.handleListReservationsClick}
                    ?disabled=${listLoading}
                  >
                    ${this.msg['action.listReservations']}${listLoading ? '…' : ''}
                  </button>
                  <button
                    class="rounded-md bg-[var(--ds-button-danger-bg,#dc2626)] px-4 py-2 text-sm font-semibold text-[var(--ds-button-danger-text,#ffffff)] disabled:opacity-60"
                    @click=${this.handleExpireReservationsClick}
                    ?disabled=${expireLoading}
                  >
                    ${this.msg['action.expireReservations']}${expireLoading ? '…' : ''}
                  </button>
                </div>
              </div>

              ${expireFeedback
                ? html`
                    <div
                      class="mx-4 mb-4 rounded-md border border-[var(--ds-border-subtle,#e2e8f0)] bg-[var(--ds-status-info-bg,#eff6ff)] px-3 py-2 text-sm text-[var(--ds-status-info-text,#1d4ed8)]"
                      role="status"
                    >
                      ${expireFeedback}
                    </div>
                  `
                : html``}

              ${listLoading
                ? html`
                    <div class="p-4 text-sm text-[var(--ds-text-muted,#64748b)]">
                      Carregando reservas… (TODO i18n)
                    </div>
                  `
                : html`
                    <div class="grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
                      ${reservationsByStatus.map(
                        (lane) => html`
                          <div class="space-y-3">
                            <div class="flex items-center justify-between">
                              <span class="text-sm font-semibold uppercase text-[var(--ds-text-strong,#0f172a)]">
                                ${lane.status}
                              </span>
                              <span class="text-xs text-[var(--ds-text-muted,#64748b)]">
                                ${lane.items.length}
                              </span>
                            </div>
                            <div class="space-y-3">
                              ${lane.items.length === 0
                                ? html`
                                    <div
                                      class="rounded-md border border-dashed border-[var(--ds-border-subtle,#e2e8f0)] p-3 text-xs text-[var(--ds-text-muted,#64748b)]"
                                    >
                                      Nenhuma reserva neste status. (TODO i18n)
                                    </div>
                                  `
                                : lane.items.map((item: PetShopListReservationsOutputItem) => {
                                    const reservationId = item.reservationId ?? '';
                                    const selected = reservationId !== '' && reservationId === selectedReservationId;
                                    const cardClasses = selected
                                      ? 'border-[var(--ds-selected-border,#2563eb)] bg-[var(--ds-selected-bg,#eff6ff)]'
                                      : 'border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-surface-bg,#ffffff)]';
                                    const itemCount = Array.isArray(item.items) ? item.items.length : 0;
                                    return html`
                                      <div class="rounded-md border p-3 ${cardClasses}">
                                        <div class="space-y-2">
                                          <div class="flex items-center justify-between">
                                            <span class="text-sm font-semibold text-[var(--ds-text-strong,#0f172a)]">
                                              ${this.msg['field.reservationId']}: ${reservationId}
                                            </span>
                                            <span class="text-xs text-[var(--ds-text-muted,#64748b)]">
                                              ${this.msg['field.status']}: ${item.status ?? '—'}
                                            </span>
                                          </div>
                                          <div class="text-xs text-[var(--ds-text-muted,#64748b)] space-y-1">
                                            <div>${this.msg['field.customerId']}: ${item.customerId ?? '—'}</div>
                                            <div>${this.msg['field.expiresAt']}: ${item.expiresAt ?? '—'}</div>
                                            <div>${this.msg['field.readyAt']}: ${item.readyAt ?? '—'}</div>
                                            <div>${this.msg['field.deliveredAt']}: ${item.deliveredAt ?? '—'}</div>
                                            <div>${this.msg['field.items']}: ${itemCount}</div>
                                          </div>
                                          <button
                                            class="mt-2 w-full rounded-md border border-[var(--ds-button-secondary-border,#e2e8f0)] px-3 py-2 text-xs font-semibold text-[var(--ds-button-secondary-text,#0f172a)]"
                                            @click=${() => selectReservation(reservationId)}
                                          >
                                            ${this.msg['action.selectReservation']}
                                          </button>
                                        </div>
                                      </div>
                                    `;
                                  })}
                            </div>
                          </div>
                        `
                      )}
                    </div>
                  `}
            </div>
          </section>

          <section class="space-y-4">
            <div
              class="rounded-lg border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-surface-bg,#ffffff)] p-4"
            >
              <h2 class="text-lg font-semibold text-[var(--ds-text-strong,#0f172a)]">
                ${this.msg['section.detail.title']}
              </h2>
              <div class="mt-3 space-y-1 text-sm text-[var(--ds-text-muted,#64748b)]">
                <div>${this.msg['field.reservationId']}: ${selectedReservation?.reservationId ?? '—'}</div>
                <div>${this.msg['field.customerId']}: ${selectedReservation?.customerId ?? '—'}</div>
                <div>${this.msg['field.status']}: ${selectedReservation?.status ?? '—'}</div>
                <div>${this.msg['field.items']}: ${Array.isArray(selectedReservation?.items) ? selectedReservation?.items.length : 0}</div>
              </div>
            </div>

            <div
              class="rounded-lg border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-surface-bg,#ffffff)] p-4 space-y-4"
            >
              <div>
                <h3 class="text-base font-semibold text-[var(--ds-text-strong,#0f172a)]">
                  ${this.msg['organism.reservationTransitions.title']}
                </h3>
                <p class="text-sm text-[var(--ds-text-muted,#64748b)]">
                  ${this.msg['intent.updateReservationStatus.title']}
                </p>
              </div>

              <div class="grid gap-3">
                <label class="text-xs text-[var(--ds-text-muted,#64748b)]">
                  ${this.msg['field.reservationId']}
                </label>
                <div class="text-sm text-[var(--ds-text-strong,#0f172a)]">
                  ${selectedReservation?.reservationId ?? '—'}
                </div>

                <label class="text-xs text-[var(--ds-text-muted,#64748b)]" for="cancelReason">
                  ${this.msg['field.cancelReason']}
                </label>
                <input
                  id="cancelReason"
                  class="rounded-md border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.updateReservationStatusCancelReason}
                  @input=${this.handleUpdateReservationStatusCancelReasonChange}
                />

                <label class="text-xs text-[var(--ds-text-muted,#64748b)]" for="paymentId">
                  ${this.msg['field.paymentId']}
                </label>
                <input
                  id="paymentId"
                  class="rounded-md border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.updateReservationStatusPaymentId}
                  @input=${this.handleUpdateReservationStatusPaymentIdChange}
                />
              </div>

              <div class="flex flex-wrap gap-2">
                ${transitionOptions.length === 0
                  ? html`
                      <div class="text-sm text-[var(--ds-text-muted,#64748b)]">
                        Nenhuma transição disponível. (TODO i18n)
                      </div>
                    `
                  : transitionOptions.map((nextStatus) => {
                      const labelKey =
                        nextStatus === 'ready'
                          ? 'action.updateReservationStatus.ready'
                          : nextStatus === 'delivered'
                            ? 'action.updateReservationStatus.delivered'
                            : 'action.updateReservationStatus.cancelled';
                      const actionLabel = this.msg[labelKey];
                      return html`
                        <button
                          class="rounded-md bg-[var(--ds-button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--ds-button-primary-text,#ffffff)] disabled:opacity-60"
                          ?disabled=${updateLoading || !selectedReservationId}
                          @click=${() => {
                            if (selectedReservationId) {
                              this.setUpdateReservationStatusReservationId(selectedReservationId);
                              this.setUpdateReservationStatusStatus(nextStatus);
                              this.handleUpdateReservationStatusClick();
                            }
                          }}
                        >
                          ${actionLabel}${updateLoading ? '…' : ''}
                        </button>
                      `;
                    })}
              </div>

              ${updateFeedback
                ? html`
                    <div
                      class="rounded-md border border-[var(--ds-border-subtle,#e2e8f0)] bg-[var(--ds-status-info-bg,#eff6ff)] px-3 py-2 text-sm text-[var(--ds-status-info-text,#1d4ed8)]"
                      role="status"
                    >
                      ${updateFeedback}
                    </div>
                  `
                : html``}
            </div>

            <div
              class="rounded-lg border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-surface-bg,#ffffff)] p-4 space-y-4"
            >
              <div>
                <h3 class="text-base font-semibold text-[var(--ds-text-strong,#0f172a)]">
                  ${this.msg['organism.payInStore.title']}
                </h3>
                <p class="text-sm text-[var(--ds-text-muted,#64748b)]">
                  ${this.msg['intent.payInStore.title']}
                </p>
              </div>

              <div class="grid gap-3">
                <label class="text-xs text-[var(--ds-text-muted,#64748b)]">
                  ${this.msg['field.reservationId']}
                </label>
                <div class="text-sm text-[var(--ds-text-strong,#0f172a)]">
                  ${selectedReservation?.reservationId ?? '—'}
                </div>

                <label class="text-xs text-[var(--ds-text-muted,#64748b)]" for="paymentMethod">
                  ${this.msg['field.paymentMethod']}
                </label>
                <input
                  id="paymentMethod"
                  class="rounded-md border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${paymentMethodValue}
                  @input=${this.handlePayInStorePaymentMethodChange}
                />

                <label class="text-xs text-[var(--ds-text-muted,#64748b)]" for="paymentAmount">
                  ${this.msg['field.paymentAmount']}
                </label>
                <input
                  id="paymentAmount"
                  type="number"
                  class="rounded-md border border-[var(--ds-border-default,#e2e8f0)] bg-[var(--ds-input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${paymentAmountValue}
                  @input=${this.handlePayInStorePaymentAmountChange}
                />
              </div>

              <button
                class="rounded-md bg-[var(--ds-button-primary-bg,#2563eb)] px-4 py-2 text-sm font-semibold text-[var(--ds-button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${payLoading || !selectedReservationId}
                @click=${() => {
                  if (selectedReservationId) {
                    this.setPayInStoreReservationId(selectedReservationId);
                    this.handlePayInStoreClick();
                  }
                }}
              >
                ${this.msg['action.payInStore']}${payLoading ? '…' : ''}
              </button>

              ${payFeedback
                ? html`
                    <div
                      class="rounded-md border border-[var(--ds-border-subtle,#e2e8f0)] bg-[var(--ds-status-info-bg,#eff6ff)] px-3 py-2 text-sm text-[var(--ds-status-info-text,#1d4ed8)]"
                      role="status"
                    >
                      ${payFeedback}
                    </div>
                  `
                : html``}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
