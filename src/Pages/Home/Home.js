import React from "react";

import Menu from "../../Elements/Menu/Menu";
import BlogBox from "../../Elements/BlogBox/BlogBox";
import BottomPages from "../../Elements/BottomPages/BottomPages";
import SignUp from "../../Elements/SignUp/SignUp";
import SignIn from "../../Elements/SignIn/SignIn";
import ProductsListBox from "../../Elements/ProductsListBox/ProductsLisBox";
import ShowNotification from "../../Notifications/ShowNotification/ShowNotification";
import Navbar from "../../Elements/Navbar/Navbar";
import SaleBox from "../../Component/SaleBox/SaleBox";

const Home = () => {
  return (
    <>
      <div className="scroll menu"></div>
      <Menu />
      <Navbar />
      <SignUp />
      <SignIn />
      <h2>Top search</h2>
      <SaleBox/>
      <h2>Last Update</h2>
      <BlogBox />||
    
      <h2> Store</h2>
      <ProductsListBox />

      <BottomPages />
      <ShowNotification />
    </>
  );
};

export default Home;
