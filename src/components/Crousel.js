import React from "react";
import slider1 from "../assets/img/slider-1.png";
import slider2 from "../assets/img/slider-2.png";
import './Crousel.css'

const Crousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 rounded-5" alt="slider1" />
            <div className="carousel-caption text-black custom">
              <h1 className="display-2 ">
                Don’t miss amazing
                <br />
                grocery deals
              </h1>
              <p className="mb-65">Sign up for the daily newsletter</p>
              <form className="news-form">
                <input
                className="border-0 rounded-start-pill"
                  type="email"
                  placeholder="Your emaill address"
                  id=".."
                />
                <button className="btn btn-success rounded-end-pill border-0" type="submit">
                  <strong>Subscribe</strong>
                </button>
              </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 rounded-5" alt="slider2" />
            <div className="carousel-caption text-black custom">
              <h1 className="display-2">
                {" "}
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p className="mb-65">Save upto 50% off on your first order</p>
              <form className="news-form">
                <input
                className="border-0 rounded-start-pill"
                  type="email"
                  placeholder="Your emaill address"
                  id=".."
                />
                <button className="btn btn-success rounded-end-pill border-0" type="submit" tabIndex="-1">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Crousel;
