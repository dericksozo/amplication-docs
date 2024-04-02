import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeCreateNestedManyWithoutSchedulesInput } from "./EventTypeCreateNestedManyWithoutSchedulesInput";
import { AvailabilityCreateNestedManyWithoutSchedulesInput } from "./AvailabilityCreateNestedManyWithoutSchedulesInput";

export type ScheduleCreateInput = {
  user: UserWhereUniqueInput;
  name: string;
  timeZone?: string | null;
  eventType?: EventTypeCreateNestedManyWithoutSchedulesInput;
  availability?: AvailabilityCreateNestedManyWithoutSchedulesInput;
};
