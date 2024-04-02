import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  id?: SortOrder;
  date?: SortOrder;
  userId?: SortOrder;
  rating?: SortOrder;
  comment?: SortOrder;
};
