import { OrderDataTypes } from "../types/order";
import instance from "./instanceApi";

export const getOrderApi = async () => {
  try {
    const res = await instance.get("/api/orders");
    const orderData = res.data.data.orders;

    const reservedOrders =
      orderData.find((order: OrderDataTypes) => order.status === "reserved")
        ?.orderResponses || [];

    const usedOrders =
      orderData.find((order: OrderDataTypes) => order.status === "used")
        ?.orderResponses || [];

    const canceledOrders =
      orderData.find((order: OrderDataTypes) => order.status === "canceled")
        ?.orderResponses || [];
    return { orderData, reservedOrders, usedOrders, canceledOrders };
  } catch (error) {
    console.log(error);
    throw new Error("데이터를 불러올 수 없습니다.");
  }
};
