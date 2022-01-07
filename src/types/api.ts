export interface ICode {
  code: string;
  allowedClaims: number;
  validFrom: Date;
  validUntil: Date;
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
  createdAt: Date;
  updatedAt: Date;
}
