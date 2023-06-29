import React from "react";
import Footer from "./Footer";
import "../assets/CSS/Home.css";
import Navbar from "./Navbar";
import Crousel from "./Crousel";
import MiddleBanner from "./MiddleBanner";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
          <Crousel />
          <MiddleBanner />
      </main>
      <footer>

          <Footer />
      </footer>
    </>
  );
};

export default Home;
