import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ReminderMailWhereInput = {
  id?: IntFilter;
  referenceId?: IntFilter;
  reminderType?: "PENDING_BOOKING_CONFIRMATION";
  elapsedMinutes?: IntFilter;
  createdAt?: DateTimeFilter;
};
