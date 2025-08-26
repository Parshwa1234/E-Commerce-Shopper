import React from 'react'
import './addproduct.css'
import upload_area from '../../assets/upload_area.svg'
import { useState } from 'react'
const addproduct = () => {

    const [image,setImage]=useState(false);
    const [productDetails,setProductDetails]=useState({
        name:'',
        image:'',
        category:'women',
        new_price:"",
        old_price:"",
    })

    const Add_Product=async()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;

        let formData=new FormData();
        formData.append('product',image);
        await fetch('/upload',{
            method:'POST',
            headers:{
                Accept:'/application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{
            responseData=data;
        })
        if(responseData.success)
        {
            product.image=responseData.image_url;
            console.log(product);
            await fetch('/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added Successfully"):alert("Failed to Add Product");
            })
        }
    }
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value })
    }
    const imageHandler=(e)=>{
       setImage(e.target.files[0]);
    }
  return (
    <div className="add-product">
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input type="text" value={productDetails.name} onChange={changeHandler} name="name" placeholder='Type here'/>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" placeholder="Type here"/>
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" value={productDetails.new_price} onChange={changeHandler} name="new_price" placeholder="Type here"/>
                </div>
            </div>
                <div className="addproduct-itemfield">
                    <p>
                        Product Category
                    </p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector">
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="kid">Kid</option>
                    </select>
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumnail-img" alt=""/>
                    </label>
                    <input onChange={imageHandler} type="file" name="image" id='file-input' hidden/>
                </div>
                <button onClick={Add_Product} className="addproduct-btn">ADD</button>
        </div>
    </div>
  )
}

export default addproduct