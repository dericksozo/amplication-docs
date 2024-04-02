import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type AttendeeUpdateInput = {
  email?: string;
  name?: string;
  timeZone?: string;
  locale?: string | null;
  booking?: BookingWhereUniqueInput | null;
};
