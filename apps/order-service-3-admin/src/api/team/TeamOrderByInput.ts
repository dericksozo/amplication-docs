import { SortOrder } from "../../util/SortOrder";

export type TeamOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  slug?: SortOrder;
  logo?: SortOrder;
  bio?: SortOrder;
  hideBranding?: SortOrder;
};
