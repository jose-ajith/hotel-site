export default function Gallery() {
  return (
     <div className="homebg"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/home.webp)`,
        backgroundSize: "cover",
        minHeight:"100vh"
      }}>

    <div className="pages">
      <div className="homes">
      <h1><u>Gallery</u></h1>
      <div className="gallery">
      <img src={`${import.meta.env.BASE_URL}images/chef.webp`} alt="gallery" />
      <p> Our chefs do their best</p>
      </div>
      <div className="gallery1">
        <p>One of our speciality</p>
        <img src={`${import.meta.env.BASE_URL}images/beef.webp`} alt="gallery" />
      </div>
      <div className="gallery2">
        <img src={`${import.meta.env.BASE_URL}images/boul.webp`} alt="gallery" />
        <p>Something Soothing to your tastebuds</p>
      </div>
      </div>
    </div>
    </div>
  );
}