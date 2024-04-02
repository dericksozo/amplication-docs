import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { WorkflowStepTitle } from "../workflowStep/WorkflowStepTitle";
import { WorkflowsOnEventTypeTitle } from "../workflowsOnEventType/WorkflowsOnEventTypeTitle";

export const WorkflowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="trigger"
          label="Trigger"
          choices={[
            { label: "BEFORE_EVENT", value: "BEFORE_EVENT" },
            { label: "EVENT_CANCELLED", value: "EVENT_CANCELLED" },
            { label: "NEW_EVENT", value: "NEW_EVENT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Time" source="time" />
        <SelectInput
          source="timeUnit"
          label="Time Unit"
          choices={[
            { label: "DAY", value: "DAY" },
            { label: "HOUR", value: "HOUR" },
            { label: "MINUTE", value: "MINUTE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="steps"
          reference="WorkflowStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowStepTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="activeOn"
          reference="WorkflowsOnEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowsOnEventTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
