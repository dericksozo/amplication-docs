import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";

export type AttendeeWhereInput = {
  id?: IntFilter;
  email?: StringFilter;
  name?: StringFilter;
  timeZone?: StringFilter;
  locale?: StringNullableFilter;
  booking?: BookingWhereUniqueInput;
};
