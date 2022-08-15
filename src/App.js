import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/footer";

import { Box } from "@mui/material";
import CartContextProvider from "./contexts/CartContextProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
            <Navbar />
            <Box sx={{ marginLeft: "15vw" }}>
              <MainRoutes />
            </Box>
            <Footer sx={{marginTop:'30px'}}/>
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
