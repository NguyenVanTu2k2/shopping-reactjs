import React from "react";
import "../ProductsListBox/ProductsListBox.css"
import ProductsList from "../ProductList/ProductsList";


const ProductsListBox = ()=>{

    return(<>
    <div className="ProductsListBox">
    <ProductsList/>
    <button className="button smbth" onClick={()=>{}}> see more</button>
    </div>
    </>);
};

export default ProductsListBox;
