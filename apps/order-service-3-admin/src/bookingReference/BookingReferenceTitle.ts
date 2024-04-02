import { BookingReference as TBookingReference } from "../api/bookingReference/BookingReference";

export const BOOKINGREFERENCE_TITLE_FIELD = "typeField";

export const BookingReferenceTitle = (record: TBookingReference): string => {
  return record.typeField?.toString() || String(record.id);
};
