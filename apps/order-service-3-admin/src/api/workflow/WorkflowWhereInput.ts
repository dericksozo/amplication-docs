import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WorkflowStepListRelationFilter } from "../workflowStep/WorkflowStepListRelationFilter";
import { WorkflowsOnEventTypeListRelationFilter } from "../workflowsOnEventType/WorkflowsOnEventTypeListRelationFilter";

export type WorkflowWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  user?: UserWhereUniqueInput;
  trigger?: "BEFORE_EVENT" | "EVENT_CANCELLED" | "NEW_EVENT";
  time?: IntNullableFilter;
  timeUnit?: "DAY" | "HOUR" | "MINUTE";
  steps?: WorkflowStepListRelationFilter;
  activeOn?: WorkflowsOnEventTypeListRelationFilter;
};
