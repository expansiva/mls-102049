/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/schedulingCapacity.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopSchedulingCapacityBase } from '/_102049_/l2/petShop/web/shared/schedulingCapacity.js';

@customElement('pet-shop--web--desktop--page11--scheduling-capacity-102049')
export class PetShopDesktopPage11SchedulingCapacityPage extends PetShopSchedulingCapacityBase {
  render() {
    const data = this.reviewSchedulingCapacityData;
    const items = data?.items ?? [];
    const isLoading = this.reviewSchedulingCapacityState === 'loading';

    // Derive unique shifts for filter and form selects
    const shiftMap = new Map<string, { shiftId: string; startTime: string; endTime: string }>();
    for (const item of items) {
      if (!shiftMap.has(item.shiftId)) {
        shiftMap.set(item.shiftId, {
          shiftId: item.shiftId,
          startTime: item.startTime,
          endTime: item.endTime,
        });
      }
    }
    const uniqueShifts = Array.from(shiftMap.values());

    // Derive unique operators for form select
    const operatorMap = new Map<string, { operatorId: string; name: string }>();
    for (const item of items) {
      if (!operatorMap.has(item.operatorId)) {
        operatorMap.set(item.operatorId, { operatorId: item.operatorId, name: item.name });
      }
    }
    const uniqueOperators = Array.from(operatorMap.values());

    // Group by shift for summary
    const summaryMap = new Map<
      string,
      { shiftId: string; startTime: string; endTime: string; operatorNames: string[] }
    >();
    for (const item of items) {
      let entry = summaryMap.get(item.shiftId);
      if (!entry) {
        entry = {
          shiftId: item.shiftId,
          startTime: item.startTime,
          endTime: item.endTime,
          operatorNames: [],
        };
        summaryMap.set(item.shiftId, entry);
      }
      entry.operatorNames.push(item.name);
    }
    const summaryEntries = Array.from(summaryMap.values());

    const assignLoading = this.assignOperatorToShiftState === 'loading';
    const assignSuccess = this.assignOperatorToShiftState === 'success';
    const assignError = this.assignOperatorToShiftState === 'error';
    const assignErrorMsg =
      this.assignOperatorToShiftError || this.msg['action.assignOperatorToShift.error'];

    return html`
      <div class="min-h-full bg-[var(--bg-primary-color,#ffffff)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <!-- Page title -->
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['section.schedulingCapacity.title']}
          </h1>

          <!-- Business context badge -->
          ${this.activeCompanyId
            ? html`
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--bg-secondary-color,#E6E6E6)] text-[var(--text-primary-color,#403f3f)] text-sm"
                >
                  <span class="font-medium">Empresa ativa</span>
                  <span class="text-[var(--text-secondary-color,#1C91CD)]"
                    >${this.activeCompanyId}</span
                  >
                </div>
              `
            : ''}

          <!-- Organism 1: Review Scheduling Capacity (queryList) -->
          <section
            class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['org.review.scheduling.capacity.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['intention.queryList.title']}
            </h3>

            <!-- Filter and toolbar -->
            <div class="flex flex-wrap items-end gap-4">
              <div class="flex flex-col gap-1">
                <label
                  class="text-sm text-[var(--text-primary-color,#403f3f)]"
                  for="filter_shiftId"
                >
                  ${this.msg['filter.shiftId.label']}
                </label>
                <select
                  id="filter_shiftId"
                  class="px-3 py-2 rounded-md border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] text-sm min-w-[200px]"
                  .value="${this.reviewSchedulingCapacityShiftId}"
                  @change="${this.handleReviewSchedulingCapacityShiftIdChange}"
                >
                  <option value="">—</option>
                  ${uniqueShifts.map(
                    (s) => html`
                      <option
                        value="${s.shiftId}"
                        ?selected="${this.reviewSchedulingCapacityShiftId === s.shiftId}"
                      >
                        ${s.startTime}–${s.endTime}
                      </option>
                    `,
                  )}
                </select>
              </div>
              <button
                type="button"
                class="px-4 py-2 rounded-md bg-[var(--active-color,#1890FF)] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50"
                ?disabled="${isLoading}"
                @click="${this.handleReviewSchedulingCapacityClick}"
              >
                ${isLoading ? '...' : this.msg['action.reviewSchedulingCapacity.label']}
              </button>
            </div>

            <!-- Table -->
            ${isLoading
              ? html`
                  <div class="space-y-2">
                    ${[1, 2, 3].map(
                      () => html`
                        <div
                          class="h-10 rounded-md bg-[var(--grey-color-light,#F2F2F2)] animate-pulse"
                        ></div>
                      `,
                    )}
                  </div>
                `
              : items.length === 0
                ? html`
                    <p class="text-sm text-[var(--text-primary-color,#403f3f)] italic">
                      ${this.msg['intention.queryList.empty']}
                    </p>
                  `
                : html`
                    <div class="overflow-x-auto">
                      <table class="w-full text-sm border-collapse">
                        <thead>
                          <tr class="border-b border-[var(--grey-color,#E6E6E6)]">
                            <th
                              class="text-left py-2 px-3 text-[var(--text-primary-color,#403f3f)] font-semibold"
                            >
                              ${this.msg['column.shiftAssignmentId.label']}
                            </th>
                            <th
                              class="text-left py-2 px-3 text-[var(--text-primary-color,#403f3f)] font-semibold"
                            >
                              ${this.msg['column.name.label']}
                            </th>
                            <th
                              class="text-left py-2 px-3 text-[var(--text-primary-color,#403f3f)] font-semibold"
                            >
                              ${this.msg['column.shiftId.label']}
                            </th>
                            <th
                              class="text-left py-2 px-3 text-[var(--text-primary-color,#403f3f)] font-semibold"
                            >
                              ${this.msg['column.startTime.label']}
                            </th>
                            <th
                              class="text-left py-2 px-3 text-[var(--text-primary-color,#403f3f)] font-semibold"
                            >
                              ${this.msg['column.endTime.label']}
                            </th>
                            <th
                              class="text-left py-2 px-3 text-[var(--text-primary-color,#403f3f)] font-semibold"
                            >
                              ${this.msg['column.createdAt.label']}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          ${items.map(
                            (item) => html`
                              <tr class="border-b border-[var(--grey-color,#E6E6E6)]">
                                <td
                                  class="py-2 px-3 text-[var(--text-primary-color,#403f3f)]"
                                  title="${item.shiftAssignmentId}"
                                >
                                  ${item.shiftAssignmentId.slice(0, 8)}…
                                </td>
                                <td class="py-2 px-3 text-[var(--text-primary-color,#403f3f)]">
                                  ${item.name}
                                </td>
                                <td
                                  class="py-2 px-3 text-[var(--text-primary-color,#403f3f)]"
                                  title="${item.shiftId}"
                                >
                                  ${item.shiftId.slice(0, 8)}…
                                </td>
                                <td class="py-2 px-3 text-[var(--text-primary-color,#403f3f)]">
                                  ${item.startTime}
                                </td>
                                <td class="py-2 px-3 text-[var(--text-primary-color,#403f3f)]">
                                  ${item.endTime}
                                </td>
                                <td class="py-2 px-3 text-[var(--text-primary-color,#403f3f)]">
                                  ${item.createdAt}
                                </td>
                              </tr>
                            `,
                          )}
                        </tbody>
                      </table>
                    </div>
                    ${data && data.total !== undefined
                      ? html`
                          <p
                            class="text-xs text-[var(--text-primary-color,#403f3f)] opacity-70"
                          >
                            ${data.total} registros
                          </p>
                        `
                      : ''}
                  `}
          </section>

          <!-- Organism 2: Assign Operator To Shift (commandForm) -->
          <section
            class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['org.assign.operator.to.shift.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['intention.commandForm.title']}
            </h3>

            <div class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <!-- Operator select -->
                <div class="flex flex-col gap-1">
                  <label
                    class="text-sm text-[var(--text-primary-color,#403f3f)]"
                    for="field_operatorId"
                  >
                    ${this.msg['field.operatorId.label']}
                  </label>
                  <select
                    id="field_operatorId"
                    class="px-3 py-2 rounded-md border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] text-sm"
                    .value="${this.assignOperatorToShiftOperatorId}"
                    @change="${this.handleAssignOperatorToShiftOperatorIdChange}"
                  >
                    <option value="">${this.msg['intention.commandForm.empty']}</option>
                    ${uniqueOperators.map(
                      (op) => html`
                        <option
                          value="${op.operatorId}"
                          ?selected="${this.assignOperatorToShiftOperatorId === op.operatorId}"
                        >
                          ${op.name}
                        </option>
                      `,
                    )}
                  </select>
                </div>

                <!-- Shift select -->
                <div class="flex flex-col gap-1">
                  <label
                    class="text-sm text-[var(--text-primary-color,#403f3f)]"
                    for="field_shiftId"
                  >
                    ${this.msg['field.shiftId.label']}
                  </label>
                  <select
                    id="field_shiftId"
                    class="px-3 py-2 rounded-md border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)] text-sm"
                    .value="${this.assignOperatorToShiftShiftId}"
                    @change="${this.handleAssignOperatorToShiftShiftIdChange}"
                  >
                    <option value="">${this.msg['intention.commandForm.empty']}</option>
                    ${uniqueShifts.map(
                      (s) => html`
                        <option
                          value="${s.shiftId}"
                          ?selected="${this.assignOperatorToShiftShiftId === s.shiftId}"
                        >
                          ${s.startTime}–${s.endTime}
                        </option>
                      `,
                    )}
                  </select>
                </div>
              </div>

              <button
                type="button"
                class="px-4 py-2 rounded-md bg-[var(--active-color,#1890FF)] text-white text-sm font-medium hover:opacity-90 disabled:opacity-50"
                ?disabled="${assignLoading ||
                !this.assignOperatorToShiftOperatorId ||
                !this.assignOperatorToShiftShiftId}"
                @click="${this.handleAssignOperatorToShiftClick}"
              >
                ${assignLoading
                  ? '...'
                  : this.msg['action.assignOperatorToShift.label']}
              </button>
            </div>

            <!-- Feedback region -->
            ${assignSuccess
              ? html`
                  <div
                    class="rounded-md p-3 border border-[var(--success-color,#52C41A)] text-sm text-[var(--text-primary-color,#403f3f)]"
                  >
                    ${this.msg['action.assignOperatorToShift.success']}
                  </div>
                `
              : ''}
            ${assignError
              ? html`
                  <div
                    class="rounded-md p-3 border border-[var(--error-color,#FF4D4F)] text-sm text-[var(--text-primary-color,#403f3f)]"
                  >
                    ${assignErrorMsg}
                  </div>
                `
              : ''}
          </section>

          <!-- Organism 3: Capacity Summary -->
          <section
            class="rounded-lg border border-[var(--grey-color,#E6E6E6)] bg-[var(--bg-primary-color,#ffffff)] p-4 space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['org.capacity.summary.title']}
            </h2>
            <h3 class="text-base font-medium text-[var(--text-primary-color,#403f3f)]">
              ${this.msg['intention.summary.title']}
            </h3>

            ${summaryEntries.length === 0
              ? html`
                  <p class="text-sm text-[var(--text-primary-color,#403f3f)] italic">
                    ${this.msg['intention.summary.empty']}
                  </p>
                `
              : html`
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${summaryEntries.map(
                      (entry) => html`
                        <div
                          class="rounded-md border border-[var(--grey-color,#E6E6E6)] p-3 space-y-2"
                        >
                          <div class="flex items-center justify-between">
                            <span
                              class="text-sm font-medium text-[var(--text-primary-color,#403f3f)]"
                            >
                              ${entry.startTime}–${entry.endTime}
                            </span>
                            <span
                              class="inline-flex items-center justify-center min-w-[2rem] h-8 px-2 rounded-full bg-[var(--active-color,#1890FF)] text-white text-sm font-bold"
                            >
                              ${entry.operatorNames.length}
                            </span>
                          </div>
                          <div
                            class="text-xs text-[var(--text-primary-color,#403f3f)] opacity-70"
                            title="${entry.shiftId}"
                          >
                            ${entry.shiftId.slice(0, 8)}…
                          </div>
                          <ul
                            class="text-sm text-[var(--text-primary-color,#403f3f)] space-y-1"
                          >
                            ${entry.operatorNames.map(
                              (name: string) => html` <li>${name}</li> `,
                            )}
                          </ul>
                        </div>
                      `,
                    )}
                  </div>
                `}
          </section>
        </div>
      </div>
    `;
  }
}
