import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type AttendeeCreateInput = {
  email: string;
  name: string;
  timeZone: string;
  locale?: string | null;
  booking?: BookingWhereUniqueInput | null;
};
