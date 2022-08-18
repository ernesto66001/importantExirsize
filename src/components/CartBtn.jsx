import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../components/styleComp/CartBtn.css";
import { Link } from "react-router-dom";

const CartBtn = () => {
  return (
    <Link to="/cart">
      <div className="CartBtn">
        <ShoppingCartIcon className="CartBtn__icon" />
      </div>
    </Link>
  );
};

export default CartBtn;
