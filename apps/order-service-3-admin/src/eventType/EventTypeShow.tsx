import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENTTYPE_TITLE_FIELD } from "./EventTypeTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { WORKFLOW_TITLE_FIELD } from "../workflow/WorkflowTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { HASHEDLINK_TITLE_FIELD } from "../hashedLink/HashedLinkTitle";

export const EventTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Booking"
          target="eventTypeId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
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
            <TextField
              label="Cancellation Reason"
              source="cancellationReason"
            />
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Availability"
          target="eventTypeId"
          label="Availabilities"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
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
            <TextField label="Days" source="days" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="End Time" source="endTime" />
            <TextField label="Date" source="date" />
            <ReferenceField
              label="Schedule"
              source="schedule.id"
              reference="Schedule"
            >
              <TextField source={SCHEDULE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EventTypeCustomInput"
          target="eventTypeId"
          label="EventTypeCustomInputs"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Label" source="label" />
            <TextField label="Type" source="type" />
            <BooleanField label="Required" source="required" />
            <TextField label="Placeholder" source="placeholder" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Webhook"
          target="eventTypeId"
          label="Webhooks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Subscriber Url" source="subscriberUrl" />
            <TextField label="Payload Template" source="payloadTemplate" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="Active" source="active" />
            <TextField label="Event Triggers" source="eventTriggers" />
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
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Secret" source="secret" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkflowsOnEventType"
          target="eventTypeId"
          label="WorkflowsOnEventTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Workflow"
              source="workflow.id"
              reference="Workflow"
            >
              <TextField source={WORKFLOW_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Event Type"
              source="eventtype.id"
              reference="EventType"
            >
              <TextField source={EVENTTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
