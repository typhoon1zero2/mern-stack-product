import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "../Headers/icons/menu.svg";
import Close from "../Headers/icons/close.svg";
import Cart from "../Headers/icons/cart.svg";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { IoMdCreate } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
 


function Header() {
  const value = useContext(GlobalState);
  return (
    <header>
      <div className="menu">
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/"><em>ty</em>phoon Store</Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/login"> <FiLogIn style={{ marginRight: "5px" }} />
          Login  <IoMdCreate style={{ marginRight: "5px" }} />
          Signup</Link>
        </li>
        <li>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>0</span>
        <Link to="/cart"> <img src={Cart} alt="" width="30" /></Link>
      </div>
    </header>
  );
}

export default Header;
