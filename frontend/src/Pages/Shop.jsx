import Hero from "../Components/Hero/Hero.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import Popular from "../Components/Popular/Popular";
const Shop = () => {
  return (
    <div className="shop">
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
