/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-shift.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowWsManagerShiftBase } from '/_102049_/l2/cafeFlow/web/shared/ws-manager-shift.js';

@customElement('cafe-flow--web--desktop--page11--ws-manager-shift-102049')
export class CafeFlowDesktopPage11WsManagerShiftPage extends CafeFlowWsManagerShiftBase {
render() {
return html`
<div class="min-h-full bg-slate-50 dark:bg-slate-950">
  <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
    <header>
      <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        ${this.msg['wsManagerShift.section.shiftLifecycle.title'] ?? ''}
      </h1>
    </header>

    <section class="space-y-6">
      <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
          ${this.msg['wsManagerShift.organism.openShift.title'] ?? ''}
        </h2>
        <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
          <h3 class="text-lg font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['wsManagerShift.intention.openShift.form.title'] ?? ''}
          </h3>
          <form class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.field.openShift.status'] ?? ''}</span>
              <select
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.openShiftStatus}
                @change=${this.handleOpenShiftStatusChange}
              >
                <option value=""></option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.field.openShift.openedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.openShiftOpenedAt}
                @change=${this.handleOpenShiftOpenedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.field.openShift.closedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.openShiftClosedAt}
                @change=${this.handleOpenShiftClosedAtChange}
              />
            </label>
          </form>
          <div class="flex gap-2">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              @click=${this.handleOpenShiftClick}
            >
              ${this.msg['wsManagerShift.action.openShift.submit'] ?? ''}
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
          ${this.msg['wsManagerShift.organism.queryDashboard.title'] ?? ''}
        </h2>
        <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
          <h3 class="text-lg font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['wsManagerShift.intention.queryDashboard.list.title'] ?? ''}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.queryDashboard.shiftId'] ?? ''}</span>
              <input
                type="text"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.queryDashboardShiftId}
                @change=${this.handleQueryDashboardShiftIdChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.queryDashboard.status'] ?? ''}</span>
              <select
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.queryDashboardStatus}
                @change=${this.handleQueryDashboardStatusChange}
              >
                <option value=""></option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.queryDashboard.openedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.queryDashboardOpenedAt}
                @change=${this.handleQueryDashboardOpenedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.queryDashboard.closedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.queryDashboardClosedAt}
                @change=${this.handleQueryDashboardClosedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.queryDashboard.createdAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.queryDashboardCreatedAt}
                @change=${this.handleQueryDashboardCreatedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.queryDashboard.updatedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.queryDashboardUpdatedAt}
                @change=${this.handleQueryDashboardUpdatedAtChange}
              />
            </label>
          </div>
          <div class="flex gap-2">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              @click=${this.handleQueryDashboardClick}
            >
              ${this.msg['wsManagerShift.action.queryDashboard.refresh'] ?? ''}
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm text-left text-slate-700 dark:text-slate-300">
              <thead class="text-xs uppercase bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.queryDashboard.shiftId'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.queryDashboard.status'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.queryDashboard.openedAt'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.queryDashboard.closedAt'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.queryDashboard.createdAt'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.queryDashboard.updatedAt'] ?? ''}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                ${this.queryDashboardData.map((row: (typeof this.queryDashboardData)[number]) => html`
                  <tr>
                    <td class="px-3 py-2">${row.shiftId}</td>
                    <td class="px-3 py-2">${row.status}</td>
                    <td class="px-3 py-2">${row.openedAt}</td>
                    <td class="px-3 py-2">${row.closedAt}</td>
                    <td class="px-3 py-2">${row.createdAt}</td>
                    <td class="px-3 py-2">${row.updatedAt}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
          ${this.msg['wsManagerShift.organism.closeShift.title'] ?? ''}
        </h2>
        <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
          <h3 class="text-lg font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['wsManagerShift.intention.closeShift.form.title'] ?? ''}
          </h3>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.field.closeShift.status'] ?? ''}</span>
              <select
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.closeShiftStatus}
                @change=${this.handleCloseShiftStatusChange}
              >
                <option value=""></option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.field.closeShift.closedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.closeShiftClosedAt}
                @change=${this.handleCloseShiftClosedAtChange}
              />
            </label>
          </form>
          <div class="flex gap-2">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              @click=${this.handleCloseShiftClick}
            >
              ${this.msg['wsManagerShift.action.closeShift.submit'] ?? ''}
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
          ${this.msg['wsManagerShift.organism.generateShiftClosingReport.title'] ?? ''}
        </h2>
        <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
          <h3 class="text-lg font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['wsManagerShift.intention.generateShiftClosingReport.list.title'] ?? ''}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.generateShiftClosingReport.shiftId'] ?? ''}</span>
              <input
                type="text"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.generateShiftClosingReportShiftId}
                @change=${this.handleGenerateShiftClosingReportShiftIdChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.generateShiftClosingReport.status'] ?? ''}</span>
              <select
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.generateShiftClosingReportStatus}
                @change=${this.handleGenerateShiftClosingReportStatusChange}
              >
                <option value=""></option>
                <option value="open">open</option>
                <option value="closed">closed</option>
              </select>
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.generateShiftClosingReport.openedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.generateShiftClosingReportOpenedAt}
                @change=${this.handleGenerateShiftClosingReportOpenedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.generateShiftClosingReport.closedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.generateShiftClosingReportClosedAt}
                @change=${this.handleGenerateShiftClosingReportClosedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.generateShiftClosingReport.createdAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.generateShiftClosingReportCreatedAt}
                @change=${this.handleGenerateShiftClosingReportCreatedAtChange}
              />
            </label>
            <label class="flex flex-col text-sm text-slate-700 dark:text-slate-300">
              <span>${this.msg['wsManagerShift.filter.generateShiftClosingReport.updatedAt'] ?? ''}</span>
              <input
                type="datetime-local"
                class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-2"
                .value=${this.generateShiftClosingReportUpdatedAt}
                @change=${this.handleGenerateShiftClosingReportUpdatedAtChange}
              />
            </label>
          </div>
          <div class="flex gap-2">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
              @click=${this.handleGenerateShiftClosingReportClick}
            >
              ${this.msg['wsManagerShift.action.generateShiftClosingReport.run'] ?? ''}
            </button>
          </div>
          <div class="overflow-x-auto">
            <table class="min-w-full text-sm text-left text-slate-700 dark:text-slate-300">
              <thead class="text-xs uppercase bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.generateShiftClosingReport.shiftId'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.generateShiftClosingReport.status'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.generateShiftClosingReport.openedAt'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.generateShiftClosingReport.closedAt'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.generateShiftClosingReport.createdAt'] ?? ''}</th>
                  <th class="px-3 py-2">${this.msg['wsManagerShift.col.generateShiftClosingReport.updatedAt'] ?? ''}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                ${this.generateShiftClosingReportData.map((row: (typeof this.generateShiftClosingReportData)[number]) => html`
                  <tr>
                    <td class="px-3 py-2">${row.shiftId}</td>
                    <td class="px-3 py-2">${row.status}</td>
                    <td class="px-3 py-2">${row.openedAt}</td>
                    <td class="px-3 py-2">${row.closedAt}</td>
                    <td class="px-3 py-2">${row.createdAt}</td>
                    <td class="px-3 py-2">${row.updatedAt}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
`;
}
}
