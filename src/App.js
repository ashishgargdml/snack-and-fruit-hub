import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import Product from "./Pages/productInfo";
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])
  return (
    <>{loading? <div className="loader-container"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/loading.gif" alt="loading......"/></div>:<Product />}</>
  );
};

export default App;
