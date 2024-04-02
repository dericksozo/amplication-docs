import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  sessionToken?: SortOrder;
  expires?: SortOrder;
  userId?: SortOrder;
};
