import { User } from "../user/User";

export type Session = {
  id: string;
  sessionToken: string;
  expires: Date;
  user?: User | null;
};
