import React, { useState } from "react";
import { house } from "../../components/Home/images";
import options from "../img/options.png";
import user from "../img/user.png";
import marker from "../img/marker.png";
import shbag from "../img/shopping-bag.png";
import shCart from "../img/shopping-cart.png";
import out from "../img/out.png";
import "./account.css";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [active, setActive] = useState("tab1");
  const navigate = useNavigate()
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Pages</a>
          <span>My Account</span>
        </nav>
      </header>
      <main className="main-body">
        <div className="left-content">
          <div className="dashboard-menu">
            <ul className="tablist">
              <li
                id="tab1"
                className={active === "tab1" ? "active" : ""}
                onClick={() => setActive("tab1")}
              >
                <img src={options} alt="i" />
                Dashboard
              </li>
              <li
                id="tab2"
                className={active === "tab2" ? "active" : ""}
                onClick={() => setActive("tab2")}
              >
                <img src={shbag} alt="i" />
                Orders
              </li>
              <li
                id="tab3"
                className={active === "tab3" ? "active" : ""}
                onClick={() => setActive("tab3")}
              >
                <img src={shCart} alt="i" />
                Track Your Order
              </li>
              <li
                id="tab4"
                className={active === "tab4" ? "active" : ""}
                onClick={() => setActive("tab4")}
              >
                <img src={marker} alt="i" />
                My Addres
              </li>
              <li
                id="tab5"
                className={active === "tab5" ? "active" : ""}
                onClick={() => setActive("tab5")}
              >
                <img src={user} alt="i" />
                Account Details
              </li>
              <li
                id="tab6"
                className={active === "tab6" ? "active" : ""}
                onClick={() => navigate('/login')}
              >
                <img src={out} alt="i" />
                Logout
              </li>
            </ul>
          </div>
        </div>
        <div className="right-content">
          {active === "tab1" ? (
            <div className="tab1">
              <h3>Hello Rosie!</h3>
              <p>
                {" "}
                From your account dashboard. you can easily check & view your
                <a href="/"> recent orders ,</a>
                <br />
                manage your<a href="/">
                  {" "}
                  shipping and billing address
                </a> and <a href="/"> edit your password and account details</a>
              </p>
            </div>
          ) : active === "tab2" ? (
            <div className="tab2">
              <h3>Your Orders</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1357</td>
                    <td>March 45, 2020</td>
                    <td>Processing</td>
                    <td>$125.00 for 2 item</td>
                    <td>
                      <a href="/" className="">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>#2468</td>
                    <td>June 29, 2020</td>
                    <td>Completed</td>
                    <td>$364.00 for 5 item</td>
                    <td>
                      <a href="/" className="">
                        View
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>#2366</td>
                    <td>August 02, 2020</td>
                    <td>Completed</td>
                    <td>$280.00 for 3 item</td>
                    <td>
                      <a href="/" className="">
                        View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : active === "tab3" ? (
            <div className="tab3">
              <h3>Orders tracking</h3>
              <div className="tab3-content">
                <p>
                  To track your order please enter your OrderID in the box below
                  and press "Track" button. This was given to you on your
                  receipt and in the confirmation email you should have
                  received.
                </p>
                <form method="post" className="tab3-form">
                  <div className="order-id">
                    <label>Order ID</label>
                    <input
                      name="orderID"
                      type="text"
                      placeholder="Found in your order confirmation email"
                    />
                  </div>
                  <div className="email">
                    <label>Billing Email</label>
                    <input
                      name="billing-email"
                      type="email"
                      placeholder="Email you used during checkout"
                    />
                  </div>
                  <button type="submit btn" className="submit">
                    Track
                  </button>
                </form>
              </div>
            </div>
          ) : active === "tab4" ? (
            <div className="tab4">
              <div className="tab4-content">
                <div className="billing-address">
                  <h3>Billing Address</h3>
                  <div className="address-body">
                    <address>
                      3522 Interstate
                      <br />
                      75 Business Spur,
                      <br />
                      Sault Ste. <br />
                      Marie, MI 49783
                    </address>
                    <p>New York</p>
                    <a href="/">Edit</a>
                  </div>
                </div>
                <div className="shipping-address">
                  <h5>Shipping Address</h5>
                  <div className="address-body">
                    <address>
                      4299 Express Lane
                      <br />
                      Sarasota, <br />
                      FL 34249 USA <br />
                      Phone: 1.941.227.4444
                    </address>
                    <p>Sarasota</p>
                    <a href="/">Edit</a>
                  </div>
                </div>
              </div>
            </div>
          ) : active === "tab5" ? (
            <div className="tab5-content">
              <h5>Account Details</h5>
              <p>
                Already have an account?<a href="/">Login instead!</a>
              </p>
              <form className="tab5-form" method="post">
                <div className="dname">
                  <label htmlFor="fname">
                    First Name*
                    <input type="text" name="name" required={true} />
                  </label>
                  <label htmlFor="lname">
                    Last Name*
                    <input type="text" name="lname" required={true} />
                  </label>
                </div>
                <label htmlFor="display-name">
                  Display Name*
                  <input type="text" name="display-name" required={true} />
                </label>
                <label htmlFor="email">
                  Email Address*
                  <input type="email" name="email" required={true} />
                </label>
                <label htmlFor="curr-pass">
                  Current Password*
                  <input type="password" name="curr-pass" required={true} />
                </label>
                <label htmlFor="new-pass">
                  New Password*
                  <input type="password" name="new-pass" required={true} />
                </label>
                <label htmlFor="confirm-pass">
                  Confirm Password*
                  <input type="password" name="confirm-pass" required={true} />
                </label>
                <div>
                  <button type="btn" className="submit">
                    Save Chnages
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="tab6">Tab 6</div>
          )}
        </div>
      </main>
    </>
  );
};

export default Account;
