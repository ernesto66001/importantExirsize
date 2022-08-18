import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { slide as Menu } from "react-burger-menu";

const Navbar = () => {
  const menu = {
    position: "fixed",
  };
  const navigate = useNavigate();

  function showSettings(event) {
    event.preventDefault();
  }
  return (
    <div className="header">
      <Link className="header__nav_logo" to="/">
        GERAS<span style={{ color: "#DDF7F8" }}>.</span>im
      </Link>

      <div className="header__nav">
        <Link className="header__nav_way header__nav_wayHover1" to="/">
          Home
        </Link>
        <Link className="header__nav_way header__nav_wayHover2" to="/products">
          Products
        </Link>
        <Link className="header__nav_way header__nav_wayHover3" to="/admin">
          Admin
        </Link>
        <Link className="header__nav_way header__nav_wayHover4" to="/about">
          AboutUs
        </Link>
      </div>
      <div className="header__reg">
        <button
          className="header__reg_btn header__reg_log"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>

        <Link to="/register">
          <button className="header__reg_btn header__reg_sign">Sign Up</button>
        </Link>
      </div>
      <div className="burger">
        <MenuIcon />
        <Menu className="burger__menu">
          <Link to="/">
            <a id="home" className="menu-item">
              Home
            </a>
          </Link>
          <Link to="/products">
            <a id="home" className="menu-item">
              Products
            </a>
          </Link>
          <Link to="/admin">
            <a id="home" className="menu-item">
              Admin
            </a>
          </Link>
          <Link to="/aboutus">
            <a id="home" className="menu-item">
              AboutUs
            </a>
          </Link>
          <Link to="/login">
            <a id="home" className="menu-item">
              Log in
            </a>
          </Link>
          <Link to="/register">
            <a id="home" className="menu-item">
              Sign up
            </a>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
