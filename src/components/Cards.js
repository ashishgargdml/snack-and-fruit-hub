import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { left, right } from "./images";
import axios from "axios";
import { useEffect, useState } from "react";
import '../assets/CSS/Cards.css';

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
          <div className="controls custom-btn-ctrl">
            <button onClick={sliderRef?.slickPrev}>
              <img src={left} alt="left" />
            </button>
            <button onClick={sliderRef?.slickNext}>
              <img src={right} alt="right-arrow" />
            </button>
          </div>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {data.map((card, index) => (
              <div key={index} className="mapped-content">
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
