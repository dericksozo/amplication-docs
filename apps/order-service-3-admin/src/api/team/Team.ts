import { EventType } from "../eventType/EventType";
import { Membership } from "../membership/Membership";

export type Team = {
  id: number;
  name: string | null;
  slug: string | null;
  logo: string | null;
  bio: string | null;
  hideBranding: boolean;
  eventTypes?: Array<EventType>;
  members?: Array<Membership>;
};
