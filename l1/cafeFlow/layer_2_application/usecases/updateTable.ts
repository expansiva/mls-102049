/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/updateTable.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateTableInput {
  tableId: string;
  number: string;
  name?: string;
  status: string;
}

export interface UpdateTableOutput {
  tableId: string;
  number: string;
  name: string | null;
  status: string;
  updatedAt: string;
}

const ALLOWED_STATUSES = ['active', 'inactive'] as const;
type AllowedStatus = (typeof ALLOWED_STATUSES)[number];

function isAllowedStatus(value: string): value is AllowedStatus {
  return (ALLOWED_STATUSES as readonly string[]).includes(value);
}

function toMdmStatus(status: AllowedStatus): 'Active' | 'Inactive' {
  return status === 'active' ? 'Active' : 'Inactive';
}

function fromMdmStatus(status: string): string {
  return status === 'Active' ? 'active' : 'inactive';
}

export async function updateTable(
  ctx: RequestContext,
  input: UpdateTableInput,
): Promise<UpdateTableOutput> {
  // Validate status
  if (!isAllowedStatus(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `status deve ser um dos valores permitidos: ${ALLOWED_STATUSES.join(', ')}.`,
      400,
      { field: 'status', received: input.status },
    );
  }

  const now = ctx.clock.nowIso();

  // Load the existing MDM document for the table
  const doc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
  if (!doc) {
    throw new AppError(
      'NOT_FOUND',
      `Mesa não encontrada: ${input.tableId}`,
      404,
      { mdmId: input.tableId },
    );
  }

  const existingDetails = doc.details as Record<string, unknown>;
  const existingCafeFlow = (existingDetails.cafeFlow as Record<string, unknown> | undefined) ?? {};

  // Preserve createdAt, override updatedAt and the editable fields
  const updatedDetails = {
    ...existingDetails,
    name: input.name ?? (existingDetails.name as string | undefined) ?? null,
    status: toMdmStatus(input.status),
    updatedAt: now,
    cafeFlow: {
      ...existingCafeFlow,
      number: input.number,
      name: input.name ?? (existingCafeFlow.name as string | undefined) ?? null,
      status: input.status,
      updatedAt: now,
    },
  };

  await ctx.data.mdmDocument.put({
    record: {
      ...doc,
      details: updatedDetails,
    },
    expectedVersion: doc.version,
  });

  return {
    tableId: input.tableId,
    number: input.number,
    name: input.name ?? (existingDetails.name as string | null) ?? null,
    status: input.status,
    updatedAt: now,
  };
}
