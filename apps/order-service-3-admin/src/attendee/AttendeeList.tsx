import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";

export const AttendeeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Attendees"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Email" source="email" />
        <TextField label="Name" source="name" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Locale" source="locale" />
        <ReferenceField label="Booking" source="booking.id" reference="Booking">
          <TextField source={BOOKING_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
