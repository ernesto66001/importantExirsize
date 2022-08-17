import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <Link className="header__nav_logo" to="/">
        GERAS<span style={{ color: "#DDF7F8" }}>.</span>im
      </Link>

      <div className="header__nav">
        <Link className="header__nav_way header__nav_wayHover1" to="/">
          Home
        </Link>
        <Link className="header__nav_way header__nav_wayHover2" to="/">
          Products
        </Link>
        <Link className="header__nav_way header__nav_wayHover3" to="/">
          Admin
        </Link>
        <Link className="header__nav_way header__nav_wayHover4" to="/">
          AboutUs
        </Link>
      </div>
      <div className="header__reg">
        {/* <Link to="/login"> */}
        <button
          className="header__reg_btn header__reg_log"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
        {/* </Link> */}
        <Link to="/register">
          <button className="header__reg_btn header__reg_sign">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
