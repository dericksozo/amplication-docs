import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SelectedCalendarWhereInput = {
  id?: IntFilter;
  user?: UserWhereUniqueInput;
  integration?: StringFilter;
  externalId?: StringFilter;
};
