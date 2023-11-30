import "./roomSelect.scss";
import RoomImgSwiper from "./roomImgSwiper/RoomImgSwiper";
import RoomInfo from "./roomInfo/RoomInfo";
import CommonFilter from "@/src/components/commonFilter/CommonFilter";

const RoomSelect = ({ roomsInfo }: any) => {
  // onClick을 추가했는데 이 부분에서 없어서 vercel preview에러가 떠서 임시방편으로 넣었습니다.
  const handler = () => {};
  console.log(roomsInfo);
  return (
    <div className="accommodation__select-room">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">객실 선택</span>
      </div>

      <div className="small-filter__container">
        <CommonFilter onClick={handler} /> {/* 핸들러 */}
      </div>

      <div className="room-container">
        {roomsInfo.map((room: any) => (
          <div className="room-container__list" key={room.roomId}>
            <div className="room__imgs">
              <RoomImgSwiper roomImg={room.images} />
            </div>
            <RoomInfo room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSelect;
