import { Workflow } from "../workflow/Workflow";
import { EventType } from "../eventType/EventType";

export type WorkflowsOnEventType = {
  id: number;
  workflow?: Workflow;
  eventType?: EventType;
};
