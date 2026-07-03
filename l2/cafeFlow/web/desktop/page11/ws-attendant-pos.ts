/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-attendant-pos.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowWsAttendantPosBase } from '/_102049_/l2/cafeFlow/web/shared/ws-attendant-pos.js';

@customElement('cafe-flow--web--desktop--page11--ws-attendant-pos-102049')
export class CafeFlowDesktopPage11WsAttendantPosPage extends CafeFlowWsAttendantPosBase {
  render() {
    const pageTitle = this.msg['ws-attendant-pos.section.main.title'] ?? '';
    return html`
      <div class="min-h-full bg-slate-50 dark:bg-slate-950">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header>
            <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">${pageTitle}</h1>
          </header>

          <section class="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-6">
            <h2 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
              ${this.msg['ws-attendant-pos.section.main.title'] ?? ''}
            </h2>

            <div class="space-y-6">
              <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-4">
                <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">
                  ${this.msg['ws-attendant-pos.organism.createOrder.title'] ?? ''}
                </h3>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.createOrder.step.selectTable.title'] ?? ''}
                  </h4>
                  <label class="block text-sm text-slate-700 dark:text-slate-300">
                    ${this.msg['ws-attendant-pos.field.orderType.label'] ?? ''}
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                    .value=${this.createOrderOrderType ?? ''}
                    @change=${this.handleCreateOrderOrderTypeChange}
                  >
                    <option value=""></option>
                    <option value="dineIn">dineIn</option>
                    <option value="takeout">takeout</option>
                  </select>
                </div>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.createOrder.step.addItems.title'] ?? ''}
                  </h4>
                  <div class="text-sm text-slate-500 dark:text-slate-400"></div>
                </div>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.createOrder.step.applyCombos.title'] ?? ''}
                  </h4>
                  <div class="text-sm text-slate-500 dark:text-slate-400"></div>
                </div>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.createOrder.step.confirmSend.title'] ?? ''}
                  </h4>
                  <label class="block text-sm text-slate-700 dark:text-slate-300">
                    ${this.msg['ws-attendant-pos.field.status.label'] ?? ''}
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                    .value=${this.createOrderStatus ?? ''}
                    @change=${this.handleCreateOrderStatusChange}
                  >
                    <option value=""></option>
                    <option value="pending">pending</option>
                    <option value="inKitchen">inKitchen</option>
                    <option value="preparing">preparing</option>
                    <option value="ready">ready</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                  <label class="block text-sm text-slate-700 dark:text-slate-300">
                    ${this.msg['ws-attendant-pos.field.total.label'] ?? ''}
                  </label>
                  <input
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                    type="number"
                    .value=${this.createOrderTotal === '' ? '' : String(this.createOrderTotal)}
                    @input=${this.handleCreateOrderTotalChange}
                  />
                  <div class="flex flex-wrap gap-2 pt-2">
                    <button
                      class="rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 text-sm"
                      ?disabled=${this.createOrderState === 'loading'}
                      @click=${this.handleCreateOrderClick}
                    >
                      ${this.msg['ws-attendant-pos.action.createOrder.label'] ?? ''}
                    </button>
                  </div>
                </div>
              </div>

              <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4 space-y-4">
                <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">
                  ${this.msg['ws-attendant-pos.organism.settleOrder.title'] ?? ''}
                </h3>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.settleOrder.step.verifyReady.title'] ?? ''}
                  </h4>
                  <ul class="text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                    <li>${this.status ?? ''}</li>
                  </ul>
                </div>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.settleOrder.step.confirmDelivery.title'] ?? ''}
                  </h4>
                  <div class="text-sm text-slate-500 dark:text-slate-400"></div>
                </div>

                <div class="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                  <h4 class="text-sm font-semibold text-slate-900 dark:text-slate-100">
                    ${this.msg['ws-attendant-pos.settleOrder.step.finalize.title'] ?? ''}
                  </h4>
                  <label class="block text-sm text-slate-700 dark:text-slate-300">
                    ${this.msg['ws-attendant-pos.field.status.label'] ?? ''}
                  </label>
                  <select
                    class="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                    .value=${this.settleOrderStatus ?? ''}
                    @change=${this.handleSettleOrderStatusChange}
                  >
                    <option value=""></option>
                    <option value="pending">pending</option>
                    <option value="inKitchen">inKitchen</option>
                    <option value="preparing">preparing</option>
                    <option value="ready">ready</option>
                    <option value="delivered">delivered</option>
                    <option value="cancelled">cancelled</option>
                  </select>
                  <div class="flex flex-wrap gap-2 pt-2">
                    <button
                      class="rounded-md bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 px-4 py-2 text-sm"
                      ?disabled=${this.settleOrderState === 'loading'}
                      @click=${this.handleSettleOrderClick}
                    >
                      ${this.msg['ws-attendant-pos.action.settleOrder.label'] ?? ''}
                    </button>
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
