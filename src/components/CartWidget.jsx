import { FaShoppingCart } from "react-icons/fa";
import "../css/CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className="cart-count">3</span>
      <FaShoppingCart size={40} color="#fff" />
    </div>
  );
};

export default CartWidget;
