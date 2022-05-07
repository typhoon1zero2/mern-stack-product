import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "../Headers/icons/menu.svg";
import Close from "../Headers/icons/close.svg";
import Cart from "../Headers/icons/cart.svg";
import { Link } from "react-router-dom";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";

import { logout } from "../../components/MainPages/utilities/users-service";

function Header({ user, setUser, toggle, setToggle, showLogin, setShowLogin }) {
  const state = useContext(GlobalState);
  const [cart] = state.UserApi.cart;
  const [menu, setMenu] = useState(false);

  function LogoutBtn() {
    logout();
    setUser = null;
    setToggle(!toggle);
  }

  let test = user;
  const styleMenu = {
    left: menu ? 0 : "-100%",
  };
  return (
    <header>
      <div>
        <a
          href={"https://www.linkedin.com/in/phong-nguyen-b9520b22b/"}
          target=""
        >
          <img
            className="phong-logo"
            src="https://res.cloudinary.com/deeztyphoon0529/image/upload/v1651854823/test/fuzdus6v8g6ngabbs9cc.jpg"
            alt="Phong-Logo"
          />
        </a>
      </div>
      <div className="topLogo">Japanese Classic Cars</div>
      {user ? (
        
        <div>
          <span>{`Welcome, ${user.name}!`}</span>
          <br />
          <button className="logoutButton" onClick={LogoutBtn}>
            <AiOutlineLogout />
            LOG OUT
          </button>
        </div>
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
              <div>
                <button>
                  <Link to="/create_product">Create Inventory</Link>
                </button>
                <br />
                <button>
                  <Link to="/edit_product/id"> Edit Inventory</Link>
                </button>
                <br />
                <button>
                  <Link to="/category">Create Inventory</Link>
                </button>
              </div>
            );
          }
        } else {
        }
      })()}
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo"></div>

      <ul>
        <li>
          <Link to="/">View Inventory</Link>
        </li>
        <li>
          <Link to="/history">View History</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>
        {/* <li>
          <Link to="/login"> <FiLogIn style={{ marginRight: "5px" }} />
          Login  <IoMdCreate style={{ marginRight: "5px" }} />
          Signup</Link>
        </li> */}
        <li onClick={() => setMenu(!menu)}>
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
    </header>
  );
}

export default Header;
