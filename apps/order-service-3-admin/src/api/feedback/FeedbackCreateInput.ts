import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackCreateInput = {
  date: Date;
  user: UserWhereUniqueInput;
  rating: string;
  comment?: string | null;
};
