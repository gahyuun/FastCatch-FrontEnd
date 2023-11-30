import { atom } from "recoil";

export const orderState = atom<OrderItemTypes[]>({
  key: "orderState",
  default: [],
});

interface OrderItemTypes {
  // accommodationId: number;
  accommodationName: string;
  checkInTime: string;
  checkOutTime: string;
  headCount: number;
  maxHeadCount: number;
  price: number;
  roomId: number;
  roomName: string;
  startDate: string;
  endDate: string;
}
