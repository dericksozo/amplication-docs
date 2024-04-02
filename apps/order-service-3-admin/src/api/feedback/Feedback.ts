import { User } from "../user/User";

export type Feedback = {
  id: number;
  date: Date;
  user?: User;
  rating: string;
  comment: string | null;
};
