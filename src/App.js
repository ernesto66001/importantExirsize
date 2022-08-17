import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from "./components/footer";

import { Box } from "@mui/material";
import CartContextProvider from "./contexts/CartContextProvider";
<<<<<<< HEAD
import FavContextProvider from "./contexts/FavContextrovider";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 92f1850e7004f2d23c7d7ba3c9a84f30216ac986

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
<<<<<<< HEAD
            <FavContextProvider>
            <CartContextProvider>
      <Navbar />
        <MainRoutes/>
      <Footer sx={{marginTop:'30px'}}/>
            </CartContextProvider>
            </FavContextProvider>
=======
          <CartContextProvider>
            <Navbar />
            <Box sx={{ marginLeft: "15vw" }}>
              <MainRoutes />
            </Box>
            <Footer sx={{marginTop:'30px'}}/>
          </CartContextProvider>
>>>>>>> 92f1850e7004f2d23c7d7ba3c9a84f30216ac986
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
