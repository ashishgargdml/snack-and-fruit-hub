import React from "react";
import "./productInfo.css";
import Star from "../components/Rating/Rating";
import { heart, shuffle, house } from "../components/Home/images";

const Product = () => {
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Vegetables & Tubers</a>
          <span>Seed Of Change Organic</span>
        </nav>
      </header>
      <main className="main-container">
        <div className="top-body">
          <div className="top-left-body">
            <div className="img-body">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-2.jpg"
                alt="product-16-2"
              />
            </div>
            <div className="card-list">
              <img
                className="item"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                alt="1"
              />
              <img
                className="item"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                alt="2"
              />
              <img
                className="item"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                alt="3"
              />
              <img
                className="item"
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg"
                alt="4"
              />
            </div>
          </div>
          <div className="top-mid-body">
            <p>Sale Off</p>
            <h2>
              Seeds of Change <br />
              Organic Quinoa, Brown
            </h2>
            <Star />
            <h1>
              $38
              <div className="offering">
                <p>26% off</p>
                <h3>$52</h3>
              </div>
            </h1>
            <div className="short-desc">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br />
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi,
                <br /> odio minus dolore impedit fuga eum eligendi.
              </p>
            </div>
            <div className="size-weight-chart">
              <ul>
                <strong> Size/weight :</strong>
                <li>50g</li>
                <li style={{ color: "white", background: "#3bb77e" }}>60g</li>
                <li>80g</li>
                <li>100g</li>
                <li>150g</li>
              </ul>
            </div>
            <div className="extarlinks">
              <input type="number" defaultValue={1} min={1} />
              <button type="submit">Add to cart</button>
              <a href="/">
                <img src={heart} alt="wishlist" />
              </a>
              <a href="/">
                <img src={shuffle} alt="shuffle" height={"42px"} />
              </a>
            </div>
            <div className="product-info">
              <ul>
                <li>
                  Type: <p>Organic</p>
                </li>
                <li>
                  MFG: <p>July 07, 2023</p>
                </li>
                <li>
                  Life: <p>70days</p>
                </li>
              </ul>
              <ul>
                <li>
                  Sku: <p>FWM15VKT</p>
                </li>
                <li>
                  Tags: <p>Snack, Organic, Brown</p>
                </li>
                <li>
                  Stock: <p>8 Items In Stock</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="top-right-body">
            <div className="catagory">
              <h4 className="cat-head">Catagory</h4>
              <ul>
                <li>
                  <a href="/">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                      alt="cat-1"
                    />
                    Milk & Dairies
                  </a>
                  <p>30</p>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg"
                      alt="cat-2"
                    />
                    Clothing
                  </a>
                  <p>35</p>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg"
                      alt="cat-3"
                    />
                    Pet Foods
                  </a>
                  <p>42</p>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg"
                      alt="cat-4"
                    />
                    Baking Material
                  </a>
                  <p>68</p>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg"
                      alt="cat-5"
                    />
                    Fresh Fruit
                  </a>
                  <p>87</p>
                </li>
              </ul>
            </div>
            <div className="price">
              <h4 className="fill-by">Fill by Price</h4>
              <input type="range" /><br />
              <label>Color</label>
              <div className="chkbox">
                <input type="checkbox" />
                <label>Red (56)</label><br />
                <input type="checkbox" />
                <label>Green (78)</label><br />
                <input type="checkbox" />
                <label>Blue (54)</label><br />
              </div>
              <label>Item Condition</label>
              <div className="chkbox">
                <input type="checkbox" />
                <label>New (1506)</label><br />
                <input type="checkbox" />
                <label>Refurbished (27)</label><br />
                <input type="checkbox" />
                <label>Used (45)</label><br />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
