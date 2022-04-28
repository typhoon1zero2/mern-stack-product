import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "../Headers/icons/menu.svg";
import Close from "../Headers/icons/close.svg";
import Cart from "../Headers/icons/cart.svg";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
import { IoMdCreate } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { logout } from "../../components/MainPages/utilities/users-service";

function Header({ user, setUser, toggle, setToggle, showLogin, setShowLogin }) {
  const value = useContext(GlobalState);
  function handLogout() {
    logout();
    setUser = null;
    setToggle(!toggle);
  }

  const adminRouter = () =>{
    return(
        <>
            <li><Link to="/create_product">Create Product</Link></li>
            <li><Link to="/category">Categories</Link></li>
        </>
    )
}


  return (
    <header>
      {user ? (
        <>
          <span>{`Welcome, ${user.name}!`}</span>
          <button className="logoutButton" onClick={handLogout}>
            <AiOutlineLogout />
            LOG OUT
          </button>
        </>
      ) : (
        <span className="logoutButton" onClick={() => setShowLogin(!showLogin)}><AiOutlineLogin />
          {showLogin ? "LOGIN" : "REGISTER"}
        </span>
      )}
      <div className="menu">
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">
            <em>ty</em>Phoong Store
          </Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        {/* <li>
          <Link to="/login"> <FiLogIn style={{ marginRight: "5px" }} />
          Login  <IoMdCreate style={{ marginRight: "5px" }} />
          Signup</Link>
        </li> */}
        <li>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>0</span>
        <Link to="/cart">
          {" "}
          <img src={Cart} alt="" width="30" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
