import React from 'react';
import {Route,Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import AboutUsPage from "./pages/aboutUsPage";
import AdminPage from "./pages/adminPage";
import CartPage from "./pages/cartPage";
import EditProductPage from "./pages/editProductPage";
import ProductDetailPage from "./pages/productDetailPage";
import ProductsPage from "./pages/productsPage";
import LoginPage from "./pages/loginPage";
import RegistrationPage from "./pages/registrationPage";
import NotFoundPage from "./pages/notFoundPage";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            link: "/",
            element: <HomePage />,
            id: 1,
        },
        {
            link: "/about",
            element: <AboutUsPage />,
            id: 2,
        },
        {
            link: "/admin",
            element: <AdminPage />,
            id: 3,
        },
        {
            link: "/cart",
            element: <CartPage />,
            id: 4,
        },
        {
            link: "/edit/:id",
            element: <EditProductPage />,
            id: 5,
        },
        {
            link: "/products/:id",
            element: <ProductDetailPage />,
            id: 6,
        },
        {
            link: "/products",
            element: <ProductsPage />,
            id: 7,
        },
        {
            link: "/login",
            element: <LoginPage />,
            id: 8,
        },
        {
            link: "/register",
            element: <RegistrationPage />,
            id: 9,
        },
        {
            link: "*",
            element: <NotFoundPage />,
            id: 10,
        },
    ];
    return (
        <Routes>

            {PUBLIC_ROUTES.map(el=>(
                <Route path={el.link} key={el.id} element={el.element}/>
            ))}
        </Routes>
    );
};

export default MainRoutes;