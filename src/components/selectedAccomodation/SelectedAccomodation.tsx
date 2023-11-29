import { CartItemType } from "@/src/pages/basket/Basket";
import { SelectedRoomItem } from "..";
import "./selectedAccomodation.scss";

interface SelectedAccomodationProps {
  accomdationItems: CartItemType;
}

const SelectedAccomodation = ({
  accomdationItems,
}: SelectedAccomodationProps) => {
  const {
    accommodationName,
    cartItemId,
    endDate,
    headCount,
    price,
    startDate,
  } = accomdationItems;
  return (
    <section className="selected-room-container">
      <h2 className="text-subtitle4">{accomdationItems.accommodationName}</h2>
      <div className="item-list">
        <SelectedRoomItem
          roomName={accommodationName}
          startDate={startDate}
          endDate={endDate}
          headCount={headCount}
          price={price}
        />
      </div>
    </section>
  );
};

export default SelectedAccomodation;
