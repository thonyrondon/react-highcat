import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { leerArticulos } from "../mock/AsyncService";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    leerArticulos()
      .then((res) => {
        if (type) {
          setData(res.filter((art) => art.category === type));
        } else {
          setData(res);
        }
      })
      .catch((error) => console.log(error));
  }, [type]);
  return <ItemList data={data} />;
};

export default ItemListContainer;
