import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DailyEventReferenceCreateInput = {
  dailyurl: string;
  dailytoken: string;
  booking?: BookingWhereUniqueInput | null;
};
