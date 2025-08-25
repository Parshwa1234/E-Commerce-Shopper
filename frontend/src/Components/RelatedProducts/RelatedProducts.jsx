import Item from '../Item/Item';
import './RelatedProducts.css';
import { useState,useEffect } from 'react';
const RelatedProducts = ({category}) => {
  const [new_collection,setNewCollection]=useState([]);
  useEffect(() => {
    if (!category) return; 
    fetch(`http://localhost:4000/relatedproducts?category=${category}`)
      .then((response) => response.json())
      .then((data) => setNewCollection(data))
      .catch((err) => console.error("Error fetching related products:", err));
  }, []);
  return (
    <div className='new-collections'>
      <h1>Related Products</h1>
      <hr/>
      <div className='collections'>
        {
          new_collection.map((item, i) => (
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

export default RelatedProducts