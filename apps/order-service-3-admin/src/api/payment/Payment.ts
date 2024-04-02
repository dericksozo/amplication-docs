import { Booking } from "../booking/Booking";
import { JsonValue } from "type-fest";

export type Payment = {
  id: number;
  uid: string;
  type?: "STRIPE";
  booking?: Booking | null;
  amount: number;
  fee: number;
  currency: string;
  success: boolean;
  refunded: boolean;
  data: JsonValue;
  externalId: string;
};
