import React from "react";
import Footer from "./Footer";
import "../assets/CSS/Home.css";
import Navbar from "./Navbar";
import Crousel from "./Crousel";

const Home = () => {
  return (
    <>
      <div id="grid">
        <Navbar />
        <div className="item content"><Crousel /></div>
        <div className="footer item">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
