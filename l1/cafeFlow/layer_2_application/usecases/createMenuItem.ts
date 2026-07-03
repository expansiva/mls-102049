/// <mls fileReference="_102049_/l1/cafeFlow/layer_2_application/usecases/createMenuItem.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateMenuItemInput {
  name: string;
  category: string;
  price: number;
  description?: string;
  status: string;
}

export interface CreateMenuItemOutput {
  menuItemId: string;
  name: string;
  category: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export async function createMenuItem(
  ctx: RequestContext,
  input: CreateMenuItemInput,
): Promise<CreateMenuItemOutput> {
  // --- Validate required fields ---
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name é obrigatório.', 400, { field: 'name' });
  }
  if (!input.category || input.category.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'category é obrigatório.', 400, { field: 'category' });
  }
  if (input.price === undefined || input.price === null) {
    throw new AppError('VALIDATION_ERROR', 'price é obrigatório.', 400, { field: 'price' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status é obrigatório.', 400, { field: 'status' });
  }

  // --- Validate status enum ---
  const validStatuses = ['active', 'inactive'];
  if (!validStatuses.includes(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `status deve ser 'active' ou 'inactive'.`,
      400,
      { field: 'status', value: input.status },
    );
  }

  // --- Apply comboPriceDifference rule ---
  // Price must be positive — a combo or standalone item cannot have a zero or negative price.
  if (input.price <= 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'comboPriceDifference: o preço do item deve ser maior que zero.',
      400,
      { ruleId: 'comboPriceDifference', field: 'price', value: input.price },
    );
  }

  const now = ctx.clock.nowIso();
  const menuItemId = ctx.idGenerator.newId();
  const mdmStatus = input.status === 'active' ? 'Active' : 'Inactive';

  // --- Persist MenuItem as an MDM record (cadastral data) ---
  await ctx.data.runInTransaction(async (tx) => {
    await tx.mdmDocument.put({
      record: {
        mdmId: menuItemId,
        version: 1,
        details: {
          mdmId: menuItemId,
          subtype: 'Product',
          name: input.name,
          status: mdmStatus,
          countryCode: 'BR',
          tags: [],
          aliases: [],
          contacts: [],
          relationshipRefs: {},
          addresses: [],
          createdAt: now,
          updatedAt: now,
          cafeFlow: {
            category: input.category,
            price: input.price,
            description: input.description ?? null,
            lifecycleStatus: input.status,
          },
        },
      },
    });
  });

  return {
    menuItemId,
    name: input.name,
    category: input.category,
    price: input.price,
    status: input.status,
    createdAt: now,
    updatedAt: now,
  };
}
