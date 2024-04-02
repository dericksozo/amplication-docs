import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AppModelTitle } from "../appModel/AppModelTitle";

export const ApiKeyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Note" source="note" />
        <DateTimeInput label="Expires At" source="expiresAt" />
        <DateTimeInput label="Last Used At" source="lastUsedAt" />
        <TextInput label="Hashed Key" source="hashedKey" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="appField.id"
          reference="AppModel"
          label="App Field"
        >
          <SelectInput optionText={AppModelTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
