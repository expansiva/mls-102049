/// <mls fileReference="_102049_/l2/petShop/web/desktop/page11/serviceExecution.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PetShopServiceExecutionBase } from '/_102049_/l2/petShop/web/shared/serviceExecution.js';

@customElement('pet-shop--web--desktop--page11--service-execution-102049')
export class PetShopDesktopPage11ServiceExecutionPage extends PetShopServiceExecutionBase {
  render() {
    const startLoading = this.startServiceExecutionState === 'loading';
    const startSuccess = this.startServiceExecutionState === 'success';
    const startError = this.startServiceExecutionState === 'error';
    const completeLoading = this.completeServiceExecutionState === 'loading';
    const completeSuccess = this.completeServiceExecutionState === 'success';
    const completeError = this.completeServiceExecutionState === 'error';

    const reviewOutput = this.completeServiceExecutionOutput ?? this.startServiceExecutionOutput;

    return html`
      <div class="min-h-full bg-[var(--bg-secondary-color,#F9F9F9)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-bold text-[var(--text-primary-color,#403f3f)]">
            ${this.msg['page.title']}
          </h1>

          <!-- Section: Agenda de atendimentos -->
          <section
            class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#E6E6E6)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
            >
              ${this.msg['sec.bookings.title']}
            </h2>

            <!-- Intention: queryList – Agendamentos atribuídos -->
            <div class="space-y-3">
              <h3
                class="text-sm font-medium text-[var(--text-primary-color,#403f3f)]"
              >
                ${this.msg['intention.bookingQuery.title']}
              </h3>

              <!-- Filter -->
              <div class="flex items-center gap-2">
                <label
                  class="text-sm text-[var(--text-primary-color,#403f3f)]"
                  for="filter_status_select"
                >
                  ${this.msg['filter.status']}
                </label>
                <select
                  id="filter_status_select"
                  class="border border-[var(--grey-color,#E6E6E6)] rounded px-2 py-1 text-sm bg-[var(--bg-primary-color,#ffffff)] text-[var(--text-primary-color,#403f3f)]"
                  disabled
                >
                  <option value="">${this.msg['filter.status']}</option>
                </select>
              </div>

              <!-- Table -->
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-[var(--grey-color,#E6E6E6)]">
                      <th
                        class="text-left py-2 px-3 font-medium text-[var(--text-primary-color,#403f3f)]"
                      >
                        ${this.msg['column.customerName']}
                      </th>
                      <th
                        class="text-left py-2 px-3 font-medium text-[var(--text-primary-color,#403f3f)]"
                      >
                        ${this.msg['column.bookingDate']}
                      </th>
                      <th
                        class="text-left py-2 px-3 font-medium text-[var(--text-primary-color,#403f3f)]"
                      >
                        ${this.msg['column.bookingTime']}
                      </th>
                      <th
                        class="text-left py-2 px-3 font-medium text-[var(--text-primary-color,#403f3f)]"
                      >
                        ${this.msg['column.status']}
                      </th>
                      <th
                        class="text-left py-2 px-3 font-medium text-[var(--text-primary-color,#403f3f)]"
                      >
                        ${this.msg['column.notes']}
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>

              <p
                class="text-sm text-[var(--text-primary-color-disabled,#525151)]"
              >
                ${this.msg['section.bookings.empty']}
              </p>
            </div>

            <!-- Intention: workflowStatus – Status do agendamento selecionado -->
            <div
              class="space-y-3 border-t border-[var(--grey-color,#E6E6E6)] pt-4"
            >
              <h3
                class="text-sm font-medium text-[var(--text-primary-color,#403f3f)]"
              >
                ${this.msg['intention.workflowStatus.title']}
              </h3>
              <div class="flex flex-wrap items-center gap-4">
                <div class="text-sm">
                  <span
                    class="text-[var(--text-primary-color-disabled,#525151)]"
                    >${this.msg['field.serviceBookingId']}:</span
                  >
                  <span
                    class="ml-1 text-[var(--text-primary-color,#403f3f)]"
                    >${this.startServiceExecutionServiceBookingId ||
                    this.completeServiceExecutionServiceBookingId ||
                    '—'}</span
                  >
                </div>
                <div class="text-sm">
                  <span
                    class="text-[var(--text-primary-color-disabled,#525151)]"
                    >${this.msg['column.status']}:</span
                  >
                  <span class="ml-1 text-[var(--text-primary-color,#403f3f)]"
                    >${this.status || '—'}</span
                  >
                </div>
              </div>
            </div>
          </section>

          <!-- Section: Iniciar atendimento -->
          <section
            class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#E6E6E6)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
            >
              ${this.msg['sec.start.service.title']}
            </h2>

            <div class="space-y-3">
              <h3
                class="text-sm font-medium text-[var(--text-primary-color,#403f3f)]"
              >
                ${this.msg['intention.startForm.title']}
              </h3>

              <!-- Hidden field: serviceBookingId (from selectedEntity) -->
              <input
                type="hidden"
                .value="${this.startServiceExecutionServiceBookingId}"
              />

              ${!this.startServiceExecutionServiceBookingId
                ? html`
                    <p
                      class="text-sm text-[var(--text-primary-color-disabled,#525151)]"
                    >
                      ${this.msg['section.start.empty']}
                    </p>
                  `
                : html``}

              <div class="flex items-center gap-3">
                <button
                  class="px-4 py-2 rounded text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--text-secondary-color,#1C91CD)] disabled:opacity-50"
                  ?disabled=${startLoading ||
                  !this.startServiceExecutionServiceBookingId}
                  @click=${() => this.handleStartServiceExecutionClick()}
                >
                  ${startLoading
                    ? html`<span class="inline-flex items-center gap-2">
                        <span
                          class="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                        ></span>
                        ${this.msg['action.startServiceExecution']}
                      </span>`
                    : this.msg['action.startServiceExecution']}
                </button>
              </div>

              ${startSuccess
                ? html`
                    <div
                      class="rounded p-3 text-sm bg-[var(--success-color,#52C41A)] text-[var(--bg-primary-color,#ffffff)]"
                    >
                      ${this.msg['action.startServiceExecution.success']}
                    </div>
                  `
                : html``}

              ${startError
                ? html`
                    <div
                      class="rounded p-3 text-sm bg-[var(--error-color,#FF4D4F)] text-[var(--bg-primary-color,#ffffff)]"
                    >
                      ${this.startServiceExecutionError ||
                      this.msg['action.startServiceExecution.error']}
                    </div>
                  `
                : html``}
            </div>
          </section>

          <!-- Section: Concluir serviço -->
          <section
            class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#E6E6E6)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
            >
              ${this.msg['sec.complete.service.title']}
            </h2>

            <div class="space-y-3">
              <h3
                class="text-sm font-medium text-[var(--text-primary-color,#403f3f)]"
              >
                ${this.msg['intention.completeForm.title']}
              </h3>

              <!-- Hidden field: serviceBookingId (from selectedEntity) -->
              <input
                type="hidden"
                .value="${this.completeServiceExecutionServiceBookingId}"
              />

              ${!this.completeServiceExecutionServiceBookingId
                ? html`
                    <p
                      class="text-sm text-[var(--text-primary-color-disabled,#525151)]"
                    >
                      ${this.msg['section.complete.empty']}
                    </p>
                  `
                : html``}

              <div class="flex items-center gap-3">
                <button
                  class="px-4 py-2 rounded text-sm font-medium text-[var(--bg-primary-color,#ffffff)] bg-[var(--text-secondary-color,#1C91CD)] disabled:opacity-50"
                  ?disabled=${completeLoading ||
                  !this.completeServiceExecutionServiceBookingId}
                  @click=${() => this.handleCompleteServiceExecutionClick()}
                >
                  ${completeLoading
                    ? html`<span class="inline-flex items-center gap-2">
                        <span
                          class="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                        ></span>
                        ${this.msg['action.completeServiceExecution']}
                      </span>`
                    : this.msg['action.completeServiceExecution']}
                </button>
              </div>

              ${completeSuccess
                ? html`
                    <div
                      class="rounded p-3 text-sm bg-[var(--success-color,#52C41A)] text-[var(--bg-primary-color,#ffffff)]"
                    >
                      ${this.msg['action.completeServiceExecution.success']}
                    </div>
                  `
                : html``}

              ${completeError
                ? html`
                    <div
                      class="rounded p-3 text-sm bg-[var(--error-color,#FF4D4F)] text-[var(--bg-primary-color,#ffffff)]"
                    >
                      ${this.completeServiceExecutionError ||
                      this.msg['action.completeServiceExecution.error']}
                    </div>
                  `
                : html``}
            </div>
          </section>

          <!-- Section: Resumo da execução -->
          <section
            class="rounded-lg bg-[var(--bg-primary-color,#ffffff)] border border-[var(--grey-color,#E6E6E6)] p-4 space-y-4"
          >
            <h2
              class="text-lg font-semibold text-[var(--text-primary-color,#403f3f)]"
            >
              ${this.msg['sec.review.title']}
            </h2>

            <div class="space-y-3">
              <h3
                class="text-sm font-medium text-[var(--text-primary-color,#403f3f)]"
              >
                ${this.msg['intention.review.title']}
              </h3>

              ${reviewOutput
                ? html`
                    <dl
                      class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
                    >
                      <div>
                        <dt
                          class="text-[var(--text-primary-color-disabled,#525151)]"
                        >
                          ${this.msg['field.serviceBookingId']}
                        </dt>
                        <dd class="text-[var(--text-primary-color,#403f3f)]">
                          ${reviewOutput.serviceBookingId}
                        </dd>
                      </div>
                      <div>
                        <dt
                          class="text-[var(--text-primary-color-disabled,#525151)]"
                        >
                          ${this.msg['column.status']}
                        </dt>
                        <dd class="text-[var(--text-primary-color,#403f3f)]">
                          ${reviewOutput.status}
                        </dd>
                      </div>
                      ${'updatedAt' in reviewOutput
                        ? html`
                            <div>
                              <dt
                                class="text-[var(--text-primary-color-disabled,#525151)]"
                              >
                                ${this.msg['column.updatedAt']}
                              </dt>
                              <dd
                                class="text-[var(--text-primary-color,#403f3f)]"
                              >
                                ${reviewOutput.updatedAt}
                              </dd>
                            </div>
                          `
                        : html``}
                      ${'completedAt' in reviewOutput
                        ? html`
                            <div>
                              <dt
                                class="text-[var(--text-primary-color-disabled,#525151)]"
                              >
                                ${this.msg['column.completedAt']}
                              </dt>
                              <dd
                                class="text-[var(--text-primary-color,#403f3f)]"
                              >
                                ${reviewOutput.completedAt}
                              </dd>
                            </div>
                          `
                        : html``}
                    </dl>
                  `
                : html`
                    <p
                      class="text-sm text-[var(--text-primary-color-disabled,#525151)]"
                    >
                      ${this.msg['section.review.empty']}
                    </p>
                  `}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
