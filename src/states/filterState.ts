import { atom } from "recoil";
import { localeType, AccommodationType } from "../types/accommodations";

export interface filterStateTypes {
  // 멘토링 이후 분리할지, 어떻게 할지 결정할 예정
  current: {
    locale: localeType;
    startDate: Date;
    endDate: Date | null;
    category: AccommodationType;
    amount: number;
  };
  locale: localeType;
  startDate: Date;
  endDate: Date | null;
  category: AccommodationType;
  amount: number;
}

export const filterState = atom<filterStateTypes>({
  key: "filterState",
  default: {
    current: {
      locale: "ALL",
      startDate: new Date(),
      endDate: new Date(),
      category: "ALL",
      amount: 2,
    },
    locale: "ALL",
    startDate: new Date(),
    endDate: new Date(),
    category: "ALL",
    amount: 2,
  },
});
