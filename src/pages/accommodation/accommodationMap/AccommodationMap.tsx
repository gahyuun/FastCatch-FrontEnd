/* global kakao */
import { useEffect, useRef } from "react";
import "./accommodationMap.scss";
import markerIcon from "../../../assets/icons/markerImg.svg";

const AccommodationMap = () => {
  const { kakao }: any = window;
  const mapContainer = useRef(null);
  const position = new kakao.maps.LatLng(
    37.365264512305174,
    127.10676860117488
  );
  const options = {
    center: position,
    level: 4,
  };
  const imageSize = new kakao.maps.Size(40, 40);

  useEffect(() => {
    {
      const map = new kakao.maps.Map(mapContainer.current, options);
      const mapTypeControl = new kakao.maps.MapTypeControl();
      const markerImage = new kakao.maps.MarkerImage(markerIcon, imageSize);
      const marker = new kakao.maps.Marker({
        position: position,
        image: markerImage,
      });

      const content = `
      <div class="customoverlay">
        <span>호텔&리조트</span>
      </div>`;

      new kakao.maps.CustomOverlay({
        map,
        position,
        content,
      });

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
