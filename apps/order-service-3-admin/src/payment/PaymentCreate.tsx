import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Uid" source="uid" />
        <SelectInput
          source="type"
          label="Type"
          choices={[{ label: "STRIPE", value: "STRIPE" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Amount" source="amount" />
        <NumberInput step={1} label="Fee" source="fee" />
        <TextInput label="Currency" source="currency" />
        <BooleanInput label="Success" source="success" />
        <BooleanInput label="Refunded" source="refunded" />
        <div />
        <TextInput label="External Id" source="externalId" />
      </SimpleForm>
    </Create>
  );
};
