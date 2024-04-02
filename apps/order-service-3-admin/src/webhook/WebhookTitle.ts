import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "subscriberUrl";

export const WebhookTitle = (record: TWebhook): string => {
  return record.subscriberUrl?.toString() || String(record.id);
};
