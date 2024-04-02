import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  id?: SortOrder;
  uid?: SortOrder;
  type?: SortOrder;
  bookingId?: SortOrder;
  amount?: SortOrder;
  fee?: SortOrder;
  currency?: SortOrder;
  success?: SortOrder;
  refunded?: SortOrder;
  data?: SortOrder;
  externalId?: SortOrder;
};
