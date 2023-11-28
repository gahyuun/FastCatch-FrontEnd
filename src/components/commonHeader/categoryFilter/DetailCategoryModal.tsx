import { IoClose } from "react-icons/io5";
import "./detailCategoryModal.scss";
import CommonButton from "../../commonButton/CommonButton";

interface detailProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const DetailCategoryModal = (props: detailProps) => {
  // const commitHandler = (e: React.MouseEvent) => {};

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
            <label htmlFor="" className="text-subtitle5">
              정렬
            </label>
            <button>버튼1</button>
          </div>
          <div className="body__section">
            <label htmlFor="" className="text-subtitle5">
              숙소 옵션
            </label>
          </div>
        </section>
        <footer className="detail-modal__footer">
          <CommonButton //
            text="취소"
            colorName="coral200"
            onClick={props.onClick as React.MouseEventHandler}
          />
          <CommonButton text="확인" /*onClick={commitHandler}*/ />
        </footer>
      </div>
    </div>
  );
};

export default DetailCategoryModal;
