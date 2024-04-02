import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type DailyEventReferenceWhereInput = {
  id?: IntFilter;
  dailyurl?: StringFilter;
  dailytoken?: StringFilter;
  booking?: BookingWhereUniqueInput;
};
