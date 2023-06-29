import React from "react";
import newsLetter from "../assets/img/banners/midBanner2.png";
import "../assets/CSS/MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <>
      <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
        <div className="">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="position-relative newsletter-inner d-flex flex-wrap justify-content-around">
                <div className="newsletter-content ">
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
                      className="border-0 rounded-start-pill"
                      type="email"
                      placeholder="Your emaill address"
                      id=".."
                    />

                    <button
                      className="btn btn-success rounded-end-pill border-0"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                <div>
                  <img src={newsLetter} alt="newsletter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleBanner;
