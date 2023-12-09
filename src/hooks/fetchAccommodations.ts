import axios from "axios";
import { Accommodations } from "../types/accommodations";
const { VITE_API_BASE_URL } = import.meta.env;

export const fetchAccommodationsData = async (
  REGION: string,
  STARTDATE: string,
  ENDDATE: string,
  CATEGORY: string,
  AMOUNT: number,
  PAGE: number
): Promise<Accommodations> => {
  try {
    const res = await axios.get(
      `${VITE_API_BASE_URL}api/accommodations?category=${CATEGORY}&region=${REGION}&startDate=${STARTDATE}&endDate=${ENDDATE}&headCount=${AMOUNT}&page=${PAGE}`
    );
    return res.data.data;
  } catch (error) {
    throw new Error("Failed to fetch accs data");
  }
};

export const searchAccommodationByName = async (NAME: string) => {
  try {
    const res = await axios.get(
      `${VITE_API_BASE_URL}api/accommodations/search-by-name?query=${NAME}`
    );
    return res.data.data;
  } catch {
    throw new Error("No Valid data with this name");
  }
};
