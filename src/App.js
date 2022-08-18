import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/Footer";

import { Box } from "@mui/material";
import CartContextProvider from "./contexts/CartContextProvider";

import FavContextProvider from "./contexts/FavContextrovider";

import { BrowserRouter } from "react-router-dom";

import CartBtn from "./components/CartBtn";
import FavBtn from "./components/FavBtn";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <FavContextProvider>
            <CartContextProvider>
              <Navbar />
              <Box sx={{ marginLeft: "15vw" }}>
                <MainRoutes />
              </Box>
              <FavBtn />
              <CartBtn />
              <Footer />
            </CartContextProvider>
          </FavContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
