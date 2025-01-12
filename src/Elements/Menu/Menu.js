import React, { useEffect, useState } from "react";
import ".././Menu/Menu.css";
import SignUpBth from "../../Session/SignUpBthSession";
import SignInBth from "../../Session/SignInBthSession";
import { useNavigate } from "react-router-dom";
import SearchBox from "../SearchBox/searchBox";
import cartImg from "../../assets/images/cart.png";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setNotificationSignOut } from "../../StoreTemp/NotificationSlice";
import logo from "../../assets/images/taoanhdep_avatar_logo_iCjX0b4lFT.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import user_img from "../../assets/images/user2.jpg"

const Menu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [cart, setCart] = useState();
  const [profile, setProfile] = useState(false);
  

  async function getCartBySession() {
    if (cookies.get("session_id") !== undefined) {
      if (cart === undefined) {
        try {
          const response = await fetch(
            // `api/cart/getCartBySessionId/${cookie.get('session_id')}`,
            `api/cart/getCartBySessionId/${cookies.get('session_id')}`
          );
          const data = await response.json();
          setCart(data);
        
        } catch (error) {}
      }
    }
    
  }

  const User = () => {

    return(
      <>
     
      {profile === true &&<>
      <div className="profile">
      <button>profile</button>
      <button onClick={() => {
                  cookies.remove("session_id", { path: "/" });
                  cookies.remove("username", { path: "/" });
                  dispatch(setNotificationSignOut());
                  navigate("/Home");
                }}>Sign out</button>
      </div>
      </>}
      </>
    );
  }


  useEffect(()=>{
    getCartBySession();
  })

  return (
    <>
      <nav className="Menu">
        <div className="Logo" onClick={()=>{
          navigate("/Home")
        }}><img src={logo} alt="" height="50px" width="50px"/>NVT Shopping</div>
        <ul className="list">
          <li className="li">Ranks</li>
          <li className="li">News</li>
          <li className="li">Contact</li>
          <li className="li" onClick={()=>{
            navigate("/FilterPage");
          }}>Category</li>
          <li>
            <SearchBox />
          </li>

          {cookies.get("session_id") === undefined && (
            <>


              <li
                className="li"
                onClick={() => {
                  SignUpBth.setValue(false);
                  SignInBth.setValue(true);

                  navigate("/Home");
                }}
              >
                Sign in
              </li>
            </>
          )}

          {cookies.get("session_id") !== undefined && (
            <>
            
                {/* <li
                className="li userName"
                onClick={() => {
                  cookies.remove("session_id", { path: "/" });
                  cookies.remove("username", { path: "/" });
                  dispatch(setNotificationSignOut());
                  navigate("/Home");
                }}
              >
                Sign out
              </li> */}
              <li className="user-icon" onClick={()=>{if(profile === true){setProfile(false)}else{
                setProfile(true);
              }}}> <img className="userImg" src={user_img} alt=""/></li>
              {User()}
            </>
          )}

          <li
            className="li-cart"
            onClick={() => {
              navigate("/CartPage");
              
            }}
          >
            <img className="cartImg" src={cartImg} alt="Cart" />{" "} 
          </li>
          <li ><div className="alert-menu" ><FontAwesomeIcon icon={faBell} /></div></li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
