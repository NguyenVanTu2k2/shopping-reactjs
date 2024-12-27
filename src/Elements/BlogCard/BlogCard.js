import React, { useState,useEffect } from "react";
import "../BlogCard/BlogCard.css";
import Img from"../../assets/images/totoro.jpg"

const BlogCart = () => {
  const id = "1";
  const [productBestSale, setProductBestSale] = useState("null");
  async function getAllProduct() {
 
      if(productBestSale === undefined){
        try {
          const response = await fetch(
            `/api/Product/getProductById/${id}`
          );
          const product = await response.json();
          if(product !== null) 
          { setProductBestSale(product)}
         
        } catch (error) {}
      }
   
  }

  useEffect(() => {
    getAllProduct();
  });
  return (
<>
      <article className="cta">
        <img
          src={Img}
          alt="Điện thoại"
        />
        <div className="cta__text-column">
          <h2>Iphone promax</h2>
          <p>
           
          </p>
          10000$
          <p>
            
          </p>
          <div href="#">
            Read all about it
          </div>
        </div>
      </article>
    </>
  );
};
export default BlogCart;
