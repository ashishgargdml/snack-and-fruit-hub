import React from "react";
import "../assets/CSS/Navbar.css";
import {
  plus,
  btnImg,
  headphones,
  category1,
  category2,
  category3,
  category4,
  category5,
  category6,
  category7,
  category8,
  category9,
  category10,
  ru,
  fr,
  dt,
} from "./images";

const Navbar = () => {
  return (
    <div>
    <div className="row align-item-center top-header">
    <ul className="nav nav-pills col-xl-4 col-lg-4">
  <li className="nav-item">
    <a className="nav-link" href="/">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">My Account</a>
  </li><li className="nav-item">
    <a className="nav-link" href="/">Wishlist</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Order Tracking</a>
  </li>
  </ul>
  <div className="nav align-item-center col-xl-5 col-lg-4">
  <li className="nav-item" id="banner">
    <a className="nav-link" href="/">Banner</a>
  </li>
  </div>
  <ul className="nav nav-pills col-xl-3 col-lg-4">
  <li className="nav-item">
    <a className="nav-link d-flex" href="/">  Need help? Call Us:<p> + 1800 900</p></a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">English</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/"><img src={fr} alt="flag-fr" />Francias</a></li>
      <li><a className="dropdown-item" href="/"><img src={dt} alt="flag-dt" />Deutchs</a></li>
      <li><a className="dropdown-item" href="/"><img src={ru} alt="flag-ru" />Pусский</a></li>
    </ul>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">USD</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="/"><img src={fr} alt="flag-fr" />INR</a></li>
      <li><a className="dropdown-item" href="/"><img src={dt} alt="flag-dt" />MBP</a></li>
      <li><a className="dropdown-item" href="/"><img src={ru} alt="flag-ru" />EU</a></li>
    </ul>
  </li>
</ul>
</div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-md-top fs-6 fw-bold">
        <div className="container-fluid">
        <div className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <button className="browser-btn dropbtn">
                    <img src={btnImg} alt="img" />
                    <p>Browse All Catagories</p>
                  </button>
                </a>
                <div className="dropdown-menu main">
                  <div className="flex">
                    <div className="left">
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category1} alt="category-1" />
                          Milk and Dairies
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category2} alt="category-2" />
                          Clothing & beauty
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category3} alt="category-3" />
                          Pet Food & Toy
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category4} alt="category-4" />
                          Baking Maaterial
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category5} alt="category-5" />
                          Fresh Fruit
                        </a>
                      </li>
                    </div>
                    <div className="right">
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category6} alt="category-6" />
                          Wines & Drinks
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category7} alt="category-7" />
                          Fresh Seafood
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category8} alt="category-8" />
                          Fast Food
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category9} alt="category-9" />
                          Vegetables
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          <img src={category10} alt="category-10" />
                          Bread and{" "}
                        </a>
                      </li>
                    </div>
                  </div>
                  <img src={plus} alt="icon" />
                  Show more...
                </div>
              </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse items" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ml-5">
                <a className="nav-link active" aria-current="page" href="/">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {" "}
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Vendors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Mega menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pages{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
