import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { EventTypeListRelationFilter } from "../eventType/EventTypeListRelationFilter";
import { MembershipListRelationFilter } from "../membership/MembershipListRelationFilter";

export type TeamWhereInput = {
  id?: IntFilter;
  name?: StringNullableFilter;
  slug?: StringNullableFilter;
  logo?: StringNullableFilter;
  bio?: StringNullableFilter;
  hideBranding?: BooleanFilter;
  eventTypes?: EventTypeListRelationFilter;
  members?: MembershipListRelationFilter;
};
