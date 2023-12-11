import numberFormat from "@/utils/numberFormat";
import { CartItemType } from "../types/basket";

export const calculateTotalRoomsAndPrice = (
  data: CartItemType[]
): { totalRoomsConunt: number; totalPrice: string } => {
  let totalRoomsConunt = 0;
  let price = 0;
  data.forEach((accommodation: CartItemType) => {
    accommodation.rooms.forEach((room: { price: number }) => {
      totalRoomsConunt++;
      price += room.price;
    });
  });
  const totalPrice = numberFormat(price);
  return { totalRoomsConunt, totalPrice };
};
