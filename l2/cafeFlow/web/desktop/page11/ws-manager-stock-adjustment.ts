/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-adjustment.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowWsManagerStockAdjustmentBase } from '/_102049_/l2/cafeFlow/web/shared/ws-manager-stock-adjustment.js';
import type { CafeFlowQueryStockLevelsOutputItem } from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-adjustment.js';

@customElement('cafe-flow--web--desktop--page11--ws-manager-stock-adjustment-102049')
export class CafeFlowDesktopPage11WsManagerStockAdjustmentPage extends CafeFlowWsManagerStockAdjustmentBase {
  render() {
    const msg = this.msg;
    const stockLevels: CafeFlowQueryStockLevelsOutputItem[] = Array.isArray(this.queryStockLevelsData)
      ? this.queryStockLevelsData
      : [];
    const currentQuantityValue =
      typeof this.adjustStockLevelCurrentQuantity === 'number'
        ? String(this.adjustStockLevelCurrentQuantity)
        : this.adjustStockLevelCurrentQuantity || '';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-2">
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              ${msg['ws-manager-stock-adjustment.section.stockAdjustment.title'] ?? ''}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <div class="space-y-1">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${msg['ws-manager-stock-adjustment.organism.queryStockLevels.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                ${msg['ws-manager-stock-adjustment.intention.queryStockLevels.title'] ?? ''}
              </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="flex flex-col text-sm text-slate-700 dark:text-slate-200">
                ${msg['ws-manager-stock-adjustment.field.stockItemId.filterLabel'] ?? ''}
                <input
                  class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm"
                  .value=${this.queryStockLevelsStockItemId ?? ''}
                  @input=${(event: Event) => this.handleQueryStockLevelsStockItemIdChange(event)}
                />
              </label>
              <label class="flex flex-col text-sm text-slate-700 dark:text-slate-200">
                ${msg['ws-manager-stock-adjustment.field.lastMovementAt.filterLabel'] ?? ''}
                <input
                  type="date"
                  class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm"
                  .value=${this.queryStockLevelsLastMovementAt ?? ''}
                  @input=${(event: Event) => this.handleQueryStockLevelsLastMovementAtChange(event)}
                />
              </label>
            </div>

            <div class="flex flex-wrap gap-2">
              <button
                class="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500 disabled:opacity-60"
                @click=${(event: Event) => this.handleQueryStockLevelsClick(event)}
                ?disabled=${this.queryStockLevelsState === 'loading'}
              >
                ${msg['ws-manager-stock-adjustment.action.queryStockLevels.label'] ?? ''}
              </button>
              <span class="text-sm text-slate-500 dark:text-slate-400">
                ${this.queryStockLevelsState}
              </span>
            </div>

            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                <thead class="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th class="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">
                      ${msg['ws-manager-stock-adjustment.field.stockItemId.label'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">
                      ${msg['ws-manager-stock-adjustment.field.currentQuantity.label'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">
                      ${msg['ws-manager-stock-adjustment.field.lastMovementAt.label'] ?? ''}
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  ${stockLevels.length === 0
                    ? html`
                        <tr>
                          <td colspan="3" class="px-3 py-4 text-center text-slate-500 dark:text-slate-400">
                            --
                          </td>
                        </tr>
                      `
                    : stockLevels.map(
                        (item: CafeFlowQueryStockLevelsOutputItem) => html`
                          <tr>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.stockItemId}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.currentQuantity}</td>
                            <td class="px-3 py-2 text-slate-700 dark:text-slate-200">${item.lastMovementAt}</td>
                          </tr>
                        `,
                      )}
                </tbody>
              </table>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <div class="space-y-1">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${msg['ws-manager-stock-adjustment.organism.adjustStockLevel.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                ${msg['ws-manager-stock-adjustment.intention.adjustStockLevel.title'] ?? ''}
              </p>
            </div>

            <form class="grid gap-4 md:grid-cols-2">
              <label class="flex flex-col text-sm text-slate-700 dark:text-slate-200">
                ${msg['ws-manager-stock-adjustment.field.currentQuantity.label'] ?? ''}
                <input
                  type="number"
                  class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm"
                  .value=${currentQuantityValue}
                  @input=${(event: Event) => this.handleAdjustStockLevelCurrentQuantityChange(event)}
                />
              </label>
              <label class="flex flex-col text-sm text-slate-700 dark:text-slate-200">
                ${msg['ws-manager-stock-adjustment.field.lastMovementAt.label'] ?? ''}
                <input
                  type="date"
                  class="mt-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-sm"
                  .value=${this.adjustStockLevelLastMovementAt ?? ''}
                  @input=${(event: Event) => this.handleAdjustStockLevelLastMovementAtChange(event)}
                />
              </label>
            </form>

            <div class="flex flex-wrap gap-2">
              <button
                class="inline-flex items-center rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-500 disabled:opacity-60"
                @click=${(event: Event) => this.handleAdjustStockLevelClick(event)}
                ?disabled=${this.adjustStockLevelState === 'loading'}
                type="button"
              >
                ${msg['ws-manager-stock-adjustment.action.adjustStockLevel.label'] ?? ''}
              </button>
              <span class="text-sm text-slate-500 dark:text-slate-400">
                ${this.adjustStockLevelState}
              </span>
            </div>

            <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-2">
              <h3 class="text-sm font-semibold text-slate-800 dark:text-slate-200">
                ${msg['ws-manager-stock-adjustment.intention.review.title'] ?? ''}
              </h3>
              <div class="grid gap-2 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <span class="font-medium">${msg['ws-manager-stock-adjustment.field.currentQuantity.label'] ?? ''}:</span>
                  <span>${currentQuantityValue || '--'}</span>
                </div>
                <div>
                  <span class="font-medium">${msg['ws-manager-stock-adjustment.field.lastMovementAt.label'] ?? ''}:</span>
                  <span>${this.adjustStockLevelLastMovementAt || '--'}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
