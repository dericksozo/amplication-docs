import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImpersonationCreateInput = {
  impersonatedUser: UserWhereUniqueInput;
  impersonatedBy: UserWhereUniqueInput;
};
