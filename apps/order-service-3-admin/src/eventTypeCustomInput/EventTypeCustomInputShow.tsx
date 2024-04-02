import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";

export const EventTypeCustomInputShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Label" source="label" />
        <TextField label="Type" source="type" />
        <BooleanField label="Required" source="required" />
        <TextField label="Placeholder" source="placeholder" />
      </SimpleShowLayout>
    </Show>
  );
};
