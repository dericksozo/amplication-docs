import { Workflow } from "../workflow/Workflow";
import { WorkflowReminder } from "../workflowReminder/WorkflowReminder";

export type WorkflowStep = {
  id: number;
  stepNumber: number;
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  workflow?: Workflow;
  sendTo: string | null;
  reminderBody: string | null;
  emailSubject: string | null;
  template?: "REMINDER" | "CUSTOM";
  workflowReminders?: Array<WorkflowReminder>;
};
