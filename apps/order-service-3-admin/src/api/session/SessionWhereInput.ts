import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  sessionToken?: StringFilter;
  expires?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
