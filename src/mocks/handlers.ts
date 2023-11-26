import { http, HttpResponse } from "msw";
import accommodationDetail from "../../public/data/accommodationDetail.json";

const getHotelResolver = () => {
  return HttpResponse.json(accommodationDetail)
}
const postHotelResolver = async ({ request }:any) => {
  const newPost = await request.json()
  console.log('newPost',newPost)

  return HttpResponse.json(newPost,{status:201})
}

export const handlers = [
  http.get("/accommodation", getHotelResolver),
  http.post("/accommodation", postHotelResolver),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
];