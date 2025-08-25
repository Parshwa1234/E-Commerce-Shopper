import Item from '../Item/Item';
import './Popular.css';
import { useState,useEffect } from 'react';
const Popular = () => {
  const [popularProducts,setPopularProducts]=useState([]);
  useEffect(()=>{
      fetch('https://e-commerce-shopper-shi5.onrender.com/popularinwomen')
      .then((response)=>response.json())
      .then((data)=>setPopularProducts(data));
  },[])
  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className='popular-item'>
        {
          popularProducts.map((item, i) => (
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
    </div>
  )
}

export default Popular