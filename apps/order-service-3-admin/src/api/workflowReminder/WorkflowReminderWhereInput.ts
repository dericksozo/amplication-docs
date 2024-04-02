import { IntFilter } from "../../util/IntFilter";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { WorkflowStepWhereUniqueInput } from "../workflowStep/WorkflowStepWhereUniqueInput";

export type WorkflowReminderWhereInput = {
  id?: IntFilter;
  booking?: BookingWhereUniqueInput;
  method?: "EMAIL" | "SMS";
  scheduledDate?: DateTimeFilter;
  referenceId?: StringNullableFilter;
  scheduled?: BooleanFilter;
  workflowStep?: WorkflowStepWhereUniqueInput;
};
