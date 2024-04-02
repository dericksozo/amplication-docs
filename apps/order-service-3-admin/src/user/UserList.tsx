import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
