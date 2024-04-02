import { SortOrder } from "../../util/SortOrder";

export type ApiKeyOrderByInput = {
  id?: SortOrder;
  note?: SortOrder;
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  lastUsedAt?: SortOrder;
  hashedKey?: SortOrder;
  userId?: SortOrder;
  appId?: SortOrder;
};
