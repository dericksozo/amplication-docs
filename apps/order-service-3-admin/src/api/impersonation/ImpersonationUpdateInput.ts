import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImpersonationUpdateInput = {
  impersonatedUser?: UserWhereUniqueInput;
  impersonatedBy?: UserWhereUniqueInput;
};
