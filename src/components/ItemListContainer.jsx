import Swal from "sweetalert2";
import "../css/ItemListContainer.css";

const ItemListContainer = ({ children }) => {
  const handleClick = () => {
    Swal.fire({
      title: "¡HOLAA!",
      text: "BIENVENIDOS A MI TIENDA ONLINE: HIGH CAT 🐈‍⬛",
      confirmButtonText: "EXCELENTE",
    });
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default ItemListContainer;
