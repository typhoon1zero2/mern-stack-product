import React, { useState, useEffect } from "react";
import { DataProvider } from "../../GlobalState";
import Header from "../../components/Headers/header";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../../pages/AuthPage/AuthPage";
import { getUser } from "../../components/MainPages/utilities/users-service";
import Products from "../../components/MainPages/products/Products";
import DetailProduct from "../../components/MainPages/detailProduct/DetailProduct";
import Cart from "../../components/MainPages/cart/cart";
import NotFound from "../../components/MainPages/utilities/not-found/notFound";
import Footer from "../../components/Footer/footer";
import Carousel from "../../components/ProductCarousel/productCarousel";
import AboutUs from "../../components/MainPages/AboutUs/aboutUs";
import OrderHistory from "../../components/MainPages/history/OrderHistory";
import OrderDetails from "../../components/MainPages/history/OrderDetail";
import Categories from "../../components/MainPages/categories/categories";
import CreateProduct from "../../components/MainPages/createProduct/createProduct";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [toggle, setToggle] = useState(true);
  const [showLogin, setShowLogin] = useState(true);
  

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await getUser();
        setUser(currentUser);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [toggle]);

  return (
    <div className="App">
      <DataProvider>
        <Header
          user={user}
          setUser={setUser}
          toggle={toggle}
          setToggle={setToggle}
          showLogin={showLogin}
          setShowLogin={setShowLogin}
        />
        {user ? (
          <>
            <Carousel />

            <Routes>
              <Route
                path="/"
                element={<Products user={user} setUser={setUser} />}
              />
              <Route
                path="/detail/:id"
                element={<DetailProduct user={user} setUser={setUser} />}
              />
              <Route
                path="/about"
                element={<AboutUs user={user} setUser={setUser} />}
              />

              <Route
                path="/category"
                element={<Categories user={user} setUser={setUser} />}
              />

              <Route
                path="/create_product"
                element={<CreateProduct user={user} setUser={setUser} />}
              />
              <Route
                path="/edit_product/:id"
                element={<CreateProduct user={user} setUser={setUser} />}
              />

              <Route
                path="/history"
                element={<OrderHistory user={user} setUser={setUser} />}
              />

              <Route
                path="/history/:id"
                element={<OrderDetails user={user} setUser={setUser} />}
              />
              <Route
                path="/cart"
                element={<Cart user={user} setUser={setUser} />}
              />

              <Route
                path="*"
                element={<NotFound user={user} setUser={setUser} />}
              />
            </Routes>
          </>
        ) : (
          <AuthPage
            setUser={setUser}
            showLogin={showLogin}
            setShowLogin={setShowLogin}
          />
        )}
        <Footer />
      </DataProvider>
    </div>
  );
}
