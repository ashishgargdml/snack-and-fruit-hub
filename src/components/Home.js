import React from "react";
import Footer from "./Footer";
import "../assets/CSS/Home.css";
import Navbar from "./Navbar";
import Crousel from "./Crousel";
import MiddleBanner from "./MiddleBanner";
import Cards from "./Cards";
import FeatureFooter from "./FeatureFooter";
import Items from "./Items";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Crousel />
        <div className="slider">
          <Cards />
        </div>
        <div className="items-card">
          <Items />
        </div>
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
    </>
  );
};

export default Home;
