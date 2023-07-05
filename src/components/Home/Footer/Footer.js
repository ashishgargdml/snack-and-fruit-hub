import React from "react";
import "./Footer.css";
import logo from "../../../assets/img/logo.svg";
import phone from "../../../assets/img/phone.png";
import fb from "../../../assets/img/fb.png";
import insta from "../../../assets/img/ig.png";
import twitter from "../../../assets/img/twitter.png";
import pinterest from "../../../assets/img/pinterest.png";
import yt from "../../../assets/img/youtube.png";
import googlePlay from "../../../assets/img/google-play.jpg";
import appStore from "../../../assets/img/app-store.jpg";
import payment from "../../../assets/img/payment-method.png";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="address">
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>Awesome grocery store website template</li>
            <li>
              <strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah
              53127 United States
            </li>
            <li>
              <strong>Call Us:</strong>(+91) - 540-025-124553
            </li>
            <li>
              <strong>Email:</strong>sale@Nest.com
            </li>
            <li>
              <strong>Hours:</strong>10:00 - 18:00, Mon - Sat
            </li>
          </ul>
        </div>
        <div className="company">
          <ul>
            <h2>Company</h2>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Support Center</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="account">
          <ul>
            <h2>Account</h2>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help Ticket</li>
            <li>Shipping Details</li>
            <li>Compare products</li>
          </ul>
        </div>
        <div className="corporate">
          <ul>
            <h2>Corporate</h2>
            <li>Become a Vendor</li>
            <li>Affiliate Program</li>
            <li>Farm Business</li>
            <li>Farm Careers</li>
            <li>Our Suppliers</li>
            <li>Accessibility</li>
            <li>Promotions </li>
          </ul>
        </div>
        <div className="popular">
          <ul>
            <h2>Popular</h2>
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Eggs Substitutes</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Tea & Kombucha</li>
            <li>Cheese</li>
          </ul>
        </div>
        <div className="install-app">
          <ul>
            <h2>Install App</h2>
            <li>From App Store or Google Play</li>
            <li id="download">
              <img src={googlePlay} alt="play" />
              <img src={appStore} alt="app" />
            </li>
            <li>Secured Payment Gateways</li>
            <li><img src={payment} alt="payment"/></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-footer">
        <div className="copyright">
          <p>© 2022, Nest - HTML Ecommerce Template</p>
          <p>All rights reserved</p>
        </div>
        <div className="contact">
          <ul>
            <li className="working">
              <h2>
                <img src={phone} alt="phone" />
                1900 - 6666
              </h2>{" "}
              Working 8:00 - 22:00
            </li>
            <li className="all-time">
              <h2>
                <img src={phone} alt="phone" />
                1900 - 8888
              </h2>{" "}
              24/7 Support Center
            </li>
          </ul>
        </div>
        <div className="social">
          <p>
            Follow Us
            <img src={fb} alt="fb" />
            <img src={twitter} alt="twitter" />
            <img src={insta} alt="ig" />
            <img src={pinterest} alt="pinterest" />
            <img src={yt} alt="yt" />
          </p>
          Up to 15% discount on your first subscribe
        </div>
      </div>
    </>
  );
};

export default Footer;
