import { http, HttpResponse } from "msw";
import accommodationDetail from "../../public/data/accommodationDetail.json";

const getHotelResolver = () => {
  console.log('get 성공');
  return HttpResponse.json(accommodationDetail)
}
// const postHotelResolver = async ({ request }:any) => {
const postHotelResolver = async () => {
  // const info = await request.formData()
  // hotel.push({
  //   id: "456",
  //   name: "post추가 성공",
  //   location: "ㅎㅎㅎ",
  // });
  // console.log('Logging in as "%s"', info.get('username'))
  console.log('post 성공')
}

export const handlers = [
  http.get("/accommodation", getHotelResolver),
  http.post("/accommodation", postHotelResolver),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
];