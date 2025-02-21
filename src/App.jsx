import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        <Route path="/cart" element={<Cart />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
