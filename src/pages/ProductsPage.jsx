import React from 'react';
import ProductsList from "../components/Products/productsList";
import {Box} from "@mui/material";
import SideBar from "../components/siseBar";

const ProductsPage = () => {
    return (
        <Box sx={{ display: "flex" }}>
<SideBar/>
            <ProductsList/>
        </Box>
    );
};

export default ProductsPage;