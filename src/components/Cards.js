import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { left, right } from "./images";
import axios from "axios";
import { useEffect, useState } from "react";
import "../assets/CSS/Cards.css";

const Cards = () => {
  const [data, setData] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    slidesToShow: 10,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const loadData = async () => {
    const response = (await axios.get("http://localhost:3003/hotels")).data;
    setData(response);
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {data.length ? (
        <div className="content">
          <div className="d-flex justify-content-between">
            <div className="title d-flex ">
              <h2 style={{marginRight:"1.2em"}}>Featured Categories</h2>
              <ul className="list-inline navcl links">
                <li className="list-inline-item nav-item">
                  <a className="nav-link mr-3" href="shop-grid-right.html">
                    Cake &amp; Milk
                  </a>
                </li>
                <li className="list-inline-item nav-item">
                  <a className="nav-link" href="shop-grid-right.html">
                    Coffes &amp; Teas
                  </a>
                </li>
                <li className="list-inline-item nav-item">
                  <a className="nav-link active" href="shop-grid-right.html">
                    Pet Foods
                  </a>
                </li>
                <li className="list-inline-item nav-item">
                  <a className="nav-link" href="shop-grid-right.html">
                    Vegetables
                  </a>
                </li>
              </ul>
            </div>
            <div className="controls custom-btn-ctrl">
            <button onClick={sliderRef?.slickPrev}>
              <img src={left} alt="left" />
            </button>
            <button onClick={sliderRef?.slickNext}>
              <img src={right} alt="right-arrow" />
            </button>
            </div>
          </div>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {data.map((card, index) => (
              <div key={index} className="mapped-content" style={{background :`${card.bg}`}}>
                <img src={card.imageSrc} alt={card.title} />
                <h6>{card.title}</h6>
                <p>{card.items} items</p>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Cards;
