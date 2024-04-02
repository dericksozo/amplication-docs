import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  id?: StringFilter;
  typeField?: StringFilter;
  provider?: StringFilter;
  providerAccountId?: StringFilter;
  refreshToken?: StringNullableFilter;
  accessToken?: StringNullableFilter;
  expiresAt?: IntNullableFilter;
  tokenType?: StringNullableFilter;
  scope?: StringNullableFilter;
  idToken?: StringNullableFilter;
  sessionState?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
