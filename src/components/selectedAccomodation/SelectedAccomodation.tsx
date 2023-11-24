import React from "react";
import { SelectedRoomItem } from "..";
import "./selectedAccomodation.scss";

const SelectedAccomodation = () => {
  return (
    <section className="selected-room-container">
      <h2 className="text-subtitle4">강남 호텔 클릭</h2>
      <div className="item-list">
        <SelectedRoomItem />
      </div>
    </section>
  );
};

export default SelectedAccomodation;
