import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./products/products";
import DetailProduct from "./detailProduct/DetailProduct";
import Login from "./auth/LoginForm/LoginForm";
import Register from "./auth/SignUpForm/SignUpForm";
import Cart from "./cart/cart";
import NotFound from "./utilities/not-found/notFound";
import { getUser } from "./utilities/users-service";
import Footer from '../../components/Footer/footer';
import Carousel from '../../components/ProductCarousel/productCarousel'


function Pages() {
  const [user, setUser] = useState(getUser());
  return (
    <>
    <Carousel />
      <Routes>
        <Route path="/" element={<Products user={user} setUser={setUser} />} />
        <Route
          path="/detail/:id"
          element={<DetailProduct user={user} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        />

        <Route path="/cart" element={<Cart user={user} setUser={setUser} />} />

        <Route path="*" element={<NotFound user={user} setUser={setUser} />} />
      </Routes>
      <>
      <Footer />
      </>
    </>
  );
}

export default Pages;
