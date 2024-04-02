import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { APPMODEL_TITLE_FIELD } from "../appModel/AppModelTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";
import { EVENTTYPE_TITLE_FIELD } from "../eventType/EventTypeTitle";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { DAILYEVENTREFERENCE_TITLE_FIELD } from "../dailyEventReference/DailyEventReferenceTitle";
import { SCHEDULE_TITLE_FIELD } from "../schedule/ScheduleTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Username" source="username" />
        <TextField label="Name" source="name" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <TextField label="Password" source="password" />
        <TextField label="Bio" source="bio" />
        <TextField label="Avatar" source="avatar" />
        <TextField label="Time Zone" source="timeZone" />
        <TextField label="Week Start" source="weekStart" />
        <TextField label="Start Time" source="startTime" />
        <TextField label="End Time" source="endTime" />
        <TextField label="Buffer Time" source="bufferTime" />
        <BooleanField label="Hide Branding" source="hideBranding" />
        <TextField label="Theme" source="theme" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Trial Ends At" source="trialEndsAt" />
        <TextField label="Default Schedule Id" source="defaultScheduleId" />
        <BooleanField
          label="Completed Onboarding"
          source="completedOnboarding"
        />
        <TextField label="Locale" source="locale" />
        <TextField label="Time Format" source="timeFormat" />
        <TextField label="Two Factor Secret" source="twoFactorSecret" />
        <BooleanField label="Two Factor Enabled" source="twoFactorEnabled" />
        <TextField label="Identity Provider" source="identityProvider" />
        <TextField label="Identity Provider Id" source="identityProviderId" />
        <TextField label="Invited To" source="invitedTo" />
        <TextField label="Plan" source="plan" />
        <TextField label="Brand Color" source="brandColor" />
        <TextField label="Dark Brand Color" source="darkBrandColor" />
        <BooleanField label="Away" source="away" />
        <BooleanField
          label="Allow Dynamic Booking"
          source="allowDynamicBooking"
        />
        <TextField label="Metadata" source="metadata" />
        <BooleanField label="Verified" source="verified" />
        <TextField label="Role" source="role" />
        <BooleanField
          label="Disable Impersonation"
          source="disableImpersonation"
        />
        <ReferenceField
          label="Destination Calendar"
          source="destinationcalendar.id"
          reference="DestinationCalendar"
        >
          <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Credential"
          target="userId"
          label="Credentials"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Key" source="key" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Membership"
          target="userId"
          label="Memberships"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <BooleanField label="Accepted" source="accepted" />
            <TextField label="Role" source="role" />
            <ReferenceField label="Team" source="team.id" reference="Team">
              <TextField source={TEAM_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Booking"
          target="userId"
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
          reference="Schedule"
          target="userId"
          label="Schedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Name" source="name" />
            <TextField label="Time Zone" source="timeZone" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Availability"
          target="userId"
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
          reference="SelectedCalendar"
          target="userId"
          label="SelectedCalendars"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Integration" source="integration" />
            <TextField label="External Id" source="externalId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Webhook"
          target="userId"
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
          reference="Impersonation"
          target="impersonatedUserId"
          label="Impersonations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Impersonated User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Impersonated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Impersonation"
          target="impersonatedById"
          label="Impersonations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Impersonated User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Impersonated By"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="ApiKey" target="userId" label="ApiKeys">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Last Used At" source="lastUsedAt" />
            <TextField label="Hashed Key" source="hashedKey" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="App Field"
              source="appmodel.id"
              reference="AppModel"
            >
              <TextField source={APPMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Type Field" source="typeField" />
            <TextField label="Provider" source="provider" />
            <TextField label="Provider Account Id" source="providerAccountId" />
            <TextField label="Refresh Token" source="refreshToken" />
            <TextField label="Access Token" source="accessToken" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="Token Type" source="tokenType" />
            <TextField label="Scope" source="scope" />
            <TextField label="Id Token" source="idToken" />
            <TextField label="Session State" source="sessionState" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Session Token" source="sessionToken" />
            <TextField label="Expires" source="expires" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Feedback"
          target="userId"
          label="Feedbacks"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Date" source="date" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Rating" source="rating" />
            <TextField label="Comment" source="comment" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Workflow"
          target="userId"
          label="Workflows"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Trigger" source="trigger" />
            <TextField label="Time" source="time" />
            <TextField label="Time Unit" source="timeUnit" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
