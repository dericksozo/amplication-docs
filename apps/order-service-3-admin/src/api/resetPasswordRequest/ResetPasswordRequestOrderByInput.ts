import { SortOrder } from "../../util/SortOrder";

export type ResetPasswordRequestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  expires?: SortOrder;
};
