import React from "react";
import { Link } from "react-router-dom";
import "../styles/OrderPage.css";

const OrderPage = () => {
  return (
    <div className="Order">
      <div className="OrderBlock">
        <div className="Order__input">
          <h5 className="Order__Input_h5">ФИО</h5>
          <input type="text" className="Order__Input_First" />
        </div>
        <div className="Order__input">
          <h5 className="Order__Input_h5">Email</h5>
          <input type="text" className="Order__Input_First" />
        </div>
        <div className="Order__input">
          <h5 className="Order__Input_h5">Phone Number</h5>
          <input type="text" className="Order__Input_First" />
        </div>
        <div className="Order__input">
          <h5 className="Order__Input_h5">Card number</h5>
          <input type="text" className="Order__Input_First" />
        </div>
        <Link to="/pay">
          <button className="Order__btn">BUY</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
