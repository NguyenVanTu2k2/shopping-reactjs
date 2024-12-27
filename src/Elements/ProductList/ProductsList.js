import React, { useEffect, useState } from "react";
import "./ProductsList.css";
import { useDispatch } from "react-redux";
import { setNotificationAddToCard } from "../../Store/NotificationSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const ProductsList = () => {
  const cookies = new Cookies();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [products, setProducts] = useState(undefined);

  async function getAllProduct() {
    if (products === undefined) {
      try {
        const response = await fetch("api/Product/getAll");
        const product = await response.json();
        setProducts(product);
      } catch (error) {}
    }
  }
  
  async function addToCart(product_id) {
    if(cookies.get('session_id') === undefined) {
      alert("Sign in")
    }else{
      try {
        const response = await fetch(`api/cart/addCartItem/${cookies.get('session_id')}/${product_id}/${1}`);
        const data = await response.json();
        console.log(data);
      } catch (error) {}
      dispatch(setNotificationAddToCard());
    }
    
  }

  useEffect(() => {
    getAllProduct();
  });

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
      {products === undefined && <> loading... </>}
      {products !== undefined && (
        <>
          <div className="box">
            {products.map((product) => (
              <div className="center" key={product.id}>
                <div className="article-card">
                  <div className="content">
                    <div className="date">{product.price} $</div>
                    <div className="title">{product.name} </div>
                    <div className="title">{getStart()} </div>

                    <div className="title">
                      <button className="button"
                        onClick={() => {
                          addToCart(product.id);
                        
                          
                        }}
                      >
                        Add to cart
                      </button>{" "}
                      <button className="button"
                        onClick={() => {
                          cookies.set("product_id", product.id, { path: "/" });
                          navigator("/ProductPage");
                        }}
                      >
                        View
                      </button>{" "}
                    </div>
                  </div>
                  <img src={product.icon} alt="article-cover" />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductsList;
