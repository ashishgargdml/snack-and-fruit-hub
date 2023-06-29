import React from "react";
import newsLetter from "../assets/img/banners/midBanner2.png";
import "../assets/CSS/MiddleBanner.css";

const MiddleBanner = () => {
  return (
    <>
      <section class="newsletter mb-15 wow animate__animated animate__fadeIn">
        <div class="">
          <div class="row">
            <div class="col-lg-12 ">
              <div class="position-relative newsletter-inner d-flex flex-wrap justify-content-around">
                <div class="newsletter-content ">
                  <h2 class="mb-20">
                    Stay home & get your daily <br />
                    needs from our shop
                  </h2>

                  <p class="mb-45">
                    Start You'r Daily Shopping with{" "}
                    <span class="text-brand">Nest Mart</span>
                  </p>

                  <form class="form-subcriber d-flex ">
                    <input
                      className="border-0 rounded-start-pill"
                      type="email"
                      placeholder="Your emaill address"
                    />

                    <button
                      class="btn btn-success rounded-end-pill border-0"
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
