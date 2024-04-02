import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { CredentialWhereUniqueInput } from "../credential/CredentialWhereUniqueInput";

export type DestinationCalendarWhereInput = {
  id?: IntFilter;
  integration?: StringFilter;
  externalId?: StringFilter;
  user?: UserWhereUniqueInput;
  booking?: BookingWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
  credential?: CredentialWhereUniqueInput;
};
