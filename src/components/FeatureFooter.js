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
      <section className="featured section-padding">
        <div className="m-3">
          {" "}
          <div className="row">
            <div className="col">
              {" "}
              <div
                className="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay="0"
              >
                <div className="banner-icon">
                  {" "}
                  <img src={icon1} alt="" />{" "}
                </div>
                <div className="banner-text">
                  {" "}
                  <h3 className="icon-box-title">Best prices & offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".1s"
              >
                <div className="banner-icon">
                  {" "}
                  <img src={icon2} alt="" />
                </div>{" "}
                <div className="banner-text">
                  <h3 className="icon-box-title">Free delivery</h3>{" "}
                  <p>24/7 amazing services</p>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col">
              <div
                className="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".2s"
              >
                <div className="banner-icon">
                  {" "}
                  <img src={icon3} alt="" />{" "}
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Great daily deal</h3>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".3s"
              >
                <div className="banner-icon">
                  {" "}
                  <img src={icon4} alt="" />{" "}
                </div>{" "}
                <div className="banner-text">
                  <h3 className="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".4s"
              >
                <div className="banner-icon">
                  <img src={icon5} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div
                className="banner-left-icon d-flex align-items-center wow animateanimated animatefadeInUp"
                data-wow-delay=".5s"
              >
                <div className="banner-icon">
                  {" "}
                  <img  src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Safe delivery</h3>
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
