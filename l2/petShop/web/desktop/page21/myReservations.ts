/// <mls fileReference="_102049_/l2/petShop/web/desktop/page21/myReservations.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopMyReservationsBase } from '/_102049_/l2/petShop/web/shared/myReservations.js';
import type { PetShopViewMyReservationsOutputItem } from '/_102049_/l2/petShop/web/shared/myReservations.js';

@customElement('pet-shop--web--desktop--page21--my-reservations-102049')
export class PetShopDesktopPage21MyReservationsPage extends PetShopMyReservationsBase {
  render() {
    const reservations = this.viewMyReservationsData as PetShopViewMyReservationsOutputItem[];
    const isLoading = this.viewMyReservationsState === 'loading';
    const selectedId = this.cancelReservationReservationId;
    const selected: PetShopViewMyReservationsOutputItem | null =
      reservations.find((r: PetShopViewMyReservationsOutputItem) => r.reservationId === selectedId) ?? null;
    const canCancel = selected !== null && (selected.status === 'active' || selected.status === 'ready');
    const cancelLoading = this.cancelReservationState === 'loading';
    const cancelSuccess = this.cancelReservationState === 'success';
    const cancelError = this.cancelReservationState === 'error';
    const createLoading = this.createReservationState === 'loading';
    const createSuccess = this.createReservationState === 'success';
    const createError = this.createReservationState === 'error';

    const formatDate = (value: string | null | undefined): string => {
      if (!value) return '—';
      try {
        return new Date(value).toLocaleDateString('pt-BR', {
          day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',
        });
      } catch {
        return value;
      }
    };

    const statusBadgeClass = (status: string): string => {
      switch (status) {
        case 'active':
          return 'bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0369a1)]';
        case 'ready':
          return 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#15803d)]';
        case 'delivered':
          return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#64748b)]';
        case 'expired':
          return 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#b45309)]';
        case 'cancelled':
          return 'bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#dc2626)]';
        default:
          return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#64748b)]';
      }
    };

    const itemCount = (r: PetShopViewMyReservationsOutputItem): number => {
      const items = r.items;
      if (Array.isArray(items)) return items.length;
      return 0;
    };

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] p-4 md:p-6">
        <h1 class="text-[var(--font-size-24,1.5rem)] font-bold text-[var(--text-strong,#0f172a)] mb-6">
          ${this.msg['page.myReservations.title']}
        </h1>

        <!-- Section: Reservations (master-detail) -->
        <section class="mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-[var(--font-size-20,1.25rem)] font-semibold text-[var(--text-default,#334155)]">
              ${this.msg['section.reservations.title']}
            </h2>
            <button
              class="px-4 py-2 rounded-lg bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#334155)] border border-[var(--button-secondary-border,#e2e8f0)] text-sm font-medium hover:bg-[var(--surface-alt-bg,#f8fafc)] transition-[var(--transition-fast,150ms)]"
              @click=${this.handleViewMyReservationsClick}
            >
              ${this.msg['action.viewMyReservations.label']}
            </button>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <!-- Master: Reservation list -->
            <div class="lg:col-span-2">
              <div class="bg-[var(--surface-bg,#ffffff)] rounded-lg border border-[var(--border-default,#e2e8f0)] p-4">
                <h3 class="text-sm font-semibold text-[var(--text-muted,#64748b)] mb-3">
                  ${this.msg['organism.reservationList.title']}
                </h3>

                ${isLoading
                  ? html`<div class="space-y-3">
                      ${[1, 2, 3].map(() => html`
                        <div class="h-20 rounded-lg bg-[var(--surface-alt-bg,#f8fafc)] animate-pulse"></div>
                      `)}
                    </div>`
                  : reservations.length === 0
                    ? html`<p class="text-[var(--text-muted,#64748b)] text-sm py-8 text-center">
                        ${this.msg['empty.reservations']}
                      </p>`
                    : html`<div class="space-y-2">
                        ${reservations.map((r: PetShopViewMyReservationsOutputItem) => {
                          const isSelected = r.reservationId === selectedId;
                          const isCancelable = r.status === 'active' || r.status === 'ready';
                          return html`
                            <div
                              class="p-3 rounded-lg border cursor-pointer transition-[var(--transition-fast,150ms)] ${isSelected
                                ? 'border-[var(--selected-border,#3b82f6)] bg-[var(--selected-bg,#eff6ff)]'
                                : 'border-[var(--border-subtle,#f1f5f9)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                              @click=${() => this.setCancelReservationReservationId(r.reservationId)}
                            >
                              <div class="flex items-center justify-between gap-3">
                                <div class="flex-1 min-w-0">
                                  <div class="flex items-center gap-2 mb-1">
                                    <span class="text-sm font-medium text-[var(--text-strong,#0f172a)] truncate">
                                      ${this.msg['column.reservationId.label']}: ${r.reservationId}
                                    </span>
                                    <span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusBadgeClass(r.status)}">
                                      ${r.status}
                                    </span>
                                  </div>
                                  <div class="flex items-center gap-4 text-xs text-[var(--text-muted,#64748b)]">
                                    <span>${this.msg['column.expiresAt.label']}: ${formatDate(r.expiresAt)}</span>
                                    <span>${this.msg['column.items.label']}: ${itemCount(r)}</span>
                                  </div>
                                </div>
                                ${isCancelable
                                  ? html`<span class="text-xs text-[var(--status-warning-text,#b45309)] font-medium shrink-0">
                                      ${this.msg['action.selectForCancel.label']}
                                    </span>`
                                  : null}
                              </div>
                            </div>
                          `;
                        })}
                      </div>`}
              </div>
            </div>

            <!-- Detail: Cancel panel (contextual-transition-actions) -->
            <div class="lg:col-span-1">
              <div class="bg-[var(--surface-bg,#ffffff)] rounded-lg border border-[var(--border-default,#e2e8f0)] p-4 sticky top-4">
                <h3 class="text-sm font-semibold text-[var(--text-muted,#64748b)] mb-3">
                  ${this.msg['intention.cancelReservation.title']}
                </h3>

                ${selected === null
                  ? html`<p class="text-[var(--text-muted,#64748b)] text-sm py-8 text-center">
                      ${this.msg['empty.cancelContext']}
                    </p>`
                  : html`
                      <div class="space-y-3">
                        <!-- Summary-first: key details of selected reservation -->
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between">
                            <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.reservationId.label']}</span>
                            <span class="font-medium text-[var(--text-strong,#0f172a)]">${selected.reservationId}</span>
                          </div>
                          <div class="flex justify-between items-center">
                            <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.status.label']}</span>
                            <span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusBadgeClass(selected.status)}">
                              ${selected.status}
                            </span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.expiresAt.label']}</span>
                            <span class="font-medium text-[var(--text-default,#334155)]">${formatDate(selected.expiresAt)}</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.createdAt.label']}</span>
                            <span class="font-medium text-[var(--text-default,#334155)]">${formatDate(selected.createdAt)}</span>
                          </div>
                          ${selected.confirmedAt
                            ? html`<div class="flex justify-between">
                                <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.confirmedAt.label']}</span>
                                <span class="font-medium text-[var(--text-default,#334155)]">${formatDate(selected.confirmedAt)}</span>
                              </div>`
                            : null}
                          ${selected.readyAt
                            ? html`<div class="flex justify-between">
                                <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.readyAt.label']}</span>
                                <span class="font-medium text-[var(--text-default,#334155)]">${formatDate(selected.readyAt)}</span>
                              </div>`
                            : null}
                          <div class="flex justify-between">
                            <span class="text-[var(--text-muted,#64748b)]">${this.msg['column.items.label']}</span>
                            <span class="font-medium text-[var(--text-default,#334155)]">${itemCount(selected)}</span>
                          </div>
                        </div>

                        <!-- Contextual cancel action — only for active/ready reservations -->
                        ${canCancel
                          ? html`
                              <div class="border-t border-[var(--border-subtle,#f1f5f9)] pt-3 space-y-3">
                                <label class="block">
                                  <span class="text-xs font-medium text-[var(--text-muted,#64748b)] mb-1 block">
                                    ${this.msg['field.cancelReason.label']}
                                  </span>
                                  <textarea
                                    class="w-full px-3 py-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-sm text-[var(--text-default,#334155)] focus:outline-none focus:border-[var(--focus-ring,#3b82f6)] resize-y min-h-[60px]"
                                    .value=${this.cancelReservationCancelReason}
                                    @input=${this.handleCancelReservationCancelReasonChange}
                                    ?disabled=${cancelLoading}
                                  ></textarea>
                                </label>
                                <button
                                  class="w-full px-4 py-2 rounded-lg bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] text-sm font-medium transition-[var(--transition-fast,150ms)] disabled:opacity-50 disabled:cursor-not-allowed"
                                  @click=${this.handleCancelReservationClick}
                                  ?disabled=${cancelLoading}
                                >
                                  ${cancelLoading ? this.msg['action.cancelReservation.label'] + '…' : this.msg['action.cancelReservation.label']}
                                </button>
                              </div>
                            `
                          : html`<div class="border-t border-[var(--border-subtle,#f1f5f9)] pt-3">
                              <p class="text-xs text-[var(--text-muted,#64748b)]">
                                <!-- TODO: cancel only available for active/ready reservations -->
                              </p>
                            </div>`}

                        <!-- Dismissible feedback -->
                        ${cancelSuccess
                          ? html`<div class="p-3 rounded-lg bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#15803d)] text-sm">
                              ${this.msg['action.cancelReservation.success']}
                            </div>`
                          : null}
                        ${cancelError
                          ? html`<div class="p-3 rounded-lg bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#dc2626)] text-sm">
                              ${this.cancelReservationError || this.msg['action.cancelReservation.error']}
                            </div>`
                          : null}
                      </div>
                    `}
              </div>
            </div>
          </div>
        </section>

        <!-- Section: Create Reservation -->
        <section>
          <h2 class="text-[var(--font-size-20,1.25rem)] font-semibold text-[var(--text-default,#334155)] mb-4">
            ${this.msg['section.createReservation.title']}
          </h2>
          <div class="bg-[var(--surface-bg,#ffffff)] rounded-lg border border-[var(--border-default,#e2e8f0)] p-4 max-w-2xl">
            <h3 class="text-sm font-semibold text-[var(--text-muted,#64748b)] mb-3">
              ${this.msg['organism.createForm.title']}
            </h3>

            <div class="space-y-4">
              <label class="block">
                <span class="text-sm font-medium text-[var(--text-default,#334155)] mb-1 block">
                  ${this.msg['field.items.label']}
                </span>
                <textarea
                  class="w-full px-3 py-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-sm text-[var(--text-default,#334155)] focus:outline-none focus:border-[var(--focus-ring,#3b82f6)] resize-y min-h-[80px]"
                  .value=${this.createReservationItems}
                  @input=${this.handleCreateReservationItemsChange}
                  ?disabled=${createLoading}
                  placeholder=${this.msg['empty.createForm']}
                ></textarea>
              </label>

              <button
                class="px-4 py-2 rounded-lg bg-[var(--button-primary-bg,#3b82f6)] text-[var(--button-primary-text,#ffffff)] text-sm font-medium transition-[var(--transition-fast,150ms)] disabled:opacity-50 disabled:cursor-not-allowed"
                @click=${this.handleCreateReservationClick}
                ?disabled=${createLoading}
              >
                ${createLoading ? this.msg['action.createReservation.label'] + '…' : this.msg['action.createReservation.label']}
              </button>

              <!-- Dismissible feedback -->
              ${createSuccess
                ? html`<div class="p-3 rounded-lg bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#15803d)] text-sm">
                    ${this.msg['action.createReservation.success']}
                  </div>`
                : null}
              ${createError
                ? html`<div class="p-3 rounded-lg bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#dc2626)] text-sm">
                    ${this.createReservationError || this.msg['action.createReservation.error']}
                  </div>`
                : null}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
