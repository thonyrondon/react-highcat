import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const { cart, addItem } = useContext(CartContext);
  const [compra, setCompra] = useState(false);
  console.log(cart);

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} al carrito`);
    setCompra(true);
    addItem(detalle, cantidad);
  };
  return (
    <div className="deta">
      <h1>Detalle de:</h1>
      <h2>{detalle.name}</h2>
      <img className="img-deta" src={detalle.img} alt={detalle.name} />
      <p>{detalle.description}</p>
      <p>${detalle.price},00</p>
      <p>STOCK DISPONIBLE: {detalle.stock}</p>
      {compra ? (
        <Link className="btn btn-dark" to="/cart">
          Terminar compra
        </Link>
      ) : (
        <ItemCount stock={detalle.stock} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
