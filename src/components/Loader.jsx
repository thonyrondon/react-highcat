import { FaCat } from "react-icons/fa";

const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(2, 2, 99)",
        color: "white",
      }}
    >
      <FaCat className="cat-loader" size={80} />
      <p style={{ marginTop: "1rem", fontSize: "1.5rem", fontStyle: "italic" }}>
        Cargando
      </p>
    </div>
  );
};

export default Loader;
