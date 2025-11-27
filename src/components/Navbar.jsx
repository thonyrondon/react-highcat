import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="contenedor">
      <div className="logo-contenedor">
        <NavLink to="/todos">
          <img src="../img/silue.png" alt="logo" className="lo" />
        </NavLink>
        <h1 className="title">HIGH CAT</h1>
      </div>

      <NavLink className="anav" to="/todos">
        Todas las categorias
      </NavLink>
      <NavLink className="anav" to="/category/alimentos">
        Alimentos
      </NavLink>
      <NavLink className="anav" to="/category/ropa">
        Ropa
      </NavLink>
      <NavLink className="anav" to="/category/arena">
        Arena
      </NavLink>
      <NavLink className="anav" to="/cart">
        <CartWidget />
      </NavLink>
    </nav>
  );
};
export default Navbar;
