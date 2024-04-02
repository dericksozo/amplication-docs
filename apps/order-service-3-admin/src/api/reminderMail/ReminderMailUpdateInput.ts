export type ReminderMailUpdateInput = {
  referenceId?: number;
  reminderType?: "PENDING_BOOKING_CONFIRMATION";
  elapsedMinutes?: number;
};
