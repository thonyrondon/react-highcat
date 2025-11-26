import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div>
      <h1>Tu carrito esta sin productos! 🥲</h1>
      <h3> Te invitamos a seguir viendo nuestros productos</h3>
      <Link className="btn btn-dark" to="/todos">
        Ir a todas las categorias
      </Link>
    </div>
  );
};

export default EmptyCart;
