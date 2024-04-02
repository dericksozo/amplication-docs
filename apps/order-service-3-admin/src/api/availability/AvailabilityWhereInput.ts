import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type AvailabilityWhereInput = {
  id?: IntFilter;
  user?: UserWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
  days?: IntFilter;
  startTime?: DateTimeFilter;
  endTime?: DateTimeFilter;
  date?: DateTimeNullableFilter;
  schedule?: ScheduleWhereUniqueInput;
};
