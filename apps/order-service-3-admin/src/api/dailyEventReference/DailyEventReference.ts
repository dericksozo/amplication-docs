import { Booking } from "../booking/Booking";

export type DailyEventReference = {
  id: number;
  dailyurl: string;
  dailytoken: string;
  booking?: Booking | null;
};
