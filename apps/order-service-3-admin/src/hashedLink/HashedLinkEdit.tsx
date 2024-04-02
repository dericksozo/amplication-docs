import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { EventTypeTitle } from "../eventType/EventTypeTitle";

export const HashedLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Link" source="link" />
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
