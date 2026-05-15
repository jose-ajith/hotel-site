import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"

export default function Nav() {
  return (
    <>
    <nav className="navbar">
      <h1 className="logo">Opus Cutlery<img src={logo} alt="logo" className="logo1-img" /></h1>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/booking">Booking</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/menu">Menu</Link>
      </div>
    </nav>
    </>
  );
}