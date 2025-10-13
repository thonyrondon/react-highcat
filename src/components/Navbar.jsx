import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="contenedor">
      <img src="../silue.png" alt="logo" className="lo" />
      <a href="">Alimentos</a>
      <a href="">Ropa</a>
      <a href="">Arena</a>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
