import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import "../styleComp/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(productDetails);

  return (
    <div className="ProductDetails">
      <div className="ProductDetails__mainBlock">
        <img
          src={productDetails.picture}
          alt=""
          className="ProductDetails__img"
        />

        <div className="ProductDetails__Info">
          <div className="ProductDetails__Info_Name">
            <h1 className="ProductDetails__Info_NameH1">
              {productDetails.name}
            </h1>
            <p className="ProductDetails__Info_NameP">
              Type: {productDetails.type}
            </p>
            <p className="ProductDetails__Info_NameP2">
              Price: ${productDetails.price}
            </p>
          </div>
          <div className="ProductDetails__Info_Text">
            <p>{productDetails.description}</p>
          </div>
          <Link to="/order">
            <button className="ProductDetails__Info_Btn">Buy Now</button>
          </Link>
        </div>
        <div className="ProductDetails__Line_Left"></div>
        <div className="ProductDetails__Line_Right"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
