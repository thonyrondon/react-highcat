import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const { cart, addItem, itemQuantity } = useContext(CartContext);
  const [compra, setCompra] = useState(false);
  console.log(cart);

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`);
    setCompra(true);
    addItem(detalle, cantidad);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste  ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const stockActualizado = detalle.stock - itemQuantity(detalle.id);

  return (
    <div className="deta">
      <h1>Detalle de:</h1>
      <h2>{detalle.name}</h2>
      <img className="img-deta" src={detalle.img} alt={detalle.name} />
      <p>{detalle.description}</p>
      <p>${detalle.price},00</p>
      <p>STOCK DISPONIBLE: {stockActualizado}</p>
      {compra ? (
        <Link className="btn btn-dark" to="/cart">
          Terminar compra
        </Link>
      ) : (
        <ItemCount stock={stockActualizado} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
