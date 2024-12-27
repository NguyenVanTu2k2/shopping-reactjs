import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import {  setNotificationRemoveCartItem } from "../../Store/NotificationSlice";
import ShowNotification from "../../Notifications/ShowNotification/ShowNotification";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(undefined);
  const refresh = () => window.location.reload(true)
  const navigate = useNavigate();

  const [totalPrice, setTotalPrice] = useState(undefined);
  const dispatch = useDispatch();


  const cookie = new Cookies();

  async function getCartBySession() {
    if (cookie.get("session_id") !== undefined) {
      if (cart === undefined) {
        try {
          const response = await fetch(
            // `api/cart/getCartBySessionId/${cookie.get('session_id')}`,
            `api/cart/getCartBySessionId/${cookie.get('session_id')}`
          );
          const data = await response.json();
          setCart(data);
        } catch (error) {}
      }
    }
    
  }


  async function deleteCartItem(cart_id) {
    try {
      const response = await fetch(`api/cart/deleteCartItem/${cart_id}`);
      const data = await response.json();
      console.log(data);
   
    } catch (error) {}
  }

 

  async function getTotalPrice() {
    if (cookie.get("session_id") !== undefined) {
      if (cart === undefined) {
        try {
          const response = await fetch(
            // `api/cart/getCartBySessionId/${cookie.get('session_id')}`,
            `api/cart/getTotalPrice/${cookie.get('session_id')}`
          );
          const data = await response.json();
          setTotalPrice(data);
          
        } catch (error) {}
      }
    }
    
  }

  useEffect(() => {
    if (cart === undefined) {
      getCartBySession();
      getTotalPrice();
    }
  });

  window.scrollTo(0, 0);

  return (
    <>
      {cart === undefined && <> Loading.....</>}

      {cart !== undefined && (
        <>
          <div className="Cart">
         
            <div id="CartBox">
              <header id="title"></header>
              <div id="page">
                <table id="cart">
                <div>Have {cart.length} item in your cart</div>
                  <thead>
                    <tr>
                      <th className="first">Photo</th>
                      <th className="second">Qty</th>
                      <th className="third">Product</th>
                      <th className="fourth">Line Total</th>
                      <th className="fifth">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((cart_item) => (
                      <tr className="productitm" key={cart_item.id}>
                        <td>
                          <img src={cart_item.icon} className="thumb" alt="" />
                        </td>
                        <td>
                          <input
                            type="number"
                            min="0"
                            max="99"
                            className="qtyinput"
                            value={cart_item.quantity}
                          />
                        </td>
                        <td> {cart_item.name}  </td>
                        <td>{cart_item.price}</td>
                        <td>
                          <span className="remove" onClick={()=>{
                            deleteCartItem(cart_item.id);
                            dispatch(setNotificationRemoveCartItem());
                            refresh();
                          }}>
                            <FontAwesomeIcon icon={faTrash} />
                          </span>
                        </td>
                      </tr>
                  ))}

                    <tr className="extracosts">
                      <td className="light">Shipping &amp; Tax</td>
                      <td colSpan="2" className="light"></td>
                      <td>$00.00</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr className="totalprice">
                      <td className="light">Total:</td>
                      <td colSpan="2">&nbsp;</td>
                      <td colSpan="2">
                        <span className="thick">${totalPrice}</span>
                      </td>
                    </tr>

                    <tr className="checkoutrow">
                      <td colSpan="5" className="checkout">
                        <button id="submitbtn" onClick={()=>{navigate("/CheckOutPage")}}>Checkout Now!</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
      <ShowNotification/>
    </>
  );
};

export default Cart;
