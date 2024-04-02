import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type VerificationTokenWhereInput = {
  id?: IntFilter;
  identifier?: StringFilter;
  token?: StringFilter;
  expires?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
};
