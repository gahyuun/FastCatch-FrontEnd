import { MdLogout } from "react-icons/md";
import "../cartButton/cartbutton.scss";

const LogoutButton = () => {
  const logoutHandler = () => {};

  return (
    <button className="header__cart-button" onClick={logoutHandler}>
      <MdLogout className="cart-button__icon" />
    </button>
  );
};

export default LogoutButton;
