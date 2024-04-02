import { EventTypeCreateNestedManyWithoutTeamsInput } from "./EventTypeCreateNestedManyWithoutTeamsInput";
import { MembershipCreateNestedManyWithoutTeamsInput } from "./MembershipCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  name?: string | null;
  slug?: string | null;
  logo?: string | null;
  bio?: string | null;
  hideBranding: boolean;
  eventTypes?: EventTypeCreateNestedManyWithoutTeamsInput;
  members?: MembershipCreateNestedManyWithoutTeamsInput;
};
