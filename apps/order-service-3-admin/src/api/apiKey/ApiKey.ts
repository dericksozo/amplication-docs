import { User } from "../user/User";
import { AppModel } from "../appModel/AppModel";

export type ApiKey = {
  id: string;
  note: string | null;
  createdAt: Date;
  expiresAt: Date | null;
  lastUsedAt: Date | null;
  hashedKey: string;
  user?: User | null;
  appField?: AppModel | null;
};
