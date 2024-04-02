import { InputJsonValue } from "../../types";
import { CredentialUpdateManyWithoutAppModelsInput } from "./CredentialUpdateManyWithoutAppModelsInput";
import { WebhookUpdateManyWithoutAppModelsInput } from "./WebhookUpdateManyWithoutAppModelsInput";
import { ApiKeyUpdateManyWithoutAppModelsInput } from "./ApiKeyUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  dirName?: string;
  keys?: InputJsonValue;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  credentials?: CredentialUpdateManyWithoutAppModelsInput;
  webhook?: WebhookUpdateManyWithoutAppModelsInput;
  apiKey?: ApiKeyUpdateManyWithoutAppModelsInput;
};
