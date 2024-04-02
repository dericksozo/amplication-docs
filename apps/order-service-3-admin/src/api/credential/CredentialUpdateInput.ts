import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarUpdateManyWithoutCredentialsInput } from "./DestinationCalendarUpdateManyWithoutCredentialsInput";

export type CredentialUpdateInput = {
  typeField?: string;
  key?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
  appField?: AppModelWhereUniqueInput | null;
  destinationCalendars?: DestinationCalendarUpdateManyWithoutCredentialsInput;
};
