import '../styles/Slider.css';

import { memo } from 'react';

const Slider = ({ value, onSliderChange, minValue }) => {
  return (
    <>
      <input
        className="slider"
        type="range"
        min={minValue}
        max="40"
        value={value}
        onChange={(e) => onSliderChange(e.target.value)}
      />
      <label className="sliderlabel">
        Length (<b className="whitelabel">{value}</b>)
      </label>
    </>
  );
};

export default memo(Slider);
