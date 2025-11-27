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
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, [type]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <ItemList data={data} />;
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
