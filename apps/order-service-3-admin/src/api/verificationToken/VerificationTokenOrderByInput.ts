import { SortOrder } from "../../util/SortOrder";

export type VerificationTokenOrderByInput = {
  id?: SortOrder;
  identifier?: SortOrder;
  token?: SortOrder;
  expires?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
