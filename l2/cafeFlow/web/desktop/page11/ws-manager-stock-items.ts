/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-stock-items.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { CafeFlowQueryStockItemsOutputItem } from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-stock-items.js';
import { CafeFlowWsManagerStockItemsBase } from '/_102049_/l2/cafeFlow/web/shared/ws-manager-stock-items.js';

@customElement('cafe-flow--web--desktop--page11--ws-manager-stock-items-102049')
export class CafeFlowDesktopPage11WsManagerStockItemsPage extends CafeFlowWsManagerStockItemsBase {
  render() {
    const msg = this.msg;
    const queryData = Array.isArray(this.queryStockItemsData) ? this.queryStockItemsData : [];
    const createMinimumValue = this.createStockItemMinimumQuantity === ''
      ? ''
      : String(this.createStockItemMinimumQuantity);
    const updateMinimumValue = this.updateStockItemMinimumQuantity === ''
      ? ''
      : String(this.updateStockItemMinimumQuantity);
    const deleteMinimumValue = this.deleteStockItemMinimumQuantity === ''
      ? ''
      : String(this.deleteStockItemMinimumQuantity);

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              ${msg['wsManagerStockItems.section.main.title'] ?? ''}
            </h1>
          </header>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <div class="space-y-1">
              <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
                ${msg['wsManagerStockItems.organism.query.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                ${msg['wsManagerStockItems.intent.queryList.title'] ?? ''}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.name'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.queryStockItemsName}
                  @input=${this.handleQueryStockItemsNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.status'] ?? ''}</span>
                <select
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  .value=${this.queryStockItemsStatus}
                  @change=${this.handleQueryStockItemsStatusChange}
                >
                  <option value=""></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.createdAt'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="date"
                  .value=${this.queryStockItemsCreatedAt}
                  @change=${this.handleQueryStockItemsCreatedAtChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.updatedAt'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="date"
                  .value=${this.queryStockItemsUpdatedAt}
                  @change=${this.handleQueryStockItemsUpdatedAtChange}
                />
              </label>
            </div>

            <div class="flex items-center gap-2">
              <button
                class="inline-flex items-center justify-center rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 text-sm font-medium"
                @click=${this.handleQueryStockItemsClick}
              >
                ${msg['wsManagerStockItems.action.query'] ?? ''}
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                <thead class="bg-slate-100 dark:bg-slate-800">
                  <tr>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.stockItemId'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.name'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.unitOfMeasure'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.minimumQuantity'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.status'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.createdAt'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                      ${msg['wsManagerStockItems.field.updatedAt'] ?? ''}
                    </th>
                    <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300"></th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                  ${queryData.length
                    ? queryData.map((item: CafeFlowQueryStockItemsOutputItem, index: number) => html`
                        <tr class="bg-white dark:bg-slate-900" data-index=${index}>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.stockItemId}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.name}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.unitOfMeasure}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.minimumQuantity}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.status}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.createdAt}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.updatedAt}</td>
                          <td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">
                            <div class="flex items-center gap-2">
                              <button
                                class="text-xs font-medium text-indigo-600 dark:text-indigo-300"
                                @click=${this.handleUpdateStockItemClick}
                              >
                                ${msg['wsManagerStockItems.action.update'] ?? ''}
                              </button>
                              <button
                                class="text-xs font-medium text-rose-600 dark:text-rose-300"
                                @click=${this.handleDeleteStockItemClick}
                              >
                                ${msg['wsManagerStockItems.action.delete'] ?? ''}
                              </button>
                            </div>
                          </td>
                        </tr>
                      `)
                    : html`
                        <tr>
                          <td colspan="8" class="px-3 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
                            ${msg['wsManagerStockItems.queryList.empty'] ?? ''}
                          </td>
                        </tr>
                      `}
                </tbody>
              </table>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <div class="space-y-1">
              <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
                ${msg['wsManagerStockItems.organism.create.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                ${msg['wsManagerStockItems.intent.create.title'] ?? ''}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.name'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.createStockItemName}
                  @input=${this.handleCreateStockItemNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.unitOfMeasure'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.createStockItemUnitOfMeasure}
                  @input=${this.handleCreateStockItemUnitOfMeasureChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.minimumQuantity'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="number"
                  .value=${createMinimumValue}
                  @input=${this.handleCreateStockItemMinimumQuantityChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.status'] ?? ''}</span>
                <select
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  .value=${this.createStockItemStatus}
                  @change=${this.handleCreateStockItemStatusChange}
                >
                  <option value=""></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </label>
            </div>

            <div class="flex items-center gap-2">
              <button
                class="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium"
                @click=${this.handleCreateStockItemClick}
              >
                ${msg['wsManagerStockItems.action.saveCreate'] ?? ''}
              </button>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-4">
            <div class="space-y-1">
              <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
                ${msg['wsManagerStockItems.organism.update.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                ${msg['wsManagerStockItems.intent.update.title'] ?? ''}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.name'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.updateStockItemName}
                  @input=${this.handleUpdateStockItemNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.unitOfMeasure'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.updateStockItemUnitOfMeasure}
                  @input=${this.handleUpdateStockItemUnitOfMeasureChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.minimumQuantity'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="number"
                  .value=${updateMinimumValue}
                  @input=${this.handleUpdateStockItemMinimumQuantityChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.status'] ?? ''}</span>
                <select
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  .value=${this.updateStockItemStatus}
                  @change=${this.handleUpdateStockItemStatusChange}
                >
                  <option value=""></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </label>
            </div>

            <div class="flex items-center gap-2">
              <button
                class="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium"
                @click=${this.handleUpdateStockItemClick}
              >
                ${msg['wsManagerStockItems.action.saveUpdate'] ?? ''}
              </button>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 p-4 space-y-6">
            <div class="space-y-1">
              <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
                ${msg['wsManagerStockItems.organism.delete.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                ${msg['wsManagerStockItems.intent.delete.title'] ?? ''}
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.stockItemId'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.deleteStockItemStockItemId}
                  @input=${this.handleDeleteStockItemStockItemIdChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.name'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.deleteStockItemName}
                  @input=${this.handleDeleteStockItemNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.unitOfMeasure'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="text"
                  .value=${this.deleteStockItemUnitOfMeasure}
                  @input=${this.handleDeleteStockItemUnitOfMeasureChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.minimumQuantity'] ?? ''}</span>
                <input
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  type="number"
                  .value=${deleteMinimumValue}
                  @input=${this.handleDeleteStockItemMinimumQuantityChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                <span>${msg['wsManagerStockItems.field.status'] ?? ''}</span>
                <select
                  class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 text-slate-900 dark:text-slate-100"
                  .value=${this.deleteStockItemStatus}
                  @change=${this.handleDeleteStockItemStatusChange}
                >
                  <option value=""></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </label>
            </div>

            <div class="flex items-center gap-2">
              <button
                class="inline-flex items-center justify-center rounded-md bg-rose-600 text-white px-4 py-2 text-sm font-medium"
                @click=${this.handleDeleteStockItemClick}
              >
                ${msg['wsManagerStockItems.action.confirmDelete'] ?? ''}
              </button>
            </div>

            <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
              <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                ${msg['wsManagerStockItems.intent.summary.title'] ?? ''}
              </h3>
              <div class="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                ${queryData.length}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
