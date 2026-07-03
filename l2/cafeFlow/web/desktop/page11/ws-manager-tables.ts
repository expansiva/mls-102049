/// <mls fileReference="_102049_/l2/cafeFlow/web/desktop/page11/ws-manager-tables.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowWsManagerTablesBase } from '/_102049_/l2/cafeFlow/web/shared/ws-manager-tables.js';
import type { CafeFlowQueryTablesOutputItem } from '/_102049_/l2/cafeFlow/web/contracts/ws-manager-tables.js';

@customElement('cafe-flow--web--desktop--page11--ws-manager-tables-102049')
export class CafeFlowDesktopPage11WsManagerTablesPage extends CafeFlowWsManagerTablesBase {
render() {
const tableRows = this.queryTablesData.map(
(item: CafeFlowQueryTablesOutputItem) => html`
<tr class="border-t border-slate-200 dark:border-slate-800">
<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.tableId}</td>
<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.number}</td>
<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.name}</td>
<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.status}</td>
<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.createdAt}</td>
<td class="px-3 py-2 text-sm text-slate-700 dark:text-slate-200">${item.updatedAt}</td>
</tr>
`,
);
const summaryItem = this.queryTablesData.length > 0 ? this.queryTablesData[0] : null;
return html`
<div class="min-h-full bg-slate-50 dark:bg-slate-950">
<div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
<header>
<h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">
${this.msg['ws-manager-tables.section.gestaoMesas.title'] ?? ''}
</h1>
</header>
<section class="rounded-lg bg-white dark:bg-slate-900 shadow-sm p-4 space-y-6">
<div class="space-y-4">
<h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
${this.msg['ws-manager-tables.organism.queryTables.title'] ?? ''}
</h2>
<div class="space-y-3">
<div class="grid gap-4 md:grid-cols-2">
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.filter.tableId'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.queryTablesTableId}
@input=${this.handleQueryTablesTableIdChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.filter.name'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.queryTablesName}
@input=${this.handleQueryTablesNameChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.filter.status'] ?? ''}
<select
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.value=${this.queryTablesStatus}
@change=${this.handleQueryTablesStatusChange}
>
<option value=""></option>
<option value="active">active</option>
<option value="inactive">inactive</option>
</select>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.filter.createdAt'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'date'}
.value=${this.queryTablesCreatedAt}
@input=${this.handleQueryTablesCreatedAtChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.filter.updatedAt'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'date'}
.value=${this.queryTablesUpdatedAt}
@input=${this.handleQueryTablesUpdatedAtChange}
/>
</label>
</div>
<div class="flex items-center gap-2">
<button
class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900"
@click=${this.handleQueryTablesClick}
>
${this.msg['ws-manager-tables.action.queryTables'] ?? ''}
</button>
</div>
<div class="overflow-x-auto">
<table class="min-w-full border border-slate-200 dark:border-slate-800">
<thead class="bg-slate-100 dark:bg-slate-800">
<tr>
<th class="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
${this.msg['ws-manager-tables.table.tableId'] ?? ''}
</th>
<th class="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
${this.msg['ws-manager-tables.table.number'] ?? ''}
</th>
<th class="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
${this.msg['ws-manager-tables.table.name'] ?? ''}
</th>
<th class="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
${this.msg['ws-manager-tables.table.status'] ?? ''}
</th>
<th class="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
${this.msg['ws-manager-tables.table.createdAt'] ?? ''}
</th>
<th class="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
${this.msg['ws-manager-tables.table.updatedAt'] ?? ''}
</th>
</tr>
</thead>
<tbody>
${tableRows.length > 0
? tableRows
: html`<tr class="border-t border-slate-200 dark:border-slate-800">
<td class="px-3 py-4" colspan="6"></td>
</tr>`}
</tbody>
</table>
</div>
</div>
</div>
<div class="space-y-4">
<h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
${this.msg['ws-manager-tables.organism.createTable.title'] ?? ''}
</h2>
<div class="grid gap-4 md:grid-cols-2">
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.number'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.createTableNumber}
@input=${this.handleCreateTableNumberChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.name'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.createTableName}
@input=${this.handleCreateTableNameChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.status'] ?? ''}
<select
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.value=${this.createTableStatus}
@change=${this.handleCreateTableStatusChange}
>
<option value=""></option>
<option value="active">active</option>
<option value="inactive">inactive</option>
</select>
</label>
</div>
<div class="flex items-center gap-2">
<button
class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900"
@click=${this.handleCreateTableClick}
>
${this.msg['ws-manager-tables.action.createTable'] ?? ''}
</button>
</div>
</div>
<div class="space-y-4">
<h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
${this.msg['ws-manager-tables.organism.updateTable.title'] ?? ''}
</h2>
<div class="grid gap-4 md:grid-cols-2">
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.number'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.updateTableNumber}
@input=${this.handleUpdateTableNumberChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.name'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.updateTableName}
@input=${this.handleUpdateTableNameChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.status'] ?? ''}
<select
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.value=${this.updateTableStatus}
@change=${this.handleUpdateTableStatusChange}
>
<option value=""></option>
<option value="active">active</option>
<option value="inactive">inactive</option>
</select>
</label>
</div>
<div class="flex items-center gap-2">
<button
class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900"
@click=${this.handleUpdateTableClick}
>
${this.msg['ws-manager-tables.action.updateTable'] ?? ''}
</button>
</div>
</div>
<div class="space-y-4">
<h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
${this.msg['ws-manager-tables.organism.deleteTable.title'] ?? ''}
</h2>
<div class="grid gap-4 md:grid-cols-2">
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.tableId'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.deleteTableTableId}
@input=${this.handleDeleteTableTableIdChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.number'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.deleteTableNumber}
@input=${this.handleDeleteTableNumberChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.name'] ?? ''}
<input
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.type=${'text'}
.value=${this.deleteTableName}
@input=${this.handleDeleteTableNameChange}
/>
</label>
<label class="text-sm text-slate-600 dark:text-slate-300">
${this.msg['ws-manager-tables.field.status'] ?? ''}
<select
class="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
.value=${this.deleteTableStatus}
@change=${this.handleDeleteTableStatusChange}
>
<option value=""></option>
<option value="active">active</option>
<option value="inactive">inactive</option>
</select>
</label>
</div>
<div class="flex items-center gap-2">
<button
class="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900"
@click=${this.handleDeleteTableClick}
>
${this.msg['ws-manager-tables.action.deleteTable'] ?? ''}
</button>
</div>
</div>
<div class="space-y-4">
<h2 class="text-lg font-semibold text-slate-800 dark:text-slate-200">
${this.msg['ws-manager-tables.organism.summary.title'] ?? ''}
</h2>
<div class="rounded-md border border-slate-200 p-4 dark:border-slate-800">
<div class="grid gap-3 md:grid-cols-2">
<div>
<p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
${this.msg['ws-manager-tables.table.tableId'] ?? ''}
</p>
<p class="text-sm text-slate-800 dark:text-slate-200">${summaryItem?.tableId ?? ''}</p>
</div>
<div>
<p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
${this.msg['ws-manager-tables.table.number'] ?? ''}
</p>
<p class="text-sm text-slate-800 dark:text-slate-200">${summaryItem?.number ?? ''}</p>
</div>
<div>
<p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
${this.msg['ws-manager-tables.table.name'] ?? ''}
</p>
<p class="text-sm text-slate-800 dark:text-slate-200">${summaryItem?.name ?? ''}</p>
</div>
<div>
<p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
${this.msg['ws-manager-tables.table.status'] ?? ''}
</p>
<p class="text-sm text-slate-800 dark:text-slate-200">${summaryItem?.status ?? ''}</p>
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
