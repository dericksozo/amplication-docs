export type ReminderMail = {
  id: number;
  referenceId: number;
  reminderType?: "PENDING_BOOKING_CONFIRMATION";
  elapsedMinutes: number;
  createdAt: Date;
};
