import React from "react";
import Footer from "../components/Home/Footer";
import "../assets/CSS/Home.css";
import Navbar from "../components/Home/Navbar";
import Crousel from "../components/Home/Crousel";
import MiddleBanner from "../components/Home/MiddleBanner";
import Cards from "../components/Home/Cards";
import FeatureFooter from "../components/Home/FeatureFooter";
import Items from "../components/Home/Items";

const Home = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Home;
