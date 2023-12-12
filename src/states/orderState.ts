import { atom, selector } from "recoil";

export const orderState = atom<OrderItemTypes[]>({
  key: "orderState",
  default: JSON.parse(localStorage.getItem("orderState") || "[]"),
});

export const orderStateFromLocalStorage = selector({
  key: "orderStateFromLocalStorage",
  get: ({ get }) => {
    const storedValue = localStorage.getItem("orderState");
    return storedValue ? JSON.parse(storedValue) : get(orderState);
  },
});

export interface OrderItemTypes {
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
  cartItemIds?: number[];
  cartItemId?: number;
}
