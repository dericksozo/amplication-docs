import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PaymentCreateInput = {
  uid: string;
  type: "STRIPE";
  booking?: BookingWhereUniqueInput | null;
  amount: number;
  fee: number;
  currency: string;
  success: boolean;
  refunded: boolean;
  data: InputJsonValue;
  externalId: string;
};
