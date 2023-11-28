import "./detailCategoryModal.scss";
interface detailProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const DetailCategoryModal = (props: detailProps) => {
  return (
    <div className="detail-modal__container">
      <div className="detail-backdrop" onClick={props.onClick}></div>
      <div className="detail-modal">하하</div>
    </div>
  );
};

export default DetailCategoryModal;
