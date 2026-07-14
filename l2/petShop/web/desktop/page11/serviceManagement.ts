/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/serviceManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopServiceManagementBase } from '/_102049_/l2/petShop/web/shared/serviceManagement.js';
import type { PetShopBrowseServicesOutputItem } from '/_102049_/l2/petShop/web/contracts/serviceManagement.js';

@customElement('pet-shop--web--desktop--page11--service-management-102049')
export class PetShopDesktopPage11ServiceManagementPage extends PetShopServiceManagementBase {
  render() {
    const browseItems: PetShopBrowseServicesOutputItem[] = this.browseServicesData?.items ?? [];
    const isBrowseLoading = this.browseServicesState === 'loading';
    const isCreateLoading = this.createServiceState === 'loading';
    const isUpdateLoading = this.updateServiceState === 'loading';
    const hasUpdateSelection = this.updateServiceServiceId !== '';

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#0f172a)]">
            ${this.msg['section.serviceManagement.title']}
          </h1>

          <!-- ===== Browse Services ===== -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['org.browse.services.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['browseServices.title']}
            </h3>

            <!-- Filter + toolbar -->
            <div class="flex items-center gap-3 flex-wrap">
              <label class="text-sm text-[var(--text-primary-color,#0f172a)]">
                ${this.msg['filter.statusFilter']}
              </label>
              <select
                .value=${this.browseServicesStatusFilter}
                @change=${(e: Event) => {
                  this.handleBrowseServicesStatusFilterChange(e);
                  this.handleBrowseServicesClick();
                }}
                class="border border-[var(--grey-color,#e2e8f0)] rounded px-2 py-1 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
              >
                <option value="">${this.msg['filter.statusFilter']}</option>
                <option value="active" ?selected=${this.browseServicesStatusFilter === 'active'}>
                  ${this.msg['status.active']}
                </option>
                <option value="inactive" ?selected=${this.browseServicesStatusFilter === 'inactive'}>
                  ${this.msg['status.inactive']}
                </option>
              </select>
              <button
                @click=${() => this.handleBrowseServicesClick()}
                ?disabled=${isBrowseLoading}
                class="px-3 py-1 text-sm rounded border border-[var(--grey-color,#e2e8f0)] text-[var(--text-primary-color,#0f172a)] hover:bg-[var(--bg-secondary-color,#f8fafc)] disabled:opacity-50"
              >
                ${isBrowseLoading ? '...' : '↻'}
              </button>
              <a
                href="#org-create-service"
                class="ml-auto px-4 py-2 text-sm rounded no-underline bg-[var(--text-secondary-color,#1C91CD)] text-[var(--bg-primary-color,#ffffff)] hover:opacity-90"
              >
                ${this.msg['toolbar.createService']}
              </a>
            </div>

            <!-- Table / loading / empty -->
            ${isBrowseLoading
              ? html`
                  <div class="space-y-2">
                    ${[0, 1, 2, 3].map(
                      () =>
                        html`<div
                          class="h-10 rounded bg-[var(--bg-secondary-color,#f1f5f9)] animate-pulse"
                        ></div>`,
                    )}
                  </div>
                `
              : browseItems.length === 0
                ? html`
                    <p class="text-sm text-[var(--text-primary-color,#0f172a)] opacity-60">
                      ${this.msg['browseServices.empty']}
                    </p>
                  `
                : html`
                    <div class="overflow-x-auto">
                      <table class="w-full text-sm">
                        <thead>
                          <tr
                            class="border-b border-[var(--grey-color,#e2e8f0)] text-left text-[var(--text-primary-color,#0f172a)]"
                          >
                            <th class="py-2 px-2 font-medium">${this.msg['field.name']}</th>
                            <th class="py-2 px-2 font-medium">${this.msg['field.description']}</th>
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['field.estimatedDurationMinutes']}
                            </th>
                            <th class="py-2 px-2 font-medium">${this.msg['field.price']}</th>
                            <th class="py-2 px-2 font-medium">${this.msg['field.status']}</th>
                            <th class="py-2 px-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          ${browseItems.map(
                            (item: PetShopBrowseServicesOutputItem) => html`
                              <tr
                                class="border-b border-[var(--grey-color,#e2e8f0)] text-[var(--text-primary-color,#0f172a)]"
                              >
                                <td class="py-2 px-2">${item.name}</td>
                                <td class="py-2 px-2 max-w-xs truncate">${item.description}</td>
                                <td class="py-2 px-2">${item.estimatedDurationMinutes}</td>
                                <td class="py-2 px-2">${item.price.toFixed(2)}</td>
                                <td class="py-2 px-2">
                                  ${item.status === 'active'
                                    ? this.msg['status.active']
                                    : this.msg['status.inactive']}
                                </td>
                                <td class="py-2 px-2 whitespace-nowrap">
                                  <button
                                    @click=${() => {
                                      this.setUpdateServiceServiceId(item.serviceId);
                                      this.setUpdateServiceName(item.name);
                                      this.setUpdateServiceDescription(item.description);
                                      this.setUpdateServiceEstimatedDurationMinutes(
                                        String(item.estimatedDurationMinutes),
                                      );
                                      this.setUpdateServicePrice(String(item.price));
                                      this.setUpdateServiceStatus(item.status);
                                    }}
                                    class="px-2 py-1 text-xs rounded border border-[var(--grey-color,#e2e8f0)] text-[var(--text-primary-color,#0f172a)] hover:bg-[var(--bg-secondary-color,#f8fafc)]"
                                  >
                                    ${this.msg['rowAction.updateService']}
                                  </button>
                                </td>
                              </tr>
                            `,
                          )}
                        </tbody>
                      </table>
                    </div>
                  `}
          </section>

          <!-- ===== Create Service ===== -->
          <section
            id="org-create-service"
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4 scroll-mt-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['org.create.service.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['createService.title']}
            </h3>
            <p class="text-sm text-[var(--text-primary-color,#0f172a)] opacity-60">
              ${this.msg['createService.empty']}
            </p>

            <div class="space-y-3">
              <div>
                <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                  ${this.msg['field.name']}
                </label>
                <input
                  type="text"
                  .value=${this.createServiceName}
                  @input=${(e: Event) => this.handleCreateServiceNameChange(e)}
                  class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                />
              </div>
              <div>
                <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                  ${this.msg['field.description']}
                </label>
                <textarea
                  .value=${this.createServiceDescription}
                  @input=${(e: Event) => this.handleCreateServiceDescriptionChange(e)}
                  rows="3"
                  class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                ></textarea>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                    ${this.msg['field.estimatedDurationMinutes']}
                  </label>
                  <input
                    type="number"
                    .value=${this.createServiceEstimatedDurationMinutes}
                    @input=${(e: Event) => this.handleCreateServiceEstimatedDurationMinutesChange(e)}
                    class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                  />
                </div>
                <div>
                  <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                    ${this.msg['field.price']}
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    .value=${this.createServicePrice}
                    @input=${(e: Event) => this.handleCreateServicePriceChange(e)}
                    class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                  />
                </div>
              </div>
            </div>

            <!-- Create feedback -->
            ${this.createServiceState === 'success'
              ? html`
                  <div
                    class="flex items-center justify-between rounded px-3 py-2 text-sm border bg-[var(--bg-secondary-color,#f8fafc)]"
                    style="border-color: var(--success-color,#52C41A); color: var(--success-color,#52C41A);"
                  >
                    <span>${this.msg['action.createService.success']}</span>
                    <button
                      @click=${() => {
                        this.createServiceState = 'idle';
                      }}
                      class="ml-2 text-xs underline"
                    >
                      ✕
                    </button>
                  </div>
                `
              : ''}
            ${this.createServiceState === 'error'
              ? html`
                  <div
                    class="flex items-center justify-between rounded px-3 py-2 text-sm border bg-[var(--bg-secondary-color,#f8fafc)]"
                    style="border-color: var(--error-color,#FF4D4F); color: var(--error-color,#FF4D4F);"
                  >
                    <span>${this.createServiceError || this.msg['action.createService.error']}</span>
                    <button
                      @click=${() => {
                        this.createServiceState = 'idle';
                      }}
                      class="ml-2 text-xs underline"
                    >
                      ✕
                    </button>
                  </div>
                `
              : ''}

            <!-- Create submit -->
            <div>
              <button
                @click=${() => this.handleCreateServiceClick()}
                ?disabled=${isCreateLoading}
                class="px-4 py-2 text-sm rounded bg-[var(--text-secondary-color,#1C91CD)] text-[var(--bg-primary-color,#ffffff)] hover:opacity-90 disabled:opacity-50"
              >
                ${isCreateLoading ? '...' : this.msg['action.createService.submit']}
              </button>
            </div>
          </section>

          <!-- ===== Update Service ===== -->
          <section
            id="org-update-service"
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['org.update.service.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#0f172a)]">
              ${this.msg['updateService.title']}
            </h3>

            ${!hasUpdateSelection
              ? html`
                  <p class="text-sm text-[var(--text-primary-color,#0f172a)] opacity-60">
                    ${this.msg['updateService.empty']}
                  </p>
                `
              : html`
                  <input type="hidden" .value=${this.updateServiceServiceId} />
                  <div class="space-y-3">
                    <div>
                      <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                        ${this.msg['field.name']}
                      </label>
                      <input
                        type="text"
                        .value=${this.updateServiceName}
                        @input=${(e: Event) => this.handleUpdateServiceNameChange(e)}
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                      />
                    </div>
                    <div>
                      <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                        ${this.msg['field.description']}
                      </label>
                      <textarea
                        .value=${this.updateServiceDescription}
                        @input=${(e: Event) => this.handleUpdateServiceDescriptionChange(e)}
                        rows="3"
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                      ></textarea>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                      <div>
                        <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                          ${this.msg['field.estimatedDurationMinutes']}
                        </label>
                        <input
                          type="number"
                          .value=${this.updateServiceEstimatedDurationMinutes}
                          @input=${(e: Event) =>
                            this.handleUpdateServiceEstimatedDurationMinutesChange(e)}
                          class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                        />
                      </div>
                      <div>
                        <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                          ${this.msg['field.price']}
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          .value=${this.updateServicePrice}
                          @input=${(e: Event) => this.handleUpdateServicePriceChange(e)}
                          class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm text-[var(--text-primary-color,#0f172a)] mb-1">
                        ${this.msg['field.status']}
                      </label>
                      <select
                        .value=${this.updateServiceStatus}
                        @change=${(e: Event) => this.handleUpdateServiceStatusChange(e)}
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#0f172a)]"
                      >
                        <option value="">${this.msg['field.status']}</option>
                        <option
                          value="active"
                          ?selected=${this.updateServiceStatus === 'active'}
                        >
                          ${this.msg['status.active']}
                        </option>
                        <option
                          value="inactive"
                          ?selected=${this.updateServiceStatus === 'inactive'}
                        >
                          ${this.msg['status.inactive']}
                        </option>
                      </select>
                    </div>
                  </div>

                  <!-- Update feedback -->
                  ${this.updateServiceState === 'success'
                    ? html`
                        <div
                          class="flex items-center justify-between rounded px-3 py-2 text-sm border bg-[var(--bg-secondary-color,#f8fafc)]"
                          style="border-color: var(--success-color,#52C41A); color: var(--success-color,#52C41A);"
                        >
                          <span>${this.msg['action.updateService.success']}</span>
                          <button
                            @click=${() => {
                              this.updateServiceState = 'idle';
                            }}
                            class="ml-2 text-xs underline"
                          >
                            ✕
                          </button>
                        </div>
                      `
                    : ''}
                  ${this.updateServiceState === 'error'
                    ? html`
                        <div
                          class="flex items-center justify-between rounded px-3 py-2 text-sm border bg-[var(--bg-secondary-color,#f8fafc)]"
                          style="border-color: var(--error-color,#FF4D4F); color: var(--error-color,#FF4D4F);"
                        >
                          <span>
                            ${this.updateServiceError || this.msg['action.updateService.error']}
                          </span>
                          <button
                            @click=${() => {
                              this.updateServiceState = 'idle';
                            }}
                            class="ml-2 text-xs underline"
                          >
                            ✕
                          </button>
                        </div>
                      `
                    : ''}

                  <!-- Update submit -->
                  <div>
                    <button
                      @click=${() => this.handleUpdateServiceClick()}
                      ?disabled=${isUpdateLoading}
                      class="px-4 py-2 text-sm rounded bg-[var(--text-secondary-color,#1C91CD)] text-[var(--bg-primary-color,#ffffff)] hover:opacity-90 disabled:opacity-50"
                    >
                      ${isUpdateLoading ? '...' : this.msg['action.updateService.submit']}
                    </button>
                  </div>
                `}
          </section>
        </div>
      </div>
    `;
  }
}
