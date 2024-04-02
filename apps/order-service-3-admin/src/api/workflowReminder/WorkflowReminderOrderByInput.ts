import { SortOrder } from "../../util/SortOrder";

export type WorkflowReminderOrderByInput = {
  id?: SortOrder;
  bookingUid?: SortOrder;
  method?: SortOrder;
  scheduledDate?: SortOrder;
  referenceId?: SortOrder;
  scheduled?: SortOrder;
  workflowStepId?: SortOrder;
};
