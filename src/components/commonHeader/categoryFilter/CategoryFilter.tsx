import { useState } from "react";
import "./categoryFilter.scss";
import all from "../../../assets/categoryIcons/all.jpg";
import pensionFullvilla from "../../../assets/categoryIcons/pension-fullvilla.jpg";
import guestHouse from "../../../assets/categoryIcons/guest-house.jpg";
import hotel from "../../../assets/categoryIcons/hotel.jpg";
import motel from "../../../assets/categoryIcons/motel.jpg";
import { IoOptionsOutline } from "react-icons/io5";
// import ReactDOM from "react-dom";

interface categoryTypes {
  name: string;
  img: string;
  select: boolean;
}

const CategoryFilter = () => {
  const categoriesData: //
  categoryTypes[] = [
    { name: "전체", img: all, select: true },
    { name: "호텔/리조트", img: pensionFullvilla, select: false },
    { name: "모텔", img: guestHouse, select: false },
    { name: "팬션/풀빌라", img: hotel, select: false },
    { name: "게스트하우스", img: motel, select: false },
  ];

  const [categories, setCategories] = useState(categoriesData);
  const detailOpenHandler = () => {};

  const changeCategoryHandler = (categoryName: string) => {
    const copy: categoryTypes[] = categories.slice().map((arg) => {
      if (arg.name === categoryName) {
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
          <button className="filter__button-detail" onClick={detailOpenHandler}>
            <IoOptionsOutline className="detail__icon" />
            <span className="text-body3">필터</span>
          </button>
        </div>
        {/* {ReactDOM.createPortal()} */}
      </div>
    </div>
  );
};

export default CategoryFilter;
