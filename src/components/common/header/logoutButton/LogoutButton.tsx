import { MdLogout } from "react-icons/md";
import "../cartButton/cartbutton.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalLayout, ModalPortal } from "../..";

const LogoutButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const modalProps = {
    title: "로그아웃",
    content: "로그아웃 하시겠습니까?",
    buttons: [
      {
        text: "확인",
        size: "small",
        colorName: "coral500",
        onClick: () => {
          console.log("확인");
          localStorage.removeItem("accessToken");
          navigate("/");
          setModalVisible(false);
        },
      },
      {
        text: "취소",
        size: "small",
        colorName: "coral200",
        onClick: () => {
          console.log("취소");
          setModalVisible(false);
        },
      },
    ],
  };

  const logoutHandler = () => {
    setModalVisible(true);
  };

  return (
    <>
      <button className="header__cart-button" onClick={logoutHandler}>
        <MdLogout className="cart-button__icon" />
      </button>
      {modalVisible && (
        <ModalPortal>
          <ModalLayout
            {...modalProps}
            isVisible={modalVisible}
            setIsVisible={setModalVisible}
          />
        </ModalPortal>
      )}
    </>
  );
};

export default LogoutButton;
