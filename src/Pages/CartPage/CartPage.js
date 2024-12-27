import React from "react";
import Cart from "../../Elements/Cart/Cart";

import BottomPages from "../../Elements/BottomPages/BottomPages";
import CartTitle from "../../Component/CartTitle/CartTitle";
import Menu from "../../Elements/Menu/Menu";

const CartPage = () => {
  return (
    <>
      <Menu />
      <CartTitle />
      <Cart />
      <BottomPages />
    </>
  );
};

export default CartPage;
