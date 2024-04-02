import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";

export type DestinationCalendarUpdateInput = {
  integration?: string;
  externalId?: string;
  user?: UserWhereUniqueInput | null;
  booking?: BookingWhereUniqueInput | null;
  eventType?: EventTypeWhereUniqueInput | null;
  credential?: CredentialWhereUniqueInput | null;
};
