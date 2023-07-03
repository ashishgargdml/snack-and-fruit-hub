import React from "react";
import "../assets/CSS/item.css";
import { smallRight } from "./images";

const Items = () => {
  return (
    <>
      <section className="banners mb-25">
        <div className="banner-container">
          <div class="card text-bg-dark custom-banners">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png"
              class="card-img"
              alt="banner-1"
            />
            <div class="card-img-overlay">
              <h4 class="card-title text-black">
                Everyday Fresh & Clean with Our Products
              </h4>
              <p class="card-text">
                <a href="shop-grid-right.html" class="btn btn-xs">
                  Shop Now -{'>'}
                </a>
              </p>
            </div>
          </div>
          <div class="card text-bg-dark custom-banners">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png"
              class="card-img"
              alt="banner-2"
            />
            <div class="card-img-overlay">
              <h4 class="card-title text-black">
                Make your Breakfast Healthy and Easy
              </h4>
              <p class="card-text">
                <a href="shop-grid-right.html" class="btn btn-xs">
                  Shop Now -{'>'}
                </a>
              </p>
            </div>
          </div>
          <div class="card text-bg-dark custom-banners">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png"
              class="card-img"
              alt="banner-3"
            />
            <div class="card-img-overlay">
              <h4 class="card-title text-black">
                The best Organic Products Online
              </h4>
              <p class="card-text">
                <a href="shop-grid-right.html" class="btn btn-xs">
                  Shop Now -{'>'}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        class="section-title style-2 wow animate__ animate__fadeIn animated d-flex justify-content-between"
        style={{ visibility: "visible", animationName: "fadeIn" }}
      >
        <h3>Popular Products</h3>
        <ul class="nav  links custom-links-list" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="nav-tab-one"
              data-bs-toggle="tab"
              data-bs-target="#tab-one"
              type="button"
              role="tab"
              aria-controls="tab-one"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nav-tab-two"
              data-bs-toggle="tab"
              data-bs-target="#tab-two"
              type="button"
              role="tab"
              aria-controls="tab-two"
              aria-selected="false"
            >
              Milks &amp; Dairies
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nav-tab-three"
              data-bs-toggle="tab"
              data-bs-target="#tab-three"
              type="button"
              role="tab"
              aria-controls="tab-three"
              aria-selected="false"
            >
              Coffes &amp; Teas
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nav-tab-four"
              data-bs-toggle="tab"
              data-bs-target="#tab-four"
              type="button"
              role="tab"
              aria-controls="tab-four"
              aria-selected="false"
            >
              Pet Foods
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nav-tab-five"
              data-bs-toggle="tab"
              data-bs-target="#tab-five"
              type="button"
              role="tab"
              aria-controls="tab-five"
              aria-selected="false"
            >
              Meats
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nav-tab-six"
              data-bs-toggle="tab"
              data-bs-target="#tab-six"
              type="button"
              role="tab"
              aria-controls="tab-six"
              aria-selected="false"
            >
              Vegetables
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="nav-tab-seven"
              data-bs-toggle="tab"
              data-bs-target="#tab-seven"
              type="button"
              role="tab"
              aria-controls="tab-seven"
              aria-selected="false"
            >
              Fruits
            </button>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <a href="shop-product-right.html">
              <img
                class="default-img card-img-top"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg"
                alt=""
              />
              <img
                class="hover-img"
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
                alt=""
              />
            </a>
            <div class="card-body">
              <p class="card-title">Snack</p>
              <p class="card-text">
                Seeds of Change Organic Quinoa, Brown, & Red Rice
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
