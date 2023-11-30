import { CartItemType } from "@/src/pages/basket/Basket";
import { SelectedRoomItem } from "..";
import "./selectedAccomodation.scss";

interface SelectedAccomodationProps {
  accomdationItems: CartItemType;
  deleteRoom: (cartId: number) => Promise<void>;
}

const SelectedAccomodation = ({
  accomdationItems,
  deleteRoom,
}: SelectedAccomodationProps) => {
  const { accommodationName, rooms } = accomdationItems;
  console.log(accomdationItems);
  return (
    <section className="selected-room-container">
      <h2 className="text-subtitle4">{accommodationName}</h2>
      <div className="item-list">
        {rooms &&
          rooms.map(room => (
            <div key={room.cartItemId}>
              <SelectedRoomItem room={room} deleteRoom={deleteRoom} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default SelectedAccomodation;
