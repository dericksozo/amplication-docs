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

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Uid" source="uid" />
        <TextField label="Type" source="type" />
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Amount" source="amount" />
        <TextField label="Fee" source="fee" />
        <TextField label="Currency" source="currency" />
        <BooleanField label="Success" source="success" />
        <BooleanField label="Refunded" source="refunded" />
        <TextField label="Data" source="data" />
        <TextField label="External Id" source="externalId" />
      </SimpleShowLayout>
    </Show>
  );
};
