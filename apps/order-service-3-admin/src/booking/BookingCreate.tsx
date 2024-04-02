import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { BookingReferenceTitle } from "../bookingReference/BookingReferenceTitle";
import { AttendeeTitle } from "../attendee/AttendeeTitle";
import { DailyEventReferenceTitle } from "../dailyEventReference/DailyEventReferenceTitle";
import { PaymentTitle } from "../payment/PaymentTitle";
import { WorkflowReminderTitle } from "../workflowReminder/WorkflowReminderTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Uid" source="uid" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="eventType.id"
          reference="EventType"
          label="Event Type"
        >
          <SelectInput optionText={EventTypeTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <TextInput label="Description" source="description" />
        <div />
        <DateTimeInput label="Start Time" source="startTime" />
        <DateTimeInput label="End Time" source="endTime" />
        <TextInput label="Location" source="location" />
        <DateTimeInput label="Updated At" source="updatedAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "CANCELLED", value: "CANCELLED" },
            { label: "ACCEPTED", value: "ACCEPTED" },
            { label: "REJECTED", value: "REJECTED" },
            { label: "PENDING", value: "PENDING" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="Paid" source="paid" />
        <TextInput label="Cancellation Reason" source="cancellationReason" />
        <TextInput label="Rejection Reason" source="rejectionReason" />
        <TextInput
          label="Dynamic Event Slug Ref"
          source="dynamicEventSlugRef"
        />
        <TextInput
          label="Dynamic Group Slug Ref"
          source="dynamicGroupSlugRef"
        />
        <BooleanInput label="Rescheduled" source="rescheduled" />
        <TextInput label="From Reschedule" source="fromReschedule" />
        <TextInput label="Recurring Event Id" source="recurringEventId" />
        <TextInput label="Sms Reminder Number" source="smsReminderNumber" />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="references"
          reference="BookingReference"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingReferenceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="attendees"
          reference="Attendee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendeeTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="dailyRef.id"
          reference="DailyEventReference"
          label="Daily Ref"
        >
          <SelectInput optionText={DailyEventReferenceTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="payment"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workflowReminders"
          reference="WorkflowReminder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowReminderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
