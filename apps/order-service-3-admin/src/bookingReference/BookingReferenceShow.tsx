import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const BookingReferenceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Uid" source="uid" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Meeting Password" source="meetingPassword" />
        <TextField label="Meeting Url" source="meetingUrl" />
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="External Calendar Id" source="externalCalendarId" />
        <BooleanField label="Deleted" source="deleted" />
      </SimpleShowLayout>
    </Show>
  );
};
