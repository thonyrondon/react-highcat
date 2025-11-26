import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../service/firebase";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(false);
  const [invalid, setInvalid] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    //referencia de un documento
    const docRef = doc(db, "articulos", id);
    //traer el documento
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [id]);

  // useEffect(() => {
  //   setCargando(true);
  //   getOneArt(id)
  //     .then((res) => setDetalle(res))
  //     .catch((error) => console.log(error))
  //     .finally(() => setCargando(false));
  // }, [id]);

  if (invalid) {
    return (
      <div>
        <h1> El producto no existe! 😱</h1>
        <Link className="btn btn-dark" to="/todos">
          Volver a todas las categorias
        </Link>
      </div>
    );
  }

  return (
    <>
      {cargando ? <Loader /> : <ItemDetail detalle={detalle} />}
      {/* <ItemDetail detalle={detalle} /> */}
    </>
  );
};

export default ItemDetailContainer;
