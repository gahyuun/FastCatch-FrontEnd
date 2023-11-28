import "./roomSelect.scss";
import RoomImgSwiper from "./roomImgSwiper/RoomImgSwiper";
import RoomInfo from "./roomInfo/RoomInfo";
import CommonFilter from "@/src/components/commonFilter/CommonFilter";

const RoomSelect = ({ roomsInfo }: any) => {
  return (
    <div className="accommodation__select-room">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">객실 선택</span>
      </div>

      <div className="small-filter__container">
        <CommonFilter />
      </div>

      <div className="room-container">
        {roomsInfo.map((room: any) => (
          <div className="room-container__list" key={room.roomId}>
            <div className="room__imgs">
              <RoomImgSwiper roomImg={room.roomImage} />
            </div>
            <RoomInfo room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelect;
