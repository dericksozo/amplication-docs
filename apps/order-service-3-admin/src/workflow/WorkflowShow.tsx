import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORKFLOW_TITLE_FIELD } from "./WorkflowTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const WorkflowShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Trigger" source="trigger" />
        <TextField label="Time" source="time" />
        <TextField label="Time Unit" source="timeUnit" />
        <ReferenceManyField
          reference="WorkflowStep"
          target="workflowId"
          label="WorkflowSteps"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Step Number" source="stepNumber" />
            <TextField label="Action" source="action" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Send To" source="sendTo" />
            <TextField label="Reminder Body" source="reminderBody" />
            <TextField label="Email Subject" source="emailSubject" />
            <TextField label="Template" source="template" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowsOnEventType"
          target="workflowId"
          label="WorkflowsOnEventTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
