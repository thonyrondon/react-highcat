import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);
  const preConfirm = () => {
    Swal.fire({
      icon: "question",
      title: "¿Estas seguro de borrar todo?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      } else if (result.isDenied) {
        Swal.fire({
          icon: "info",
          text: "No se borró nada 😊",
        });
      }
    });
  };
  return (
    <div>
      <h1>Resumen de articulos seleccionados 🛒</h1>
      <div>
        {cart.map((compra) => (
          <div
            key={compra.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "2rem",
            }}
          >
            <img src={compra.img} alt={compra.name} style={{ width: "9rem" }} />
            <span>{compra.name}</span>
            <span>${compra.price},00</span>
            <span>cantidad: {compra.quantity}</span>
            <span>precio final: ${compra.quantity * compra.price},00</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <span>Total a pagar: ${total()},00</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={preConfirm}>
          Vaciar carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
