import React from "react";
import "./productInfo.css";
import Star from "../../components/Rating/Rating";
import { heart, shuffle, house, filter } from "../../components/Home/images";

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
          <a href="/">Shop</a>
          <span>Cart</span>
        </nav>
      </header>
      <main className="new">
        <div className="top-body">
          <div className="left-fix">
            <div className="top-left-up">
              <div className="left-img-body">
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
              <div className="right-content-body">
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
                    <li style={{ color: "white", background: "#3bb77e" }}>
                      60g
                    </li>
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
            </div>
            <div className="content-body">
              <div className="tabs">
                <ul>
                  <li>Description</li>
                  <li>Additional info</li>
                  <li>Vendor</li>
                  <li>Review(3)</li>
                </ul>
              </div>
              <div className="description">
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart.
                </p>
                <p>
                  Spluttered narrowly yikes left moth in yikes bowed this that
                  grizzly much hello on spoon-fed that alas rethought much
                  decently richly and wow against the frequent fluidly at
                  formidable acceptably flapped besides and much circa far over
                  the bucolically hey precarious goldfinch mastodon goodness
                  gnashed a jellyfish and one however because.
                </p>
                <ul className="info-list">
                  <li>
                    <span>Type Of Packing</span> Bottle
                  </li>
                  <li>
                    <span>Color</span> Green, Pink, Powder Blue, Purple
                  </li>
                  <li>
                    <span>Quantity Per Case</span>100ml
                  </li>
                  <li>
                    <span>Ethyl Alcohol</span>70%
                  </li>
                  <li>
                    <span>Piece In One</span>Carton
                  </li>
                </ul>
                <hr />
                <p>
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>
                <h4>Packaging & Delivery</h4>
                <hr />
                <p>
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly.
                </p>
                <p>
                  Scallop or far crud plain remarkably far by thus far iguana
                  lewd precociously and and less rattlesnake contrary caustic
                  wow this near alas and next and pled the yikes articulate
                  about as less cackled dalmatian in much less well jeering for
                  the thanks blindly sentimental whimpered less across
                  objectively fanciful grimaced wildly some wow and rose jeepers
                  outgrew lugubrious luridly irrationally attractively
                  dachshund.
                </p>
                <h4>Suggested Use</h4>
                <ul>
                  <li>Refrigeration not necessary.</li>
                  <li>Stir before serving</li>
                </ul>
                <h4>Other Ingredients</h4>
                <ul>
                  <li>Organic raw pecans, organic raw cashews.</li>
                  <li>
                    This butter was produced using a LTG (Low Temperature
                    Grinding) process
                  </li>
                  <li>
                    Made in machinery that processes tree nuts but does not
                    process peanuts, gluten, dairy or soy
                  </li>
                </ul>
                <h4>Warnings</h4>
                <ul>
                  <li>
                    Oil separation occurs naturally. May contain pieces of
                    shell.
                  </li>
                </ul>
              </div>

              {/* <div className="additional-info">
                <table>
                  <tbody>
                    <tr class="stand-up">
                      <th>Stand Up</th>
                      <td>
                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                      </td>
                    </tr>
                    <tr class="folded-wo-wheels">
                      <th>Folded (w/o wheels)</th>
                      <td>
                        <p>32.5″L x 18.5″W x 16.5″H</p>
                      </td>
                    </tr>
                    <tr class="folded-w-wheels">
                      <th>Folded (w/ wheels)</th>
                      <td>
                        <p>32.5″L x 24″W x 18.5″H</p>
                      </td>
                    </tr>
                    <tr class="door-pass-through">
                      <th>Door Pass Through</th>
                      <td>
                        <p>24</p>
                      </td>
                    </tr>
                    <tr class="frame">
                      <th>Frame</th>
                      <td>
                        <p>Aluminum</p>
                      </td>
                    </tr>
                    <tr class="weight-wo-wheels">
                      <th>Weight (w/o wheels)</th>
                      <td>
                        <p>20 LBS</p>
                      </td>
                    </tr>
                    <tr class="weight-capacity">
                      <th>Weight Capacity</th>
                      <td>
                        <p>60 LBS</p>
                      </td>
                    </tr>
                    <tr class="width">
                      <th>Width</th>
                      <td>
                        <p>24″</p>
                      </td>
                    </tr>
                    <tr class="handle-height-ground-to-handle">
                      <th>Handle height (ground to handle)</th>
                      <td>
                        <p>37-45″</p>
                      </td>
                    </tr>
                    <tr class="wheels">
                      <th>Wheels</th>
                      <td>
                        <p>12″ air / wide track slick tread</p>
                      </td>
                    </tr>
                    <tr class="seat-back-height">
                      <th>Seat back height</th>
                      <td>
                        <p>21.5″</p>
                      </td>
                    </tr>
                    <tr class="head-room-inside-canopy">
                      <th>Head room (inside canopy)</th>
                      <td>
                        <p>25″</p>
                      </td>
                    </tr>
                    <tr class="pa_color">
                      <th>Color</th>
                      <td>
                        <p>Black, Blue, Red, White</p>
                      </td>
                    </tr>
                    <tr class="pa_size">
                      <th>Size</th>
                      <td>
                        <p>M, S</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              {/* <div className="vendor">
                <div className="vendor-detail">
                  <img
                    src="http://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-18.svg"
                    alt="logo"
                  />
                  <div className="details">
                    <h6>Noodles Co.</h6>
                    <Star />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="related-products">
              <h2>Related products</h2>
              <div className="product-cards">
                <div className="card">
                  <div className="badge">
                    <p>Hot</p>
                  </div>
                  <a href="shop-product-right.html">
                    <img
                      className="default-img card-img-top"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-title">Ulstra Bass Headphone</p>
                    <Star />
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="badge cut">
                    <p>-12%</p>
                  </div>
                  <a href="shop-product-right.html">
                    <img
                      className="default-img card-img-top"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-title">Ulstra Bass Headphone</p>
                    <Star />
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="badge new">
                    <p>New</p>
                  </div>
                  <a href="shop-product-right.html">
                    <img
                      className="default-img card-img-top"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-title">Ulstra Bass Headphone</p>
                    <Star />
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="badge">
                    <p>Hot</p>
                  </div>
                  <a href="shop-product-right.html">
                    <img
                      className="default-img card-img-top"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg"
                      alt=""
                    />
                    <img
                      className="hover-img"
                      src="http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-2.jpg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-title">Ulstra Bass Headphone</p>
                    <Star />
                    <div className="product-price">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-fix">
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
                <input type="range" />
                <br />
                <div className="range">
                  <p>
                    From: <strong>$0</strong>
                  </p>
                  <p>
                    To: <strong>$2,000</strong>
                  </p>
                </div>
                <label>Color</label>
                <div className="chkbox">
                  <input type="checkbox" />
                  <label>Red (56)</label>
                  <br />
                  <input type="checkbox" />
                  <label>Green (78)</label>
                  <br />
                  <input type="checkbox" />
                  <label>Blue (54)</label>
                  <br />
                </div>
                <label>Item Condition</label>
                <div className="chkbox">
                  <input type="checkbox" />
                  <label>New (1506)</label>
                  <br />
                  <input type="checkbox" />
                  <label>Refurbished (27)</label>
                  <br />
                  <input type="checkbox" />
                  <label>Used (45)</label>
                  <br />
                </div>
                <button type="submit">
                  <img src={filter} alt="filter" />
                  Filter
                </button>
              </div>
              <div className="new-products">
                <h4>New products</h4>
                <div className="single-new">
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                    alt="thumbnail-1"
                    height={"80px"}
                  />
                  <div className="new-info">
                    <h5>Chen Cardigan</h5>
                    <p>
                      $99.50
                      <Star />
                    </p>
                  </div>
                </div>
                <div className="single-new">
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                    alt="thumbnail-2"
                    height={"80px"}
                  />
                  <div className="new-info">
                    <h5>Chen Sweater</h5>
                    <p>
                      $89.50
                      <Star />
                    </p>
                  </div>
                </div>
                <div className="single-new">
                  <img
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                    alt="thumbnail-3"
                    height={"80px"}
                  />
                  <div className="new-info">
                    <h5>Colorful Jacket</h5>
                    <p>
                      $25
                      <Star />
                    </p>
                  </div>
                </div>
              </div>
              <div className="banner-img">
                {/* <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png" alt="banner-11" height={'340px'} /> */}
                <div className="banner-text">
                  <span>Organic</span>
                  <h4>
                    Save 17% <br />
                    on <strong>Organic</strong>
                    <br />
                    Juice
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
