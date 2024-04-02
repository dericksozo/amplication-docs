import { JsonValue } from "type-fest";
import { Credential } from "../credential/Credential";
import { Webhook } from "../webhook/Webhook";
import { ApiKey } from "../apiKey/ApiKey";

export type AppModel = {
  id: string;
  dirName: string;
  keys: JsonValue;
  categories?: Array<
    "calendar" | "messaging" | "other" | "payment" | "video" | "web3"
  >;
  createdAt: Date;
  updatedAt: Date;
  credentials?: Array<Credential>;
  webhook?: Array<Webhook>;
  apiKey?: Array<ApiKey>;
};
