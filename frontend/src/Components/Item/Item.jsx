import { Link } from 'react-router-dom';
import './Item.css';
const Item = (props) => {
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
