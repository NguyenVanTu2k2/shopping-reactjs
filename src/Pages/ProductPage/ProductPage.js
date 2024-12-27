import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import Menu from "../../Elements/Menu/Menu";
import BottomPages from "../../Elements/BottomPages/BottomPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import { setNotificationAddToCard } from "../../Store/NotificationSlice";
import ShowNotification from "../../Notifications/ShowNotification/ShowNotification";

const ProductPage = () => {
  const cookie = new Cookies();
  const cookies = new Cookies();
  const [product, setProduct] = useState(undefined);
  const dispatch = useDispatch();

  async function getProduct() {
    if(product === undefined){
      try {
        const response = await fetch(
          `api/Product/getProductById/${cookie.get('product_id')}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
  
      }
    }
   
  }

  async function addToCart(product_id) {
    try {
      const response = await fetch(`api/cart/addCartItem/${cookies.get('session_id')}/${product_id}/${1}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  }

  const getStart=()=>{
    return (<>
    <div className="product-stars">
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    </div>
    </>)
  }


  useEffect(() =>{
    if(cookie !== undefined){
      getProduct();
    }
  })

  return (
    <>
      <Menu />
      {product === undefined && <> loading.... </>}
      {product !== undefined && <> 
      
        <div className="prd_body">
        <div className="wrapper">
          <div className="product-img">
            <img src={product.icon} height="420" width="327" alt="product" />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1 className="title1_prdPg">{product.name} </h1>
              <h1 className="title1_prdPg">{getStart()}</h1>

              <div>
                Harvest Vases are a reinterpretation of peeled fruits and
                vegetables as functional objects. The surfaces appear to be
                sliced and pulled aside allowing room for growth.
              </div>
            </div>
            <div className="product-price-btn">
              <div>
                <div className="price">Price: </div>{" "}
                <div className="price">{product.price}</div>$
              </div>
              <button className="button" onClick={()=>{addToCart(product.id);
              dispatch(setNotificationAddToCard());
          
              }}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
      </>}
      <h2>Sản Phẩm tương tự </h2>
      <BottomPages />
      <ShowNotification/>
    </>
  );
};

export default ProductPage;
