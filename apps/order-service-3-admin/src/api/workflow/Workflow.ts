import { User } from "../user/User";
import { WorkflowStep } from "../workflowStep/WorkflowStep";
import { WorkflowsOnEventType } from "../workflowsOnEventType/WorkflowsOnEventType";

export type Workflow = {
  id: number;
  name: string;
  user?: User;
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  time: number | null;
  timeUnit?: "DAY" | "HOUR" | "MINUTE" | null;
  steps?: Array<WorkflowStep>;
  activeOn?: Array<WorkflowsOnEventType>;
};
