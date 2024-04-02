import { User } from "../user/User";
import { EventType } from "../eventType/EventType";
import { AppModel } from "../appModel/AppModel";

export type Webhook = {
  id: string;
  subscriberUrl: string;
  payloadTemplate: string | null;
  createdAt: Date;
  active: boolean;
  eventTriggers?: Array<
    "BOOKING_CREATED" | "BOOKING_RESCHEDULED" | "BOOKING_CANCELLED"
  >;
  user?: User | null;
  eventType?: EventType | null;
  appField?: AppModel | null;
  secret: string | null;
};
