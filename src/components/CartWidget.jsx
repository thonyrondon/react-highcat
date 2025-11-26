import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import "../css/CartWidget.css";

const CartWidget = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  console.log(cartQuantity);
  return (
    <div className="cart-widget">
      {cart.length > 0 && <span className="cart-count">{cartQuantity()}</span>}
      <FaShoppingCart size={40} color="#fff" />
    </div>
  );
};

export default CartWidget;
