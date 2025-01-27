import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
