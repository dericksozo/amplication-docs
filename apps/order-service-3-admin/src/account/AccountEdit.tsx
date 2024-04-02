import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Provider" source="provider" />
        <TextInput label="Provider Account Id" source="providerAccountId" />
        <TextInput label="Refresh Token" source="refreshToken" />
        <TextInput label="Access Token" source="accessToken" />
        <NumberInput step={1} label="Expires At" source="expiresAt" />
        <TextInput label="Token Type" source="tokenType" />
        <TextInput label="Scope" source="scope" />
        <TextInput label="Id Token" source="idToken" />
        <TextInput label="Session State" source="sessionState" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
