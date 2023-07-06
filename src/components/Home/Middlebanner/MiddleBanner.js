import React from "react";
import newsLetter from "../../../assets/img/banners/midBanner2.png";
import "./MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <>
      <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
        <div className="newsletter-inner d-flex position-relative">
          <div className="newsletter-content">
            <h2 className="mb-20">
              Stay home & get your daily <br />
              needs from our shop
            </h2>

            <p className="mb-45">
              Start You'r Daily Shopping with{" "}
              <span className="text-brand">Nest Mart</span>
            </p>

            <form className="form-subcriber d-flex ">
              <input
                type="email"
                placeholder="Your emaill address"
                id=".."
              />

              <button
                className="btn"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="image-wraper">
            <img src={newsLetter} alt="newsletter" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleBanner;
