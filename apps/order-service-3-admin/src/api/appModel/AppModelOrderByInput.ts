import { SortOrder } from "../../util/SortOrder";

export type AppModelOrderByInput = {
  id?: SortOrder;
  dirName?: SortOrder;
  keys?: SortOrder;
  categories?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
