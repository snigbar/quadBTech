import { ReactNode } from "react";

export interface TChildren {
  children: ReactNode;
}

export type TBookings = {
  mybookings: [] | Record<string, unknown>[];
};

export type TContextData = {
  data: null | Record<string, unknown>[];
  myBookings: TBookings;
  error: null | string;
  setBookings?: (param: TBookings) => void;
};
