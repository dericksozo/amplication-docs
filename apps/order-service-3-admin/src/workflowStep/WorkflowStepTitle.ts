import { WorkflowStep as TWorkflowStep } from "../api/workflowStep/WorkflowStep";

export const WORKFLOWSTEP_TITLE_FIELD = "sendTo";

export const WorkflowStepTitle = (record: TWorkflowStep): string => {
  return record.sendTo?.toString() || String(record.id);
};
