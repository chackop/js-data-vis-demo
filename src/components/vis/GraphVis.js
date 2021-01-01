import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";

const initgraph = {
  nodes: [
    { id: 1, label: "Node 1", title: "node 1 tootip text", color: "#e04141" },
    { id: 2, label: "Node 2", title: "node 2 tootip text", color: "#e09c41" },
    { id: 3, label: "Node 3", title: "node 3 tootip text", color: "#e0df41" },
    { id: 4, label: "Node 4", title: "node 4 tootip text", color: "#7be041" },
    { id: 5, label: "Node 5", title: "node 5 tootip text", color: "#41e0c9" },
  ],
  edges: [
    {
      from: 1,
      to: 2,
      label: "1to2",
      relation: "active",
      arrows: "to, from",
      color: { color: "green" },
    },
    {
      from: 1,
      to: 3,
      label: "1to3",
      relation: "inactive",
      arrows: "to, from",
      color: { color: "red" },
    },
    {
      from: 2,
      to: 3,
      label: "2to3",
      relation: "active",
      arrows: "to, from",
      color: { color: "green" },
    },
    {
      from: 2,
      to: 4,
      label: "2to4",
      relation: "inactive",
      arrows: "to, from",
      color: { color: "red" },
    },
    {
      from: 2,
      to: 5,
      label: "2to5",
      relation: "inactive",
      arrows: "to, from",
      color: { color: "red" },
    },
  ],
};

const options = {
  interaction: { hover: true },
  manipulation: {
    enabled: true,
  },
  layout: {
    hierarchical: true,
  },
  edges: {
    color: "#000000",
  },
  height: "500px",
  width: "500px",
};

const GraphVis = () => {
  const [selectnode, setselectnode] = useState("Node Selection");
  const [edgeactive, setedgeactive] = useState(false);
  const [graphdata, setgraphdata] = useState(initgraph);

  let selectedNodeTitle = `Selected node ${selectnode}`;

  const events = {
    select: function (event) {
      setselectnode(event.nodes[0]);
    },
    showPopup: (evt) => console.log("popupshow", evt),
  };

  const handleActive = (evt) => {
    setedgeactive(!edgeactive);
  };

  useEffect(() => {
    if (edgeactive) {
      let newEdges = initgraph.edges.filter(
        (item) => item.relation === "active"
      );
      let newGraphData = { ...initgraph, edges: newEdges };
      setgraphdata(newGraphData);
    }
  }, [edgeactive]);

  return (
    <>
      <form>
        {selectedNodeTitle && <h4>{selectedNodeTitle}</h4>}
        <label>Active connections</label>
        <input type="checkbox" onChange={handleActive} value={edgeactive} />
      </form>
      <Graph
        graph={graphdata}
        // nodes={graph.nodes}
        // edges={graph.edges}
        options={options}
        events={events}
      />
    </>
  );
};

export default GraphVis;
