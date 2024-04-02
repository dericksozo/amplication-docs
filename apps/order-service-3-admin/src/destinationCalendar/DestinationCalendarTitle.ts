import { DestinationCalendar as TDestinationCalendar } from "../api/destinationCalendar/DestinationCalendar";

export const DESTINATIONCALENDAR_TITLE_FIELD = "integration";

export const DestinationCalendarTitle = (
  record: TDestinationCalendar
): string => {
  return record.integration?.toString() || String(record.id);
};
