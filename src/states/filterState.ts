import { atom } from "recoil";

export interface filterStateTypes {
  locale: "SEOUL" | "GYEONGGI" | "GANGWON" | "CHUNGCHEONG" | "HONAM" | "GYEONGSANG" | "JEJU";
  startDate: Date;
  endDate: Date | null;
  amount: number;
}

export const filterState = atom<filterStateTypes>({
  key: "filterState",
  default: {
    locale: "SEOUL",
    startDate: new Date(),
    endDate: new Date(),
    amount: 2,
  },
});
