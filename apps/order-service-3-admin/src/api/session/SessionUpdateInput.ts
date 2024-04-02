import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  sessionToken?: string;
  expires?: Date;
  user?: UserWhereUniqueInput | null;
};
