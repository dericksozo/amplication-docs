import { User } from "../user/User";
import { EventType } from "../eventType/EventType";
import { Availability } from "../availability/Availability";

export type Schedule = {
  id: number;
  user?: User;
  name: string;
  timeZone: string | null;
  eventType?: Array<EventType>;
  availability?: Array<Availability>;
};
