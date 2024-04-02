import { EventType } from "../eventType/EventType";

export type HashedLink = {
  id: number;
  link: string;
  eventType?: EventType;
};
