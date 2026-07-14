/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/petManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopPetManagementBase } from '/_102049_/l2/petShop/web/shared/petManagement.js';
import type { PetShopBrowseAdoptablePetsAdminOutputItem } from '/_102049_/l2/petShop/web/contracts/petManagement.js';

@customElement('pet-shop--web--desktop--page11--pet-management-102049')
export class PetShopDesktopPage11PetManagementPage extends PetShopPetManagementBase {
  render() {
    const browseItems: PetShopBrowseAdoptablePetsAdminOutputItem[] = this.browseAdoptablePetsAdminData?.items ?? [];
    const browseLoading = this.browseAdoptablePetsAdminState === 'loading';
    const createLoading = this.createAdoptablePetState === 'loading';
    const createSuccess = this.createAdoptablePetState === 'success';
    const createError = this.createAdoptablePetState === 'error';
    const updateLoading = this.updateAdoptablePetState === 'loading';
    const updateSuccess = this.updateAdoptablePetState === 'success';
    const updateError = this.updateAdoptablePetState === 'error';
    const hasUpdateSelection = !!this.updateAdoptablePetAdoptablePetId;
    const totalPets = this.browseAdoptablePetsAdminData?.total ?? 0;
    const lastCreated = this.createAdoptablePetOutput;
    const lastUpdated = this.updateAdoptablePetOutput;
    const hasSummary = !!lastCreated || !!lastUpdated || totalPets > 0;

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['petManagement.section.title']}
          </h1>

          <!-- Browse / List -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['petManagement.list.title']}
            </h2>

            <div class="flex items-center gap-4 flex-wrap">
              <label class="flex items-center gap-2 text-sm text-[var(--text-primary-color,#403f3f)]">
                <span>${this.msg['petManagement.filter.statusFilter']}</span>
                <select
                  class="border border-[var(--grey-color,#e2e8f0)] rounded px-2 py-1 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                  .value="${this.browseAdoptablePetsAdminStatusFilter}"
                  @change="${this.handleBrowseAdoptablePetsAdminStatusFilterChange}"
                >
                  <option value="">—</option>
                  <option value="available">available</option>
                  <option value="unavailable">unavailable</option>
                </select>
              </label>
              <a
                href="#create-pet-form"
                class="ml-auto inline-flex items-center px-4 py-2 rounded text-sm font-medium text-white bg-[var(--active-color,#1890FF)] hover:opacity-90 no-underline"
              >
                ${this.msg['petManagement.action.create']}
              </a>
            </div>

            ${browseLoading
              ? html`
                  <!-- TODO: no loading msg key in shared -->
                  <div class="py-8 text-center text-[var(--text-primary-color,#403f3f)] opacity-60">
                    Carregando…
                  </div>
                `
              : browseItems.length === 0
                ? html`
                    <div class="py-8 text-center text-[var(--text-primary-color,#403f3f)] opacity-60">
                      ${this.msg['petManagement.list.empty']}
                    </div>
                  `
                : html`
                    <div class="overflow-x-auto">
                      <table class="w-full text-sm">
                        <thead>
                          <tr
                            class="border-b border-[var(--grey-color,#e2e8f0)] text-left text-[var(--text-primary-color,#403f3f)]"
                          >
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['petManagement.field.name']}
                            </th>
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['petManagement.field.age']}
                            </th>
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['petManagement.field.description']}
                            </th>
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['petManagement.field.photoUrl']}
                            </th>
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['petManagement.field.status']}
                            </th>
                            <th class="py-2 px-2 font-medium">
                              ${this.msg['petManagement.field.createdAt']}
                            </th>
                            <th class="py-2 px-2 font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          ${browseItems.map(
                            (item: PetShopBrowseAdoptablePetsAdminOutputItem) => html`
                              <tr class="border-b border-[var(--grey-color,#e2e8f0)]">
                                <td class="py-2 px-2 text-[var(--text-primary-color,#403f3f)]">
                                  ${item.name}
                                </td>
                                <td class="py-2 px-2 text-[var(--text-primary-color,#403f3f)]">
                                  ${item.age}
                                </td>
                                <td
                                  class="py-2 px-2 text-[var(--text-primary-color,#403f3f)] max-w-xs truncate"
                                >
                                  ${item.description}
                                </td>
                                <td class="py-2 px-2">
                                  ${item.photoUrl
                                    ? html`<img
                                          src="${item.photoUrl}"
                                          alt="${item.name}"
                                          class="w-12 h-12 rounded object-cover"
                                        />`
                                    : html`<span
                                          class="text-[var(--text-primary-color,#403f3f)] opacity-40"
                                          >—</span
                                        >`}
                                </td>
                                <td class="py-2 px-2">
                                  <span
                                    class="inline-block px-2 py-0.5 rounded text-xs font-medium ${item
                                      .status === 'available'
                                      ? 'bg-[var(--success-color,#52C41A)] text-white'
                                      : 'bg-[var(--grey-color,#e2e8f0)] text-[var(--text-primary-color,#403f3f)]'}"
                                  >
                                    ${item.status}
                                  </span>
                                </td>
                                <td
                                  class="py-2 px-2 text-[var(--text-primary-color,#403f3f)] opacity-70"
                                >
                                  ${item.createdAt}
                                </td>
                                <td class="py-2 px-2">
                                  <button
                                    type="button"
                                    class="text-sm text-[var(--active-color,#1890FF)] hover:underline"
                                    @click="${() => {
                                      this.setUpdateAdoptablePetAdoptablePetId(
                                        item.adoptablePetId,
                                      );
                                      this.setUpdateAdoptablePetName(item.name);
                                      this.setUpdateAdoptablePetAge(item.age);
                                      this.setUpdateAdoptablePetDescription(
                                        item.description,
                                      );
                                      this.setUpdateAdoptablePetPhotoUrl(
                                        item.photoUrl,
                                      );
                                      this.setUpdateAdoptablePetStatus(item.status);
                                    }}"
                                  >
                                    ${this.msg['petManagement.action.update']}
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

          <!-- Create form -->
          <section
            id="create-pet-form"
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['petManagement.create.title']}
            </h2>
            <p class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70">
              ${this.msg['petManagement.create.empty']}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label class="block">
                <span
                  class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                >
                  ${this.msg['petManagement.field.name']}
                </span>
                <input
                  type="text"
                  class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                  .value="${this.createAdoptablePetName}"
                  @input="${this.handleCreateAdoptablePetNameChange}"
                />
              </label>
              <label class="block">
                <span
                  class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                >
                  ${this.msg['petManagement.field.age']}
                </span>
                <input
                  type="number"
                  class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                  .value="${this.createAdoptablePetAge}"
                  @input="${this.handleCreateAdoptablePetAgeChange}"
                />
              </label>
              <label class="block sm:col-span-2">
                <span
                  class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                >
                  ${this.msg['petManagement.field.description']}
                </span>
                <textarea
                  rows="3"
                  class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                  .value="${this.createAdoptablePetDescription}"
                  @input="${this.handleCreateAdoptablePetDescriptionChange}"
                ></textarea>
              </label>
              <label class="block sm:col-span-2">
                <span
                  class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                >
                  ${this.msg['petManagement.field.photoUrl']}
                </span>
                <input
                  type="text"
                  class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                  .value="${this.createAdoptablePetPhotoUrl}"
                  @input="${this.handleCreateAdoptablePetPhotoUrlChange}"
                />
              </label>
            </div>

            <div class="flex items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 rounded text-sm font-medium text-white bg-[var(--active-color,#1890FF)] hover:opacity-90 disabled:opacity-50"
                ?disabled="${createLoading}"
                @click="${this.handleCreateAdoptablePetClick}"
              >
                ${createLoading
                  ? '…'
                  : this.msg['petManagement.action.create.submit']}
              </button>
            </div>

            ${createSuccess
              ? html`
                  <div
                    class="rounded border border-[var(--success-color,#52C41A)] px-4 py-3 text-sm text-[var(--text-primary-color,#403f3f)]"
                  >
                    ${this.msg['action.createAdoptablePet.success']}
                  </div>
                `
              : ''}
            ${createError
              ? html`
                  <div
                    class="rounded border border-[var(--error-color,#FF4D4F)] px-4 py-3 text-sm text-[var(--text-primary-color,#403f3f)]"
                  >
                    ${this.createAdoptablePetError ||
                    this.msg['action.createAdoptablePet.error']}
                  </div>
                `
              : ''}
          </section>

          <!-- Update form -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['petManagement.update.title']}
            </h2>

            ${!hasUpdateSelection
              ? html`
                  <p
                    class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70"
                  >
                    ${this.msg['petManagement.update.empty']}
                  </p>
                `
              : html`
                  <input
                    type="hidden"
                    .value="${this.updateAdoptablePetAdoptablePetId}"
                  />
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label class="block">
                      <span
                        class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                      >
                        ${this.msg['petManagement.field.name']}
                      </span>
                      <input
                        type="text"
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                        .value="${this.updateAdoptablePetName}"
                        @input="${this.handleUpdateAdoptablePetNameChange}"
                      />
                    </label>
                    <label class="block">
                      <span
                        class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                      >
                        ${this.msg['petManagement.field.age']}
                      </span>
                      <input
                        type="number"
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                        .value="${this.updateAdoptablePetAge}"
                        @input="${this.handleUpdateAdoptablePetAgeChange}"
                      />
                    </label>
                    <label class="block sm:col-span-2">
                      <span
                        class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                      >
                        ${this.msg['petManagement.field.description']}
                      </span>
                      <textarea
                        rows="3"
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                        .value="${this.updateAdoptablePetDescription}"
                        @input="${this.handleUpdateAdoptablePetDescriptionChange}"
                      ></textarea>
                    </label>
                    <label class="block sm:col-span-2">
                      <span
                        class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                      >
                        ${this.msg['petManagement.field.photoUrl']}
                      </span>
                      <input
                        type="text"
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                        .value="${this.updateAdoptablePetPhotoUrl}"
                        @input="${this.handleUpdateAdoptablePetPhotoUrlChange}"
                      />
                    </label>
                    <label class="block">
                      <span
                        class="block text-sm font-medium text-[var(--text-primary-color,#403f3f)] mb-1"
                      >
                        ${this.msg['petManagement.field.status']}
                      </span>
                      <select
                        class="w-full border border-[var(--grey-color,#e2e8f0)] rounded px-3 py-2 bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                        .value="${this.updateAdoptablePetStatus}"
                        @change="${this.handleUpdateAdoptablePetStatusChange}"
                      >
                        <option value="">—</option>
                        <option value="available">available</option>
                        <option value="unavailable">unavailable</option>
                      </select>
                    </label>
                  </div>

                  <div class="flex items-center gap-3">
                    <button
                      type="button"
                      class="inline-flex items-center px-4 py-2 rounded text-sm font-medium text-white bg-[var(--active-color,#1890FF)] hover:opacity-90 disabled:opacity-50"
                      ?disabled="${updateLoading}"
                      @click="${this.handleUpdateAdoptablePetClick}"
                    >
                      ${updateLoading
                        ? '…'
                        : this.msg['petManagement.action.update.submit']}
                    </button>
                  </div>

                  ${updateSuccess
                    ? html`
                        <div
                          class="rounded border border-[var(--success-color,#52C41A)] px-4 py-3 text-sm text-[var(--text-primary-color,#403f3f)]"
                        >
                          ${this.msg['action.updateAdoptablePet.success']}
                        </div>
                      `
                    : ''}
                  ${updateError
                    ? html`
                        <div
                          class="rounded border border-[var(--error-color,#FF4D4F)] px-4 py-3 text-sm text-[var(--text-primary-color,#403f3f)]"
                        >
                          ${this.updateAdoptablePetError ||
                          this.msg['action.updateAdoptablePet.error']}
                        </div>
                      `
                    : ''}
                `}
          </section>

          <!-- Summary -->
          <section
            class="rounded-lg border border-[var(--grey-color,#e2e8f0)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-3"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['petManagement.summary.sectionTitle']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['petManagement.summary.title']}
            </h3>
            ${!hasSummary
              ? html`
                  <p
                    class="text-sm text-[var(--text-primary-color,#403f3f)] opacity-70"
                  >
                    ${this.msg['petManagement.summary.empty']}
                  </p>
                `
              : html`
                  <dl
                    class="text-sm space-y-2 text-[var(--text-primary-color,#403f3f)]"
                  >
                    <!-- TODO: no total-count msg key in shared -->
                    <div class="flex gap-2">
                      <dt class="font-medium">Total:</dt>
                      <dd>${totalPets}</dd>
                    </div>
                    ${lastCreated
                      ? html`
                          <div class="flex gap-2">
                            <dt class="font-medium">
                              ${this.msg['petManagement.field.adoptablePetId']}:
                            </dt>
                            <dd>
                              ${lastCreated.name} (${lastCreated.adoptablePetId})
                            </dd>
                          </div>
                        `
                      : ''}
                    ${lastUpdated
                      ? html`
                          <div class="flex gap-2">
                            <dt class="font-medium">
                              ${this.msg['petManagement.field.updatedAt']}:
                            </dt>
                            <dd>${lastUpdated.name} — ${lastUpdated.updatedAt}</dd>
                          </div>
                        `
                      : ''}
                  </dl>
                `}
          </section>
        </div>
      </div>
    `;
  }
}
