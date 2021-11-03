export interface Icode {
  code: string;
  allowed_claims: number;
  valid_from: Date;
  valid_until: Date;
  active: boolean;
  claims: number;
  created_at: Date;
  last_updated_at: Date;
}

export interface Icustomer {
  email: string;
  has_claimed_code: boolean;
  claimed_code: { code: string; allowed_claims: number } | undefined;
  created_at: Date;
  last_updated_at: Date;
}
