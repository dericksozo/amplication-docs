import { SortOrder } from "../../util/SortOrder";

export type SelectedCalendarOrderByInput = {
  id?: SortOrder;
  userId?: SortOrder;
  integration?: SortOrder;
  externalId?: SortOrder;
};
