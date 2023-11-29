import { useState } from "react";
import ReactDOM from "react-dom";
import "./categoryFilter.scss";

// 이미지들
import ALL from "../../../assets/categoryIcons/all.jpg";
import PENSION from "../../../assets/categoryIcons/pension-fullvilla.jpg";
import GUESTHOUSE from "../../../assets/categoryIcons/guest-house.jpg";
import HOTELRESORT from "../../../assets/categoryIcons/hotel.jpg";
import MOTEL from "../../../assets/categoryIcons/motel.jpg";
import { IoOptionsOutline } from "react-icons/io5";
import { AccommodationType } from "../../../types/accommodations";

// 다른 컴포넌트
import DetailCategoryModal from "../detailFilter/DetailCategoryModal";

interface categoryTypes {
  name: string;
  img: string;
  select: boolean;
  engName: string;
}

const CategoryFilter = ({ onChangeCategory }: { onChangeCategory: React.Dispatch<React.SetStateAction<AccommodationType>> }) => {
  const categoriesData: //
  categoryTypes[] = [
    { name: "전체", img: ALL, engName: "ALL", select: true },
    { name: "호텔/리조트", img: PENSION, engName: "HOTELRESORT", select: false },
    { name: "모텔", img: GUESTHOUSE, engName: "MOTEL", select: false },
    { name: "팬션/풀빌라", img: HOTELRESORT, engName: "PENSION", select: false },
    { name: "게스트하우스", img: MOTEL, engName: "GUESTHOUSE", select: false },
  ];

  // 디테일 필터 오픈 여부 state
  const [openDetail, setOpenDetail] = useState(false);

  // 카테고리 선택 상황 state
  const [categories, setCategories] = useState(categoriesData);

  const toggleDetailHandler = () => {
    setOpenDetail((prev) => !prev);
  };

  const changeCategoryHandler = (categoryName: string) => {
    const copy: categoryTypes[] = categories.slice().map((arg) => {
      if (arg.name === categoryName) {
        onChangeCategory(arg.engName as AccommodationType);
        return { ...arg, select: true };
      }
      return { ...arg, select: false };
    });
    setCategories(copy);
  };

  return (
    <div className="category-filter__container">
      <div className="category-filter__inner">
        {categories.map((category, idx) =>
          category.select === true ? ( //
            <button //
              key={`category-filter-${idx}`}
              className="filter__button categorySelect"
              onClick={() => changeCategoryHandler(category.name)}
            >
              <img src={category.img}></img>
              <span>{category.name}</span>
            </button>
          ) : (
            <button //
              key={idx}
              className="filter__button"
              onClick={() => changeCategoryHandler(category.name)}
            >
              <img src={category.img}></img>
              <span>{category.name}</span>
            </button>
          )
        )}
        <div className="filter__adjust-height">
          <button className="filter__button-detail" onClick={toggleDetailHandler}>
            <IoOptionsOutline className="detail__icon" />
            <span className="text-body3">필터</span>
          </button>
        </div>
        {openDetail ? ReactDOM.createPortal(<DetailCategoryModal onClick={toggleDetailHandler} setOpenDetail={setOpenDetail} />, document.getElementById("root") as Element) : ""}
      </div>
    </div>
  );
};

export default CategoryFilter;
