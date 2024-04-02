import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type ApiKeyUpdateInput = {
  note?: string | null;
  expiresAt?: Date | null;
  lastUsedAt?: Date | null;
  hashedKey?: string;
  user?: UserWhereUniqueInput | null;
  appField?: AppModelWhereUniqueInput | null;
};
