export type ReminderMailCreateInput = {
  referenceId: number;
  reminderType: "PENDING_BOOKING_CONFIRMATION";
  elapsedMinutes: number;
};
