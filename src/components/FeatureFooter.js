import React from "react";
import "../assets/CSS/FeatureFooter.css";
import icon1 from "../assets/img/icons/icon-1.svg";
import icon2 from "../assets/img/icons/icon-2.svg";
import icon3 from "../assets/img/icons/icon-3.svg";
import icon4 from "../assets/img/icons/icon-4.svg";
import icon5 from "../assets/img/icons/icon-5.svg";
// import icon6 from "../assets/img/icons/icon-5.svg";
const FeatureFooter = () => {
  return (
    <>
      <section class="featured section-padding">
        <div class="m-3">
          {" "}
          <div class="row">
            <div class="col">
              {" "}
              <div
                class="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay="0"
              >
                <div class="banner-icon">
                  {" "}
                  <img src={icon1} alt="" />{" "}
                </div>
                <div class="banner-text">
                  {" "}
                  <h3 class="icon-box-title">Best prices & offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".1s"
              >
                <div class="banner-icon">
                  {" "}
                  <img src={icon2} alt="" />
                </div>{" "}
                <div class="banner-text">
                  <h3 class="icon-box-title">Free delivery</h3>{" "}
                  <p>24/7 amazing services</p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col">
              <div
                class="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".2s"
              >
                <div class="banner-icon">
                  {" "}
                  <img src={icon3} alt="" />{" "}
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Great daily deal</h3>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".3s"
              >
                <div class="banner-icon">
                  {" "}
                  <img src={icon4} alt="" />{" "}
                </div>{" "}
                <div class="banner-text">
                  <h3 class="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".4s"
              >
                <div class="banner-icon">
                  <img src={icon5} alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>{" "}
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div
                class="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".5s"
              >
                <div class="banner-icon">
                  {" "}
                  <img  src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Safe delivery</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeatureFooter;
