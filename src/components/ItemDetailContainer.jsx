import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneArt } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getOneArt(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <ItemDetail detalle={detalle} />
    </>
  );
};

export default ItemDetailContainer;
