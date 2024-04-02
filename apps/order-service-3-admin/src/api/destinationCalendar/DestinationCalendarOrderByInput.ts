import { SortOrder } from "../../util/SortOrder";

export type DestinationCalendarOrderByInput = {
  id?: SortOrder;
  integration?: SortOrder;
  externalId?: SortOrder;
  userId?: SortOrder;
  bookingId?: SortOrder;
  eventTypeId?: SortOrder;
  credentialId?: SortOrder;
};
