import Swal from "sweetalert2";
import "../css/HeroSection.css";

const HeroSection = ({ children }) => {
  const handleClick = () => {
    Swal.fire({
      title: "FUNDACIÓN:",
      text: "La tienda virtual High Cat fue creada por Monica Torrelles el 07 de julio de 2024 con el objetivo de mejorar la vida de los felinos mediante productos de alta calidad. Inspirada por su amor por los gatos, Monica fundó este espacio para ofrecer soluciones prácticas y saludables para el bienestar de las mascotas.",
      confirmButtonText: "BIENVENIDOS",
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
