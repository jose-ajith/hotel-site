
export default function Booking() {
  return (
    <div className="homebg"
      style={{
        backgroundImage: "url('/images/home.webp')",
        backgroundSize: "cover",
        minHeight:"100vh"
      }}>


      <div className="pages">
      <div className="booking-container">
        <h1>Reserve Your Table</h1>

        <form className="booking-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="number" placeholder="Phone Number" />

          <input type="date" />

          <input type="time" />

          <select>
            <option>Number of Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5+ Guests</option>
          </select>

          <button type="submit">Book Now</button>
        </form>
      </div>
      </div>
      </div>
    
  );
}