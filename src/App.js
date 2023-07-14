import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/productInfo";
import Cart from "./Pages/Cart/shopCart";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import Account from "./Pages/Account/account";
import Navbar from "./components/Home/Navbar/Navbar";
import MiddleBanner from "./components/Home/Middlebanner/MiddleBanner";
import FeatureFooter from "./components/Home/Footer/FeatureFooter";
import Footer from "./components/Home/Footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    const res = (await axios.get("http://localhost:3003/users")).data;
    setUsers(res);
  };

  useEffect(() => {
    loadData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/loading.gif"
            alt="loading......"
          />
        </div>
      ) : (
        <>
          <div className="container">
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login users={users}/>} />
                <Route path="/product-info" element={<Product />} />
                <Route path="/shopping-cart" element={<Cart />} />
                <Route path="/my-account" element={<Account users={users}/>} />
              </Routes>
              <MiddleBanner />
            </main>
            <footer>
              <header>
                <FeatureFooter />
              </header>
              <main>
                <Footer />
              </main>
            </footer>
          </div>
        </>
      )}
    </>
  );
};

export default App;
