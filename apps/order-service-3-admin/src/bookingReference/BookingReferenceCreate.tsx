import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { BookingTitle } from "../booking/BookingTitle";

export const BookingReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Uid" source="uid" />
        <TextInput label="Meeting Id" source="meetingId" />
        <TextInput label="Meeting Password" source="meetingPassword" />
        <TextInput label="Meeting Url" source="meetingUrl" />
        <ReferenceInput source="booking.id" reference="Booking" label="Booking">
          <SelectInput optionText={BookingTitle} />
        </ReferenceInput>
        <TextInput label="External Calendar Id" source="externalCalendarId" />
        <BooleanInput label="Deleted" source="deleted" />
      </SimpleForm>
    </Create>
  );
};
