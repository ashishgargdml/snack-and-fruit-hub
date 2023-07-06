import React from "react";
import slider1 from "../../../assets/img/slider-1.png";
import slider2 from "../../../assets/img/slider-2.png";
import "./Crousel.css";

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
            <div className="newsletter mb-15 wow animate__animated animate__fadeIn">
              <div className="newsletter-inner d-flex position-relative carousel-img-1">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Don’t miss amazing
                    <br />
                    grocery deals
                  </h2>

                  <p className="mb-45">
                    Sign up for the daily newsletter
                    {/* <span className="text-brand">Nest Mart</span> */}
                  </p>

                  <form className="form-subcriber d-flex ">
                    <input
                      type="email"
                      placeholder="Your emaill address"
                      id=".."
                    />

                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div>{/* <img src={slider1} alt="newsletter" /> */}</div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="crousel-item active newsletter mb-15 wow animate__animated animate__fadeIn">
              <div className="newsletter-inner d-flex position-relative carousel-img-2">
                <div className="newsletter-content">
                  <h2 className="mb-20">
                    Fresh Vegetables
                    <br />
                    Big discount
                  </h2>

                  <p className="mb-45">
                    Save up to 50% off on your first order
                    {/* <span className="text-brand">Nest Mart</span> */}
                  </p>

                  <form className="form-subcriber d-flex ">
                    <input
                      type="email"
                      placeholder="Your emaill address"
                      id=".."
                    />

                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div>{/* <img src={slider2} alt="newsletter" /> */}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev w-auto"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next w-auto"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Crousel;
