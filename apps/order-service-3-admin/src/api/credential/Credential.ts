import { JsonValue } from "type-fest";
import { User } from "../user/User";
import { AppModel } from "../appModel/AppModel";
import { DestinationCalendar } from "../destinationCalendar/DestinationCalendar";

export type Credential = {
  id: number;
  typeField: string;
  key: JsonValue;
  user?: User | null;
  appField?: AppModel | null;
  destinationCalendars?: Array<DestinationCalendar>;
};
