import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./productCard";
import "../styleComp/ProductsList.css";

// import '../../styles/pagimation.css'
const ProductList = () => {
  const { products, getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <div className="ProductsList">
      <Box
        className="ProductsList__box"
        sx={{
          display: "flex",
          mt: 2,
          flexDirection: "column",
        }}
      >
        <Box
          className="ProductsList__box"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <Box
            className="ProductsList__box"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {products ? (
              currentData().map((item) => (
                <ProductCard item={item} key={item.id} />
              ))
            ) : (
              <h3>Loading...</h3>
            )}
          </Box>

          <Pagination
            variant="outlined"
            shape="rounded"
            sx={{ m: 4, marginLeft: "5vw" }}
            count={count}
            page={page}
            onChange={handlePage}
          />
        </Box>
      </Box>
    </div>
  );
};

export default ProductList;
