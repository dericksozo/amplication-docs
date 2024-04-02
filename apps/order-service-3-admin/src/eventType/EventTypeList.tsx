import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";

export const EventTypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventTypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <TextField label="Slug" source="slug" />
        <TextField label="Description" source="description" />
        <TextField label="Position" source="position" />
        <TextField label="Locations" source="locations" />
        <TextField label="Length" source="length" />
        <BooleanField label="Hidden" source="hidden" />
        <TextField label="User Id" source="userId" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Event Name" source="eventName" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Period Type" source="periodType" />
        <TextField label="Period Start Date" source="periodStartDate" />
        <TextField label="Period End Date" source="periodEndDate" />
        <TextField label="Period Days" source="periodDays" />
        <BooleanField
          label="Period Count Calendar Days"
          source="periodCountCalendarDays"
        />
        <BooleanField
          label="Requires Confirmation"
          source="requiresConfirmation"
        />
        <TextField label="Recurring Event" source="recurringEvent" />
        <BooleanField label="Disable Guests" source="disableGuests" />
        <BooleanField label="Hide Calendar Notes" source="hideCalendarNotes" />
        <TextField
          label="Minimum Booking Notice"
          source="minimumBookingNotice"
        />
        <TextField label="Before Event Buffer" source="beforeEventBuffer" />
        <TextField label="After Event Buffer" source="afterEventBuffer" />
        <TextField label="Seats Per Time Slot" source="seatsPerTimeSlot" />
        <TextField label="Scheduling Type" source="schedulingType" />
        <ReferenceField
          label="Schedule"
          source="schedule.id"
          reference="Schedule"
        >
          <TextField source={SCHEDULE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Price" source="price" />
        <TextField label="Currency" source="currency" />
        <TextField label="Slot Interval" source="slotInterval" />
        <TextField label="Metadata" source="metadata" />
        <TextField label="Success Redirect Url" source="successRedirectUrl" />
        <ReferenceField
          label="Destination Calendar"
          source="destinationcalendar.id"
          reference="DestinationCalendar"
        >
          <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Hashed Link"
          source="hashedlink.id"
          reference="HashedLink"
        >
          <TextField source={HASHEDLINK_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
