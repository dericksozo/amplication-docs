import { DailyEventReference as TDailyEventReference } from "../api/dailyEventReference/DailyEventReference";

export const DAILYEVENTREFERENCE_TITLE_FIELD = "dailyurl";

export const DailyEventReferenceTitle = (
  record: TDailyEventReference
): string => {
  return record.dailyurl?.toString() || String(record.id);
};
