import { http, HttpResponse } from "msw";
import hotel from "./dummy.json";

export const handlers = [
  http.get("/accommodation", ()=>{
    console.log('get 성공');
    return HttpResponse.json(hotel)
  }),
  http.post("/accommodation", () => {
    hotel.push({
      id: "345",
      name: "sadHotel",
      location: "강원도",
    });
    console.log('post 성공')
  }),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
];