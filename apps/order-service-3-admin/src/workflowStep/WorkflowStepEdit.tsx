import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WorkflowTitle } from "../workflow/WorkflowTitle";
import { WorkflowReminderTitle } from "../workflowReminder/WorkflowReminderTitle";

export const WorkflowStepEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Step Number" source="stepNumber" />
        <SelectInput
          source="action"
          label="Action"
          choices={[
            { label: "EMAIL_HOST", value: "EMAIL_HOST" },
            { label: "EMAIL_ATTENDEE", value: "EMAIL_ATTENDEE" },
            { label: "SMS_ATTENDEE", value: "SMS_ATTENDEE" },
            { label: "SMS_NUMBER", value: "SMS_NUMBER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="workflow.id"
          reference="Workflow"
          label="Workflow"
        >
          <SelectInput optionText={WorkflowTitle} />
        </ReferenceInput>
        <TextInput label="Send To" source="sendTo" />
        <TextInput label="Reminder Body" source="reminderBody" />
        <TextInput label="Email Subject" source="emailSubject" />
        <SelectInput
          source="template"
          label="Template"
          choices={[
            { label: "REMINDER", value: "REMINDER" },
            { label: "CUSTOM", value: "CUSTOM" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="workflowReminders"
          reference="WorkflowReminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowReminderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
