import { OrderItemTypes } from "@/states/orderState";
import { RoomDescriptionType } from "../types/basket";

export const flattenCartItemsData = (data: any[]): OrderItemTypes[] => {
  return data.reduce((flattenedData, accommodation) => {
    const { accommodationName, rooms } = accommodation;

    return [
      ...flattenedData,
      ...rooms.map((room: RoomDescriptionType) => ({
        accommodationName,
        ...room,
      })),
    ];
  }, []);
};
