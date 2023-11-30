import instance from "./instanceApi";

let pageNums = {
  reserved: 1,
  used: 1,
  canceled: 1,
};

export const getOrderListApi = async (
  status: "reserved" | "used" | "canceled"
) => {
  try {
    const res = await instance.get(
      `/api/orders/status/${status}?page=${pageNums[status]}`
    );
    pageNums[status] = pageNums[status] + 1;
    return res.data.data.orderResponses;
  } catch (error) {
    console.log(error);
  }
};
