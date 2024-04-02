import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "rating";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.rating?.toString() || String(record.id);
};
