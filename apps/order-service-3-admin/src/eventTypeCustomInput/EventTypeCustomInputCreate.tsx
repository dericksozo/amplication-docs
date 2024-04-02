import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";

export const EventTypeCustomInputCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="Label" source="label" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "TEXT", value: "TEXT" },
            { label: "TEXTLONG", value: "TEXTLONG" },
            { label: "NUMBER", value: "NUMBER" },
            { label: "BOOL", value: "BOOL" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Required" source="required" />
        <TextInput label="Placeholder" source="placeholder" />
      </SimpleForm>
    </Create>
  );
};
