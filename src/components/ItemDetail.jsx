import "../css/ItemDetail.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  return (
    <div className="deta">
      <h1>Detalle de:</h1>
      <h2>{detalle.name}</h2>
      <img className="img-deta" src={detalle.img} alt={detalle.name} />
      <p>{detalle.description}</p>
      <p>${detalle.price},00</p>
      <p>STOCK DISPONIBLE: {detalle.stock}</p>
      <ItemCount stock={detalle.stock} />
    </div>
  );
};

export default ItemDetail;
