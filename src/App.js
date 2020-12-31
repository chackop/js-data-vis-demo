import React from "react";
import "./App.css";
import CustomD3Charts from "./components/customD3";
import LineRechart from "./components/Rechart/LineRechart";
import ToastUI from "./components/toastUI";
import GraphVis from "./components/vis/GraphVis";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Network graph using Vis</h2>
          <GraphVis />
        </div>
        <div>
          <h2>Line Graph Using Rechart</h2>
          <LineRechart />
        </div>
        <div>
          <h2>Custom D3 Charts</h2>
          <CustomD3Charts />
        </div>
        <div>
          <h2>Toast UI</h2>
          <ToastUI />
        </div>
      </header>
    </div>
  );
}

export default App;
