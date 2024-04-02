import { User } from "../user/User";

export type Impersonation = {
  id: number;
  createdAt: Date;
  impersonatedUser?: User;
  impersonatedBy?: User;
};
