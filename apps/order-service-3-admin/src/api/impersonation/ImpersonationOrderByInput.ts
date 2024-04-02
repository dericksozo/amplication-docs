import { SortOrder } from "../../util/SortOrder";

export type ImpersonationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  impersonatedUserId?: SortOrder;
  impersonatedById?: SortOrder;
};
