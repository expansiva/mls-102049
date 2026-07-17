/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/myReservations.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopMyReservationsBase } from '/_102049_/l2/petShop/web/shared/myReservations.js';
import type { PetShopViewMyReservationsOutputItem } from '/_102049_/l2/petShop/web/shared/myReservations.js';

@customElement('pet-shop--web--desktop--page11--my-reservations-102049')
export class PetShopDesktopPage11MyReservationsPage extends PetShopMyReservationsBase {
  render() {
    const lanes: string[] = ['active', 'ready', 'delivered', 'expired', 'cancelled'];

    const laneTitle = (lane: string): string => {
      switch (lane) {
        case 'active': return this.msg['lane.active'];
        case 'ready': return this.msg['lane.ready'];
        case 'delivered': return this.msg['lane.delivered'];
        case 'expired': return this.msg['lane.expired'];
        case 'cancelled': return this.msg['lane.cancelled'];
        default: return '';
      }
    };

    const data = this.viewMyReservationsData ?? [];
    const grouped: Record<string, PetShopViewMyReservationsOutputItem[]> = {};
    for (const lane of lanes) {
      grouped[lane] = [];
    }
    for (const item of data) {
      const s: string = item.status ?? 'active';
      if (grouped[s]) {
        grouped[s].push(item);
      }
    }

    const boardLoading = this.viewMyReservationsState === 'loading';
    const boardEmpty = !boardLoading && data.length === 0;
    const createLoading = this.createReservationState === 'loading';
    const cancelLoading = this.cancelReservationState === 'loading';
    const hasSelection = !!this.cancelReservationReservationId;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-strong,#0f172a)]">${this.msg['section.board.title']}</h1>

          <!-- Board Section (kanban) -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex items-center justify-end">
              <button
                class="px-3 py-1.5 rounded-md text-sm font-medium border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#1e293b)] disabled:opacity-50"
                ?disabled=${boardLoading}
                @click=${(e: Event) => this.handleViewMyReservationsClick(e)}
              >
                ${boardLoading ? '…' : this.msg['toolbar.refresh.label']}
              </button>
            </div>

            ${boardLoading
              ? html`<div class="grid grid-cols-5 gap-4">
                  ${lanes.map((_lane: string) => html`
                    <div class="h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  `)}
                </div>`
              : boardEmpty
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-8 text-center">${this.msg['empty.board']}</p>`
                : html`<div class="flex gap-4 overflow-x-auto pb-2">
                    ${lanes.map((lane: string) => {
                      const laneItems: PetShopViewMyReservationsOutputItem[] = grouped[lane] ?? [];
                      return html`
                        <div class="flex-shrink-0 w-60 space-y-2">
                          <div class="flex items-center justify-between px-2 py-1.5 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]">
                            <span class="text-sm font-semibold text-[var(--text-default,#1e293b)]">${laneTitle(lane)}</span>
                            <span class="text-xs text-[var(--text-muted,#64748b)]">${laneItems.length}</span>
                          </div>
                          <div class="space-y-2">
                            ${laneItems.length === 0
                              ? html`<div class="text-xs text-[var(--text-muted,#64748b)] py-4 text-center">—</div>`
                              : laneItems.map((item: PetShopViewMyReservationsOutputItem) => {
                                  const canCancel = lane === 'active' || lane === 'ready';
                                  const isSelected = this.cancelReservationReservationId === item.reservationId;
                                  return html`
                                    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 space-y-2 ${isSelected ? 'ring-2 ring-[var(--focus-ring,#3b82f6)]' : ''}">
                                      <div class="text-sm font-medium text-[var(--text-strong,#0f172a)]">${item.reservationId}</div>
                                      <div class="text-xs text-[var(--text-muted,#64748b)] space-y-0.5">
                                        <div>${this.msg['column.expiresAt.label']}: ${item.expiresAt ?? '—'}</div>
                                        <div>${this.msg['column.items.label']}: ${item.items?.length ?? 0}</div>
                                      </div>
                                      ${canCancel
                                        ? html`<button
                                            class="w-full px-2 py-1 rounded text-xs font-medium border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#1e293b)] disabled:opacity-50"
                                            ?disabled=${cancelLoading}
                                            @click=${() => this.setCancelReservationReservationId(item.reservationId ?? '')}
                                          >
                                            ${this.msg['rowAction.cancelReservation.label']}
                                          </button>`
                                        : null}
                                    </div>
                                  `;
                                })}
                          </div>
                        </div>
                      `;
                    })}
                  </div>`}
          </section>

          <!-- Create Reservation Section -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-default,#1e293b)]">${this.msg['section.create.title']}</h2>
            <div class="space-y-3">
              <label class="block">
                <span class="text-sm font-medium text-[var(--text-default,#1e293b)]">${this.msg['field.items.label']}</span>
                <textarea
                  class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#1e293b)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#3b82f6)]"
                  rows="4"
                  .value=${this.createReservationItems ?? ''}
                  @input=${(e: Event) => this.handleCreateReservationItemsChange(e)}
                  placeholder=${this.msg['empty.create']}
                ></textarea>
              </label>
              <button
                class="px-4 py-2 rounded-md text-sm font-semibold bg-[var(--button-primary-bg,#3b82f6)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                ?disabled=${createLoading}
                @click=${(e: Event) => this.handleCreateReservationClick(e)}
              >
                ${createLoading ? '…' : this.msg['action.createReservation.label']}
              </button>
              ${this.createReservationState === 'success'
                ? html`<div class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">${this.msg['action.createReservation.success']}</div>`
                : null}
              ${this.createReservationState === 'error'
                ? html`<div class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">${this.createReservationError || this.msg['action.createReservation.error']}</div>`
                : null}
            </div>
          </section>

          <!-- Cancel Reservation Section -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-default,#1e293b)]">${this.msg['section.cancel.title']}</h2>
            ${!hasSelection
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-4 text-center">${this.msg['empty.cancel']}</p>`
              : html`<div class="space-y-3">
                  <label class="block">
                    <span class="text-sm font-medium text-[var(--text-default,#1e293b)]">${this.msg['field.reservationId.label']}</span>
                    <input
                      type="text"
                      class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-2 text-sm text-[var(--text-muted,#64748b)]"
                      .value=${this.cancelReservationReservationId}
                      readonly
                    />
                  </label>
                  <label class="block">
                    <span class="text-sm font-medium text-[var(--text-default,#1e293b)]">${this.msg['field.cancelReason.label']}</span>
                    <input
                      type="text"
                      class="mt-1 block w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#1e293b)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#3b82f6)]"
                      .value=${this.cancelReservationCancelReason ?? ''}
                      @input=${(e: Event) => this.handleCancelReservationCancelReasonChange(e)}
                    />
                  </label>
                  <button
                    class="px-4 py-2 rounded-md text-sm font-semibold bg-[var(--button-danger-bg,#ef4444)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
                    ?disabled=${cancelLoading}
                    @click=${(e: Event) => this.handleCancelReservationClick(e)}
                  >
                    ${cancelLoading ? '…' : this.msg['action.cancelReservation.label']}
                  </button>
                  ${this.cancelReservationState === 'success'
                    ? html`<div class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">${this.msg['action.cancelReservation.success']}</div>`
                    : null}
                  ${this.cancelReservationState === 'error'
                    ? html`<div class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">${this.cancelReservationError || this.msg['action.cancelReservation.error']}</div>`
                    : null}
                </div>`}
          </section>
        </div>
      </div>
    `;
  }
}
