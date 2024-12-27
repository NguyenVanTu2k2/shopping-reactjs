import React from "react";
import "../Menu2/Menu2.css";
import { useNavigate } from "react-router-dom";




const Menu2 = ()=>{

    const navigate = useNavigate();

    return(<>

    <div className="banner animated tada">
    <div className=" big-text animated tada">90% OFF</div>
    <div>THE ENTIRE STORE</div>
    <div className="home-store-title" onClick={()=>{navigate("/Home")}}>Go To store</div>
    </div>
    </>);
};
export default Menu2;