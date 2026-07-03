/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-cook-kitchen.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowWsCookKitchenBase } from '/_102049_/l2/cafeFlow/web/shared/ws-cook-kitchen.js';

@customElement('cafe-flow--web--desktop--page11--ws-cook-kitchen-102049')
export class CafeFlowDesktopPage11WsCookKitchenPage extends CafeFlowWsCookKitchenBase {
render() {
const statusValue = this.updateKitchenStatusStatus === '' ? '' : String(this.updateKitchenStatusStatus);
const previousStatusValue = this.updateKitchenStatusPreviousStatus === ''
? ''
: String(this.updateKitchenStatusPreviousStatus);
const movementTypeValue = this.createStockMovementMovementType === ''
? ''
: String(this.createStockMovementMovementType);
const quantityValue = this.createStockMovementQuantity === ''
? ''
: String(this.createStockMovementQuantity);
const reasonValue = this.createStockMovementReason === '' ? '' : String(this.createStockMovementReason);

return html`
<div class="min-h-full bg-slate-50 dark:bg-slate-950">
  <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
    <header class="space-y-1">
      <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        ${this.msg['ws-cook-kitchen.section.kitchenQueue.title'] ?? ''}
      </h1>
    </header>

    <section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm p-4 space-y-6">
      <h2 class="text-xl font-semibold text-slate-900 dark:text-slate-100">
        ${this.msg['ws-cook-kitchen.section.kitchenQueue.title'] ?? ''}
      </h2>

      <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
          ${this.msg['ws-cook-kitchen.organism.updateKitchenStatus.title'] ?? ''}
        </h3>

        <div class="space-y-3">
          <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['ws-cook-kitchen.intent.ticketQueue.title'] ?? ''}
          </h4>
          <div class="overflow-x-auto rounded-md border border-slate-200 dark:border-slate-800">
            <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
              <thead class="bg-slate-100 dark:bg-slate-800">
                <tr>
                  <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ${this.msg['ws-cook-kitchen.field.orderId'] ?? ''}
                  </th>
                  <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ${this.msg['ws-cook-kitchen.field.orderType'] ?? ''}
                  </th>
                  <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ${this.msg['ws-cook-kitchen.field.tableId'] ?? ''}
                  </th>
                  <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ${this.msg['ws-cook-kitchen.field.orderStatus'] ?? ''}
                  </th>
                  <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ${this.msg['ws-cook-kitchen.field.total'] ?? ''}
                  </th>
                  <th class="px-3 py-2 text-left text-xs font-semibold text-slate-600 dark:text-slate-300">
                    ${this.msg['ws-cook-kitchen.field.createdAt'] ?? ''}
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                <tr>
                  <td class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">${this.LayoutColOrderId}</td>
                  <td class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">${this.LayoutColOrderType}</td>
                  <td class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">${this.LayoutColTableId}</td>
                  <td class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">${statusValue}</td>
                  <td class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">${this.LayoutColTotal}</td>
                  <td class="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">${this.LayoutColCreatedAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="space-y-3">
          <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['ws-cook-kitchen.intent.startPreparation.title'] ?? ''}
          </h4>
          <div class="grid gap-4 md:grid-cols-2">
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.previousStatus'] ?? ''}
              <select
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                .value=${previousStatusValue}
                @change=${this.handleUpdateKitchenStatusPreviousStatusChange}
              >
                <option value=""></option>
                <option value="criado">criado</option>
                <option value="em preparo">em preparo</option>
                <option value="pronto">pronto</option>
                <option value="entregue">entregue</option>
                <option value="cancelado">cancelado</option>
              </select>
            </label>
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.status'] ?? ''}
              <select
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                .value=${statusValue}
                @change=${this.handleUpdateKitchenStatusStatusChange}
              >
                <option value=""></option>
                <option value="criado">criado</option>
                <option value="em preparo">em preparo</option>
                <option value="pronto">pronto</option>
                <option value="entregue">entregue</option>
                <option value="cancelado">cancelado</option>
              </select>
            </label>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
              @click=${this.handleUpdateKitchenStatusClick}
            >
              ${this.msg['ws-cook-kitchen.action.updateKitchenStatus'] ?? ''}
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['ws-cook-kitchen.intent.markReady.title'] ?? ''}
          </h4>
          <div class="grid gap-4 md:grid-cols-2">
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.previousStatus'] ?? ''}
              <select
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                .value=${previousStatusValue}
                @change=${this.handleUpdateKitchenStatusPreviousStatusChange}
              >
                <option value=""></option>
                <option value="criado">criado</option>
                <option value="em preparo">em preparo</option>
                <option value="pronto">pronto</option>
                <option value="entregue">entregue</option>
                <option value="cancelado">cancelado</option>
              </select>
            </label>
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.status'] ?? ''}
              <select
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                .value=${statusValue}
                @change=${this.handleUpdateKitchenStatusStatusChange}
              >
                <option value=""></option>
                <option value="criado">criado</option>
                <option value="em preparo">em preparo</option>
                <option value="pronto">pronto</option>
                <option value="entregue">entregue</option>
                <option value="cancelado">cancelado</option>
              </select>
            </label>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
              @click=${this.handleUpdateKitchenStatusClick}
            >
              ${this.msg['ws-cook-kitchen.action.markReady'] ?? ''}
            </button>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-4">
        <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">
          ${this.msg['ws-cook-kitchen.organism.createStockMovement.title'] ?? ''}
        </h3>

        <div class="space-y-3">
          <h4 class="text-base font-medium text-slate-800 dark:text-slate-200">
            ${this.msg['ws-cook-kitchen.intent.stockMovement.title'] ?? ''}
          </h4>
          <div class="grid gap-4 md:grid-cols-3">
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.movementType'] ?? ''}
              <select
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                .value=${movementTypeValue}
                @change=${this.handleCreateStockMovementMovementTypeChange}
              >
                <option value=""></option>
                <option value="baixa">baixa</option>
                <option value="reposicao">reposicao</option>
              </select>
            </label>
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.quantity'] ?? ''}
              <input
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                type="number"
                .value=${quantityValue}
                @change=${this.handleCreateStockMovementQuantityChange}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm text-slate-700 dark:text-slate-200">
              ${this.msg['ws-cook-kitchen.field.reason'] ?? ''}
              <input
                class="rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm"
                type="text"
                .value=${reasonValue}
                @change=${this.handleCreateStockMovementReasonChange}
              />
            </label>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              class="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900"
              @click=${this.handleCreateStockMovementClick}
            >
              ${this.msg['ws-cook-kitchen.action.createStockMovement'] ?? ''}
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
