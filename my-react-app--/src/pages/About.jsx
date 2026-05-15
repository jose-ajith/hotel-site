
export default function About() {
  return (
    <div className="homebg"
      style={{
        backgroundImage: "linear-gradient(rgba(8, 7, 7, 0.29)),url('/images/home.webp')",
        backgroundSize: "cover",
        minHeight:"100vh"
      }}
    >
    
    <div className="pages">
      <div className="homes">
      <h1><u>Our Story</u></h1><br/>
      <div className="story">
      <p>In 1984, a young chef named Daniel Mercer and his wife Elena opened a tiny neighborhood restaurant called Harbor & Pine in a renovated corner building near the city’s old train district. At the time, the area was mostly warehouses and small repair shops, and many people thought opening a restaurant there was a bad idea.</p>
      <p>The original restaurant had only 12 tables, mismatched chairs from flea markets, and a handwritten menu that changed every week depending on what local farmers brought in. Daniel believed food should feel personal, not formal, and Elena focused on making every guest feel like they were visiting family.</p>
      <p>What made Harbor & Pine different in the 1980s was its unusual mix of modern presentation and comforting recipes. While many restaurants focused on heavy classic dishes, they served lighter seasonal meals, homemade bread, wood-fired vegetables, and fresh seafood with simple flavors. Word slowly spread through the city.</p>
      <p>Today, Harbor & Pine is considered one of the city’s most respected modern restaurants. Even after more than 40 years, it is still known for combining innovation with hospitality. Longtime customers still come for the dishes they loved decades ago, while new visitors discover contemporary menus inspired by the restaurant’s history.</p>
      <p>Above the kitchen entrance, a small framed note from 1984 still hangs:<br /><br />“Serve people something worth remembering.”</p>
      <div className="img-abt">
        <img src="images/welcome.webp" alt="welcome" style={{width:"250px"}} />
        <img src="images/abb.webp" alt="about" style={
      {width:"250px"}
        }/>
        <img src="images/always.webp" alt="always" style={{width:"250px"}} />
      </div>
      <p className="abt-p"><br />We are there for you,If not for you we would never exist in the first place</p>
      </div>
      </div>
    </div>
    </div>
  );
}