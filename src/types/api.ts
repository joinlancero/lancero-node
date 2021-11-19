export interface ICode {
  code: string;
  allowed_claims: number;
  validFrom: Date;
  validUntil: Date;
  claims: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomer {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomerWithClaim extends ICustomer {
  has_claimed_code: boolean;
  claimed_code: { code: string; allowed_claims: number } | undefined;
}
