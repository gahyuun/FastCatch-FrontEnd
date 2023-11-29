import { atom } from "recoil";
import { localeType } from "../types/accommodations";

export interface filterStateTypes {
  // 최근에 조회된 데이터를 물고 있으려면 current를 추가하면 좋을거 같습니다.
  // current: { locale: localeType; startDate: Date; endDate: Date | null; amount: number };
  locale: localeType;
  startDate: Date;
  endDate: Date | null;
  amount: number;
}

export const filterState = atom<filterStateTypes>({
  key: "filterState",
  default: {
    // current: { locale: "SEOUL", startDate: new Date(), endDate: new Date(), amount: 2 },
    locale: "SEOUL",
    startDate: new Date(),
    endDate: new Date(),
    amount: 2,
  },
});
