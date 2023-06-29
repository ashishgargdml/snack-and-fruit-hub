import React from "react";
import Footer from "./Footer";
import "../assets/CSS/Home.css";
import Navbar from "./Navbar";
import Crousel from "./Crousel";
import MiddleBanner from "./MiddleBanner";

const Home = () => {
  return (
    <>
      <div id="grid">
        <Navbar />
        <div className="item content"><Crousel />
        <MiddleBanner /></div>
        <div className="footer item">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
