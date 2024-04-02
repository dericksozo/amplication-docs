import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeUpdateManyWithoutSchedulesInput } from "./EventTypeUpdateManyWithoutSchedulesInput";
import { AvailabilityUpdateManyWithoutSchedulesInput } from "./AvailabilityUpdateManyWithoutSchedulesInput";

export type ScheduleUpdateInput = {
  user?: UserWhereUniqueInput;
  name?: string;
  timeZone?: string | null;
  eventType?: EventTypeUpdateManyWithoutSchedulesInput;
  availability?: AvailabilityUpdateManyWithoutSchedulesInput;
};
