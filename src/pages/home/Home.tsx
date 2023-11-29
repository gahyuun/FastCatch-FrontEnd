import { useQuery } from "react-query";
import AccomodationItem from "./accomodationItem/AccomodationItem";
import "./home.scss";

import { useRecoilState } from "recoil";
import { filterState } from "@/src/states/filterState";
import { format } from "date-fns";
import { fetchAccommodationsData } from "@/src/hooks/fetchAccommodations";
import { Accommodation } from "../../types/accommodations";
import { responseState } from "@/src/states/responseState";

const Home = () => {
  const [filterStates] = useRecoilState(filterState);
  const [responseStates, setResponseStates] = useRecoilState(responseState);

  // 시작일 종료일 만들기
  const startDate = format(filterStates.startDate, "yyyy-MM-dd");
  const endDate = filterStates.endDate
    ? format(filterStates.endDate, "yyyy-MM-dd")
    : startDate;

  // 리액트 쿼리
  const { data, refetch, isLoading, isError } = useQuery({
    queryKey: ["accommodations", filterStates.current],
    queryFn: () =>
      fetchAccommodationsData(
        filterStates.current.locale,
        startDate,
        endDate,
        filterStates.current.category,
        filterStates.current.amount,
        responseStates.pageIndex
      ),
    onSuccess: data => {
      setResponseStates(prev => ({
        pageIndex: prev.pageIndex + 1,
        responseArray: [...prev.responseArray, ...data.data.accommodations],
      }));
    },
  });

  if (isLoading) {
    return <div>로딩~</div>;
  }
  if (isError) {
    return <div>에러~</div>;
  }
  if (data) {
  }

  return (
    <div className="home-wrapper">
      <div className="home-inner">
        {responseStates.responseArray.length !== 0
          ? responseStates.responseArray.map((acc: Accommodation) => (
              <AccomodationItem key={acc.id} data={acc} />
            ))
          : "없어요"}
      </div>
      <button onClick={() => refetch()}>리패치</button>
    </div>
  );
};

export default Home;
