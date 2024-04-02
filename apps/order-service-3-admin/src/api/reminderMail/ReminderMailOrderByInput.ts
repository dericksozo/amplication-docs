import { SortOrder } from "../../util/SortOrder";

export type ReminderMailOrderByInput = {
  id?: SortOrder;
  referenceId?: SortOrder;
  reminderType?: SortOrder;
  elapsedMinutes?: SortOrder;
  createdAt?: SortOrder;
};
