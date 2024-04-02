import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { AppModelTitle } from "../appModel/AppModelTitle";

export const WebhookCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Subscriber Url" source="subscriberUrl" />
        <TextInput label="Payload Template" source="payloadTemplate" />
        <BooleanInput label="Active" source="active" />
        <SelectArrayInput
          label="Event Triggers"
          source="eventTriggers"
          choices={[
            { label: "BOOKING_CREATED", value: "BOOKING_CREATED" },
            { label: "BOOKING_RESCHEDULED", value: "BOOKING_RESCHEDULED" },
            { label: "BOOKING_CANCELLED", value: "BOOKING_CANCELLED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
        <TextInput label="Secret" source="secret" />
      </SimpleForm>
    </Create>
  );
};
