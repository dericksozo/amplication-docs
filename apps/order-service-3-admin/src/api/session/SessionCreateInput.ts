import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionCreateInput = {
  sessionToken: string;
  expires: Date;
  user?: UserWhereUniqueInput | null;
};
