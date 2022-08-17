import Footer from "./components/footer";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import MainRoutes from "./mianRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import FavContextProvider from "./contexts/FavContextrovider";

function App() {
  return (
    <div className="App">
        <ProductContextProvider>
            <FavContextProvider>
            <CartContextProvider>
      <Navbar />
        <MainRoutes/>
      <Footer sx={{marginTop:'30px'}}/>
            </CartContextProvider>
            </FavContextProvider>
        </ProductContextProvider>


    </div>
  );
}

export default App;
