/* global kakao */
import { useEffect, useRef } from "react";

const AccommodationMap = () => {
  const { kakao }: any = window;
  const mapContainer = useRef(null);
  const position = new kakao.maps.LatLng(
    37.365264512305174,
    127.10676860117488
  );
  const marker = new kakao.maps.Marker({
    position: position,
  });
  const options = {
    center: position,
    level: 4,
  };

  useEffect(() => {
    {
      const mapTypeControl = new kakao.maps.MapTypeControl();
      const map = new kakao.maps.Map(mapContainer.current, options);
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      marker.setMap(map);
    }
  }, []);

  return (
    <div className="accommodation__map">
      <div className="accommodation__menu-title">
        <span className="text-subtitle4">숙소 위치</span>
      </div>
      <div>
        <div
          id="map"
          ref={mapContainer}
          style={{ width: "100%", height: "300px" }}
        ></div>
      </div>
    </div>
  );
};
export default AccommodationMap;
