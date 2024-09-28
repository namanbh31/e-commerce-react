import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import SingleProductPage from "./Pages/SingleProductPage";
import Cart from "./Pages/Cart";
import OrderPlacement from "./Pages/OrderPlacement";
import SuccesfullOrder from "./Pages/SuccessfullOrder";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPlacement />} />
        <Route path="/success" element={<SuccesfullOrder />}/>
      </Routes>
      
    </div>
  );
}

export default App;
