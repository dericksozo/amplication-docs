import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ImpersonationWhereInput = {
  id?: IntFilter;
  createdAt?: DateTimeFilter;
  impersonatedUser?: UserWhereUniqueInput;
  impersonatedBy?: UserWhereUniqueInput;
};
