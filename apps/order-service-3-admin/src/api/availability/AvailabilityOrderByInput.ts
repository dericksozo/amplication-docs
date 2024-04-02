import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  id?: SortOrder;
  userId?: SortOrder;
  eventTypeId?: SortOrder;
  days?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  date?: SortOrder;
  scheduleId?: SortOrder;
};
