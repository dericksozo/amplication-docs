import { SortOrder } from "../../util/SortOrder";

export type WebhookOrderByInput = {
  id?: SortOrder;
  subscriberUrl?: SortOrder;
  payloadTemplate?: SortOrder;
  createdAt?: SortOrder;
  active?: SortOrder;
  eventTriggers?: SortOrder;
  userId?: SortOrder;
  eventTypeId?: SortOrder;
  appId?: SortOrder;
  secret?: SortOrder;
};
