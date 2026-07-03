/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createTable.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateTableInput {
  number: string;
  name?: string;
  status: string;
}

export interface CreateTableOutput {
  tableId: string;
  number: string;
  name: string | null;
  status: string;
  createdAt: string;
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

export async function createTable(
  ctx: RequestContext,
  input: CreateTableInput,
): Promise<CreateTableOutput> {
  // 1. Validate number is not empty
  if (!input.number || input.number.trim() === '') {
    throw new AppError(
      'VALIDATION_ERROR',
      'number é obrigatório e não pode ser vazio.',
      400,
      { field: 'number' },
    );
  }

  // 2. Validate status is one of the allowed values
  if (!isAllowedStatus(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `status deve ser um dos valores permitidos: ${ALLOWED_STATUSES.join(' | ')}.`,
      400,
      { field: 'status', allowed: [...ALLOWED_STATUSES] },
    );
  }

  const now = ctx.clock.nowIso();
  const tableId = ctx.idGenerator.newId();
  const mdmStatus = toMdmStatus(input.status);

  // 3. Build the MDM record — Table is master data (AssetGeneric subtype)
  //    Module-specific fields go under the `cafeFlow` namespace in details.
  const moduleFields = {
    number: input.number,
    name: input.name ?? null,
    status: input.status,
  };

  // 4. Persist via mdmDocument.put inside a transaction
  await ctx.data.runInTransaction(async () => {
    await ctx.data.mdmDocument.put({
      record: {
        mdmId: tableId,
        version: 1,
        details: {
          mdmId: tableId,
          subtype: 'AssetGeneric',
          name: input.name ?? input.number,
          status: mdmStatus,
          countryCode: 'BR',
          tags: [],
          aliases: [],
          contacts: [],
          relationshipRefs: {},
          addresses: [],
          createdAt: now,
          updatedAt: now,
          cafeFlow: moduleFields,
        },
      },
    });
  });

  // 5. Return the created table data
  return {
    tableId,
    number: input.number,
    name: input.name ?? null,
    status: input.status,
    createdAt: now,
    updatedAt: now,
  };
}
