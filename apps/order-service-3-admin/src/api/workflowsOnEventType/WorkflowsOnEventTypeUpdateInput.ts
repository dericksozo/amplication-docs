import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type WorkflowsOnEventTypeUpdateInput = {
  workflow?: WorkflowWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
};
