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
  logo,
  loc,
  userIcon,
  wishlistIcon,
  cartIcon,
  compareIcon,
} from "./images";

const Navbar = () => {
  return (
    <div>
      <div className="row align-item-center top-header">
        <ul className="nav nav-pills col-xl-4 col-lg-4">
          <li className="nav-item">
            <a className="nav-link" href="/">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              My Account
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Wishlist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Order Tracking
            </a>
          </li>
        </ul>
        <div className="nav align-item-center col-xl-5 col-lg-4">
          <li className="nav-item" id="banner">
            <a className="nav-link" href="/">
              Banner
            </a>
          </li>
        </div>
        <ul className="nav nav-pills col-xl-3 col-lg-4">
          <li className="nav-item">
            <a className="nav-link d-flex" href="/">
              {" "}
              Need help? Call Us:<p> + 1800 900</p>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              English
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  <img src={fr} alt="flag-fr" />
                  Francias
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <img src={dt} alt="flag-dt" />
                  Deutchs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <img src={ru} alt="flag-ru" />
                  Pусский
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              USD
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  <img src={fr} alt="flag-fr" />
                  INR
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <img src={dt} alt="flag-dt" />
                  MBP
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  <img src={ru} alt="flag-ru" />
                  EU
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sub-header">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="/">
            <img src={logo} alt="logo" width={'180px'} />
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex custom-input" action="/">
                <select className="select-active border-0" id="..">
                  <option>All Categories</option>
                  <option>Milks and Dairies</option>
                  <option>Wines & Alcohol</option>
                  <option>Clothing & Beauty</option>
                  <option>Pet Foods & Toy</option>
                  <option>Fast food</option>
                  <option>Baking material</option>
                  <option>Vegetables</option>
                  <option>Fresh Seafood</option>
                  <option>Noodles & Rice</option>
                  <option>Ice cream</option>
                </select>
                <input type="text" id="." placeholder="Search for items..." />
              </form>
              <li className="nav-item dropdown d-flex custom-drop-style">
                <img src={loc} alt="location" height={"16px"} />
                <select className="form-select " id="floatingSelect">
                  <option defaultValue>Alabama</option>
                  <option>
                    {/* <input placeholder="Your location" /> */}
                  </option>
                  <option className="nav-item" value="1">
                    Alabama
                  </option>
                  <option value="2">Alaska</option>
                  <option value="3">Arizona</option>
                  <option value="3">Delaware</option>
                  <option value="3">Florida</option>
                  <option value="3">Georgia</option>
                  <option value="3">Hawaii</option>
                  <option value="3">Indiana</option>
                  <option value="3">Maryland</option>
                  <option value="3">Nevada</option>
                  <option value="3">New Jersey</option>
                  <option value="3">New Mexico</option>
                  <option value="3">New York</option>
                </select>
              </li>
            </ul>
            <div className="d-flex right-items">
              <div className="header-action-icon-2 d-flex">
                <a href="shop-compare.html">
                  <img className="svgInject" alt="Nest" src={compareIcon} />
                  {/* <span className="pro-count blue">3</span> */}
                </a>
                <a href="shop-compare.html">Compare</a>
              </div>
              <div className="header-action-icon-2 d-flex">
                <a href="shop-wishlist.html">
                  <img className="svgInject" alt="Nest" src={wishlistIcon} />
                  {/* <span className="pro-count blue">6</span> */}
                </a>
                <a href="shop-wishlist.html">Wishlist</a>
              </div>
              <div className="header-action-icon-2 d-flex">
                <a className="mini-cart-icon" href="shop-cart.html">
                  <img alt="Nest" src={cartIcon} />
                  {/* <span className="pro-count blue">2</span> */}
                </a>
                <a href="">Cart</a>
              </div>
              <div className="header-action-icon-2">
                <a href="page-account.html">
                  <img className="svgInject" alt="Nest" src={userIcon} />
                </a>
                <a href="page-account.html">Account</a>
                {/* <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-user mr-10"></i>My Account
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-location-alt mr-10"></i>Order
                            Tracking
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-label mr-10"></i>My Voucher
                          </a>
                        </li>
                        <li>
                          <a href="shop-wishlist.html">
                            <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                          </a>
                        </li>
                        <li>
                          <a href="page-account.html">
                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                            Setting
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <i className="fi fi-rs-sign-out mr-10"></i>Sign out
                          </a>
                        </li>
                      </ul>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-lg-top fs-6 fw-bold last-header">
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
          <div
            className="collapse navbar-collapse items"
            id="navbarSupportedContent"
          >
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
