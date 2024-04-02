import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { ScheduleWhereUniqueInput } from "../schedule/ScheduleWhereUniqueInput";

export type AvailabilityUpdateInput = {
  user?: UserWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  days?: number;
  startTime?: Date;
  endTime?: Date;
  date?: Date | null;
  schedule?: ScheduleWhereUniqueInput | null;
};
