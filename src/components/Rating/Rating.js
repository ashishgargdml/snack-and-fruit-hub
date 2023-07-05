import React from 'react';
import { Rating } from 'react-simple-star-rating';

const Star = () => {
  return (
    <div><Rating initialValue={4} size={20}/>&nbsp;4.0</div>
  )
}

export default Star