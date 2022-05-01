import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "../Headers/icons/menu.svg";
import Close from "../Headers/icons/close.svg";
import Cart from "../Headers/icons/cart.svg";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";
// import { IoMdCreate } from "react-icons/io";
// import { SiGnuprivacyguard } from "react-icons/si";
import { logout } from "../../components/MainPages/utilities/users-service";

function Header({ user, setUser, toggle, setToggle, showLogin, setShowLogin }) {
  const state = useContext(GlobalState);
  // const [isLogged] = state.UserApi.isLogged
  // const [isAdmin] = state.UserApi.isAdmin
  const [cart] = state.UserApi.cart;
  // const [menu, setMenu] = useState(false)

  function LogoutBtn() {
    logout();
    setUser = null;
    setToggle(!toggle);
  }

  let test = user;

  function handleCheck() {
    console.log(user.name === "typhoon");
  }

  return (
    <header>
      {user ? (
        <>
          <span>{`Welcome, ${user.name}!`}</span>
        </>
      ) : (
        <button
          className="loginButton"
          onClick={() => setShowLogin(!showLogin)}
        >
          <AiOutlineLogin />
          {showLogin ? "LOGIN" : "REGISTER"}
        </button>
      )}

      {(() => {
        if (user != null) {
          if (user.name === "admin") {
            return (
              <p>
                <Link to="/create_product"> Create Product</Link>
              </p>
            );
          }
        } else {
        }
      })()}
      <button onClick={handleCheck}> button </button>
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
          <Link to="/">Shop</Link>
        </li>
        <li>
            <Link to="/history">History</Link>
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
        <span>{cart.length}</span>
        <Link to="/cart">
          {" "}
          <img src={Cart} alt="" width="30" />
        </Link>
      </div>
      <button className="logoutButton" onClick={LogoutBtn}>
        <AiOutlineLogout />
        LOG OUT
      </button>
    </header>
  );
}

export default Header;
