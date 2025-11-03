import "../css/ItemList.css";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div className="cont-card">
      {data.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ItemList;
