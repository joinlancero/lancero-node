export interface ICode {
  code: string;
  allowedClaims: number;
  validFrom: Date;
  validUntil: Date;
  claims: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomer {
  firstname: string;
  lastname: string;
  email: string;
  notes: string;
  hasClaimedCode: boolean;
  onWaitlist: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomerWithClaim extends ICustomer {
  has_claimed_code: boolean;
  claimed_code: { code: string; allowed_claims: number } | undefined;
}
