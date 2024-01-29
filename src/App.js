import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/FooterBk";
import Home from "./pages/Home";
import Menus from "./pages/Menu";
import DetailProduct from "./pages/DetailProduct";
import Promo from "./pages/Promo";
import CartPreview from "./pages/cart/Preview";

export const AppContext = createContext({});

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart((prev) => [...prev, product]);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  useEffect(() => {
    const localCarts = localStorage.getItem("cart");
    if (localCarts) {
      setCart(JSON.parse(localCarts));
    }
  }, []);

  const AppContextValue = {
    cart,
    handleAddToCart,
    totalPrice,
    setTotalPrice,
  };
  return (
    <AppContext.Provider value={AppContextValue}>
      <main className="h-full min-h-screen md:max-w-full">
        <Router>
          <NavbarMenu />
          <div className="container xl:mt-[76px] mt-[50px] w-screen">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/menus" element={<Menus />} />
              <Route path="/menus/:menuId" element={<Menus />} />
              <Route path="/product/:productId" element={<DetailProduct />} />
              <Route path="/news-v1" element={<Promo />} />
              <Route path="/cart/preview" element={<CartPreview />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </main>
    </AppContext.Provider>
  );
}

export default App;
