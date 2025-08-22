import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

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
          <img src={product.image} alt={product.name} className="cartitems-product-img" />
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