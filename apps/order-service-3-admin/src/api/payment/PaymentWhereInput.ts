import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PaymentWhereInput = {
  id?: IntFilter;
  uid?: StringFilter;
  type?: "STRIPE";
  booking?: BookingWhereUniqueInput;
  amount?: IntFilter;
  fee?: IntFilter;
  currency?: StringFilter;
  success?: BooleanFilter;
  refunded?: BooleanFilter;
  data?: JsonFilter;
  externalId?: StringFilter;
};
