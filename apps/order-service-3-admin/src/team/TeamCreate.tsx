import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { MembershipTitle } from "../membership/MembershipTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Logo" source="logo" />
        <TextInput label="Bio" source="bio" />
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <ReferenceArrayInput
          source="eventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="members"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
