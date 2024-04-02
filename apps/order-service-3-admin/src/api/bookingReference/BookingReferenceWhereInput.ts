import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BookingReferenceWhereInput = {
  id?: IntFilter;
  typeField?: StringFilter;
  uid?: StringFilter;
  meetingId?: StringNullableFilter;
  meetingPassword?: StringNullableFilter;
  meetingUrl?: StringNullableFilter;
  booking?: BookingWhereUniqueInput;
  externalCalendarId?: StringNullableFilter;
  deleted?: BooleanNullableFilter;
};
