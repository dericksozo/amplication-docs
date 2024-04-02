import { Booking } from "../booking/Booking";
import { WorkflowStep } from "../workflowStep/WorkflowStep";

export type WorkflowReminder = {
  id: number;
  booking?: Booking | null;
  method?: "EMAIL" | "SMS";
  scheduledDate: Date;
  referenceId: string | null;
  scheduled: boolean;
  workflowStep?: WorkflowStep;
};
