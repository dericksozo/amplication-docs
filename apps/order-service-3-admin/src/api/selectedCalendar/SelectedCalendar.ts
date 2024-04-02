import { User } from "../user/User";

export type SelectedCalendar = {
  id: number;
  user?: User;
  integration: string;
  externalId: string;
};
