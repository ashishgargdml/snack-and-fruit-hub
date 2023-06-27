import React, { useState } from "react";
import DropDown from "./DropDown";
import Footer from "./Footer";
import "../assets/CSS/Home.css";
import btnImg from "../assets/img/btn.png";

const Home = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div id="grid">
        <nav className="item nav">
          <button
            className="browser-btn"
            onClick={() => setFlag(true)}
            onBlur={() => setFlag(false)}
          >
            <img src={btnImg} alt="img" />
            <p>Browse All Catagories</p>
          </button>
          {flag === true ? <DropDown /> : <></>}
          {/* <a href="/">Deals</a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/"> Shop</a>
          <a href="/">Vendors</a>
          <a href="/">Mega menu</a>
          <a href="/">Blog </a> */}
        </nav>
        <div className="item content"></div>
        <div className="footer item">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
