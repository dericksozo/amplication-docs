import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FeedbackUpdateInput = {
  date?: Date;
  user?: UserWhereUniqueInput;
  rating?: string;
  comment?: string | null;
};
