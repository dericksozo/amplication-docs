import { User } from "../user/User";
import { Booking } from "../booking/Booking";
import { EventType } from "../eventType/EventType";
import { Credential } from "../credential/Credential";

export type DestinationCalendar = {
  id: number;
  integration: string;
  externalId: string;
  user?: User | null;
  booking?: Booking | null;
  eventType?: EventType | null;
  credential?: Credential | null;
};
