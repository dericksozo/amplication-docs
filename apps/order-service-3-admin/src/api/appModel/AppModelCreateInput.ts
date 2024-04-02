import { InputJsonValue } from "../../types";
import { CredentialCreateNestedManyWithoutAppModelsInput } from "./CredentialCreateNestedManyWithoutAppModelsInput";
import { WebhookCreateNestedManyWithoutAppModelsInput } from "./WebhookCreateNestedManyWithoutAppModelsInput";
import { ApiKeyCreateNestedManyWithoutAppModelsInput } from "./ApiKeyCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  dirName: string;
  keys?: InputJsonValue;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  credentials?: CredentialCreateNestedManyWithoutAppModelsInput;
  webhook?: WebhookCreateNestedManyWithoutAppModelsInput;
  apiKey?: ApiKeyCreateNestedManyWithoutAppModelsInput;
};
