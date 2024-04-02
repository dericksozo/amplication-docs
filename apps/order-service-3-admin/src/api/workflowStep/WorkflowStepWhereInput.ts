import { IntFilter } from "../../util/IntFilter";
import { WorkflowWhereUniqueInput } from "../workflow/WorkflowWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorkflowReminderListRelationFilter } from "../workflowReminder/WorkflowReminderListRelationFilter";

export type WorkflowStepWhereInput = {
  id?: IntFilter;
  stepNumber?: IntFilter;
  action?: "EMAIL_HOST" | "EMAIL_ATTENDEE" | "SMS_ATTENDEE" | "SMS_NUMBER";
  workflow?: WorkflowWhereUniqueInput;
  sendTo?: StringNullableFilter;
  reminderBody?: StringNullableFilter;
  emailSubject?: StringNullableFilter;
  template?: "REMINDER" | "CUSTOM";
  workflowReminders?: WorkflowReminderListRelationFilter;
};
