import { Link } from "react-router-dom";
import logo from "../assets/logo.webp"

export default function Home() {
  return (
    <>
    <div className="homebg"
      style={{
        backgroundImage: "url('/images/home.webp')",
        backgroundSize: "cover",
        minHeight:"100vh"
      }}
    >
      <div className="pages">
        <div className="home">
          
          <h1>Welcome to<span style={{ color: 'yellow' }}> <br />Opus Cutlery</span><img src={logo} alt="logo" className="logo-img" /></h1>
          <br />
          <p>Experience delicious Italian food,<br /> fresh ingredients,<br />
            and a warm atmosphere made for family and friends.</p><br /><br />
        </div>
        <Link to="/menu" className='menu-link'>
          <button className="menu-btn">Explore Menu</button>
        </Link><br />
        <div className='home-content'>
          <div className="cards">
          <div className='card'>
            <h2>Fresh Ingredients</h2>
            <p>
              We use fresh vegetables, handmade dough,
              and authentic Italian spices every day.
            </p>
          </div>
          <div className='card'>
            <h2>Best Chefs</h2>
            <p>
              Our chefs prepare every dish with passion,
              creativity, and traditional recipes.
            </p>
          </div>

          <div className='card'>
            <h2>Fast Delivery</h2>
            <p>
              Enjoy hot and tasty meals delivered quickly
              to your doorstep.
            </p>
          </div>
        </div>
      </div>
      </div>
        <div className="contact">
      <h2>Contact📞</h2>
    <p>Opus Cutlery<br /></p>
      <p>📞 Phone:+91 (000) 000-8472</p>
      <p>📧 Email:contact@opuscutlery.com</p>
     </div>
     </div>
    </>
  );
}