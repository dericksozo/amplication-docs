import { EventType } from "../eventType/EventType";

export type EventTypeCustomInput = {
  id: number;
  eventType?: EventType;
  label: string;
  type?: "TEXT" | "TEXTLONG" | "NUMBER" | "BOOL";
  required: boolean;
  placeholder: string;
};
