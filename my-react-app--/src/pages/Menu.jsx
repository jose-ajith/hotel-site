export default function Menu() {
  return (
    <div className="homebg"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/home.webp)`,
        backgroundSize: "cover",
        minHeight:"100vh"
      }}>

    <div className="pages">
      <div className="homes">
      <h1><u>Our Menu Card</u></h1></div>
      <div className="menu">
      <img src={`${import.meta.env.BASE_URL}images/menu-items.webp`} alt="menu card" />
      </div>
      </div>
    </div>
  );
}