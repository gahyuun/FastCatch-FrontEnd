import { useEffect, useRef } from "react";
import { IoIosSearch } from "react-icons/io";
import "./searchFilter.scss";

const SearchFilter = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    console.log(inputRef.current, "cur!");
  }, []);

  const searchSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // if (e.target instanceof HTMLInputElement) {
    //   console.log("typing in input...")
    // } else {
    //   console.log("submitted!");
    // }
  };

  return (
    <form onSubmit={searchSubmitHandler} style={{ position: "relative" }}>
      <input
        type="text" //
        minLength={2}
        maxLength={15}
        autoFocus
        placeholder="원하시는 지역, 숙소를 검색해보세요!"
        className="search-filter__input text-body2"
        ref={inputRef}
      />
      <button type="submit" className="filter__primary-button in-search">
        <IoIosSearch className="search-button__icon" />
      </button>
    </form>
  );
};

export default SearchFilter;
