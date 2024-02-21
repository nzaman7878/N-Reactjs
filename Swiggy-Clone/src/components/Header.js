import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="">
      <div className="logo-container">
        <img className="" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="">
          <li className="">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About Us</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;