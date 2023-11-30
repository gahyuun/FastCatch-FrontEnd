import { atom } from "recoil";
import { localeType } from "../types/accommodations";

export interface filterStateTypes {
  // 멘토링 이후 분리할지, 어떻게 할지 결정할 예정
  current: {
    locale: localeType;
    startDate: Date;
    endDate: Date | null;
    amount: number;
  };
  locale: localeType;
  startDate: Date;
  endDate: Date | null;
  amount: number;
}

export const filterState = atom<filterStateTypes>({
  key: "filterState",
  default: {
    current: {
      locale: "SEOUL",
      startDate: new Date(),
      endDate: new Date(),
      amount: 2,
    },
    locale: "SEOUL",
    startDate: new Date(),
    endDate: new Date(),
    amount: 2,
  },
});
