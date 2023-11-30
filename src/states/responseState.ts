import { atom } from "recoil";
import { Accommodation } from "../types/accommodations";

export interface responseStateTypes {
  pageIndex: number;
  responseArray: Accommodation[];
}

export const responseState = atom<responseStateTypes>({
  key: "responseState",
  default: {
    pageIndex: 0,
    responseArray: [],
  },
});
