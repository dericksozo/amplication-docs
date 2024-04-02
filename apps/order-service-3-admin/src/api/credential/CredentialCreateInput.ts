import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarCreateNestedManyWithoutCredentialsInput } from "./DestinationCalendarCreateNestedManyWithoutCredentialsInput";

export type CredentialCreateInput = {
  typeField: string;
  key: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  appField?: AppModelWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarCreateNestedManyWithoutCredentialsInput;
};
