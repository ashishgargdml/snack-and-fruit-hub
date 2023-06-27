import React from "react";
import "../assets/CSS/Dropdown.css";
import plus from "../assets/img/plus.png";

const DropDown = () => {
  return (
    <div className="main">
      <div className="flex">
        <div className="left">
          <ul>
            <li>Milk and Dairies</li>
            <li>Clothing & beauty</li>
            <li>Pet Food & Toy</li>
            <li>Baking Maaterial</li>
            <li>Fresh Fruit</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Wines & Drinks</li>
            <li>Fresh Seafood</li>
            <li>Fast Food</li>
            <li>Vegetables</li>
            <li>Bread and Juice</li>
          </ul>
        </div>
      </div>
      <p>
        <img src={plus} alt="showmore" />
        Show more...
      </p>
    </div>
  );
};

export default DropDown;
