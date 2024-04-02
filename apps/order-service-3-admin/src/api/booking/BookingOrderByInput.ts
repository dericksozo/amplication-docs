import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  uid?: SortOrder;
  userId?: SortOrder;
  eventTypeId?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  customInputs?: SortOrder;
  startTime?: SortOrder;
  endTime?: SortOrder;
  location?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  paid?: SortOrder;
  cancellationReason?: SortOrder;
  rejectionReason?: SortOrder;
  dynamicEventSlugRef?: SortOrder;
  dynamicGroupSlugRef?: SortOrder;
  rescheduled?: SortOrder;
  fromReschedule?: SortOrder;
  recurringEventId?: SortOrder;
  smsReminderNumber?: SortOrder;
  destinationCalendarId?: SortOrder;
  dailyRefId?: SortOrder;
};
