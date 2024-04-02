import { SortOrder } from "../../util/SortOrder";

export type MembershipOrderByInput = {
  id?: SortOrder;
  accepted?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
  userId?: SortOrder;
};
