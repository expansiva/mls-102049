/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/shiftManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopShiftManagementBase } from '/_102049_/l2/petShop/web/shared/shiftManagement.js';
import type { PetShopBrowseShiftsOutputItem } from '/_102049_/l2/petShop/web/contracts/shiftManagement.js';

@customElement('pet-shop--web--desktop--page11--shift-management-102049')
export class PetShopDesktopPage11ShiftManagementPage extends PetShopShiftManagementBase {
  render() {
    const items: PetShopBrowseShiftsOutputItem[] = this.browseShiftsData?.items ?? [];
    const isBrowseLoading: boolean = this.browseShiftsState === 'loading';
    const isBrowseEmpty: boolean = !isBrowseLoading && items.length === 0;

    const isChecked = (v: string): boolean => v === 'true';
    const boolMark = (v: boolean): string => v ? '✓' : '—';

    const inputClass =
      'mt-1 w-full px-3 py-2 rounded border border-[var(--grey-color,#e6e6e6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]';
    const labelClass =
      'flex items-center gap-2 text-sm text-[var(--text-primary-color,#403f3f)]';
    const primaryBtnClass =
      'px-4 py-2 text-sm font-medium rounded bg-[var(--active-color,#1890ff)] text-white hover:bg-[var(--active-color-hover,#1a99ff)] disabled:opacity-50';
    const secondaryBtnClass =
      'px-3 py-1.5 text-sm rounded border border-[var(--grey-color,#e6e6e6)] text-[var(--text-primary-color,#403f3f)] hover:bg-[var(--bg-primary-color-hover,#f2f2f2)]';

    /* ---------- Browse Shifts ---------- */
    const renderBrowseShifts = () => html`
      <section
        class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#e6e6e6)] p-4 space-y-4"
      >
        <h2
          class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
        >
          ${this.msg['shiftManagement.organism.browseShifts.title']}
        </h2>

        <p class="text-sm text-[var(--text-primary-color-disabled,#525151)]">
          ${this.msg['shiftManagement.intent.browseList.title']}
        </p>

        <!-- Filters -->
        <div class="flex flex-wrap items-center gap-4">
          <label class=${labelClass}>
            <input
              type="checkbox"
              .checked=${isChecked(this.browseShiftsActiveFilter)}
              @change=${(e: Event) => this.handleBrowseShiftsActiveFilterChange(e)}
            />
            ${this.msg['shiftManagement.filter.activeFilter.label']}
          </label>
          <button
            class=${secondaryBtnClass}
            ?disabled=${isBrowseLoading}
            @click=${() => this.handleBrowseShiftsClick()}
          >
            ${isBrowseLoading ? '...' : this.msg['shiftManagement.intent.browseList.title']}
          </button>
        </div>

        <!-- Toolbar -->
        <div class="flex justify-end">
          <button
            class=${primaryBtnClass}
            @click=${() => this.handleCreateShiftClick()}
          >
            ${this.msg['shiftManagement.action.createShift.label']}
          </button>
        </div>

        <!-- Table / Loading / Empty -->
        ${isBrowseLoading
          ? html`
              <div class="space-y-2">
                ${[0, 1, 2].map(
                  () =>
                    html`<div
                      class="h-10 rounded bg-[var(--grey-color-light,#f2f2f2)] animate-pulse"
                    ></div>`,
                )}
              </div>
            `
          : isBrowseEmpty
            ? html`
                <p
                  class="text-sm text-[var(--text-primary-color-disabled,#525151)] py-6 text-center"
                >
                  ${this.msg['shiftManagement.intent.browseList.empty']}
                </p>
              `
            : html`
                <div class="overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr
                        class="border-b border-[var(--grey-color,#e6e6e6)] text-left text-[var(--text-primary-color,#403f3f)]"
                      >
                        <th class="py-2 px-2 font-medium">
                          ${this.msg['shiftManagement.field.name.label']}
                        </th>
                        <th class="py-2 px-2 font-medium">
                          ${this.msg['shiftManagement.field.startTime.label']}
                        </th>
                        <th class="py-2 px-2 font-medium">
                          ${this.msg['shiftManagement.field.endTime.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.monday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.tuesday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.wednesday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.thursday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.friday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.saturday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.sunday.label']}
                        </th>
                        <th class="py-2 px-2 font-medium text-center">
                          ${this.msg['shiftManagement.field.active.label']}
                        </th>
                        <th class="py-2 px-2 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      ${items.map(
                        (item: PetShopBrowseShiftsOutputItem) => html`
                          <tr
                            class="border-b border-[var(--grey-color,#e6e6e6)] text-[var(--text-primary-color,#403f3f)]"
                          >
                            <td class="py-2 px-2">${item.name}</td>
                            <td class="py-2 px-2">${item.startTime}</td>
                            <td class="py-2 px-2">${item.endTime}</td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.monday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.tuesday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.wednesday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.thursday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.friday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.saturday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.sunday)}
                            </td>
                            <td class="py-2 px-2 text-center">
                              ${boolMark(item.active)}
                            </td>
                            <td class="py-2 px-2">
                              <button
                                class=${secondaryBtnClass}
                                @click=${() => {
                                  this.setUpdateShiftShiftId(item.shiftId);
                                  this.setUpdateShiftName(item.name);
                                  this.setUpdateShiftStartTime(item.startTime);
                                  this.setUpdateShiftEndTime(item.endTime);
                                  this.setUpdateShiftMonday(String(item.monday));
                                  this.setUpdateShiftTuesday(String(item.tuesday));
                                  this.setUpdateShiftWednesday(
                                    String(item.wednesday),
                                  );
                                  this.setUpdateShiftThursday(
                                    String(item.thursday),
                                  );
                                  this.setUpdateShiftFriday(String(item.friday));
                                  this.setUpdateShiftSaturday(
                                    String(item.saturday),
                                  );
                                  this.setUpdateShiftSunday(String(item.sunday));
                                  this.setUpdateShiftActive(String(item.active));
                                }}
                              >
                                ${this.msg['shiftManagement.action.updateShift.label']}
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
    `;

    /* ---------- Create Shift ---------- */
    const renderCreateShift = () => {
      const isCreateLoading: boolean = this.createShiftState === 'loading';
      const isCreateSuccess: boolean = this.createShiftState === 'success';
      const isCreateError: boolean = this.createShiftState === 'error';
      const createErrorMsg: string =
        this.createShiftError || this.msg['action.createShift.error'];

      return html`
        <section
          class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#e6e6e6)] p-4 space-y-4"
        >
          <h2
            class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
          >
            ${this.msg['shiftManagement.organism.createShift.title']}
          </h2>

          ${isCreateSuccess
            ? html`
                <div
                  class="p-3 rounded text-sm border text-[var(--success-color,#52c41a)] border-[var(--success-color,#52c41a)] bg-[var(--bg-secondary-color-lighter,#f9f9f9)]"
                >
                  ${this.msg['action.createShift.success']}
                </div>
              `
            : null}
          ${isCreateError
            ? html`
                <div
                  class="p-3 rounded text-sm border text-[var(--error-color,#ff4d4f)] border-[var(--error-color,#ff4d4f)] bg-[var(--bg-secondary-color-lighter,#f9f9f9)]"
                >
                  ${createErrorMsg}
                </div>
              `
            : null}

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="block">
              <span class="text-sm text-[var(--text-primary-color,#403f3f)]"
                >${this.msg['shiftManagement.field.name.label']}</span
              >
              <input
                type="text"
                .value=${this.createShiftName}
                @input=${(e: Event) => this.handleCreateShiftNameChange(e)}
                class=${inputClass}
              />
            </label>
            <label class="block">
              <span class="text-sm text-[var(--text-primary-color,#403f3f)]"
                >${this.msg['shiftManagement.field.startTime.label']}</span
              >
              <input
                type="time"
                .value=${this.createShiftStartTime}
                @input=${(e: Event) => this.handleCreateShiftStartTimeChange(e)}
                class=${inputClass}
              />
            </label>
            <label class="block">
              <span class="text-sm text-[var(--text-primary-color,#403f3f)]"
                >${this.msg['shiftManagement.field.endTime.label']}</span
              >
              <input
                type="time"
                .value=${this.createShiftEndTime}
                @input=${(e: Event) => this.handleCreateShiftEndTimeChange(e)}
                class=${inputClass}
              />
            </label>
          </div>

          <div class="flex flex-wrap gap-4">
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftMonday)}
                @change=${(e: Event) => this.handleCreateShiftMondayChange(e)}
              />
              ${this.msg['shiftManagement.field.monday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftTuesday)}
                @change=${(e: Event) => this.handleCreateShiftTuesdayChange(e)}
              />
              ${this.msg['shiftManagement.field.tuesday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftWednesday)}
                @change=${(e: Event) => this.handleCreateShiftWednesdayChange(e)}
              />
              ${this.msg['shiftManagement.field.wednesday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftThursday)}
                @change=${(e: Event) => this.handleCreateShiftThursdayChange(e)}
              />
              ${this.msg['shiftManagement.field.thursday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftFriday)}
                @change=${(e: Event) => this.handleCreateShiftFridayChange(e)}
              />
              ${this.msg['shiftManagement.field.friday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftSaturday)}
                @change=${(e: Event) => this.handleCreateShiftSaturdayChange(e)}
              />
              ${this.msg['shiftManagement.field.saturday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftSunday)}
                @change=${(e: Event) => this.handleCreateShiftSundayChange(e)}
              />
              ${this.msg['shiftManagement.field.sunday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.createShiftActive)}
                @change=${(e: Event) => this.handleCreateShiftActiveChange(e)}
              />
              ${this.msg['shiftManagement.field.active.label']}
            </label>
          </div>

          <div class="flex justify-end">
            <button
              ?disabled=${isCreateLoading}
              class=${primaryBtnClass}
              @click=${() => this.handleCreateShiftClick()}
            >
              ${isCreateLoading
                ? '...'
                : this.msg['shiftManagement.action.createShift.submit']}
            </button>
          </div>
        </section>
      `;
    };

    /* ---------- Update Shift ---------- */
    const renderUpdateShift = () => {
      const isUpdateLoading: boolean = this.updateShiftState === 'loading';
      const isUpdateSuccess: boolean = this.updateShiftState === 'success';
      const isUpdateError: boolean = this.updateShiftState === 'error';
      const updateErrorMsg: string =
        this.updateShiftError || this.msg['action.updateShift.error'];
      const hasSelection: boolean = this.updateShiftShiftId !== '';

      return html`
        <section
          class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#e6e6e6)] p-4 space-y-4"
        >
          <h2
            class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
          >
            ${this.msg['shiftManagement.organism.updateShift.title']}
          </h2>

          ${!hasSelection
            ? html`
                <p
                  class="text-sm text-[var(--text-primary-color-disabled,#525151)] py-2"
                >
                  <!-- TODO: no msg key for select-shift notice -->
                  Selecione um turno na lista acima para editar.
                </p>
              `
            : null}

          ${isUpdateSuccess
            ? html`
                <div
                  class="p-3 rounded text-sm border text-[var(--success-color,#52c41a)] border-[var(--success-color,#52c41a)] bg-[var(--bg-secondary-color-lighter,#f9f9f9)]"
                >
                  ${this.msg['action.updateShift.success']}
                </div>
              `
            : null}
          ${isUpdateError
            ? html`
                <div
                  class="p-3 rounded text-sm border text-[var(--error-color,#ff4d4f)] border-[var(--error-color,#ff4d4f)] bg-[var(--bg-secondary-color-lighter,#f9f9f9)]"
                >
                  ${updateErrorMsg}
                </div>
              `
            : null}

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label class="block">
              <span class="text-sm text-[var(--text-primary-color,#403f3f)]"
                >${this.msg['shiftManagement.field.name.label']}</span
              >
              <input
                type="text"
                .value=${this.updateShiftName}
                @input=${(e: Event) => this.handleUpdateShiftNameChange(e)}
                class=${inputClass}
              />
            </label>
            <label class="block">
              <span class="text-sm text-[var(--text-primary-color,#403f3f)]"
                >${this.msg['shiftManagement.field.startTime.label']}</span
              >
              <input
                type="time"
                .value=${this.updateShiftStartTime}
                @input=${(e: Event) => this.handleUpdateShiftStartTimeChange(e)}
                class=${inputClass}
              />
            </label>
            <label class="block">
              <span class="text-sm text-[var(--text-primary-color,#403f3f)]"
                >${this.msg['shiftManagement.field.endTime.label']}</span
              >
              <input
                type="time"
                .value=${this.updateShiftEndTime}
                @input=${(e: Event) => this.handleUpdateShiftEndTimeChange(e)}
                class=${inputClass}
              />
            </label>
          </div>

          <div class="flex flex-wrap gap-4">
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftMonday)}
                @change=${(e: Event) => this.handleUpdateShiftMondayChange(e)}
              />
              ${this.msg['shiftManagement.field.monday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftTuesday)}
                @change=${(e: Event) => this.handleUpdateShiftTuesdayChange(e)}
              />
              ${this.msg['shiftManagement.field.tuesday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftWednesday)}
                @change=${(e: Event) => this.handleUpdateShiftWednesdayChange(e)}
              />
              ${this.msg['shiftManagement.field.wednesday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftThursday)}
                @change=${(e: Event) => this.handleUpdateShiftThursdayChange(e)}
              />
              ${this.msg['shiftManagement.field.thursday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftFriday)}
                @change=${(e: Event) => this.handleUpdateShiftFridayChange(e)}
              />
              ${this.msg['shiftManagement.field.friday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftSaturday)}
                @change=${(e: Event) => this.handleUpdateShiftSaturdayChange(e)}
              />
              ${this.msg['shiftManagement.field.saturday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftSunday)}
                @change=${(e: Event) => this.handleUpdateShiftSundayChange(e)}
              />
              ${this.msg['shiftManagement.field.sunday.label']}
            </label>
            <label class=${labelClass}>
              <input
                type="checkbox"
                .checked=${isChecked(this.updateShiftActive)}
                @change=${(e: Event) => this.handleUpdateShiftActiveChange(e)}
              />
              ${this.msg['shiftManagement.field.active.label']}
            </label>
          </div>

          <div class="flex justify-end">
            <button
              ?disabled=${isUpdateLoading || !hasSelection}
              class=${primaryBtnClass}
              @click=${() => this.handleUpdateShiftClick()}
            >
              ${isUpdateLoading
                ? '...'
                : this.msg['shiftManagement.action.updateShift.submit']}
            </button>
          </div>
        </section>
      `;
    };

    return html`
      <div class="min-h-full bg-[var(--bg-secondary-color-lighter,#f9f9f9)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1
            class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]"
          >
            ${this.msg['shiftManagement.section.gestaoTurnos.title']}
          </h1>
          ${renderBrowseShifts()} ${renderCreateShift()} ${renderUpdateShift()}
        </div>
      </div>
    `;
  }
}
