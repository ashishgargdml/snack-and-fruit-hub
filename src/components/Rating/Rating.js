import React from "react";
import { Rating } from "react-simple-star-rating";
import './rating.css'

const Star = () => {
  return (
    <div className="rate-wrap">
      <Rating initialValue={4} size={16} />
      <p>(4.0)</p>
    </div>
  );
};

export default Star;
