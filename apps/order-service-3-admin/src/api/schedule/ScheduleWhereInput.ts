import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { AvailabilityListRelationFilter } from "../availability/AvailabilityListRelationFilter";

export type ScheduleWhereInput = {
  id?: IntFilter;
  user?: UserWhereUniqueInput;
  name?: StringFilter;
  timeZone?: StringNullableFilter;
  eventType?: EventTypeListRelationFilter;
  availability?: AvailabilityListRelationFilter;
};
