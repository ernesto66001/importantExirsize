import Footer from "./components/footer";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import MainRoutes from "./mianRoutes";
import ProductContextProvider from "./contexts/ProductContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <div className="App">
        <ProductContextProvider>
            <CartContextProvider>
      <Navbar />
        <MainRoutes/>
      <Footer sx={{marginTop:'30px'}}/>
            </CartContextProvider>
        </ProductContextProvider>


    </div>
  );
}

export default App;
