/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/operatorManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopOperatorManagementBase } from '/_102049_/l2/petShop/web/shared/operatorManagement.js';

@customElement('pet-shop--web--desktop--page11--operator-management-102049')
export class PetShopDesktopPage11OperatorManagementPage extends PetShopOperatorManagementBase {
  render() {
    const browseItems = this.browseOperatorsData?.items ?? [];
    const browseLoading = this.browseOperatorsState === 'loading';
    const createLoading = this.createOperatorState === 'loading';
    const updateLoading = this.updateOperatorState === 'loading';

    return html`
      <div class="min-h-full bg-[var(--bg-secondary-color-lighter,#F9F9F9)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['operatorManagement.browse.title']}
          </h1>

          <!-- Browse Operators -->
          <div class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
            <div class="flex items-center justify-between flex-wrap gap-3">
              <label class="flex items-center gap-2 text-sm text-[var(--text-primary-color,#403f3f)]">
                <input
                  type="checkbox"
                  .checked=${this.browseOperatorsActiveFilter === 'true'}
                  @change=${this.handleBrowseOperatorsActiveFilterChange}
                />
                ${this.msg['operatorManagement.filter.active']}
              </label>
              <a
                href="#create-operator"
                class="px-4 py-2 rounded text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)] hover:opacity-90 no-underline"
              >
                ${this.msg['operatorManagement.action.create']}
              </a>
            </div>

            ${browseLoading
              ? html`<div class="space-y-2">
                  ${[1, 2, 3].map(() => html`<div class="h-10 rounded bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"></div>`)}
                </div>`
              : browseItems.length === 0
                ? html`<p class="text-sm text-[var(--text-primary-color-lighter,#535353)] py-4">
                    ${this.msg['operatorManagement.browse.empty']}
                  </p>`
                : html`<div class="overflow-x-auto">
                    <table class="w-full text-sm">
                      <thead>
                        <tr class="border-b border-[var(--grey-color,#E6E6E6)] text-left text-[var(--text-primary-color-lighter,#535353)]">
                          <th class="py-2 px-2 font-medium">${this.msg['operatorManagement.field.name']}</th>
                          <th class="py-2 px-2 font-medium">${this.msg['operatorManagement.field.email']}</th>
                          <th class="py-2 px-2 font-medium">${this.msg['operatorManagement.field.phone']}</th>
                          <th class="py-2 px-2 font-medium">${this.msg['operatorManagement.field.active']}</th>
                          <th class="py-2 px-2 font-medium">${this.msg['operatorManagement.field.updatedAt']}</th>
                          <th class="py-2 px-2 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        ${browseItems.map((item) => html`
                          <tr class="border-b border-[var(--grey-color-light,#F2F2F2)] text-[var(--text-primary-color,#403f3f)]">
                            <td class="py-2 px-2">${item.name}</td>
                            <td class="py-2 px-2">${item.email}</td>
                            <td class="py-2 px-2">${item.phone}</td>
                            <td class="py-2 px-2">
                              <span
                                class="inline-flex items-center px-2 py-0.5 rounded text-xs ${item.active
                                  ? 'text-[var(--bg-primary-color,#ffffff)] bg-[var(--success-color,#52C41A)]'
                                  : 'text-[var(--text-primary-color,#403f3f)] bg-[var(--grey-color-darker,#C0C0C0)]'}"
                              >
                                ${item.active ? '✓' : '—'}
                              </span>
                            </td>
                            <td class="py-2 px-2">${item.updatedAt}</td>
                            <td class="py-2 px-2">
                              <button
                                type="button"
                                class="text-sm text-[var(--link-color,#1890FF)] hover:underline"
                                @click=${(_e: Event) => {
                                  this.setUpdateOperatorOperatorId(item.operatorId);
                                  this.setUpdateOperatorName(item.name);
                                  this.setUpdateOperatorEmail(item.email);
                                  this.setUpdateOperatorPhone(item.phone);
                                  this.setUpdateOperatorActive(String(item.active));
                                }}
                              >
                                ${this.msg['operatorManagement.action.update']}
                              </button>
                            </td>
                          </tr>
                        `)}
                      </tbody>
                    </table>
                  </div>`}
          </div>

          <!-- Create Operator -->
          <div
            id="create-operator"
            class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4 scroll-mt-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['operatorManagement.create.title']}
            </h2>
            <p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">
              ${this.msg['operatorManagement.create.empty']}
            </p>
            <form class="space-y-3" @submit=${this.handleCreateOperatorClick}>
              <div>
                <label class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1">
                  ${this.msg['operatorManagement.field.name']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
                <input
                  type="text"
                  class="w-full px-3 py-2 rounded border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] focus:outline-none focus:ring-1 focus:ring-[var(--active-color,#1890FF)]"
                  .value=${this.createOperatorName}
                  @input=${this.handleCreateOperatorNameChange}
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1">
                  ${this.msg['operatorManagement.field.email']}
                </label>
                <input
                  type="email"
                  class="w-full px-3 py-2 rounded border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] focus:outline-none focus:ring-1 focus:ring-[var(--active-color,#1890FF)]"
                  .value=${this.createOperatorEmail}
                  @input=${this.handleCreateOperatorEmailChange}
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1">
                  ${this.msg['operatorManagement.field.phone']}
                </label>
                <input
                  type="tel"
                  class="w-full px-3 py-2 rounded border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] focus:outline-none focus:ring-1 focus:ring-[var(--active-color,#1890FF)]"
                  .value=${this.createOperatorPhone}
                  @input=${this.handleCreateOperatorPhoneChange}
                />
              </div>
              <div>
                <label class="flex items-center gap-2 text-sm font-medium text-[var(--text-primary-color,#403f3f)]">
                  <input
                    type="checkbox"
                    .checked=${this.createOperatorActive === 'true'}
                    @change=${this.handleCreateOperatorActiveChange}
                  />
                  ${this.msg['operatorManagement.field.active']}
                  <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                </label>
              </div>
              <div class="flex items-center gap-3">
                <button
                  type="submit"
                  class="px-4 py-2 rounded text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)] hover:opacity-90 disabled:opacity-50"
                  ?disabled=${createLoading}
                >
                  ${createLoading ? '...' : this.msg['operatorManagement.action.create.submit']}
                </button>
              </div>
            </form>

            ${this.createOperatorState === 'success'
              ? html`<div class="flex items-start justify-between gap-2 p-3 rounded border border-[var(--success-color,#52C41A)]">
                  <p class="text-sm text-[var(--text-primary-color,#403f3f)]">
                    ${this.msg['action.createOperator.success']}
                  </p>
                  <button
                    type="button"
                    class="text-sm text-[var(--text-primary-color-lighter,#535353)] hover:text-[var(--text-primary-color,#403f3f)]"
                    @click=${(_e: Event) => { this.createOperatorState = 'idle'; }}
                  >×</button>
                </div>`
              : this.createOperatorState === 'error'
                ? html`<div class="flex items-start justify-between gap-2 p-3 rounded border border-[var(--error-color,#FF4D4F)]">
                    <p class="text-sm text-[var(--text-primary-color,#403f3f)]">
                      ${this.createOperatorError || this.msg['action.createOperator.error']}
                    </p>
                    <button
                      type="button"
                      class="text-sm text-[var(--text-primary-color-lighter,#535353)] hover:text-[var(--text-primary-color,#403f3f)]"
                      @click=${(_e: Event) => { this.createOperatorState = 'idle'; }}
                    >×</button>
                  </div>`
                : null}
          </div>

          <!-- Update Operator -->
          <div class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['operatorManagement.update.title']}
            </h2>
            ${!this.updateOperatorOperatorId
              ? html`<p class="text-sm text-[var(--text-primary-color-lighter,#535353)]">
                  ${this.msg['operatorManagement.update.empty']}
                </p>`
              : html`
                <form class="space-y-3" @submit=${this.handleUpdateOperatorClick}>
                  <input type="hidden" .value=${this.updateOperatorOperatorId} />
                  <div>
                    <label class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1">
                      ${this.msg['operatorManagement.field.name']}
                      <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                    </label>
                    <input
                      type="text"
                      class="w-full px-3 py-2 rounded border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] focus:outline-none focus:ring-1 focus:ring-[var(--active-color,#1890FF)]"
                      .value=${this.updateOperatorName}
                      @input=${this.handleUpdateOperatorNameChange}
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1">
                      ${this.msg['operatorManagement.field.email']}
                    </label>
                    <input
                      type="email"
                      class="w-full px-3 py-2 rounded border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] focus:outline-none focus:ring-1 focus:ring-[var(--active-color,#1890FF)]"
                      .value=${this.updateOperatorEmail}
                      @input=${this.handleUpdateOperatorEmailChange}
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1">
                      ${this.msg['operatorManagement.field.phone']}
                    </label>
                    <input
                      type="tel"
                      class="w-full px-3 py-2 rounded border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] focus:outline-none focus:ring-1 focus:ring-[var(--active-color,#1890FF)]"
                      .value=${this.updateOperatorPhone}
                      @input=${this.handleUpdateOperatorPhoneChange}
                    />
                  </div>
                  <div>
                    <label class="flex items-center gap-2 text-sm font-medium text-[var(--text-primary-color,#403f3f)]">
                      <input
                        type="checkbox"
                        .checked=${this.updateOperatorActive === 'true'}
                        @change=${this.handleUpdateOperatorActiveChange}
                      />
                      ${this.msg['operatorManagement.field.active']}
                      <span class="text-[var(--error-color,#FF4D4F)]">*</span>
                    </label>
                  </div>
                  <div class="flex items-center gap-3">
                    <button
                      type="submit"
                      class="px-4 py-2 rounded text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--active-color,#1890FF)] hover:opacity-90 disabled:opacity-50"
                      ?disabled=${updateLoading}
                    >
                      ${updateLoading ? '...' : this.msg['operatorManagement.action.update.submit']}
                    </button>
                  </div>
                </form>

                ${this.updateOperatorState === 'success'
                  ? html`<div class="flex items-start justify-between gap-2 p-3 rounded border border-[var(--success-color,#52C41A)]">
                      <p class="text-sm text-[var(--text-primary-color,#403f3f)]">
                        ${this.msg['action.updateOperator.success']}
                      </p>
                      <button
                        type="button"
                        class="text-sm text-[var(--text-primary-color-lighter,#535353)] hover:text-[var(--text-primary-color,#403f3f)]"
                        @click=${(_e: Event) => { this.updateOperatorState = 'idle'; }}
                      >×</button>
                    </div>`
                  : this.updateOperatorState === 'error'
                    ? html`<div class="flex items-start justify-between gap-2 p-3 rounded border border-[var(--error-color,#FF4D4F)]">
                        <p class="text-sm text-[var(--text-primary-color,#403f3f)]">
                          ${this.updateOperatorError || this.msg['action.updateOperator.error']}
                        </p>
                        <button
                          type="button"
                          class="text-sm text-[var(--text-primary-color-lighter,#535353)] hover:text-[var(--text-primary-color,#403f3f)]"
                          @click=${(_e: Event) => { this.updateOperatorState = 'idle'; }}
                        >×</button>
                      </div>`
                    : null}
              `}
          </div>
        </div>
      </div>
    `;
  }
}
