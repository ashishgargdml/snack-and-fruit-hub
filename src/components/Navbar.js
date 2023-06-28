import React from "react";
import "../assets/CSS/Navbar.css";
import plus from "../assets/img/plus.png";
import btnImg from "../assets/img/btn.png";
import headphones from "../assets/img/headphone.svg";

const Navbar = () => {
  return (
    <div>
      <div class="navbar">
        <div class="dropdown">
          <button className="browser-btn dropbtn"
          >
            <img src={btnImg} alt="img" />
            <p>Browse All Catagories</p>
          </button>
          <div class="dropdown-content">
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
          </div>
        </div>
        <a href="/">Deals</a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/"> Shop</a>
          <a href="/">Vendors</a>
          <a href="/">Mega menu</a>
          <a href="/">Blog </a>
          <a href="/">Pages </a>
          <a href="/">Contact </a>
          <a href="/" className="support"><img src={headphones} alt="icon"/><p><h2>1900 - 888</h2>24/7 Support Center</p></a>
      </div>
    </div>
  );
};

export default Navbar;
