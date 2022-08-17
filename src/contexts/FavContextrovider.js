import React, { createContext, useContext, useReducer } from "react";
import {CART, FAV} from "../helpers/Consts";
import {getCountProductsInCart} from "../helpers/Functions";
import {calcSubPrice,calcTotalPrice} from "../helpers/Functions";

const favContext = createContext();

export const useFav = () => {
    return useContext(favContext);
};

const INIT_STATE = {
    fav: JSON.parse(localStorage.getItem("fav")),
    favLength: getCountProductsInCart(),
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case FAV.GET_FAV:
            return { ...state, fav: action.payload };
        case FAV.GET_FAV_LENGTH:
            return { ...state, favLength: action.payload };
        default:
            return state;
    }
}

const FavContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getFav = () => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if (!fav) {
            localStorage.setItem(
                "fav",
                JSON.stringify({ products: [], totalPrice: 0 })
            );

            fav = {
                products: [],
                totalPrice: 0,
            };
        }
        dispatch({
            type: FAV.GET_FAV,
            payload: fav,
        });
    };

    const addProductToFav = (product) => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if (!fav) {
            fav = {
                products: [],
                totalPrice: 0,
            };
        }

        let newProduct = {
            item: product,
            count: 1,
            subPrice: +product.price,
        };

        let productToFind = fav.products.filter(
            (elem) => elem.item.id === product.id
        );
        // если не найдется элемент в localStorage, то он добавит элемент в localStorage,а если найдет, то удалит
        if (productToFind.length === 0) {
            fav.products.push(newProduct);
        } else {
            fav.products = fav.products.filter(
                (elem) => elem.item.id !== product.id
            );
        }

        fav.totalPrice = calcTotalPrice(fav.products);

        localStorage.setItem("fav", JSON.stringify(fav));

        dispatch({
            type: FAV.GET_FAV,
            payload: fav,
        });
    };

    function deleteProductInFav(id) {
        let fav = JSON.parse(localStorage.getItem("fav"));

        fav.products = fav.products.filter((elem) => elem.item.id !== id);
        fav.totalPrice = calcTotalPrice(fav.products);
        localStorage.setItem("fav", JSON.stringify(fav));

        getFav();
        dispatch({
            type: FAV.GET_FAV_LENGTH,
            payload: fav,
        });
    }

    const changeProductCount = (count, id) => {
        let fav = JSON.parse(localStorage.getItem("fav"));

        fav.products = fav.products.map((product) => {
            if (product.item.id === id) {
                product.count = count;
                product.subPrice = calcSubPrice(product);
            }
            return product;
        });
        fav.totalPrice = calcTotalPrice(fav.products);

        dispatch({
            type: FAV.GET_FAV,
            payload: fav,
        });
    };

    function checkProductInFav(id) {
        let fav = JSON.parse(localStorage.getItem("fav"));

        if (fav) {
            let newFav = fav.products.filter((elem) => elem.item.id === id);
            return newFav.length > 0 ? true : false;
        } else {
            fav = {
                product: [],
                totalPrice: 0,
            };
        }
    }


    const values = {
        getFav,
        addProductToFav,
        changeProductCount,

        checkProductInFav,
        deleteProductInFav,
        fav: state.fav,
    };

    return <favContext.Provider value={values}>{children}</favContext.Provider>;
};

export default FavContextProvider;
