import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Error from "./components/Error.jsx";
import Fav from "./components/Fav.jsx";
import Checkout from "./components/Checkout.jsx";

import Product from "./components/Product.jsx";

import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/Allproducts" element={<Product />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/fav" element={<Fav />} />




        <Route path="/cart" element={<Cart />} />

        {/* For error handling */}
        <Route path="*" element={<Error />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
