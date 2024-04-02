import { Booking } from "../booking/Booking";

export type Attendee = {
  id: number;
  email: string;
  name: string;
  timeZone: string;
  locale: string | null;
  booking?: Booking | null;
};
