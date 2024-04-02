import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type BookingReferenceCreateInput = {
  typeField: string;
  uid: string;
  meetingId?: string | null;
  meetingPassword?: string | null;
  meetingUrl?: string | null;
  booking?: BookingWhereUniqueInput | null;
  externalCalendarId?: string | null;
  deleted?: boolean | null;
};
