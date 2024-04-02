import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WorkflowStepCreateNestedManyWithoutWorkflowsInput } from "./WorkflowStepCreateNestedManyWithoutWorkflowsInput";
import { WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput } from "./WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput";

export type WorkflowCreateInput = {
  name: string;
  user: UserWhereUniqueInput;
  trigger: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  time?: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  steps?: WorkflowStepCreateNestedManyWithoutWorkflowsInput;
  activeOn?: WorkflowsOnEventTypeCreateNestedManyWithoutWorkflowsInput;
};
