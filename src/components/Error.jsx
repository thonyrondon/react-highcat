import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Error: No se encontro la ruta que estas buscando 🥲</h1>
      <Link className="btn btn-info" to="/">
        Volver a home
      </Link>
    </div>
  );
};

export default Error;
