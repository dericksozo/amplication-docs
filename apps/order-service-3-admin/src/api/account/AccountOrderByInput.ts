import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  typeField?: SortOrder;
  provider?: SortOrder;
  providerAccountId?: SortOrder;
  refreshToken?: SortOrder;
  accessToken?: SortOrder;
  expiresAt?: SortOrder;
  tokenType?: SortOrder;
  scope?: SortOrder;
  idToken?: SortOrder;
  sessionState?: SortOrder;
  userId?: SortOrder;
};
