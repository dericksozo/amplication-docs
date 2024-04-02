import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SelectedCalendarCreateInput = {
  user: UserWhereUniqueInput;
  integration: string;
  externalId: string;
};
