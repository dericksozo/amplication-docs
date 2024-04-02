import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { APPMODEL_TITLE_FIELD } from "./AppModelTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";

export const AppModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Dir Name" source="dirName" />
        <TextField label="Keys" source="keys" />
        <TextField label="Categories" source="categories" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Credential"
          target="appId"
          label="Credentials"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Key" source="key" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Webhook" target="appId" label="Webhooks">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Subscriber Url" source="subscriberUrl" />
            <TextField label="Payload Template" source="payloadTemplate" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Active" source="active" />
            <TextField label="Event Triggers" source="eventTriggers" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Secret" source="secret" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="ApiKey" target="appId" label="ApiKeys">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Last Used At" source="lastUsedAt" />
            <TextField label="Hashed Key" source="hashedKey" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
