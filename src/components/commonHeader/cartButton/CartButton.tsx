import { FiShoppingCart } from "react-icons/fi";
import "./cartbutton.scss";
import { useState /*, useEffect */ } from "react";
// import axios from "axios";

const CartButton = () => {
  const [cartItems /*, setCartItems */] = useState<string[]>([]);

  // useEffect(() => {
  //   axios
  //     .get("/...")
  //     .then((response) => setCartItems(response.data))
  //     .catch((error) => console.error("장바구니 데이터 가져오기 에러 발생: ", error));
  // }, [cartItems]);

  return (
    <button className="header__cart-button">
      <FiShoppingCart className="cart-button__icon" />
      <div className="cart-button__amount">{cartItems.length}</div>
    </button>
  );
};

export default CartButton;
