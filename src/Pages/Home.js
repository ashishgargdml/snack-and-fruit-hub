import React from "react";
import Footer from "../components/Home/Footer/Footer";
import "./Home.css";
import Navbar from "../components/Home/Navbar/Navbar";
import Crousel from "../components/Home/Crousel/Crousel";
import MiddleBanner from "../components/Home/Middlebanner/MiddleBanner";
import Cards from "../components/Home/Crousel/Cards";
import FeatureFooter from "../components/Home/Footer/FeatureFooter";
import Items from "../components/Home/Items/Items";

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
