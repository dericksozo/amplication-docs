import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type WebhookUpdateInput = {
  subscriberUrl?: string;
  payloadTemplate?: string | null;
  active?: boolean;
  eventTriggers?: Array<
    "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "BOOKING_CANCELLED"
  >;
  user?: UserWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  appField?: AppModelWhereUniqueInput | null;
  secret?: string | null;
};
