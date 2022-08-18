import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrderPage from "./pages/OrderPage";
import PayPage from "./pages/PayPage";
import FavoritesPage from "./pages/FavoritesPage";

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
    {
      link: "/order",
      element: <OrderPage />,
      id: 11,
    },
    {
      link: "/pay",
      element: <PayPage />,
      id: 12,
    },
    {
      link: "/favPage",
      element: <FavoritesPage />,
      id: 13,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((el) => (
        <Route path={el.link} key={el.id} element={el.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
