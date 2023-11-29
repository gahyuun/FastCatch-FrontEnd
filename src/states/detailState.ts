import { atom } from "recoil";

export type Accommodation = {
  id: number;
  name: string;
  region: string;
  category: string;
  lowestPrice: number;
  image: string;
  soldOut: boolean;
  accommodationOption: {
    hasSmokingRoom: boolean;
    hasPetRoom: boolean;
    hasParkingLot: boolean;
    hasWifi: boolean;
    hasSwimmingPool: boolean;
    hasGym: boolean;
    hasBreakfast: boolean;
    hasRestaurant: boolean;
    hasCookingRoom: boolean;
  };
};

export const detailState = atom<Accommodation[]>({
  key: "detailState",
  default: [],
});
