import React, {createContext, useContext} from 'react';

export const productContext = createContext();

export const useProducts = () => {
    return useContext(productContext);
};
const ProductContextProvider = ({children}) => {
    return (
        <productContext.Provider>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;