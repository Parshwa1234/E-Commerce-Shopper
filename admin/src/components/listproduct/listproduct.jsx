import React from 'react'
import './listproduct.css'
import { useState,useEffect } from 'react';
import cross_icon from '../../assets/cross_icon.png';
const listproduct = () => {
  const [allproducts,setAllProducts]=useState([]);
  const API_BASE = typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost' ? 'http://localhost:4000' : '';
  const BACKEND_BASE = import.meta.env.VITE_BACKEND_URL || '';
  const isLocal = typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost';
  const withHost = (src) => {
    if (!src) return src;
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    if (src.startsWith('/images/')) {
      if (isLocal) return `http://localhost:4000${src}`;
      return `${BACKEND_BASE}${src}`;
    }
    return src;
  };
  const fetchInfo=async()=>{
    await fetch(`${API_BASE}/allproducts`).then((res)=>res.json()).then((data)=>{
      setAllProducts(data)
    })
  }
  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product=async(id)=>{
    await fetch(`${API_BASE}/removeproduct`, {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id:id })
    })
    await fetchInfo();
  }
  return (
    <div className="list-product">
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
           <p>Products</p>
           <p>Title</p>
           <p>Old Price</p>
           <p>New Price</p>
           <p>Category</p>
           <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr/>
          {allproducts.map((product,index)=>{
            return(
              <>
              <div className="listproduct-format-main listproduct-format" key={index}>
                <img src={withHost(product.image)} className="listproduct-product-icon" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>remove_product(product.id)} className="listproduct-remove-icon" src={cross_icon}/>
              </div>
              <hr/>
              </>
            )
          })}
        </div>
    </div>
  )
}

export default listproduct