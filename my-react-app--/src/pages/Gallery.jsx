export default function Gallery() {
  return (
     <div className="homebg"
      style={{
        backgroundImage: "url('/images/home.webp')",
        backgroundSize: "cover",
        minHeight:"100vh"
      }}>

    <div className="pages">
      <div className="homes">
      <h1><u>Gallery</u></h1>
      <div className="gallery">
      <img src="/images/chef.webp" alt="gallery" />
      <p> Our chefs do their best</p>
      </div>
      <div className="gallery1">
        <p>One of our speciality</p>
        <img src="/images/beef.webp" alt="gallery" />
      </div>
      <div className="gallery2">
        <img src="/images/boul.webp" alt="gallery" />
        <p>Something Soothing to your tastebuds</p>
      </div>
      </div>
    </div>
    </div>
  );
}