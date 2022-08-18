import React from "react";
import ProductsList from "../components/Products/productsList";
import { Box } from "@mui/material";
import SideBar from "../components/siseBar";
import "../styles/ProductsPage.css";

const ProductsPage = () => {
  return (
    <div className="ProductsPage">
      <Box className="ProductsPage__box" sx={{ display: "flex" }}>
        <SideBar />
        <ProductsList />
      </Box>
    </div>
  );
};

export default ProductsPage;
