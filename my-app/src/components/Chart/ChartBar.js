import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "o%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chartBar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{height: barFillHeight}}
        ></div>
      </div>
      <div classname="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;