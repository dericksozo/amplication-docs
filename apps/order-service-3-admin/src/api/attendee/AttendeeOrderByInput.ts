import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  id?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  timeZone?: SortOrder;
  locale?: SortOrder;
  bookingId?: SortOrder;
};
