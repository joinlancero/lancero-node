export interface ICode {
  code: string;
  allowed_claims: number;
  valid_from: Date;
  valid_until: Date;
  active: boolean;
  claims: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface ICustomer {
  email: string;
  created_at: Date;
  last_updated_at: Date;
}

export interface ISecretCheck{
  success: boolean;
}

export interface ICustomerWithClaim extends ICustomer {
  has_claimed_code: boolean;
  claimed_code: { code: string; allowed_claims: number } | undefined;
}
