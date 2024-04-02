import { SelectedCalendar as TSelectedCalendar } from "../api/selectedCalendar/SelectedCalendar";

export const SELECTEDCALENDAR_TITLE_FIELD = "integration";

export const SelectedCalendarTitle = (record: TSelectedCalendar): string => {
  return record.integration?.toString() || String(record.id);
};
