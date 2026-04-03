import { Link } from 'react-router-dom';
import './Item.css';
const Item = (props) => {
  const isLocal = typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost';
  const withHost = (src) => {
    if (!src) return src;
    if (isLocal && src.startsWith('/images/')) return `http://localhost:4000${src}`;
    return src;
  };
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src ={withHost(props.image)} alt="item image not found" /></Link>
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
            ${props.new_price}
        </div>
        <div className='item-price-old'>
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
