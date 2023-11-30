import { useQuery } from "react-query";
import AccomodationItem from "./accomodationItem/AccomodationItem";
import "./home.scss";

import { useRecoilState } from "recoil";
import { filterState } from "@/src/states/filterState";
import { format } from "date-fns";
import { fetchAccommodationsData } from "@/src/hooks/fetchAccommodations";
import { Accommodation } from "../../types/accommodations";
import { responseState } from "@/src/states/responseState";
import { useEffect, useRef } from "react";
import { detailState } from "@/src/states/detailState";

const Home = () => {
  const [detailFiltered, setDetailFiltered] = useRecoilState(detailState);
  const [filterStates] = useRecoilState(filterState);
  const [responseStates, setResponseStates] = useRecoilState(responseState);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Intersection Observer 생성
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 타겟 요소가 화면에 나타남
          // console.log("타겟이 화면에 나타났습니다!");
          setTimeout(() => refetch(), 500);
        } else {
          // 타겟 요소가 화면에서 사라짐
          // console.log("타겟이 화면에서 사라졌습니다!");
        }
      });
    });
    // 감시 대상 요소들
    setTimeout(() => {
      if (scrollRef.current) {
        const targetElements = document.querySelector(".target-div");
        observer.observe(targetElements!);
      }
    }, 1000);
  }, [filterStates]);

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
    staleTime: 500000,
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
        {detailFiltered.length === 0
          ? responseStates.responseArray.map((acc: Accommodation) => (
              <AccomodationItem key={acc.id} data={acc} />
            ))
          : detailFiltered.map(acc => (
              <AccomodationItem key={acc.id} data={acc} />
            ))}
        <div className="target-div" ref={scrollRef}>
          @2023 빨리 잡아
        </div>
      </div>
      {detailFiltered.length !== 0 && (
        <button
          className="home__filter-reset"
          onClick={() => setDetailFiltered([])}
        >
          세부필터 해제
        </button>
      )}
    </div>
  )
}

export default Home
