import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkflowTitle } from "../workflow/WorkflowTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";

export const WorkflowsOnEventTypeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="workflow.id"
          reference="Workflow"
          label="Workflow"
        >
          <SelectInput optionText={WorkflowTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
