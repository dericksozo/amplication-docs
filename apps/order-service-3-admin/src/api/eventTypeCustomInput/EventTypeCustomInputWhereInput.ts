import { IntFilter } from "../../util/IntFilter";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type EventTypeCustomInputWhereInput = {
  id?: IntFilter;
  eventType?: EventTypeWhereUniqueInput;
  label?: StringFilter;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
  required?: BooleanFilter;
  placeholder?: StringFilter;
};
