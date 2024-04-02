import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventTypeWhereUniqueInput } from "../eventType/EventTypeWhereUniqueInput";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type WebhookWhereInput = {
  id?: StringFilter;
  subscriberUrl?: StringFilter;
  payloadTemplate?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  active?: BooleanFilter;
  user?: UserWhereUniqueInput;
  eventType?: EventTypeWhereUniqueInput;
  appField?: AppModelWhereUniqueInput;
  secret?: StringNullableFilter;
};
