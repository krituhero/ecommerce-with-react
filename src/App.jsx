import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Index.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
