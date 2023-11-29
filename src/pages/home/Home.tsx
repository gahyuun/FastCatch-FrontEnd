import { useQuery } from "react-query";
import AccomodationItem from "./accomodationItem/AccomodationItem";
import "./home.scss";

import { useRecoilState } from "recoil";
import { filterState } from "@/src/states/filterState";
import { format } from "date-fns";
import { fetchAccommodationsData } from "@/src/api/api";
import { Accommodation, AccommodationType } from "../../types/accommodations";
import CategoryFilter from "./categoryFilter/CategoryFilter";
import { useState } from "react";

const Home = () => {
  const [filterStates] = useRecoilState(filterState);

  const [selectedCategory, SetSelectedCategory] = useState<AccommodationType>("ALL");

  const startDate = format(filterStates.startDate, "yyyy-MM-dd");
  const endDate = filterStates.endDate ? format(filterStates.endDate, "yyyy-MM-dd") : startDate;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["accommodations"],
    queryFn: () => fetchAccommodationsData(filterStates.locale, startDate, endDate, filterStates.amount),
    staleTime: 500000,
    select: (data) => data.data,
  });

  if (isLoading) {
    return <div>로딩~</div>;
  }
  if (isError) {
    return <div>에러~</div>;
  }

  console.log(data, "데이터~");

  return (
    <div className="home-wrapper">
      <CategoryFilter onChangeCategory={SetSelectedCategory} />
      <div className="home-inner">
        {selectedCategory === "ALL" && data.accommodations.map((acc: Accommodation) => <AccomodationItem key={acc.id} data={acc} />)}
        {selectedCategory !== "ALL" && data.accommodations.map((acc: Accommodation) => (acc.category === selectedCategory ? <AccomodationItem key={acc.id} data={acc} /> : ""))}
      </div>
    </div>
  );
};

export default Home;
