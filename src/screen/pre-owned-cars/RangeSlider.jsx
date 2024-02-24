import React from "react";
import Slider from "react-slider";

const RangeSlider = ({ MIN, MAX, values, setValues,steps }) => {
  const styles = `
  .slider {
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #00BAB8, #0BF2B3);
    margin-top : 20px;
  }

  .slider .thumb {
    width: 20px;
    height: 20px;
    cursor: grab;
    border-radius: 50%;
    border: 2px solid red;
    border-color: #2B3395;
    top:-9px;
    background-color: white;
  }

  // .track-1 {
  //   background-color: red;
  //   z-index: 40;
  // }

  .slider .track-0 {
    width: 100%;
    height: 4px;
    background-color: #F4F4F4;
   
  }
  .slider .track-1 {
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #2B3395, #2b3495ee);
  }
  .slider .track-2 {
    width: 100%;
    height: 4px;
    background: #F4F4F4;
  }
  
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="pb-4 overflow-hidden">
        <Slider
          className="slider "
          min={MIN}
          max={MAX}
          step={steps}
          onChange={setValues}
          value={values}
        />
      </div>
    </>
  );
};

export default RangeSlider;
