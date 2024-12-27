import React, { useState } from "react";
import "./FilterBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FilterBox = () => {
  const [products, setProducts] = useState(undefined);


  async function getFilterProduct(category_id) {
   
    try {
      const response = await fetch(
        `api/Product/getProductByCategoryId/${category_id}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {}
  
  }

  const getStart = () => {
    return (
      <>
        <div className="product-stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="filterBox">
        <h1 className="filter_h1">FILTER BY CATEGOTY</h1>
        <div class="container">
          <button className="ct-item" onClick={()=>{getFilterProduct(1)}}>Laptop</button>
          <button className="ct-item" onClick={()=>{getFilterProduct(2)}}>Phone</button>
          <button className="ct-item" onClick={()=>{getFilterProduct(3)}}>TV</button>
          <button className="ct-item" onClick={()=>{getFilterProduct(4)}}>Camera</button>
          <button className="ct-item" onClick={""}>Other</button>
        </div>

        {products !== undefined && (
          <>
            <div className="filterProductList">
              {products.map((product) => (
                <div className="center">
                  <div className="article-card">
                    <div className="content">
                      <div className="date">{product.price} $</div>
                      <div className="title">{product.name} </div>
                      <div className="title"> {getStart()} </div>

                      <div className="title">
                        <button className="button" onClick={() => {}}>addCart</button>{" "}
                        <button className="button" onClick={() => {}}>View product</button>{" "}
                      </div>
                    </div>
                    <img src={product.icon} alt="article-cover" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FilterBox;
