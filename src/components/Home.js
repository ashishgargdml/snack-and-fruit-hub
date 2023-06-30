import React from "react";
import Footer from "./Footer";
import "../assets/CSS/Home.css";
import Navbar from "./Navbar";
import Crousel from "./Crousel";
import MiddleBanner from "./MiddleBanner";
import Cards from "./Cards";

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
        <MiddleBanner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
