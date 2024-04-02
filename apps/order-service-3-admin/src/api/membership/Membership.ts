import { Team } from "../team/Team";
import { User } from "../user/User";

export type Membership = {
  id: number;
  accepted: boolean;
  role?: "MEMBER" | "ADMIN" | "OWNER";
  team?: Team;
  user?: User;
};
