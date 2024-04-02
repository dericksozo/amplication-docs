import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WorkflowTitle } from "../workflow/WorkflowTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";

export const WorkflowsOnEventTypeEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
