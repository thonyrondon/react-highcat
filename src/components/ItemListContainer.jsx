import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../service/firebase";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoader(true);
    const productsCollection = type
      ? query(collection(db, "articulos"), where("category", "==", type))
      : collection(db, "articulos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // Aquí podrías hacer algo con `list`, como setProducts(list)
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, [type]);

  // useEffect(() => {
  //   setLoader(true);
  //   leerArticulos()
  //     .then((res) => {
  //       if (type) {
  //         setData(res.filter((art) => art.category === type));
  //       } else {
  //         setData(res);
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoader(false));
  // }, [type]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-success">
            {type && (
              <span style={{ textTransform: "capitalize" }}>{type}</span>
            )}
          </h1>
          <ItemList data={data} />;
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
