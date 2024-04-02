import { EventTypeUpdateManyWithoutTeamsInput } from "./EventTypeUpdateManyWithoutTeamsInput";
import { MembershipUpdateManyWithoutTeamsInput } from "./MembershipUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  name?: string | null;
  slug?: string | null;
  logo?: string | null;
  bio?: string | null;
  hideBranding?: boolean;
  eventTypes?: EventTypeUpdateManyWithoutTeamsInput;
  members?: MembershipUpdateManyWithoutTeamsInput;
};
