import { SortOrder } from "../../util/SortOrder";

export type WorkflowStepOrderByInput = {
  id?: SortOrder;
  stepNumber?: SortOrder;
  action?: SortOrder;
  workflowId?: SortOrder;
  sendTo?: SortOrder;
  reminderBody?: SortOrder;
  emailSubject?: SortOrder;
  template?: SortOrder;
};
