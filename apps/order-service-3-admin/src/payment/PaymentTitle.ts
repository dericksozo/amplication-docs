import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "uid";

export const PaymentTitle = (record: TPayment): string => {
  return record.uid?.toString() || String(record.id);
};
