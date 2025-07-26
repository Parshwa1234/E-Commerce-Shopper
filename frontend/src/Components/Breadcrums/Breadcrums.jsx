import arrow_icon from '../Assets/breadcrum_arrow.png';
import './Breadcrums.css';
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon}></img> Shop <img src={arrow_icon}></img> {product.category} <img src={arrow_icon}></img> {product.name}
    </div>
  )
}

export default Breadcrums
