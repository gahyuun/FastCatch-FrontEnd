import { useQuery } from "react-query";
import AccomodationItem from "./accomodationItem/AccomodationItem";
import "./home.scss";

import { useRecoilState } from "recoil";
import { filterState } from "@/src/states/filterState";
import { format } from "date-fns";
import { fetchAccommodationsData } from "@/src/hooks/fetchAccommodations";
import { Accommodation } from "../../types/accommodations";

const Home = () => {
  const [filterStates] = useRecoilState(filterState);

  // 시작일 종료일 만들기
  const startDate = format(filterStates.startDate, "yyyy-MM-dd");
  const endDate = filterStates.endDate
    ? format(filterStates.endDate, "yyyy-MM-dd")
    : startDate;

  // 리액트 쿼리
  const { data, isLoading, isError } = useQuery({
    queryKey: ["accommodations", filterStates.current],
    queryFn: () =>
      fetchAccommodationsData(
        filterStates.current.locale,
        startDate,
        endDate,
        filterStates.current.category,
        filterStates.current.amount
      ),
    staleTime: 500000,
    select: data => data.data,
    onSuccess: () => {
      // 토스트 호출
    },
  });

  if (isLoading) {
    return <div>로딩~</div>;
  }
  if (isError) {
    return <div>에러~</div>;
  }

  return (
    <div className="home-wrapper">
      <div className="home-inner">
        {data.accommodations.length !== 0
          ? data.accommodations.map((acc: Accommodation) => (
              <AccomodationItem key={acc.id} data={acc} />
            ))
          : "없어요"}
      </div>
    </div>
  );
};

export default Home;
