import { Booking } from "../booking/Booking";

export type BookingReference = {
  id: number;
  typeField: string;
  uid: string;
  meetingId: string | null;
  meetingPassword: string | null;
  meetingUrl: string | null;
  booking?: Booking | null;
  externalCalendarId: string | null;
  deleted: boolean | null;
};
