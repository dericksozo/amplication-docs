import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FeedbackWhereInput = {
  id?: IntFilter;
  date?: DateTimeFilter;
  user?: UserWhereUniqueInput;
  rating?: StringFilter;
  comment?: StringNullableFilter;
};
