import { SortOrder } from "../../util/SortOrder";

export type WorkflowOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
  trigger?: SortOrder;
  time?: SortOrder;
  timeUnit?: SortOrder;
};
