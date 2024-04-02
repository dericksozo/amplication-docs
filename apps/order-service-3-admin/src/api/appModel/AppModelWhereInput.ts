import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../credential/CredentialListRelationFilter";
import { WebhookListRelationFilter } from "../webhook/WebhookListRelationFilter";
import { ApiKeyListRelationFilter } from "../apiKey/ApiKeyListRelationFilter";

export type AppModelWhereInput = {
  id?: StringFilter;
  dirName?: StringFilter;
  keys?: JsonFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  credentials?: CredentialListRelationFilter;
  webhook?: WebhookListRelationFilter;
  apiKey?: ApiKeyListRelationFilter;
};
