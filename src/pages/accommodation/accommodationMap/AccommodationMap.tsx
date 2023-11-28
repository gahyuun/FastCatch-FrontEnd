/* global kakao */
import { useEffect } from "react";

const AccommodationMap = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    };
    let map = new kakao.maps.Map(container, options);
    let markerPosition = new kakao.maps.LatLng(
      37.365264512305174,
      127.10676860117488
    );
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div className="accommodation__map">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">숙소 위치</span>
      </div>
      <div>
        <div id="map" style={{ width: "100%", height: "300px" }}></div>
      </div>
    </div>
  );
};
export default AccommodationMap;
