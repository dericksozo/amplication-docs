import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const VerificationTokenCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Token" source="token" />
        <DateTimeInput label="Expires" source="expires" />
      </SimpleForm>
    </Create>
  );
};
