import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "../Headers/icons/menu.svg";
import Close from "../Headers/icons/close.svg";
import Cart from "../Headers/icons/cart.svg";
function Header() {
  const value = useContext(GlobalState);
  return (
    <header>
      <div className="menu">
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo">
        <img src={Close} alt="" width="30" className="menu" />
      </div>
      <div className="cart-icon">
        <img src={Cart} alt="" width="30" />
      </div>
    </header>
  );
}

export default Header;
