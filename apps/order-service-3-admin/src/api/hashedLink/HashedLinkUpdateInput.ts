import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HashedLinkUpdateInput = {
  link?: string;
  eventType?: EventTypeWhereUniqueInput;
};
