import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ReminderMailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Reference Id" source="referenceId" />
        <TextField label="Reminder Type" source="reminderType" />
        <TextField label="Elapsed Minutes" source="elapsedMinutes" />
        <DateField source="createdAt" label="Created At" />
      </SimpleShowLayout>
    </Show>
  );
};
