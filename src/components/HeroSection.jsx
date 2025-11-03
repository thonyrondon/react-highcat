import Swal from "sweetalert2";
import "../css/HeroSection.css";

const HeroSection = ({ children }) => {
  const handleClick = () => {
    Swal.fire({
      title: "¡HOLAA!",
      text: "BIENVENIDOS A MI TIENDA ONLINE: HIGH CAT 🐈‍⬛",
      confirmButtonText: "EXCELENTE",
    });
  };

  return (
    <div>
      <button className="bienvenida" onClick={handleClick}>
        {children}
      </button>
      <img src="../img/banner.png" alt="Gato Presentación" />
    </div>
  );
};

export default HeroSection;
