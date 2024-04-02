import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";

export const WebhookList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Webhooks"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
