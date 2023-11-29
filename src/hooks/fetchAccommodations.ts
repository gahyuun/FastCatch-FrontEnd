import axios from "axios";

export const fetchAccommodationsData = async (REGION: string, STARTDATE: string, ENDDATE: string, AMOUNT: number) => {
  try {
    const res = await axios.get(`http://54.180.97.194/api/accommodations?category=ALL&region=${REGION}&startDate=${STARTDATE}&endDate=${ENDDATE}&headCount=${AMOUNT}`);
    console.log(res, "res");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch accs data");
  }
};
