/// <mls fileReference="_102049_/l1/petShop/layer_2_application/usecases/expressAdoptionInterest.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IAdoptionInterestRepository } from '/_102049_/l1/petShop/layer_2_application/ports/adoptionInterestRepository.js';
import type { IAdoptablePetRepository } from '/_102049_/l1/petShop/layer_2_application/ports/adoptablePetRepository.js';
import type { AdoptionInterest } from '/_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.js';

export interface ExpressAdoptionInterestInput {
  adoptablePetId: string;
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
}

export interface ExpressAdoptionInterestOutput {
  adoptionInterestId: string;
  status: string;
  adoptablePetId: string;
  customerName: string;
  createdAt: string;
}

export async function expressAdoptionInterest(
  ctx: RequestContext,
  input: ExpressAdoptionInterestInput,
): Promise<ExpressAdoptionInterestOutput> {
  const adoptablePets = resolveRepository<IAdoptablePetRepository>(ctx, 'AdoptablePet');
  const adoptionInterests = resolveRepository<IAdoptionInterestRepository>(ctx, 'AdoptionInterest');

  // 1. Load the selected AdoptablePet
  const pet = await adoptablePets.getById(input.adoptablePetId);

  // 2. Validate the AdoptablePet exists and its status is 'available'
  if (!pet) {
    throw new AppError(
      'NOT_FOUND',
      `Adoptable pet not found: ${input.adoptablePetId}`,
      404,
      { adoptablePetId: input.adoptablePetId },
    );
  }
  if (pet.status !== 'available') {
    throw new AppError(
      'VALIDATION_ERROR',
      'The selected pet is not available for adoption. Adoption starts online and finishes in store.',
      400,
      { ruleId: 'adoptionStartedOnlineFinishedInStore', adoptablePetId: input.adoptablePetId, petStatus: pet.status },
    );
  }

  // 3. Validate customerName and customerEmail
  if (!input.customerName || input.customerName.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'customerName is required and must be a non-empty string.',
      400,
      { field: 'customerName' },
    );
  }
  if (!input.customerEmail || input.customerEmail.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'customerEmail is required and must be a non-empty string.',
      400,
      { field: 'customerEmail' },
    );
  }

  // 4. Generate adoptionInterestId
  const adoptionInterestId = ctx.idGenerator.newId();

  // 5–7. Build the AdoptionInterest aggregate
  const now = ctx.clock.nowIso();
  const interest: AdoptionInterest = {
    adoptionInterestId,
    adoptablePetId: input.adoptablePetId,
    customerName: input.customerName,
    customerEmail: input.customerEmail,
    customerPhone: input.customerPhone ?? null,
    status: 'registered',
    operatorId: null,
    verificationNotes: null,
    completedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    createdAt: now,
    updatedAt: now,
  };

  // 8. Save inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await adoptionInterests.save(interest);
  });

  // 9. Return output
  return {
    adoptionInterestId: interest.adoptionInterestId,
    status: interest.status,
    adoptablePetId: interest.adoptablePetId,
    customerName: interest.customerName,
    createdAt: interest.createdAt,
  };
}
