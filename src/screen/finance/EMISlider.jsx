import React from "react";
import Slider from "react-slider";

const EMISlider = ({ MIN, MAX, value, setValue, steps, points }) => {
  const styles = `
    .slider {
      width: 100%;
      height: 4px;
     
      margin-top: 20px;
    }

    .slider .thumb {
      width: 20px;
      height: 20px;
      cursor: grab;
      border-radius: 50%;
      border: 2px solid red;
      border-color: #2B3395;
      top: -8px;
      background-color: white;
    }
    .slider .mark {
      width: 2px;
      cursor: pointer;
      border-radius: 50%;
      border: 2px solid red;
      border-color: #2B3395;
      // background-color: white;
      top:1px;
    }
    
    .slider .track-0 {
      width: 100%;
      height: 4px;
      
      background: linear-gradient(to left, #2B3395, #2b3495ee);
    }
    .slider .track-1 {
      width: 100%;
      height: 4px;
      background-color: white;
    }
  `;

  return (
    <>
      <style>{styles}</style>

      <div className="pb-4 overflow-hidden">
        <Slider
          className="slider "
          // marks={points}
          min={MIN}
          max={MAX}
          step={steps}
          onChange={setValue}
          value={value}
        />
      </div>
    </>
  );
};

export default EMISlider;
