import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])
  return (
    <>{loading? <div className="loader-container"><img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/loading.gif" alt="loading......"/></div>:<Home />}</>
  );
};

export default App;
