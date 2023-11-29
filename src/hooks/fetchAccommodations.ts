import axios from "axios";

export const fetchAccommodationsData = async (
  REGION: string,
  STARTDATE: string,
  ENDDATE: string,
  CATEGORY: string,
  AMOUNT: number,
  PAGE: number
) => {
  try {
    console.log(PAGE, "PAGEPAGE");
    const res = await axios.get(
      `http://54.180.97.194/api/accommodations?category=${CATEGORY}&region=${REGION}&startDate=${STARTDATE}&endDate=${ENDDATE}&headCount=${AMOUNT}&page=${PAGE}`
    );
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch accs data");
  }
};
