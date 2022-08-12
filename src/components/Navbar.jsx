import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <Link className="header__nav_logo" to="/">
        GERAS<span style={{ color: "gold" }}>.</span>im
      </Link>

      <div className="header__nav">
        <Link className="header__nav_way" to="/">
          Watches
        </Link>
        <Link className="header__nav_way" to="/">
          Eyewear
        </Link>
        <Link className="header__nav_way" to="/">
          Accessories
        </Link>
        <Link className="header__nav_way" to="/">
          News
        </Link>
      </div>
      <div className="header__reg">
        <Link className="header__reg_log" to="/">
          Log in
        </Link>
        <Link className="header__reg_log" to="/">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
