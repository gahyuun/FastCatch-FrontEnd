import instance from "./instanceApi";

export const deleteOrderApi = async (orderId: number) => {
  try {
    const res = await instance.delete(`/api/orders/${orderId}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
