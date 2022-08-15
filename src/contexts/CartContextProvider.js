import React, { createContext, useContext } from "react";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};
const CartContextProvider = ({ children }) => {
  return <cartContext.Provider>{children}</cartContext.Provider>;
};

export default CartContextProvider;
