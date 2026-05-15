// App.jsx

import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import "./App.css";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";



export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}


