import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembershipWhereInput = {
  id?: IntFilter;
  accepted?: BooleanFilter;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
