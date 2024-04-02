import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type ApiKeyWhereInput = {
  id?: StringFilter;
  note?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  expiresAt?: DateTimeNullableFilter;
  lastUsedAt?: DateTimeNullableFilter;
  hashedKey?: StringFilter;
  user?: UserWhereUniqueInput;
  appField?: AppModelWhereUniqueInput;
};
