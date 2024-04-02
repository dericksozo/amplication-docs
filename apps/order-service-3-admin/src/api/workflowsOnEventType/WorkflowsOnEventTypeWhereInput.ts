import { IntFilter } from "../../util/IntFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";

export type WorkflowsOnEventTypeWhereInput = {
  id?: IntFilter;
  workflow?: WorkflowWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
};
