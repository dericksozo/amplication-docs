import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkflowStepUpdateManyWithoutWorkflowsInput } from "./WorkflowStepUpdateManyWithoutWorkflowsInput";
import { WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput";

export type WorkflowUpdateInput = {
  name?: string;
  user?: UserWhereUniqueInput;
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  steps?: WorkflowStepUpdateManyWithoutWorkflowsInput;
  activeOn?: WorkflowsOnEventTypeUpdateManyWithoutWorkflowsInput;
};
