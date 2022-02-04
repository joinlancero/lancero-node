export interface ICode {
  code: string;
  allowedClaims: number;
  validFrom: Date | null;
  validUntil: Date | null;
  reservedFor?: {
    email: string;
  };
  claims: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILead {
  firstname: string;
  lastname: string;
  email: string;
  notes: string;
  hasClaimedCode: boolean;
  onWaitlist: boolean;
  referralCode: string;
  referredBy?: {
    email: string;
    referralCode: string;
  };
  referredLeads: { email: string }[];
  createdAt: Date;
  updatedAt: Date;
}
