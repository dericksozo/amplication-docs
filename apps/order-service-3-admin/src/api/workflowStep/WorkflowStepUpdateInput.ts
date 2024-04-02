import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { WorkflowReminderUpdateManyWithoutWorkflowStepsInput } from "./WorkflowReminderUpdateManyWithoutWorkflowStepsInput";

export type WorkflowStepUpdateInput = {
  stepNumber?: number;
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  workflow?: WorkflowWhereUniqueInput;
  sendTo?: string | null;
  reminderBody?: string | null;
  emailSubject?: string | null;
  template?: "REMINDER" | "CUSTOM";
  workflowReminders?: WorkflowReminderUpdateManyWithoutWorkflowStepsInput;
};
