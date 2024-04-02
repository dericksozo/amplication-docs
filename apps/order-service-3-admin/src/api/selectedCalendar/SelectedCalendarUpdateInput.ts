import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarUpdateInput = {
  user?: UserWhereUniqueInput;
  integration?: string;
  externalId?: string;
};
