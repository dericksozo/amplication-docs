import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";
import { DestinationCalendarListRelationFilter } from "../destinationCalendar/DestinationCalendarListRelationFilter";

export type CredentialWhereInput = {
  id?: IntFilter;
  typeField?: StringFilter;
  key?: JsonFilter;
  user?: UserWhereUniqueInput;
  appField?: AppModelWhereUniqueInput;
  destinationCalendars?: DestinationCalendarListRelationFilter;
};
