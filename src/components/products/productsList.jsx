import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./productCard";

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
        sx={{
          display: "flex",
          mt: 2,
          flexDirection: "column",
        }}
      >
        <Box
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
          sx={{ m: 4, marginLeft: "40vw" }}
          count={count}
          page={page}
          onChange={handlePage}
        />
      </Box>
    </div>
  );
};

export default ProductList;
