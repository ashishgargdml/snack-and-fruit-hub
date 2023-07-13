import React, { useEffect, useState } from "react";
// import Home from "./Pages/Home/Home";
// import Product from "./Pages/Product/productInfo";
// import Cart from "./Pages/Cart/shopCart";
// import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
// import Account from "./Pages/Account/account";
// import Navbar from "./components/Home/Navbar/Navbar";
// import MiddleBanner from "./components/Home/Middlebanner/MiddleBanner";
// import FeatureFooter from "./components/Home/Footer/FeatureFooter";
// import Footer from "./components/Home/Footer/Footer";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
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
        <div className="container">
          {/* <div className="container">
          <header>
            <Navbar />
          </header>
          <main>
            <shopCart />
                      <Login />
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
        </div> */}
        <Register />
        </div>
      )}
    </>
  );
};

export default App;
