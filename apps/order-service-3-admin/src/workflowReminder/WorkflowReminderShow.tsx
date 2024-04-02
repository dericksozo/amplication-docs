import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { WORKFLOWSTEP_TITLE_FIELD } from "../workflowStep/WorkflowStepTitle";

export const WorkflowReminderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Method" source="method" />
        <TextField label="Scheduled Date" source="scheduledDate" />
        <TextField label="Reference Id" source="referenceId" />
        <BooleanField label="Scheduled" source="scheduled" />
        <ReferenceField
          label="Workflow Step"
          source="workflowstep.id"
          reference="WorkflowStep"
        >
          <TextField source={WORKFLOWSTEP_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
