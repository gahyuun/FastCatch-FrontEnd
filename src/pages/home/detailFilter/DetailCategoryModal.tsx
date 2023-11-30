import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { useSetRecoilState, useRecoilState } from "recoil";
import { detailState } from "@/src/states/detailState";
import { commitOptions } from "./detailCommitFnc";
import { CommonButton } from "@/src/components";
import TermsAgreementItem from "@/src/components/termsAgreementItem/TermsAgreementItem";
import { IoClose } from "react-icons/io5";

import "./detailCategoryModal.scss";

export interface OptionI {
  key: string;
  label: string;
  state: boolean;
}

interface detailProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const filterOption = {
  hasSmokingRoom: "흡연 가능",
  hasPetRoom: "반려견 동반",
  hasParkingLot: "주차 가능",
  hasWifi: "와이파이",
  hasSwimmingPool: "수영장",
  hasGym: "헬스장",
  hasBreakfast: "조식",
  hasRestaurant: "레스토랑",
  hasCookingRoom: "취사 가능",
};

const DetailCategoryModal = (props: detailProps) => {
  const queryClient = useQueryClient();
  const [detail] = useRecoilState(detailState);
  const setFilteredAtom = useSetRecoilState(detailState);
  const setOpenDetail = props.setOpenDetail;

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [options, setOptions] = useState<OptionI[]>([
    { key: "hasSmokingRoom", label: filterOption.hasSmokingRoom, state: false },
    { key: "hasPetRoom", label: filterOption.hasPetRoom, state: false },
    { key: "hasParkingLot", label: filterOption.hasParkingLot, state: false },
    { key: "hasWifi", label: filterOption.hasWifi, state: false },
    {
      key: "hasSwimmingPool",
      label: filterOption.hasSwimmingPool,
      state: false,
    },
    { key: "hasGym", label: filterOption.hasGym, state: false },
    { key: "hasBreakfast", label: filterOption.hasBreakfast, state: false },
    { key: "hasRestaurant", label: filterOption.hasRestaurant, state: false },
    { key: "hasCookingRoom", label: filterOption.hasCookingRoom, state: false },
  ]);
  const [translateFilterSlider, setTranslateFilterSlider] =
    useState<string>("0");
  const filterButtonsRef = useRef<Array<HTMLButtonElement | null>>(
    Array.from({ length: 4 }, () => null)
  );

  // 첫번째 필터 (순서정렬)
  const sortOptions = (index: number, value: string) => {
    setActiveTab(index);
    setTranslateFilterSlider(value);
    filterButtonsRef.current.forEach(button => {
      if (button) {
        button.classList.remove("filter-active");
      }
    });
    if (filterButtonsRef.current[index]!) {
      filterButtonsRef.current[index]!.classList.add("filter-active");
    }
  };

  // 두번째 필터 (옵션선택)
  const pickOptions = (index: number) => {
    const updatedOptions = [...options];
    updatedOptions[index].state = !updatedOptions[index].state;
    setOptions(updatedOptions);
  };

  // 필터 함수 실행
  const commitOptionsHandler = () => {
    commitOptions(
      activeTab,
      options,
      queryClient,
      setFilteredAtom,
      setOpenDetail
    );
  };

  return (
    <div className="detail-modal__container">
      <div className="detail-backdrop" onClick={props.onClick}></div>
      <div className="detail-modal__wrap">
        <header className="detail-modal__header">
          <span className="text-subtitle4">숙소필터</span>
          <IoClose className="close-button" onClick={props.onClick} />
        </header>
        <section className="detail-modal__body">
          <div className="body__section">
            <p className="text-subtitle5 filter-tit">정렬</p>
            <div className="filters-wrapper">
              <ul className="filter-tabs">
                {[
                  { index: 0, label: "등록순", value: "0" },
                  { index: 1, label: "가격낮은순", value: "100%" },
                  { index: 2, label: "가격높은순", value: "200%" },
                  { index: 3, label: "가나다순", value: "300%" },
                ].map(({ index, label, value }) => (
                  <li key={`filter-${index}`}>
                    <button
                      className={`filter-button ${
                        activeTab === index ? "filter-active" : ""
                      }`}
                      onClick={() => sortOptions(index, value)}
                      ref={element => {
                        filterButtonsRef.current[index] = element;
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="filter-slider" aria-hidden="true">
                <div
                  className="filter-slider-rect"
                  style={{ transform: `translateX(${translateFilterSlider})` }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="body__section">
            <p className="text-subtitle5 filter-tit">숙소 옵션</p>
            <div className="option-wrap">
              {options.map((option, index) => (
                <TermsAgreementItem
                  key={`option-${index}`}
                  state={option.state}
                  setState={() => pickOptions(index)}
                  labelText={option.label}
                  className={"text-body1"}
                  id={`option${index + 1}`}
                />
              ))}
            </div>
            <div className="text-body3 tipped">
              *현 시점에서 세부 필터는 현재까지 불러온 데이터들을 추려보는
              용도로만 사용가능합니다.
            </div>
          </div>
        </section>
        <footer className="detail-modal__footer">
          <CommonButton
            text="취소"
            colorName="coral200"
            onClick={props.onClick as React.MouseEventHandler}
          />
          <CommonButton text="확인" onClick={commitOptionsHandler} />
        </footer>
      </div>
    </div>
  );
};

export default DetailCategoryModal;
