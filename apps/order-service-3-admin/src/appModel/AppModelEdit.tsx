import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { CredentialTitle } from "../credential/CredentialTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";

export const AppModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Dir Name" source="dirName" />
        <div />
        <SelectArrayInput
          label="Categories"
          source="categories"
          choices={[
            { label: "calendar", value: "calendar" },
            { label: "messaging", value: "messaging" },
            { label: "other", value: "other" },
            { label: "payment", value: "payment" },
            { label: "video", value: "video" },
            { label: "web3", value: "web3" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="credentials"
          reference="Credential"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CredentialTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhook"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiKey"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
