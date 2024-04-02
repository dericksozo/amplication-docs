import { User } from "../user/User";
import { EventType } from "../eventType/EventType";
import { Schedule } from "../schedule/Schedule";

export type Availability = {
  id: number;
  user?: User | null;
  eventType?: EventType | null;
  days: number;
  startTime: Date;
  endTime: Date;
  date: Date | null;
  schedule?: Schedule | null;
};
