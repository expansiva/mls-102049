/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-menu.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowWsManagerMenuBase } from '/_102049_/l2/cafeFlow/web/shared/ws-manager-menu.js';
import type { CafeFlowQueryMenuItemsOutputItem } from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-menu.js';

@customElement('cafe-flow--web--desktop--page11--ws-manager-menu-102049')
export class CafeFlowDesktopPage11WsManagerMenuPage extends CafeFlowWsManagerMenuBase {
  render() {
    const queryItems: CafeFlowQueryMenuItemsOutputItem[] = Array.isArray(this.queryMenuItemsData)
      ? this.queryMenuItemsData
      : [];
    const summaryItem: CafeFlowQueryMenuItemsOutputItem | undefined = queryItems.length > 0
      ? queryItems[0]
      : undefined;
    const createPriceValue = Number.isFinite(this.createMenuItemPrice)
      ? String(this.createMenuItemPrice)
      : '';
    const updatePriceValue = Number.isFinite(this.updateMenuItemPrice)
      ? String(this.updateMenuItemPrice)
      : '';
    const deletePriceValue = Number.isFinite(this.deleteMenuItemPrice)
      ? String(this.deleteMenuItemPrice)
      : '';

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              ${this.msg['wsManagerMenu.section.management.title'] ?? ''}
            </h1>
          </header>

          <section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${this.msg['wsManagerMenu.organism.queryMenuItems.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                ${this.msg['wsManagerMenu.intent.queryMenuItems.title'] ?? ''}
              </p>
            </div>
            <div class="px-4 py-4 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.menuItemId'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.queryMenuItemsMenuItemId}
                    @input=${this.handleQueryMenuItemsMenuItemIdChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.name'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.queryMenuItemsName}
                    @input=${this.handleQueryMenuItemsNameChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.category'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.queryMenuItemsCategory}
                    @input=${this.handleQueryMenuItemsCategoryChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.status'] ?? ''}
                  <select
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    .value=${this.queryMenuItemsStatus}
                    @change=${this.handleQueryMenuItemsStatusChange}
                  >
                    <option value="">--</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.createdAt'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="date"
                    .value=${this.queryMenuItemsCreatedAt}
                    @input=${this.handleQueryMenuItemsCreatedAtChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.updatedAt'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="date"
                    .value=${this.queryMenuItemsUpdatedAt}
                    @input=${this.handleQueryMenuItemsUpdatedAtChange}
                  />
                </label>
              </div>
              <div class="flex items-center gap-3">
                <button
                  class="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 disabled:bg-slate-400"
                  @click=${this.handleQueryMenuItemsClick}
                >
                  ${this.msg['wsManagerMenu.action.query'] ?? ''}
                </button>
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  ${this.queryMenuItemsState}
                </span>
              </div>
              <div class="overflow-x-auto">
                <table class="min-w-full text-sm text-left border border-slate-200 dark:border-slate-800">
                  <thead class="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                    <tr>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.menuItemId'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.name'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.category'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.price'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.description'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.status'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.createdAt'] ?? ''}</th>
                      <th class="px-3 py-2">${this.msg['wsManagerMenu.field.updatedAt'] ?? ''}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    ${queryItems.length === 0
                      ? html`<tr>
                          <td class="px-3 py-3 text-slate-500 dark:text-slate-400" colspan="8">
                            --
                          </td>
                        </tr>`
                      : queryItems.map((item: CafeFlowQueryMenuItemsOutputItem) => html`
                          <tr class="text-slate-700 dark:text-slate-200">
                            <td class="px-3 py-2">${item.menuItemId}</td>
                            <td class="px-3 py-2">${item.name}</td>
                            <td class="px-3 py-2">${item.category}</td>
                            <td class="px-3 py-2">${item.price}</td>
                            <td class="px-3 py-2">${item.description}</td>
                            <td class="px-3 py-2">${item.status}</td>
                            <td class="px-3 py-2">${item.createdAt}</td>
                            <td class="px-3 py-2">${item.updatedAt}</td>
                          </tr>
                        `)}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${this.msg['wsManagerMenu.organism.createMenuItem.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                ${this.msg['wsManagerMenu.intent.createMenuItem.title'] ?? ''}
              </p>
            </div>
            <div class="px-4 py-4 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.name'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.createMenuItemName}
                    @input=${this.handleCreateMenuItemNameChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.price'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="number"
                    .value=${createPriceValue}
                    @input=${this.handleCreateMenuItemPriceChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.category'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.createMenuItemCategory}
                    @input=${this.handleCreateMenuItemCategoryChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.status'] ?? ''}
                  <select
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    .value=${this.createMenuItemStatus}
                    @change=${this.handleCreateMenuItemStatusChange}
                  >
                    <option value="">--</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200 md:col-span-2">
                  ${this.msg['wsManagerMenu.field.description'] ?? ''}
                  <textarea
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    rows="3"
                    .value=${this.createMenuItemDescription}
                    @input=${this.handleCreateMenuItemDescriptionChange}
                  ></textarea>
                </label>
              </div>
              <div class="flex items-center gap-3">
                <button
                  class="inline-flex items-center rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-500 disabled:bg-emerald-300"
                  @click=${this.handleCreateMenuItemClick}
                >
                  ${this.msg['wsManagerMenu.action.saveItem'] ?? ''}
                </button>
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  ${this.createMenuItemState}
                </span>
              </div>
            </div>
          </section>

          <section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${this.msg['wsManagerMenu.organism.updateMenuItem.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                ${this.msg['wsManagerMenu.intent.updateMenuItem.title'] ?? ''}
              </p>
            </div>
            <div class="px-4 py-4 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.name'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.updateMenuItemName}
                    @input=${this.handleUpdateMenuItemNameChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.category'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.updateMenuItemCategory}
                    @input=${this.handleUpdateMenuItemCategoryChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.price'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="number"
                    .value=${updatePriceValue}
                    @input=${this.handleUpdateMenuItemPriceChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.status'] ?? ''}
                  <select
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    .value=${this.updateMenuItemStatus}
                    @change=${this.handleUpdateMenuItemStatusChange}
                  >
                    <option value="">--</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200 md:col-span-2">
                  ${this.msg['wsManagerMenu.field.description'] ?? ''}
                  <textarea
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    rows="3"
                    .value=${this.updateMenuItemDescription}
                    @input=${this.handleUpdateMenuItemDescriptionChange}
                  ></textarea>
                </label>
              </div>
              <div class="flex items-center gap-3">
                <button
                  class="inline-flex items-center rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-500 disabled:bg-indigo-300"
                  @click=${this.handleUpdateMenuItemClick}
                >
                  ${this.msg['wsManagerMenu.action.saveChanges'] ?? ''}
                </button>
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  ${this.updateMenuItemState}
                </span>
              </div>
            </div>
          </section>

          <section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${this.msg['wsManagerMenu.organism.deleteMenuItem.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                ${this.msg['wsManagerMenu.intent.deleteMenuItem.title'] ?? ''}
              </p>
            </div>
            <div class="px-4 py-4 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.menuItemId'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.deleteMenuItemMenuItemId}
                    @input=${this.handleDeleteMenuItemMenuItemIdChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.name'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.deleteMenuItemName}
                    @input=${this.handleDeleteMenuItemNameChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.category'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="text"
                    .value=${this.deleteMenuItemCategory}
                    @input=${this.handleDeleteMenuItemCategoryChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.price'] ?? ''}
                  <input
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    type="number"
                    .value=${deletePriceValue}
                    @input=${this.handleDeleteMenuItemPriceChange}
                  />
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200">
                  ${this.msg['wsManagerMenu.field.status'] ?? ''}
                  <select
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    .value=${this.deleteMenuItemStatus}
                    @change=${this.handleDeleteMenuItemStatusChange}
                  >
                    <option value="">--</option>
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                </label>
                <label class="text-sm text-slate-700 dark:text-slate-200 md:col-span-2">
                  ${this.msg['wsManagerMenu.field.description'] ?? ''}
                  <textarea
                    class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                    rows="3"
                    .value=${this.deleteMenuItemDescription}
                    @input=${this.handleDeleteMenuItemDescriptionChange}
                  ></textarea>
                </label>
              </div>
              <div class="flex items-center gap-3">
                <button
                  class="inline-flex items-center rounded-md bg-rose-600 text-white px-4 py-2 text-sm font-medium hover:bg-rose-500 disabled:bg-rose-300"
                  @click=${this.handleDeleteMenuItemClick}
                >
                  ${this.msg['wsManagerMenu.action.confirmDelete'] ?? ''}
                </button>
                <span class="text-xs text-slate-500 dark:text-slate-400">
                  ${this.deleteMenuItemState}
                </span>
              </div>
            </div>
          </section>

          <section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
            <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
              <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
                ${this.msg['wsManagerMenu.organism.summary.title'] ?? ''}
              </h2>
              <p class="text-sm text-slate-600 dark:text-slate-300">
                ${this.msg['wsManagerMenu.intent.summary.title'] ?? ''}
              </p>
            </div>
            <div class="px-4 py-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-200">
                <div class="rounded-md border border-slate-200 dark:border-slate-800 p-3">
                  <div class="text-xs uppercase text-slate-500 dark:text-slate-400">
                    ${this.msg['wsManagerMenu.field.menuItemId'] ?? ''}
                  </div>
                  <div class="mt-1 font-medium">
                    ${summaryItem?.menuItemId ?? '--'}
                  </div>
                </div>
                <div class="rounded-md border border-slate-200 dark:border-slate-800 p-3">
                  <div class="text-xs uppercase text-slate-500 dark:text-slate-400">
                    ${this.msg['wsManagerMenu.field.name'] ?? ''}
                  </div>
                  <div class="mt-1 font-medium">
                    ${summaryItem?.name ?? '--'}
                  </div>
                </div>
                <div class="rounded-md border border-slate-200 dark:border-slate-800 p-3">
                  <div class="text-xs uppercase text-slate-500 dark:text-slate-400">
                    ${this.msg['wsManagerMenu.field.category'] ?? ''}
                  </div>
                  <div class="mt-1 font-medium">
                    ${summaryItem?.category ?? '--'}
                  </div>
                </div>
                <div class="rounded-md border border-slate-200 dark:border-slate-800 p-3">
                  <div class="text-xs uppercase text-slate-500 dark:text-slate-400">
                    ${this.msg['wsManagerMenu.field.price'] ?? ''}
                  </div>
                  <div class="mt-1 font-medium">
                    ${summaryItem?.price ?? '--'}
                  </div>
                </div>
                <div class="rounded-md border border-slate-200 dark:border-slate-800 p-3">
                  <div class="text-xs uppercase text-slate-500 dark:text-slate-400">
                    ${this.msg['wsManagerMenu.field.status'] ?? ''}
                  </div>
                  <div class="mt-1 font-medium">
                    ${summaryItem?.status ?? '--'}
                  </div>
                </div>
                <div class="rounded-md border border-slate-200 dark:border-slate-800 p-3">
                  <div class="text-xs uppercase text-slate-500 dark:text-slate-400">
                    ${this.msg['wsManagerMenu.field.updatedAt'] ?? ''}
                  </div>
                  <div class="mt-1 font-medium">
                    ${summaryItem?.updatedAt ?? '--'}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
