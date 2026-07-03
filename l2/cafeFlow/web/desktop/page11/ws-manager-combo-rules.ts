/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-combo-rules.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { CafeFlowQueryComboRulesOutputItem } from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-combo-rules.js';
import { CafeFlowWsManagerComboRulesBase } from '/_102049_/l2/cafeFlow/web/shared/ws-manager-combo-rules.js';

@customElement('cafe-flow--web--desktop--page11--ws-manager-combo-rules-102049')
export class CafeFlowDesktopPage11WsManagerComboRulesPage extends CafeFlowWsManagerComboRulesBase {
  render() {
    const queryRows: CafeFlowQueryComboRulesOutputItem[] = Array.isArray(this.queryComboRulesData)
      ? this.queryComboRulesData
      : [];

    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              ${this.msg['page.title'] ?? ''}
            </h1>
          </header>

          <section class="space-y-6">
            <div class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
              <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  ${this.msg['organism.queryComboRules.title'] ?? ''}
                </h2>
              </div>
              <div class="p-4 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.comboRuleId.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.queryComboRulesComboRuleId}
                      @input=${this.handleQueryComboRulesComboRuleIdChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.menuItemId.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.queryComboRulesMenuItemId}
                      @input=${this.handleQueryComboRulesMenuItemIdChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.name.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.queryComboRulesName}
                      @input=${this.handleQueryComboRulesNameChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.status.label'] ?? ''}
                    </label>
                    <select
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.queryComboRulesStatus}
                      @change=${this.handleQueryComboRulesStatusChange}
                    >
                      <option value=""></option>
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.createdAt.label'] ?? ''}
                    </label>
                    <input
                      type="date"
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.queryComboRulesCreatedAt}
                      @input=${this.handleQueryComboRulesCreatedAtChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.updatedAt.label'] ?? ''}
                    </label>
                    <input
                      type="date"
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.queryComboRulesUpdatedAt}
                      @input=${this.handleQueryComboRulesUpdatedAtChange}
                    />
                  </div>
                </div>

                <div class="flex justify-end">
                  <button
                    type="button"
                    class="rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-sm"
                    @click=${this.handleQueryComboRulesClick}
                  >
                    ${this.msg['action.queryComboRules.label'] ?? ''}
                  </button>
                </div>

                <div class="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
                  <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                    <thead class="bg-slate-50 dark:bg-slate-800">
                      <tr>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.comboRuleId.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.menuItemId.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.name.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.description.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.priceDifference.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.status.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.createdAt.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                          ${this.msg['field.updatedAt.label'] ?? ''}
                        </th>
                        <th class="px-4 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300"></th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                      ${queryRows.length === 0
                        ? html`
                            <tr>
                              <td
                                class="px-4 py-4 text-sm text-slate-500 dark:text-slate-400"
                                colspan="9"
                              >
                                ${this.msg['empty.queryComboRules.label'] ?? ''}
                              </td>
                            </tr>
                          `
                        : queryRows.map(
                            (item: CafeFlowQueryComboRulesOutputItem) => html`
                              <tr class="bg-white dark:bg-slate-900">
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.comboRuleId}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.menuItemId}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.name}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.description}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${String(item.priceDifference)}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.status}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.createdAt}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  ${item.updatedAt}
                                </td>
                                <td class="px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
                                  <div class="flex gap-2">
                                    <button
                                      type="button"
                                      class="text-sm text-slate-700 dark:text-slate-200"
                                      @click=${this.handleUpdateComboRuleClick}
                                    >
                                      ${this.msg['action.updateComboRule.label'] ?? ''}
                                    </button>
                                    <button
                                      type="button"
                                      class="text-sm text-red-600 dark:text-red-400"
                                      @click=${this.handleDeleteComboRuleClick}
                                    >
                                      ${this.msg['action.deleteComboRule.label'] ?? ''}
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            `
                          )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
              <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  ${this.msg['organism.createComboRule.title'] ?? ''}
                </h2>
              </div>
              <div class="p-4 space-y-4">
                <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['intention.createForm.title'] ?? ''}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.name.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.createComboRuleName}
                      @input=${this.handleCreateComboRuleNameChange}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.description.label'] ?? ''}
                    </label>
                    <textarea
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.createComboRuleDescription}
                      @input=${this.handleCreateComboRuleDescriptionChange}
                    ></textarea>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.priceDifference.label'] ?? ''}
                    </label>
                    <input
                      type="number"
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${String(this.createComboRulePriceDifference ?? '')}
                      @input=${this.handleCreateComboRulePriceDifferenceChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.status.label'] ?? ''}
                    </label>
                    <select
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.createComboRuleStatus}
                      @change=${this.handleCreateComboRuleStatusChange}
                    >
                      <option value=""></option>
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-end">
                  <button
                    type="button"
                    class="rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-sm"
                    @click=${this.handleCreateComboRuleClick}
                  >
                    ${this.msg['action.createComboRule.label'] ?? ''}
                  </button>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
              <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  ${this.msg['organism.updateComboRule.title'] ?? ''}
                </h2>
              </div>
              <div class="p-4 space-y-4">
                <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['intention.updateForm.title'] ?? ''}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.name.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.updateComboRuleName}
                      @input=${this.handleUpdateComboRuleNameChange}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.description.label'] ?? ''}
                    </label>
                    <textarea
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.updateComboRuleDescription}
                      @input=${this.handleUpdateComboRuleDescriptionChange}
                    ></textarea>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.priceDifference.label'] ?? ''}
                    </label>
                    <input
                      type="number"
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${String(this.updateComboRulePriceDifference ?? '')}
                      @input=${this.handleUpdateComboRulePriceDifferenceChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.status.label'] ?? ''}
                    </label>
                    <select
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.updateComboRuleStatus}
                      @change=${this.handleUpdateComboRuleStatusChange}
                    >
                      <option value=""></option>
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-end">
                  <button
                    type="button"
                    class="rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-sm"
                    @click=${this.handleUpdateComboRuleClick}
                  >
                    ${this.msg['action.updateComboRule.label'] ?? ''}
                  </button>
                </div>
              </div>
            </div>

            <div class="rounded-lg bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800">
              <div class="px-4 py-3 border-b border-slate-200 dark:border-slate-800">
                <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
                  ${this.msg['organism.deleteComboRule.title'] ?? ''}
                </h2>
              </div>
              <div class="p-4 space-y-4">
                <h3 class="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  ${this.msg['intention.deleteForm.title'] ?? ''}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.comboRuleId.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.deleteComboRuleComboRuleId}
                      @input=${this.handleDeleteComboRuleComboRuleIdChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.menuItemId.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.deleteComboRuleMenuItemId}
                      @input=${this.handleDeleteComboRuleMenuItemIdChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.name.label'] ?? ''}
                    </label>
                    <input
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.deleteComboRuleName}
                      @input=${this.handleDeleteComboRuleNameChange}
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.description.label'] ?? ''}
                    </label>
                    <textarea
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.deleteComboRuleDescription}
                      @input=${this.handleDeleteComboRuleDescriptionChange}
                    ></textarea>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.priceDifference.label'] ?? ''}
                    </label>
                    <input
                      type="number"
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${String(this.deleteComboRulePriceDifference ?? '')}
                      @input=${this.handleDeleteComboRulePriceDifferenceChange}
                    />
                  </div>
                  <div>
                    <label class="text-sm font-medium text-slate-700 dark:text-slate-200">
                      ${this.msg['field.status.label'] ?? ''}
                    </label>
                    <select
                      class="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                      .value=${this.deleteComboRuleStatus}
                      @change=${this.handleDeleteComboRuleStatusChange}
                    >
                      <option value=""></option>
                      <option value="active">active</option>
                      <option value="inactive">inactive</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-end">
                  <button
                    type="button"
                    class="rounded-md bg-red-600 text-white px-4 py-2 text-sm"
                    @click=${this.handleDeleteComboRuleClick}
                  >
                    ${this.msg['action.deleteComboRule.label'] ?? ''}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
