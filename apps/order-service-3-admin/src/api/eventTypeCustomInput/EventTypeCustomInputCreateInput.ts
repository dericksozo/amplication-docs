import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type EventTypeCustomInputCreateInput = {
  eventType: EventTypeWhereUniqueInput;
  label: string;
  type: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
  required: boolean;
  placeholder: string;
};
