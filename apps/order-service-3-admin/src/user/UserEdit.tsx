import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  BooleanInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { EventTypeTitle } from "../eventType/EventTypeTitle";
import { CredentialTitle } from "../credential/CredentialTitle";
import { DestinationCalendarTitle } from "../destinationCalendar/DestinationCalendarTitle";
import { MembershipTitle } from "../membership/MembershipTitle";
import { BookingTitle } from "../booking/BookingTitle";
import { ScheduleTitle } from "../schedule/ScheduleTitle";
import { AvailabilityTitle } from "../availability/AvailabilityTitle";
import { SelectedCalendarTitle } from "../selectedCalendar/SelectedCalendarTitle";
import { WebhookTitle } from "../webhook/WebhookTitle";
import { ImpersonationTitle } from "../impersonation/ImpersonationTitle";
import { ApiKeyTitle } from "../apiKey/ApiKeyTitle";
import { AccountTitle } from "../account/AccountTitle";
import { SessionTitle } from "../session/SessionTitle";
import { FeedbackTitle } from "../feedback/FeedbackTitle";
import { WorkflowTitle } from "../workflow/WorkflowTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Username" source="username" />
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" />
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <TextInput label="Password" source="password" />
        <TextInput label="Bio" source="bio" />
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Time Zone" source="timeZone" />
        <TextInput label="Week Start" source="weekStart" />
        <NumberInput step={1} label="Start Time" source="startTime" />
        <NumberInput step={1} label="End Time" source="endTime" />
        <NumberInput step={1} label="Buffer Time" source="bufferTime" />
        <BooleanInput label="Hide Branding" source="hideBranding" />
        <TextInput label="Theme" source="theme" />
        <DateTimeInput label="Trial Ends At" source="trialEndsAt" />
        <NumberInput
          step={1}
          label="Default Schedule Id"
          source="defaultScheduleId"
        />
        <BooleanInput
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <TextInput label="Locale" source="locale" />
        <NumberInput step={1} label="Time Format" source="timeFormat" />
        <TextInput label="Two Factor Secret" source="twoFactorSecret" />
        <BooleanInput label="Two Factor Enabled" source="twoFactorEnabled" />
        <SelectInput
          source="identityProvider"
          label="Identity Provider"
          choices={[
            { label: "CAL", value: "CAL" },
            { label: "GOOGLE", value: "GOOGLE" },
            { label: "SAML", value: "SAML" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Identity Provider Id" source="identityProviderId" />
        <NumberInput step={1} label="Invited To" source="invitedTo" />
        <SelectInput
          source="plan"
          label="Plan"
          choices={[
            { label: "FREE", value: "FREE" },
            { label: "TRIAL", value: "TRIAL" },
            { label: "PRO", value: "PRO" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Brand Color" source="brandColor" />
        <TextInput label="Dark Brand Color" source="darkBrandColor" />
        <BooleanInput label="Away" source="away" />
        <BooleanInput
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <div />
        <BooleanInput label="Verified" source="verified" />
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "USER", value: "USER" },
            { label: "ADMIN", value: "ADMIN" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <ReferenceArrayInput
          source="eventTypes"
          reference="EventType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="credentials"
          reference="Credential"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CredentialTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="destinationCalendar.id"
          reference="DestinationCalendar"
          label="Destination Calendar"
        >
          <SelectInput optionText={DestinationCalendarTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="teams"
          reference="Membership"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembershipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="schedules"
          reference="Schedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleTitle} />
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
          source="selectedCalendars"
          reference="SelectedCalendar"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SelectedCalendarTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="webhooks"
          reference="Webhook"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WebhookTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="impersonatedUsers"
          reference="Impersonation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImpersonationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="impersonatedBy"
          reference="Impersonation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ImpersonationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="apiKeys"
          reference="ApiKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiKeyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="sessions"
          reference="Session"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SessionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="feedback"
          reference="Feedback"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FeedbackTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workflows"
          reference="Workflow"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkflowTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
