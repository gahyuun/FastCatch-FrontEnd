import { http } from "msw";
import people from "./dummy.json";

export const handlers = [
  http.get("/people", ()=>console.log('get 성공')
  ),
  http.post("/people", () => {
    people.push({
      id: "345",
      name: "son",
      country: "asia",
      lang: "php",
    });
    console.log('post 성공')
  }),
  http.delete('/posts/:id', ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`)
  }),
];