import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const BACKEND_BASE = process.env.REACT_APP_BACKEND_URL || '';
  const isLocal = typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost';
  const withHost = (src) => {
    if (!src) return src;
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    if (src.startsWith('/images/')) {
      // In production, frontend and backend are on same domain, so use relative URLs
      // Only use full URL for localhost development
      if (isLocal && BACKEND_BASE) return `${BACKEND_BASE}${src}`;
      return src; // Use relative URL in production
    }
    return src;
  };

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.filter(product => cartItems[product.id] > 0).map(product => (
        <div className="cartitems-format" key={product.id}>
          <img src={withHost(product.image)} alt={product.name} className="cartitems-product-img" />
          <p>{product.name}</p>
          <p>${product.new_price}</p>
          <div className="cartitems-quantity">
            <button onClick={() => removeFromCart(product.id)}>-</button>
            <span>{cartItems[product.id]}</span>
            <button onClick={() => addToCart(product.id)}>+</button>
          </div>
          <p>${product.new_price * cartItems[product.id]}</p>
          <button className="cartitems-remove-btn" onClick={() => removeFromCart(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;