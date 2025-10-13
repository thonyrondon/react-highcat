import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer>
        <h1>PRESIONA PARA SALUDARTE!</h1>
      </ItemListContainer>
      <img src="../banner.png" alt="Gato Presentación" />
    </>
  );
}

export default App;
