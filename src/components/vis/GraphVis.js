import React from "react";
import Graph from "react-graph-vis";

const graph = {
  nodes: [
    { id: 1, label: "Node 1", title: "node 1 tootip text", color: "#e04141" },
    { id: 2, label: "Node 2", title: "node 2 tootip text", color: "#e09c41" },
    { id: 3, label: "Node 3", title: "node 3 tootip text", color: "#e0df41" },
    { id: 4, label: "Node 4", title: "node 4 tootip text", color: "#7be041" },
    { id: 5, label: "Node 5", title: "node 5 tootip text", color: "#41e0c9" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ],
};

const options = {
  layout: {
    hierarchical: true,
  },
  edges: {
    color: "#000000",
  },
  height: "500px",
  width: "500px",
};

const events = {
  select: function (event) {
    let { nodes, edges } = event;
  },
};

const GraphVis = () => {
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      //   getNetwork={(network) => {
      //     //  if you want access to vis.js network api you can set the state in a parent component using this property
      //   }}
    />
  );
};

export default GraphVis;
