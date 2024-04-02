import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HashedLinkCreateInput = {
  link: string;
  eventType: EventTypeWhereUniqueInput;
};
