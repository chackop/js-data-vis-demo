import React, { useState } from "react";
import ZoomableLineChartD3 from "./ZoomableLineChartD3";

const CustomD3Charts = () => {
  const [data, setData] = useState(
    Array.from({ length: 50 }, () => Math.round(Math.random() * 100))
  );

  return (
    <React.Fragment>
      <h3>Zoomable Line Chart with D3 </h3>

      <ZoomableLineChartD3 data={data} />

      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>
    </React.Fragment>
  );
};

export default CustomD3Charts;
