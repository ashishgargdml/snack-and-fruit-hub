import React from "react";
import slider1 from "../assets/img/slider-1.png";
import slider2 from "../assets/img/slider-2.png";
import './Crousel.css'

const Crousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slider1} class="d-block w-100 rounded-5" alt="slider1" />
            <div className="carousel-caption text-black custom">
              <h1 className="display-2 ">
                Don’t miss amazing
                <br />
                grocery deals
              </h1>
              <p class="mb-65">Sign up for the daily newsletter</p>
              <form className="news-form">
                <input
                className="border-0 rounded-start-pill"
                  type="email"
                  placeholder="Your emaill address"
                />
                <button class="btn btn-success rounded-end-pill border-0" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slider2} class="d-block w-100 rounded-5" alt="slider2" />
            <div className="carousel-caption text-black custom">
              <h1 class="display-2">
                {" "}
                Fresh Vegetables
                <br />
                Big discount
              </h1>
              <p class="mb-65">Save upto 50% off on your first order</p>
              <form className="news-form">
                <input
                className="border-0 rounded-start-pill"
                  type="email"
                  placeholder="Your emaill address"
                />
                <button class="btn btn-success rounded-end-pill border-0" type="submit" tabindex="-1">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Crousel;
