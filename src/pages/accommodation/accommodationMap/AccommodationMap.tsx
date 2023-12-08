/* global kakao */
import { useEffect, useRef } from "react";
import "./accommodationMap.scss";
import markerIcon from "../../../assets/icons/markerImg.svg";
import { ToastLayout } from "@/components/common";

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
  const categoryRef = useRef<HTMLUListElement>(null);
  const position: LatLng = new kakao.maps.LatLng(
    Number(latitude),
    Number(longitude)
  );
  const options = {
    center: position,
    level: 4,
  };
  const imageSize = new kakao.maps.Size(40, 40);
  const { showToast, ToastContainer } = ToastLayout();

  useEffect(() => {
    let markers: any[] = [];
    let currCategory = "";
    const map = new kakao.maps.Map(mapContainer.current, options);
    const markerImage = new kakao.maps.MarkerImage(markerIcon, imageSize);
    const marker = new kakao.maps.Marker({
      position: position,
      image: markerImage,
    });
    const contentNode = document.createElement("div");
    const content = `
    <div class="customoverlay">
      <span>${accommodationName}</span>
    </div>`;
    const customOverlay = new kakao.maps.CustomOverlay({
      map,
      position,
      content,
      yAnchor: 2.5,
    });
    const placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 2 });

    const ps = new kakao.maps.services.Places(map);
    kakao.maps.event.addListener(map, "idle", searchPlaces);
    contentNode.className = "placeinfo_wrap";
    placeOverlay.setContent(contentNode);

    addCategoryClickEvent();

    function searchPlaces() {
      if (!currCategory) {
        return;
      }
      placeOverlay.setMap(null);
      removeMarker();
      ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    }
    // 장소검색이 완료시 호출되는 콜백 함수
    function placesSearchCB(data: { [key: string]: string }[], status: string) {
      if (status === kakao.maps.services.Status.OK) {
        displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        showToast({
          theme: "error",
          message: "주변에 해당 시설이 없습니다",
        });
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        showToast({
          theme: "error",
          message: "정보를 불러오는 데 에러가 발생했습니다",
        });
      }
    }

    function displayPlaces(places: { [key: string]: string }[]) {
      // 선택된 카테고리 번호
      const order = categoryRef
        .current!.querySelector(`#${currCategory}`)!
        .getAttribute("data-order");

      for (let i = 0; i < places.length; i++) {
        // 마커를 생성 & 표시
        const marker = addMarker(
          new kakao.maps.LatLng(places[i].y, places[i].x),
          order
        );
        (function (marker, place) {
          kakao.maps.event.addListener(marker, "click", function () {
            displayPlaceInfo(place);
          });
        })(marker, places[i]);
      }
    }

    function addMarker(position: { La: number; Ma: number }, order: any) {
      const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        // 마커 이미지
        imageSize = new kakao.maps.Size(27, 28),
        imgOptions = {
          // 스프라이트 이미지
          spriteSize: new kakao.maps.Size(72, 208),
          spriteOrigin: new kakao.maps.Point(46, order * 36),
          offset: new kakao.maps.Point(11, 28),
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions
        ),
        marker = new kakao.maps.Marker({
          position: position,
          image: markerImage,
        });
      // 카테고리에 대한 마커 추가
      marker.setMap(map);
      markers.push(marker);
      return marker;
    }

    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap();
      }
      markers = [];
    }
    function displayPlaceInfo(place: any) {
      const content = '<div class="placeinfo">' + place.place_name + "</div>";
      contentNode.innerHTML = content;
      placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
      placeOverlay.setMap(map);
    }
    // 각 카테고리에 클릭 이벤트
    function addCategoryClickEvent() {
      const category = categoryRef.current!;
      const children: any = category!.children;
      console.log(children, "children");
      for (let i = 0; i < children.length; i++) {
        // children[i].addEventListener("click", onClickCategory);
        children[i].onclick = onClickCategory;
      }
    }
    function onClickCategory(this: HTMLElement, event: any) {
      placeOverlay.setMap(null);
      event.preventDefault();

      const id = this.id;
      const className = this.className;
      if (className === "on") {
        currCategory = "";
        changeCategoryClass(null);
        removeMarker();
      } else {
        currCategory = id;
        changeCategoryClass(this);
        searchPlaces();
      }
    }
    // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
    function changeCategoryClass(el: { className: string } | null) {
      const category = categoryRef.current!;
      const children = category!.children;
      for (let i = 0; i < children.length; i++) {
        children[i].className = "";
      }

      if (el) {
        el.className = "on";
      }
    }

    customOverlay.setMap(map);
    placeOverlay.setMap(map);
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
        >
          <ul id="category" ref={categoryRef}>
            <li id="BK9" data-order="0">
              <span className="category_bg bank"></span>
              은행
            </li>
            <li id="CE7" data-order="1">
              <span className="category_bg cafe"></span>
              카페
            </li>
            <li id="CS2" data-order="2">
              <span className="category_bg store"></span>
              편의점
            </li>
          </ul>
        </div>
        {ToastContainer}
      </div>
    </div>
  );
};
export default AccommodationMap;
