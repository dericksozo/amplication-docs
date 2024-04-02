export type VerificationToken = {
  id: number;
  identifier: string;
  token: string;
  expires: Date;
  createdAt: Date;
  updatedAt: Date;
};
