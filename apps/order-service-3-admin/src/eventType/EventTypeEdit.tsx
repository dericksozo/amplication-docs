import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TeamTitle } from "../team/TeamTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { EventTypeCustomInputTitle } from "../eventTypeCustomInput/EventTypeCustomInputTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { HashedLinkTitle } from "../hashedLink/HashedLinkTitle";
import { WorkflowsOnEventTypeTitle } from "../workflowsOnEventType/WorkflowsOnEventTypeTitle";

export const EventTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Description" source="description" />
        <NumberInput step={1} label="Position" source="position" />
        <div />
        <NumberInput step={1} label="Length" source="length" />
        <BooleanInput label="Hidden" source="hidden" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="User Id" source="userId" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <TextInput label="Event Name" source="eventName" />
        <TextInput label="Time Zone" source="timeZone" />
        <SelectInput
          source="periodType"
          label="Period Type"
          choices={[
            { label: "UNLIMITED", value: "UNLIMITED" },
            { label: "ROLLING", value: "ROLLING" },
            { label: "RANGE", value: "RANGE" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Period Start Date" source="periodStartDate" />
        <DateTimeInput label="Period End Date" source="periodEndDate" />
        <NumberInput step={1} label="Period Days" source="periodDays" />
        <BooleanInput
          label="Period Count Calendar Days"
          source="periodCountCalendarDays"
        />
        <BooleanInput
          label="Requires Confirmation"
          source="requiresConfirmation"
        />
        <div />
        <BooleanInput label="Disable Guests" source="disableGuests" />
        <BooleanInput label="Hide Calendar Notes" source="hideCalendarNotes" />
        <NumberInput
          step={1}
          label="Minimum Booking Notice"
          source="minimumBookingNotice"
        />
        <NumberInput
          step={1}
          label="Before Event Buffer"
          source="beforeEventBuffer"
        />
        <NumberInput
          step={1}
          label="After Event Buffer"
          source="afterEventBuffer"
        />
        <NumberInput
          step={1}
          label="Seats Per Time Slot"
          source="seatsPerTimeSlot"
        />
        <SelectInput
          source="schedulingType"
          label="Scheduling Type"
          choices={[
            { label: "ROUND_ROBIN", value: "ROUND_ROBIN" },
            { label: "COLLECTIVE", value: "COLLECTIVE" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="schedule.id"
          reference="Schedule"
          label="Schedule"
        >
          <SelectInput optionText={ScheduleTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Price" source="price" />
        <TextInput label="Currency" source="currency" />
        <NumberInput step={1} label="Slot Interval" source="slotInterval" />
        <div />
        <TextInput label="Success Redirect Url" source="successRedirectUrl" />
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="availability"
          reference="Availability"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AvailabilityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customInputs"
          reference="EventTypeCustomInput"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeCustomInputTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="hashedLink.id"
          reference="HashedLink"
          label="Hashed Link"
        >
          <SelectInput optionText={HashedLinkTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="workflows"
          reference="WorkflowsOnEventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowsOnEventTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
