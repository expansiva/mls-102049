/// <mls fileReference="_102049_/l1/petShop/layer_3_domain/entities/adoptionInterest.ts" enhancement="_blank"/>

export type AdoptionInterestStatus = 'registered' | 'completed' | 'cancelled';

export interface AdoptionInterest {
  adoptionInterestId: string;
  adoptablePetId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string | null;
  status: AdoptionInterestStatus;
  operatorId: string | null;
  verificationNotes: string | null;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  createdAt: string;
  updatedAt: string;
}

export const ADOPTION_INTEREST_STATUS_TRANSITIONS: Record<AdoptionInterestStatus, AdoptionInterestStatus[]> = {
  registered: ['completed', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransitionAdoptionInterest(
  from: AdoptionInterestStatus,
  to: AdoptionInterestStatus,
): boolean {
  return ADOPTION_INTEREST_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function validateAdoptionInterest(
  interest: AdoptionInterest,
): string[] {
  const errors: string[] = [];

  if (
    interest.status !== 'registered' &&
    interest.status !== 'completed' &&
    interest.status !== 'cancelled'
  ) {
    errors.push("status must be 'registered', 'completed', or 'cancelled'");
  }

  if (interest.status === 'completed') {
    if (!interest.operatorId) {
      errors.push('when status is completed, operatorId must be set');
    }
    if (!interest.completedAt) {
      errors.push('when status is completed, completedAt must be set');
    }
  }

  if (interest.status === 'cancelled') {
    if (!interest.cancelledAt) {
      errors.push('when status is cancelled, cancelledAt must be set');
    }
    if (!interest.cancellationReason) {
      errors.push('when status is cancelled, cancellationReason must be set');
    }
  }

  if (interest.completedAt && interest.cancelledAt) {
    errors.push(
      'completedAt and cancelledAt are mutually exclusive — an interest cannot be both completed and cancelled',
    );
  }

  if (
    interest.operatorId &&
    interest.status !== 'completed' &&
    interest.status !== 'registered'
  ) {
    errors.push(
      'operatorId is only set when the interest is being verified or completed by an operator',
    );
  }

  if (interest.updatedAt < interest.createdAt) {
    errors.push('updatedAt must be greater than or equal to createdAt');
  }

  return errors;
}
