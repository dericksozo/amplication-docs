import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOOKING_TITLE_FIELD } from "./BookingTitle";
import { WORKFLOWSTEP_TITLE_FIELD } from "../workflowStep/WorkflowStepTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Uid" source="uid" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Event Type"
          source="eventtype.id"
          reference="EventType"
        >
          <TextField source={EVENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <TextField label="Description" source="description" />
        <TextField label="Custom Inputs" source="customInputs" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="End Time" source="endTime" />
        <TextField label="Location" source="location" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Updated At" source="updatedAt" />
        <TextField label="Status" source="status" />
        <BooleanField label="Paid" source="paid" />
        <TextField label="Cancellation Reason" source="cancellationReason" />
        <TextField label="Rejection Reason" source="rejectionReason" />
        <TextField
          label="Dynamic Event Slug Ref"
          source="dynamicEventSlugRef"
        />
        <TextField
          label="Dynamic Group Slug Ref"
          source="dynamicGroupSlugRef"
        />
        <BooleanField label="Rescheduled" source="rescheduled" />
        <TextField label="From Reschedule" source="fromReschedule" />
        <TextField label="Recurring Event Id" source="recurringEventId" />
        <TextField label="Sms Reminder Number" source="smsReminderNumber" />
        <ReferenceField
          label="Destination Calendar"
          source="destinationcalendar.id"
          reference="DestinationCalendar"
        >
          <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Daily Ref"
          source="dailyeventreference.id"
          reference="DailyEventReference"
        >
          <TextField source={DAILYEVENTREFERENCE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="BookingReference"
          target="bookingId"
          label="BookingReferences"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Uid" source="uid" />
            <TextField label="Meeting Id" source="meetingId" />
            <TextField label="Meeting Password" source="meetingPassword" />
            <TextField label="Meeting Url" source="meetingUrl" />
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="External Calendar Id"
              source="externalCalendarId"
            />
            <BooleanField label="Deleted" source="deleted" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Attendee"
          target="bookingId"
          label="Attendees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Email" source="email" />
            <TextField label="Name" source="name" />
            <TextField label="Time Zone" source="timeZone" />
            <TextField label="Locale" source="locale" />
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Payment"
          target="bookingId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Uid" source="uid" />
            <TextField label="Type" source="type" />
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <TextField label="Fee" source="fee" />
            <TextField label="Currency" source="currency" />
            <BooleanField label="Success" source="success" />
            <BooleanField label="Refunded" source="refunded" />
            <TextField label="Data" source="data" />
            <TextField label="External Id" source="externalId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowReminder"
          target="bookingUid"
          label="WorkflowReminders"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Method" source="method" />
            <TextField label="Scheduled Date" source="scheduledDate" />
            <TextField label="Reference Id" source="referenceId" />
            <BooleanField label="Scheduled" source="scheduled" />
            <ReferenceField
              label="Workflow Step"
              source="workflowstep.id"
              reference="WorkflowStep"
            >
              <TextField source={WORKFLOWSTEP_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
