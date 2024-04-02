import { SortOrder } from "../../util/SortOrder";

export type BookingReferenceOrderByInput = {
  id?: SortOrder;
  typeField?: SortOrder;
  uid?: SortOrder;
  meetingId?: SortOrder;
  meetingPassword?: SortOrder;
  meetingUrl?: SortOrder;
  bookingId?: SortOrder;
  externalCalendarId?: SortOrder;
  deleted?: SortOrder;
};
