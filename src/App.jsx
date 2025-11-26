import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
import Error from "./components/Error";
import HeroSection from "./components/HeroSection";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <HeroSection>
                <h1>PRESIONA PARA SALUDARTE!</h1>
              </HeroSection>
            }
          />
          <Route path="/todos" element={<ItemListContainer />} />
          <Route path="/category/:type" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
