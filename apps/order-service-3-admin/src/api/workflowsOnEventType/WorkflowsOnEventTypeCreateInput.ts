import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type WorkflowsOnEventTypeCreateInput = {
  workflow: WorkflowWhereUniqueInput;
  eventType: EventTypeWhereUniqueInput;
};
