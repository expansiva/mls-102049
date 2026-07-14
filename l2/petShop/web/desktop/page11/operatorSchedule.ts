/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/operatorSchedule.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopOperatorScheduleBase } from '/_102049_/l2/petShop/web/shared/operatorSchedule.js';

@customElement('pet-shop--web--desktop--page11--operator-schedule-102049')
export class PetShopDesktopPage11OperatorSchedulePage extends PetShopOperatorScheduleBase {
  render(): TemplateResult {
    const items = this.viewOperatorScheduleData?.items ?? [];
    const details = this.viewServiceBookingDetailsData;
    const scheduleLoading = this.viewOperatorScheduleState === 'loading';
    const scheduleError = this.viewOperatorScheduleState === 'error';
    const detailsLoading = this.viewServiceBookingDetailsState === 'loading';
    const detailsError = this.viewServiceBookingDetailsState === 'error';

    const confirmedCount = items.filter((i) => i.status === 'confirmed').length;
    const inProgressCount = items.filter((i) => i.status === 'inProgress').length;
    const completedCount = items.filter((i) => i.status === 'completed').length;
    const totalCount = items.length;

    const statusBadgeColors: Record<string, string> = {
      confirmed: 'var(--info-color,#0a6dc9)',
      inProgress: 'var(--warning-color,#FAAD14)',
      completed: 'var(--success-color,#52C41A)',
      cancelled: 'var(--error-color,#FF4D4F)',
    };

    const renderStatusBadge = (status: string): TemplateResult => {
      const color = statusBadgeColors[status] ?? 'var(--grey-color-dark,#D3D3D3)';
      return html`<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white" style="background-color: ${color}">${status}</span>`;
    };

    const renderMetricCard = (label: string, count: number, color: string): TemplateResult => {
      return html`
        <div class="rounded-lg border border-[var(--grey-color,#E6E6E6)] p-4 bg-[var(--bg-secondary-color-lighter,#F9F9F9)]">
          <p class="text-xs text-[var(--text-primary-color-lighter,#535353)]">${label}</p>
          <p class="text-2xl font-bold mt-1" style="color: ${color}">${count}</p>
        </div>
      `;
    };

    const renderDetailField = (label: string, value: string): TemplateResult => {
      return html`
        <div class="flex flex-col gap-1">
          <dt class="text-xs text-[var(--text-primary-color-lighter,#535353)]">${label}</dt>
          <dd class="text-[var(--text-primary-color,#403f3f)]">${value}</dd>
        </div>
      `;
    };

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['page.title']}
          </h1>

          ${scheduleError ? html`
            <div class="rounded-lg border border-[var(--error-color,#FF4D4F)] bg-[var(--bg-primary-color,#ffffff)] p-3 text-sm text-[var(--error-color,#FF4D4F)]">
              ${this.msg['action.viewOperatorSchedule.error']}
            </div>
          ` : ''}

          <!-- Schedule Section -->
          <div class="space-y-6">
            <!-- Metrics Summary -->
            <section class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
              <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['organism.metrics.title']}
              </h2>
              ${scheduleLoading ? html`
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  ${[0, 1, 2, 3].map(() => html`<div class="h-20 rounded-lg bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>`)}
                </div>
              ` : items.length === 0 ? html`
                <p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">${this.msg['organism.metrics.empty']}</p>
              ` : html`
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  ${renderMetricCard(this.msg['metric.confirmed'], confirmedCount, 'var(--info-color,#0a6dc9)')}
                  ${renderMetricCard(this.msg['metric.inProgress'], inProgressCount, 'var(--warning-color,#FAAD14)')}
                  ${renderMetricCard(this.msg['metric.completed'], completedCount, 'var(--success-color,#52C41A)')}
                  ${renderMetricCard(this.msg['metric.total'], totalCount, 'var(--text-secondary-color,#1C91CD)')}
                </div>
              `}
            </section>

            <!-- Schedule List -->
            <section class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
              <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['organism.list.title']}
              </h2>

              <div class="flex flex-wrap gap-4">
                <div class="flex flex-col gap-1">
                  <label class="text-xs text-[var(--text-primary-color-lighter,#535353)]">${this.msg['filter.status']}</label>
                  <select class="rounded-md border border-[var(--grey-color,#E6E6E6)] px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]" disabled>
                    <option value="">${this.msg['filter.status']}</option>
                  </select>
                </div>
                <div class="flex flex-col gap-1">
                  <label class="text-xs text-[var(--text-primary-color-lighter,#535353)]">${this.msg['filter.bookingDate']}</label>
                  <input type="date" class="rounded-md border border-[var(--grey-color,#E6E6E6)] px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]" disabled />
                </div>
              </div>

              ${scheduleLoading ? html`
                <div class="space-y-2">
                  ${[0, 1, 2].map(() => html`<div class="h-12 rounded-md bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>`)}
                </div>
              ` : items.length === 0 ? html`
                <p class="text-sm text-[var(--text-primary-color-lighter,#535353)] py-4 text-center">${this.msg['organism.list.empty']}</p>
              ` : html`
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-[var(--grey-color,#E6E6E6)] text-left text-[var(--text-primary-color-lighter,#535353)]">
                        <th class="py-2 px-3 font-medium">${this.msg['column.customerName']}</th>
                        <th class="py-2 px-3 font-medium">${this.msg['column.customerPhone']}</th>
                        <th class="py-2 px-3 font-medium">${this.msg['column.bookingDate']}</th>
                        <th class="py-2 px-3 font-medium">${this.msg['column.bookingTime']}</th>
                        <th class="py-2 px-3 font-medium">${this.msg['column.status']}</th>
                        <th class="py-2 px-3 font-medium">${this.msg['column.notes']}</th>
                        <th class="py-2 px-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      ${items.map((item) => html`
                        <tr class="border-b border-[var(--grey-color-light,#F2F2F2)] text-[var(--text-primary-color,#403f3f)]">
                          <td class="py-2 px-3">${item.customerName}</td>
                          <td class="py-2 px-3">${item.customerPhone}</td>
                          <td class="py-2 px-3">${item.bookingDate}</td>
                          <td class="py-2 px-3">${item.bookingTime}</td>
                          <td class="py-2 px-3">${renderStatusBadge(item.status)}</td>
                          <td class="py-2 px-3 max-w-xs truncate">${item.notes || '—'}</td>
                          <td class="py-2 px-3">
                            <button
                              class="rounded-md px-3 py-1 text-xs font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)] hover:bg-[var(--active-color-hover,#1a99ff)] disabled:opacity-50"
                              @click=${() => { this.setViewServiceBookingDetailsServiceBookingId(item.serviceBookingId); this.handleViewServiceBookingDetailsClick(); }}
                            >
                              ${this.msg['action.viewDetails']}
                            </button>
                          </td>
                        </tr>
                      `)}
                    </tbody>
                  </table>
                </div>
              `}
            </section>

            <!-- Booking Details -->
            <section class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
              <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
                ${this.msg['organism.details.title']}
              </h2>
              ${detailsError ? html`
                <div class="rounded-lg border border-[var(--error-color,#FF4D4F)] p-3 text-sm text-[var(--error-color,#FF4D4F)]">
                  ${this.msg['action.viewServiceBookingDetails.error']}
                </div>
              ` : ''}
              ${detailsLoading ? html`
                <div class="space-y-2">
                  ${[0, 1, 2, 3, 4].map(() => html`<div class="h-8 rounded-md bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>`)}
                </div>
              ` : details ? html`
                <dl class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  ${renderDetailField(this.msg['field.serviceBookingId'], details.serviceBookingId)}
                  ${renderDetailField(this.msg['field.serviceId'], details.serviceId)}
                  ${renderDetailField(this.msg['field.customerName'], details.customerName)}
                  ${renderDetailField(this.msg['field.customerPhone'], details.customerPhone)}
                  ${renderDetailField(this.msg['field.bookingDate'], details.bookingDate)}
                  ${renderDetailField(this.msg['field.bookingTime'], details.bookingTime)}
                  <div class="flex flex-col gap-1">
                    <dt class="text-xs text-[var(--text-primary-color-lighter,#535353)]">${this.msg['field.status']}</dt>
                    <dd>${renderStatusBadge(details.status)}</dd>
                  </div>
                  ${renderDetailField(this.msg['field.notes'], details.notes || '—')}
                  ${details.completedAt ? renderDetailField(this.msg['field.completedAt'], details.completedAt) : ''}
                  ${details.cancelledAt ? renderDetailField(this.msg['field.cancelledAt'], details.cancelledAt) : ''}
                  ${details.cancelReason ? renderDetailField(this.msg['field.cancelReason'], details.cancelReason) : ''}
                  ${renderDetailField(this.msg['field.createdAt'], details.createdAt)}
                  ${renderDetailField(this.msg['field.updatedAt'], details.updatedAt)}
                </dl>
                <div class="rounded-md bg-[var(--bg-secondary-color-lighter,#F9F9F9)] p-3 text-sm text-[var(--text-primary-color-lighter,#535353)]">
                  ${this.msg['field.paymentInfo']}
                </div>
              ` : html`
                <p class="text-sm text-[var(--text-primary-color-lighter,#535353)] py-4 text-center">${this.msg['organism.details.empty']}</p>
              `}
            </section>
          </div>

          <!-- Payment Section -->
          <section class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['section.payment.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['organism.payment.title']}
            </h3>
            ${details ? html`
              <div class="rounded-md bg-[var(--bg-secondary-color-lighter,#F9F9F9)] border border-[var(--grey-color,#E6E6E6)] p-4 text-sm text-[var(--text-primary-color,#403f3f)]">
                <p class="font-medium mb-1">${this.msg['field.paymentMethod']}</p>
                <p class="text-[var(--text-primary-color-lighter,#535353)]">${this.msg['field.paymentInfo']}</p>
              </div>
            ` : html`
              <p class="text-sm text-[var(--text-primary-color-lighter,#535353)] py-4 text-center">${this.msg['organism.payment.empty']}</p>
            `}
          </section>
        </div>
      </div>
    `;
  }
}
