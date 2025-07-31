

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CatalogProduct from "./components/CatalogProduct";
import Cart from "./components/Cart";
import About from "./components/About";





function App() {
  return (

    <Router> 
      <NavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<CatalogProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


