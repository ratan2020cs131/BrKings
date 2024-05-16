// PriceSlider.js
import React, { useState } from 'react';
import Slider from 'react-slider';
import './slider.css'; // We will add styles in this file

const PriceSlider = ({ min, max, onPriceChange }) => {
  const [priceRange, setPriceRange] = useState([min, max]);

  const handleChange = (values) => {
    setPriceRange(values);
    onPriceChange(values);
  };

  return (
    <div className="price-slider">
      <h3>Filter by Price</h3>
      <Slider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={min}
        max={max}
        defaultValue={[min, max]}
        onChange={handleChange}
        value={priceRange}
        pearling
        minDistance={10}
      />
      <div className="price-range">
        <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceSlider;


