import { ApiKey as TApiKey } from "../api/apiKey/ApiKey";

export const APIKEY_TITLE_FIELD = "note";

export const ApiKeyTitle = (record: TApiKey): string => {
  return record.note?.toString() || String(record.id);
};
