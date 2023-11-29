import { atom } from "recoil";

export const orderState = atom<OrderItemTypes[]>({
  key: "orderState",
  default: [],
});

interface OrderItemTypes {
  accommodationId: number;
  accommodationName: string;
  checkInTime: string;
  checkOutTime: string;
  headCount: number;
  maxHeadCount: number;
  orderPrice: number;
  roomId: number;
  roomName: string;
  startDate: string;
  endDate: string;
  roomOption: AccommodationData;
}

type AccommodationData = {
  [key: string]: boolean;
};