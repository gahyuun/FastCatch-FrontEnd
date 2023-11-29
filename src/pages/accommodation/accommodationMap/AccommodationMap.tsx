/* global kakao */
import { useEffect, useRef } from "react";
import "./accommodationMap.scss";
import markerIcon from "../../../assets/icons/markerImg.svg";

interface PropType {
  accommodationName: string;
  latitude: string;
  longitude: string;
}
interface LatLng {
  getLat(): number;
  getLng(): number;
}
declare global {
  interface Window {
    kakao: any;
  }
}

const AccommodationMap = ({
  accommodationName,
  latitude,
  longitude,
}: PropType) => {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const position: LatLng = new kakao.maps.LatLng(
    Number(latitude),
    Number(longitude)
  );
  const options = {
    center: position,
    level: 4,
  };
  const imageSize = new kakao.maps.Size(40, 40);

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, options);
    const mapTypeControl = new kakao.maps.MapTypeControl();
    const markerImage = new kakao.maps.MarkerImage(markerIcon, imageSize);
    const marker = new kakao.maps.Marker({
      position: position,
      image: markerImage,
    });

    const content = `
      <div class="customoverlay">
        <span>${accommodationName}</span>
      </div>`;

    new kakao.maps.CustomOverlay({
      map,
      position,
      content,
      yAnchor: 2.5,
    });

    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    marker.setMap(map);
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
