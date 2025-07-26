import star_dull_icon from '../Assets/star_dull_icon.png';
import star_icon from '../Assets/star_icon.png';
import './ProductDisplay.css';
const ProductDisplay = (props) => {
    const { product } = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className='productdisplay-img-list'>
            <img src={product.image} alt="product image not found" />
            <img src={product.image} alt="product image not found" />
            <img src={product.image} alt="product image not found" />
            <img src={product.image} alt="product image not found" />
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={product.image} alt="product image not found" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} alt="star icon not found" />
            <img src={star_icon} alt="star icon not found" />
            <img src={star_icon} alt="star icon not found" />
            <img src={star_icon} alt="star icon not found" />
            <img src={star_dull_icon} alt="star dull icon not found" />
        </div>
        <div className='productdisplay-right-prices'> 
            <div className='productdisplay-right-price-old'>
                ${product.old_price}
            </div>
            <div className='productdisplay-right-price-new'>
                ${product.new_price}
            </div>
        </div>
        <div className='productdisplay-right-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta error at eum repellat unde id necessitatibus laudantium explicabo nostrum tenetur magni et nesciunt deleniti placeat ex non dolore cum, eligendi quia quos, quas veniam optio repellendus? Numquam porro voluptates iure!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category: </span>Women, Tshirt, Crop-Top</p>
          <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div> 
      </div>
    </div>
  )
}

export default ProductDisplay
