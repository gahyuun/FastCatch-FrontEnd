import { http, HttpResponse } from "msw";
import accommodationDetail from "../../public/data/accommodationDetail.json";
import allAccommodations from "../../public/data/allAccommodations.json";

const getHotelResolver = () => {
  return HttpResponse.json(accommodationDetail);
};
const postHotelResolver = async ({ request }: any) => {
  const newPost = await request.json();
  console.log("newPost", newPost);

  return HttpResponse.json(newPost, { status: 201 });
};

const getAccommodationResolver = () => {
  return HttpResponse.json(allAccommodations);
};

export const handlers = [
  //
  http.get("/accommodation", getHotelResolver),
  http.post("/accommodation", postHotelResolver),
  http.get("/accomodations", getAccommodationResolver),
];
