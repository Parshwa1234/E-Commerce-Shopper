import { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products by category passed in props.category
  const filteredProducts = all_product.filter(
    (item) => item.category === props.category
  );

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className='shopcategory-indexSort'>
        <p>
          <span>
            Showing {filteredProducts.length} products
          </span>
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {
          filteredProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        }
      </div>
      <div className='shopcategory-loadmore'>
        Explore More Products on Shopper
      </div>
    </div>
  )
};

export default ShopCategory;