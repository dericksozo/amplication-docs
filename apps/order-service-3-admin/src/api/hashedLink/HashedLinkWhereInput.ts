import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type HashedLinkWhereInput = {
  id?: IntFilter;
  link?: StringFilter;
  eventType?: EventTypeWhereUniqueInput;
};
