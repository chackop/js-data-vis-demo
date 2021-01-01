import React, { useState } from "react";
import ForceTreeChart from "./ForceTreeChart";
import ZoomableLineChartD3 from "./ZoomableLineChartD3";

const nodeData = {
  name: "😐",
  children: [
    {
      name: "🙂",
      children: [
        {
          name: "😀",
        },
        {
          name: "😁",
        },
        {
          name: "🤣",
        },
      ],
    },
    {
      name: "😔",
    },
  ],
};

const CustomD3Charts = () => {
  const [data, setData] = useState(
    Array.from({ length: 50 }, () => Math.round(Math.random() * 100))
  );

  return (
    <React.Fragment>
      <h3>Zoomable Line Chart with D3</h3>

      <ZoomableLineChartD3 data={data} />

      <button
        onClick={() => setData([...data, Math.round(Math.random() * 100)])}
      >
        Add data
      </button>

      <h3>Force Tree Chart D3</h3>
      {/* <ForceTreeChart data={nodeData} /> */}
    </React.Fragment>
  );
};

export default CustomD3Charts;
