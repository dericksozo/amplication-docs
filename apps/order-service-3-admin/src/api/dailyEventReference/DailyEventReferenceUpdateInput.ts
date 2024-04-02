import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DailyEventReferenceUpdateInput = {
  dailyurl?: string;
  dailytoken?: string;
  booking?: BookingWhereUniqueInput | null;
};
