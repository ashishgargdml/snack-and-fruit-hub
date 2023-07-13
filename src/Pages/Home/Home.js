import React, { useEffect, useState } from "react";
import Footer from "../../components/Home/Footer/Footer";
import "./Home.css";
import axios from "axios";
import Navbar from "../../components/Home/Navbar/Navbar";
import Crousel from "../../components/Home/Crousel/Crousel";
import MiddleBanner from "../../components/Home/Middlebanner/MiddleBanner";
import Cards from "../../components/Home/Crousel/Cards";
import FeatureFooter from "../../components/Home/Footer/FeatureFooter";
import Items from "../../components/Home/Items/Items";

const Home = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = (await axios.get("http://localhost:3003/data")).data;
    setData(response);
  };
  useEffect(() => {
    loadData();
  }, []);
  // console.log(data[0].hotels)  
  const products = data.length >0 ? data[1].products : [];
  const catagories = data.length >0 ? data[0].catagories : [];

  return (
    <>
      <main>
        <Crousel />
        <div className="slider">
          <Cards catagories={catagories}/>
        </div>
        <div className="items-card">
          <Items products={products}/>
        </div>
      </main>
    </>
  );
};

export default Home;
